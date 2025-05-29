# Pomodoro Timer Project

This project showcases a simple yet effective Pomodoro timer built with an ESP32 microcontroller and an OLED display. It features a rotary encoder for selecting duration, automatic countdown, and buzzer alerts.

---

## 🧰 Hardware Components

- ESP32-C3 SuperMini development board
- 0.91" I2C OLED display
- EC11 rotary encoder (with button)
- Passive buzzer module
- Breadboard + jumper wires
- 3.7V Li-ion battery + switch module

<p align="center">
  <img src="../../assets/images/pomodo_timer_2.jpg" alt="Pomodoro Timer Hardware" width="400">
</p>

---

## 🧠 Key Code Snippet

```cpp
if (buttonPressed) {
  countdown = true;
  tone(buzzerPin, 1000, 300);
}

if (countdown) {
  timeLeft--;
  if (timeLeft <= 0) {
    for (int i = 0; i < 3; i++) {
      tone(buzzerPin, 1500, 200);
      delay(300);
    }
    countdown = false;
  }
}
```

> Full source code is available in the [GitHub repository](https://github.com/MiaoReynolds/AIplay).

---

## 🎬 Video Demonstrations

### Version 1: Basic Functionality Overview

<iframe width="100%" height="315" src="https://www.youtube.com/embed/8o0xLZvq88A" frameborder="0" allowfullscreen></iframe>

---

### Version 2: Rotary Control + Buzzer Feedback

<iframe width="100%" height="315" src="https://www.youtube.com/embed/vNcMjf2bBhE" frameborder="0" allowfullscreen></iframe>
