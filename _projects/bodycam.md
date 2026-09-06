---
layout: page
title: "Body Camera Prototype"
description: High-performance embedded imaging system, global-shutter CMOS
img: assets/img/projects/bodycam_01.jpg
importance: 5
category: hardware
giscus_comments: false
---

**STM32H743VIT6 · NOIP1SN1300A Global-Shutter Sensor**
**Role:** Embedded Systems & Hardware Engineer &nbsp;·&nbsp; <span style="color:#c76b1f;">Prototype</span>

A purpose-built body-worn camera prototype based on the STM32H743VIT6 (Cortex-M7, 480&nbsp;MHz) and ON Semiconductor NOIP1SN1300A global-shutter CMOS image sensors. Three interchangeable sensor configurations — 1.3&nbsp;MP, 0.5&nbsp;MP, and 0.3&nbsp;MP — allow trade-offs between resolution and frame rate. The global-shutter architecture eliminates rolling-shutter artefacts critical for fast-motion capture in law-enforcement and field applications.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/bodycam_01.jpg" title="Assembled board, front" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/bodycam_02.jpg" title="Assembled board, back" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/bodycam_03.jpg" title="Global-shutter CMOS sensor die" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">Assembled prototype board (left, middle) and the NOIP1SN1300A global-shutter sensor die (right).</div>

- Processor: STM32H743VIT6 Cortex-M7 @ 480 MHz; hardware JPEG encoder, DMA2D, 1 MB SRAM, 2 MB Flash.
- Image sensor: ON Semi NOIP1SN1300A 1.3 MP global-shutter monochrome CMOS; connected via STM32 DCMI parallel interface (8-bit, pixel clock + HSYNC/VSYNC).
- Three sensor configurations: PYTHON 1300 (1.3 MP), PYTHON 500 (0.5 MP), PYTHON 300 (0.3 MP) — interchangeable for resolution/frame-rate trade-off.
- Storage: external SDRAM frame buffer; SDMMC interface for SD-card recording; USB OTG for data offload.
- Power management: multi-rail PMIC delivering 1.8 V (sensor I/O), 2.8 V (sensor analogue), 3.3 V (MCU/peripherals) with LiPo charging.

**Technologies & Skills:** STM32H743VIT6, NOIP1SN1300A, DCMI, SDMMC, USB OTG, DipTrace/KiCad, Embedded C, FreeRTOS
