---
title: "02 · Multimeter Skills"
sidebar_position: 3
slug: /02-multimeter
---
# Week 2 — Multimeter Skills

**Estimated time:** 50 minutes reading · 90 minutes practical work · 35 minutes review. Estimates are for planning, not measured completion times.

## Lesson 2.1 — Core concepts

A digital multimeter measures voltage in parallel using a high input impedance. Resistance mode supplies its own small test current, so external power must be disconnected. Continuity is a threshold indication, not proof of a good high-current connection. Current mode inserts a low-resistance shunt in series; the current jack may be fused and has a time/current limit.

## Lesson 2.2 — Applying the concepts

DC volts displays polarity; a negative reading usually means probes are reversed relative to the measured potential. AC volts measures alternating components according to meter bandwidth and coupling. Auto-range chooses a scale, not a safe measurement mode. Use COM and VΩ jacks for voltage; only move the red lead to a current jack for a deliberate series test.

## Lesson 2.3 — Worked example

A 1kΩ resistor across 5V draws 5mA. A 0.2Ω connector may beep in continuity mode yet drop 1V at 5A. An unloaded 12V reading can coexist with a failed connection.

Use the [electrical toolbox](/tools) to explore the numbers.

## Practical lab

**Materials:** DMM manual, 5V current-limited supply, 1kΩ resistor, switch, spare disconnected fuse, test leads.

Inspect meter and leads; confirm jack labels. Measure supply DC voltage, then reverse probes and observe sign. Turn power off, disconnect resistor and measure resistance. Test the spare fuse out of circuit. Build the resistor circuit and measure voltage across it; calculate current. Only if the meter manual permits, power off, move lead to fused mA jack and insert meter in series; power on briefly. Power off and restore lead to VΩ jack immediately.

**Lab record:** Write down your prediction, actual result, measurement units, instrument or software used, and one explanation for any discrepancy. Repeat with one changed input and compare. Keep personal data local.

## F-150 assignment

Use DC volts at battery terminals only initially. Identify constant versus switched power from documented accessory outlets using suitable adapters, not random BCM pins.

## Sportster assignment

Trace an accessible disconnected spare lamp or fuse on the bench; compare switch continuity off/on without energizing it.

## Knowledge check

<details>
  <summary>1. Why not measure ohms on a powered circuit?</summary>
  <p>External voltage can invalidate the reading or damage the meter.</p>
</details>

<details>
  <summary>2. Where does an ammeter go?</summary>
  <p>In series with a load, never directly across a source.</p>
</details>

<details>
  <summary>3. Does a continuity beep prove a ground is good?</summary>
  <p>No, loaded voltage drop is a better test of connection quality.</p>
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
