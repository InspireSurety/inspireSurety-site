---
title: "Surety Bonds"
layout: "layout.njk"
---

<style>
.is-sb *, .is-sb *::before, .is-sb *::after { box-sizing: border-box; }
.is-sb {
  font-family: inherit;
  color: #0f172a;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 0 40px;
}

/* ---- HERO ---- */
.is-sb .is-hero {
  text-align: center;
  padding: 56px 32px 48px;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(74,58,200,0.07) 0%, transparent 55%),
    radial-gradient(ellipse at 80% 50%, rgba(88,73,228,0.05) 0%, transparent 55%);
  border-radius: 24px;
  margin-bottom: 56px;
  border: 1px solid #e0e4ff;
}
.is-sb .is-hero h1 {
  font-size: clamp(24px, 3.5vw, 38px) !important;
  font-weight: 900 !important;
  color: #0f172a !important;
  line-height: 1.15 !important;
  letter-spacing: -0.02em;
  margin: 0 0 16px !important;
}
.is-sb .is-hero .is-sub {
  font-size: clamp(15px, 1.8vw, 18px);
  color: #475569;
  max-width: 640px;
  margin: 0 auto 28px;
  line-height: 1.65;
}
.is-sb .is-hero-stats {
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
  padding-top: 28px;
  border-top: 1px solid #c7cdfe;
  max-width: 560px;
  margin: 28px auto 0;
}
.is-sb .is-hero-stat { text-align: center; }
.is-sb .is-hero-stat-num {
  display: block;
  font-size: 28px;
  font-weight: 900;
  color: #4a3ac8;
  line-height: 1;
}
.is-sb .is-hero-stat-label {
  display: block;
  font-size: 12px;
  color: #64748b;
  font-weight: 600;
  margin-top: 6px;
}
.is-sb .is-btn-primary {
  display: inline-block;
  background: linear-gradient(135deg, #5849e4, #352c81);
  color: #fff !important;
  padding: 15px 32px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none !important;
  transition: all 0.2s;
  box-shadow: 0 4px 16px rgba(74,58,200,0.3);
}
.is-sb .is-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(74,58,200,0.38); }

