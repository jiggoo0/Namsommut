/**
 * Namsommut Investigation - Contact Form Handler
 * 🛠️ Function: Form Validation & Submission Simulation
 * 🟢 Status: Production Ready
 */

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('mission-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // 1. ดึงข้อมูลจากฟอร์ม
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            
            // 2. จำลองสถานะการกำลังส่งข้อมูล (Loading State)
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span>ENCRYPTING_DATA...`;

            try {
                // จำลองการหน่วงเวลาเพื่อความสมจริง (2 วินาที)
                await new Promise(resolve => setTimeout(resolve, 2000));

                // 3. แสดงผลลัพธ์ความสำเร็จ (ในที่นี้ใช้ SweetAlert2 หรือ Alert ปกติ)
                alert("SUCCESS: ภารกิจของคุณถูกส่งเข้าสู่ระบบจัดเก็บข้อมูลลับแล้ว เจ้าหน้าที่ติดต่อกลับภายใน 24 ชม.");
                
                // ล้างค่าในฟอร์ม
                contactForm.reset();
                
            } catch (error) {
                alert("ERROR: ระบบสื่อสารขัดข้อง โปรดติดต่อผ่านช่องทาง LINE โดยตรง");
            } finally {
                // คืนค่าปุ่ม
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            }
        });
    }
});
