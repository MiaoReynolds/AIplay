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

   Then open `http://localhost:5678` in your browser and complete the initial setup wizard to start building your workflows.[1](https://docs.n8n.io/hosting/installation/docker)[5](https://hub.docker.com/r/n8nio/n8n)

> For production environments, the official recommendation is to use Docker Compose + PostgreSQL for better performance and data management.[1](https://docs.n8n.io/hosting/installation/docker)

---

## 📸 Project 1 – Headshot Background Replacement Booth

**Idea**: Build a physical photo booth where users take headshots, and an n8n workflow removes the background, replacing it with **famous landmarks around the world**, finally outputting a "tourist souvenir style" headshot.

**Hardware & Setup**
- Fixed camera / iPad as the photo capture device  
- Small screen or monitor for user preview  
- A small backend server (Raspberry Pi / mini PC) running n8n + background replacement service

**n8n Workflow Idea**
- Trigger methods:  
  - Webhook to receive user photos uploaded from the frontend, or  
  - Watch Folder (new photo files trigger the workflow)
- Processing steps:  
  - Call background removal / matting service (third-party API or local model)  
  - Composite the background based on the user's selected city/landmark (Eiffel Tower, New York skyline, etc.)  
  - Generate the final headshot and save it to the output directory or send it back to the frontend

You can refer to similar **AI Avatar / Photo Booths**. Here is an example of such a photo booth setup:  
![AI Avatar / AI selfie booth](../assets/AI selfie booth.png)

---

## 📝 Project 2 – Student Assignment Grading & Exercise Recommendation System

The second n8n project is a **student assignment grading system**:

**Goal**
- Students take photos of their assignments (paper homework, exercises) and upload them.
- The system automatically recognizes the questions and answers, and provides grading feedback.
- Based on the types of errors, it recommends a few **similar exercises** to help reinforce weak areas.

**n8n Workflow Idea**
- Trigger: Students upload homework photos via a form / Webhook.
- Processing pipeline:
  1. OCR / Vision model recognizes the questions and the student's answers.
  2. Call a large language model (e.g., GPT family) to grade and analyze against the standard answers.
  3. Based on the knowledge gaps, generate **3–5 similar exercises** from a question bank or the LLM.
  4. Combine the grading feedback + explanations + new exercises into a report, returning it via email or a frontend page.

**What kind of product should this be?**
- Standalone: A small tool for personal use by teachers (photo → grading → generate PDF of exercises).
- Web version: Students self-upload and get real-time "grading + exercises" feedback.
- Integrated with existing LMS / homework systems: Connect via n8n's HTTP / API nodes into existing systems.

---

I will continue to add specific n8n node configuration screenshots and exported JSON files here later, so you can easily import and reuse the workflows.*** End Patch***}...
