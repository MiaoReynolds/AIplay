# Quadruped Robot

An experimental AI-assisted walking robot:

| Module      | Description                    |
|-------------|--------------------------------|
| Locomotion  | 4-legged servo structure       |
| Brain       | Microcontroller + IMU          |
| Goals       | Stability, gait learning       |

## Gallery

<style>
/* ===== Card gallery (from AIGC Prompt modified) ===== */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0 2.5rem;
}

.gallery-card {
  position: relative;
  background-color: rgba(24, 24, 27, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  overflow: hidden;
}

.gallery-card:hover {
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-4px);
  background-color: rgba(39, 39, 42, 0.6);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
}

.gallery-card-img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.gallery-card:hover .gallery-card-img {
  transform: scale(1.05);
}

.gallery-card-body {
  padding: 1rem;
  text-align: center;
}

.gallery-card-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
}

/* ===== Overlay / Modal ===== */
.gallery-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}
.gallery-overlay.active {
  opacity: 1;
  visibility: visible;
}

.gallery-modal {
  position: relative;
  max-width: 90%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(20px) scale(0.96);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.gallery-overlay.active .gallery-modal {
  transform: translateY(0) scale(1);
}

.gallery-modal-img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 0.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.gallery-modal-title {
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.gallery-close {
  position: absolute;
  top: -1.5rem;
  right: -1.5rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  z-index: 10;
}
.gallery-close:hover {
  background: rgba(255, 255, 255, 0.4);
}

/* ===== LIGHT MODE overrides ===== */
[data-md-color-scheme="default"] .gallery-card {
  background-color: #fff;
  border-color: #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}
[data-md-color-scheme="default"] .gallery-card:hover {
  border-color: #cbd5e1;
  background-color: #f8fafc;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}
[data-md-color-scheme="default"] .gallery-card-title {
  color: #0f172a;
}
[data-md-color-scheme="default"] .gallery-overlay {
  background: rgba(255, 255, 255, 0.85);
}
[data-md-color-scheme="default"] .gallery-modal-img {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}
[data-md-color-scheme="default"] .gallery-modal-title {
  color: #0f172a;
  text-shadow: none;
}
[data-md-color-scheme="default"] .gallery-close {
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
}
[data-md-color-scheme="default"] .gallery-close:hover {
  background: rgba(0, 0, 0, 0.6);
}
@media (max-width: 768px) {
  .gallery-close {
    top: 1rem;
    right: 1rem;
  }
}
</style>

<div class="gallery-grid">
  <div class="gallery-card" data-img="../../assets/images/9497ca747dfb822823957c10a267d02.jpg" data-title="Initial Frame" onclick="openGalleryModal(this)">
    <img class="gallery-card-img" src="../../assets/images/9497ca747dfb822823957c10a267d02.jpg" alt="Initial Frame">
    <div class="gallery-card-body">
      <h3 class="gallery-card-title">Initial Frame</h3>
    </div>
  </div>

  <div class="gallery-card" data-img="../../assets/images/b7d5ccbc77da6796b81c8b9822d4a16.jpg" data-title="Walking Test" onclick="openGalleryModal(this)">
    <img class="gallery-card-img" src="../../assets/images/b7d5ccbc77da6796b81c8b9822d4a16.jpg" alt="Walking Test">
    <div class="gallery-card-body">
      <h3 class="gallery-card-title">Walking Test</h3>
    </div>
  </div>

  <div class="gallery-card" data-img="../../assets/images/fb7bacf4721e84c9d51899643e53dea.jpg" data-title="AI Gait Control" onclick="openGalleryModal(this)">
    <img class="gallery-card-img" src="../../assets/images/fb7bacf4721e84c9d51899643e53dea.jpg" alt="AI Gait Control">
    <div class="gallery-card-body">
      <h3 class="gallery-card-title">AI Gait Control</h3>
    </div>
  </div>
</div>

<!-- Overlay / Modal -->
<div class="gallery-overlay" id="galleryOverlay" onclick="closeIfOutsideGallery(event)">
  <div class="gallery-modal" id="galleryModal">
    <button class="gallery-close" onclick="closeGalleryModal()" aria-label="Close">&times;</button>
    <img class="gallery-modal-img" id="gModalImg" src="" alt="">
    <h2 class="gallery-modal-title" id="gModalTitle"></h2>
  </div>
</div>

<script>
function openGalleryModal(card) {
  const imgSrc = card.getAttribute('data-img');
  const title = card.getAttribute('data-title');

  document.getElementById('gModalImg').src = imgSrc;
  document.getElementById('gModalImg').alt = title;
  document.getElementById('gModalTitle').textContent = title;

  document.getElementById('galleryOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeGalleryModal() {
  document.getElementById('galleryOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function closeIfOutsideGallery(e) {
  if (e.target === document.getElementById('galleryOverlay')) {
    closeGalleryModal();
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeGalleryModal();
});
</script>

## Hardware & Engineering Design

We have custom-designed an ultra-low-cost robotic dog based entirely on widely available SG90 micro servos. The core calculation unit is powered by either an ESP8266 or an ESP32 microcontroller, depending on the computational load. 

To maintain balance and acquire real-time postural data, we integrated an MPU6050 gyroscope and accelerometer. The 12 independent robot joints are driven by a dedicated 16-channel PCA9685 PWM driver board. 

**Power Challenge:** Delivering sufficient and stable current to 12 servos simultaneously under load is a significant challenge. It requires a dedicated, robust voltage regulation controller to prevent brownouts and jittering.

## Software & Kinematics

On the software side, the entire system is programmed in **MicroPython**. We developed a standalone custom **Inverse Kinematics (IK)** engine from scratch to calculate the precise joint angles required to position the robot's feet to desired coordinates in 3D space, which is critical for generating stable walking gaits.

## Future Plans

- **Power Management:** Implement a dedicated power control IC and an improved voltage regulator to handle peak servo current spikes effectively.
- **Upgraded Brain:** Transition entirely to more powerful computing units (e.g., ESP32-S3 or better) to handle advanced algorithms natively.
- **AI-Driven Gait Synthesis:** Let an AI Agent take over the design and optimization of the Inverse Kinematics and generate several standard walking gait algorithms dynamically. 
- **Remote Control Integration:** Add a dedicated handheld remote controller for easier testing and demonstration.
- **Vision Subsystem (Long-Term):** Eventually add a camera for computer vision tasks (object tracking, obstacle avoidance). However, this must be carefully balanced against the additional power draw and weight.
