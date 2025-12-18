/**
 * Namsommut Investigation - Data Renderer
 * 🛠️ Function: Fetch JSON data and render to HTML components
 * 🟢 Status: Final Production Ready
 */

document.addEventListener('DOMContentLoaded', () => {
    // ฟังก์ชันเริ่มการทำงานแบบ Safe-check เพื่อรอ CONFIG
    const initRender = () => {
        if (typeof CONFIG === 'undefined') {
            console.warn("⏳ Waiting for CONFIG...");
            setTimeout(initRender, 100);
            return;
        }

        // เริ่มเรนเดอร์ตามลำดับความสำคัญ
        setTimeout(() => {
            renderServices();
            renderReviews();
            renderTeam();
        }, CONFIG.UI_SETTINGS.RENDER_WAIT || 500);
    };

    initRender();
});

/**
 * 📂 เรนเดอร์รายการบริการ (Services)
 */
async function renderServices() {
    const container = document.getElementById('service-list');
    if (!container) return;

    try {
        const response = await fetch(CONFIG.DATA_PATH.SERVICES);
        if (!response.ok) throw new Error('SERVICE_FETCH_FAILED');
        const services = await response.json();
        
        container.innerHTML = services.map(service => `
            <div class="col-md-6 col-lg-4 mb-4 animate-on-scroll">
                <div class="card bg-card-custom h-100 border-0 shadow-hover p-4 rounded-4 position-relative overflow-hidden">
                    <div class="card-body p-0">
                        <div class="d-flex align-items-center mb-3">
                            <div class="icon-box bg-primary bg-opacity-10 p-3 rounded-3 me-3">
                                <i class="bi ${service.icon || 'bi-shield-shaded'} text-primary fs-3"></i>
                            </div>
                            <div>
                                <h5 class="fw-bold mb-0 text-white">${service.title}</h5>
                                <small class="text-primary text-uppercase tracking-widest font-monospace" style="font-size: 0.65rem;">${service.subtitle || 'OPERATIONAL'}</small>
                            </div>
                        </div>
                        <p class="text-muted small mb-4">${service.description}</p>
                        <ul class="list-unstyled mb-4">
                            ${(service.features || []).map(f => `
                                <li class="text-white-50 small mb-2">
                                    <i class="bi bi-shield-check text-primary me-2"></i>${f}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    <div class="card-footer bg-transparent border-0 p-0 mt-auto pt-3 border-top border-white border-opacity-5">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 py-2 px-3 font-monospace x-small">
                                ${service.price_range}
                            </span>
                            <a href="contact.html?service=${service.id}" class="btn btn-link text-primary p-0 text-decoration-none x-small font-monospace">
                                INITIATE_MISSION <i class="bi bi-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
        refreshAOS();
    } catch (error) {
        console.error("❌ Service Error:", error);
        container.innerHTML = `<div class="col-12 text-center text-danger font-monospace py-5">${CONFIG.MESSAGES.DB_FETCH_ERROR}</div>`;
    }
}

/**
 * ⭐ เรนเดอร์รายการรีวิว (Reviews)
 */
async function renderReviews() {
    const container = document.getElementById('review-list');
    if (!container) return;

    try {
        const response = await fetch(CONFIG.DATA_PATH.REVIEWS);
        if (!response.ok) throw new Error('REVIEW_FETCH_FAILED');
        const reviews = await response.json();

        container.innerHTML = reviews.map(review => `
            <div class="col-md-6 col-lg-4 mb-4 animate-on-scroll">
                <div class="glass-card h-100 p-4 d-flex flex-column border border-white border-opacity-5 rounded-4">
                    <div class="d-flex mb-3">
                        ${Array(review.rating).fill().map(() => `<i class="bi bi-star-fill text-primary me-1" style="font-size: 0.75rem;"></i>`).join('')}
                    </div>
                    <p class="text-white-50 small mb-4 italic flex-grow-1">"${review.comment}"</p>
                    <div class="border-top border-white border-opacity-5 pt-3 mt-auto">
                        <div class="fw-bold text-white small">${review.name}</div>
                        <div class="font-monospace text-primary text-uppercase" style="font-size: 0.6rem;">
                            <span class="opacity-50">MISSION:</span> ${review.mission}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
        refreshAOS();
    } catch (error) {
        console.error("❌ Review Error:", error);
        container.innerHTML = `<p class="col-12 text-center text-muted font-monospace py-5">ARCHIVE_ACCESS_DENIED</p>`;
    }
}

/**
 * 🕵️‍♂️ เรนเดอร์รายการทีมงาน (Team)
 */
async function renderTeam() {
    const container = document.getElementById('team-list');
    if (!container) return;

    try {
        const response = await fetch(CONFIG.DATA_PATH.TEAM);
        if (!response.ok) throw new Error('TEAM_FETCH_FAILED');
        const team = await response.json();

        container.innerHTML = team.map(member => `
            <div class="col-md-4 mb-4 animate-on-scroll">
                <div class="glass-card text-center p-4 h-100 border border-primary border-opacity-10 rounded-4 shadow-sm">
                    <div class="mb-4 position-relative d-inline-block">
                        <img src="${member.image}" alt="${member.name}" 
                             class="img-fluid rounded-circle border border-primary border-3 p-1 agent-photo" 
                             style="width: 150px; height: 150px; object-fit: cover; filter: grayscale(100%) contrast(120%);">
                        <div class="status-indicator active"></div>
                    </div>
                    <h5 class="fw-bold text-white mb-1 font-monospace">${member.name}</h5>
                    <p class="text-primary x-small tracking-widest text-uppercase mb-3">${member.position}</p>
                    <p class="text-muted small mb-0">${member.bio || ''}</p>
                    <div class="mt-3 pt-3 border-top border-white border-opacity-5">
                        <span class="text-white-50 x-small font-monospace">SPECIALTY: ${member.specialty}</span>
                    </div>
                </div>
            </div>
        `).join('');
        refreshAOS();
    } catch (error) {
        console.error("❌ Team Error:", error);
        container.innerHTML = `<p class="col-12 text-center text-muted font-monospace py-5">AGENT_DATA_ENCRYPTED</p>`;
    }
}

/**
 * 🛠️ ฟังก์ชันเรียกคืนระบบ Animation
 */
function refreshAOS() {
    if (window.Utils && typeof window.Utils.initObserver === 'function') {
        window.Utils.initObserver();
    }
}
