/**
* Namsommut Investigation - Data Renderer
* 🛠️ Function: Fetching and Rendering Secure Data
*/

document.addEventListener('DOMContentLoaded', () => {
  // หน่วงเวลาเล็กน้อยเพื่อให้ Placeholder ต่างๆ โหลดเสร็จก่อนเริ่มเรนเดอร์ข้อมูล
  setTimeout(() => {
    renderServices();
    renderReviews();
    renderTeam();
  }, 600);
});

/**
* 1. เรนเดอร์รายการบริการ (Services)
*/
async function renderServices() {
  const container = document.getElementById('service-list');
  if (!container) return;

  try {
    const response = await fetch('data/services.json');
    const data = await response.json();

    container.innerHTML = data.map(service => `
      <div class="col-md-6 col-lg-6 mb-4 animate-on-scroll">
      <div class="glass-card p-4 h-100 border-primary border-opacity-10 shadow-hover">
      <div class="d-flex align-items-center mb-3">
      <div class="icon-box me-3">
      <i class="bi ${service.icon} text-primary fs-2"></i>
      </div>
      <div>
      <h5 class="fw-bold mb-0 text-white">${service.title}</h5>
      <small class="text-primary text-uppercase tracking-wider font-monospace" style="font-size: 0.7rem;">${service.subtitle}</small>
      </div>
      </div>
      <p class="text-muted small mb-4">${service.description}</p>
      <ul class="list-unstyled mb-4">
      ${service.features.map(f => `
        <li class="text-white-50 small mb-2">
        <i class="bi bi-shield-check text-primary me-2"></i>${f}
        </li>
        `).join('')}
      </ul>
      <div class="mt-auto pt-3 border-top border-white border-opacity-10 d-flex justify-content-between align-items-center">
      <span class="text-primary font-monospace small">${service.price_range || 'QUOTATION BASED'}</span>
      <a href="contact.html?service=${service.id}" class="btn btn-sm btn-primary rounded-pill px-4">เลือกภารกิจ</a>
      </div>
      </div>
      </div>
      `).join('');

  } catch (error) {
    console.error("❌ Error rendering services:", error);
  }
}

/**
* 2. เรนเดอร์รีวิวลูกค้า (Reviews)
*/
async function renderReviews() {
  const container = document.getElementById('review-list');
  if (!container) return;

  try {
    const response = await fetch('data/reviews.json');
    const reviews = await response.json();

    container.innerHTML = reviews.map(rev => `
      <div class="col-md-4 mb-4">
      <div class="p-4 rounded-4 bg-dark border border-white border-opacity-5 h-100">
      <div class="d-flex mb-3 text-primary">
      ${'<i class="bi bi-star-fill me-1"></i>'.repeat(rev.rating)}
      </div>
      <p class="text-white-50 small fst-italic mb-4">"${rev.comment}"</p>
      <div class="d-flex align-items-center">
      <div class="avatar-sm bg-primary bg-opacity-10 text-primary rounded-circle me-3 d-flex align-items-center justify-content-center" style="width:35px; height:35px;">
      <i class="bi bi-person-badge"></i>
      </div>
      <div>
      <h6 class="mb-0 text-white small">${rev.client_name}</h6>
      <small class="text-muted x-small">${rev.service}</small>
      </div>
      </div>
      </div>
      </div>
      `).join('');
  } catch (error) {
    console.error("❌ Error rendering reviews:", error);
  }
}

/**
* 3. เรนเดอร์ทีมงาน (Team)
*/
async function renderTeam() {
  const container = document.getElementById('team-list');
  if (!container) return;

  try {
    const response = await fetch('data/team.json'); // ตรวจสอบชื่อไฟล์ในโฟลเดอร์ data
    const team = await response.json();

    container.innerHTML = team.map(member => `
      <div class="col-md-4 mb-5">
      <div class="team-card text-center animate-on-scroll">
      <div class="position-relative d-inline-block mb-4">
      <img src="${member.image}" alt="${member.name}" class="rounded-circle grayscale shadow-lg border border-primary border-opacity-25" style="width: 160px; height: 160px; object-fit: cover;">
      <div class="position-absolute bottom-0 end-0 bg-primary rounded-circle d-flex align-items-center justify-content-center shadow" style="width: 40px; height: 40px;">
      <i class="bi ${member.icon} text-white"></i>
      </div>
      </div>
      <h5 class="text-white fw-bold mb-1">${member.name}</h5>
      <p class="text-primary small text-uppercase tracking-widest mb-3 font-monospace" style="font-size:0.75rem;">${member.role}</p>
      <p class="text-muted small px-3 mb-0" style="line-height: 1.6;">${member.bio}</p>
      </div>
      </div>
      `).join('');
  } catch (error) {
    console.error("❌ Error rendering team:", error);
  }
}