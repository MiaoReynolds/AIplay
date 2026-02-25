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
  padding-top: 2rem;
}

.hero-section {
  text-align: center;
  padding: 4rem 1rem 4rem;
  background: radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.15) 0%, transparent 60%);
}

.hero-title {
  font-size: 5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #fff;
  letter-spacing: -0.025em;
}

.hero-gradient-text {
  background-image: linear-gradient(to right, #60a5fa, #c084fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-desc {
  max-width: 48rem;
  margin: 0 auto 2.5rem;
  color: #9ca3af;
  font-size: 1.125rem;
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
  background-color: rgba(24, 24, 27, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
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
  align-self: flex-end;
  margin-bottom: 1rem;
}

.bento-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.5rem 0;
}

.bento-desc {
  color: #9ca3af;
  font-size: 0.875rem;
  line-height: 1.6;
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
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(24, 24, 27, 0.8), transparent);
  z-index: 10;
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
  background: radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.08) 0%, transparent 60%);
}
[data-md-color-scheme="default"] .hero-title {
  color: #0f172a;
}
[data-md-color-scheme="default"] .hero-gradient-text {
  background-image: linear-gradient(to right, #2563eb, #7c3aed);
}
[data-md-color-scheme="default"] .hero-desc {
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
</style>

<div class="home-container">
  <section class="hero-section">
    <h1 class="hero-title">
      Reinvent Business Logic<br>
      <span class="hero-gradient-text">Bridging AI and Reality</span>
    </h1>
    <p class="hero-desc">
      We specialize in n8n workflow automation, enterprise-grade AI Agent deployment, and hands-on AI courses built on real-world case studies.
    </p>
  </section>

  <div class="bento-grid">
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
