---
hide:
  - navigation
  - toc
---

<style>
/* ===== DARK MODE (slate) ===== */
.md-content {
  background-color: #09090b !important;
}
.md-main__inner {
  margin: 0;
  max-width: none;
}

.aigc-container {
  font-family: 'Inter', system-ui, sans-serif;
  color: #f3f4f6;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 2rem 4rem;
}

.aigc-header {
  text-align: center;
  padding: 3rem 1rem 2rem;
  background: radial-gradient(circle at 50% 0%, rgba(236, 72, 153, 0.12) 0%, transparent 60%);
}

.aigc-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #fff;
  letter-spacing: -0.025em;
}

.aigc-gradient-text {
  background-image: linear-gradient(to right, #f472b6, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.aigc-desc {
  max-width: 42rem;
  margin: 0 auto;
  color: #9ca3af;
  font-size: 1.05rem;
  line-height: 1.6;
}

/* ===== Card grid ===== */
.aigc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.aigc-card {
  position: relative;
  background-color: rgba(24, 24, 27, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  overflow: hidden;
  text-decoration: none !important;
  color: inherit !important;
}

.aigc-card:hover {
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-4px);
  background-color: rgba(39, 39, 42, 0.6);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
}

.aigc-card-img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.aigc-card:hover .aigc-card-img {
  transform: scale(1.05);
}

.aigc-card-body {
  padding: 1.25rem 1.5rem 1.5rem;
}

.aigc-card-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
}

/* Hide MkDocs auto h1 */
.md-typeset > h1:first-child { display: none; }

/* ===== Overlay / Modal ===== */
.prompt-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.35s ease, visibility 0.35s ease;
}
.prompt-overlay.active {
  opacity: 1;
  visibility: visible;
}

.prompt-modal {
  position: relative;
  width: 92%;
  max-width: 1100px;
  max-height: 90vh;
  overflow-y: auto;
  background: #18181b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.25rem;
  padding: 0;
  transform: translateY(30px) scale(0.96);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5);
}
.prompt-overlay.active .prompt-modal {
  transform: translateY(0) scale(1);
}

.prompt-modal-img {
  width: 100%;
  display: block;
  border-radius: 1.25rem 1.25rem 0 0;
}

.prompt-modal-content {
  padding: 1.8rem 2rem 2rem;
}

.prompt-modal-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.75rem;
}

.prompt-modal-text {
  font-size: 1rem;
  color: #d1d5db;
  line-height: 1.7;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  padding: 1.25rem;
  margin-bottom: 1.25rem;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  word-break: break-word;
}

.prompt-modal-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.prompt-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  border-radius: 0.6rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.06);
  color: #e5e7eb;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}
.prompt-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.25);
}
.prompt-btn.copied {
  background: rgba(34, 197, 94, 0.15);
  border-color: rgba(34, 197, 94, 0.4);
  color: #86efac;
}

.prompt-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  z-index: 10;
  backdrop-filter: blur(4px);
}
.prompt-close:hover {
  background: rgba(0, 0, 0, 0.8);
}

