---
title: "08 · OBD-II & Vehicle Networks"
sidebar_position: 9
slug: /08-networks
---
# Week 8 — OBD-II & Vehicle Networks

**Estimated time:** 55 minutes reading · 90 minutes practical work · 35 minutes review. Estimates are for planning, not measured completion times.

## Lesson 8.1 — Core concepts

A sensor converts a physical quantity into a signal; a controller interprets it and may drive actuators. CAN is a differential shared bus with arbitration and error handling. OBD-II is a diagnostic interface and standardized service/PID framework, not a synonym for CAN. PWM encodes control through duty cycle.

## Lesson 8.2 — Applying the concepts

Standard read-only diagnostic queries still transmit requests; passive capture is different. Use a reputable scanner in read-only mode, never raw frame injection, coding, actuator tests or code clearing. A diagnostic trouble code identifies a detected condition, not necessarily a failed part. The older Sportster is not assumed to expose modern OBD-II.

## Lesson 8.3 — Worked example

For a synthetic standard RPM PID response with bytes 0x1A and 0xF8, RPM=(26×256+248)/4=1726. Coolant temperature byte 90 corresponds to 50°C using A−40.



## Practical lab

**Materials:** Computer with Node.js 24, text editor; optional reputable compatible OBD-II reader.

Create a local file with synthetic PID bytes. Decode RPM using the formula and coolant using A−40. Reject malformed lengths and unsupported PIDs. Generate ten synthetic readings and chart them or print a table. If using a scanner, follow its manual with truck parked and ignition state as specified; read supported PIDs only. Do not clear codes.

**Lab record:** Write down your prediction, actual result, measurement units, instrument or software used, and one explanation for any discrepancy. Repeat with one changed input and compare. Keep personal data local.

## F-150 assignment

Compare supported RPM and coolant readings with the synthetic decoder. Record units and timestamps, not VIN. No bus wiring modifications.

## Sportster assignment

Sketch conventional sensor/switch-to-load or ignition relationships from verified documentation; use external sensors for future telemetry rather than assuming an OBD port.

## Knowledge check

<details>
  <summary>1. Is OBD-II the same as CAN?</summary>
  <p>No, diagnostics and transport are distinct layers.</p>
</details>

<details>
  <summary>2. Does read-only scanning mean no transmitted messages?</summary>
  <p>No, standard queries transmit requests.</p>
</details>

<details>
  <summary>3. Does a DTC prove a component failed?</summary>
  <p>No, it identifies a detected condition requiring diagnosis.</p>
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
