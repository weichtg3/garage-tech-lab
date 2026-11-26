---
title: "07 · Battery & Charging Systems"
sidebar_position: 8
slug: /07-charging
---
# Week 7 — Battery & Charging Systems

**Estimated time:** 55 minutes reading · 85 minutes practical work · 40 minutes review. Estimates are for planning, not measured completion times.

## Lesson 7.1 — Core concepts

A battery stores chemical energy; terminal voltage depends on chemistry, temperature, recent charging and load. Amp-hours measure charge capacity under specified conditions, not guaranteed usable capacity. Internal resistance causes voltage sag. State of charge and state of health are different.

## Lesson 7.2 — Applying the concepts

An alternator produces AC internally, rectifies it and regulates DC output; the Sportster uses a stator and regulator/rectifier architecture. Charging output depends on speed, temperature and load. Parasitic draw is current after shutdown and sleep; modern modules can wake periodically. A single voltage reading is not a diagnosis.

## Lesson 7.3 — Worked example

A constant 30mA draw consumes 0.72Ah/day or 5.04Ah/week. Two 55W lamps consume nominally 110W or 9.17A at 12V; actual available charging headroom must be measured or verified.

Use the [electrical toolbox](/tools) to explore the numbers.

## Practical lab

**Materials:** 5V current-limited supply, 100Ω and 1kΩ resistors rated at least 0.5W, DMM.

Use the 100Ω resistor as a simulated internal resistance in series with the 1kΩ load. Set 5V and 30mA limit. Measure load voltage and source voltage. Power off, add another 1kΩ load in parallel; repeat. Calculate expected sag from the voltage divider. This is a model, not a battery test. Do not intentionally discharge or short a vehicle battery.

**Lab record:** Write down your prediction, actual result, measurement units, instrument or software used, and one explanation for any discrepancy. Repeat with one changed input and compare. Keep personal data local.

## F-150 assignment

Record resting battery voltage at safe accessible terminals, ignition off, and time since shutdown. Review charging and sleep procedures in the correct service information before any running or parasitic-draw test.

## Sportster assignment

Draw stator → regulator/rectifier → battery → loads. Inventory lamp and accessory wattages; do not disconnect the battery with engine running or probe live stator/ignition wiring without the factory procedure.

## Knowledge check

<details>
  <summary>1. Does a healthy resting voltage prove capacity?</summary>
  <p>No, load performance and other tests are needed.</p>
</details>

<details>
  <summary>2. What does a rectifier do?</summary>
  <p>Converts alternating current to unidirectional current.</p>
</details>

<details>
  <summary>3. How much charge does 50mA consume in 24h?</summary>
  <p>1.2Ah.</p>
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
