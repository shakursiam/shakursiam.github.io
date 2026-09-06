---
layout: page
title: "Custom ESP32 Development Board"
description: Pin-compatible production-quality ESP32-WROOM-32 dev board
img: assets/img/projects/esp32_devboard_01.jpg
importance: 7
category: hardware
giscus_comments: false
---

**2-Layer PCB · EasyEDA Pro · AUST Rocketry Club**
**Role:** Hardware Designer &nbsp;·&nbsp; <span style="color:#2e8b57;">Completed</span>

A fully custom ESP32-WROOM-32 development board designed as a pin-compatible, production-quality replacement for standard DevKit modules. Designed and manufactured for the AUST Rocketry Club, with improved power-supply decoupling, reliable auto-reset firmware-flash circuitry, and a user LED.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/esp32_devboard_01.jpg" title="3D render" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/esp32_devboard_02.png" title="3D view, EasyEDA" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/esp32_devboard_03.png" title="PCB layout, EasyEDA" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">3D render and EasyEDA Pro layout views of the custom dev board.</div>

- USB-to-Serial: CP2102 UART bridge with DTR+RTS auto-reset circuit for one-click firmware upload from Arduino IDE / PlatformIO.
- Power: Micro-USB 5 V input → AMS1117 3.3 V LDO; power-select jumper for external 3.3 V supply in battery-powered applications.
- Controls: Reset button, Boot/Flash button, User LED (GPIO2); all ESP32 GPIOs broken out on 2.54 mm headers for breadboard compatibility.
- Schematic and layout completed in EasyEDA Pro; 2D layout and 3D render validated before fabrication.

**Technologies & Skills:** ESP32-WROOM-32, CP2102, AMS1117, EasyEDA Pro, 2-layer PCB
