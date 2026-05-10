在树莓派4上部署 Hermes Agent + Voice AI（Ubuntu 完整流程）



使用 Raspberry Pi 4 构建一个本地 AI Voice Agent，包括：



Hermes Agent

Whisper 语音识别（STT）

TTS 语音输出

DeepSeek / OpenAI API

Ubuntu ARM64 环境



本文目标：



构建一个低成本、可长期运行、适合 DIY 与教学的 AI 语音终端。



一、硬件建议



推荐硬件：



硬件	建议

主板	Raspberry Pi 4 (4GB/8GB)

系统	Ubuntu Server 24.04 ARM64

存储	SSD（强烈推荐）

电源	官方 5V 3A

散热	风扇 + 散热片

音频	USB 麦克风 / USB 声卡

二、为什么不推荐本地大模型



树莓派4没有 NVIDIA GPU。



因此：



不适合运行 7B/13B LLM

不适合 Stable Diffusion

不适合大型 Whisper



最合理的架构是：



部件	运行位置

Hermes Agent	Raspberry Pi

Whisper STT	Raspberry Pi

TTS	Raspberry Pi

大语言模型	DeepSeek/OpenAI API



树莓派更像：



“AI 语音终端”



而不是：



“AI 推理服务器”



三、系统更新



首先更新系统：



sudo apt update \&\& sudo apt upgrade -y

四、一键安装系统依赖



这是完整的一键安装命令：



sudo apt update \&\& sudo apt install -y \\

git curl wget python3 python3-pip python3-venv python3-dev \\

ffmpeg portaudio19-dev build-essential cmake pkg-config \\

libopenblas-dev



这些组件分别负责：



组件	用途

python3-venv	Python 虚拟环境

ffmpeg	音频处理

portaudio19-dev	麦克风输入

build-essential	编译依赖

cmake	AI 库编译

libopenblas-dev	Whisper 数学加速

五、建立 Hermes 项目目录



创建项目目录：



mkdir -p \~/ai/hermes

cd \~/ai/hermes

六、创建 Python 虚拟环境



Ubuntu 24 以后默认禁止直接 pip install。



因此必须使用 venv：



python3 -m venv venv



激活环境：



source venv/bin/activate



升级 pip：



pip install --upgrade pip

七、安装 AI 相关 Python 库



安装所有核心组件：



pip install \\

faster-whisper \\

edge-tts \\

openai \\

sounddevice \\

numpy \\

scipy \\

requests

八、安装 Hermes Agent



创建 Hermes 目录：



cd \~/ai



克隆项目：



git clone https://github.com/Hermes-Project/hermes-agent.git



进入项目：



cd hermes-agent



安装依赖：



pip install -r requirements.txt

九、配置 Whisper（STT）



树莓派建议：



模型	推荐度

tiny	推荐

base	推荐

small	勉强

medium/large	不建议



测试 Whisper：



python



输入：



from faster\_whisper import WhisperModel



model = WhisperModel("tiny")



首次运行会自动下载模型。



十、配置 TTS（语音输出）



推荐：



edge-tts



优点：



轻量

免费

音质优秀

树莓派运行稳定



安装：



pip install edge-tts



测试：



edge-tts \\

\--text "Hello from Raspberry Pi" \\

\--write-media test.mp3



播放：



ffplay test.mp3

十一、配置 DeepSeek API



推荐使用：



DeepSeek

OpenAI



因为树莓派本地无法高效运行大模型。



DeepSeek：



https://platform.deepseek.com



API 文档：



https://api-docs.deepseek.com



十二、Hermes 配置文件



常见位置：



\~/.hermes/config.yaml



示例：



llm:

&#x20; provider: openai

&#x20; api\_key: "YOUR\_API\_KEY"

&#x20; model: "deepseek-chat"

&#x20; base\_url: "https://api.deepseek.com"



voice:

&#x20; enabled: true



stt:

&#x20; provider: faster\_whisper

&#x20; model: tiny



tts:

&#x20; provider: edge\_tts

&#x20; voice: en-US-GuyNeural

十三、启动 Hermes



激活环境：



source \~/ai/hermes/venv/bin/activate



启动：



python main.py



或者：



python app.py



取决于 Hermes 项目结构。



十四、设置自动启动（Systemd）



创建服务：



sudo nano /etc/systemd/system/hermes.service



内容：



\[Unit]

Description=Hermes Agent

After=network.target



\[Service]

User=pi

WorkingDirectory=/home/pi/ai/hermes/hermes-agent

ExecStart=/home/pi/ai/hermes/hermes-agent/venv/bin/python main.py

Restart=always



\[Install]

WantedBy=multi-user.target



启动：



sudo systemctl daemon-reload

sudo systemctl enable hermes

sudo systemctl start hermes



查看状态：



systemctl status hermes

十五、树莓派 AI 项目的典型问题

1\. 编译很慢



ARM 环境很多包需要本地编译。



可能持续：



10 分钟

20 分钟

更久



属于正常现象。



2\. TF 卡损坏



AI 项目会频繁读写。



强烈建议：



使用 SSD



否则长期运行很容易损坏 TF 卡。



3\. 内存不足（OOM）



Whisper 是最容易爆内存的部分。



建议：



使用 tiny/base

开启 swap

避免 large 模型

4\. 过热降频



树莓派4非常容易 thermal throttling。



必须：



风扇

散热片

通风

十六、推荐的最终结构



真正稳定的结构：



设备	职责

Raspberry Pi	麦克风、扬声器、按钮

Ubuntu 工作站	AI 推理

云 API	DeepSeek/OpenAI



这才是工程上最合理的方案。



十七、后续可扩展方向



这个系统可以继续扩展：



OLED UI

EC11 旋钮

ESP32 外设

热词唤醒

Home Assistant

Telegram Bot

机械臂控制

AI 教学终端

AI 机器人中控



本质上：



树莓派 + Hermes = 一个实体化 AI Agent 的基础架构。



十八、完整一键安装命令（最终版）

sudo apt update \&\& sudo apt install -y \\

git curl wget python3 python3-pip python3-venv python3-dev \\

ffmpeg portaudio19-dev build-essential cmake pkg-config \\

libopenblas-dev \&\& \\

mkdir -p \~/ai/hermes \&\& \\

cd \~/ai/hermes \&\& \\

python3 -m venv venv \&\& \\

source venv/bin/activate \&\& \\

pip install --upgrade pip \&\& \\

pip install \\

faster-whisper \\

edge-tts \\

openai \\

sounddevice \\

numpy \\

scipy \\

requests

结语



树莓派并不是一个强大的 AI 服务器。



但它非常适合作为：



AI Voice Terminal

AI IoT Gateway

AI Robot Controller

教学平台

实体化 Agent 前端



而这恰恰是未来大量 AI 设备真正会落地的位置。

