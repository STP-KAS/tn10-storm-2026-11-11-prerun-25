> **Experimental. We are just trying this.** [Disclaimer](../../DISCLAIMER.md) · Kaspa Testnet-10 only; tKAS has no value. Counts only.

# First behind, pre-run 25

Written by ops after the tail, from the desk run's own logs (family sender submit rows, the coordinator's accepting-header times, the mint line's rows, the guest kid's totals) and the desk's step files, with the rule fixed before the arm in [locks/LOCKED.md](../../locks/LOCKED.md) (xxix). One knob was turned: the family count, 4 → 8.

**No component fell behind at this step.** Load: 8 families × 1.2 hops a second offered (576 a minute), the mint line one at a time, the guest one carrier at a time.

Guest: 8 of 8 logged carriers accepted on the desk node (confirmed 01:06:06Z, step BASE). Mints: 30 accepted, 0 rejected, 0 accept timeouts; accept time max 1,025 ms.

## Per minute, BASE to RETURN

| Minute (UTC) | Step | Floor submit-OK | Floor landed (accepting header in the minute) | Landed / OK | Families attempting | Stall marks | Mints accepted | Mint accept max, ms | Desk mempool | Ready | Fee estimate (priority) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 2026-11-14T01:06 | BASE | 626 | 626 | 100.0% | 8 of 8 | 0 | 4 | 1,024 | - | - | - |
| 2026-11-14T01:07 | BASE | 611 | 611 | 100.0% | 8 of 8 | 0 | 4 | 1,022 | 1 | 6 | 100.0 |
| 2026-11-14T01:08 | BASE | 668 | 668 | 100.0% | 8 of 8 | 0 | 4 | 1,020 | 8 | 8 | 100.0 |
| 2026-11-14T01:09 | BASE | 582 | 584 | 100.3% | 8 of 8 | 0 | 3 | 1,024 | 0 | 8 | 100.0 |
| 2026-11-14T01:10 | HOLD-1 | 633 | 632 | 99.8% | 8 of 8 | 0 | 4 | 1,015 | 7 | 8 | 100.0 |
| 2026-11-14T01:11 | HOLD-1 | 617 | 616 | 99.8% | 8 of 8 | 0 | 4 | 1,025 | 6 | 6 | 100.0 |
| 2026-11-14T01:12 | HOLD-1 | 658 | 658 | 100.0% | 8 of 8 | 0 | 4 | 1,023 | 7 | 8 | 100.0 |
| 2026-11-14T01:13 | HOLD-2 | 639 | 639 | 100.0% | 8 of 8 | 0 | 1 | 508 | 1 | 1 | 100.0 |
| 2026-11-14T01:14 | HOLD-2 | 632 | 632 | 100.0% | 8 of 8 | 0 | 0 | - | 7 | 7 | 100.0 |
| 2026-11-14T01:15 | HOLD-2 | 656 | 656 | 100.0% | 8 of 8 | 0 | 0 | - | 7 | 8 | 100.0 |
| 2026-11-14T01:16 | HOLD-3 | 586 | 586 | 100.0% | 8 of 8 | 0 | 0 | - | 8 | 8 | 100.0 |
| 2026-11-14T01:17 | HOLD-3 | 618 | 618 | 100.0% | 8 of 8 | 0 | 0 | - | 0 | 1 | 100.0 |
| 2026-11-14T01:18 | HOLD-3 | 609 | 609 | 100.0% | 8 of 8 | 0 | 0 | - | 8 | 8 | 100.0 |
| 2026-11-14T01:19 | HOLD-4 | 643 | 644 | 100.2% | 8 of 8 | 0 | 0 | - | - | - | - |
| 2026-11-14T01:20 | HOLD-4 | 611 | 611 | 100.0% | 8 of 8 | 0 | 0 | - | - | - | - |
| 2026-11-14T01:21 | HOLD-4 | 605 | 605 | 100.0% | 8 of 8 | 0 | 0 | - | - | - | - |
| 2026-11-14T01:22 | HOLD-4 | 612 | 611 | 99.8% | 8 of 8 | 0 | 0 | - | - | - | - |
| 2026-11-14T01:23 | HOLD-4 | 607 | 607 | 100.0% | 8 of 8 | 0 | 0 | - | 7 | 7 | 100.0 |
| 2026-11-14T01:24 | RETURN | 701 | 701 | 100.0% | 8 of 8 | 0 | 0 | - | - | - | - |
| 2026-11-14T01:25 | RETURN | 665 | 665 | 100.0% | 8 of 8 | 0 | 0 | - | 8 | 8 | 100.0 |
| 2026-11-14T01:26 | RETURN | 617 | 617 | 100.0% | 8 of 8 | 0 | 0 | - | 8 | 8 | 100.0 |
| 2026-11-14T01:27 | RETURN | 577 | 578 | 100.2% | 8 of 8 | 0 | 0 | - | 0 | 8 | 100.0 |

Landed / OK compares hops whose accepting header falls in the minute with hops submitted OK in the minute; a hop submitted in a minute's last second may land in the next one, so a few percent either way is the boundary, not a fall-off. The 90 percent line and the 10 s mint line are the rule's, not tuned after the run.

