---
title: "03 · Grounds, Voltage Drop & Faults"
sidebar_position: 4
slug: /03-grounds
---
# Week 3 — Grounds, Voltage Drop & Faults

**Estimated time:** 45 minutes reading · 90 minutes practical work · 35 minutes review. Estimates are for planning, not measured completion times.

## Lesson 3.1 — Core concepts

Ground is a chosen reference and a return path. A chassis bond connects metal to battery negative; signal ground may be separate and sensitive to noise. An open circuit interrupts current, a short creates an unintended low-resistance path, and a high-resistance connection wastes voltage under load.

## Lesson 3.2 — Applying the concepts

Voltage drop is measured across a segment while current flows. Positive-side and return-side drops add to the difference between supply and load voltage. A high-impedance meter can display near supply voltage through a poor connection when the load is disconnected. Do not use a random chassis bolt as a verified ground.

## Lesson 3.3 — Worked example

At 5A, 0.2Ω of unwanted resistance drops 1V and dissipates 5W. A 5V bench circuit with a 1kΩ load and 1kΩ fault resistor has 2.5V across each and 2.5mA current.

Use the [electrical toolbox](/tools) to explore the numbers.

## Practical lab

**Materials:** 5V current-limited supply, two 1kΩ resistors, jumper, DMM.

Build a 1kΩ load across 5V with a direct return. Measure source and load voltage. Power off, add the second 1kΩ resistor in the return. Power on and measure across the fault resistor and load. Record node voltages relative to supply negative. Power off, remove the return entirely and predict the open-circuit reading before testing. Restore the original circuit.

**Lab record:** Write down your prediction, actual result, measurement units, instrument or software used, and one explanation for any discrepancy. Repeat with one changed input and compare. Keep personal data local.

## F-150 assignment

Locate documented chassis and engine bonds visually. Sketch a courtesy-light fault tree: source, fuse, controller, load, return. Do not probe module grounds or SRS wiring.

## Sportster assignment

Inspect accessible battery-negative cable and frame bonds for corrosion or loose hardware without disturbing them. Sketch how a poor shared return can affect multiple lamps.

## Knowledge check

<details>
  <summary>1. Why test voltage drop under load?</summary>
  <p>Resistance produces a measurable drop only when current flows.</p>
</details>

<details>
  <summary>2. Where does a return-side drop appear?</summary>
  <p>Between load return and source negative.</p>
</details>

<details>
  <summary>3. What distinguishes a short from an open?</summary>
  <p>A short is an unintended low-resistance path</p>
</details>

<details>
  <summary>4.  an open interrupts the path.</summary>
  <p>undefined</p>
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
