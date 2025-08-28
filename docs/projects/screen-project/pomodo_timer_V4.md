# Pomodoro with 1.3 inch OLED, Knob Encoder, Buttons

This project showcases a simple yet effective Pomodoro timer built with an ESP32 and an integrated 1.3 OLED display with knob and buttons. It can be used for more interesting projects as well

---

## 🧰 Hardware Components

- A 1.3-inch SH1106 OLED display connected via I2C (SDA=GPIO19, SCL=GPIO23)
- An EC11 rotary encoder (A=GPIO5, B=GPIO17, Push=GPIO18)
- A Confirm button on GPIO22 (functions the same as the rotary push button)
- A Back button on GPIO16 (used to exit countdown and return to main menu)

![Pomodoro Timer Hardware](esp32knob13OLED.png)

The pinout is as follow:

| OLED Pin | GPIO | Remark |
|--------|---------|---------|
| Confirm |22 | Panel button |
| SDA | 19 | OLED |
| SCL | 23 | OLED |
| Push | 18 | Encoder button |
| TRA | 5 | EC11 Encoder |
| TRB | 17 | EC11 Encoder |
| Back | 16 | Panel button |


---

GPT Prompt for the Code:
Generate Arduino C++ code for an ESP32-based Pomodoro timer using the following hardware setup:

- A 1.3-inch SH1106 OLED display connected via I2C (SDA=GPIO19, SCL=GPIO23)
- An EC11 rotary encoder (A=GPIO5, B=GPIO17, Push=GPIO18)
- A Confirm button on GPIO22 (functions the same as the rotary push button)
- A Back button on GPIO16 (used to exit countdown and return to main menu)

Requirements:
1. Display a scrollable menu of five options: "Pomodoro 10 min", "Pomodoro 15 min", "Pomodoro 20 min", "Pomodoro 25 min", and "Info".
2. Show 4 menu items on screen at a time, and highlight the currently selected one.
3. Use the rotary encoder to scroll through the menu, and use either the rotary push button or the Confirm button to start a Pomodoro countdown.
4. During countdown, display the remaining time in mm:ss format in large centered digits.
5. Pressing the Back button at any time during the countdown returns to the main menu.
6. Selecting "Info" displays author information for 3 seconds before returning to the menu.
7. Do not include any buzzer or sound feedback.
8. Use the U8g2 library and appropriate fonts for the OLED screen.
---

## 🧠 Key Code Snippet

