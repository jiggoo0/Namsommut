/**
* Namsommut Investigation - Core Engine
* 🟢 Status: Operational
* 🛡️ Security: AES-256 Encrypted Interface
*/

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Initialize Components (โหลดส่วนประกอบหลักจากไฟล์ภายนอก)
  await initApp();

  // 2. Technical Effects (เริ่มเอฟเฟกต์หลัง UI พร้อม)
  typewriterEffect();
  securityScannerSim();

  // 3. Initialize Utilities
  if (window.Utils && window.Utils.initProtection) {
    window.Utils.initProtection();
  }
});

/**
* โหลดส่วนประกอบพื้นฐานของเว็บไซต์ (Navbar, Footer, etc.)
*/
async function initApp() {
  console.log("%c🔒 Namsommut Core: Initializing Security Protocol...",
    "color: #007bff; font-weight: bold;");

  const components = [{
    id: 'navbar-placeholder', url: 'components/navbar.html'
  },
    {
      id: 'hero-placeholder', url: 'components/hero.html'
    },
    {
      id: 'header-placeholder', url: 'components/header.html'
    },
    {
      id: 'footer-placeholder', url: 'components/footer.html'
    }];

  for (const comp of components) {
    const element = document.getElementById(comp.id);
    if (element) {
      try {
        const response = await fetch(comp.url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const html = await response.text();
        element.innerHTML = html;
      } catch (e) {
        console.error(`❌ Error loading ${comp.url}:`, e);
      }
    }
  }
  console.log("%c✅ Namsommut Core: All Modules Loaded.", "color: #28a745; font-weight: bold;");
}

/**
* เอฟเฟกต์พิมพ์ดีด (Typewriter)
*/
function typewriterEffect() {
  const target = document.querySelector('.typewriter-text');
  if (!target) return;

  const text = target.getAttribute('data-text') || "ความจริง... ไม่มีนามสมมุติ";
  let i = 0;
  target.innerHTML = "";

  function type() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }
  setTimeout(type, 1200);
}

/**
* ระบบจำลองการสแกนความปลอดภัยในแถบสถานะ
*/
function securityScannerSim() {
  const statusText = document.querySelector('.system-status-update');
  if (!statusText) return;

  const logs = [
    "Scanning for deep web footprints...",
    "Proxy tunneling active: 103.212.XX.X",
    "Encryption: AES-256 military-grade.",
    "Status: System Hidden from trackers.",
    "Ghost Network: Node 09 Active."
  ];

  let logIndex = 0;
  setInterval(() => {
    statusText.style.opacity = 0;
    setTimeout(() => {
      statusText.innerHTML = logs[logIndex];
      statusText.style.opacity = 1;
      logIndex = (logIndex + 1) % logs.length;
    }, 500);
  }, 5000);
}

/**
* สร้าง Case ID อัตโนมัติ (ใช้ในหน้า Contact)
*/
window.generateCaseID = function() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "NSM-";
  for (let i = 0; i < 8; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  const caseElement = document.getElementById('generated-case-id');
  if (caseElement && caseElement.value === "") {
    caseElement.value = id;
  }
  return id;
};

// ควบคุมการเปลี่ยนสี Navbar เมื่อ Scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (nav) {
    if (window.scrollY > 50) {
      nav.classList.add('nav-scrolled', 'shadow-lg');
      nav.style.background = "rgba(10, 10, 11, 0.98)";
    } else {
      nav.classList.remove('nav-scrolled', 'shadow-lg');
      nav.style.background = "rgba(10, 10, 11, 0.85)";
    }
  }
});