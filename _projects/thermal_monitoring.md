---
layout: page
title: "Thermal Monitoring System — Berger Paints"
description: IoT sensor network for passive radiative cool-paint evaluation
img: assets/img/projects/thermal_monitoring_01.jpg
importance: 2
category: research
giscus_comments: false
---

**ESP32 IoT Research Platform · RISE-BUET · Funded by Berger Paints**
**Role:** Embedded Systems Designer & First Author &nbsp;·&nbsp; <span style="color:#2e8b57;">Research</span>

Designed and deployed an ESP32-based multi-channel environmental monitoring system to compare the thermal performance of Berger Cool Paint against standard emulsion paint. The system quantitatively demonstrated a consistent 4–5 °C surface-temperature reduction, with results submitted for peer-reviewed journal publication.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/thermal_monitoring_01.jpg" title="IoT sensor enclosure" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">One of three ESP32/DHT22 IoT sensor enclosures deployed across the pilot test cells.</div>

- Multi-point temperature acquisition: DHT22 and DS18B20 sensor array for simultaneous surface and ambient measurements under identical solar irradiance.
- Real-time cloud dashboard: MQTT-based data pipeline to AWS IoT Core; live monitoring and historical trend analysis.
- SD-card local logging with timestamps for long-duration unattended experiments; Python post-processing for statistical analysis.
- Demonstrated 4–5 °C reduction with Cool Paint; first author: *"Cool Paints and Coating Solutions: A Multi-Dimensional Analysis"* (journal, under review).

**Technologies & Skills:** ESP32, DHT22, DS18B20, MQTT, AWS IoT Core, SD-card logging, Python, KiCad

This is the hardware platform behind my manuscript *"Multi-Seasonal Assessment of Nanostructured Cool Paints for Passive Radiative Cooling in Tropical Climates Using IoT Sensor Networks"* (manuscript complete, pending submission — target: Elsevier *Energy and Buildings*). See [publications](/publications/) for details.
