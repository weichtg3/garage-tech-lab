---
title: "01 · Electrical Fundamentals"
sidebar_position: 2
---
# Week 1 — Electrical Fundamentals

**Time:** 3–4 hours · **Outcome:** confidently explain voltage, current, resistance, power, AC/DC and closed current paths.

## 1. Voltage, current, resistance

Think of voltage as the electrical **potential difference** between two points, current as the **rate at which charge flows**, and resistance as how much a component opposes that current.

- **Voltage (V)** is measured *across* two points.
- **Current (A)** is measured *through* a branch.
- **Resistance (Ω)** is typically measured with a circuit **unpowered**.
- **Power (W)** is the rate of energy transfer.

For a simple resistive load:

```text
I = V / R
P = V × I
```

**Worked example:** A 12V supply and 6Ω resistance draw 2A and dissipate 24W. At 14V, the same ideal resistance draws 2.33A and dissipates 32.7W. Real LEDs and motors need different models.

Try changing these inputs in the [interactive Ohm's law calculator](/tools).

## 2. AC versus DC

**DC** has a consistent polarity; the truck and motorcycle battery supply DC. **AC** periodically reverses polarity; the Sportster's stator generates AC which its regulator/rectifier converts to regulated DC for the battery and accessories. Your F-150 alternator also generates AC internally before rectifying it.

A USB adapter usually uses a switching DC-DC converter, not a simple resistor, to change the vehicle's supply voltage to 5V or a negotiated higher USB-C voltage.

## 3. A complete circuit

```text
Battery (+) → fuse → switch → load → return wire/chassis → battery (−)
```

Ground is the **return path**, not a sink that consumes electricity. A corroded chassis connection can add resistance and cause voltage drop when current flows.

## 4. Series and parallel

- In **series**, the same current flows through each component; voltage divides among them.
- In **parallel**, each branch receives approximately the same source voltage; branch currents add.

Accessory loads are generally connected in parallel to the supply through properly designed, independently protected branches.

## 5. Lab — start on the bench

**You need:** digital multimeter, a current-limited 5V bench supply (or a safe USB 5V power source), breadboard, LED, 330Ω resistor, jumpers.

1. With power disconnected, assemble a 5V supply → 330Ω resistor → LED → return path.
2. Confirm LED polarity and the supply's output voltage before energizing.
3. Set the bench supply current limit low, e.g. 30mA, if the supply supports it.
4. Energize. Measure voltage **across** the resistor and LED with DC volts mode.
5. Divide resistor voltage by 330Ω to estimate series current.
6. Disconnect the supply before reconfiguring any leads.

**Expected ideal estimate:** (5V − ~2V LED drop) / 330Ω ≈ 9mA. Actual results vary.

:::danger Multimeter safety
Never use continuity or resistance mode on a powered circuit. Never connect a meter configured for **current** directly across a battery or supply. Check probe sockets before each measurement.
:::

## 6. Vehicle observation lab

With the vehicles stationary, ignition off, and meter correctly configured for DC voltage, compare battery terminal voltage on the F-150 and the Sportster. Record the readings and the time since either engine last ran. Do **not** assume a single resting voltage reading determines battery health.

Use factory service information and proper access precautions. Leave vehicle wiring unchanged.

## 7. Check your understanding

<details>
  <summary>1. A 12V resistor draws 2A. What is its resistance?</summary>
  <p>6Ω, from R = V/I.</p>
</details>

<details>
  <summary>2. Why does a bad ground cause a light to dim?</summary>
  <p>A high-resistance return path wastes voltage when load current flows, leaving less voltage across the lamp.</p>
</details>

<details>
  <summary>3. Is stator output AC or DC?</summary>
  <p>AC; the regulator/rectifier produces regulated DC for the battery system.</p>
</details>

## Completion checklist

- [ ] I can explain V, A, Ω, and W without confusing them.
- [ ] I built a low-current series LED circuit.
- [ ] I measured voltage across a component safely.
- [ ] I measured and recorded both batteries' resting voltage.
- [ ] I completed the questions above.
