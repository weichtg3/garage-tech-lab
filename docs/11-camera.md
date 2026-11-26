---
title: "11 · Camera & Edge AI"
sidebar_position: 12
slug: /11-camera
---
# Week 11 — Camera & Edge AI

**Estimated time:** 45 minutes reading · 100 minutes practical work · 35 minutes review. Estimates are for planning, not measured completion times.

## Lesson 11.1 — Core concepts

Camera interfaces and drivers depend on Pi generation and OS. Modern Raspberry Pi OS often uses rpicam tools; older installations may use legacy utilities. Frame rate, resolution, compression and exposure affect storage and CPU load. Motion detection compares frames; object detection classifies/localizes objects and is not infallible.

## Lesson 11.2 — Applying the concepts

Timestamp images in UTC and use monotonic time for elapsed intervals. Associate GPS samples only within a defined freshness window. Use bounded storage, rotation, and local-only access. Older Pi models may be better suited to image capture with inference on a separate computer.

## Lesson 11.3 — Worked example

A 4Mb/s video stream uses about 1.8GB/hour in decimal units before overhead. One 200kB image every 10 seconds uses about 72MB/hour.



## Practical lab

**Materials:** Pi and compatible camera, correct power supply, local test scene, storage, optional computer for processing.

Identify OS and camera model; power off before checking ribbon connections. On compatible modern OS, try rpicam-hello --list-cameras and rpicam-still -o test.jpg; otherwise consult the installed camera stack. Capture a stationary test scene. Record UTC timestamp and synthetic GPS sample in a local JSON record. Calculate storage budget and implement a maximum file count in a disposable test directory. Test motion detection with a moving object in your own workspace.

**Lab record:** Write down your prediction, actual result, measurement units, instrument or software used, and one explanation for any discrepancy. Repeat with one changed input and compare. Keep personal data local.

## F-150 assignment

Design an event recorder that does not obstruct visibility or distract; compare with the existing dashcam rather than replacing safety functions.

## Sportster assignment

Consider weather, vibration and secure mounting; keep experiments stationary until the hardware is suitable.

## Knowledge check

<details>
  <summary>1. Why use a freshness window for GPS?</summary>
  <p>A stale position may misrepresent the image location.</p>
</details>

<details>
  <summary>2. What is edge AI?</summary>
  <p>Inference near the data source rather than necessarily in a cloud service.</p>
</details>

<details>
  <summary>3. Why cap storage?</summary>
  <p>To prevent disk exhaustion and recorder failure.</p>
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
