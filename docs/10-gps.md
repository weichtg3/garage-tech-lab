---
title: "10 · GPS & Telemetry"
sidebar_position: 11
slug: /10-gps
---
# Week 10 — GPS & Telemetry

**Estimated time:** 45 minutes reading · 100 minutes practical work · 35 minutes review. Estimates are for planning, not measured completion times.

## Lesson 10.1 — Core concepts

GNSS receivers estimate position and time from satellite signals. NMEA sentences are comma-separated records with optional checksums. RMC commonly contains time, validity, position, speed in knots and course; GGA contains fix quality and altitude. Invalid fixes and missing fields must not become zero coordinates.

## Lesson 10.2 — Applying the concepts

Latitude in ddmm.mmmm and longitude in dddmm.mmmm convert to decimal degrees by adding minutes/60; S and W are negative. Course over ground is not necessarily heading when stationary. Use UTC timestamps, validate checksums, preserve fix quality and avoid publishing actual tracks.

## Lesson 10.3 — Worked example

4807.038 N becomes 48 + 7.038/60 = 48.1173°. 10 knots equals 18.52km/h. A missing fix should be null, not (0,0).



## Practical lab

**Materials:** Pi with identified GPS attachment, Node.js 24 computer, synthetic NMEA fixture, local storage.

Start with a synthetic RMC record and split fields. Check sentence type, validity flag and field lengths; implement degrees/minutes conversion and sign. Add XOR checksum verification before accepting real input. Test invalid fix, missing field and western longitude. Save valid synthetic samples as JSON Lines. Only after identifying GPS serial settings use the documented port and baud rate; keep real data local.

**Lab record:** Write down your prediction, actual result, measurement units, instrument or software used, and one explanation for any discrepancy. Repeat with one changed input and compare. Keep personal data local.

## F-150 assignment

Plan a removable recorder using supported vehicle power and safe shutdown; test stationary before considering road use.

## Sportster assignment

Plan vibration-resistant mounting and weather protection; do not interact with the recorder while riding.

## Knowledge check

<details>
  <summary>1. Why reject invalid fixes?</summary>
  <p>They may contain stale or missing coordinates.</p>
</details>

<details>
  <summary>2. What is the conversion for knots to km/h?</summary>
  <p>Multiply by 1.852.</p>
</details>

<details>
  <summary>3. Why store UTC?</summary>
  <p>It makes event correlation independent of local time zones.</p>
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
