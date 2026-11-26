---
title: Raspberry Pi & GPS Lab
sidebar_position: 4
---
# Raspberry Pi: GPS + Camera Projects

Your older Raspberry Pi already has a GPS module and camera, making it useful for hands-on embedded development without first buying new equipment.

## First: identify the hardware

Record the Pi model, OS, GPIO voltage, camera connection, GPS chipset, how the GPS presents its serial data, and available power supply. Do not assume modern Pi guides apply to older boards.

## Milestone 1 — GPS sentences

- Read the documented serial port used by the GPS attachment.
- Inspect NMEA GGA/RMC sentences from the device.
- Parse position, timestamp and speed fields.
- Save sample telemetry locally as JSON Lines.

## Milestone 2 — Camera

- Test the camera using the appropriate tools for that Pi OS and camera generation.
- Capture an image with timestamp metadata.
- Combine a camera event with the latest GPS sample.

## Milestone 3 — Garage Intelligence

Export private local telemetry to a Node.js service, then visualize measurements in a React dashboard. Keep raw trip/location recordings off the public course website.

**Safety:** Pi pins are 3.3V logic. Vehicle voltages require rated protection, isolation or designed voltage-conditioning hardware.
