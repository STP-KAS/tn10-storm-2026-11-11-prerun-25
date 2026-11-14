> **Experimental. We are just trying this.** [Disclaimer](DISCLAIMER.md) · Kaspa Testnet-10 only; tKAS has no value.

# Playbook, pre-run 25

Roles are pre-run 24's ([its playbook](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-24/blob/main/PLAYBOOK.md)), with one addition: the desk runner also starts the guest kid.

| Who | Does | Does not |
|---|---|---|
| Desk runner | preflight, `BUDGET_CHECK`, `PRE-RUN-OPEN`, probe, counter, genesis, families 1–8, mint line, rotation sampler, guest kid, step files, TARGET, METHOD | heavy lane, payments, compile |
| Guest kid | one tic-tac-toe match from the kit, one carrier at a time, sent to the desk's own node; confirms on the desk node's accepted ids; stops `ttd` at RETURN | a second match, a retry of a rejected carrier tonight |
| Mini | the second read, `MINI-ARMED`, its step files | send |
| Bot | free check before the pinned minute; sends there only on a free distinct public kaspad, at normal rate; else `NO SEND` | count |

## Disk floor (written before the open)

Desk and Mini at least 100 GB free, box at least 20 GB. Below that nothing starts. The run writes a few hundred MB on the desk; the floors keep the node's data safe first.

## Status when this repo was opened

Filled before `PRE-RUN-OPEN` (UTC):

- Guest issuer key topped up from our own mining wallet, one transaction, 2026-11-14T00:30:41Z: one coin of 100 tKAS (its second coin went to `ttd`'s bootstrap in retry 1), fee 0.003054 tKAS. Mining wallet before 6,160,316, after 6,160,216 tKAS. No other move from the mining wallet: key 0 already held 123,210 usable tKAS in 3,399 coins over 3 tKAS, over three times the 20,000 planning cap.
- Genesis coins: key 0 gave one fresh coin each to keys 3, 4, 5, 6, 8, 9, 10 and 11, and one more coin to the mint key, 2026-11-14T00:37:32Z, 179.76 tKAS in all, fees 0.021924.
- Guest kit gate, `arm-guest.sh --dry` (the fixed kit, `1433a42`) against the desk node, 2026-11-14T00:31:15Z: `GUEST gate ok mode=dry` (testnet-10, synced, server 2.1.0, DAA moved 99 in 10 s, operator 4 coins / 798 tKAS, issuer 2 coins / 200 tKAS, nothing submitted).
- Hash path check (`sixteen.ps1 -Mode check`, nothing pushed), 2026-11-14T00:37:47Z: nine rows built and verified against the bundle.
- Bot free check from the desk (read-only, nothing sent): 7 of 7 candidates answered, 1 free distinct kaspad.
- Docker Desktop on the desk: the old local container stack (12 containers) was set to restart policy `no` (not removed, left stopped) before the guest image was rebuilt with the fixed kit.
- Disk: desk 332 GB free, Mini 317 GB free, box 102 GB free; all over the floor.

## Offline rehearsal before the open (fake node, fake sender and mint, local bare origin; the guest kit in dry mode: its read-only gate against the desk node, nothing sent)

- p25-a, 00:39–00:59 UTC: passed on the final runner and guest files. Genesis of nine (fake), `FAMILIES attempting=8/8 (family 9 is the mint line)`, the mint line to its cap as family 9, the guest kid's gate `gate ok`, its totals and its stop at RETURN, all step files, TIMELINE, MEMPOOL, MINT, TARGET (rows "families 1–8" and "family 9") and METHOD rendered; runner exit 0. The first-behind script (`tools/post/firstbehind.mjs`) was run once on the rehearsal's files. The rehearsal's counts are fake and are not results.

## After the run

- `PRE-RUN-OPEN` 2026-11-14T01:02:39Z (after a `candidates-missing` hold at 01:01:59Z, fixed by copying `private/candidates.json`); Mini held `no-git-identity` at 01:02:52Z, git identity set, `MINI-ARMED` 01:03:58Z.
- `BUDGET_CHECK` 01:05:10Z pass; genesis 9 of 9 at 01:05:26Z; guest 8 of 8 accepted on the desk node by 01:06:06Z; mint line at its cap 01:13:15Z; bot HOLD-4 minute 01:23 (38 of 38 submit-OK); guest stopped at RETURN 01:24:27Z (1 game finished); RETURN on origin 01:28:22Z; TARGET 01:34:10Z; runner end 01:34:13Z. Mini READ 16 of 16.
- Result: met, no component fell behind (see [logs/LESSONS.md](logs/LESSONS.md) and [counts/chain/FIRST-BEHIND.md](counts/chain/FIRST-BEHIND.md)).
- Key 0 after the run: 108,621 usable tKAS in 2,492 coins over 3 tKAS, under the 2,500-coin line: split before the next open.
