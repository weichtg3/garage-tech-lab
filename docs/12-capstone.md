---
title: "12 · Garage Intelligence Capstone"
sidebar_position: 13
slug: /12-capstone
---
# Week 12 — Garage Intelligence Capstone

**Estimated time:** 45 minutes reading · 120 minutes practical work · 45 minutes review. Estimates are for planning, not measured completion times.

## Lesson 12.1 — Core concepts

Separate collectors, transport, ingestion, storage and visualization. Use a common event schema with vehicle ID, source, timestamp, units, quality and schema version. A missing value is not zero. Use local-first storage and retry with stable event IDs to avoid duplicate records.

## Lesson 12.2 — Applying the concepts

A prototype should prove the data flow before real hardware integration. Use simulated truck OBD values and Sportster external sensor values. Keep the ingestion service on loopback initially, validate payloads, limit size, and never expose an unauthenticated telemetry API publicly. AI summaries must distinguish observed facts from guesses.

## Lesson 12.3 — Worked example

At one 300-byte event per second, raw event data is roughly 25.9MB/day before overhead. A 10-second interval reduces that to about 2.6MB/day.



## Practical lab

**Materials:** Node.js 24, browser, editor, synthetic data; optional Pi after prior labs.

Create a local JSON Lines fixture with alternating vehicle IDs and timestamps. Implement a Node HTTP server bound to 127.0.0.1 serving validated events at /events; reject invalid numeric values and unknown units. Build a browser table or React chart showing battery voltage by vehicle. Add stale-data indication and test missing/duplicate/out-of-order events. Export a private local report. Only later replace synthetic sources with verified read-only collectors.

**Lab record:** Write down your prediction, actual result, measurement units, instrument or software used, and one explanation for any discrepancy. Repeat with one changed input and compare. Keep personal data local.

## F-150 assignment

Define a truck adapter for supported diagnostic PIDs and a separately protected battery measurement interface. Never send control commands.

## Sportster assignment

Define a Sportster adapter for external protected sensors; keep ignition and stator untouched. Share the same event schema without pretending both vehicles expose identical data.

## Knowledge check

<details>
  <summary>1. Why use stable event IDs?</summary>
  <p>To deduplicate retries.</p>
</details>

<details>
  <summary>2. Why separate collectors from dashboard?</summary>
  <p>Hardware changes need not change the visualization contract.</p>
</details>

<details>
  <summary>3. What should AI do with missing measurements?</summary>
  <p>State uncertainty rather than invent values.</p>
</details>

## Completion criteria

- [ ] Explain the two core lessons without notes.
- [ ] Reproduce the worked example and explain its assumptions.
- [ ] Complete the practical lab or document why hardware compatibility prevents it.
- [ ] Complete both vehicle assignments as observations or paper designs.
- [ ] Answer all knowledge checks and correct any misunderstandings.

:::warning Safety boundary
Use current-limited bench circuits first. Verify actual vehicle wiring, component ratings and service procedures before installation. Never measure resistance on energized wiring, place a current-mode meter across a battery, connect vehicle voltage directly to GPIO, or probe SRS or live ignition high-voltage circuits.
:::

[Return to curriculum](./overview.md)
