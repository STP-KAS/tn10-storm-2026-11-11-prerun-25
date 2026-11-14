> **Experimental. We are just trying this.** [Disclaimer](../../DISCLAIMER.md) · Kaspa Testnet-10 only; tKAS has no value. Counts only.

# Chain timeline, pre-run 25

Every minute the desk counter read, from its start to the end of the 5-minute tail after RETURN. Read on the desk's private TN10 node, by accepting chain block header time. Submit-OK is the desk sender log for scored minutes (a dash where the runner did not score the minute). A minute marked LAGGING, partial, or not final is what the node had accepted at that point, not a network figure. Nothing is filled in.

| Minute (UTC) | Step (lane) | Scored | Pay submit-OK | Our payments included | Our heavy landed | Floor hops (100) | Kcc hops (100) | Other traffic | Included, all non-coinbase | Chain blocks | DAA gap max | Sink age max, ms | Counter |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 2026-11-14T01:05 | BASE (pre) |  | - | 0 | 0 | 297 | 2 | 2,581 | 2,868 | 309 | 0 | 455 | partial |
| 2026-11-14T01:06 | BASE (pre) |  | - | 0 | 0 | 626 | 4 | 3,144 | 3,758 | 368 | 0 | 412 | kept pace |
| 2026-11-14T01:07 | BASE (mix) | yes | 0 | 0 | 0 | 611 | 4 | 3,198 | 3,787 | 363 | 0 | 372 | kept pace |
| 2026-11-14T01:08 | BASE (mix) | yes | 0 | 0 | 0 | 668 | 4 | 3,187 | 3,835 | 371 | 1 | 325 | kept pace |
| 2026-11-14T01:09 | BASE (mix) | yes | 0 | 0 | 0 | 582 | 3 | 3,137 | 3,703 | 335 | 1 | 509 | kept pace |
| 2026-11-14T01:10 | HOLD-1 (mix) | yes | 0 | 0 | 0 | 634 | 4 | 3,187 | 3,804 | 378 | 0 | 228 | kept pace |
| 2026-11-14T01:11 | HOLD-1 (mix) | yes | 0 | 0 | 0 | 616 | 4 | 3,170 | 3,770 | 374 | 1 | 440 | kept pace |
| 2026-11-14T01:12 | HOLD-1 (mix) | yes | 0 | 0 | 0 | 658 | 4 | 3,330 | 3,973 | 416 | 1 | 486 | kept pace |
| 2026-11-14T01:13 | HOLD-2 (mix) | yes | 0 | 0 | 0 | 639 | 1 | 3,174 | 3,795 | 376 | 0 | 830 | kept pace |
| 2026-11-14T01:14 | HOLD-2 (mix) | yes | 0 | 0 | 0 | 632 | 0 | 3,122 | 3,731 | 403 | 1 | 650 | kept pace |
| 2026-11-14T01:15 | HOLD-2 (mix) | yes | 0 | 0 | 0 | 656 | 0 | 3,120 | 3,749 | 398 | 1 | 244 | kept pace |
| 2026-11-14T01:16 | HOLD-3 (mix) | yes | 0 | 0 | 0 | 586 | 0 | 3,240 | 3,813 | 369 | 1 | 604 | kept pace |
| 2026-11-14T01:17 | HOLD-3 (mix) | yes | 0 | 0 | 0 | 618 | 0 | 3,150 | 3,742 | 385 | 1 | 539 | kept pace |
| 2026-11-14T01:18 | HOLD-3 (mix) | yes | 0 | 0 | 0 | 609 | 0 | 3,195 | 3,777 | 358 | 2 | 630 | kept pace |
| 2026-11-14T01:19 | HOLD-4 (N0-drain) |  | - | 0 | 0 | 644 | 0 | 3,138 | 3,761 | 349 | 0 | 704 | kept pace |
| 2026-11-14T01:20 | HOLD-4 (N0-drain) |  | - | 0 | 0 | 611 | 0 | 3,160 | 3,751 | 364 | 1 | 482 | kept pace |
| 2026-11-14T01:21 | HOLD-4 (N0-drain) |  | - | 0 | 0 | 605 | 0 | 3,121 | 3,714 | 337 | 0 | 672 | kept pace |
| 2026-11-14T01:22 | HOLD-4 (N0-drain) |  | - | 0 | 0 | 611 | 0 | 3,159 | 3,760 | 364 | 1 | 317 | kept pace |
| 2026-11-14T01:23 | HOLD-4 (N0-drain) | yes | 0 | 0 | 0 | 607 | 0 | 3,219 | 3,807 | 346 | 0 | 304 | kept pace |
| 2026-11-14T01:24 | RETURN (N0-drain) |  | - | 0 | 0 | 701 | 0 | 3,381 | 4,061 | 381 | 1 | 405 | kept pace |
| 2026-11-14T01:25 | RETURN (N0-drain) | yes | 0 | 0 | 0 | 665 | 0 | 3,184 | 3,834 | 399 | 2 | 334 | kept pace |
| 2026-11-14T01:26 | RETURN (N0-drain) | yes | 0 | 0 | 0 | 617 | 0 | 3,140 | 3,743 | 355 | 1 | 518 | kept pace |
| 2026-11-14T01:27 | RETURN (N0-drain) | yes | 0 | 0 | 0 | 578 | 0 | 3,162 | 3,713 | 366 | 0 | 469 | kept pace |
| 2026-11-14T01:28 | tail (N0-drain) |  | - | 0 | 0 | 275 | 0 | 3,183 | 3,443 | 389 | 0 | 772 | kept pace |
| 2026-11-14T01:29 | tail (N0-drain) |  | - | 0 | 0 | 0 | 0 | 3,188 | 3,188 | 369 | 1 | 466 | kept pace |
| 2026-11-14T01:30 | tail (N0-drain) |  | - | 0 | 0 | 0 | 0 | 3,139 | 3,139 | 363 | 1 | 520 | kept pace |
| 2026-11-14T01:31 | tail (N0-drain) |  | - | 0 | 0 | 0 | 0 | 3,139 | 3,139 | 367 | 1 | 380 | kept pace |
| 2026-11-14T01:32 | tail (N0-drain) |  | - | 0 | 0 | 0 | 0 | 3,188 | 3,188 | 409 | 0 | 506 | kept pace |
| 2026-11-14T01:33 | tail (N0-drain) |  | - | 0 | 0 | 0 | 0 | 2,844 | 2,844 | 350 | 0 | 420 | not final |

Whole run, as read: our payments submit-OK 0, of which included by the end of the tail 0 (- percent). Family hops included: floor 14,346, kcc 30. Our heavy-lane transactions included: 0.
