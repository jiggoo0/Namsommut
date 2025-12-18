/**
 * Namsommut Investigation - System Configuration
 * 🛠️ Function: Global settings for JS components
 * 🟢 Status: Production Ready (Final Version)
 */

const CONFIG = {
    // 🏢 ข้อมูลหน่วยงาน (Agency Information)
    AGENCY_NAME: "Namsommut Investigation",
    VERSION: "1.1.0",
    DEBUG_MODE: false,

    // 📂 การจัดการเส้นทางข้อมูล (Data & Path Management)
    // สำคัญ: Path เหล่านี้จะอ้างอิงจากหน้า index.html เป็นหลัก
    DATA_PATH: {
        SITE: "data/site.json",
        SERVICES: "data/services.json",
        REVIEWS: "data/reviews.json",
        TEAM: "data/team.json"
    },

    // 🖥️ การตั้งค่า UI และการโต้ตอบ (UI & Interaction Settings)
    UI_SETTINGS: {
        RENDER_WAIT: 500,          // หน่วงเวลาให้ Components โหลดเสร็จก่อนฉีดข้อมูล (ms)
        LOADER_DELAY: 1800,        // ระยะเวลาแสดงหน้า System Loader (ms)
        SCROLL_REVEAL_DELAY: 200, // ความหน่วงก่อน Animation เริ่มเล่น
        STICKY_HEADER_OFFSET: 80  // ระยะการ Scroll ที่ Navbar จะเริ่มเปลี่ยนสถานะ
    },

    // 🛡️ ความปลอดภัยและโปรโตคอล (Security & Protocol)
    SECURITY: {
        ENCRYPTION_TYPE: "AES-256-GCM",
        PROTOCOL_STATUS: "ACTIVE_SECURE",
        ACCESS_LEVEL: "AUTHORIZED_ONLY",
        FIREWALL: "DEEP-SHIELD V.1.1"
    },

    // 💬 ข้อความแจ้งเตือนจากระบบ (System Messages)
    MESSAGES: {
        SUBMIT_SUCCESS: "DATA_SENT: ภารกิจถูกส่งเข้าสู่ระบบแล้ว เจ้าหน้าที่จะติดต่อกลับผ่านช่องทางลับโดยเร็วที่สุด",
        SUBMIT_ERROR: "SYSTEM_FAILURE: ไม่สามารถส่งข้อมูลได้ โปรดติดต่อศูนย์บัญชาการทาง LINE โดยตรง",
        DB_FETCH_ERROR: "ACCESS_DENIED: การเข้าถึงฐานข้อมูลถูกปฏิเสธ โปรดตรวจสอบการเชื่อมต่อ Uplink"
    }
};

// ป้องกันการแก้ไขค่า CONFIG จาก Script ตัวอื่น (Immutable Object)
Object.freeze(CONFIG);

// แจ้งสถานะการโหลดใน Console เพื่อการ Debug
console.log(
    `%c🕵️‍♂️ ${CONFIG.AGENCY_NAME} %cConfig Loaded | Version ${CONFIG.VERSION}`, 
    "color: #007bff; font-weight: bold;", 
    "color: #888;"
);
