---
title: "09 · Raspberry Pi & GPIO"
sidebar_position: 10
slug: /09-raspberry-pi
---
# Week 9 — Raspberry Pi & GPIO

**Estimated time:** 50 minutes reading · 100 minutes practical work · 35 minutes review. Estimates are for planning, not measured completion times.

## Lesson 9.1 — Core concepts

A Raspberry Pi is a Linux computer; GPIO uses 3.3V logic and is not an automotive interface. GPIO numbering may refer to physical header positions or BCM numbers. UART uses asynchronous TX/RX, I²C uses addressed shared clock/data, SPI uses clock and chip select. Standard Pi GPIO has no general-purpose analog input; use a suitable ADC.

## Lesson 9.2 — Applying the concepts

Logic level, power voltage and current rating are different. An ADC maps an analog range to digital codes. Isolation or protected conditioning is necessary for vehicle signals. A divider alone does not protect against all automotive transients. Identify board model and existing GPS/camera pin usage before attaching anything.

## Lesson 9.3 — Worked example

A 10-bit ADC spanning 0–3.3V has ideal step size about 3.3/1024=3.22mV. A 3.3V output driving a 2V LED through 1kΩ draws about 1.3mA.



## Practical lab

**Materials:** Existing Pi, correct power supply, monitor or SSH, 1kΩ resistor, LED, board documentation; optional GPIO library supported by OS.

Boot the Pi with its normal supply. Run cat /proc/device-tree/model and cat /etc/os-release. Identify occupied GPS/camera interfaces and locate a verified unused GPIO and ground in the board pinout. Shut down and disconnect power before wiring an LED and 1kΩ resistor. Use a supported GPIO library to toggle the selected output slowly, then clean up and shut down. If pinout/library compatibility is uncertain, use a software-only mock instead.

**Lab record:** Write down your prediction, actual result, measurement units, instrument or software used, and one explanation for any discrepancy. Repeat with one changed input and compare. Keep personal data local.

## F-150 assignment

Design a protected interface block for future OBD adapter data; keep Pi separate from vehicle wiring for now.

## Sportster assignment

Design an external sensor collector with protected supply and signal conditioning; no direct connection to ignition or stator.

## Knowledge check

<details>
  <summary>1. Can a 12V wire connect to GPIO?</summary>
  <p>No.</p>
</details>

<details>
  <summary>2. Why use an ADC?</summary>
  <p>To convert an analog signal into digital measurements.</p>
</details>

<details>
  <summary>3. Why identify the Pi model first?</summary>
  <p>Pinout, camera tools, OS and libraries vary.</p>
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
