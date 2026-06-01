---
hide:
  - navigation
  - toc
---

<style>
/* ===== DARK MODE (slate) - default look ===== */
.md-content {
  background-color: #09090b !important;
}
.md-main__inner {
  margin: 0;
  max-width: none;
}
.home-container {
  font-family: 'Inter', system-ui, sans-serif;
  color: #f3f4f6;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 0.35rem;
}

.hero-section {
  position: relative;
  padding: 1.6rem 1.25rem 3rem;
  background:
    radial-gradient(circle at 20% 15%, rgba(56, 189, 248, 0.12) 0%, transparent 28%),
    radial-gradient(circle at 78% 12%, rgba(129, 140, 248, 0.14) 0%, transparent 30%),
    linear-gradient(180deg, rgba(9, 9, 11, 0) 0%, rgba(9, 9, 11, 0.15) 100%);
  overflow: hidden;
}

.hero-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(148, 163, 184, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.06) 1px, transparent 1px);
  background-size: 36px 36px;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.9), transparent 85%);
  pointer-events: none;
}

.hero-inner {
  position: relative;
  z-index: 1;
  max-width: 1160px;
  margin: 0 auto;
}

.hero-copy {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
}

.hero-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.42rem 0.8rem;
  border: 1px solid rgba(125, 211, 252, 0.18);
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.44);
  color: #cbd5e1;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.85rem;
}

.hero-kicker::before {
  content: "";
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #7dd3fc, #818cf8);
  box-shadow: 0 0 16px rgba(125, 211, 252, 0.45);
}

.hero-title {
  font-size: clamp(3rem, 6vw, 5.4rem);
  font-weight: 800;
  line-height: 1.04;
  margin: 0 0 0.8rem 0;
  color: #fff;
  letter-spacing: -0.045em;
}

.hero-gradient-text {
  background-image: linear-gradient(90deg, #7dd3fc 0%, #818cf8 50%, #c084fc 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-desc {
  max-width: 42rem;
  margin: 0 auto 1rem;
  color: #cbd5e1;
  font-size: 1.05rem;
  line-height: 1.75;
}

.hero-showcase {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  max-width: 1180px;
  margin: 0.45rem auto 0;
}

.hero-mini-card {
  position: relative;
  min-height: 220px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.4rem;
  background: linear-gradient(180deg, rgba(22, 28, 45, 0.94) 0%, rgba(12, 16, 28, 0.98) 100%);
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(2, 6, 23, 0.32);
  text-decoration: none !important;
  color: inherit !important;
  transition: transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease;
}

.hero-mini-card:nth-child(1) {
  transform: translateY(16px) rotate(-1.6deg);
}

.hero-mini-card:nth-child(2) {
  transform: translateY(0) rotate(0.5deg);
}

.hero-mini-card:nth-child(3) {
  transform: translateY(20px) rotate(1.5deg);
}

.hero-mini-card:nth-child(4) {
  transform: translateY(8px) rotate(-0.8deg);
}

.hero-mini-card:hover {
  transform: translateY(-4px) rotate(0deg) !important;
  border-color: rgba(125, 211, 252, 0.34);
  box-shadow: 0 22px 48px rgba(2, 6, 23, 0.42);
}

.hero-mini-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top right, rgba(125, 211, 252, 0.16), transparent 34%);
  pointer-events: none;
}

.hero-mini-media {
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 0.95rem;
  background: #111827;
}

.hero-mini-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero-mini-tag {
  display: inline-block;
  margin-bottom: 0.45rem;
  color: #7dd3fc;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.hero-mini-title {
  margin: 0 0 0.45rem 0;
  color: #f8fafc;
  font-size: 1.05rem;
  font-weight: 700;
}

.hero-mini-desc {
  margin: 0;
  color: #94a3b8;
  font-size: 0.88rem;
  line-height: 1.6;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  padding: 1rem 2rem;
  margin-bottom: 4rem;
}

.bento-card {
  position: relative;
  background-color: rgba(38, 38, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 1.5rem;
  padding: 2rem;
  text-decoration: none !important;
  color: inherit !important;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  overflow: hidden;
}

.bento-card:hover {
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  background-color: rgba(39, 39, 42, 0.5);
}

.bento-card::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
  filter: blur(20px);
  z-index: 0;
  transition: opacity 0.3s ease;
  opacity: 0;
}
.bento-card:hover::before {
  opacity: 1;
}

.bento-content-wrapper {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.bento-tag {
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  color: #6b7280;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  align-self: center;
  margin-bottom: 1rem;
}

.bento-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin: 0 0 0.5rem 0;
}

