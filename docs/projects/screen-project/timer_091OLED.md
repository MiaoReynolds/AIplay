# Pomodoro Timer Project

This project showcases a simple yet effective Pomodoro timer built with an ESP32 Supermini and an OLED display. It features a rotary encoder for time bar control, time bar shrinkage, and final alarm text.

---

## 🧰 Hardware Components

- ESP32-C3 SuperMini development board
- 0.91" I2C OLED display
- EC11 rotary encoder (with button)
- Breadboard + jumper wires

![Pomodoro Timer Hardware](pomodo_timer_091OLEDV2.jpg)

---

GPT Prompt for the Code:
I have an ESP32-C3 SuperMini development board, a 0.91" OLED display (128x32, I2C interface), and an EC11 rotary encoder (without a soldered push button, but can be wired).

I want to implement a Pomodoro timer prototype using Arduino code with the following behavior:

When rotating the EC11 encoder clockwise, the OLED screen displays a horizontal progress bar from left to right, increasing one block per tick. When rotating counterclockwise, the bar shortens from the right.

The progress bar is made up of small vertical blocks that are 4 pixels wide, with 1 pixel spacing between each block (total 5 pixels per block). The blocks occupy the full height of the 32-pixel OLED screen.

If there is no interaction for 2 seconds, the entire bar flashes 5 times (alternating on and off every 200 ms).

After flashing, the timer automatically shrinks the bar from right to left, removing one block per second.

Each block being removed flashes 3 times (i.e., 6 toggles) before it disappears, to make the countdown visually clear.

When the progress bar is fully empty, the screen displays “Done!” in a large font that fills the vertical height of the screen (32 pixels) using the u8g2_font_logisoso32_tf font.

The code uses the U8g2 graphics library for OLED display control and the Encoder library for rotary encoder input. The encoder's A and B phase pins are connected to GPIO2 and GPIO3.

The entire behavior is in test/demo mode — each tick of the encoder corresponds to a 1-block change, and countdown occurs at 1 block per second for visualization purposes.

---

## 🧠 Key Code Snippet

<details>
<summary>Click to expand full code</summary>
```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <Encoder.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 32
#define BLOCK_WIDTH 4
#define BLOCK_SPACING 1
#define BLOCK_TOTAL_WIDTH (BLOCK_WIDTH + BLOCK_SPACING)
#define MAX_BLOCKS (SCREEN_WIDTH / BLOCK_TOTAL_WIDTH)

#define ENCODER_PIN_A 2
#define ENCODER_PIN_B 3

U8G2_SSD1306_128X32_UNIVISION_F_HW_I2C u8g2(U8G2_R0);
Encoder knob(ENCODER_PIN_A, ENCODER_PIN_B);

int numBlocks = 0;
int lastPosition = 0;
unsigned long lastInteraction = 0;
bool flashing = false;
int flashCount = 0;
bool flashVisible = true;
unsigned long lastFlashTime = 0;
bool shrinking = false;

// Shrinking flash for each block
int blinkingBlockIndex = -1;
int blinkCount = 0;
bool blinkVisible = true;
unsigned long lastBlinkTime = 0;
const int maxBlinkCount = 6;

void drawBar(int blocks, bool visible = true, int blinkIndex = -1, bool blinkOn = true) {
  u8g2.clearBuffer();

  if (blocks == 0 && !visible) {
    u8g2.setFont(u8g2_font_logisoso32_tf);  // height 32 pixals
    u8g2.drawStr((SCREEN_WIDTH - u8g2.getStrWidth("Done!")) / 2, 32, "Done!");
  } else if (visible) {
    for (int i = 0; i < blocks; i++) {
      if (i == blinkIndex) {
        if (blinkOn) {
          u8g2.drawBox(i * BLOCK_TOTAL_WIDTH, 0, BLOCK_WIDTH, SCREEN_HEIGHT);
        }
      } else {
        u8g2.drawBox(i * BLOCK_TOTAL_WIDTH, 0, BLOCK_WIDTH, SCREEN_HEIGHT);
      }
    }
  }

  u8g2.sendBuffer();
}


void setup() {
  u8g2.begin();
  drawBar(numBlocks);
  lastInteraction = millis();
}

void loop() {
  unsigned long now = millis();

  // --- Handle Encoder ---
  int position = knob.read() / 4;
  if (position != lastPosition) {
    int delta = position - lastPosition;
    lastPosition = position;
    numBlocks += delta;

    if (numBlocks < 0) numBlocks = 0;
    if (numBlocks > MAX_BLOCKS) numBlocks = MAX_BLOCKS;

    drawBar(numBlocks);
    lastInteraction = now;
    flashing = false;
    shrinking = false;
    blinkingBlockIndex = -1;
  }

  // --- Flashing before shrink ---
  if (!flashing && !shrinking && (now - lastInteraction > 2000) && numBlocks > 0) {
    flashing = true;
    flashCount = 0;
    flashVisible = false;
    lastFlashTime = now;
  }

  if (flashing && (now - lastFlashTime > 200)) {
    flashVisible = !flashVisible;
    drawBar(numBlocks, flashVisible);
    lastFlashTime = now;
    if (!flashVisible) flashCount++;
    if (flashCount >= 5) {
      flashing = false;
      shrinking = true;
      blinkingBlockIndex = -1;
    }
  }

  // --- Shrinking with blinking ---
  if (shrinking) {
    if (blinkingBlockIndex == -1 && numBlocks > 0) {
      blinkingBlockIndex = numBlocks - 1;
      blinkCount = 0;
      blinkVisible = false;
      lastBlinkTime = now;
    }

    if (blinkingBlockIndex >= 0 && (now - lastBlinkTime > 200)) {
      blinkVisible = !blinkVisible;
      lastBlinkTime = now;
      blinkCount++;

      drawBar(numBlocks, true, blinkingBlockIndex, blinkVisible);

      if (blinkCount >= maxBlinkCount) {
        numBlocks--;
        blinkingBlockIndex = -1;
        if (numBlocks == 0) {
          drawBar(0, false);
          shrinking = false;
        }
      }
    }
  }

  delay(10);
}

```
</details>
---

## 🎬 Video Demonstrations

### Version 1: Basic Functionality Overview

<iframe width="100%" height="315" src="https://www.youtube.com/embed/8o0xLZvq88A" frameborder="0" allowfullscreen></iframe>

---

### Version 2: Timer Bar Blocks + Bigger End Text

<iframe width="100%" height="315" src="https://www.youtube.com/embed/6zQn1S9BfKk" frameborder="0" allowfullscreen></iframe>
