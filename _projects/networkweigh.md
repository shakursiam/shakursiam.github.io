---
layout: page
title: "Networkweigh"
description: Ethernet-connected industrial weighing system controller
img: assets/img/projects/networkweigh_01.jpg
importance: 6
category: hardware
giscus_comments: false
---

**4-Layer Rigid PCB · Labtronics Design Ltd**
**Role:** Hardware Design Engineer &nbsp;·&nbsp; <span style="color:#c9a227;">In Market</span>

An industrial-grade weighing platform controller combining an ESP32 microcontroller with W5500 hard-wired Ethernet for deterministic factory-network integration. Incorporates a precision analogue front-end for load-cell signal conditioning and MCP23017T GPIO expansion for comprehensive peripheral interfacing.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/networkweigh_01.jpg" title="Assembled controller" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/networkweigh_02.jpg" title="DipTrace routing" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">Assembled unit in its enclosure (left) and the DipTrace PCB routing (right).</div>

- Ethernet: ESP32 + W5500 SPI Ethernet controller; hard-wired connectivity for reliable industrial operation independent of Wi-Fi infrastructure.
- Load-cell amplification: instrumentation amplifier front-end with configurable gain for accurate weight measurement across sensor ranges.
- GPIO expansion: MCP23017T I²C expander adds 16 digital I/Os for multi-relay, multi-switch, and indicator-panel control.
- User interface: precision micro-switch matrix for menu navigation, zero/tare/calibration operations.

**Technologies & Skills:** ESP32, W5500, MCP23017T, Instrumentation Amplifier, DipTrace, 4-layer PCB, Embedded C
