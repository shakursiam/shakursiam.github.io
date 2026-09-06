---
layout: page
title: "Redrock G-Force Module"
description: Ultra-compact Qi-enabled wearable impact/fall-detection sensor
img: assets/img/projects/redrock_01.jpg
importance: 1
category: hardware
giscus_comments: false
---

**Flexible PCB · 21 × 10 mm · Labtronics Design Ltd**
**Role:** Hardware Design Engineer &nbsp;·&nbsp; <span style="color:#c9a227;">In Market</span>

Designed and developed an ultra-compact, self-contained G-force sensing and alerting module on a single 21×10&nbsp;mm flexible PCB (V1). The device integrates accelerometer-based impact detection, multi-level LED feedback, Qi wireless charging, and a complete battery management system intended to be laminated directly onto a 24&nbsp;mAh LiPo cell and encapsulated in medical-grade silicone (IP67+). Primary applications include sports impact monitoring (helmets, mouthguards), elderly fall-detection wearables, and industrial shock/vibration sensing.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/redrock_01.jpg" title="Redrock flex PCB, V1" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/redrock_02.jpg" title="Redrock bench test setup" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">Version 1 — hand-held flex PCB (left) and bench validation with an ST accelerometer eval board (right).</div>

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/redrock_03.jpg" title="Redrock V2 3D render" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">Version 2 — refined flex-PCB layout.</div>

- MCU: STM32L0 in ultra-low-power STOP mode (~1.2 µA deep-sleep), woken by motion interrupt from ADXL362 accelerometer (I²C).
- G-force sensing range ±2 g to ±16 g configurable; total magnitude G = √(X²+Y²+Z²); thresholds: Green &lt;1.5 g, Yellow 1.5–2.5 g, Red ≥2.5 g.
- Qi wireless charging: BQ51013B WPC v1.2 receiver → TP4056 linear charger (24 mA, ~1C rate) → DW01A + dual-MOSFET battery protection PCM.
- LED alerts driven at 50% PWM; firmware-configurable on-charge reset timer via CHG#/STDBY# status pins.
- In-circuit firmware update via SWD pads (MOSI, MISO, SCK, RST, VCC, GND).

**Technologies & Skills:** STM32L0, ADXL362, BQ51013B, TP4056, DW01A, DipTrace, FlexPCB, Embedded C, SWD
