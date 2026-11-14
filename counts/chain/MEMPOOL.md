> **Experimental. We are just trying this.** [Disclaimer](../../DISCLAIMER.md) · Kaspa Testnet-10 only; tKAS has no value. Counts only.

> **Our own testing.** What this page shows is what our probe read on our own desk node in this run; it is not a claim of how TN10 behaves in general.

# Mempool and template timeline, pre-run 25

Read by the probe on the desk's private TN10 node every 20 s, read-only; each cell is the median of that minute's samples. Pre-run 17: ready count and ready mass come from the full mempool read up to 10,000 entries and from the node's own figures (getFeeEstimateExperimental, verbose) above that, where the per-class columns stay blank (the node's wRPC replies are capped at 128 MiB, about 12,500 entries). Ready means no parent in the mempool: in rusty-kaspa v2.1.0 only those are in the selector's frontier. Ready mass is compared with one block's mass limit (500,000): at or under 1 the selector takes all ready transactions best-first; over 1 it samples at random weighted by (fee/mass)^3 (over 4, sample_inplace). Mass is the larger of compute and storage mass, as the v2.1.0 selector normalises it (transient mass is not in the RPC). Other traffic is every mempool entry not in our sender logs (our heavy lane is its own class, our heavy); its fee rate is the node's fee over that mass. Template transactions carry no id in the RPC, so each is matched to a mempool entry by its first input. The template is the desk node's own getBlockTemplate (never submitted): what this node would put in a block at that moment, not a miner's template. The fee estimate is the node's getFeeEstimate, read only; no sender reads it. Public mempool is getInfo's mempool size on each kept public kaspad.

## The run

Step is the runner's step at the minute's start (see TIMELINE.md).

