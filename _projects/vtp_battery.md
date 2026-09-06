---
layout: page
title: "Virtual Testing Platform for EV Batteries"
description: Research-grade Li-Po test & monitoring platform with embedded SoH/RUL AI
img: assets/img/projects/vtp_battery_02.jpg
importance: 1
category: research
giscus_comments: false
---

**RISE-BUET Research · Funded by Poly Cables Bangladesh**
**Role:** Research Assistant — Hardware Design &nbsp;·&nbsp; <span style="color:#2e8b57;">Active Research</span>

A research-grade battery test and monitoring platform developed at RISE-BUET to characterise Li-Po battery packs for electric vehicles. The hardware performs real-time voltage, current, and temperature logging during charge/discharge cycles and is being extended with embedded AI for State-of-Health (SoH) and Remaining-Useful-Life (RUL) prediction to enable predictive maintenance.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/vtp_battery_01.jpg" title="Bench validation setup" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/vtp_battery_02.jpg" title="Smart battery charger board" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">Live bench validation (left) and the smart battery-charger board developed for the platform (right), BUET Photonics Lab.</div>

- Battery charger IC: BQ24610 multi-cell Li-Ion/Li-Po charger with configurable charge current/voltage, power-path management, and fault reporting over I²C.
- Real-time measurement: high-resolution ADC sampling for cell-level voltage, pack current (shunt-based), and NTC temperature sensors.
- Data logging: UART/USB real-time stream to PC; SD-card local storage for long-duration unattended test cycles.
- Embedded AI: TinyML model for SoH prediction deployed on-device; co-author on related IEEE paper (under review).

**Technologies & Skills:** BQ24610, STM32/ESP32, I²C, High-res ADC, NTC, KiCad, Python, Embedded C, TinyML

This platform underlies my manuscript *"Edge-Deployed Battery State-of-Health Estimation on a Custom Synchronous Buck Charging Platform: A Cross-Dataset Lightweight Machine Learning Framework"* (under final review, target: Elsevier *Journal of Energy Storage*). See [publications](/publications/) for details.
