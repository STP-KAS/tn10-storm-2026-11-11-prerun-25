// guest25.mjs (pre-run 25; guest24.mjs of pre-run 24 retry 1 with the label and the mount name changed). The kit inside the image is the
// fixed one (tn10-target-plan 1433a42: lane id from ttd's own start line), so no hand fix is needed. TESTNET-10 ONLY. No compile.
// It runs the guest kit (tools/ttt-guest-runner in STP-KAS/tn10-target-plan, binaries already built) inside a local
// Docker Desktop Linux container on the desk, whose send node is the desk's own TN10 node reached through Docker's
// host gateway (set in the kit's private run.env, never in git; nothing is published or forwarded outward).
// Steps: write ARM-GUEST into the guest run dir, start the container (arm-guest.sh --live: gates, ttd in exec mode, one
// ttflow match, one carrier at a time), wait for its end, then confirm on the desk node itself: every carrier id that ttflow
// logged is looked up in the accepted-transaction ids of the desk's virtual chain since the guest started. At control/GUEST-STOP
// (RETURN) or PROBE-STOP it runs stop-guest.sh (one DA read) and removes the container. Writes private/guest-total.json and
// logs/guest.jsonl (counts and sanitized texts only; no id, key, address, host or port).
import fs from "node:fs"; import { spawnSync } from "node:child_process";
const { CFG, P, sleep, to, connect } = await import("file:///" + String(process.env.STORM_KIT).replace(/\\/g, "/") + "/lib.mjs");
const G = CFG.guest_dir; const GR = G + "\\" + (CFG.guest_run_sub || "run"); const LIVE = CFG.guest_mode !== "dry"; /* the offline rehearsal sets guest_mode "dry": the kit's gate only, nothing sent */ const IMG = CFG.guest_image || "ttt-guest-kit:local"; const NAME = CFG.guest_container || "ttt-guest-r1";
const DOCKER = CFG.docker_exe || "C:\\Program Files\\Docker\\Docker\\resources\\bin\\docker.exe";
const OUT = P("logs", "guest.jsonl"); const TOT = P("private", "guest-total.json");
const clean = (s) => String(s).replace(/wss?:\/\/\S+/g, "<url>").replace(/https?:\/\/\S+/g, "<url>").replace(/\b\d{1,3}(\.\d{1,3}){3}(:\d+)?\b/g, "<ip>").replace(/[0-9a-f]{64}/gi, "<id>").replace(/kaspatest:[a-z0-9]+/g, "<addr>").replace(/\b(?:[a-z0-9-]+\.)+[a-z]{2,}(:\d+)?\b/gi, "<host>").replace(/:\d{4,5}\b/g, ":<port>").replace(/C:\\Users\\[^\\]+/gi, "C:\\Users\\Fermi").slice(0, 300);
const note = (o) => fs.appendFileSync(OUT, JSON.stringify({ ts: new Date().toISOString(), ...o }) + "\n");
const phase = (s) => fs.appendFileSync(P("logs", "phase.log"), new Date().toISOString().replace(/\.\d+Z$/, "Z") + " " + s + "\n");
const dk = (args, ms = 120000) => spawnSync(DOCKER, args, { encoding: "utf8", timeout: ms });
const gphase = () => { try { return fs.readFileSync(GR + "\\logs\\guest-phase.log", "utf8"); } catch { return ""; } };
const total = { started: null, mode: LIVE ? "live" : "dry", container: "desk-local", gate: null, ttflow_exit: null, submit_ok: 0, ids_logged: 0, accepted_on_desk: 0, accepted_steps: [], not_accepted_steps: [], first_error: null, reject_texts: [], da_games: null, stopped: null };
const save = () => fs.writeFileSync(TOT, JSON.stringify(total, null, 1));
const rpc = await connect(CFG.main_node_url, 3);
const startSink = (await to(rpc.getBlockDagInfo(), 10000)).sink;
total.started = new Date().toISOString();
fs.mkdirSync(GR + "\\control", { recursive: true });
try { fs.unlinkSync(GR + "\\control\\STOP"); } catch {}
fs.writeFileSync(GR + "\\control\\ARM-GUEST", "armed by the pre-run 25 desk runner after PRE-RUN-OPEN " + total.started + "\n");
dk(["rm", "-f", NAME], 60000);
const r = dk(["run", "-d", "--name", NAME, "--memory", "2g", "-v", G + "\\secret:/home/box/secure:ro", "-v", GR + ":/run25", IMG, "bash", "-c", "bash /workspace/ttt-runner/arm-guest.sh --run /run25 " + (LIVE ? "--live" : "--dry") + "; echo ARM_EXIT=$? >> /run25/logs/guest-phase.log; sleep infinity"]);
if (r.status !== 0) { total.first_error = "container start failed: " + clean(r.stderr || r.stdout); note({ ev: "start_fail", why: total.first_error }); phase("GUEST start-fail"); save(); }
else {
  phase("GUEST container-started (arm-guest.sh --live, desk-local send path)"); note({ ev: "started" });
  const end = Date.now() + 25 * 60000;
  while (Date.now() < end) { const t = gphase(); if (/ARM_EXIT=|GUEST end|GUEST abort/.test(t)) break; if (fs.existsSync(P("control", "PROBE-STOP"))) break; await sleep(3000); }
  await sleep(4000);
  const ph = gphase(); for (const l of ph.split("\n").filter((x) => /GUEST/.test(x))) note({ ev: "kit", line: clean(l) });
  const gm = ph.match(/GUEST (gate ok|abort reason=[^\n]+)/); total.gate = gm ? clean(gm[1]) : "not read";
  const fl = (() => { try { return fs.readFileSync(GR + "\\private\\guest\\ttflow.log", "utf8"); } catch { return ""; } })();
  const em = ph.match(/ttflow exit=(\d+) carriers_submit_ok=(\d+)/); if (em) { total.ttflow_exit = Number(em[1]); total.submit_ok = Number(em[2]); }
  const steps = []; for (const m of fl.matchAll(/(Step [0-9.]+ \([^)]*\)) accepted:\s*([0-9a-f]{64})/g)) steps.push({ step: m[1], id: m[2] });
  total.ids_logged = steps.length;
  const rj = [...new Set([...fl.split("\n").filter((l) => /rejected|not submitted|Rejected|panic|error/i.test(l)).map((l) => clean(l.replace(/\x1b\[[0-9;]*m/g, "")))])].slice(0, 6);
  total.reject_texts = rj; total.first_error = rj[0] || total.first_error;
  const tl = (() => { try { return fs.readFileSync(GR + "\\private\\guest\\ttd.log", "utf8"); } catch { return ""; } })();
  const tdErr = [...new Set(tl.split("\n").filter((l) => /rejected|Rejected|panic|ERROR/.test(l)).map((l) => clean(l.replace(/\x1b\[[0-9;]*m/g, ""))))].slice(0, 4);
  if (tdErr.length) total.ttd_errors = tdErr;
  fs.writeFileSync(P("private", "guest-ids.json"), JSON.stringify(steps));   // private: ids stay on the desk
  // confirm on the desk node: accepted ids along the virtual chain since the guest started
  const want = new Map(steps.map((s) => [s.id, s.step])); const got = new Set();
  const cEnd = Date.now() + 4 * 60000; let cursor = startSink;
  while (want.size && Date.now() < cEnd) {
    try { for (let k = 0; k < 50; k++) { const vc = await to(rpc.getVirtualChainFromBlock({ startHash: cursor, includeAcceptedTransactionIds: true }), 60000);
        for (const a of vc.acceptedTransactionIds || []) for (const id of a.acceptedTransactionIds || []) if (want.has(id)) got.add(id);
        const add = vc.addedChainBlockHashes || []; if ((vc.removedChainBlockHashes || []).length) cursor = startSink; if (!add.length) break; cursor = add[add.length - 1]; if (add.length < 1000) break; } }
    catch (e) { note({ ev: "vc_read_error", why: clean(e?.message || e) }); cursor = startSink; }
    if (got.size === want.size) break; await sleep(15000);
  }
  total.accepted_on_desk = got.size; total.accepted_steps = steps.filter((s) => got.has(s.id)).map((s) => s.step); total.not_accepted_steps = steps.filter((s) => !got.has(s.id)).map((s) => s.step);
  total.confirmed_at = new Date().toISOString();
  note({ ev: "confirm", submit_ok: total.submit_ok, ids_logged: total.ids_logged, accepted_on_desk: total.accepted_on_desk });
  phase(`GUEST confirm submit_ok=${total.submit_ok} ids_logged=${total.ids_logged} accepted_on_desk=${total.accepted_on_desk}`);
  save();
  while (!fs.existsSync(P("control", "GUEST-STOP")) && !fs.existsSync(P("control", "PROBE-STOP"))) await sleep(3000);
  const s = dk(["exec", NAME, "bash", "/workspace/ttt-runner/stop-guest.sh", "/run25"], 60000);
  total.da_games = clean((s.stdout || "").trim().replace(/\n/g, "; "));
}
dk(["rm", "-f", NAME], 60000);
total.stopped = new Date().toISOString(); save(); note({ ev: "stopped", da_games: total.da_games });
phase("GUEST stopped (DA read, container removed)");
try { await rpc.disconnect(); } catch {}
process.exit(0);
