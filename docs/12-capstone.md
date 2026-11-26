---
title: "12 · Garage Intelligence Capstone"
sidebar_position: 13
---
# Week 12 — Garage Intelligence Capstone

**Time:** 3–5 hours · **Goal:** Combining safe sensors, Pi telemetry, local APIs, visualization, and optional local AI.

## What you'll learn

Combining safe sensors, Pi telemetry, local APIs, visualization, and optional local AI. Begin by identifying the source, load, return path and protective devices in every circuit. Draw the circuit before touching any wires.

## Step-by-step bench lab

1. Prepare a current-limited low-voltage power supply and verify its output with a meter.
2. Draw the expected circuit, labeling source, load, return and measurement points.
3. Build a local Node.js ingestion service, simulated vehicle feed and React dashboard.
4. Record expected and actual observations. Explain any difference.
5. De-energize, disconnect, and restore your workspace.

## Compare the vehicles

Design separate F-150 OBD-II and Sportster external-sensor collectors, with shared data schema.

The **2014 F-150** adds body control electronics and modern interfaces; the **1997 Sportster 883 Hugger** provides a more direct example of switches, wiring and charging components.

## Questions to answer

1. Where does the current return to the source?
2. What would happen if the ground connection developed excessive resistance?
3. Which measurement could confirm your theory without modifying factory wiring?
4. What fuse, conductor and connector constraints would matter in a real installation?

## Safety and specification checks

:::warning
Keep telemetry read-only until hardware and safety considerations are separately validated. Any model-year wiring color, connector pinout, or component rating must be verified using factory service information.
:::

## Completion

- [ ] I can explain the core concept in my own words.
- [ ] I drew the relevant circuit.
- [ ] I performed the safe bench lab.
- [ ] I documented a comparison between the two vehicles.
- [ ] I answered the four questions above.

Next: consult the [full curriculum](./overview.md) and [Garage Labs](./labs/overview.md).
