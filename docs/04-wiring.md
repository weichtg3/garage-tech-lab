---
title: "04 · Wire Gauges, Connectors & Fuses"
sidebar_position: 5
slug: /04-wiring
---
# Week 4 — Wire Gauges, Connectors & Fuses

**Estimated time:** 55 minutes reading · 90 minutes practical work · 40 minutes review. Estimates are for planning, not measured completion times.

## Lesson 4.1 — Core concepts

AWG numbers decrease as conductor size increases. Copper resistance depends on cross-section, length and temperature. Ampacity depends on insulation, bundling, ambient temperature, installation and standards. Voltage drop and ampacity are separate design constraints.

## Lesson 4.2 — Applying the concepts

A fuse protects wiring from overcurrent; select it using load behavior, fuse time-current curves and the weakest downstream component. Place source protection close to the source. Connector ratings include wire range, contact current and environment. A Posi-Tap is a branch connection, not permission to exceed the original circuit rating. Add-a-fuse orientation and slot capacity must be verified; never tap safety-critical circuits.

## Lesson 4.3 — Worked example

16 AWG copper is approximately 0.004Ω/ft at 20°C. A 10ft one-way run with dedicated return at 5A drops about 0.40V (3.3% of 12V). A 55W lamp nominally draws 4.6A at 12V, but startup and operating behavior matter.

Use the [electrical toolbox](/tools) to explore the numbers.

## Practical lab

**Materials:** Scrap automotive wire in two gauges, matching terminals, rated crimper, stripper, DMM, fuse holder, 5V supply, 1kΩ load.

Read terminal wire-range and tool specifications. Strip scrap wire without nicking strands; crimp using the correct die. Inspect conductor and insulation support, then perform the manufacturer's pull-test procedure or a qualitative scrap comparison. Check continuity unpowered. Build a low-current fused demonstration branch using compatible parts; calculate a hypothetical 5A harness drop using the toolbox. Do not test fuse clearing by shorting a battery.

**Lab record:** Write down your prediction, actual result, measurement units, instrument or software used, and one explanation for any discrepancy. Repeat with one changed input and compare. Keep personal data local.

## F-150 assignment

Inventory stereo, dashcam, footwell and running-board loads. Draw separate fused branches and list wire length, connector rating, trigger type and unknowns. Do not assume spare fuse-box capacity.

## Sportster assignment

Design a paper harness for auxiliary lamps; include vibration, abrasion, steering clearance, weather sealing, source protection and charging headroom.

## Knowledge check

<details>
  <summary>1. Does thicker wire permit a larger fuse automatically?</summary>
  <p>No, the weakest downstream component and installation constraints govern.</p>
</details>

<details>
  <summary>2. Why count return length?</summary>
  <p>Current flows through the entire loop.</p>
</details>

<details>
  <summary>3. Can a tap safely power any accessory?</summary>
  <p>No, original circuit and tap ratings must permit the additional load.</p>
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
