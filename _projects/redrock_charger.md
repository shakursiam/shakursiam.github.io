---
layout: page
title: "Redrock Wireless Charger"
description: Portable Qi transmitter for sealed, waterproof products
img: assets/img/projects/redrock_charger_02.jpg
importance: 3
category: hardware
giscus_comments: false
---

**Compact Power Electronics · Labtronics Design Ltd**
**Role:** Hardware Design Engineer &nbsp;·&nbsp; <span style="color:#c9a227;">In Market</span>

Designed a self-contained portable wireless-charging transmitter for sealed and waterproof electronic products. The system operates from either an external DC supply or an internal battery with seamless automatic power-path switching and no user-visible interruption. Implements the full Qi closed-loop power control protocol — receiver load modulation is demodulated by the transmitter to regulate delivered power dynamically.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/redrock_charger_01.jpg" title="PCB layout" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/redrock_charger_02.jpg" title="Assembled board" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">DipTrace routing (left) and the assembled transmitter board (right).</div>

- Half-bridge resonant power stage excites a tuned coil/tank circuit; receiver communicates via load modulation; transmitter demodulates and adjusts drive.
- Automatic power-path management: external input prioritised; seamless battery fallback with regulated output rails for control logic and power stage.
- Ping-based standby detection minimises idle consumption while maintaining fast "place-and-charge" responsiveness.
- Foreign-object and fault protection: monitors transfer efficiency; halts on anomaly. Optional NTC-based thermal shutdown for sealed enclosures.
- Status indication: standby / charging / complete / fault conveyed through dedicated low-power indicator outputs.

**Technologies & Skills:** Qi v1.2, Half-bridge switching, LDO/Buck regulators, NTC thermal sensing, DipTrace, FlexPCB, Embedded C
