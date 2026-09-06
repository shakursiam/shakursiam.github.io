---
layout: page
title: "Kynekt — Smart Tool Tracking & Control"
description: LoRa-mesh IoT module for cordless power-tool fleet tracking
img: assets/img/projects/kynekt_01.jpg
importance: 2
category: hardware
giscus_comments: false
---

**4-Layer Rigid PCB · 25 × 25 mm · Labtronics Design Ltd**
**Role:** Hardware Design Engineer &nbsp;·&nbsp; <span style="color:#c9a227;">In Market</span>

Kynekt is a miniaturised IoT module that attaches to cordless power tools (16–24&nbsp;V battery-powered) and forms a self-organising LoRa mesh network. A mobile app activates/deactivates tools and tracks their GPS location remotely — nearby tools are reached via BLE; distant tools via peer-to-peer LoRa mesh packet routing.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/kynekt_01.jpg" title="Kynekt module, V1" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/kynekt_02.jpg" title="LoRa mesh network diagram" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">Version 1 module (left) and the LoRa mesh / BLE network topology it forms across a tool fleet (right).</div>

- Core MCU: ESP32-C3FH4 managing Wi-Fi, BLE 5.0, LoRa (LLCC68), and GNSS (ATGM336H) subsystems concurrently (V1).
- Motion wake-up: ADXL345 accelerometer interrupt drives deep-sleep/wake cycle; MCU only active on tool motion or mesh command receipt.
- Power management: 16–24 V cordless battery input → 24 V-to-5 V buck → TP4056 LiPo charger → DW01A protection → 3.3 V LDO for MCU/sensors.
- Output power switching: N-channel MOSFET low-side switch enables/disables main tool power path under firmware command.
- Data packet: Tool ID, Active Status, GNSS location; LoRa mesh routing forwards packets peer-to-peer until all nodes are updated.
- PCB: 4-layer rigid DipTrace layout with dedicated RF antenna keep-out zones for both LoRa and BLE.

**Technologies & Skills:** ESP32-C3FH4, LLCC68 LoRa, BLE 5.0, ATGM336H GNSS, ADXL345, TP4056, DipTrace, 4-layer PCB, Embedded C
