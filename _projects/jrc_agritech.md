---
layout: page
title: "JRC AgriTech Board v3.0"
description: Agricultural automation controller, ESP32 + RS485
img: assets/img/projects/jrc_agritech_01.jpg
importance: 4
category: hardware
giscus_comments: false
---

**4-Layer Rigid PCB · Frontech Limited**
**Role:** Lead Hardware Engineer &nbsp;·&nbsp; <span style="color:#2e8b57;">In Production</span>

Full product development of a smart agricultural automation controller based on ESP32-WROOM. Led the complete lifecycle from requirements capture through 4-layer KiCad PCB layout to production handoff, with a focus on industrial RS485 communication, multi-sensor integration, and battery-backed portable operation.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/jrc_agritech_01.jpg" title="3D render" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/jrc_agritech_02.jpg" title="KiCad PCB layout" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">3D render (left) and KiCad routing (right) of the v3.0 controller board.</div>

- RS485 industrial communication: MAX485CSA+ transceiver for noise-immune long-distance sensor networks (Modbus RTU compatible).
- 20 GPIO pins with I²C (GPIO13 SDA / GPIO14 SCL) and UART (RXD0/TXD0) clearly broken out for field sensor connections.
- Power system: USB Type-C → TP4056 charger → FP6291 3.3 V-to-5 V boost converter for dual-rail portable operation.
- OLED-128O064D display for real-time parameter visualisation; 2× ASSR-1218 solid-state relays for irrigation/actuator control.
- Sensor port: 4-pin (3V3, GND, D+, A+) for plug-and-play analogue/digital sensor attachment.

**Technologies & Skills:** ESP32-WROOM, MAX485CSA+, ASSR-1218, TP4056, FP6291, KiCad, 4-layer PCB, Embedded C
