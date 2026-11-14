> **Experimental. We are just trying this.** [Disclaimer](../../DISCLAIMER.md) · Kaspa Testnet-10 only. Counts only.

# Target, pre-run 25 (desk's own read)

Open window: from logs/PRE-RUN-OPEN.md on origin (2026-11-14T01:02:39Z) to this file (2026-11-14T01:34:05Z). Accepted = the desk node's own read (coordinator accepting-header time for the family hops; next minter seen for the mints).

| Line | Accepted on the desk node in the window | Met |
|---|---:|---|
| Covenant hop (families 1–8, floor) | 14,339 | met |
| KCC-20 mint (family 9, one at a time, cap 30) | 30 | met |
| Tic-tac-toe guest carrier (one match, one carrier at a time) | 8 of 8 logged (8 submit-OK per ttflow) | met |

The combined three-part target is **met** in this run (plan card 25: all three lines still land in the same open window, with the family count raised 4 -> 8; which component fell behind first is in counts/chain/FIRST-BEHIND.md).

Guest carriers counted only when the id ttflow logged is among the desk node's own accepted transaction ids (its virtual chain since the guest started); ttflow's "accepted" alone means the node took the submit. Steps accepted: Step 1 (Init), Step 2 (Deposit Player A), Step 3 (Deposit Player B), Step 4 (CreateGame), Step 5 (JoinGame), Step 6 (Turn Player A), Step 7 (Turn Player B), Step 8 (Withdraw). Steps logged but not seen accepted: -. Gate: gate ok. DA read at RETURN: open 0; playing 0; finished 1.

Issue #1146 rotation sample (rot24.mjs, our own accepted ids, 60 s or more after acceptance, asked one at a time on the same node): 24 samples, 920 ids checked, 0 still listed in the mempool.
