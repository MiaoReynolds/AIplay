# n8n Workflow

This page collects notes about my **n8n** workflows and how I’m using them in small automation projects.

---

## 🚀 Quick Docker setup for n8n

The easiest way to try n8n locally is with Docker.[1](https://docs.n8n.io/hosting/installation/docker) Here’s a minimal setup that keeps your data persistent:

1. **Create a data volume**

   ```bash
   docker volume create n8n_data
   ```

2. **Run n8n**

   ```bash
   docker run -it --rm \
     --name n8n \
     -p 5678:5678 \
     -v n8n_data:/home/node/.n8n \
     docker.n8n.io/n8nio/n8n
   ```

   然后在浏览器打开 `http://localhost:5678`，完成首次初始化向导即可开始搭建 workflow。[1](https://docs.n8n.io/hosting/installation/docker)[5](https://hub.docker.com/r/n8nio/n8n)

> 生产环境中，官方推荐使用 Docker Compose + PostgreSQL 来获得更好的性能与数据管理。[1](https://docs.n8n.io/hosting/installation/docker)

---

## 📸 Project 1 – 大头照背景替换小站

**想法**：搭一个实体拍照小站，用户在现场拍摄大头照，由 n8n workflow 把人像抠图并替换为 **世界各地著名景点背景**，最后输出一张“旅游纪念风格”的大头照。

**硬件 & 场景**
- 固定相机 / iPad 作为拍照端  
- 小屏幕或显示器给用户预览  
- 后端一台小服务器（树莓派 / 小主机）运行 n8n + 背景替换服务

**n8n workflow 思路**
- 触发方式：  
  - Webhook 接收前端上传的用户照片，或  
  - Watch 文件夹（新照片文件触发 workflow）
- 处理步骤：  
  - 调用背景去除 / 抠图服务（第三方 API 或本地模型）  
  - 根据用户选择的城市/景点（巴黎铁塔、纽约天际线等）合成背景  
  - 生成最终大头照并保存到输出目录或发回前端

可以参考类似 **AI 头像 / 头照相亭** 的形态，例如下图类型的拍照小站（示意）：  
[示例大头照小站照片 – Unsplash](https://unsplash.com/photos/a-photobooth-is-ready-for-people-to-take-photos-QqX8Z6qvM1o)[2](https://snapbar.com/snapshot/headshot-photo-booth)

---

## 📝 Project 2 – 学生作业批改 & 练习推荐系统

第二个 n8n 项目是一个 **学生作业批改系统**：

**目标**
- 学生拍下作业（纸质作业、练习题）上传  
- 系统自动识别题目与答案，给出批改意见  
- 根据错误类型，再给出几道 **相似练习题**，帮助巩固薄弱点

**n8n workflow 思路**
- 触发：学生通过表单 / Webhook 上传作业照片
- 处理链路：
  1. OCR / 视觉模型识别题目和学生作答内容  
  2. 调用大模型（例如 GPT 家族）对照标准答案进行批改与解析  
  3. 根据错误知识点，从题库或大模型生成 **3–5 道相似练习题**  
  4. 把批改意见 + 讲解 + 新练习题组合成一份反馈，通过邮件或前端页面返回

**适合做成什么样的产品？**
- 单机版：老师个人使用的小工具（拍照→批改→生成练习 PDF）  
- 网页版：学生自助上传，实时得到“批改 + 练习题”反馈  
- 与现有 LMS / 作业系统集成：通过 n8n 的 HTTP / API 节点接到现有系统里

---

后续我会在这里继续补充具体的 n8n 节点配置截图和 JSON 导出文件，方便你直接导入 workflow 复用。*** End Patch***}...
