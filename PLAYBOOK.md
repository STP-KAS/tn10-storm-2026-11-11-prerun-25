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

- Guest keys funded from our own mining wallet, one transaction, 2026-11-13T22:48:55Z: 1,000 tKAS in six coins (4 × 200 to the operator key, 2 × 100 to the issuer key), fee 0.006144 tKAS. Mining wallet before 6,161,316, after 6,160,316 tKAS.
- Genesis coins: key 0 gave one fresh coin each to keys 3, 4, 5 and 6, 2026-11-13T23:13:45Z, about 86.7 tKAS in all, fees 0.009744. The mint key kept its 40 coins (no top-up needed).
- Guest kit gate, `arm-guest.sh --dry` against the desk node, 2026-11-13T23:08:04Z: `GUEST gate ok mode=dry` (testnet-10, synced, server 2.1.0, DAA moved 92 in 10 s, operator 4 coins / 800 tKAS, issuer 2 coins / 200 tKAS, nothing submitted).
- Key 0 after funding: 130,513 usable tKAS in 3,662 coins over 3 tKAS. `BUDGET_CHECK` is repeated by the desk runner before genesis.
- Disk: desk 315 GB free, Mini 294 GB free, box 102 GB free; all over the floor.

## Offline rehearsals before the open (fake node, fake sender and mint, local bare origin; the guest kit in dry mode: its read-only gate against the desk node, nothing sent)

- p24r1-a, stopped early: the rehearsal's tool dir held the real genesis submitter instead of the fake one; it stopped on the fake bundle before any submit (nothing sent).
- p24r1-b, stopped early by hand: the guest kid exited at its start (a comment hid two constant definitions in `guest24.mjs`). Fixed.
- p24r1-c, 23:23–23:43 UTC: passed on the final runner and guest files (`desk-runner.mjs` db86145f7009, `guest24.mjs` 2e2698738630, LF sha256 prefixes, the same as in `tools/desk/`). The guest kid started the container, read the kit's gate (`gate ok`), wrote its totals, stopped at RETURN's GUEST-STOP, ran the lane read and removed the container; no process exit was logged; TARGET.md rendered the guest row. The rehearsal's counts are fake and are not results.
- The desk bot was checked read-only (one free check, nothing sent or pushed) before the open.
