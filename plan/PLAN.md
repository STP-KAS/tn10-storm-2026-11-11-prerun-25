> **Experimental. We are just trying this.** [Disclaimer](../DISCLAIMER.md) · This page does not start a machine. Pre-run 25. Not Wednesday. Not Tuesday. Not pre-run 1 to 24, and not pre-run 24 retry 1 (whose repos stay as they closed).

# Targets

The source is the pre-run 25 card in [tn10-target-plan plan/PLAN.md](https://github.com/STP-KAS/tn10-target-plan/blob/main/plan/PLAN.md) ("Same whole, faster"), with section P (REVIEW-01) binding. Gate: pre-run 24's combined target is met ([pre-run 24 retry 1](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-24-retry-1), met: 7,139 hops, 30 mints, 8 of 8 guest carriers on the desk node). There is no T0 and no public clock. Every step is an observation of whole minutes.

**Question.** When the pre-run 24 mix is still intact, which component falls behind first as the offer rises one step?

**Target.** All three components still land on the desk node between `PRE-RUN-OPEN` and the end of RETURN: at least one covenant hop, one KCC-20 mint and one tic-tac-toe carrier. And the run names the first component whose landings fall off, with the load at that minute (offer, mempool size, ready count, fee estimate), using the rule in [locks/LOCKED.md](../locks/LOCKED.md) (xxix), fixed before the arm. If nothing falls off, that is met too: "no component fell behind at this step." Retry count 0.

## The one knob, written before the arm

**The family count, 4 → 8.** Everything else is pre-run 24 retry 1's: the floor rate (100 on node mass), the offer per family (1.2 hops a second, one family-sender process, one builder), the mint spacing (one at a time, accept then 15 s, cap 30), the guest (one match, one carrier at a time), the steps, the bot's rule.

Why this knob and this size:

- The card names three knobs: the family count (4 toward 16), the mint spacing, or the payment offer. The card's first faster step for payments is pre-run 10's shape (1,013 then 1,500 tx/s of ordinary payments). Pre-run 10's payment senders submit to the kept public kaspads in every step. REVIEW-01 change 3 allows our sends to public nodes only in the bot's HOLD-4 minute, on a free distinct node, at normal rate, and the operator's standing rule is that heavy work runs on the desk. A desk-only payment flood would be a new shape, not pre-run 10's. So the payment offer is not the knob tonight.
- Mint spacing is a single line already capped at 30; shortening it mostly tests the builder, not the mix.
- The family count stays inside the shape this desk has already run (pre-run 23 ran 16 families at the floor) and doubles the covenant load beside the mint line and the guest. Retry 1's mempool read 0 to 6 entries at four families, so there is room; a step to 16 would be two doublings in one run. Eight is one step.

## Order

1. **Disk floor** written and read (desk and Mini 100 GB free, box 20 GB).
2. **Nodes live.** Both TN10 nodes synced, DAA moving. No wipe.
3. **Funding** from our own mining wallet only where needed, as logged steps; `BUDGET_CHECK` on key 0 (the runner repeats it before genesis).
4. **Guest gate** (`arm-guest.sh --dry` in the desk-local container): testnet-10, synced, DAA moving, issuer 2–4 coins, operator 1–4 coins, each at least 20 tKAS.
5. **Hashes first.** [hashes/SIXTEEN.md](../hashes/README.md): nine rows and an On origin line.
6. **Offline rehearsal** on the final files, then `PRE-RUN-OPEN`, then `MINI-ARMED`.
7. **Genesis** of nine covenants from the bundle; the eight families start; the mint line starts; the rotation sampler starts; the guest kid starts.

| Order | File | What runs | Length |
|---:|---|---|---|
| 1 | BASE | families 1–8 at 100, the mint line, the guest match | 3 whole minutes |
| 2 | HOLD-1 | the same | 3 whole minutes |
| 3 | HOLD-2 | the same | 3 whole minutes |
| 4 | HOLD-3 | the same | 3 whole minutes |
| 5 | HOLD-4 | the same; the bot sends only on a free public kaspad, or files `NO SEND` | the pinned minute |
| 6 | RETURN | the same (the mint line may have reached its cap) | 3 whole minutes |
| 7 | tail | families stopped, the counter reads on | 5 minutes |

The HOLD names are kept so the bot's and Mini's gates read as before; nothing changes between them on purpose. The knob is turned once, before genesis, and not again (a second knob mid-run is an abort).

## Cohorts

| Cohort | Families | Rate, sompi/gram of node mass | What |
|---|---|---:|---|
| floor | 1–8 | 100, fixed | covenant families, one hop per transaction, the family sender |
| kcc | 9 | 100, fixed | the fresh KCC-20 launch; each hop is one public mint, sent by the mint line one at a time |

kit26 is kit25 with the table above (`FAMILY_COUNT = 9`, `SENDER_FAMILIES = 8`) and the mint line minting the last family instead of a fixed 5 ([tools/kit26](../tools/kit26/README.md)).

## The guest carrier

One match from the guest kit in a desk-local Linux container, sent to the desk's own node (the fixed kit: the lane id now comes from `ttd`'s own start line, so retry 1's hand fix is not needed). Counted only when the id `ttflow` logged is among the desk node's accepted ids.

## Prediction, written before the run

- **Hops:** about twice retry 1's rate, near 600 a minute at 8 × 1.2 offered, all eight families landing every minute; the desk mempool stays small (tens of entries). We do not expect the families to fall behind at this step.
- **Mints:** 30 accepted, as in retry 1 (median accept about 1 s); the mint line shares the builder with eight families now, so its accept time may rise a little.
- **Guest:** 8 of 8 carriers again, early in BASE.
- **First behind:** our best guess (about 60 percent) is "no component fell behind at this step". If one does, we expect the mint line first (its accept wait grows when the builder is busier), not the families.
- **Cost:** about 600 hops a minute × 25 family minutes × about 0.042 tKAS fee: about 650 tKAS in fees, inside the 20,000 planning cap. Key 0's usable coins move with the hops; `BUDGET_CHECK` sizes on use (760 a minute assumed).
