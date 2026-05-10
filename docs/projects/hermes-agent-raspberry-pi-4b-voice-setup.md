# Hermes Agent Voice AI on Raspberry Pi 4B
## Complete Ubuntu Deployment Guide (STT + LLM + TTS)

This tutorial shows how to build a low-cost, always-on **voice AI terminal** on **Raspberry Pi 4B** using Hermes Agent, Whisper STT, and TTS.

---

## 1. Recommended Hardware

| Component | Recommendation |
|---|---|
| Board | Raspberry Pi 4B (4GB or 8GB) |
| OS | Ubuntu Server 24.04 ARM64 |
| Storage | SSD (strongly recommended) |
| Power | Official 5V 3A adapter |
| Cooling | Heatsink + fan |
| Audio | USB microphone / USB sound card |

---

## 2. Why Not Run a Large Local LLM on Pi?

Raspberry Pi 4B has no NVIDIA GPU, so it is not ideal for:

- 7B/13B local LLM inference
- Stable Diffusion
- Large Whisper models

A practical architecture is:

- Pi handles: Hermes runtime + audio I/O + STT/TTS
- Cloud API handles: heavy LLM inference (DeepSeek/OpenAI)

---

## 3. Update System

```bash
sudo apt update && sudo apt upgrade -y
```

---

## 4. Install System Dependencies

```bash
sudo apt update && sudo apt install -y \
git curl wget python3 python3-pip python3-venv python3-dev \
ffmpeg portaudio19-dev build-essential cmake pkg-config \
libopenblas-dev
```

---

## 5. Create Workspace

```bash
mkdir -p ~/ai/hermes
cd ~/ai/hermes
```

---

## 6. Create Python Virtual Environment

```bash
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
```

---

## 7. Install AI Python Packages

```bash
pip install \
faster-whisper \
edge-tts \
openai \
sounddevice \
numpy \
scipy \
requests
```

---

## 8. Install Hermes Agent

```bash
cd ~/ai
git clone https://github.com/Hermes-Project/hermes-agent.git
cd hermes-agent
pip install -r requirements.txt
```

---

## 9. Configure Whisper STT

Recommended model sizes on Pi:

- `tiny` (best speed)
- `base` (balanced)
- `small` (sometimes acceptable)

Quick test:

```bash
python - <<'PY'
from faster_whisper import WhisperModel
model = WhisperModel("tiny")
print("Whisper tiny loaded")
PY
```

---

## 10. Configure TTS

Install:

```bash
pip install edge-tts
```

Test:

```bash
edge-tts \
--text "Hello from Raspberry Pi" \
--write-media test.mp3

ffplay test.mp3
```

---

## 11. Configure LLM API (DeepSeek/OpenAI)

DeepSeek: [https://platform.deepseek.com](https://platform.deepseek.com)  
Docs: [https://api-docs.deepseek.com](https://api-docs.deepseek.com)

Use a cloud API because Pi 4B is much better as a voice edge terminal than a heavy LLM server.

---

## 12. Edit Hermes Config

Typical path:

```bash
nano ~/.hermes/config.yaml
```

Example:

```yaml
llm:
  provider: openai
  api_key: "YOUR_API_KEY"
  model: "deepseek-chat"
  base_url: "https://api.deepseek.com"

voice:
  enabled: true

stt:
  provider: faster_whisper
  model: tiny

tts:
  provider: edge_tts
  voice: en-US-GuyNeural
```

---

## 13. Start Hermes

```bash
source ~/ai/hermes/venv/bin/activate
python main.py
```

If your repository structure differs, try:

```bash
python app.py
```

---

## 14. Auto Start with Systemd (Optional)

Create service:

```bash
sudo nano /etc/systemd/system/hermes.service
```

Service file:

```ini
[Unit]
Description=Hermes Agent
After=network.target

[Service]
User=pi
WorkingDirectory=/home/pi/ai/hermes/hermes-agent
ExecStart=/home/pi/ai/hermes/hermes-agent/venv/bin/python main.py
Restart=always

[Install]
WantedBy=multi-user.target
```

Enable and start:

```bash
sudo systemctl daemon-reload
sudo systemctl enable hermes
sudo systemctl start hermes
systemctl status hermes
```

---

## 15. Common Issues

### Build/install is very slow

Many ARM packages compile locally. This is normal.

### SD card wear

AI workloads increase I/O. Prefer SSD for long-term reliability.

### Out-of-memory errors

Use Whisper `tiny/base`, enable swap, avoid large models.

### Thermal throttling

Use proper cooling and airflow.

---

## 16. Practical Final Architecture

| Layer | Responsibility |
|---|---|
| Raspberry Pi 4B | Mic, speaker, button/control, local STT/TTS |
| Cloud LLM API | Reasoning and response generation |
| Hermes Agent | Orchestration between voice and LLM |

---

## 17. Future Extensions

- OLED UI
- EC11 knob input
- ESP32 peripherals
- Wake-word support
- Home Assistant integration
- Telegram bot integration
- Robot arm controller endpoint

---

## 18. One-Command Bootstrap (Reference)

```bash
sudo apt update && sudo apt install -y \
git curl wget python3 python3-pip python3-venv python3-dev \
ffmpeg portaudio19-dev build-essential cmake pkg-config \
libopenblas-dev && \
mkdir -p ~/ai/hermes && \
cd ~/ai/hermes && \
python3 -m venv venv && \
source venv/bin/activate && \
pip install --upgrade pip && \
pip install \
faster-whisper \
edge-tts \
openai \
sounddevice \
numpy \
scipy \
requests
```

---

Raspberry Pi 4B is not a powerful LLM server, but it is an excellent **AI voice endpoint**, **IoT gateway**, and **robotics control front-end** when paired with Hermes Agent.