/* ---- SECTIONS ---- */
.is-sb .is-sec { margin-bottom: 64px; }
.is-sb .is-sec-head { margin-bottom: 32px; }
.is-sb .is-sec-head h2 {
  font-size: clamp(20px, 2.5vw, 28px) !important;
  font-weight: 800 !important;
  color: #0f172a !important;
  margin: 0 0 8px !important;
}
.is-sb .is-sec-head p { font-size: 15px; color: #64748b; margin: 0; }
.is-sb .is-divider { height: 1px; background: linear-gradient(90deg, transparent, #e2e8f0, transparent); margin: 0 0 64px; }

/* ---- CHECKLIST GRID ---- */
.is-sb .is-checklist { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.is-sb .is-check-item {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 10px;
  padding: 14px 16px;
  font-size: 14px;
  color: #166534;
  font-weight: 500;
}
.is-sb .is-check-item svg { flex-shrink: 0; }

/* ---- STEPS ---- */
.is-sb .is-steps { display: flex; flex-direction: column; gap: 20px; }
.is-sb .is-step {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 20px;
  align-items: start;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 28px 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.2s, transform 0.2s;
}
.is-sb .is-step::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, #5849e4, #352c81);
}
.is-sb .is-step:hover { box-shadow: 0 10px 32px rgba(74,58,200,0.12); transform: translateY(-2px); }
.is-sb .is-step-num {
  width: 56px; height: 56px;
  background: linear-gradient(135deg, #5849e4, #352c81);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 22px;
  font-weight: 800;
  box-shadow: 0 4px 12px rgba(74,58,200,0.3);
  flex-shrink: 0;
}
.is-sb .is-step h3 { font-size: 17px !important; font-weight: 700 !important; color: #0f172a !important; margin: 0 0 8px !important; }
.is-sb .is-step p { font-size: 14.5px; color: #475569; margin: 0; line-height: 1.65; }

/* ---- TESTIMONIALS ---- */
.is-sb .is-testimonials { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.is-sb .is-testimonial {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-left: 4px solid #4a3ac8;
  border-radius: 0 14px 14px 0;
  padding: 26px 24px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
}
.is-sb .is-testimonial::before {
  content: '"';
  position: absolute;
  top: 6px; left: 16px;
  font-size: 48px;
  color: #e0e4ff;
  font-family: Georgia, serif;
  line-height: 1;
}
.is-sb .is-testimonial-text {
  font-size: 14.5px;
  color: #334155;
  line-height: 1.7;
  font-style: italic;
  margin: 12px 0 14px;
}
.is-sb .is-testimonial-author { display: flex; flex-direction: column; }
.is-sb .is-testimonial-name { font-weight: 700; color: #1e293b; font-size: 14px; }
.is-sb .is-testimonial-role { font-size: 12.5px; color: #94a3b8; }

/* ---- FAQ ---- */
.is-sb .is-faq-list { display: flex; flex-direction: column; gap: 10px; }
.is-sb .is-faq-item {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
  transition: box-shadow 0.2s;
}
.is-sb .is-faq-item:hover { box-shadow: 0 4px 14px rgba(0,0,0,0.05); }
.is-sb .is-faq-item[open] { border-color: #c7cdfe; box-shadow: 0 4px 18px rgba(74,58,200,0.09); }
.is-sb .is-faq-item summary {
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
  padding: 18px 22px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  gap: 14px;
}
.is-sb .is-faq-item summary::-webkit-details-marker { display: none; }
.is-sb .is-faq-item summary::after {
  content: "+";
  font-size: 22px;
  font-weight: 300;
  color: #4a3ac8;
  flex-shrink: 0;
  transition: transform 0.25s;
  line-height: 1;
}
.is-sb .is-faq-item[open] summary::after { transform: rotate(45deg); }
.is-sb .is-faq-body { padding: 0 22px 20px; }
.is-sb .is-faq-body p { font-size: 14.5px; color: #475569; margin: 0; line-height: 1.7; }

/* ---- FINAL CTA ---- */
.is-sb .is-final {
  text-align: center;
  background: linear-gradient(135deg, #1e1b4b, #4a3ac8, #5849e4);
  border-radius: 24px;
  padding: 56px 40px;
  position: relative;
  overflow: hidden;
}
.is-sb .is-final::before {
  content: "";
  position: absolute;
  top: -60px; right: -60px;
  width: 280px; height: 280px;
  background: rgba(255,255,255,0.05);
  border-radius: 50%;
}
.is-sb .is-final h2 {
  font-size: clamp(22px, 3vw, 30px) !important;
  color: #fff !important;
  margin: 0 0 14px !important;
  position: relative; z-index: 1;
}
.is-sb .is-final p {
  font-size: 15.5px;
  color: rgba(255,255,255,0.82);
  max-width: 480px;
  margin: 0 auto 28px;
  line-height: 1.6;
  position: relative; z-index: 1;
}
.is-sb .is-btn-white {
  display: inline-block;
  background: #fff;
  color: #4a3ac8 !important;
  padding: 15px 36px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 800;
  text-decoration: none !important;
  transition: all 0.2s;
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
  position: relative; z-index: 1;
}
.is-sb .is-btn-white:hover { background: #eef1ff; transform: translateY(-3px); }

/* ---- RESPONSIVE ---- */
@media (max-width: 640px) {
  .is-sb .is-checklist { grid-template-columns: 1fr; }
  .is-sb .is-testimonials { grid-template-columns: 1fr; }
  .is-sb .is-step { grid-template-columns: 1fr; gap: 14px; }
  .is-sb .is-hero { padding: 40px 20px 36px; }
  .is-sb .is-hero-stats { gap: 20px; }
  .is-sb .is-final { padding: 40px 24px; }
}
</style>

<div class="is-sb">

  <!-- HERO -->
  <div class="is-hero">
    <h1>Surety Bonds</h1>
    <p class="is-sub">Over 8,000 bond types available. Fast approvals. Lowest rates. Nationwide coverage. A-rated surety partners.</p>
    <p class="is-sub">No matter what type of surety bond your business needs—license bonds, permit bonds, contract bonds, court bonds, or specialty bonds—you can get it quickly and affordably. We streamline the entire process so you can stay compliant, avoid delays, and keep your operations moving.</p>
    <p class="is-sub">Whether you're applying for a new license, renewing an existing one, or meeting a state, federal, or industry requirement, we'll match you with the exact bond you need at the lowest rate available.</p>
    <p class="is-sub">Explore all bond types and get the right bond for your business today.</p>
    <div class="is-hero-stats">
      <div class="is-hero-stat"><span class="is-hero-stat-num">8,000+</span><span class="is-hero-stat-label">Bond Types</span></div>
      <div class="is-hero-stat"><span class="is-hero-stat-num">24hr</span><span class="is-hero-stat-label">Approvals</span></div>
      <div class="is-hero-stat"><span class="is-hero-stat-num">50</span><span class="is-hero-stat-label">States Covered</span></div>
      <div class="is-hero-stat"><span class="is-hero-stat-num">A+</span><span class="is-hero-stat-label">Rated Partners</span></div>
    </div>
  </div>

  <!-- WHAT ARE SURETY BONDS -->
  <div class="is-sec">
    <div class="is-sec-head">
      <h2>What Are Surety Bonds? (All Types)</h2>
      <p>Our surety bonds (including all surety bond types and miscellaneous surety bonds) cover every industry, every state, and every licensing or compliance requirement. Whether you're applying for a professional license, operating a regulated business, bidding on a project, or meeting a state or federal requirement, we provide the exact bond you need—fast.</p>
    </div>
    <p style="font-size:15px;color:#475569;margin-bottom:16px;">Surety bonds protect the public, government agencies, and private parties from:</p>
    <div class="is-checklist">
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Fraud, misrepresentation, or unethical business practices</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Failure to follow state or federal regulations</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Non-performance of contracts</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Mishandling of funds or property</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Financial loss caused by non-compliance</span>
      </div>
    </div>
    <p style="font-size:15px;color:#475569;margin-top:20px;">If your business requires a bond, we can issue it—no matter the type.</p>
  </div>

  <div class="is-divider"></div>

  <!-- ALL BOND TYPES -->
  <div class="is-sec">
    <div class="is-sec-head">
      <h2>All Surety Bond Types We Cover</h2>
      <p>We provide over 8,000 surety bonds, including but not limited to:</p>
    </div>
    <div class="is-checklist">
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>License &amp; permit bonds</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Commercial bonds</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Professional bonds</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Contractor &amp; construction bonds</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Environmental &amp; compliance bonds</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Transportation &amp; logistics bonds</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Financial guarantee bonds</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Court &amp; probate bonds</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Federal &amp; state-specific bonds</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Industry-unique and hard-to-find bonds</span>
      </div>
    </div>
    <p style="font-size:15px;color:#475569;margin-top:20px;">If it exists, we can issue it.</p>
  </div>

  <div class="is-divider"></div>

  <!-- SURETY BOND AMOUNTS AND COST -->
  <div class="is-sec">
    <div class="is-sec-head">
      <h2>Surety Bond Amounts and Cost</h2>
      <p>Bond amounts vary widely depending on:</p>
    </div>
    <div class="is-checklist">
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>State or federal requirements</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Industry or license type</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Contract size or financial exposure</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Business structure and risk level</span>
      </div>
    </div>
    <p style="font-size:15px;color:#475569;margin-top:20px;">Your premium depends on:</p>
    <div class="is-checklist" style="margin-top:12px;">
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Bond amount</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Credit score</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Business financials</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Licensing and compliance history</span>
      </div>
    </div>
    <p style="font-size:15px;color:#475569;margin-top:20px;">Most applicants qualify instantly with competitive rates.</p>
  </div>

  <div class="is-divider"></div>

  <!-- WHO NEEDS A SURETY BOND -->
  <div class="is-sec">
    <div class="is-sec-head">
      <h2>Who Needs a Surety Bond</h2>
      <p>You may need a surety bond if you operate as a:</p>
    </div>
    <div class="is-checklist">
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Licensed professional</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Contractor or subcontractor</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Retail or wholesale business</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Transportation or logistics operator</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Financial services provider</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Regulated industry professional</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Business requiring state, federal, or municipal approval</span>
      </div>
    </div>
    <p style="font-size:15px;color:#475569;margin-top:20px;">Any individual or company operating under regulatory oversight may be required to file a bond.</p>
  </div>

  <div class="is-divider"></div>

  <!-- REQUIREMENTS & ELIGIBILITY -->
  <div class="is-sec">
    <div class="is-sec-head">
      <h2>Surety Bond Requirements &amp; Eligibility</h2>
      <p>Most bonds require:</p>
    </div>
    <div class="is-checklist">
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Completed application</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>State or federal-mandated bond amount</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Credit review</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Business or personal financials (for larger bonds)</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Annual or multi-year renewal</span>
      </div>
    </div>
    <p style="font-size:15px;color:#475569;margin-top:20px;">We handle simple, complex, and high-risk bonds.</p>
  </div>

  <div class="is-divider"></div>

  <!-- HOW THE PROCESS WORKS -->
  <div class="is-sec">
    <div class="is-sec-head">
      <h2>How the Surety Bond Process Works</h2>
    </div>
    <div class="is-steps">
      <div class="is-step">
        <div class="is-step-num">1</div>
        <div>
          <h3>Complete the Application</h3>
          <p>Submit the quick, 60-second application with your business details.</p>
        </div>
      </div>
      <div class="is-step">
        <div class="is-step-num">2</div>
        <div>
          <h3>Secure the Lowest Rate</h3>
          <p>We match you with the best rate available from A-rated sureties.</p>
        </div>
      </div>
      <div class="is-step">
        <div class="is-step-num">3</div>
        <div>
          <h3>Receive Your Bond</h3>
          <p>Same-day issuance available for most bond types.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="is-divider"></div>

  <!-- WHY BUSINESSES CHOOSE US -->
  <div class="is-sec">
    <div class="is-sec-head">
      <h2>Why Businesses Choose Us for All Surety Bonds</h2>
    </div>
    <div class="is-checklist">
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Lowest rates from A-rated sureties</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Fast approvals for all bond types</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Digital delivery for immediate filing</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Specialists in hard-to-place and unique bonds</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>100% compliance guaranteed</span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
        <span>Over 8,000 bond types available nationwide</span>
      </div>
    </div>
  </div>

  <div class="is-divider"></div>

  <!-- TOP QUESTIONS -->
  <div class="is-sec">
    <div class="is-sec-head">
      <h2>Top Questions About Surety Bonds (All Types)</h2>
      <p>Our most common questions answered efficiently.</p>
    </div>
    <div class="is-faq-list">
      <details class="is-faq-item">
        <summary>How much does a surety bond cost?</summary>
        <div class="is-faq-body">
          <p>Bond cost depends on the bond amount, your credit profile, and the type of bond required. Most applicants qualify for competitive rates instantly.</p>
        </div>
      </details>
      <details class="is-faq-item">
        <summary>How long does approval take?</summary>
        <div class="is-faq-body">
          <p>Many bonds are approved and issued the same day, especially for standard license and permit bonds.</p>
        </div>
      </details>
      <details class="is-faq-item">
        <summary>What if I don't know which bond I need?</summary>
        <div class="is-faq-body">
          <p>Our licensed agents will help match you with the exact bond required for your state, industry, or contract.</p>
        </div>
      </details>
      <details class="is-faq-item">
        <summary>Can the bond be refunded?</summary>
        <div class="is-faq-body">
          <p>Refund policies vary by surety and bond type. Contact us for specifics on your bond.</p>
        </div>
      </details>
      <details class="is-faq-item">
        <summary>Do you offer bonds in every state?</summary>
        <div class="is-faq-body">
          <p>Yes, we are licensed to write bonds nationwide across all 50 states.</p>
        </div>
      </details>
    </div>
  </div>

  <div class="is-divider"></div>

  <!-- TESTIMONIALS -->
  <div class="is-sec">
    <div class="is-sec-head">
      <h2>Customer Testimonials</h2>
      <p>What our customers are saying about us.</p>
    </div>
    <div class="is-testimonials">
      <div class="is-testimonial">
        <p class="is-testimonial-text">Inspire Surety helped us secure multiple bonds across different states. Fast and flawless service.</p>
        <div class="is-testimonial-author">
          <span class="is-testimonial-name">Kara M.</span>
          <span class="is-testimonial-role">Operations Director</span>
        </div>
      </div>
      <div class="is-testimonial">
        <p class="is-testimonial-text">We needed several unusual bond types. Inspire Surety found them all and issued them quickly.</p>
        <div class="is-testimonial-author">
          <span class="is-testimonial-name">Damon T.</span>
          <span class="is-testimonial-role">Compliance Director</span>
        </div>
      </div>
      <div class="is-testimonial">
        <p class="is-testimonial-text">As a new business owner, I had no idea which bond I needed. They guided me through everything.</p>
        <div class="is-testimonial-author">
          <span class="is-testimonial-name">Shelly R.</span>
          <span class="is-testimonial-role">Small Business Owner</span>
        </div>
      </div>
      <div class="is-testimonial">
        <p class="is-testimonial-text">Our company handles complex projects, and Inspire Surety always delivers the bonds we need.</p>
        <div class="is-testimonial-author">
          <span class="is-testimonial-name">Vic L.</span>
          <span class="is-testimonial-role">Project Administrator</span>
        </div>
      </div>
      <div class="is-testimonial">
        <p class="is-testimonial-text">Excellent communication and fast turnaround. They truly cover every bond type imaginable.</p>
        <div class="is-testimonial-author">
          <span class="is-testimonial-name">Paula S.</span>
          <span class="is-testimonial-role">Licensing Coordinator</span>
        </div>
      </div>
      <div class="is-testimonial">
        <p class="is-testimonial-text">We needed a rare bond type for a federal requirement. Inspire Surety issued it the same day.</p>
        <div class="is-testimonial-author">
          <span class="is-testimonial-name">Grant W.</span>
          <span class="is-testimonial-role">Federal Contractor</span>
        </div>
      </div>
    </div>
  </div>

  <div class="is-divider"></div>

  <!-- SURETY BOND HUBS -->
  <div class="is-sec">
    <div class="is-sec-head">
      <h2>Surety Bond Hubs</h2>
    </div>
    <div class="is-checklist">
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a3ac8" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        <span><a href="/pages/contractors-construction-bond-hub/" style="color:#166534;text-decoration:none;">Contractors &amp; Construction Bond Hub</a></span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a3ac8" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        <span><a href="/pages/court-fiduciary-bond-hub/" style="color:#166534;text-decoration:none;">Court &amp; Fiduciary Bond Hub</a></span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a3ac8" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        <span><a href="/pages/cannabis-bond-hub/" style="color:#166534;text-decoration:none;">Cannabis Bond Hub</a></span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a3ac8" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        <span><a href="/pages/environmental-reclamation-bond-hub/" style="color:#166534;text-decoration:none;">Environmental &amp; Reclamation Bond Hub</a></span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a3ac8" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        <span><a href="/pages/federal-blm-bond-hub/" style="color:#166534;text-decoration:none;">Federal &amp; BLM Bond Hub</a></span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a3ac8" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        <span><a href="/pages/escrow-real-estate-bond-hub/" style="color:#166534;text-decoration:none;">Escrow &amp; Real Estate Bond Hub</a></span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a3ac8" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        <span><a href="/pages/license-permit-bond-hub/" style="color:#166534;text-decoration:none;">License &amp; Permit Bond Hub</a></span>
      </div>
      <div class="is-check-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a3ac8" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        <span><a href="/pages/agriculture-food-bond-hub/" style="color:#166534;text-decoration:none;">Agriculture &amp; Food Bond Hub</a></span>
      </div>
    </div>
    <p style="margin-top:20px;">
      <a href="/pages/surety-bond-learning-center/" style="color:#4a3ac8;font-weight:600;font-size:15px;text-decoration:none;">Surety Bond Learning Center →</a>
    </p>
  </div>

  <!-- FINAL CTA -->
  <div class="is-final">
    <h2>Get Bonded Today</h2>
    <p>Fast issuance, all 50 states, licensed agents standing by.</p>
    <a href="/pages/contact/" class="is-btn-white">Apply Now</a>
  </div>

</div>