---
hide:
  - navigation
  - toc
---

<style>
/* ===== Layout Overrides (Mimicking AIGC Prompt) ===== */
.md-main .md-grid, .md-main__inner {
  max-width: 1200px !important;
  margin: 0 auto;
}

/* Banner Image Styling */
img[alt="About Hero"] {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 1.5rem;
  margin: 1rem 0 3rem 0;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

/* ===== Card Grid Styles ===== */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 350px));
  gap: 1.5rem;
  padding: 1rem 0;
  margin-bottom: 3rem;
  justify-content: start;
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
  max-width: 350px;
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
  text-align: justify;
  text-justify: inter-word;
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
        <img src="../assets/images/miao.jpg" alt="Dr Miao Bin">
      </div>
      <h3 class="bento-title">Dr Miao Bin</h3>
      <div class="bento-subtitle">Chief AI Officer (CAIO)</div>
      <p class="bento-desc">Dr. Miao is the visionary leader driving enterprise-wide AI transformation. He specializes in deploying state-of-the-art AI algorithms to revitalize traditional applications, bridging the gap between cutting-edge research and scalable business impact. Operating at the technological forefront, he continuously explores how native AI applications can architect intelligent ecosystems and revolutionize a myriad of industries.</p>
    </div>
  </div>

  <div class="bento-card">
    <div class="bento-content-wrapper">
      <div class="team-avatar-wrapper">
        <img src="../assets/images/Deng.jpg" alt="Dr Deng Zhihua">
      </div>
      <h3 class="bento-title">Dr Deng Zhihua</h3>
      <div class="bento-subtitle">AI Engineer</div>
      <p class="bento-desc">Dr. Deng is the cyber-physical virtuoso orchestrating the synaptic fusion of neural networks and edge hardware. He focuses on deploying highly optimized AI algorithms directly onto localized endpoints, powering next-generation energy management systems, advanced robotics, and real-time computer vision platforms. By turning raw silicon into autonomously intelligent endpoints, he pushes the ultimate boundaries of embedded AI and operational limits.</p>
    </div>
  </div>

  <div class="bento-card">
    <div class="bento-content-wrapper">
      <div class="team-avatar-wrapper">
        <img src="../assets/images/yang.png" alt="Yang Xun">
      </div>
      <h3 class="bento-title">Yang Xun</h3>
      <div class="bento-subtitle">Hardware Engineer</div>
      <p class="bento-desc">With over 15 years of veteran expertise in hardware engineering, Yang is the absolute bedrock of our physical implementations. He spearheads all hardware-related operations, ranging from intricate PCB topographies and rapid physical prototyping to robust electro-mechanical integrations. By flawlessly executing the tangible builds, he transforms our cutting-edge digital intelligence into battle-tested, real-world machineries.</p>
    </div>
  </div>

  <div class="bento-card">
    <div class="bento-content-wrapper">
      <div class="team-avatar-wrapper">
        <img src="../assets/images/Charles Sun.jpg" alt="Charles Sun">
      </div>
      <h3 class="bento-title">Charles Sun</h3>
      <div class="bento-subtitle">Software Engineer</div>
      <p class="bento-desc">Charles is an experienced software engineer with a decade of expertise in full-stack development. His responsibilities encompass software UI development, API integration, and the deployment of control algorithms. By meticulously weaving scalable API pipelines with elegant frontends, he architects intuitive human-in-the-loop portals that make our advanced cognitive engines accessible and resilient.</p>
    </div>
  </div>

  <div class="bento-card">
    <div class="bento-content-wrapper">
      <div class="team-avatar-wrapper">
        <img src="../assets/images/openclaw-logo-hd.png" alt="Original Claw">
      </div>
      <h3 class="bento-title">Original Claw</h3>
      <div class="bento-subtitle">Operations Secretary (Non-Human)</div>
      <p class="bento-desc">As the tireless backbone of our daily operations, Original Claw handles the heavy lifting of administrative work. Its core functionalities encompass rapid, high-accuracy document recognition, automated data entry, and seamless frontline customer service. By executing these essential tasks efficiently, it ensures the human team remains unburdened and strictly focused on innovation.</p>
    </div>
  </div>
  <div class="bento-card">
    <div class="bento-content-wrapper">
      <div class="team-avatar-wrapper">
        <img src="../assets/images/Scout-Claw.png" alt="Scout-Claw">
      </div>
      <h3 class="bento-title">Scout-Claw</h3>
      <div class="bento-subtitle">Explorer (Non-Human)</div>
      <p class="bento-desc">Scout-Claw operates on pure, unadulterated curiosity. It relentlessly crawls the digital tides—from obscure GitHub repos to underground creative forums—scavenging for "Biological Sparks" (new ideas) and "Digital Driftwood" (emerging trends). Its primary task is to filter this raw data into structured "Catalyst Briefs" for the human team to dissect during R&D sessions.</p>
    </div>
  </div>

  <a href="https://chem.hkust.edu.hk/people/haibin-su-suhaibin" target="_blank" rel="noopener noreferrer" class="bento-card">
    <div class="bento-content-wrapper">
      <div class="team-avatar-wrapper">
        <img src="../assets/images/Prof Su Haibin.jpg" alt="Prof Su Haibin">
      </div>
      <h3 class="bento-title">Prof Su Haibin</h3>
      <div class="bento-subtitle">Academic Advisor</div>
      <p class="bento-desc">Full Professor at HKUST and Director of the IAS Center for AI for Scientific Discoveries. Specializing in Quantum Physics, Computational Chemistry, and Applied AI. Prof. Su acts as our visionary architect bridging academia and the tech industry. By translating paradigm-shifting scientific research into scalable, industry-disrupting technology, he provides unparalleled guidance on frontier trends and ensures our moonshot R&D initiatives are infused with absolute, bleeding-edge rigor.</p>
    </div>
  </a>
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
  <a href="https://laviebay.wixsite.com/soiree" target="_blank" rel="noopener noreferrer" class="bento-card">
    <div class="bento-content-wrapper">
      <div class="partner-logo-wrapper">
        <img src="../assets/images/soiree.avif" alt="Society of Interdisciplinary Research Logo">
      </div>
      <h3 class="bento-title">Society of Interdisciplinary Research</h3>
      <p class="bento-desc">SOIRÉE is a premier international platform that fosters interdisciplinary collaboration by boldly bridging the gap between cutting-edge scientific research and commercial applications to solve the grand challenges of the 21st century.</p>
    </div>
  </a>
</div>