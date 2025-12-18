# 📦 Project Summary: web-template

> Generated on: 2025-12-18 18:58:40

## 🗂 โครงสร้างโปรเจกต์

```text
.
├── .บันทึก.md
├── 404.html
├── PROJECT_SUMMARY.md
├── READM.md
├── about.html
├── assets
│   ├── css
│   │   ├── main.css
│   │   ├── responsive.css
│   │   └── theme.css
│   ├── fonts
│   ├── img
│   │   ├── banner.jpg
│   │   ├── logo.png
│   │   ├── team1.jpg
│   │   ├── team2.jpg
│   │   └── team3.jpg
│   └── js
│       ├── app.js
│       ├── render.js
│       └── utils.js
├── components
│   ├── footer.html
│   ├── header.html
│   ├── hero.html
│   └── navbar.html
├── contact.html
├── data
│   ├── reviews.json
│   ├── services.json
│   ├── site.json
│   └── team.json
├── index.html
├── privacy.html
├── review.html
├── scripts
│   └── project-summary.sh
└── services.html

9 directories, 30 files
```

## 📄 File Scan (แสดง 60 บรรทัดแรกของทุกไฟล์)

### 📄 `.บันทึก.md`

```markdown
READM.md
├── about.html
├── assets
│   ├── css
│   │   ├── main.css
│   │   ├── responsive.css
│   │   └── theme.css
│   ├── fonts
│   ├── img
│   │   ├── banner.jpg
│   │   ├── logo.png
│   │   ├── team1.jpg
│   │   └── team2.jpg
│   └── js
│       ├── app.js
│       └── render.js
├── components
│   ├── footer.html
│   ├── header.html
│   ├── hero.html
│   ├── navbar.html
│   └── review.html
├── contact.html
├── data
│   ├── reviews.json
│   ├── services.json
│   ├── site.json
│   └──  fammiry.json
├── index.html
└── services.html

8 directories, 23 files



ขอไอเดียสร้างเว็ปไซค์ ธุระกิจร้านบะหมี่ ช.สหชัย เกี๊ยวปูหมูแดง จ.ตาก โดย คุณชายบะหมี่ หรือ (เฮียเนก) และคุณ นัชรินทร์ (เจ๊ตั๊ก) เปิดทำการมาแล้ว 8 ปี เสริมรายละเอียดให้ดูอบอุ่นเป็นครอบครัว```