/* ===== LIGHT MODE overrides ===== */
[data-md-color-scheme="default"] .md-content {
  background-color: #f8fafc !important;
}
[data-md-color-scheme="default"] .aigc-container {
  color: #1e293b;
}
[data-md-color-scheme="default"] .aigc-header {
  background: radial-gradient(circle at 50% 0%, rgba(236, 72, 153, 0.06) 0%, transparent 60%);
}
[data-md-color-scheme="default"] .aigc-title {
  color: #0f172a;
}
[data-md-color-scheme="default"] .aigc-gradient-text {
  background-image: linear-gradient(to right, #db2777, #7c3aed);
}
[data-md-color-scheme="default"] .aigc-desc {
  color: #64748b;
}
[data-md-color-scheme="default"] .aigc-card {
  background-color: #fff;
  border-color: #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}
[data-md-color-scheme="default"] .aigc-card:hover {
  border-color: #cbd5e1;
  background-color: #f8fafc;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}
[data-md-color-scheme="default"] .aigc-card-title {
  color: #0f172a;
}
[data-md-color-scheme="default"] .prompt-modal {
  background: #fff;
  border-color: #e2e8f0;
}
[data-md-color-scheme="default"] .prompt-modal-title {
  color: #0f172a;
}
[data-md-color-scheme="default"] .prompt-modal-text {
  color: #374151;
  background: #f1f5f9;
  border-color: #e2e8f0;
}
[data-md-color-scheme="default"] .prompt-btn {
  border-color: #d1d5db;
  background: #f9fafb;
  color: #374151;
}
[data-md-color-scheme="default"] .prompt-btn:hover {
  background: #f3f4f6;
  border-color: #9ca3af;
}
[data-md-color-scheme="default"] .prompt-close {
  background: rgba(0, 0, 0, 0.45);
}
</style>

<div class="aigc-container">
  <section class="aigc-header">
    <h1 class="aigc-title">
      <span class="aigc-gradient-text">AIGC Prompt</span> Gallery
    </h1>
    <p class="aigc-desc">
      Curated collection of AI-generated content prompts. Click any card to view the full image and copy the prompt.
    </p>
  </section>

  <div class="aigc-grid">

    <div class="aigc-card"
         data-img="../assets/images/panoramic_photo.png"
         data-prompt="A 4:1 panoramic photo I took on my phone, showing the view from my apartment, when the sunset looked perfect with rows of deep red cirrocumulus"
         data-title="Panoramic Sunset"
         onclick="openPromptModal(this)">
      <img class="aigc-card-img" src="../assets/images/panoramic_photo.png" alt="Panoramic Sunset">
      <div class="aigc-card-body">
        <h3 class="aigc-card-title">Panoramic Sunset</h3>
      </div>
    </div>

    <div class="aigc-card"
         data-img="../assets/images/jungle.png"
         data-prompt="A 4:1 panoramic photo I took on my phone, showing the luscious jungle view from my cabin"
         data-title="Jungle Cabin"
         onclick="openPromptModal(this)">
      <img class="aigc-card-img" src="../assets/images/jungle.png" alt="Jungle Cabin">
      <div class="aigc-card-body">
        <h3 class="aigc-card-title">Jungle Cabin</h3>
      </div>
    </div>

    <div class="aigc-card"
         data-img="../assets/images/ORR_reaction_2.png"
         data-prompt="A high-resolution scientific illustration showing the oxygen reduction reaction (ORR) mechanism at the cathode of a PEM fuel cell.
The image focuses on a platinum nanoparticle catalyst supported on carbon (Pt/C) surface. Oxygen molecules (O₂) adsorb onto the Pt active sites and undergo stepwise proton-electron coupled reactions.
The mechanism should clearly display:

O₂ adsorption on Pt surface (*O₂)
Formation of *OOH intermediate
O–O bond breaking to form *O and *OH
Stepwise hydrogenation to form H₂O
Release of water molecule from surface
Protons (H⁺) migrate from the anode through a proton exchange membrane (Nafion-like structure).

Electrons (e⁻) arrive from the external circuit and participate in the reduction reaction.
Anode side (optional inset):

Hydrogen oxidation reaction (HOR) generating H⁺ and e⁻.
🎨 Style Requirements
Nature journal scientific illustration style
Clean white or soft gradient background
Minimalistic and elegant layout
Ball-and-stick molecular structures
Platinum atoms in metallic gray
Oxygen in red, hydrogen in white
Carbon support in dark graphite tone
Proton transport shown as subtle pink spheres/arrows
Electron flow shown as thin blue arrows
Clear reaction arrows between intermediates
Chemical labels: *O₂, *OOH, *O, *OH
Slight 3D depth but schematic precision
No artistic exaggeration, strictly academic tone
Professional figure typography"
         data-title="ORR Reaction"
         onclick="openPromptModal(this)">
      <img class="aigc-card-img" src="../assets/images/ORR_reaction_2.png" alt="ORR Reaction">
      <div class="aigc-card-body">
        <h3 class="aigc-card-title">ORR Reaction</h3>
      </div>
    </div>

    <div class="aigc-card"
         data-img="../assets/images/OER_reaction.png"
         data-prompt="Title:

Scientific schematic illustration of PEM water electrolysis OER mechanism in Nature journal style
Prompt:
A high-resolution scientific illustration showing the oxygen evolution reaction (OER) mechanism in a PEM water electrolyzer. The image depicts a catalyst surface (IrO₂ or RuO₂ nanoparticles supported on titanium substrate) at the anode side.
Stepwise reaction mechanism is visualized on the catalyst surface:

H₂O molecule adsorbing on active site (*)
Formation of *OH intermediate
Formation of *O intermediate
Formation of *OOH intermediate
Release of O₂ molecule
Protons (H⁺) migrate through a proton exchange membrane (Nafion-like structure) toward the cathode side.

Electrons (e⁻) flow through an external circuit.
On the cathode side, hydrogen evolution reaction (HER) forms H₂ gas bubbles.
Style requirements:

Nature journal scientific illustration style
Clean white background
Soft gradient shading
Minimal but precise labels
Clear reaction arrows
Molecular structures shown as ball-and-stick
Catalyst surface textured but subtle
Color palette: oxygen (red), hydrogen (white), catalyst (gray/blue metallic), membrane (light pink/transparent)
Elegant typography for chemical notations (*OH, *O, *OOH)
Slight 3D depth but schematic clarity
No clutter, no artistic exaggeration
Professional academic tone"
         data-title="OER Reaction"
         onclick="openPromptModal(this)">
      <img class="aigc-card-img" src="../assets/images/OER_reaction.png" alt="OER Reaction">
      <div class="aigc-card-body">
        <h3 class="aigc-card-title">OER Reaction</h3>
      </div>
    </div>

  </div>
</div>

<!-- Overlay / Modal -->
<div class="prompt-overlay" id="promptOverlay" onclick="closeIfOutside(event)">
  <div class="prompt-modal" id="promptModal">
    <button class="prompt-close" onclick="closePromptModal()" aria-label="Close">&times;</button>
    <img class="prompt-modal-img" id="modalImg" src="" alt="">
    <div class="prompt-modal-content">
      <h2 class="prompt-modal-title" id="modalTitle"></h2>
      <div class="prompt-modal-text" id="modalText"></div>
      <div class="prompt-modal-actions">
        <button class="prompt-btn" id="copyBtn" onclick="copyPrompt()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          Copy Prompt
        </button>
        <button class="prompt-btn" id="dlBtn" onclick="downloadImage()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download Image
        </button>
      </div>
    </div>
  </div>
</div>

<script>
let currentImgSrc = '';
let currentPrompt = '';

function openPromptModal(card) {
  currentImgSrc = card.getAttribute('data-img');
  currentPrompt = card.getAttribute('data-prompt');
  const title = card.getAttribute('data-title');

  document.getElementById('modalImg').src = currentImgSrc;
  document.getElementById('modalImg').alt = title;
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalText').textContent = currentPrompt;
  document.getElementById('copyBtn').classList.remove('copied');
  document.getElementById('copyBtn').innerHTML =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy Prompt';

  document.getElementById('promptOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePromptModal() {
  document.getElementById('promptOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function closeIfOutside(e) {
  if (e.target === document.getElementById('promptOverlay')) {
    closePromptModal();
  }
}

function copyPrompt() {
  navigator.clipboard.writeText(currentPrompt).then(function() {
    var btn = document.getElementById('copyBtn');
    btn.classList.add('copied');
    btn.innerHTML =
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copied!';
    setTimeout(function() {
      btn.classList.remove('copied');
      btn.innerHTML =
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy Prompt';
    }, 2000);
  });
}

function downloadImage() {
  var a = document.createElement('a');
  a.href = currentImgSrc;
  a.download = currentImgSrc.split('/').pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closePromptModal();
});
</script>
