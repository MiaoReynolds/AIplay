---
hide:
  - navigation
  - toc
---

<div class="home-container">
  <!-- Existing project photography anchors a quiet, editorial laboratory identity. -->
  <section class="lab-hero" aria-labelledby="hero-title">
    <div class="hero-copy">
      <p class="eyebrow"><span class="status-dot"></span> AIone Lab / Ideas into practice</p>
      <h1 id="hero-title">Small experiments.<br><em>Real possibilities.</em></h1>
      <p class="hero-desc">A hands-on lab exploring AI, automation, and the physical world. Practical tools. Working prototypes. Everything learned along the way.</p>
      <div class="hero-actions">
        <a class="lab-button" href="#projects">Explore the projects <span aria-hidden="true">↗</span></a>
        <a class="text-link" href="about/">Meet the maker <span aria-hidden="true">→</span></a>
      </div>
      <div class="hero-footnote"><span>AI &amp; agents</span><span>Workflow automation</span><span>Robotics &amp; hardware</span></div>
    </div>
    <a class="hero-feature" href="projects/reachy-mini-hermes-agent/">
      <div class="feature-image"><img decoding="async" src="assets/images/reachy-mini-hermes-agent-hero.png" alt="Reachy Mini robot beside the Hermes Agent interface" fetchpriority="high" width="1200" height="800"><span class="feature-label">From the workbench</span></div>
      <div class="feature-caption"><div><span class="eyebrow">Embodied AI / Featured project</span><h2>Meet your next AI companion.</h2></div><span class="feature-arrow" aria-hidden="true">↗</span></div>
    </a>
  </section>

  <section class="lab-highlights" aria-label="Explore lab specialties">
    <a href="projects/local-rag/"><span class="highlight-number">01 / KNOWLEDGE</span><h2>Keep your AI close.</h2><p>Private documents. Local intelligence.</p><span class="highlight-link">Explore Local RAG ↗</span></a>
    <a href="projects/hermes-agent-raspberry-pi-4b-voice-setup/"><span class="highlight-number">02 / VOICE</span><h2>Give ideas a voice.</h2><p>Real-time conversations on Raspberry Pi.</p><span class="highlight-link">Build a voice agent ↗</span></a>
    <a href="projects/raspberry-pi-5-tank-stack-chan/"><span class="highlight-number">03 / ROBOTICS</span><h2>Bring code to life.</h2><p>Small robots with a little personality.</p><span class="highlight-link">Meet Stack Chan ↗</span></a>
    <a href="projects/ai-agent-terminal/"><span class="highlight-number">04 / HARDWARE</span><h2>A terminal of your own.</h2><p>A physical home for your AI assistant.</p><span class="highlight-link">See the AI terminal ↗</span></a>
  </section>

  <section class="project-section" id="projects" aria-labelledby="projects-title">
    <div class="section-heading"><div><p class="eyebrow">The project notebook</p><h2 id="projects-title">Built. Tested. Documented.</h2></div><p>Follow an idea from first experiment<br>to something you can use.</p></div>
    <div class="project-toolbar" hidden>
      <div class="project-filters" role="group" aria-label="Filter projects">
        <button type="button" data-filter="all" aria-pressed="true">All projects</button>
        <button type="button" data-filter="ai" aria-pressed="false">AI &amp; knowledge</button>
        <button type="button" data-filter="automation" aria-pressed="false">Automation &amp; tools</button>
        <button type="button" data-filter="hardware" aria-pressed="false">Robotics &amp; hardware</button>
      </div>
      <span id="project-count" role="status" aria-live="polite"></span>
    </div>
  <div class="bento-grid">
    <a href="projects/local-rag/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Knowledge AI</span>
        <h3 class="bento-title">Private Local RAG</h3>
        <p class="bento-desc">Secure document querying and retrieval workflows for internal knowledge systems.</p>
        <div class="bento-image-wrapper"><img loading="lazy" decoding="async" src="assets/images/RAG_0.png" alt="Local hosted LLM RAG system workflow"></div>
      </div>
    </a>
    <a href="projects/hermes-agent-raspberry-pi-4b-voice-setup/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Voice AI</span>
        <h3 class="bento-title">Hermes Voice Agent</h3>
        <p class="bento-desc">Real-time speech workflows with STT, LLM orchestration, and TTS on low-cost hardware.</p>
        <div class="bento-image-wrapper"><img loading="lazy" decoding="async" src="assets/images/hermes_agent.jpg" alt="Hermes Agent"></div>
      </div>
    </a>
    <a href="projects/raspberry-pi-5-tank-stack-chan/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Companion AI</span>
        <h3 class="bento-title">M5Stack Chan Robot</h3>
        <p class="bento-desc">A mobile LLM companion with expressions, voice interaction, memory, and private AI expansion.</p>
        <div class="bento-image-wrapper"><img loading="lazy" decoding="async" src="assets/images/stackchan_RPi5.jpg" alt="M5Stack Chan home companion robot"></div>
      </div>
    </a>
    <a href="projects/ai-agent-terminal/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">AI Terminal</span>
        <h3 class="bento-title">AI Agent Terminal</h3>
        <p class="bento-desc">An all-in-one voice AI terminal connected to cloud or local models for coding and logs.</p>
        <div class="bento-image-wrapper"><img loading="lazy" decoding="async" src="assets/images/hermes_terminal_1.jpg" alt="AI Agent Terminal with display and keyboard"></div>
      </div>
    </a>

    <a href="projects/local-ai-business-documents/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Business Automation</span>
        <h3 class="bento-title">Local AI Documents</h3>
        <p class="bento-desc">Custom local-first AI systems for quotations, delivery orders, receipts, tax summaries, and daily business spreadsheets.</p>
        <div class="bento-image-wrapper">
          <img loading="lazy" decoding="async" src="assets/images/business-local-ai-documents.png" alt="Local AI business document systems">
        </div>
      </div>
    </a>

    <a href="projects/reachy-mini-hermes-agent/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Embodied AI</span>
        <h3 class="bento-title">Reachy Mini x Hermes</h3>
        <p class="bento-desc">Build a physical AI companion with Reachy Mini, Hermes Agent voice interaction, Obsidian memory, and future RAG workflows.</p>
        <div class="bento-image-wrapper">
          <img loading="lazy" decoding="async" src="assets/images/reachy-mini-hermes-agent-hero.png" alt="Reachy Mini with Hermes Agent terminal">
        </div>
      </div>
    </a>

    <a href="projects/personal-knowledge-base/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Knowledge AI</span>
        <h3 class="bento-title">Personal Knowledge Base</h3>
        <p class="bento-desc">A living knowledge system managed by local or remote AI Agents for classification, semantic search, and connected documents.</p>
        <div class="bento-image-wrapper">
          <img loading="lazy" decoding="async" src="assets/images/obsidian_personal_knowledge_base_2.png" alt="Personal knowledge base in Obsidian">
        </div>
      </div>
    </a>

    <a href="projects/cloudflare-worker-backend/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Automation</span>
        <h3 class="bento-title">Cloudflare Backend</h3>
        <p class="bento-desc">Serverless foundations for API routing, protected keys, and deployable AI app backends.</p>
        <div class="bento-image-wrapper">
          <img loading="lazy" decoding="async" src="assets/images/cloudflare-workers.webp" alt="Cloudflare Backend">
        </div>
      </div>
    </a>

    <a href="projects/hermes-agent-voice-mode/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Voice AI</span>
        <h3 class="bento-title">Hermes Agent Voice Mode</h3>
        <p class="bento-desc">Step-by-step macOS setup to add real-time STT and TTS voice interaction to Hermes Agent.</p>
        <div class="bento-image-wrapper">
          <img loading="lazy" decoding="async" src="assets/images/hermes_agent.jpg" alt="Hermes Agent Voice Mode">
        </div>
      </div>
    </a>

    <a href="projects/github-pages-mkdocs/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Tutorial</span>
        <h3 class="bento-title">Github Pages</h3>
        <p class="bento-desc">Deploy a MkDocs static site on GitHub Pages and let an AI Agent manage the content autonomously.</p>
        <div class="bento-image-wrapper" style="background-color: #fff;">
          <img loading="lazy" decoding="async" src="assets/images/mkdocs_logo.png" alt="GitHub Pages MkDocs" style="object-fit: contain; padding: 1.5rem;">
        </div>
      </div>
    </a>

    <a href="projects/ai-knowledge-wiki/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Knowledge</span>
        <h3 class="bento-title">AI Knowledge Wiki</h3>
        <p class="bento-desc">Let an AI Agent manage your personal Obsidian knowledge base — ingest, query, and maintain your second brain automatically.</p>
        <div class="bento-image-wrapper">
          <img loading="lazy" decoding="async" src="assets/images/obsidian_personal_knowledge_base_2.png" alt="AI Knowledge Wiki">
        </div>
      </div>
    </a>

    <a href="aigc-prompt/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">AIGC</span>
        <h3 class="bento-title">AIGC Prompt Gallery</h3>
        <p class="bento-desc">Curated collection of AI-generated content prompts with full images and copyable prompts.</p>
        <div class="bento-image-wrapper">
          <img loading="lazy" decoding="async" src="assets/images/ORR_reaction_2.png" alt="AIGC Prompt Gallery">
        </div>
      </div>
    </a>

    <a href="projects/tank-motor-assembly/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Robotics</span>
        <h3 class="bento-title">Mini Tank</h3>
        <p class="bento-desc">Assemble a compact ESP32-C3 tracked tank and upload starter firmware for web control and obstacle avoidance.</p>
        <div class="bento-image-wrapper">
          <img loading="lazy" decoding="async" src="assets/images/mini-tank-assembled-preview.png" alt="Mini Tank">
        </div>
      </div>
    </a>

    <a href="projects/notebooklm-tutorial/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Tutorial</span>
        <h3 class="bento-title">NotebookLM Guide</h3>
        <p class="bento-desc">Learn how to use Google's AI note-taking tool to build your personal knowledge base.</p>
        <div class="bento-image-wrapper" style="background-color: white;">
          <img loading="lazy" decoding="async" src="projects/notebookLM_logo.png" alt="NotebookLM Tutorial" style="object-fit: contain; padding: 1rem;">
        </div>
      </div>
    </a>

    <a href="prompt-generator/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">AI Tools</span>
        <h3 class="bento-title">Prompt Generator</h3>
        <p class="bento-desc">Instantly generate high-quality, customized AI prompts tailored to your specific needs.</p>
        <div class="bento-image-wrapper">
          <img loading="lazy" decoding="async" src="Prompt_box.png" alt="Prompt Generator">
        </div>
      </div>
    </a>

    <a href="projects/ai-course/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Automation</span>
        <h3 class="bento-title">n8n Concepts Workflow</h3>
        <p class="bento-desc">Build 24/7 non-stop enterprise automation hubs by orchestrating nodes and connecting applications.</p>
        <div class="bento-image-wrapper">
          <img loading="lazy" decoding="async" src="assets/images/n8n_.png" alt="n8n Concepts Workflow">
        </div>
      </div>
    </a>

    <a href="projects/vibe-coding/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Exploration</span>
        <h3 class="bento-title">Vibe Coding</h3>
        <p class="bento-desc">Interactive programming and exploring the limits of AI-assisted coding.</p>
        <div class="bento-image-wrapper">
          <img loading="lazy" decoding="async" src="assets/images/codex_hello.png" alt="Vibe Coding">
        </div>
      </div>
    </a>

    <a href="projects/raspberrypi-project/raspberrypi-page/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Hardware</span>
        <h3 class="bento-title">Raspberry Pi Integration</h3>
        <p class="bento-desc">Integrating hardware with AI and automation tools for physical-world interactions.</p>
        <div class="bento-image-wrapper">
          <img loading="lazy" decoding="async" src="assets/images/RPi4Case.jpg" alt="Raspberry Pi Integration">
        </div>
      </div>
    </a>

    <a href="tvm-calculator/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Finance</span>
        <h3 class="bento-title">Time Value of Money</h3>
        <p class="bento-desc">Interactive TVM calculator for present value, future value, annuities, and amortization schedules.</p>
        <div class="bento-image-wrapper">
          <img loading="lazy" decoding="async" src="assets/images/TVM.png" alt="Time Value of Money">
        </div>
      </div>
    </a>

    <a href="unit-converter/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Utility</span>
        <h3 class="bento-title">Unit Converter</h3>
        <p class="bento-desc">Fast unit conversion across length, weight, energy, area, pressure, and temperature.</p>
        <div class="bento-image-wrapper">
          <img loading="lazy" decoding="async" src="assets/images/UC.png" alt="Unit Converter">
        </div>
      </div>
    </a>
    <a href="projects/screen-project/timer/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">UI/UX</span>
        <h3 class="bento-title">Screen Project</h3>
        <p class="bento-desc">Custom screen menu systems and interfaces for embedded projects.</p>
        <div class="bento-image-wrapper">
          <img loading="lazy" decoding="async" src="assets/images/knob_pomodo.jpg" alt="Screen Menu System">
        </div>
      </div>
    </a>

    <a href="projects/screen-project/pomodo_timer_V4/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Embedded</span>
        <h3 class="bento-title">Pomodo with case</h3>
        <p class="bento-desc">Pomodoro timer built with ESP32, knob, and 1.3 OLED screen.</p>
        <div class="bento-image-wrapper">
          <img loading="lazy" decoding="async" src="assets/images/esp32knob13OLED.png" alt="Screen Project V4">
        </div>
      </div>
    </a>

    <a href="projects/screen-project/timer_091OLED_V3/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Embedded</span>
        <h3 class="bento-title">Pomodo</h3>
        <p class="bento-desc">Another variant of the Pomodoro timer project focusing on different OLED displays.</p>
        <div class="bento-image-wrapper">
          <img loading="lazy" decoding="async" src="assets/images/pomodo_timer_091OLED_V3.jpg" alt="Another Screen Project">
        </div>
      </div>
    </a>

    <a href="projects/screen-project/timer_091OLED/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Embedded</span>
        <h3 class="bento-title">Pomodoro 0.91 OLED</h3>
        <p class="bento-desc">Compact Pomodoro timer utilizing a 0.91 inch OLED screen.</p>
        <div class="bento-image-wrapper">
          <img loading="lazy" decoding="async" src="projects/screen-project/pomodo_timer_091OLEDV2.jpg" alt="Pomodoro 0.91 OLED">
        </div>
      </div>
    </a>

    <a href="projects/lerobot/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Robotics</span>
        <h3 class="bento-title">LeRobot</h3>
        <p class="bento-desc">Exploring robotics and AI control with the LeRobot arm project.</p>
        <div class="bento-image-wrapper">
          <img loading="lazy" decoding="async" src="assets/images/lerobot-arm.jpg" alt="LeRobot">
        </div>
      </div>
    </a>

    <a href="projects/quadruped/" class="bento-card">
      <div class="bento-content-wrapper">
        <span class="bento-tag">Robotics</span>
        <h3 class="bento-title">Quadruped</h3>
        <p class="bento-desc">Building and programming a four-legged walking robot.</p>
        <div class="bento-image-wrapper">
          <img loading="lazy" decoding="async" src="assets/images/quadruped.jpg" alt="Quadruped">
        </div>
      </div>
    </a>
  </div>
  </section>
  <section class="lab-outro"><div><p class="eyebrow">Always a work in progress</p><h2>Good ideas start with a conversation.</h2></div><a class="lab-button" href="contact/">Let's connect <span aria-hidden="true">↗</span></a></section>
</div>
