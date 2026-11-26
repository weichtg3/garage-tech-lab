---
title: "01 · Electrical Fundamentals"
sidebar_position: 2
slug: /01-electrical-fundamentals
---
# Week 1 — Electrical Fundamentals

**Estimated time:** 45 minutes reading · 90 minutes practical work · 30 minutes review. Estimates are for planning, not measured completion times.

## Lesson 1.1 — Core concepts

Voltage is energy per unit charge, not the amount of charge. Current is charge per second; resistance converts electrical energy into heat. Conventional current travels from positive to negative in an external DC circuit. A battery maintains a potential difference even with no load. A 12V label is nominal, not a promise of constant voltage.

## Lesson 1.2 — Applying the concepts

In a series circuit, current is identical everywhere and voltage drops sum to supply voltage. In parallel, branch voltages are equal and currents sum. AC reverses polarity periodically; DC need not be perfectly steady. PWM is switched DC, not necessarily AC.

## Lesson 1.3 — Worked example

A 6Ω ideal load at 12V draws 2A and dissipates 24W. At 14V it draws 2.33A and 32.7W. Two 12Ω resistors in parallel equal 6Ω; in series they equal 24Ω. Do not build these high-power examples with ordinary small resistors.

Use the [electrical toolbox](/tools) to explore the numbers.

## Practical lab

**Materials:** 5V current-limited supply, two 1kΩ quarter-watt resistors, LED, 330Ω resistor, breadboard, DMM.

Set the supply to 5V and 30mA maximum. With power off connect two 1kΩ resistors in series; power on and measure each drop (about 2.5V). Power off and rearrange in parallel; measure each branch voltage (about 5V). Calculate total current for each arrangement (2.5mA and 10mA). Finally build a 330Ω resistor and LED in series, observe polarity, and measure the resistor drop to infer current. Disconnect before rearranging.

**Lab record:** Write down your prediction, actual result, measurement units, instrument or software used, and one explanation for any discrepancy. Repeat with one changed input and compare. Keep personal data local.

## F-150 assignment

Measure resting battery voltage at accessible terminals, ignition off; identify battery, fuse box and chassis return conceptually. Compare courtesy lights as parallel loads.

## Sportster assignment

Measure resting battery voltage using safe access; sketch battery, switch, lamp and frame return. Compare the stator AC source with battery DC.

## Knowledge check

<details>
  <summary>1. Why does a disconnected battery still show voltage?</summary>
  <p>Chemical energy maintains a potential difference even without current.</p>
</details>

<details>
  <summary>2. What happens to total current when equal resistors are placed in parallel?</summary>
  <p>It increases because equivalent resistance falls.</p>
</details>

<details>
  <summary>3. Is 12V always exactly 12V?</summary>
  <p>No, nominal system voltage varies with operating conditions.</p>
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
