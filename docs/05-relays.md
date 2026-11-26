---
title: "05 · Relays & Vehicle Lighting"
sidebar_position: 6
slug: /05-relays
---
# Week 5 — Relays & Vehicle Lighting

**Estimated time:** 55 minutes reading · 90 minutes practical work · 40 minutes review. Estimates are for planning, not measured completion times.

## Lesson 5.1 — Core concepts

A relay separates a control coil from switched contacts. Common automotive numbering is 85/86 coil, 30 common, 87 normally open and 87a normally closed, but always verify the printed diagram. Contact ratings depend on DC voltage, load type and inrush. A coil creates an inductive voltage spike when switched off; suppression protects the driver.

## Lesson 5.2 — Applying the concepts

High-side switching supplies positive voltage; low-side switching completes the return. PWM varies duty cycle and can confuse a basic meter. A BCM may monitor lamp current or use pulsed signals. A trigger interface must be compatible with the actual signal and must not backfeed it. Diode-suppressed coils are polarity-sensitive.

## Lesson 5.3 — Worked example

A hypothetical 12V coil rated 120Ω draws 100mA. A 36W lamp draws nominally 3A at 12V. The control circuit need not carry lamp current. A 25% duty-cycle ideal 12V PWM signal averages 3V but is not a steady 3V supply.

Use the [electrical toolbox](/tools) to explore the numbers.

## Practical lab

**Materials:** Rated 5V relay module with documented suppression and driver, current-limited 5V supply, switch, LED with 330Ω resistor, DMM.

Read module pinout and current ratings. With power off connect the control input per documentation and a separate low-current LED branch through COM and NO. Energize within the supply limit and toggle the control. Verify NO opens when de-energized; test NC only if available. Draw a truth table for switch state versus lamp. Never drive a bare coil directly from GPIO.

**Lab record:** Write down your prediction, actual result, measurement units, instrument or software used, and one explanation for any discrepancy. Repeat with one changed input and compare. Keep personal data local.

## F-150 assignment

Design a truth table for white courtesy and left/right amber signals, including hazards and simultaneous requests. White automatic only; amber only turn/hazard. Determine controller priority from kit instructions before installation.

## Sportster assignment

Sketch separate fused auxiliary spotlight power and switch/relay control. Calculate lamp demand and leave charging capacity unverified until service data is available.

## Knowledge check

<details>
  <summary>1. What does normally open mean?</summary>
  <p>The contact is open when the coil is not energized.</p>
</details>

<details>
  <summary>2. Why suppress a coil?</summary>
  <p>To limit inductive turn-off voltage.</p>
</details>

<details>
  <summary>3. Why not attach a relay coil to an unknown BCM output?</summary>
  <p>Its current, polarity, PWM and monitoring behavior may be incompatible.</p>
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