| Minute (UTC) | Step | Samples | Mempool | Ready (no parent in mempool) | Ready mass, blocks of 500k | Other traffic in mempool | Other ready | Other at 100, n | Other at 100, mean mass | Our payments in mempool | Our heavy in mempool / ready | Floor in mempool / ready | Kcc in mempool / ready | Template txs | Template storage mass | Template txs over 100k storage mass | Template: payments | Template: our heavy | Template: floor | Template: kcc | Template: other | Fee estimate priority / normal / low | Public 1 mempool | Public 5 mempool |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---:|---:|
| 2026-11-14T01:05 | BASE | 3 | 9 | 9 | 0.67 | 1 | 1 | 1 | 10,000 | 0 | 0 / 0 | 8 / 8 | 0 / 0 | 9 | 335,276 | 0 | 0 | 0 | 8 | 0 | 1 | 100.0 / 100.0 / 100.0 | 9 | 8 |
| 2026-11-14T01:06 | BASE | 3 | 0 | 0 | 0.00 | 0 | 0 | 1 | 3,350 | 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 100.0 / 100.0 / 100.0 | 0 | 0 |
| 2026-11-14T01:07 | BASE | 3 | 1 | 6 | 0.49 | 1 | 1 | - | - | 0 | 0 / 0 | 6 / 6 | 0 / 0 | 4 | 200,292 | 0 | 0 | 0 | 4 | 0 | 1 | 100.0 / 100.0 / 100.0 | 4 | 2 |
| 2026-11-14T01:08 | BASE | 3 | 8 | 8 | 0.65 | 0 | 0 | 1 | 3,349 | 0 | 0 / 0 | 8 / 8 | 0 / 0 | 8 | 324,375 | 0 | 0 | 0 | 8 | 0 | 0 | 100.0 / 100.0 / 100.0 | 8 | 1 |
| 2026-11-14T01:09 | BASE | 3 | 0 | 8 | 0.65 | 0 | 0 | - | - | 0 | 0 / 0 | 8 / 8 | 0 / 0 | 8 | 326,148 | 0 | 0 | 0 | 8 | 0 | 0 | 100.0 / 100.0 / 100.0 | 3 | 2 |
| 2026-11-14T01:10 | HOLD-1 | 3 | 7 | 8 | 0.65 | 0 | 0 | - | - | 0 | 0 / 0 | 8 / 8 | 0 / 0 | 8 | 325,276 | 0 | 0 | 0 | 8 | 0 | 0 | 100.0 / 100.0 / 100.0 | 1 | 0 |
| 2026-11-14T01:11 | HOLD-1 | 3 | 6 | 6 | 0.49 | 0 | 0 | - | - | 0 | 0 / 0 | 6 / 6 | 0 / 0 | 6 | 243,964 | 0 | 0 | 0 | 6 | 0 | 0 | 100.0 / 100.0 / 100.0 | 0 | 0 |
| 2026-11-14T01:12 | HOLD-1 | 3 | 7 | 8 | 0.65 | 0 | 0 | - | - | 0 | 0 / 0 | 8 / 8 | 0 / 0 | 8 | 325,474 | 0 | 0 | 0 | 8 | 0 | 0 | 100.0 / 100.0 / 100.0 | 1 | 1 |
| 2026-11-14T01:13 | HOLD-2 | 3 | 1 | 1 | 0.08 | 0 | 0 | - | - | 0 | 0 / 0 | 1 / 1 | 0 / 0 | 1 | 40,377 | 0 | 0 | 0 | 1 | 0 | 0 | 100.0 / 100.0 / 100.0 | 0 | 0 |
| 2026-11-14T01:14 | HOLD-2 | 3 | 7 | 7 | 0.57 | 0 | 0 | - | - | 0 | 0 / 0 | 7 / 7 | 0 / 0 | 7 | 286,087 | 0 | 0 | 0 | 7 | 0 | 0 | 100.0 / 100.0 / 100.0 | 7 | 0 |
| 2026-11-14T01:15 | HOLD-2 | 3 | 7 | 8 | 0.65 | 0 | 0 | - | - | 0 | 0 / 0 | 7 / 7 | 0 / 0 | 8 | 324,638 | 0 | 0 | 0 | 7 | 0 | 0 | 100.0 / 100.0 / 100.0 | 0 | 8 |
| 2026-11-14T01:16 | HOLD-3 | 3 | 8 | 8 | 0.65 | 0 | 0 | - | - | 0 | 0 / 0 | 8 / 8 | 0 / 0 | 8 | 324,710 | 0 | 0 | 0 | 8 | 0 | 0 | 100.0 / 100.0 / 100.0 | 1 | 1 |
| 2026-11-14T01:17 | HOLD-3 | 3 | 0 | 1 | 0.08 | 0 | 0 | - | - | 0 | 0 / 0 | 1 / 1 | 0 / 0 | 1 | 40,441 | 0 | 0 | 0 | 1 | 0 | 0 | 100.0 / 100.0 / 100.0 | 0 | 0 |
| 2026-11-14T01:18 | HOLD-3 | 3 | 8 | 8 | 0.65 | 0 | 0 | - | - | 0 | 0 / 0 | 8 / 8 | 0 / 0 | 8 | 324,276 | 0 | 0 | 0 | 8 | 0 | 0 | 100.0 / 100.0 / 100.0 | 0 | 7 |
| 2026-11-14T01:19 | HOLD-4 | 2 | 10 | 10 | 1.10 | 2 | 2 | - | - | 0 | 0 / 0 | 8 / 8 | 0 / 0 | 9 | 443,274 | 1 | 0 | 0 | 8 | 0 | 1 | 100.0 / 100.0 / 100.0 | 52 | 2 |
| 2026-11-14T01:20 | HOLD-4 | 3 | 7 | 7 | 0.57 | 0 | 0 | - | - | 0 | 0 / 0 | 7 / 7 | 0 / 0 | 7 | 285,639 | 0 | 0 | 0 | 7 | 0 | 0 | 100.0 / 100.0 / 100.0 | 0 | 0 |
| 2026-11-14T01:21 | HOLD-4 | 3 | 8 | 8 | 0.88 | 1 | 1 | - | - | 0 | 0 / 0 | 8 / 8 | 0 / 0 | 8 | 324,645 | 0 | 0 | 0 | 8 | 0 | 0 | 100.0 / 100.0 / 100.0 | 6 | 1 |
| 2026-11-14T01:22 | HOLD-4 | 3 | 8 | 8 | 0.65 | 0 | 0 | - | - | 0 | 0 / 0 | 8 / 8 | 0 / 0 | 8 | 324,641 | 0 | 0 | 0 | 8 | 0 | 0 | 100.0 / 100.0 / 100.0 | 0 | 0 |
| 2026-11-14T01:23 | HOLD-4 | 3 | 7 | 7 | 0.58 | 1 | 1 | - | - | 0 | 0 / 0 | 7 / 7 | 0 / 0 | 7 | 287,680 | 0 | 0 | 0 | 7 | 0 | 0 | 100.0 / 100.0 / 100.0 | 0 | 0 |
| 2026-11-14T01:24 | RETURN | 3 | 8 | 8 | 0.65 | 0 | 0 | 1 | 2,517 | 0 | 0 / 0 | 8 / 8 | 0 / 0 | 8 | 327,450 | 0 | 0 | 0 | 8 | 0 | 0 | 100.0 / 100.0 / 100.0 | 0 | 0 |
| 2026-11-14T01:25 | RETURN | 3 | 8 | 8 | 0.65 | 0 | 0 | - | - | 0 | 0 / 0 | 8 / 8 | 0 / 0 | 8 | 324,778 | 0 | 0 | 0 | 8 | 0 | 0 | 100.0 / 100.0 / 100.0 | 1 | 1 |
| 2026-11-14T01:26 | RETURN | 3 | 8 | 8 | 0.65 | 0 | 0 | - | - | 0 | 0 / 0 | 8 / 8 | 0 / 0 | 8 | 325,099 | 0 | 0 | 0 | 8 | 0 | 0 | 100.0 / 100.0 / 100.0 | 1 | 0 |
| 2026-11-14T01:27 | RETURN | 3 | 0 | 8 | 0.65 | 0 | 0 | - | - | 0 | 0 / 0 | 8 / 8 | 0 / 0 | 8 | 323,825 | 0 | 0 | 0 | 8 | 0 | 0 | 100.0 / 100.0 / 100.0 | 1 | 1 |
| 2026-11-14T01:28 | tail | 3 | 0 | 1 | 0.08 | 0 | 0 | - | - | 0 | 0 / 0 | 0 / 0 | 0 / 0 | 1 | 40,115 | 0 | 0 | 0 | 0 | 0 | 0 | 100.0 / 100.0 / 100.0 | 1 | 0 |
| 2026-11-14T01:29 | tail | 3 | 0 | 0 | 0.00 | 0 | 0 | - | - | 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 100.0 / 100.0 / 100.0 | 1 | 0 |
| 2026-11-14T01:30 | tail | 3 | 0 | 0 | 0.00 | 0 | 0 | - | - | 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 100.0 / 100.0 / 100.0 | 0 | 0 |
| 2026-11-14T01:31 | tail | 3 | 0 | 0 | 0.00 | 0 | 0 | - | - | 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 100.0 / 100.0 / 100.0 | 0 | 0 |
| 2026-11-14T01:32 | tail | 3 | 0 | 0 | 0.00 | 0 | 0 | - | - | 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 100.0 / 100.0 / 100.0 | 0 | 0 |
| 2026-11-14T01:33 | tail | 3 | 1 | 1 | 0.00 | 1 | 1 | 1 | 3,350 | 0 | 0 / 0 | 0 / 0 | 0 / 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 100.0 / 100.0 / 100.0 | 3 | 2 |