.bento-desc {
  color: #9ca3af;
  font-size: 0.875rem;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.bento-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 0.75rem;
  overflow: hidden;
  background-color: #27272a;
}
.bento-image-wrapper::after {
  display: none;
}

.bento-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.bento-card:hover .bento-image-wrapper img {
  transform: scale(1.05);
}

/* Hide only the auto-generated MkDocs page title, not our hero h1 */
.md-typeset > h1:first-child { display: none; }
.hero-section .hero-title { display: block !important; visibility: visible !important; }

/* ===== LIGHT MODE (default scheme) overrides ===== */
[data-md-color-scheme="default"] .md-content {
  background-color: #f8fafc !important;
}
[data-md-color-scheme="default"] .home-container {
  color: #1e293b;
}
[data-md-color-scheme="default"] .hero-section {
  background:
    radial-gradient(circle at 20% 15%, rgba(14, 165, 233, 0.1) 0%, transparent 28%),
    radial-gradient(circle at 78% 12%, rgba(79, 70, 229, 0.12) 0%, transparent 30%),
    linear-gradient(180deg, rgba(248, 250, 252, 0) 0%, rgba(248, 250, 252, 0.45) 100%);
}
[data-md-color-scheme="default"] .hero-title {
  color: #0f172a;
}
[data-md-color-scheme="default"] .hero-gradient-text {
  background-image: linear-gradient(90deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%);
}
[data-md-color-scheme="default"] .hero-desc {
  color: #64748b;
}
[data-md-color-scheme="default"] .hero-kicker {
  background: rgba(255, 255, 255, 0.78);
  border-color: rgba(37, 99, 235, 0.14);
  color: #334155;
}
[data-md-color-scheme="default"] .hero-mini-card {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(241, 245, 249, 0.98) 100%);
  border-color: #dbe4f0;
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.09);
}
[data-md-color-scheme="default"] .hero-mini-title {
  color: #0f172a;
}
[data-md-color-scheme="default"] .hero-mini-desc {
  color: #64748b;
}
[data-md-color-scheme="default"] .bento-card {
  background-color: #fff;
  border-color: #e2e8f0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}
[data-md-color-scheme="default"] .bento-card:hover {
  border-color: #cbd5e1;
  background-color: #f8fafc;
}
[data-md-color-scheme="default"] .bento-tag {
  color: #64748b;
  border-color: #e2e8f0;
}
[data-md-color-scheme="default"] .bento-title {
  color: #0f172a;
}
[data-md-color-scheme="default"] .bento-desc {
  color: #64748b;
}
[data-md-color-scheme="default"] .bento-image-wrapper {
  background-color: #f1f5f9;
}
[data-md-color-scheme="default"] .bento-image-wrapper::after {
  background: linear-gradient(to top, rgba(248, 250, 252, 0.6), transparent);
}

@media (max-width: 900px) {
  .hero-section {
    padding-top: 1.3rem;
  }

  .hero-showcase {
    grid-template-columns: 1fr;
    gap: 0.9rem;
  }

  .hero-mini-card,
  .hero-mini-card:nth-child(1),
  .hero-mini-card:nth-child(2),
  .hero-mini-card:nth-child(3),
  .hero-mini-card:nth-child(4) {
    transform: none;
  }
}

@media (max-width: 640px) {
  .home-container {
    padding-top: 0.2rem;
  }

  .hero-section {
    padding: 1rem 0.8rem 2.3rem;
  }

  .hero-copy {
    text-align: center;
  }

  .hero-desc {
    margin-left: auto;
    margin-right: auto;
    font-size: 0.98rem;
  }

  .hero-mini-card {
    min-height: auto;
  }
}
</style>

<div class="home-container">
  <section class="hero-section">
    <div class="hero-inner">
      <div class="hero-copy">
        <div class="hero-kicker">Alone Lab</div>
        <h1 class="hero-title">
          AI for<br>
          <span class="hero-gradient-text">real operations</span>
        </h1>
        <p class="hero-desc">
          We design practical AI tools, automation workflows, and embedded systems that turn daily work into repeatable, usable products.
        </p>
      </div>

      <div class="hero-showcase">
        <a href="projects/local-rag" class="hero-mini-card">
          <div class="hero-mini-media">
            <img src="assets/images/RAG_0.png" alt="Local RAG">
          </div>
          <span class="hero-mini-tag">Knowledge AI</span>
          <h3 class="hero-mini-title">Private Local RAG</h3>
          <p class="hero-mini-desc">Secure document querying and retrieval workflows for internal knowledge systems.</p>
        </a>

        <a href="projects/hermes-agent-raspberry-pi-4b-voice-setup" class="hero-mini-card">
          <div class="hero-mini-media">
            <img src="assets/images/hermes_agent.jpg" alt="Hermes Voice AI">
          </div>
          <span class="hero-mini-tag">Voice AI</span>
          <h3 class="hero-mini-title">Hermes Voice Agent</h3>
          <p class="hero-mini-desc">Real-time speech workflows with STT, LLM orchestration, and TTS on low-cost hardware.</p>
        </a>

        <a href="projects/raspberry-pi-5-tank-stack-chan" class="hero-mini-card">
          <div class="hero-mini-media">
            <img src="assets/images/stackchan_RPi5.jpg" alt="M5Stack Chan Home Companion Robot">
          </div>
          <span class="hero-mini-tag">Companion AI</span>
          <h3 class="hero-mini-title">M5Stack Chan Robot</h3>
          <p class="hero-mini-desc">A mobile LLM companion with expressions, voice interaction, memory, and private AI expansion.</p>
        </a>

        <a href="projects/cloudflare-worker-backend" class="hero-mini-card">
          <div class="hero-mini-media">
            <img src="assets/images/cloudflare-workers.webp" alt="Cloudflare Backend">
          </div>
          <span class="hero-mini-tag">Automation</span>
          <h3 class="hero-mini-title">Cloudflare Backend</h3>
          <p class="hero-mini-desc">Serverless foundations for API routing, protected keys, and deployable AI app backends.</p>
        </a>
      </div>
    </div>
  </section>

  <div class="bento-grid">

    <a href="projects/ai-agent-terminal" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">AI Terminal</span>
        <h3 class="bento-title">AI Agent Terminal</h3>
        <p class="bento-desc">An all-in-one voice AI terminal connected to cloud or local large models for coding and log organization.</p>
        <div class="bento-image-wrapper">
          <img src="assets/images/hermes_terminal_1.jpg" alt="AI Agent Terminal">
        </div>
      </div>
    </a>

    <a href="projects/hermes-agent-voice-mode" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Voice AI</span>
        <h3 class="bento-title">Hermes Agent Voice Mode</h3>
        <p class="bento-desc">Step-by-step macOS setup to add real-time STT and TTS voice interaction to Hermes Agent.</p>
        <div class="bento-image-wrapper">
          <img src="assets/images/hermes_agent.jpg" alt="Hermes Agent Voice Mode">
        </div>
      </div>
    </a>

    <a href="projects/github-pages-mkdocs" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Tutorial</span>
        <h3 class="bento-title">Github Pages</h3>
        <p class="bento-desc">Deploy a MkDocs static site on GitHub Pages and let an AI Agent manage the content autonomously.</p>
        <div class="bento-image-wrapper" style="background-color: #fff;">
          <img src="assets/images/mkdocs_logo.png" alt="GitHub Pages MkDocs" style="object-fit: contain; padding: 1.5rem;">
        </div>
      </div>
    </a>

    <a href="projects/ai-knowledge-wiki" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Knowledge</span>
        <h3 class="bento-title">AI Knowledge Wiki</h3>
        <p class="bento-desc">Let an AI Agent manage your personal Obsidian knowledge base — ingest, query, and maintain your second brain automatically.</p>
        <div class="bento-image-wrapper">
          <img src="assets/images/obsidian_personal_knowledge_base_2.png" alt="AI Knowledge Wiki">
        </div>
      </div>
    </a>

    <a href="aigc-prompt" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">AIGC</span>
        <h3 class="bento-title">AIGC Prompt Gallery</h3>
        <p class="bento-desc">Curated collection of AI-generated content prompts with full images and copyable prompts.</p>
        <div class="bento-image-wrapper">
          <img src="assets/images/ORR_reaction_2.png" alt="AIGC Prompt Gallery">
        </div>
      </div>
    </a>

    <a href="projects/notebooklm-tutorial" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Tutorial</span>
        <h3 class="bento-title">NotebookLM Guide</h3>
        <p class="bento-desc">Learn how to use Google's AI note-taking tool to build your personal knowledge base.</p>
        <div class="bento-image-wrapper" style="background-color: white;">
          <img src="projects/notebookLM_logo.png" alt="NotebookLM Tutorial" style="object-fit: contain; padding: 1rem;">
        </div>
      </div>
    </a>

    <a href="prompt-generator" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">AI Tools</span>
        <h3 class="bento-title">Prompt Generator</h3>
        <p class="bento-desc">Instantly generate high-quality, customized AI prompts tailored to your specific needs.</p>
        <div class="bento-image-wrapper">
          <img src="Prompt_box.png" alt="Prompt Generator">
        </div>
      </div>
    </a>

    <a href="projects/ai-course" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Automation</span>
        <h3 class="bento-title">n8n Concepts Workflow</h3>
        <p class="bento-desc">Build 24/7 non-stop enterprise automation hubs by orchestrating nodes and connecting applications.</p>
        <div class="bento-image-wrapper">
          <img src="assets/images/n8n_.png" alt="n8n Concepts Workflow">
        </div>
      </div>
    </a>

    <a href="projects/vibe-coding" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Exploration</span>
        <h3 class="bento-title">Vibe Coding</h3>
        <p class="bento-desc">Interactive programming and exploring the limits of AI-assisted coding.</p>
        <div class="bento-image-wrapper">
          <img src="assets/images/codex_hello.png" alt="Vibe Coding">
        </div>
      </div>
    </a>

    <a href="projects/raspberrypi-project/raspberrypi-page" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Hardware</span>
        <h3 class="bento-title">Raspberry Pi Integration</h3>
        <p class="bento-desc">Integrating hardware with AI and automation tools for physical-world interactions.</p>
        <div class="bento-image-wrapper">
          <img src="assets/images/RPi4Case.jpg" alt="Raspberry Pi Integration">
        </div>
      </div>
    </a>

    <a href="tvm-calculator" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Finance</span>
        <h3 class="bento-title">Time Value of Money</h3>
        <p class="bento-desc">Interactive TVM calculator for present value, future value, annuities, and amortization schedules.</p>
        <div class="bento-image-wrapper">
          <img src="assets/images/TVM.png" alt="Time Value of Money">
        </div>
      </div>
    </a>

    <a href="unit-converter" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Utility</span>
        <h3 class="bento-title">Unit Converter</h3>
        <p class="bento-desc">Fast unit conversion across length, weight, energy, area, pressure, and temperature.</p>
        <div class="bento-image-wrapper">
          <img src="assets/images/UC.png" alt="Unit Converter">
        </div>
      </div>
    </a>
    <a href="projects/screen-project/timer" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">UI/UX</span>
        <h3 class="bento-title">Screen Project</h3>
        <p class="bento-desc">Custom screen menu systems and interfaces for embedded projects.</p>
        <div class="bento-image-wrapper">
          <img src="assets/images/knob_pomodo.jpg" alt="Screen Menu System">
        </div>
      </div>
    </a>

    <a href="projects/screen-project/pomodo_timer_V4" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Embedded</span>
        <h3 class="bento-title">Pomodo with case</h3>
        <p class="bento-desc">Pomodoro timer built with ESP32, knob, and 1.3 OLED screen.</p>
        <div class="bento-image-wrapper">
          <img src="assets/images/esp32knob13OLED.png" alt="Screen Project V4">
        </div>
      </div>
    </a>

    <a href="projects/screen-project/timer_091OLED_V3" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Embedded</span>
        <h3 class="bento-title">Pomodo</h3>
        <p class="bento-desc">Another variant of the Pomodoro timer project focusing on different OLED displays.</p>
        <div class="bento-image-wrapper">
          <img src="assets/images/pomodo_timer_091OLED_V3.jpg" alt="Another Screen Project">
        </div>
      </div>
    </a>

    <a href="projects/screen-project/timer_091OLED" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Embedded</span>
        <h3 class="bento-title">Pomodoro 0.91 OLED</h3>
        <p class="bento-desc">Compact Pomodoro timer utilizing a 0.91 inch OLED screen.</p>
        <div class="bento-image-wrapper">
          <img src="projects/screen-project/pomodo_timer_091OLEDV2.jpg" alt="Pomodoro 0.91 OLED">
        </div>
      </div>
    </a>

    <a href="projects/lerobot" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Robotics</span>
        <h3 class="bento-title">LeRobot</h3>
        <p class="bento-desc">Exploring robotics and AI control with the LeRobot arm project.</p>
        <div class="bento-image-wrapper">
          <img src="assets/images/lerobot-arm.jpg" alt="LeRobot">
        </div>
      </div>
    </a>

    <a href="projects/quadruped" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Robotics</span>
        <h3 class="bento-title">Quadruped</h3>
        <p class="bento-desc">Building and programming a four-legged walking robot.</p>
        <div class="bento-image-wrapper">
          <img src="assets/images/quadruped.jpg" alt="Quadruped">
        </div>
      </div>
    </a>
  </div>
</div>
