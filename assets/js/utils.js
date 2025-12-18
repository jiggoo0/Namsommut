/**
 * Namsommut Investigation - Utility Functions
 * 🛠️ Function: Animations, Observers, and UI Helpers
 * 🟢 Status: Production Ready (Formatted for PROJECT_SUMMARY)
 */

const Utils = {
    /**
     * 1. ระบบตรวจจับ Element เพื่อเริ่มเล่น Animation (Scroll Reveal)
     * ทำงานร่วมกับ Class .animate-on-scroll ใน HTML
     */
    initObserver: function() {
        const options = {
            root: null,
            threshold: 0.15, // เริ่มเล่นเมื่อ Element โผล่มา 15%
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // เพิ่ม Class 'appear' เพื่อเริ่มรัน CSS Animation
                    entry.target.classList.add('appear');
                    // เลิกตรวจจับหลังจากแสดงผลแล้วเพื่อประหยัด RAM
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        // ตรวจจับทุก Element ที่ต้องการ Animation
        const targets = document.querySelectorAll('.animate-on-scroll');
        targets.forEach(target => observer.observe(target));
        
        console.log(`✅ [System]: Observer initialized on ${targets.length} nodes.`);
    },

    /**
     * 2. ระบบจัดการ Navbar เมื่อมีการ Scroll (Sticky & Glass Effect)
     */
    handleScroll: function() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > CONFIG.UI_SETTINGS.STICKY_HEADER_OFFSET) {
                navbar.classList.add('navbar-scrolled', 'glass-card-sm');
            } else {
                navbar.classList.remove('navbar-scrolled', 'glass-card-sm');
            }
        });
    },

    /**
     * 3. ระบบ Smooth Scroll สำหรับ Anchor Links
     */
    initSmoothScroll: function() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
};

/**
 * เริ่มต้นทำงานเมื่อ DOM และ Config พร้อม
 */
document.addEventListener('DOMContentLoaded', () => {
    // รันฟังก์ชันพื้นฐาน
    Utils.handleScroll();
    Utils.initSmoothScroll();
    
    // หมายเหตุ: Utils.initObserver() จะถูกเรียกซ้ำใน render.js 
    // หลังจากโหลดข้อมูล JSON เสร็จเพื่อให้ตรวจจับการ์ดใหม่ๆ ได้
    Utils.initObserver();
});

// ส่งออกเป็น Global เพื่อให้ render.js เรียกใช้ได้
window.Utils = Utils;
