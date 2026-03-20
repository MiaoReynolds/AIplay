---
hide:
  - navigation
  - toc
---

<style>
/* ===== Card Grid Styles ===== */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem 0;
  margin-bottom: 3rem;
}

.bento-card {
  position: relative;
  background-color: rgba(38, 38, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 1rem;
  padding: 1.25rem;
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

.bento-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.25rem 0;
}

.bento-subtitle {
  font-size: 0.85rem;
  font-weight: 600;
  color: #a8a29e;
  margin: 0 0 0.5rem 0;
}

.bento-desc {
  color: #9ca3af;
  font-size: 0.8rem;
  line-height: 1.5;
  flex-grow: 1;
  margin-bottom: 0;
}

.partner-logo-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 0.75rem;
  overflow: hidden;
  background-color: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.partner-logo-wrapper img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.5s ease;
}

.team-avatar-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 0.75rem;
  overflow: hidden;
  background-color: #27272a;
  margin-bottom: 1.5rem;
}

.team-avatar-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.bento-card:hover img {
  transform: scale(1.05);
}

/* Light mode overrides */
[data-md-color-scheme="default"] .bento-card {
  background-color: #fff;
  border-color: #e2e8f0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}
[data-md-color-scheme="default"] .bento-card:hover {
  border-color: #cbd5e1;
  background-color: #f8fafc;
}
[data-md-color-scheme="default"] .bento-title {
  color: #0f172a;
}
[data-md-color-scheme="default"] .bento-subtitle {
  color: #475569;
}
[data-md-color-scheme="default"] .bento-desc {
  color: #64748b;
}
[data-md-color-scheme="default"] .partner-logo-wrapper {
  background-color: #f8fafc;
}
</style>

# About AIone Lab

![About Hero](assets/images/about-hero-banner.png)

AIone Lab is a summary of our past project history and our ongoing R&D activities. We provide a range of specialized services, including the end-to-end deployment of everything showcased on this site—from the platform itself to the full commercialization of its underlying technologies—into your organization's daily operations. We invite you to contact us with your most challenging objectives; we believe that as long as a request does not violate the physical laws of our universe, we can engineer a viable solution.

---

## What We Do

### 🤖 Intelligent Automation

We design and deploy **n8n-based workflow hubs** that connect large language models, APIs, and business tools — running 24/7 without human intervention. From AI-powered selfie booths to automated student grading systems, our workflows solve real operational problems.

### 🔧 Hardware × AI Integration

From **Raspberry Pi** edge devices to **ESP32** embedded interfaces, we prototype controllers that respond to AI decisions in the physical world. Our projects span OLED-based productivity timers, robotic arms, and quadruped robots — all with working code and schematics.

### 🎓 Applied AI Education

Case-study-driven tutorials covering **vibe coding**, AIGC prompt engineering, and end-to-end automation. Every concept comes with a live demo, working code, or a hands-on build guide — designed for practitioners, not theorists.

---

## Our Approach

We take a **build-first** approach: every concept on this site ships with working code, hardware schematics, or a live demo. We believe the fastest way to understand AI's potential is to see it run — in a workflow, on a screen, or controlling a robot arm.

---

## Built With

`n8n` · `Python` · `ESP32` · `Raspberry Pi` · `Docker` · `MkDocs` · `OpenAI API`

---

Explore our [Projects](projects/vibe-coding.md) to see what we're building, or [get in touch](contact.md) if you'd like to collaborate.

---

## Our Team

<div class="bento-grid">

  <div class="bento-card">
    <div class="bento-content-wrapper">
      <div class="team-avatar-wrapper">
        <img src="../assets/images/Charles Sun.jpg" alt="Charles Sun">
      </div>
      <h3 class="bento-title">Charles Sun</h3>
      <div class="bento-subtitle">Software Engineer</div>
      <p class="bento-desc">Charles is an experienced software engineer with a decade of expertise in full-stack development. His responsibilities encompass software UI development, API integration, and the deployment of control algorithms.</p>
    </div>
  </div>
  <div class="bento-card">
    <div class="bento-content-wrapper">
      <div class="team-avatar-wrapper">
        <img src="../assets/images/Scout-Claw.png" alt="Scout-Claw">
      </div>
      <h3 class="bento-title">Scout-Claw</h3>
      <div class="bento-subtitle">Original Openclaw (Non-Human)</div>
      <p class="bento-desc">Scout-Claw operates on pure, unadulterated curiosity. It relentlessly crawls the digital tides—from obscure GitHub repos to underground creative forums—scavenging for "Biological Sparks" (new ideas) and "Digital Driftwood" (emerging trends). Its primary task is to filter this raw data into structured "Catalyst Briefs" for the human team to dissect during R&D sessions.</p>
    </div>
  </div>
</div>

## Partners

<div class="bento-grid">
  <div class="bento-card">
    <div class="bento-content-wrapper">
      <div class="partner-logo-wrapper">
        <img src="../assets/images/NTU_logo.png" alt="NTU Logo">
      </div>
      <h3 class="bento-title">Nanyang Technological University (NTU)</h3>
      <p class="bento-desc">Ranked #1 globally for Artificial Intelligence. Leading interdisciplinary research in Robotics, NLP, Computer Vision, and "AI for X" applications.</p>
    </div>
  </div>
  <div class="bento-card">
    <div class="bento-content-wrapper">
      <div class="partner-logo-wrapper">
        <img src="../assets/images/HKUST_logo_1.png" alt="HKUST Logo">
      </div>
      <h3 class="bento-title">Hong Kong University of Science and Technology (HKUST)</h3>
      <p class="bento-desc">A premier AI hub pioneering innovations in Healthcare AI, Generative AI models (HKGAI), and driving impactful "AI + X" solutions across diverse sectors.</p>
    </div>
  </div>
</div>