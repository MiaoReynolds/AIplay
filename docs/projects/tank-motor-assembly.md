---
title: "Mini Tank"
description: "A step-by-step hardware assembly note for a compact ESP32-C3 mini tank chassis with TT motors, L9110S motor driver, HC-SR04 ultrasonic sensor, tracks, sprockets, and battery holder."
tags: [tank robot, ESP32-C3, L9110S, TT motor, HC-SR04, hardware assembly]
---

# Mini Tank Motor Assembly

This build documents the hardware assembly process for a compact ESP32-C3 mini tank platform. The goal is to create a small tracked robot base with dual TT motors, an L9110S motor driver, an ultrasonic sensor, and a battery holder mounted into a layered chassis.

The platform can later be used as the movement base for an AI companion robot, a small autonomous rover, or a classroom robotics demo.

<figure class="motor-hero">
  <img src="../../assets/images/motor_1.jpg" alt="All parts for the mini tank assembly">
  <figcaption>Figure 1. Full parts layout before assembly.</figcaption>
</figure>

## Parts Overview

The first photo shows the complete set of components:

| Part | Quantity | Notes |
| --- | ---: | --- |
| Tank chassis | 1 | Main lower body |
| Body covers | 2 | Upper covers for electronics and battery holder |
| Tracks and sprockets | 2 sets | Left and right drive assemblies |
| Battery holder | 1 | Power source mount |
| TT motors | 2 | Left and right drive motors |
| ESP32-C3 Mini | 1 | Main microcontroller |
| L9110S motor driver | 1 | Dual motor driver board |
| HC-SR04 ultrasonic sensor | 1 | Distance sensing module |
| Jumper wires | Several | Motor, sensor, and power wiring |

## 1. Install TT Motors Into the Chassis

Figures 2 to 5 show the TT motor installation process. Place the two TT motors into the tank chassis, align the motor shafts with the sprocket positions, and make sure the wires are routed toward the electronics area before closing the structure.

<div class="motor-strip motor-strip-four">
  <figure>
    <img src="../../assets/images/motor_2.jpg" alt="TT motor installation step 1">
    <figcaption>Figure 2</figcaption>
  </figure>
  <figure>
    <img src="../../assets/images/motor_3.jpg" alt="TT motor installation step 2">
    <figcaption>Figure 3</figcaption>
  </figure>
  <figure>
    <img src="../../assets/images/motor_4.jpg" alt="TT motor installation step 3">
    <figcaption>Figure 4</figcaption>
  </figure>
  <figure>
    <img src="../../assets/images/motor_5.jpg" alt="TT motor installation step 4">
    <figcaption>Figure 5</figcaption>
  </figure>
</div>

## 2. Prepare Motor Wiring to L9110S

Figures 6.1 to 6.4 show the motor wiring preparation. The two motor outputs are connected to the L9110S driver channels. Keep the wiring short enough to fit inside the top cover, but leave enough slack for maintenance and debugging.

<div class="motor-strip motor-strip-four">
  <figure>
    <img src="../../assets/images/motor_6.1.jpg" alt="Motor wiring to L9110S step 6.1">
    <figcaption>Figure 6.1</figcaption>
  </figure>
  <figure>
    <img src="../../assets/images/motor_6.2.jpg" alt="Motor wiring to L9110S step 6.2">
    <figcaption>Figure 6.2</figcaption>
  </figure>
  <figure>
    <img src="../../assets/images/motor_6.3.jpg" alt="Motor wiring to L9110S step 6.3">
    <figcaption>Figure 6.3</figcaption>
  </figure>
  <figure>
    <img src="../../assets/images/motor_6.4.jpg" alt="Motor wiring to L9110S step 6.4">
    <figcaption>Figure 6.4</figcaption>
  </figure>
</div>

## 3. Mount ESP32-C3 Mini and DC Bus

Figure 7 shows the ESP32-C3 Mini placed into its slot. A small DC bus is also added to simplify power distribution from the battery holder to the driver board and controller.

<figure class="motor-single">
  <img src="../../assets/images/motor_7.jpg" alt="ESP32-C3 Mini and DC bus placement">
  <figcaption>Figure 7. ESP32-C3 Mini and DC bus placement.</figcaption>
</figure>

## 4. Install Sprockets and Tracks

Figures 8.1 and 8.2 show the mechanical drive assembly. Install the sprockets on the TT motor shafts and passive axle positions, then wrap the tracks around both sides. Check that both tracks rotate freely before continuing.