### 📄 `404.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 ACCESS DENIED | Namsommut Investigation</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;700&family=JetBrains+Mono&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/theme.css">
    
    <style>
        .error-page {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: radial-gradient(circle at center, #1a1a1c 0%, #050505 100%);
            overflow: hidden;
        }
        .glitch {
            font-size: 8rem;
            font-weight: 900;
            position: relative;
            color: #fff;
            text-shadow: 0.05em 0 0 #007bff, -0.025em -0.05em 0 #ff4d4d,
                         0.025em 0.05em 0 #00d4ff;
            animation: glitch 500ms infinite;
        }
        @keyframes glitch {
            0% { text-shadow: 0.05em 0 0 #007bff, -0.05em -0.025em 0 #ff4d4d; }
            14% { text-shadow: 0.05em 0 0 #007bff, -0.05em -0.025em 0 #ff4d4d; }
            15% { text-shadow: -0.05em -0.025em 0 #007bff, 0.025em 0.025em 0 #ff4d4d; }
            49% { text-shadow: -0.05em -0.025em 0 #007bff, 0.025em 0.025em 0 #ff4d4d; }
            50% { text-shadow: 0.025em 0.05em 0 #007bff, 0.05em 0 0 #ff4d4d; }
            99% { text-shadow: 0.025em 0.05em 0 #007bff, 0.05em 0 0 #ff4d4d; }
            100% { text-shadow: -0.025em 0 0 #007bff, -0.025em -0.025em 0 #ff4d4d; }
        }
    </style>
</head>
<body class="bg-dark text-white">

    <div class="error-page text-center p-4">
        <div class="container">
            <div class="glitch mb-4">404</div>
            
            <h2 class="fw-bold text-gradient-blue mb-3">ACCESS DENIED / FILE REMOVED</h2>
            
            <div class="font-monospace text-muted mb-5">
                <p>พิกัดที่คุณพยายามเข้าถึงไม่มีอยู่ในฐานข้อมูล หรืออาจถูกลบเพื่อความปลอดภัย</p>
                <div class="p-3 bg-white bg-opacity-5 rounded d-inline-block">
                    <small id="error-log" class="text-danger"></small>
                </div>
            </div>

            <div class="d-flex justify-content-center gap-3">
                <a href="index.html" class="btn btn-primary rounded-pill px-4 py-2">
```

### 📄 `READM.md`

```markdown
# 🕵️‍♂️ Namsommut Investigation - Website Project

**บริษัท นักสืบ นามสมมุติ จำกัด** เป็นโปรเจกต์เว็บไซต์แนะนำบริการสืบสวนสอบสวนที่เน้นความปลอดภัย ความลึกลับ และความน่าเชื่อถือ โดยตัวเว็บถูกพัฒนาด้วยโครงสร้าง **Static Web Architecture** ที่ทันสมัย ใช้งานง่าย และรองรับการแสดงผลทุกอุปกรณ์

---

## 🚀 จุดเด่นของโปรเจกต์ (Key Features)

- **Modular Components:** แยกส่วน Navbar, Footer และ Hero ออกเป็นไฟล์อิสระ ง่ายต่อการแก้ไข
- **Dynamic Content:** ดึงข้อมูลบริการ (Services) และรีวิว (Reviews) จากไฟล์ JSON ทำให้ไม่ต้องแก้โค้ด HTML บ่อยๆ
- **Glassmorphism Design:** ดีไซน์ทันสมัยด้วยเอฟเฟกต์โปร่งแสงและโทนสี Midnight Black
- **Secure Form Simulation:** ระบบฟอร์มติดต่อที่จำลองการเข้ารหัสข้อมูล (Encryption Simulation)
- **Responsive Design:** รองรับการใช้งานสมบูรณ์แบบทั้งบน Desktop, Tablet และ Mobile

---

## 📂 โครงสร้างโฟลเดอร์ (Project Structure)

```text
namsommut-project/
├── index.html            # หน้าแรก (Hero & Service Summary)
├── about.html            # ข้อมูลบริษัทและทีมงาน
├── services.html         # รายละเอียดบริการทั้งหมด
├── review.html           # เสียงตอบรับจากลูกค้า
├── contact.html          # แบบฟอร์มติดต่อเคสลับ
├── components/           # ส่วนประกอบเว็บที่ใช้ร่วมกัน
│   ├── header.html       # Navbar & Navigation
│   ├── footer.html       # Footer & Copyright
│   └── hero.html         # Hero Section Component
├── data/                 # ไฟล์ฐานข้อมูล JSON
│   ├── site.json         # ข้อมูลพื้นฐานของบริษัท
│   ├── services.json     # รายการบริการ
│   └── reviews.json      # ข้อมูลรีวิวลูกค้า
└── assets/               # ทรัพยากรเสริม
    ├── css/              # main.css, theme.css, responsive.css
    ├── js/               # app.js (Logic), render.js (UI)
    └── img/              # รูปภาพประกอบ

🛠 เทคโนโลยีที่ใช้ (Tech Stack)
 * Frontend: HTML5, CSS3 (Custom Variables)
 * Framework: Bootstrap 5.3
 * Icons: Bootstrap Icons
 * Fonts: Google Fonts (Sarabun)
 * Scripting: Vanilla JavaScript (ES6+) สำหรับจัดการ Fetch API และ DOM Manipulation
💻 วิธีการติดตั้งและใช้งาน (Getting Started)
 * Clone หรือดาวน์โหลดโปรเจกต์ ลงในเครื่องคอมพิวเตอร์ของคุณ
 * การเปิดใช้งาน: > ⚠️ สำคัญ: เนื่องจากมีการใช้ Fetch API เพื่อดึงข้อมูลไฟล์ JSON และ Components คุณ ไม่สามารถ เปิดไฟล์ได้ด้วยการดับเบิลคลิก index.html โดยตรง
 * ใช้ Local Server:
   * สำหรับ VS Code: แนะนำให้ติดตั้ง Extension "Live Server" จากนั้นคลิกขวาที่ index.html แล้วเลือก Open with Live Server
   * หรือใช้คำสั่งผ่าน Terminal (ถ้ามี Python): python -m http.server 8000
📝 การแก้ไขข้อมูล (Customization)
 * แก้ไขชื่อบริษัท/สโลแกน: เข้าไปที่ไฟล์ data/site.json
 * เพิ่ม/ลด บริการ: แก้ไขรายการในไฟล์ data/services.json
 * จัดการรีวิว: เพิ่มข้อมูลในไฟล์ data/reviews.json
🔒 จรรยาบรรณและความปลอดภัย (Security Note)
เว็บไซต์นี้ถูกออกแบบมาเพื่อจุดประสงค์ในการนำเสนอผลงาน (Portfolio/Demo) ข้อมูลที่กรอกผ่านหน้า contact.html จะถูกบันทึกไว้ใน Console ของเบราว์เซอร์เท่านั้น ไม่มีการส่งไปยังเซิร์ฟเวอร์จริงในเวอร์ชันเริ่มต้นนี้
👤 ผู้พัฒนา
 * ชื่อทีม/บริษัท: บริษัท นักสืบ นามสมมุติ จำกัด
 * สโลแกน: "ความจริงไม่มีนามสมมุติ"
```

### 📄 `about.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>เกี่ยวกับเรา | Namsommut Investigation</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;600;700&family=JetBrains+Mono&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/theme.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
</head>
<body class="bg-dark text-white">

    <div id="header-placeholder"></div>

    <main style="margin-top: 100px;">
        
        <section class="section-padding overflow-hidden">
            <div class="container">
                <div class="row align-items-center g-5">
                    <div class="col-lg-6 animate-on-scroll">
                        <div class="badge-status mb-3">Intelligence Agency Profile</div>
                        <h1 class="display-3 fw-bold text-gradient-blue mb-4">เราคือใคร?</h1>
                        <p class="lead text-silver mb-4">
                            "นามสมมุติ" ไม่ใช่แค่บริษัทนักสืบ แต่เราคือ **เครือข่ายปฏิบัติการข่าวกรองอิสระ** ที่ก่อตั้งโดยกลุ่มอดีตผู้เชี่ยวชาญด้านความมั่นคงและเทคโนโลยีสารสนเทศ
                        </p>
                        <p class="text-muted lh-lg mb-5">
                            เราเล็งเห็นว่าในโลกปัจจุบัน ความจริงมักถูกซ่อนไว้ภายใต้เลเยอร์ของข้อมูลดิจิทัลและสายสัมพันธ์ที่ซับซ้อน ภารกิจของเราคือการ "ลอกคราบ" สิ่งเหล่านั้น เพื่อมอบความจริงที่จับต้องได้และเป็นประโยชน์สูงสุดต่อการตัดสินใจของคุณ
                        </p>
                        <div class="row g-4">
                            <div class="col-6">
                                <h3 class="fw-bold text-primary mb-0">15+</h3>
                                <small class="text-uppercase tracking-widest text-muted">Years Experience</small>
                            </div>
                            <div class="col-6">
                                <h3 class="fw-bold text-primary mb-0">1,200+</h3>
                                <small class="text-uppercase tracking-widest text-muted">Cases Solved</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 position-relative animate-on-scroll">
                        <div class="image-stack position-relative p-5">
                            <img src="assets/img/about-main.jpg" alt="Investigation Team" class="img-fluid rounded-4 grayscale shadow-lg" style="border: 1px solid rgba(0,123,255,0.2);">
                            <div class="glass-card p-3 position-absolute bottom-0 start-0 mb-n3 ms-n3 shadow-lg" style="max-width: 250px;">
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-shield-fill-check text-success fs-3 me-3"></i>
                                    <small class="text-white-50">Verified Operator: Active Level 5 Clearance</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-padding bg-dark-section">
```

### 📄 `assets/css/main.css`

```css
/**
 * Namsommut Investigation - Main Style Engine
 * 🛡️ Theme: Elite Dark / Cyber Noir
 * 🟢 Version: 2.0.1
 */

/* 1. Root Variables & Reset */
:root {
    --primary-color: #007bff;
    --primary-glow: rgba(0, 123, 255, 0.5);
    --bg-dark: #050505;
    --bg-section: #0a0a0b;
    --card-bg: #111112;
    --text-main: #e0e0e0;
    --text-muted: #888888;
    --border-color: rgba(255, 255, 255, 0.08);
    --transition-smooth: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

body {
    background-color: var(--bg-dark);
    color: var(--text-main);
    font-family: 'Sarabun', sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
}

/* 2. Global Utilities */
.tracking-widest { letter-spacing: 0.2em; }
.tracking-tighter { letter-spacing: -1px; }

.text-gradient-primary {
    background: linear-gradient(90deg, #007bff, #00d4ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* 3. Layout Components */
.bg-dark-section {
    background-color: var(--bg-section);
}

.backdrop-blur {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
}

/* 4. Service & Team Cards */
.bg-card-custom {
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    transition: var(--transition-smooth);
    position: relative;
    overflow: hidden;
}

.shadow-hover:hover {
    transform: translateY(-10px);
    border-color: var(--primary-color) !important;
    box-shadow: 0 15px 40px rgba(0, 123, 255, 0.15) !important;
```

### 📄 `assets/css/responsive.css`

```css
/**
 * Namsommut Investigation - Responsive Adaptive Engine
 * 📱 Optimizing for Mobile, Tablet, and Desktop
 * 🛡️ Status: Fully Responsive
 */

/* 1. Large Devices (Desktops) */
@media (min-width: 1200px) {
    .container {
        max-width: 1140px;
    }
}

/* 2. Medium Devices (Tablets) */
@media (max-width: 991.98px) {
    /* ปรับ Navbar ให้เป็นแบบ Full Screen Menu เมื่อกดขยาย */
    .navbar-collapse {
        background: rgba(10, 10, 11, 0.98);
        backdrop-filter: blur(20px);
        margin-top: 15px;
        padding: 20px;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .nav-link-custom {
        padding: 12px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    /* Hero Section ปรับขนาดตัวอักษรให้พอดีจอ */
    .display-2 {
        font-size: 3rem;
    }
    
    .hero-section {
        padding-top: 120px;
        text-align: center;
    }
}

/* 3. Small Devices (Mobile Phones) */
@media (max-width: 767.98px) {
    /* ปรับระยะห่างและขนาดตัวอักษรหลัก */
    .display-2 {
        font-size: 2.2rem;
        line-height: 1.2;
    }

    .lead {
        font-size: 1rem;
    }

    /* ปรับปุ่มให้เป็นแบบ Stack (ซ้อนกัน) เพื่อให้กดง่ายด้วยนิ้วโป้ง */
    .d-sm-flex {
        flex-direction: column;
        gap: 15px !important;
    }

    .btn-lg {
```

### 📄 `assets/css/theme.css`

```css
/**
 * Namsommut Investigation - Theme & Aesthetic Variables
 * 🎨 Style: Noir Intelligence / Neon Accents
 * 🟢 Status: System Calibrated
 */

/* 1. Theme Configuration */
:root {
    /* Main Palettes */
    --primary-electric: #007bff;
    --primary-dark: #0056b3;
    --accent-cyan: #00d4ff;
    --danger-red: #ff4d4d;
    
    /* Neutral Shades */
    --dark-obsidian: #050505;
    --dark-charcoal: #0a0a0b;
    --dark-slate: #161618;
    
    /* Text Colors */
    --text-pure: #ffffff;
    --text-silver: #c0c0c0;
    --text-dim: rgba(255, 255, 255, 0.5);
    
    /* Effects */
    --glass-bg: rgba(10, 10, 11, 0.85);
    --border-glass: rgba(255, 255, 255, 0.08);
}

/* 2. Global Section Styling */
.section-padding {
    padding: 80px 0;
}

.bg-dark-obsidian { background-color: var(--dark-obsidian); }
.bg-dark-charcoal { background-color: var(--dark-charcoal); }

/* 3. Typography & Gradients */
h1, h2, h3, h4, h5, h6 {
    color: var(--text-pure);
    letter-spacing: 0.5px;
}

.text-cyan { color: var(--accent-cyan); }
.text-silver { color: var(--text-silver); }

.text-gradient-blue {
    background: linear-gradient(90deg, var(--primary-electric), var(--accent-cyan));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* 4. Specialized Components */

/* Glassmorphism Card */
.glass-card {
    background: var(--dark-slate);
    border: 1px solid var(--border-glass);
    backdrop-filter: blur(10px);
    border-radius: 20px;
```

### 📄 `assets/img/banner.jpg`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `assets/img/logo.png`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `assets/img/team1.jpg`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `assets/img/team2.jpg`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `assets/img/team3.jpg`

_[binary file – ไม่แสดงเนื้อหา]_

### 📄 `assets/js/app.js`

```javascript
/**
 * Namsommut Investigation - Core Engine
 * 🟢 Status: Operational
 * 🛡️ Security: AES-256 Encrypted Interface
 */

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Initialize Components (โหลดส่วนประกอบหลัก)
    await initApp();

    // 2. Technical Effects (เริ่มเอฟเฟกต์หลังโหลดเสร็จ)
    typewriterEffect();
    securityScannerSim();
    
    // 3. Initialize Protection
    if (window.Utils) {
        window.Utils.preventBruteForce();
    }
});

/**
 * โหลดส่วนประกอบพื้นฐานของเว็บไซต์ผ่าน Utils.js
 */
async function initApp() {
    console.log("🔒 Namsommut Core: Initializing Security Protocol...");
    
    // รายชื่อส่วนประกอบและ Placeholder ID
    const components = [
        { id: 'navbar-placeholder', url: 'components/navbar.html' },
        { id: 'hero-placeholder', url: 'components/hero.html' },
        { id: 'header-placeholder', url: 'components/header.html' },
        { id: 'footer-placeholder', url: 'components/footer.html' }
    ];

    // ใช้ฟังก์ชันจาก Utils เพื่อโหลด Component แบบมีประสิทธิภาพ
    for (const comp of components) {
        if (window.Utils && window.Utils.loadComponent) {
            await window.Utils.loadComponent(comp.id, comp.url);
        } else {
            // Fallback กรณี Utils.js ยังไม่ทำงาน
            const element = document.getElementById(comp.id);
            if (element) {
                try {
                    const response = await fetch(comp.url);
                    const html = await response.text();
                    element.innerHTML = html;
                } catch (e) {
                    console.error(`Error loading ${comp.url}`, e);
                }
            }
        }
    }
    console.log("✅ Namsommut Core: All Modules Loaded.");
}

/**
 * เอฟเฟกต์พิมพ์ดีด (Typewriter) สำหรับสโลแกนหน้าแรก
 * วิธีใช้: ใส่ class="typewriter-text" และ data-text="ข้อความ" ใน HTML
 */
function typewriterEffect() {
```

### 📄 `assets/js/render.js`

```javascript
/**
 * Namsommut Investigation - Data Renderer
 * 🛠️ Function: Fetching and Rendering Secure Data
 */

document.addEventListener('DOMContentLoaded', () => {
    // เริ่มต้นการเรนเดอร์ข้อมูลเมื่อ Component โหลดเสร็จ
    setTimeout(() => {
        renderServices();
        renderReviews();
        renderTeam();
    }, 500); // รอให้ Placeholder โหลดเสร็จเล็กน้อย
});

/**
 * 1. เรนเดอร์รายการบริการ (Services)
 * แสดงผลเป็น Card ที่มีดีไซน์ "Elite Operations"
 */
async function renderServices() {
    const serviceContainer = document.getElementById('service-list');
    if (!serviceContainer) return;

    try {
        const response = await fetch('data/services.json');
        const services = await response.json();

        serviceContainer.innerHTML = services.map(service => `
            <div class="col-md-6 col-lg-4 mb-4 animate-on-scroll">
                <div class="card bg-card-custom h-100 border-0 shadow-hover p-4 rounded-4 position-relative overflow-hidden">
                    <div class="corner-light"></div>
                    
                    <div class="card-body p-0">
                        <div class="d-flex align-items-center mb-3">
                            <i class="bi ${service.icon} text-primary fs-2 me-3"></i>
                            <div>
                                <h5 class="fw-bold mb-0 text-white">${service.title}</h5>
                                <small class="text-primary text-uppercase tracking-wider" style="font-size: 0.7rem;">${service.subtitle}</small>
                            </div>
                        </div>
                        <p class="text-muted small mb-4">${service.description}</p>
                        <ul class="list-unstyled mb-4">
                            ${service.features.map(f => `
                                <li class="text-white-50 small mb-2">
                                    <i class="bi bi-check2-circle text-primary me-2"></i>${f}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <div class="card-footer bg-transparent border-0 p-0 mt-auto">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 py-2 px-3">
                                ${service.price_range || 'ประเมินตามความยาก'}
                            </span>
                        </div>
                        <a href="https://line.me/ti/p/PCE92r2xrB" class="btn btn-outline-primary btn-sm w-100 rounded-pill">
                            <i class="bi bi-shield-lock me-2"></i> จองคิวสืบสวน
                        </a>
                    </div>
                </div>
```

### 📄 `assets/js/utils.js`

```javascript
/**
 * Namsommut Investigation - Utility Tools
 * 🛠️ Helpers for Component Loading & Security Mockups
 */

const Utils = {
    /**
     * 1. ฟังก์ชันโหลดไฟล์ HTML เข้ามาแสดงใน Placeholder
     * @param {string} elementId - ID ของตัวรับในหน้า HTML
     * @param {string} url - Path ของไฟล์ Component
     */
    loadComponent: async (elementId, url) => {
        const container = document.getElementById(elementId);
        if (!container) return;

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const html = await response.text();
            container.innerHTML = html;
            
            // Dispatch event เพื่อบอกว่า Component โหลดเสร็จแล้ว
            window.dispatchEvent(new CustomEvent('componentLoaded', { detail: elementId }));
        } catch (error) {
            console.error(`🔒 Security Alert: Failed to fetch secure module [${url}]`, error);
            container.innerHTML = `<div class="text-danger small p-3">Access Denied: Resource Encrypted</div>`;
        }
    },

    /**
     * 2. ฟังก์ชันจัดรูปแบบตัวเลขราคา (Currency Formatter)
     * @param {number} amount - จำนวนเงิน
     */
    formatCurrency: (amount) => {
        return new Intl.NumberFormat('th-TH', {
            style: 'currency',
            currency: 'THB',
            minimumFractionDigits: 0
        }).format(amount);
    },

    /**
     * 3. ฟังก์ชันสุ่ม "สถานะเซิร์ฟเวอร์" (Mock Security Log)
     * เพื่อใช้แสดงใน Header หรือ Status Bar
     */
    getSecurityStatus: () => {
        const nodes = ["Bangkok-Mainframe", "Cloud-Proxy-SGP", "Deep-Data-Link"];
        const status = ["ENCRYPTED", "OPERATIONAL", "HIDDEN"];
        
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
        const randomStatus = status[Math.floor(Math.random() * status.length)];
        
        return `[${randomNode}] STATUS: ${randomStatus}`;
    },

    /**
     * 4. ระบบป้องกันการคัดลอกเบื้องต้น (Basic Protection)
     * สื่อถึงความซีเรียสเรื่องความลับ
     */
    preventBruteForce: () => {
```

### 📄 `components/footer.html`

```html
<footer class="bg-dark text-white pt-5 pb-3 border-top border-secondary border-opacity-25">
    <div class="container">
        <div class="row g-4">
            <div class="col-lg-4 col-md-6">
                <div class="d-flex align-items-center mb-3">
                    <div class="icon-scan-glow me-2">
                        <i class="bi bi-incognito text-primary fs-3"></i>
                    </div>
                    <span class="h4 fw-bold mb-0 text-uppercase tracking-wider text-glow">นามสมมุติ</span>
                </div>
                <p class="text-muted small mb-4 lh-lg">
                    หน่วยสืบสวนอิสระที่มุ่งเน้นการค้นหาความจริงผ่านข้อมูลดิจิทัลและปฏิบัติการภาคสนาม 
                    เราทำงานอยู่หลังม่าน เพื่อความปลอดภัยและผลประโยชน์สูงสุดของลูกค้า
                </p>
                <div class="d-flex gap-3">
                    <a href="#" class="social-icon-box" title="Telegram"><i class="bi bi-telegram"></i></a>
                    <a href="#" class="social-icon-box" title="Line Official"><i class="bi bi-line"></i></a>
                    <a href="privacy.html" class="social-icon-box" title="Security Protocol"><i class="bi bi-shield-lock-fill"></i></a>
                </div>
            </div>

            <div class="col-lg-2 col-md-6">
                <h6 class="fw-bold mb-4 text-primary text-uppercase" style="font-size: 0.85rem; letter-spacing: 1px;">เมนูหลัก</h6>
                <ul class="list-unstyled small">
                    <li class="mb-2"><a href="index.html" class="footer-link">หน้าแรก</a></li>
                    <li class="mb-2"><a href="about.html" class="footer-link">เกี่ยวกับเรา</a></li>
                    <li class="mb-2"><a href="services.html" class="footer-link">บริการสืบสวน</a></li>
                    <li class="mb-2"><a href="review.html" class="footer-link">รีวิวลูกค้า</a></li>
                </ul>
            </div>

            <div class="col-lg-2 col-md-6">
                <h6 class="fw-bold mb-4 text-primary text-uppercase" style="font-size: 0.85rem; letter-spacing: 1px;">ความปลอดภัย</h6>
                <ul class="list-unstyled small text-muted">
                    <li class="mb-2 d-flex align-items-center"><i class="bi bi-lock-fill me-2 text-primary"></i>นโยบายความเป็นส่วนตัว</li>
                    <li class="mb-2 d-flex align-items-center"><i class="bi bi-eye-slash-fill me-2 text-primary"></i>การทำลายข้อมูลเคส</li>
                    <li class="mb-2 d-flex align-items-center"><i class="bi bi-patch-check-fill me-2 text-primary"></i>จรรยาบรรณวิชาชีพ</li>
                </ul>
            </div>

            <div class="col-lg-4 col-md-6">
                <h6 class="fw-bold mb-4 text-primary text-uppercase" style="font-size: 0.85rem; letter-spacing: 1px;">การติดต่อที่ปลอดภัย</h6>
                <div class="secure-contact-card p-3 rounded-3 border border-secondary border-opacity-25">
                    <p class="small text-muted mb-3 italic-sm">
                        <i class="bi bi-info-circle me-1"></i> แนะนำให้ติดต่อผ่านช่องทางที่เข้ารหัส (E2EE)
                    </p>
                    <div class="contact-item mb-2">
                        <a href="tel:02XXXXXXX" class="text-decoration-none text-white d-flex align-items-center">
                            <i class="bi bi-telephone-fill text-primary me-2"></i> 02-XXX-XXXX
                        </a>
                    </div>
                    <div class="contact-item">
                        <a href="mailto:secure@namsommut.com" class="text-decoration-none text-white d-flex align-items-center">
                            <i class="bi bi-envelope-at-fill text-primary me-2"></i> secure@namsommut.com
                        </a>
                    </div>
                </div>
            </div>
        </div>

```

### 📄 `components/header.html`

```html
<header class="main-header fixed-top animate-fade-in" style="z-index: 1030;">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-75 backdrop-blur border-bottom border-white border-opacity-10 py-3">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center" href="index.html">
                <div class="logo-wrapper me-2">
                    <i class="bi bi-fingerprint fs-2 text-primary"></i>
                </div>
                <div class="brand-text">
                    <span class="d-block fw-bold tracking-tighter fs-4 lh-1">NAMSOMMUT</span>
                    <small class="text-uppercase opacity-50 tracking-widest" style="font-size: 0.6rem;">Elite Investigation</small>
                </div>
            </a>

            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#namsommutNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="namsommutNav">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link px-3 text-uppercase small tracking-wider hover-primary" href="index.html">หน้าหลัก</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-3 text-uppercase small tracking-wider hover-primary" href="about.html">เกี่ยวกับเรา</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-3 text-uppercase small tracking-wider hover-primary" href="#services">บริการลับ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-3 text-uppercase small tracking-wider hover-primary" href="contact.html">ส่งคำขอสืบสวน</a>
                    </li>
                </ul>

                <div class="d-flex align-items-center">
                    <div class="access-status d-none d-xl-flex align-items-center me-4 opacity-50">
                        <span class="dot-blink bg-success me-2"></span>
                        <small class="text-uppercase x-small">Secured Connection</small>
                    </div>
                    <a href="https://line.me/ti/p/PCE92r2xrB" target="_blank" class="btn btn-primary btn-sm rounded-pill px-4 shadow-sm">
                        <i class="bi bi-incognito me-2"></i> ปรึกษาด่วน
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <div class="status-bar bg-primary bg-opacity-10 py-1 border-bottom border-primary border-opacity-10 d-none d-md-block">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center overflow-hidden">
                <div class="ticker-wrapper">
                    <small class="text-primary x-small text-uppercase fw-bold animate-ticker">
                        System Update: ฐานข้อมูลล่าสุด 18 ธ.ค. 2025 | ตรวจพบการเข้าใช้งานจาก IP: [REDACTED] | สถานะเครือข่าย: เข้ารหัส 256-bit
                    </small>
                </div>
                <div class="time-wrapper">
                    <small id="current-time" class="text-white opacity-50 x-small"></small>
                </div>
            </div>
        </div>
    </div>
```

### 📄 `components/hero.html`

```html
<section class="hero-section position-relative overflow-hidden min-vh-100 d-flex align-items-center bg-dark">
    <div class="hero-overlay position-absolute w-100 h-100" style="background: linear-gradient(135deg, rgba(10, 10, 11, 0.95) 0%, rgba(10, 10, 11, 0.7) 100%); z-index: 1;"></div>
    
    <div class="hero-bg-effect position-absolute w-100 h-100" style="background-image: url('assets/img/banner.jpg'); background-size: cover; background-position: center; opacity: 0.3; filter: grayscale(100%);"></div>

    <div class="container position-relative" style="z-index: 2;">
        <div class="row justify-content-center">
            <div class="col-lg-10 text-center">
                <div class="d-inline-flex align-items-center mb-4 px-3 py-1 border border-primary border-opacity-50 rounded-pill bg-primary bg-opacity-10 animate-fade-in">
                    <span class="pulse-dot me-2"></span>
                    <small class="text-primary fw-bold text-uppercase tracking-widest" style="font-size: 0.75rem;">Status: Operations Active (24/7)</small>
                </div>

                <h1 class="display-2 fw-bold text-white mb-3">
                    เมื่อระบบปกติ <span class="text-gradient-blue">เข้าไม่ถึง...</span><br>
                    <span class="h2 d-block mt-2 fw-light opacity-75">ให้เราเป็นคำตอบสุดท้ายของคุณ</span>
                </h1>

                <p class="lead text-muted mx-auto mb-5" style="max-width: 700px;">
                    หน่วยปฏิบัติการสืบสวนอิสระ ผสมผสานเทคโนโลยีการสืบค้นชั้นสูงและเครือข่ายสายข่าวเฉพาะกิจ 
                    <span class="text-white">เข้าถึงทุกชั้นข้อมูล ปกปิดตัวตนลูกค้า 100%</span>
                </p>

                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center align-items-center">
                    <a href="https://line.me/ti/p/PCE92r2xrB" target="_blank" class="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-pulse d-flex align-items-center justify-content-center">
                        <i class="bi bi-line fs-4 me-2"></i>
                        <span>ปรึกษาเคสลับผ่าน LINE</span>
                    </a>
                    <a href="#services" class="btn btn-outline-light btn-lg px-5 py-3 rounded-pill hover-slide">
                        <i class="bi bi-shield-lock me-2"></i> บริการและอัตราค่าจ้าง
                    </a>
                </div>

                <div class="mt-5 row g-3 justify-content-center opacity-50">
                    <div class="col-auto d-flex align-items-center mx-3">
                        <i class="bi bi-check2-circle me-2"></i> <small>Zero-Trace Policy</small>
                    </div>
                    <div class="col-auto d-flex align-items-center mx-3">
                        <i class="bi bi-lock me-2"></i> <small>Military Grade Encryption</small>
                    </div>
                    <div class="col-auto d-flex align-items-center mx-3">
                        <i class="bi bi-eye-slash me-2"></i> <small>Anonymous Consultation</small>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="scroll-down"></div>
</section>

<style>
    /* Gradient Text */
    .text-gradient-blue {
        background: linear-gradient(90deg, #007bff, #00d4ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    /* Pulse Dot for Status */
```

### 📄 `components/navbar.html`

```html
<footer class="footer-section bg-dark text-white pt-5 pb-3 border-top border-white border-opacity-10">
    <div class="container py-4">
        <div class="row g-4 justify-content-between">
            
            <div class="col-lg-4">
                <div class="footer-brand mb-4">
                    <div class="d-flex align-items-center mb-2">
                        <i class="bi bi-fingerprint fs-2 text-primary me-2"></i>
                        <span class="fw-bold fs-4 tracking-tighter">NAMSOMMUT</span>
                    </div>
                    <p class="text-muted small lh-lg">
                        สถาบันการสืบสวนอิสระระดับสูง (EIG) มุ่งเน้นการค้นหาความจริงผ่านฐานข้อมูลลับและเทคโนโลยีขั้นสูง เรายึดถือความลับของลูกค้าเป็นพันธกิจสูงสุดภายใต้โปรโตคอลความปลอดภัยระดับรัฐบาล
                    </p>
                    <div class="security-badges d-flex gap-2 mt-3">
                        <span class="badge bg-secondary bg-opacity-10 text-muted border border-secondary border-opacity-25 py-2 px-3">
                            <i class="bi bi-shield-check me-1"></i> AES-256 Encrypted
                        </span>
                        <span class="badge bg-secondary bg-opacity-10 text-muted border border-secondary border-opacity-25 py-2 px-3">
                            <i class="bi bi-eye-slash me-1"></i> No Logs Policy
                        </span>
                    </div>
                </div>
            </div>

            <div class="col-6 col-lg-2">
                <h6 class="text-uppercase fw-bold mb-4 tracking-widest text-primary">Operations</h6>
                <ul class="list-unstyled footer-links">
                    <li><a href="#services" class="text-muted text-decoration-none small d-block mb-2 hover-white">เจาะฐานข้อมูลลับ</a></li>
                    <li><a href="#services" class="text-muted text-decoration-none small d-block mb-2 hover-white">ระบุพิกัดเป้าหมาย</a></li>
                    <li><a href="#services" class="text-muted text-decoration-none small d-block mb-2 hover-white">สแกนช่องโหว่ดิจิทัล</a></li>
                    <li><a href="#services" class="text-muted text-decoration-none small d-block mb-2 hover-white">สืบสวนพฤติกรรม</a></li>
                </ul>
            </div>

            <div class="col-6 col-lg-2">
                <h6 class="text-uppercase fw-bold mb-4 tracking-widest text-primary">Agency</h6>
                <ul class="list-unstyled footer-links">
                    <li><a href="about.html" class="text-muted text-decoration-none small d-block mb-2 hover-white">เกี่ยวกับเรา</a></li>
                    <li><a href="contact.html" class="text-muted text-decoration-none small d-block mb-2 hover-white">รายงานเคสใหม่</a></li>
                    <li><a href="#" class="text-muted text-decoration-none small d-block mb-2 hover-white">นโยบายความลับ</a></li>
                    <li><a href="#" class="text-muted text-decoration-none small d-block mb-2 hover-white">ยืนยันตัวตน</a></li>
                </ul>
            </div>

            <div class="col-lg-3">
                <h6 class="text-uppercase fw-bold mb-4 tracking-widest text-danger">Emergency Contact</h6>
                <p class="text-muted small mb-4">สำหรับการปรึกษาเคสเร่งด่วน 24 ชั่วโมง ข้อมูลจะถูกเข้ารหัสผ่านทางแอปพลิเคชัน LINE</p>
                <a href="https://line.me/ti/p/PCE92r2xrB" target="_blank" class="btn btn-outline-primary rounded-pill w-100 py-2 d-flex align-items-center justify-content-center hover-pulse">
                    <i class="bi bi-line fs-5 me-2"></i>
                    <span>Connect with Agent</span>
                </a>
                <div class="mt-3 text-center">
                    <small class="text-muted x-small">Working Hours: 24/7 (Non-Stop)</small>
                </div>
            </div>

        </div>

        <hr class="my-5 border-white border-opacity-10">

```

### 📄 `contact.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>รายงานเคสลับ | Namsommut Investigation</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;600;700&family=JetBrains+Mono&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/theme.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
</head>
<body class="bg-dark text-white">

    <div id="header-placeholder"></div>

    <main class="section-padding" style="margin-top: 80px;">
        <div class="container">
            <div class="row g-5">
                
                <div class="col-lg-5">
                    <div class="pe-lg-5">
                        <div class="badge-status mb-3">Secure Connection Active</div>
                        <h1 class="display-4 fw-bold text-gradient-blue mb-4">รายงานเคสลับ</h1>
                        <p class="text-muted mb-5">
                            ข้อมูลที่คุณส่งจะได้รับการเข้ารหัสระดับสูงสุด และจะถูกส่งถึงเจ้าหน้าที่ระดับสูงโดยตรง 
                            โปรดเลือกช่องทางที่คุณสะดวกที่สุดเพื่อการประเมินราคาและแนวทางการทำงาน
                        </p>

                        <div class="contact-method mb-4 p-4 glass-card border-primary border-opacity-25 shadow-pulse">
                            <div class="d-flex align-items-start">
                                <i class="bi bi-line fs-1 text-primary me-3"></i>
                                <div>
                                    <h5 class="fw-bold mb-1">ปรึกษาด่วนทาง LINE (แนะนำ)</h5>
                                    <p class="small text-muted mb-3">เจ้าหน้าที่สแตนบาย 24 ชั่วโมง ข้อมูลถูกลบทันทีหลังปิดเคส</p>
                                    <a href="https://line.me/ti/p/PCE92r2xrB" target="_blank" class="btn btn-primary rounded-pill px-4">
                                        แอดไลน์: @namsommut
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="security-info p-3 bg-white bg-opacity-5 rounded-4 border border-white border-opacity-10">
                            <ul class="list-unstyled mb-0">
                                <li class="small text-muted mb-2"><i class="bi bi-shield-lock text-primary me-2"></i> เข้ารหัสข้อมูลแบบ End-to-End</li>
                                <li class="small text-muted mb-2"><i class="bi bi-geo-alt text-primary me-2"></i> สถานที่นัดหมายเป็นความลับ (Private Location Only)</li>
                                <li class="small text-muted"><i class="bi bi-incognito text-primary me-2"></i> สามารถชำระค่าบริการผ่านสกุลเงินดิจิทัล (Crypto) ได้</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-7">
                    <div class="glass-card p-4 p-md-5">
                        <h4 class="fw-bold mb-4">Inquiry Form <small class="text-muted fw-light">(รหัสเคสอัตโนมัติ)</small></h4>
                        
                        <form id="contactForm" class="row g-3">
```

### 📄 `data/reviews.json`

```json
[
  {
    "id": 1,
    "client_name": "คุณ ว. (นักธุรกิจอสังหาริมทรัพย์)",
    "service": "Deep Intel Check",
    "comment": "ข้อมูลที่ทีมงานหามาได้ 'ลึก' กว่าที่คิดมากครับ ผมเกือบเซ็นสัญญากับนอมินีกลุ่มทุนสีเทาไปแล้ว ถ้าไม่ได้ความเชื่อมโยงชุดนี้ช่วยไว้ คงเสียหายหลายสิบล้าน",
    "rating": 5,
    "date": "2025-10-12"
  },
  {
    "id": 2,
    "client_name": "Anonymous (บุคคลทั่วไป)",
    "service": "Shadow Tracking",
    "comment": "ตามหาตัวบุคคลที่ปิดทุกช่องทางติดต่อมา 3 ปี ทีมงานใช้เวลาไม่ถึง 10 วันระบุพิกัดกบดานได้แม่นยำมากครับ ทำงานเงียบและปิดงานไวสมคำร่ำลือ",
    "rating": 5,
    "date": "2025-11-05"
  },
  {
    "id": 3,
    "client_name": "Executive Client (Code: Sky)",
    "service": "Privacy & Scan",
    "comment": "พบการดักฟังในเครื่องส่วนตัวจริงๆ ครับ ทีมงานกำจัดและวางระบบป้องกันใหม่ให้ทันที ประทับใจความเป็นมืออาชีพและการรักษาความลับลูกค้าเป็นเลิศ",
    "rating": 5,
    "date": "2025-12-01"
  }
]
```

### 📄 `data/services.json`

```json
[
  {
    "id": "sv-intel",
    "title": "Unlisted Data Retrieval",
    "subtitle": "เจาะข้อมูลที่ถูกปิดผนึก",
    "description": "เข้าถึงฐานข้อมูลทะเบียนราษฎร์แฝง, ประวัติอาชญากรรมที่ถูกลบ, และการถือครองทรัพย์สินนอมินีผ่านเครือข่ายเฉพาะทาง",
    "features": [
      "ระบุตัวตนจริงจากเบอร์ลับ/บัญชีม้า",
      "ตรวจสอบประวัติการเงินเชิงลึก",
      "ดึงข้อมูล Digital Trace ย้อนหลัง 5 ปี"
    ],
    "price_range": "เริ่มต้น 8,500.-",
    "icon": "bi-incognito",
    "category": "Exclusive Intel"
  },
  {
    "id": "sv-shadow",
    "title": "Shadow Tracking",
    "subtitle": "ระบุพิกัด 실시간 (Real-time)",
    "description": "แกะรอยพิกัดล่าสุดจากสัญญาณ Cell Site และเครือข่ายสายข่าวภาคสนาม ระบุตำแหน่งที่กบดานแม่นยำภายใน 24 ชม.",
    "features": [
      "ติดตามเป้าหมายพร้อมหลักฐานภาพถ่าย 4K",
      "ระบุพิกัดที่พักและที่ทำงานปัจจุบัน",
      "รายงานความเคลื่อนไหวผ่านช่องทางลับ"
    ],
    "price_range": "เริ่มต้น 18,000.-",
    "icon": "bi-radar",
    "category": "High-Stakes Ops"
  }
]
```

### 📄 `data/site.json`

```json
{
  "company_name": "Namsommut Investigation",
  "company_name_en": "Namsommut Group",
  "slogan": "The Truth Has No Alias - ความจริงไม่มีนามสมมุติ",
  "description": "หน่วยปฏิบัติการสืบสวนอิสระ ผสมผสานเทคโนโลยีสืบค้นชั้นสูงและเครือข่ายสายข่าวเฉพาะกิจ เพื่อมอบคำตอบที่คุณหาจากระบบปกติไม่ได้",
  "contact": {
    "email": "private@namsommut.com",
    "phone": "สายด่วนพิเศษ (เฉพาะเคสยืนยัน)",
    "address": "Secure Location (กรุณานัดหมายออนไลน์)",
    "working_hours": "Operations 24/7"
  },
  "social": {
    "line": "https://line.me/ti/p/PCE92r2xrB",
    "telegram": "@namsommut_detective"
  }
}
```

### 📄 `data/team.json`

```json
[
  {
    "id": "member-01",
    "name": "Alpha (The Operator)",
    "role": "Field Intelligence Director",
    "specialty": "การระบุพิกัดบุคคลและยุทธวิธีภาคสนาม",
    "bio": "ผู้กุมเครือข่ายสายข่าวภาคสนามทั่วประเทศ เชี่ยวชาญการแกะรอยพิกัดสด (Real-time Tracking) และการเข้าถึงพื้นที่ปิดเพื่อเก็บหลักฐานสำคัญที่ระบบดิจิทัลเข้าไม่ถึง",
    "image": "assets/img/team1.jpg",
    "icon": "bi-crosshair"
  },
  {
    "id": "member-02",
    "name": "Neon (The Architect)",
    "role": "Digital Forensic Specialist",
    "specialty": "OSINT & Private Database Access",
    "bio": "ผู้เชี่ยวชาญการเจาะฐานข้อมูลปิดและการกู้คืนร่องรอยดิจิทัล สามารถเข้าถึงข้อมูลทะเบียนราษฎร์แฝงและประวัติที่ถูกลบออกจากระบบสารสนเทศทั่วไป",
    "image": "assets/img/team2.jpg",
    "icon": "bi-cpu-fill"
  },
  {
    "id": "member-03",
    "name": "Echo (The Fixer)",
    "role": "Strategic Analyst & Liaison",
    "specialty": "การวิเคราะห์ช่องโหว่และประสานงานภายใน",
    "bio": "ที่ปรึกษาด้านการจัดการหลักฐานและการปิดช่องโหว่ทางกฎหมาย ทำหน้าที่เปลี่ยน 'ข้อมูลลับ' ให้เป็น 'อำนาจต่อรอง' ที่ทรงประสิทธิภาพที่สุดสำหรับลูกค้า",
    "image": "assets/img/team3.jpg",
    "icon": "bi-file-earmark-lock-fill"
  }
]
```

### 📄 `index.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namsommut Investigation | ความจริงไม่มีนามสมมุติ</title>
    
    <meta name="description" content="บริการนักสืบเอกชนมืออาชีพ เจาะฐานข้อมูลลับ ระบุพิกัด และสืบสวนทุกรูปแบบด้วยเทคโนโลยีขั้นสูง">
    <meta name="keywords" content="นักสืบเอกชน, ตามตัว, สืบชู้สาว, เจาะข้อมูล, พิกัดมือถือ, นักสืบนามสมมุติ">
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/theme.css">
    <link rel="stylesheet" href="assets/css/responsive.css">

    <style>
        /* Loading Overlay สำหรับสร้างความรู้สึกเหมือนกำลังเข้าสู่ระบบลับ */
        #loader {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: #050505;
            display: flex; flex-direction: column;
            justify-content: center; align-items: center;
            z-index: 9999; transition: opacity 0.5s ease;
        }
    </style>
</head>
<body class="bg-dark text-white">

    <div id="loader">
        <i class="bi bi-fingerprint text-primary fs-1 mb-3 animate-pulse"></i>
        <div class="text-primary font-monospace small">INITIALIZING SECURE PROTOCOL...</div>
    </div>

    <div id="header-placeholder"></div>

    <main>
        <div id="hero-placeholder"></div>

        <section id="services" class="section-padding bg-dark-section">
            <div class="container">
                <div class="text-center mb-5">
                    <h2 class="display-5 fw-bold text-gradient-blue mb-3">OPERATIONAL SERVICES</h2>
                    <p class="text-muted mx-auto" style="max-width: 600px;">
                        เราใช้เครื่องมือระดับสูงและเครือข่ายสายข่าวเฉพาะกิจ เพื่อเข้าถึงความจริงที่คุณต้องการ
                    </p>
                </div>
                
                <div id="service-list" class="row g-4">
                    <div class="text-center p-5">
                        <div class="spinner-border text-primary" role="status"></div>
                        <div class="mt-2 small text-muted">ACCESSING DATABASE...</div>
                    </div>
                </div>
            </div>
        </section>
```

### 📄 `privacy.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>นโยบายความเป็นส่วนตัว | Namsommut Investigation</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;600;700&family=JetBrains+Mono&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/theme.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
</head>
<body class="bg-dark text-white">

    <div id="header-placeholder"></div>

    <main class="section-padding" style="margin-top: 80px;">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    
                    <div class="mb-5 border-start border-primary border-4 ps-4">
                        <h1 class="display-5 fw-bold text-white">PRIVACY <span class="text-primary">POLICY</span></h1>
                        <p class="text-muted small font-monospace">DOCUMENT ID: NSM-P-2025 // CLASSIFIED: TOP SECRET</p>
                    </div>

                    <div class="glass-card p-4 p-md-5 lh-lg">
                        <section class="mb-5">
                            <h4 class="text-primary mb-3 fw-bold"><i class="bi bi-shield-check me-2"></i> 1. การเก็บรักษาความลับสูงสุด (Zero-Trace Policy)</h4>
                            <p class="text-silver">
                                เรายึดถือว่าข้อมูลส่วนตัวของลูกค้าเป็นพันธกิจสูงสุด ข้อมูลที่ใช้ในการปรึกษาและดำเนินเคสจะถูกจัดเก็บในระบบที่มีการเข้ารหัส **AES-256** และจะมีการทำลายข้อมูล (Wiping) ทันทีภายใน 24 ชั่วโมงหลังจากจบภารกิจและส่งมอบงานเสร็จสิ้น
                            </p>
                        </section>

                        <section class="mb-5">
                            <h4 class="text-primary mb-3 fw-bold"><i class="bi bi-cpu me-2"></i> 2. ข้อมูลที่เราจัดเก็บ</h4>
                            <p class="text-silver">ในการใช้บริการ เราจะจัดเก็บข้อมูลเพียงเท่าที่จำเป็นต่อการติดต่อสื่อสารและการดำเนินงานเท่านั้น ได้แก่:</p>
                            <ul class="text-muted">
                                <li>ชื่อหรือนามสมมุติสำหรับการระบุตัวตนในภารกิจ</li>
                                <li>ช่องทางติดต่อที่ท่านเลือก (LINE, Telegram หรือ Signal)</li>
                                <li>ข้อมูลพื้นฐานของเป้าหมายเพื่อใช้ในการวิเคราะห์และประเมินผล</li>
                            </ul>
                        </section>

                        <section class="mb-5">
                            <h4 class="text-primary mb-3 fw-bold"><i class="bi bi-eye-slash me-2"></i> 3. มาตรการ "ไม่เปิดเผยตัวตน"</h4>
                            <p class="text-silver">
                                เราจะไม่เปิดเผยข้อมูลลูกค้าแก่บุคคลที่สาม ไม่ว่ากรณีใดๆ เว้นแต่จะได้รับคำยินยอมเป็นลายลักษณ์อักษรจากท่าน หรือเป็นไปตามคำสั่งศาลในกรณีร้ายแรงที่เกี่ยวข้องกับอาชญากรรมร้ายแรงเท่านั้น
                            </p>
                        </section>

                        <section class="mb-5">
                            <h4 class="text-primary mb-3 fw-bold"><i class="bi bi-key me-2"></i> 4. การสื่อสารที่ปลอดภัย</h4>
                            <p class="text-silver">
                                เราแนะนำให้ลูกค้าสื่อสารผ่านช่องทางที่รองรับ **End-to-End Encryption** เช่น LINE หรือ Telegram เพื่อป้องกันการดักจับข้อมูลจากบุคคลภายนอก ทางเราจะไม่รับผิดชอบต่อข้อมูลที่ลูกค้านำเสนอผ่านช่องทางที่ไม่ปลอดภัย
                            </p>
                        </section>
```

### 📄 `review.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>บันทึกความสำเร็จ | Namsommut Investigation</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;600;700&family=JetBrains+Mono&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/theme.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
</head>
<body class="bg-dark text-white">

    <div id="header-placeholder"></div>

    <main class="section-padding" style="margin-top: 80px;">
        <div class="container">
            
            <div class="row mb-5 justify-content-center">
                <div class="col-lg-8 text-center">
                    <div class="badge-status mb-3">Public Case Logs</div>
                    <h1 class="display-4 fw-bold text-gradient-blue mb-3">บันทึกความสำเร็จ</h1>
                    <p class="text-muted">
                        รวมความคิดเห็นจากผู้รับบริการจริง (ข้อมูลตัวตนและรหัสเคสถูกจัดทำเป็นนามสมมุติเพื่อความปลอดภัย) 
                        เราภาคภูมิใจที่ได้มอบความจริงให้แก่ลูกค้ากว่า 1,200 รายทั่วประเทศ
                    </p>
                </div>
            </div>

            <div id="review-list" class="row g-4 mb-5">
                <div class="col-12 text-center py-5">
                    <div class="spinner-border text-primary mb-3" role="status"></div>
                    <p class="font-monospace x-small text-muted">DECRYPTING TESTIMONIALS...</p>
                </div>
            </div>

            <div class="row g-4 mt-5">
                <div class="col-md-4">
                    <div class="glass-card p-4 text-center h-100 border-primary border-opacity-10">
                        <div class="h2 fw-bold text-primary mb-1">98%</div>
                        <div class="small text-uppercase tracking-widest opacity-50">Success Rate</div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="glass-card p-4 text-center h-100 border-primary border-opacity-10">
                        <div class="h2 fw-bold text-primary mb-1">24/7</div>
                        <div class="small text-uppercase tracking-widest opacity-50">Operational Support</div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="glass-card p-4 text-center h-100 border-primary border-opacity-10">
                        <div class="h2 fw-bold text-primary mb-1">100%</div>
                        <div class="small text-uppercase tracking-widest opacity-50">Confidentiality</div>
                    </div>
                </div>
            </div>
```

### 📄 `scripts/project-summary.sh`

```bash
#!/usr/bin/env bash
# scripts/project-summary.sh
# สร้างไฟล์ PROJECT_SUMMARY.md โดยตรง (ไม่แสดงผลบน terminal)
# สแกนทุกไฟล์ในโครงสร้าง และแสดง 60 บรรทัดแรกของแต่ละไฟล์
# รองรับไฟล์ text ทุกชนิด และข้าม binary อัตโนมัติ

set -e
shopt -s nullglob

PROJECT_NAME="$(basename "$(pwd)")"
DATE_GEN="$(date '+%Y-%m-%d %H:%M:%S')"
OUTPUT_FILE="PROJECT_SUMMARY.md"

# โฟลเดอร์ที่ไม่ต้องสแกน
IGNORE_DIRS="node_modules|.git|.next|dist|build"

# สร้างไฟล์ใหม่ (overwrite)
cat > "$OUTPUT_FILE" <<EOF
# 📦 Project Summary: ${PROJECT_NAME}

> Generated on: ${DATE_GEN}

## 🗂 โครงสร้างโปรเจกต์

\`\`\`text
$(tree -a -I "$IGNORE_DIRS")
\`\`\`

## 📄 File Scan (แสดง 60 บรรทัดแรกของทุกไฟล์)
EOF

echo >> "$OUTPUT_FILE"

# สแกนไฟล์ทั้งหมด (ยกเว้น ignore dirs)
find . \
  -type d -regex ".*/\($IGNORE_DIRS\)" -prune -o \
  -type f -print |
sort |
while read -r file; do
  # ข้ามไฟล์ summary เอง
  [ "$file" = "./$OUTPUT_FILE" ] && continue

  REL_PATH="${file#./}"
  EXT="${REL_PATH##*.}"

  echo "### 📄 \`${REL_PATH}\`" >> "$OUTPUT_FILE"
  echo >> "$OUTPUT_FILE"

  # ตรวจว่าเป็น text file หรือไม่
  if grep -Iq . "$file"; then
    # ระบุ language hint สำหรับ markdown
    case "$EXT" in
      html) LANG="html" ;;
      css)  LANG="css" ;;
      js)   LANG="javascript" ;;
      json) LANG="json" ;;
      md)   LANG="markdown" ;;
      sh)   LANG="bash" ;;
      *)    LANG="" ;;
    esac
```

### 📄 `services.html`

```html
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>บริการปฏิบัติการ | Namsommut Investigation</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;600;700&family=JetBrains+Mono&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/theme.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
</head>
<body class="bg-dark text-white">

    <div id="header-placeholder"></div>

    <section class="section-padding" style="margin-top: 80px; background: linear-gradient(to bottom, #050505, #0a0a0b);">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-lg-8">
                    <div class="badge-status mb-3 shadow-pulse">Mission Catalog Active</div>
                    <h1 class="display-4 fw-bold text-gradient-blue mb-4">บริการปฏิบัติการลับ</h1>
                    <p class="text-muted lead">
                        เลือกประเภทภารกิจที่คุณต้องการ ทุกกระบวนการดำเนินการภายใต้โปรโตคอลความลับสูงสุด 
                        และเข้าถึงฐานข้อมูลเชิงลึกที่เราจัดเตรียมไว้
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="section-padding bg-dark-section">
        <div class="container">
            <div class="d-flex justify-content-center gap-2 mb-5 flex-wrap">
                <button class="btn btn-sm btn-outline-primary rounded-pill px-4 active">ทั้งหมด</button>
                <button class="btn btn-sm btn-outline-secondary rounded-pill px-4">สืบชู้สาว</button>
                <button class="btn btn-sm btn-outline-secondary rounded-pill px-4">ติดตามพิกัด</button>
                <button class="btn btn-sm btn-outline-secondary rounded-pill px-4">เจาะข้อมูล</button>
            </div>

            <div id="service-list" class="row g-4">
                <div class="col-12 text-center py-5">
                    <div class="spinner-border text-primary mb-3" role="status"></div>
                    <p class="font-monospace x-small text-muted">ACCESSING OPERATIONS DATABASE...</p>
                </div>
            </div>
        </div>
    </section>

    <section class="section-padding border-top border-white border-opacity-10">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6">
                    <h2 class="fw-bold mb-4">ขั้นตอนการเริ่มภารกิจ</h2>
                    <div class="step-item d-flex mb-4">
                        <div class="step-num text-primary fw-bold font-monospace me-3">01.</div>
                        <div>
```

---
_Generated automatically by project-summary.sh_
