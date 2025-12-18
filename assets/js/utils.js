/**
* Namsommut Investigation - Utility Tools
* 🛠️ Helpers for Component Loading, Security Mockups & Data Handling
*/

const Utils = {
  /**
  * 1. ฟังก์ชันโหลดไฟล์ HTML เข้ามาแสดงใน Placeholder (Improved)
  * เพิ่มการประมวลผล Script ภายใน Component ที่โหลดมา
  */
  loadComponent: async (elementId, url) => {
    const container = document.getElementById(elementId);
    if (!container) return;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const html = await response.text();
      container.innerHTML = html;

      // Dispatch event เพื่อแจ้งเตือนระบบว่า Component พร้อมใช้งาน
      window.dispatchEvent(new CustomEvent('componentLoaded', {
        detail: {
          id: elementId, path: url
        }
      }));

      return true;
    } catch (error) {
      console.error(`%c🔒 Security Alert: Failed to fetch module [${url}]`, "color: #ff4d4d", error);
      container.innerHTML = `<div class="text-danger font-monospace x-small p-3">ACCESS_DENIED: RESOURCE_ENCRYPTED_OR_MISSING</div>`;
      return false;
    }
  },

  /**
  * 2. ฟังก์ชันจัดรูปแบบราคา
  */
  formatCurrency: (amount) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB',
      minimumFractionDigits: 0
    }).format(amount);
  },

  /**
  * 3. ระบบจำลองสถานะเครือข่าย (Live Security Logs)
  * คืนค่าเป็น Object เพื่อให้นำไปแสดงผลได้หลายรูปแบบ
  */
  getSecurityStatus: () => {
    const nodes = ["BKK-GATEWAY-01",
      "HK-PROXY-NODE",
      "ENCRYPT-RELAY-09"];
    const status = ["ENCRYPTED",
      "OPERATIONAL",
      "STEALTH_MODE"];
    const latency = Math.floor(Math.random() * 150) + 20;

    return {
      node: nodes[Math.floor(Math.random() * nodes.length)],
      status: status[Math.floor(Math.random() * status.length)],
      ms: `${latency}ms`
    };
  },

  /**
  * 4. ระบบป้องกันข้อมูล (Data Protection)
  * ป้องกันการคัดลอกในส่วนที่เป็นข้อมูลลับ (ใช้เฉพาะจุด)
  */
  initProtection: () => {
    // แจ้งเตือนใน Console เพื่อความเท่และป้องกันเบื้องต้น
    console.log("%c⚠️ WARNING: AUTHORIZED PERSONNEL ONLY", "color: yellow; font-size: 20px; font-weight: bold;");
    console.log("All access and operations are logged under AES-256 protocol.");

    // ฟังก์ชันเสริม: ป้องกันการกด Inspect Element (Optional)
    /* document.onkeydown = (e) => {
            if(e.keyCode == 123) return false; // F12
        }
        */
  },

  /**
  * 5. ฟังก์ชันดึงพารามิเตอร์จาก URL
  */
  getQueryParam: (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  },

  /**
  * 6. ฟังก์ชันหน่วงเวลา (Async Delay)
  */
  sleep: (ms) => new Promise(resolve => setTimeout(resolve, ms)),

  /**
  * 7. ฟังก์ชันสำหรับสร้างข้อความแบบสุ่ม (Cyber Glitch Text)
  * ใช้สำหรับสร้างเอฟเฟกต์ตอนโหลดข้อมูล
  */
  generateGlitchText: (length) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
};

// ส่งออกเป็น Global Object
window.Utils = Utils;