<div class="motor-strip motor-strip-two">
  <figure>
    <img src="../../assets/images/motor_8.1.jpg" alt="Installing sprockets and tracks step 8.1">
    <figcaption>Figure 8.1</figcaption>
  </figure>
  <figure>
    <img src="../../assets/images/motor_8.2.jpg" alt="Installing sprockets and tracks step 8.2">
    <figcaption>Figure 8.2</figcaption>
  </figure>
</div>

## 5. Connect Electronics

Figures 9 and 10 show the wiring stage. The L9110S driver receives control signals from the ESP32-C3 Mini. The HC-SR04 ultrasonic sensor is connected for distance detection. Power is routed through the DC bus from the battery holder.

<div class="motor-strip motor-strip-two">
  <figure>
    <img src="../../assets/images/motor_9.jpg" alt="Tank wiring step 9">
    <figcaption>Figure 9</figcaption>
  </figure>
  <figure>
    <img src="../../assets/images/motor_10.jpg" alt="Tank wiring step 10">
    <figcaption>Figure 10</figcaption>
  </figure>
</div>

### Wiring Table

| ESP32 | Board | Parts |
| --- | --- | --- |
| 20 | L9110N A-1A | Motor R |
| 21 | L9110N A-1B | Motor R |
| 3 | L9110N B-1A | Motor L |
| 4 | L9110N B-1B | Motor L |
| 5 | HC-SR04 Trigger | Ultrasonic Sensor |
| 6 | HC-SR04 Echo | Ultrasonic Sensor |
| 5V | DC bus | Battery Box |
| GND | DC bus | Battery Box |
| 3.3V | HC-SR04 VCC | Ultrasonic Sensor |

## 6. Flash the Program

Figure 11 shows the programming step. After the wiring is complete, upload the initial firmware to the ESP32-C3 Mini and test the motor direction before closing the body.

<figure class="motor-single">
  <img src="../../assets/images/motor_11.jpg" alt="Flashing the ESP32-C3 Mini program">
  <figcaption>Figure 11. Program upload and initial testing.</figcaption>
</figure>

## 7. Install the Upper Cover and Battery Holder

Figure 12 shows the second body cover installed. This piece also works as the battery holder support, keeping the battery pack above the controller layer.

<figure class="motor-single">
  <img src="../../assets/images/motor_12.jpg" alt="Installing second body cover and battery holder">
  <figcaption>Figure 12. Second body cover and battery holder installation.</figcaption>
</figure>

## 8. Final Assembly

Figures 13 and 14 show the finished mini tank platform. At this stage, the base is ready for firmware tuning, ultrasonic sensing tests, and higher-level robot behavior experiments.

<div class="motor-strip motor-strip-two">
  <figure>
    <img src="../../assets/images/motor_13.jpg" alt="Finished mini tank assembly view 13">
    <figcaption>Figure 13</figcaption>
  </figure>
  <figure>
    <img src="../../assets/images/motor_14.jpg" alt="Finished mini tank assembly view 14">
    <figcaption>Figure 14</figcaption>
  </figure>
</div>

## 9. Vibe Coding Prompt

???+ code "Vibe Coding Prompt"

    ```text
    --8<-- "assets/code/mini-tank-vibe-coding-prompt.txt"
    ```

## 10. Firmware Code

???+ code "ESP32-C3 Mini Tank Firmware"

    ```cpp
    --8<-- "assets/code/mini-tank-esp32c3.ino"
    ```

<style>
.motor-hero,
.motor-single,
.motor-strip figure {
  margin: 1.2rem 0;
}

.motor-hero img {
  display: block;
  width: min(100%, 860px);
  max-height: 520px;
  object-fit: cover;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.16);
}

.motor-single img {
  display: block;
  width: min(100%, 720px);
  max-height: 460px;
  object-fit: cover;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.14);
}

.motor-strip {
  display: grid;
  gap: 0.8rem;
  margin: 1.25rem 0 2rem;
}

.motor-strip-four {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.motor-strip-two {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.motor-strip img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.14);
}

.motor-hero figcaption,
.motor-single figcaption,
.motor-strip figcaption {
  margin-top: 0.45rem;
  color: #94a3b8;
  font-size: 0.8rem;
  text-align: center;
}

.md-typeset details.code[open] .highlight {
  max-height: 18rem;
  overflow: auto;
}

@media (max-width: 900px) {
  .motor-strip-four {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .motor-strip-four,
  .motor-strip-two {
    grid-template-columns: 1fr;
  }
}
</style>
