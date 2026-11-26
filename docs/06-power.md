---
title: "06 · USB & DC-DC Power Conversion"
sidebar_position: 7
slug: /06-power
---
# Week 6 — USB & DC-DC Power Conversion

**Estimated time:** 50 minutes reading · 90 minutes practical work · 35 minutes review. Estimates are for planning, not measured completion times.

## Lesson 6.1 — Core concepts

A buck converter reduces voltage using switched energy storage; a boost converter raises it. A buck-boost handles input above or below the target. A linear regulator dissipates approximately (Vin − Vout) × I as heat. Switching converters have losses, ripple and current limits.

## Lesson 6.2 — Applying the concepts

USB voltage is normally 5V until supported negotiation requests another profile. A charger advertises capability; a device draws what it needs within the negotiated limits. Automotive supplies face cranking dips, load-dump transients and reverse polarity. Choose automotive-rated protection, not merely a module marked 12V.

## Lesson 6.3 — Worked example

A 5V 2A USB load consumes 10W. At 90% efficiency, 12V input draws 10/(0.9×12)=0.93A. A linear regulator delivering 5V at 1A from 12V would dissipate 7W.

Use the [electrical toolbox](/tools) to explore the numbers.

## Practical lab

**Materials:** Current-limited bench supply, documented 12V-input USB adapter, USB power meter, compatible low-power USB load.

Set supply within adapter rating and a conservative current limit. Connect adapter with power off, verify polarity, then energize. Measure unloaded output using USB meter. Attach a small rated load and record input voltage/current from supply display and output voltage/current from USB meter. Calculate efficiency. Repeat at a second supported input voltage. Stop if overheating or unstable output occurs.

**Lab record:** Write down your prediction, actual result, measurement units, instrument or software used, and one explanation for any discrepancy. Repeat with one changed input and compare. Keep personal data local.

## F-150 assignment

Compare dashcam hardwire converter input and camera output requirements; design ignition sensing and battery cutoff on paper.

## Sportster assignment

Compare CarPlay constant and switched feeds with USB charging. Estimate standby energy and consider a protected shutdown strategy for a Pi.

## Knowledge check

<details>
  <summary>1. Does a 2A USB output imply 2A at 12V input?</summary>
  <p>No, input current depends on power, voltage and efficiency.</p>
</details>

<details>
  <summary>2. Why is a generic buck board not automatically automotive-safe?</summary>
  <p>It may lack transient and reverse-polarity protection.</p>
</details>

<details>
  <summary>3. What does USB PD negotiate?</summary>
  <p>A supported power contract including voltage and current limits.</p>
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
