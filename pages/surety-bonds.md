---
title: "Surety Bonds"
layout: "layout.njk"
---

<style>
.is-sb *, .is-sb *::before, .is-sb *::after { box-sizing: border-box; }
.is-sb {
  font-family: inherit;
  color: #0f172a;
  margin: 0 calc(-50vw + 50%);
  width: 100vw;
  padding: 0;
}
.is-sb .is-inner { max-width: 1000px; margin: 0 auto; padding: 0 24px; }

/* ---- HERO: TIER 2 DERIVED FROM HOME INDIGO ---- */
.is-sb .is-hero-wrap {
  background: linear-gradient(135deg, #1e1b4b 0%, #4a3ac8 55%, #7c73f5 100%);
  padding: 72px 0 64px;
  position: relative;
  overflow: hidden;
}
.is-sb .is-hero-wrap::before {
  content: "";
  position: absolute;
  top: -100px; right: -100px;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  border-radius: 50%;
}
.is-sb .is-hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.25);
  color: #ddd6fe; font-size: 11px; font-weight: 800; letter-spacing: 0.08em;
  text-transform: uppercase; padding: 6px 16px; border-radius: 999px;
  margin-bottom: 20px; position: relative; z-index: 1;
}
.is-sb .is-hero-wrap h1 {
  font-size: clamp(32px, 5vw, 52px) !important; font-weight: 900 !important;
  color: #fff !important; line-height: 1.1 !important; margin: 0 0 16px !important;
  position: relative; z-index: 1; letter-spacing: -0.02em;
}
.is-sb .is-hero-wrap p { font-size: 16px; color: rgba(255,255,255,0.9); line-height: 1.7; max-width: 620px; margin: 0 0 28px; position: relative; z-index: 1; }
.is-sb .is-btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: #fff; color: #4a3ac8 !important;
  padding: 16px 34px; border-radius: 12px;
  font-size: 16px; font-weight: 800;
  text-decoration: none !important; transition: all 0.2s;
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
  position: relative; z-index: 1;
}
.is-sb .is-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.3); }
.is-sb .is-hero-stats { display: flex; gap: 32px; margin-top: 36px; padding-top: 28px; border-top: 1px solid rgba(255,255,255,0.2); position: relative; z-index: 1; flex-wrap: wrap; }
.is-sb .is-hero-stat-num { font-size: 26px; font-weight: 900; color: #fff; line-height: 1; display: block; }
.is-sb .is-hero-stat-label { font-size: 11px; color: rgba(255,255,255,0.7); font-weight: 600; margin-top: 4px; display: block; }

/* ---- TOC ---- */
.is-sb .is-toc {
  background: #1a1740; border-radius: 20px; padding: 32px 36px;
  margin: -36px auto 0; max-width: 940px; position: relative; z-index: 2;
  box-shadow: 0 20px 50px rgba(0,0,0,0.25);
}
.is-sb .is-toc-title { font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #c7d2fe; margin-bottom: 16px; }
.is-sb .is-toc-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px 24px; }
.is-sb .is-toc-grid a { font-size: 14px; color: #e2e8f0; text-decoration: none; font-weight: 500; display: flex; align-items: center; gap: 8px; }
.is-sb .is-toc-grid a::before { content: "→"; color: #7c73f5; }
.is-sb .is-toc-grid a:hover { color: #c7d2fe; }

/* ---- SECTIONS: WHITE CANVAS ---- */
.is-sb .is-sec { background: #fff; padding: 64px 0; }
.is-sb .is-sec + .is-sec { border-top: 1px solid #f1f5f9; }
.is-sb .is-sec h2 { font-size: clamp(22px, 2.8vw, 30px) !important; font-weight: 900 !important; color: #0f172a !important; margin: 0 0 16px !important; letter-spacing: -0.01em; }
.is-sb .is-eyebrow { display: inline-block; font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #4a3ac8; margin-bottom: 10px; }
.is-sb .is-sec p { font-size: 15px; color: #475569; line-height: 1.75; margin: 0 0 14px; }

/* ---- CHECKLIST ---- */
.is-sb .is-check-list { display: flex; flex-direction: column; gap: 2px; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; margin: 20px 0; background: #fff; }
.is-sb .is-check-row { display: flex; align-items: center; gap: 12px; padding: 14px 20px; border-bottom: 1px solid #f1f5f9; }
.is-sb .is-check-row:last-child { border-bottom: none; }
.is-sb .is-check-icon { width: 26px; height: 26px; border-radius: 50%; background: #eef1ff; color: #4a3ac8; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; font-weight: 800; }
.is-sb .is-check-row span { font-size: 14.5px; color: #334155; font-weight: 500; }

/* ---- CATEGORY CARDS: LINKS TO ALL 8 HUBS ---- */
.is-sb .is-cat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin: 24px 0; }
.is-sb .is-cat-card { border-radius: 16px; padding: 24px 20px; color: #fff; text-decoration: none; display: block; transition: all 0.25s; }
.is-sb .is-cat-card:hover { transform: translateY(-4px); box-shadow: 0 14px 32px rgba(0,0,0,0.18); }
.is-sb .is-cat-card h4 { font-size: 14.5px !important; font-weight: 800 !important; color: #fff !important; margin: 0 0 6px !important; }
.is-sb .is-cat-card p { font-size: 12px; color: rgba(255,255,255,0.8); margin: 0; line-height: 1.5; }
.is-sb .cat-1 { background: linear-gradient(135deg, #1e40af, #0891b2); }
.is-sb .cat-2 { background: linear-gradient(135deg, #57534e, #d97706); }
.is-sb .cat-3 { background: linear-gradient(135deg, #4c1d95, #9333ea); }
.is-sb .cat-4 { background: linear-gradient(135deg, #14532d, #166534); }
.is-sb .cat-5 { background: linear-gradient(135deg, #1e293b, #475569); }
.is-sb .cat-6 { background: linear-gradient(135deg, #134e4a, #0f766e); }
.is-sb .cat-7 { background: linear-gradient(135deg, #166534, #15803d); }
.is-sb .cat-8 { background: linear-gradient(135deg, #78350f, #92400e); }

/* ---- STAT BAND ---- */
.is-sb .is-stat-wrap { background: #1a1740; border-radius: 20px; padding: 40px 36px; margin: 24px 0; }
.is-sb .is-stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.is-sb .is-stat-item { text-align: center; }
.is-sb .is-stat-num { font-size: 30px; font-weight: 900; color: #c7d2fe; line-height: 1; }
.is-sb .is-stat-label { font-size: 12px; color: #94a3b8; font-weight: 600; margin-top: 8px; }

/* ---- STEPS ---- */
.is-sb .is-steps { display: flex; flex-direction: column; gap: 0; margin: 24px 0; }
.is-sb .is-step { display: grid; grid-template-columns: 80px 1fr; gap: 24px; align-items: start; padding: 28px 0; border-bottom: 1px solid #e2e8f0; }
.is-sb .is-step:last-child { border-bottom: none; }
.is-sb .is-step-num { width: 64px; height: 64px; background: linear-gradient(135deg, #4a3ac8, #7c73f5); border-radius: 18px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 26px; font-weight: 900; flex-shrink: 0; box-shadow: 0 8px 20px rgba(74,58,200,0.35); }
.is-sb .is-step h3 { font-size: 18px !important; font-weight: 800 !important; color: #0f172a !important; margin: 0 0 6px !important; }
.is-sb .is-step p { font-size: 14.5px; color: #475569; margin: 0; line-height: 1.65; }

/* ---- FAQ ---- */
.is-sb .is-faq-list { display: flex; flex-direction: column; gap: 10px; margin: 20px 0; }
.is-sb .is-faq-item { border: 1px solid #e2e8f0; border-radius: 14px; background: #fff; overflow: hidden; }
.is-sb .is-faq-item[open] { border-color: #c7d2fe; box-shadow: 0 6px 20px rgba(74,58,200,0.1); }
.is-sb .is-faq-item summary { font-size: 15px; font-weight: 700; color: #0f172a; padding: 18px 22px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; list-style: none; gap: 14px; }
.is-sb .is-faq-item summary::-webkit-details-marker { display: none; }
.is-sb .is-faq-item summary::after { content: "+"; font-size: 22px; font-weight: 300; color: #4a3ac8; flex-shrink: 0; transition: transform 0.25s; line-height: 1; }
.is-sb .is-faq-item[open] summary::after { transform: rotate(45deg); }
.is-sb .is-faq-body { padding: 0 22px 20px; }
.is-sb .is-faq-body p { font-size: 14.5px; color: #475569; margin: 0; line-height: 1.7; }

/* ---- TESTIMONIALS ---- */
.is-sb .is-testimonials { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0; }
.is-sb .is-testimonial { background: #fff; border-radius: 16px; padding: 22px 20px; position: relative; box-shadow: 0 4px 16px rgba(0,0,0,0.05); border-top: 3px solid #4a3ac8; }
.is-sb .is-testimonial-text { font-size: 13.5px; color: #334155; line-height: 1.65; font-style: italic; margin: 0 0 14px; }
.is-sb .is-testimonial-name { font-weight: 700; color: #1e293b; font-size: 13.5px; display: block; }
.is-sb .is-testimonial-role { font-size: 12px; color: #94a3b8; }

/* ---- FINAL CTA ---- */
.is-sb .is-final-wrap { background: linear-gradient(135deg, #1e1b4b, #4a3ac8, #7c73f5); padding: 72px 0; text-align: center; position: relative; overflow: hidden; }
.is-sb .is-final-wrap::before { content: ""; position: absolute; top: -80px; left: -80px; width: 320px; height: 320px; background: rgba(255,255,255,0.08); border-radius: 50%; }
.is-sb .is-final-wrap::after { content: ""; position: absolute; bottom: -100px; right: -60px; width: 380px; height: 380px; background: rgba(255,255,255,0.05); border-radius: 50%; }
.is-sb .is-final-wrap h2 { font-size: clamp(26px, 3.5vw, 40px) !important; color: #fff !important; margin: 0 0 14px !important; position: relative; z-index: 1; font-weight: 900 !important; }
.is-sb .is-final-wrap p { font-size: 17px; color: rgba(255,255,255,0.9); margin: 0 auto 32px; max-width: 480px; position: relative; z-index: 1; }
.is-sb .is-btn-white { display: inline-block; background: #fff; color: #4a3ac8 !important; padding: 17px 40px; border-radius: 12px; font-size: 16px; font-weight: 800; text-decoration: none !important; position: relative; z-index: 1; transition: all 0.2s; box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
.is-sb .is-btn-white:hover { background: #eef1ff; transform: translateY(-3px); }

/* ---- RESPONSIVE ---- */
@media (max-width: 900px) {
  .is-sb .is-cat-grid { grid-template-columns: repeat(2, 1fr); }
  .is-sb .is-stat-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .is-sb .is-testimonials { grid-template-columns: 1fr; }
}
@media (max-width: 720px) {
  .is-sb .is-toc { margin: -24px 20px 0; padding: 24px 22px; }
  .is-sb .is-toc-grid { grid-template-columns: 1fr; }
  .is-sb .is-step { grid-template-columns: 1fr; gap: 12px; }
  .is-sb .is-hero-stats { flex-wrap: wrap; gap: 20px; }
  .is-sb .is-sec { padding: 44px 0; }
  .is-sb .is-hero-wrap { padding: 48px 0 56px; }
}
</style>

<div class="is-sb">

  <div class="is-hero-wrap">
    <div class="is-inner">
      <div class="is-hero-badge">All Surety Bonds</div>
      <h1>Surety Bonds</h1>
      <p>Over 8,000 bond types available. Fast approvals. Lowest rates. Nationwide coverage. A-rated surety partners.</p>
      <p>No matter what type of surety bond your business needs—license bonds, permit bonds, contract bonds, court bonds, or specialty bonds—you can get it quickly and affordably. We streamline the entire process so you can stay compliant, avoid delays, and keep your operations moving.</p>
      <a href="#categories" class="is-btn-primary">
        Explore Bond Categories
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4a3ac8" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
      <div class="is-hero-stats">
        <div><span class="is-hero-stat-num">8,000+</span><span class="is-hero-stat-label">Bond Types</span></div>
        <div><span class="is-hero-stat-num">50</span><span class="is-hero-stat-label">States Covered</span></div>
        <div><span class="is-hero-stat-num">A+</span><span class="is-hero-stat-label">Rated Partners</span></div>
      </div>
    </div>
  </div>

  <div class="is-toc">
    <div class="is-toc-title">On This Page</div>
    <div class="is-toc-grid">
      <a href="#what-are">What Are Surety Bonds?</a>
      <a href="#categories">Browse Bond Categories</a>
      <a href="#who-needs">Who Needs a Surety Bond?</a>
      <a href="#process">How the Process Works</a>
      <a href="#faq">Frequently Asked Questions</a>
    </div>
  </div>

  <div class="is-sec" id="what-are">
    <div class="is-inner">
      <span class="is-eyebrow">Overview</span>
      <h2>What Are Surety Bonds?</h2>
      <p>Whether you're applying for a new license, renewing an existing one, or meeting a state, federal, or industry requirement, we'll match you with the exact bond you need at the lowest rate available.</p>
      <p>Surety bonds protect the public, government agencies, and private parties from:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Fraud, misrepresentation, or unethical business practices</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Failure to follow state or federal regulations</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Non-performance of contracts</span></div>
      </div>
      <p style="margin-top:16px;">If your business requires a bond, we can issue it—no matter the type.</p>
    </div>
  </div>

  <div class="is-sec" id="categories">
    <div class="is-inner">
      <span class="is-eyebrow">Explore</span>
      <h2>Browse Bond Categories</h2>
      <p>Find your bond category and explore requirements, guides, and applications.</p>
      <div class="is-cat-grid">
        <a href="/pages/license-permit-bond-hub/" class="is-cat-card cat-1"><h4>License &amp; Permit</h4><p>Auto dealer, notary, mortgage broker &amp; more.</p></a>
        <a href="/pages/contractors-construction-bond-hub/" class="is-cat-card cat-2"><h4>Construction</h4><p>Bid, performance, payment &amp; contractor bonds.</p></a>
        <a href="/pages/court-fiduciary-bond-hub/" class="is-cat-card cat-3"><h4>Court &amp; Fiduciary</h4><p>Probate, guardian, trustee &amp; public official bonds.</p></a>
        <a href="/pages/environmental-reclamation-bond-hub/" class="is-cat-card cat-4"><h4>Environmental</h4><p>Reclamation, oil &amp; gas, remediation bonds.</p></a>
        <a href="/pages/federal-blm-bond-hub/" class="is-cat-card cat-5"><h4>Federal &amp; BLM</h4><p>BLM, U.S. Customs, USDA &amp; federal bonds.</p></a>
        <a href="/pages/escrow-real-estate-bond-hub/" class="is-cat-card cat-6"><h4>Escrow &amp; Real Estate</h4><p>Escrow agent, title &amp; mortgage broker bonds.</p></a>
        <a href="/pages/cannabis-bond-hub/" class="is-cat-card cat-7"><h4>Cannabis</h4><p>License, tax &amp; cultivator bonds.</p></a>
        <a href="/pages/agriculture-food-bond-hub/" class="is-cat-card cat-8"><h4>Agriculture &amp; Food</h4><p>Grain, livestock, USDA &amp; PACA bonds.</p></a>
      </div>
      <div class="is-stat-wrap">
        <div class="is-stat-grid">
          <div class="is-stat-item"><div class="is-stat-num">8,000+</div><div class="is-stat-label">Bond Types</div></div>
          <div class="is-stat-item"><div class="is-stat-num">50</div><div class="is-stat-label">States</div></div>
          <div class="is-stat-item"><div class="is-stat-num">8</div><div class="is-stat-label">Categories</div></div>
          <div class="is-stat-item"><div class="is-stat-num">A+</div><div class="is-stat-label">Rated Sureties</div></div>
        </div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="who-needs">
    <div class="is-inner">
      <span class="is-eyebrow">Eligibility</span>
      <h2>Who Needs a Surety Bond?</h2>
      <p>You may need a surety bond if you operate as a:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Licensed professional</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Contractor or subcontractor</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Retail or wholesale business</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Transportation or logistics operator</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Financial services provider</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Business requiring state, federal, or municipal approval</span></div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="process">
    <div class="is-inner">
      <span class="is-eyebrow">Simple Process</span>
      <h2>How the Surety Bond Process Works</h2>
      <div class="is-steps">
        <div class="is-step"><div class="is-step-num">1</div><div><h3>Complete the Application</h3><p>Submit the quick, 60-second application with your business details.</p></div></div>
        <div class="is-step"><div class="is-step-num">2</div><div><h3>Secure the Lowest Rate</h3><p>We match you with the best rate available from A-rated sureties.</p></div></div>
        <div class="is-step"><div class="is-step-num">3</div><div><h3>Receive Your Bond</h3><p>Same-day issuance available for most bond types.</p></div></div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="faq">
    <div class="is-inner">
      <span class="is-eyebrow">Questions</span>
      <h2>Top Questions About Surety Bonds</h2>
      <div class="is-faq-list">
        <details class="is-faq-item"><summary>How much does a surety bond cost?</summary><div class="is-faq-body"><p>Bond cost depends on the bond amount, your credit profile, and the type of bond required. Most applicants qualify for competitive rates instantly.</p></div></details>
        <details class="is-faq-item"><summary>How long does approval take?</summary><div class="is-faq-body"><p>Many bonds are approved and issued the same day, especially for standard license and permit bonds.</p></div></details>
        <details class="is-faq-item"><summary>What if I don't know which bond I need?</summary><div class="is-faq-body"><p>Browse our bond categories above, or contact our licensed agents who will help match you with the exact bond required for your state, industry, or contract.</p></div></details>
        <details class="is-faq-item"><summary>Do you offer bonds in every state?</summary><div class="is-faq-body"><p>Yes, we are licensed to write bonds nationwide across all 50 states.</p></div></details>
      </div>
    </div>
  </div>

  <div class="is-sec">
    <div class="is-inner">
      <span class="is-eyebrow">Real Results</span>
      <h2>Customer Testimonials</h2>
      <div class="is-testimonials">
        <div class="is-testimonial">
          <p class="is-testimonial-text">Inspire Surety helped us secure multiple bonds across different states. Fast and flawless service.</p>
          <span class="is-testimonial-name">Kara M.</span>
          <span class="is-testimonial-role">Operations Director</span>
        </div>
        <div class="is-testimonial">
          <p class="is-testimonial-text">We needed several unusual bond types. Inspire Surety found them all and issued them quickly.</p>
          <span class="is-testimonial-name">Damon T.</span>
          <span class="is-testimonial-role">Compliance Director</span>
        </div>
        <div class="is-testimonial">
          <p class="is-testimonial-text">As a new business owner, I had no idea which bond I needed. They guided me through everything.</p>
          <span class="is-testimonial-name">Shelly R.</span>
          <span class="is-testimonial-role">Small Business Owner</span>
        </div>
      </div>
    </div>
  </div>

  <div class="is-final-wrap">
    <div class="is-inner">
      <h2>Ready to Get Your Bond?</h2>
      <p>Fast approvals, lowest rates, A-rated surety partners standing by.</p>
      <a href="/pages/contact/" class="is-btn-white">Get Started</a>
    </div>
  </div>

</div>