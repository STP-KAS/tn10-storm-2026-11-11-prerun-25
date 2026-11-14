> **Experimental. We are just trying this.** [Disclaimer](DISCLAIMER.md) · Kaspa Testnet-10 only; tKAS has no value.
>
> **This is a pre-run. Pre-run 25.** It is not the Wednesday run. It is not the Tuesday run. It is not pre-run 1 to 24 or pre-run 24 retry 1, and it does not edit their repos. A read does not start a runner.

# tn10-storm-2026-11-11-prerun-25

**Pre-run 25 of the Wednesday neuron: the same whole, one knob faster.** The neuron stays [tn10-storm-2026-11-11](https://github.com/STP-KAS/tn10-storm-2026-11-11). This repo does not edit that repo, does not write `REVIEW_CLOSED`, and does not set or move a clock for it. [tn10-storm-2026-11-10](https://github.com/STP-KAS/tn10-storm-2026-11-10) (Tuesday) is not edited from here either.

> **Our own testing.** This is our own Kaspa Testnet-10 testing, run on our own machines and nodes. What these pages report is what we observed in this run; it is not a claim of how TN10 or Kaspa behave in general.

| Field | Value |
|---|---|
| Target | all three components (covenant hop, KCC-20 mint, tic-tac-toe guest carrier) still land on the desk node in the same open window with one knob raised, and the first component to fall behind is named with the load at that minute ([target plan](https://github.com/STP-KAS/tn10-target-plan/blob/main/plan/PLAN.md), pre-run 25 card) |
| The knob | the family count, 4 → 8 (written before the arm; [plan/PLAN.md](plan/PLAN.md)) |
| Met or not met | **met**: 14,339 covenant hops (families 1–8), 30 of 30 mints and 8 of 8 guest carriers accepted on the desk node in one open window (01:02:39–01:34:05 UTC) with the family count raised 4 → 8; no component fell behind ([counts/chain/FIRST-BEHIND.md](counts/chain/FIRST-BEHIND.md), [logs/LESSONS.md](logs/LESSONS.md)) |
| Retry count | 0 (gate: [pre-run 24 retry 1](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-24-retry-1) met pre-run 24's combined target) |
| Core tags | 1 (mempool rotation, issue #1146: a light 60-second id sample, not a full dump) |
| Status | done |

**Where this starts.** From [pre-run 24 retry 1's locks/LOCKED.md](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-24-retry-1/blob/main/locks/LOCKED.md), copied here as [locks/LOCKED.md](locks/LOCKED.md), with retry 1's result and a pre-run 25 section added at the end. Pre-runs 1 to 23 are in [tn-master](https://github.com/STP-KAS/tn-master).

## The one change

Pre-run 24 retry 1 landed all three components with room: four floor families, 30 mints, 8 of 8 guest carriers, and the desk mempool at 0 to 6 entries. Pre-run 25 raises **one knob: the family count, from 4 to 8** floor families at 100. The KCC-20 launch becomes family 9. Everything else is retry 1's: the offer per family (1.2 hops a second), the mint line (one at a time, accept then 15 s, cap 30), one tic-tac-toe match, the steps, the bot's rule, Mini's second read. Why this knob and not the payment offer or the mint spacing is in [plan/PLAN.md](plan/PLAN.md).

- **The guest kit is the fixed one** ([tn10-target-plan tools/ttt-guest-runner](https://github.com/STP-KAS/tn10-target-plan/tree/main/tools/ttt-guest-runner), `1433a42`): the lane id comes from `ttd`'s own start line, so retry 1's hand fix is not needed. It runs in a local Linux container on the desk, and its send node is the desk's own TN10 node. Nothing is exposed outside the desk and nothing about the route is in this repo. **No compile.**
- **First behind.** The rule for "a component fell behind" is fixed in [locks/LOCKED.md](locks/LOCKED.md) (xxix) before the arm. Ops writes `counts/chain/FIRST-BEHIND.md` from the run's own logs after the tail.
- **Funding.** Only where needed, as logged steps from our own mining wallet. The guest issuer key got one 100 tKAS coin (its second coin went to `ttd`'s bootstrap in retry 1). Key 0 already holds over three times the 20,000 tKAS planning cap in usable coins; `BUDGET_CHECK` is run again by the desk runner before genesis.
- **Disk floor, written before the open:** desk and Mini 100 GB free, box 20 GB. Below that, nothing starts.

## Machines

| Machine | Go file | First sentence |
|---|---|---|
| Desk | [GO-DESK.md](GO-DESK.md) | DESK. I send and count on pre-run 25. This is not Wednesday. |
| Mini | [GO-MINI.md](GO-MINI.md) | MINI. I count pre-run 25 as the second read. I do not send. This is not Wednesday. |
| Bot | [GO-BOT.md](GO-BOT.md) | GROKBOT. I send payments on the pre-run 25 HOLD-4 only. I do not count. This is not Wednesday. |

**Heavy work on the desk.** By the operator's standing rule (14 Nov 00:30 Brussels), the runner, the guest container and the bot's waiter, free check and sender all run on the desk ([tools/bot](tools/bot/README.md)); the box only coordinates.

The arm is in [RULES.md](RULES.md). [PLAYBOOK.md](PLAYBOOK.md) has the gates and the status when this repo was opened.

## Gates, in order

1. Disk floor held.
2. Mini's and the desk's TN10 nodes up from their own data, synced, DAA moving.
3. No other runner or waiter up. Key 0 passes `BUDGET_CHECK`.
4. The guest kit's gate (`arm-guest.sh --dry`) passes against the desk node: testnet-10, synced, DAA moving, issuer 2–4 coins, operator 1–4 coins, each at least 20 tKAS.
5. `hashes/SIXTEEN.md` on origin (nine rows, fresh launch names) with an On origin line.
6. The offline rehearsal passed on the changed files.
7. The desk pushes `logs/PRE-RUN-OPEN.md`; Mini pushes `logs/MINI-ARMED.md`.
8. Probe and counter up; genesis; families; mint line; rotation sampler; the guest kid; the steps.

A miss stays in this repo. A next attempt is a new repo and starts from this repo's lock file.

**Part of [tn-master](https://github.com/STP-KAS/tn-master).** This pre-run is its own row.
