/**
 * Namsommut Investigation - Core Controller
 */
const App = {
    async init() {
        // 1. โหลด Component พื้นฐาน
        await Promise.all([
            this.loadComponent('header-placeholder', 'components/header.html'),
            this.loadComponent('footer-placeholder', 'components/footer.html'),
            this.loadComponent('hero-placeholder', 'components/hero.html')
        ]);

        // 2. แจ้ง Render.js ให้เริ่มทำงาน
        window.dispatchEvent(new CustomEvent('uiReady'));
        
        // 3. ตั้งค่า Active Menu
        this.setActiveMenu();
    },

    async loadComponent(id, path) {
        const el = document.getElementById(id);
        if (!el) return;
        try {
            const res = await fetch(path);
            if (res.ok) el.innerHTML = await res.text();
        } catch (e) { console.error(`Error loading ${path}`); }
    },

    setActiveMenu() {
        const path = window.location.pathname.split("/").pop() || 'index.html';
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === path) link.classList.add('active');
        });
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());
