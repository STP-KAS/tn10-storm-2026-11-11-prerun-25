> **Experimental. We are just trying this.** [Disclaimer](../DISCLAIMER.md) · Kaspa Testnet-10 only. Counts only.

# Lessons, pre-run 25

Target: all three components (covenant hop, KCC-20 mint, tic-tac-toe guest carrier) still land on the desk node in one open window with one knob raised, and the first component to fall behind is named. The knob: the family count, 4 → 8. **Met.** No component fell behind at this step. Retry count 0.

| Line | Accepted on the desk node | Met |
|---|---:|---|
| Covenant hop (families 1–8, floor 100) | 14,339 | met |
| KCC-20 mint (family 9, one at a time, cap 30) | 30 of 30 | met |
| Tic-tac-toe guest carrier (one match) | 8 of 8 | met |

Per step, floor hops / kcc mints accepted (desk counter; Mini read the same numbers in every minute): BASE 1,861 / 11, HOLD-1 1,908 / 12, HOLD-2 1,927 / 1, HOLD-3 1,813 / 0, HOLD-4 607 / 0 (the pinned minute), RETURN 1,860 / 0. Mini READ 16 of 16.

1. **Twice the families, twice the hops, no fall-off.** Eight floor families at 1.2 hops a second each landed 577–701 hops a minute (pre-run 24 retry 1, four families: about 320). In every whole minute from BASE to RETURN the hops whose accepting header fell in the minute were 99.8–100.3 percent of the minute's submit-OK, all 8 families attempting, no stall mark ([counts/chain/FIRST-BEHIND.md](../counts/chain/FIRST-BEHIND.md)). Our own chained hops are the only thing holding the window open; the rest of the line has room.
2. **The template had room, but not unlimited room.** Each floor hop is about 40,600 storage mass on the node. With 8 families the desk node's template held 8 of our ready hops at about 325,000 storage mass (0.65 of a 500,000 block) in most minutes, and the desk mempool stayed at 0–10 entries. By this arithmetic, about 12 ready hops of this shape fill one block template on their own; a family count well above that is where the block's mass, not our offer, would start to set the pace. That is arithmetic from this run's numbers, not something this run saw.
3. **The mint line did not notice.** 30 of 30 accepted, 0 rejects, 0 timeouts; accept time median 513 ms, max 1,025 ms (rule line 10 s). The line reached its cap in HOLD-2, as in retry 1, so it did not run under load after 01:13 UTC.
4. **The fixed guest kit ran clean.** One match, 8 carriers (Init, two deposits, create, join, two turns, withdraw), all submit-OK and all 8 among the desk node's accepted ids by 01:06:06 UTC, with no hand fix (tn10-target-plan `1433a42`: the lane id comes from `ttd`'s own start line). `ttd` was stopped at RETURN with one game finished; the container was removed.
5. **Two setup slips, both caught by the gates.** At the open, the desk runner held `candidates-missing` (01:01:59 UTC) because `private/candidates.json` was not copied into the new run directory; it was copied from pre-run 24 retry 1's desk directory and the open went through at 01:02:39 UTC. Mini's runner held `no-git-identity` (01:02:52 UTC) on a fresh clone and exited without publishing; the clone's local git name and e-mail were set and Mini armed at 01:03:58 UTC. Neither touched a count. Add both to the open checklist: copy `candidates.json`, set git identity on every new clone.
6. **The bot on the desk was on time again.** HOLD-4 pinned 01:23 UTC; the free check found a free distinct public kaspad, and the bot sent 38 payments in the minute, 38 submit-OK, 0 rejects.
7. **Funding.** No move from the mining wallet beyond the guest issuer's 100 tKAS coin before the open. `BUDGET_CHECK` at the run: key 0 123,058 usable, projected end 104,058 (abort 18,000, margin 8,000): pass. After the run (read-only, 01:40 UTC): key 0 108,621 usable tKAS in **2,492 coins over 3 tKAS**, just under REVIEW-01's 2,500-coin line, so the next pre-run needs a logged split (or a mining-wallet move) before its open. Family fees 586.51 tKAS for 14,346 submit-OK hops (3,226 submits rejected: 1,839 orphan, 1,387 already spent, the same shape as earlier pre-runs); mint fees 1.23 tKAS.
8. **Rotation (#1146):** 24 samples, 920 of our accepted ids checked 60 s or more after acceptance, 0 still listed.
9. **Docker Desktop.** The old local container stack stayed down through the run (restart policy `no`, set before the open; not removed). The VM did not freeze.