<details>
<summary>Click to expand full code</summary>
```cpp
#include <U8g2lib.h>
#include <Wire.h>
// Screen（SH1106 OLED）
#define OLED_SDA 19
#define OLED_SCL 23
// EC11 encoder
#define ROTARY_A     5
#define ROTARY_B     17
#define ROTARY_PUSH  18
// button
#define BTN_CONFIRM  22
#define BTN_BACK     16
// buzzer
#define BUZZER_PIN   21  
// manu
const int menuCount = 5;
const char* menuItems[menuCount] = {
  "Pomodoro 10 min",
  "Pomodoro 15 min",
  "Pomodoro 20 min",
  "Pomodoro 25 min",
  "Info"
};
// variable status
int menuIndex = 1;
int lastCLK = HIGH;
bool inCountdown = false;
U8G2_SH1106_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);
// ====== SETUP ======
void setup() {
  pinMode(ROTARY_A, INPUT_PULLUP);
  pinMode(ROTARY_B, INPUT_PULLUP);
  pinMode(ROTARY_PUSH, INPUT_PULLUP);
  pinMode(BTN_CONFIRM, INPUT_PULLUP);
  pinMode(BTN_BACK, INPUT_PULLUP);
  pinMode(BUZZER_PIN, OUTPUT);
  //digitalWrite(BUZZER_PIN, HIGH); // 不响（低电平才响）
  Wire.begin(OLED_SDA, OLED_SCL);
  u8g2.begin();
  drawMenu();
}
// ====== LOOP ======
void loop() {
  if (inCountdown) {
    // 倒计时中仅监听退出
    if (digitalRead(BTN_BACK) == LOW) {
      delay(200);
      inCountdown = false;
      drawMenu();
    }
    return;
  }
  handleRotary();
  // 开始倒计时（旋钮按下或Confirm）
  if (digitalRead(ROTARY_PUSH) == LOW || digitalRead(BTN_CONFIRM) == LOW) {
    delay(200);
    handleSelection(menuIndex);
    drawMenu();
  }
  // Back 返回主菜单
  if (digitalRead(BTN_BACK) == LOW) {
    delay(200);
    drawMenu();
  }
}
// ====== HANDLE ROTARY ======
void handleRotary() {
  int currentCLK = digitalRead(ROTARY_A);
  if (currentCLK != lastCLK && currentCLK == LOW) {
    if (digitalRead(ROTARY_B) != currentCLK) {
      menuIndex++;
    } else {
      menuIndex--;
    }
    if (menuIndex < 1) menuIndex = 1;
    if (menuIndex > menuCount) menuIndex = menuCount;
    drawMenu();
  }
  lastCLK = currentCLK;
}
// ====== DRAW MENU ======
void drawMenu() {
  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_6x10_tr);
  const int visibleCount = 4;
  int startIdx = menuIndex - 1;
  if (startIdx < 1) startIdx = 1;
  if (startIdx > menuCount - visibleCount + 1)
    startIdx = menuCount - visibleCount + 1;
  for (int i = 0; i < visibleCount; i++) {
    int idx = startIdx + i;
    if (idx > menuCount) break;
    int y = i * 16 + 14;
    if (idx == menuIndex) {
      u8g2.drawBox(0, i * 16, 128, 16);
      u8g2.setDrawColor(0);
    } else {
      u8g2.setDrawColor(1);
    }
    u8g2.setCursor(10, y);
    u8g2.print(menuItems[idx - 1]);
  }
  u8g2.setDrawColor(1);
  u8g2.sendBuffer();
}
// ====== HANDLE SELECTION ======
void handleSelection(int index) {
  if (index >= 1 && index <= 4) {
    int minutes[] = {10, 15, 20, 25};
    int seconds = minutes[index - 1] * 60;
    inCountdown = true;
    for (int i = seconds; i >= 0 && inCountdown; i--) {
      u8g2.clearBuffer();
      u8g2.setFont(u8g2_font_logisoso32_tr);
      int min = i / 60;
      int sec = i % 60;
      char timeStr[6];
      sprintf(timeStr, "%02d:%02d", min, sec);
      int textWidth = u8g2.getStrWidth(timeStr);
      u8g2.setCursor((128 - textWidth) / 2, 45);
      u8g2.print(timeStr);
      u8g2.sendBuffer();
      delay(1000);
    }
    if (inCountdown) {
      flashDone();
      beep3Times();
    }
    inCountdown = false;
  } else if (index == 5) {
    u8g2.clearBuffer();
    u8g2.setFont(u8g2_font_6x10_tr);
    u8g2.setCursor(10, 25);
    u8g2.print("Made by Miao");
    u8g2.setCursor(10, 40);
    u8g2.print("ESP32 Pomodoro Timer");
    u8g2.sendBuffer();
    delay(3000);
  }
}
// ====== BEEP FUNCTION ======
void beep3Times() {
  for (int i = 0; i < 3; i++) {
    digitalWrite(BUZZER_PIN, LOW);
    delay(200);
    digitalWrite(BUZZER_PIN, HIGH);
    delay(200);
  }
}
// ====== FLASH DONE ======
void flashDone() {
  for (int i = 0; i < 4; i++) {
    u8g2.clearBuffer();
    u8g2.setFont(u8g2_font_ncenB14_tr);
    const char* text = "Done!";
    int w = u8g2.getStrWidth(text);
    u8g2.setCursor((128 - w) / 2, 40);
    u8g2.setDrawColor(1);
    u8g2.print(text);
    u8g2.sendBuffer();
    delay(300);
    u8g2.clearBuffer();
    u8g2.drawBox(0, 0, 128, 64);
    u8g2.setDrawColor(0);
    u8g2.setCursor((128 - w) / 2, 40);
    u8g2.print(text);
    u8g2.sendBuffer();
    delay(300);
  }
  u8g2.setDrawColor(1);
}
```
</details>
---

## 🎬 Video Demonstrations

### 1.3' Pomodo with a knob

<iframe width="100%" height="315" src="https://www.youtube.com/embed/vJ-HOkglA-o" frameborder="0" allowfullscreen></iframe>

---
