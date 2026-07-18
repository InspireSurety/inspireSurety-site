---
title: "Our Services"
layout: "layout.njk"
---

<style>
.is-os *, .is-os *::before, .is-os *::after { box-sizing: border-box; }
.is-os {
  font-family: inherit;
  color: #0f172a;
  margin: 0 calc(-50vw + 50%);
  width: 100vw;
  padding: 0;
}
.is-os .is-inner { max-width: 1000px; margin: 0 auto; padding: 0 24px; }

/* ---- HERO: TIER 2 INDIGO (matches Surety Bonds page) ---- */
.is-os .is-hero-wrap {
  background: linear-gradient(135deg, #1e1b4b 0%, #4a3ac8 55%, #7c73f5 100%);
  padding: 72px 0 64px;
  position: relative;
  overflow: hidden;
}
.is-os .is-hero-wrap::before {
  content: "";
  position: absolute;
  top: -100px; right: -100px;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  border-radius: 50%;
}
.is-os .is-hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.25);
  color: #ddd6fe; font-size: 11px; font-weight: 800; letter-spacing: 0.08em;
  text-transform: uppercase; padding: 6px 16px; border-radius: 999px;
  margin-bottom: 20px; position: relative; z-index: 1;
}
.is-os .is-hero-wrap h1 {
  font-size: clamp(32px, 5vw, 52px) !important; font-weight: 900 !important;
  color: #fff !important; line-height: 1.1 !important; margin: 0 0 16px !important;
  position: relative; z-index: 1; letter-spacing: -0.02em;
}
.is-os .is-hero-wrap p { font-size: 16px; color: rgba(255,255,255,0.9); line-height: 1.7; max-width: 620px; margin: 0 0 28px; position: relative; z-index: 1; }
.is-os .is-btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: #fff; color: #4a3ac8 !important;
  padding: 16px 34px; border-radius: 12px;
  font-size: 16px; font-weight: 800;
  text-decoration: none !important; transition: all 0.2s;
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
  position: relative; z-index: 1;
}
.is-os .is-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.3); }
.is-os .is-hero-stats { display: flex; gap: 32px; margin-top: 36px; padding-top: 28px; border-top: 1px solid rgba(255,255,255,0.2); position: relative; z-index: 1; flex-wrap: wrap; }
.is-os .is-hero-stat-num { font-size: 26px; font-weight: 900; color: #fff; line-height: 1; display: block; }
.is-os .is-hero-stat-label { font-size: 11px; color: rgba(255,255,255,0.7); font-weight: 600; margin-top: 4px; display: block; }

/* ---- TOC ---- */
.is-os .is-toc {
  background: #1a1740; border-radius: 20px; padding: 32px 36px;
  margin: -36px auto 0; max-width: 940px; position: relative; z-index: 2;
  box-shadow: 0 20px 50px rgba(0,0,0,0.25);
}
.is-os .is-toc-title { font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #c7d2fe; margin-bottom: 16px; }
.is-os .is-toc-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px 24px; }
.is-os .is-toc-grid a { font-size: 14px; color: #e2e8f0; text-decoration: none; font-weight: 500; display: flex; align-items: center; gap: 8px; }
.is-os .is-toc-grid a::before { content: "→"; color: #7c73f5; }
.is-os .is-toc-grid a:hover { color: #c7d2fe; }

/* ---- SECTIONS: WHITE CANVAS ---- */
.is-os .is-sec { background: #fff; padding: 64px 0; }
.is-os .is-sec + .is-sec { border-top: 1px solid #f1f5f9; }
.is-os .is-sec h2 { font-size: clamp(22px, 2.8vw, 30px) !important; font-weight: 900 !important; color: #0f172a !important; margin: 0 0 16px !important; letter-spacing: -0.01em; }
.is-os .is-eyebrow { display: inline-block; font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #4a3ac8; margin-bottom: 10px; }
.is-os .is-sec p { font-size: 15px; color: #475569; line-height: 1.75; margin: 0 0 14px; }

/* ---- SERVICE TILES ---- */
.is-os .is-tile-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0; }
.is-os .is-tile { background: #fff; border: 1px solid #e2e8f0; border-top: 3px solid #4a3ac8; border-radius: 12px; padding: 22px 20px; transition: all 0.2s; }
.is-os .is-tile:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(0,0,0,0.08); border-top-color: #7c73f5; }
.is-os .is-tile-icon { width: 40px; height: 40px; border-radius: 10px; background: #eef1ff; display: flex; align-items: center; justify-content: center; font-size: 19px; margin-bottom: 14px; }
.is-os .is-tile h4 { font-size: 14.5px !important; font-weight: 700 !important; color: #0f172a !important; margin: 0 0 6px !important; }
.is-os .is-tile p { font-size: 13px; color: #64748b; margin: 0; line-height: 1.55; }

/* ---- CATEGORY CARDS: LINKS TO ALL 8 HUBS ---- */
.is-os .is-cat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin: 24px 0; }
.is-os .is-cat-card { border-radius: 16px; padding: 24px 20px; color: #fff; text-decoration: none; display: block; transition: all 0.25s; }
.is-os .is-cat-card:hover { transform: translateY(-4px); box-shadow: 0 14px 32px rgba(0,0,0,0.18); }
.is-os .is-cat-card h4 { font-size: 14.5px !important; font-weight: 800 !important; color: #fff !important; margin: 0 0 6px !important; }
.is-os .is-cat-card p { font-size: 12px; color: rgba(255,255,255,0.8); margin: 0; line-height: 1.5; }
.is-os .cat-1 { background: linear-gradient(135deg, #1e40af, #0891b2); }
.is-os .cat-2 { background: linear-gradient(135deg, #57534e, #d97706); }
.is-os .cat-3 { background: linear-gradient(135deg, #4c1d95, #9333ea); }
.is-os .cat-4 { background: linear-gradient(135deg, #14532d, #166534); }
.is-os .cat-5 { background: linear-gradient(135deg, #1e293b, #475569); }
.is-os .cat-6 { background: linear-gradient(135deg, #134e4a, #0f766e); }
.is-os .cat-7 { background: linear-gradient(135deg, #166534, #15803d); }
.is-os .cat-8 { background: linear-gradient(135deg, #78350f, #92400e); }

/* ---- WHY US ---- */
.is-os .is-why-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin: 20px 0; }
.is-os .is-why-pill { background: #fff; border: 2px solid #e2e8f0; border-radius: 14px; padding: 20px; display: flex; align-items: center; gap: 14px; transition: all 0.2s; }
.is-os .is-why-pill:hover { border-color: #7c73f5; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(124,115,245,0.15); }
.is-os .is-why-icon { width: 40px; height: 40px; border-radius: 10px; background: #eef1ff; color: #4a3ac8; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; font-weight: 800; }
.is-os .is-why-pill span { font-size: 14px; color: #1e293b; font-weight: 600; }

/* ---- STAT BAND ---- */
.is-os .is-stat-wrap { background: #1a1740; border-radius: 20px; padding: 40px 36px; margin: 24px 0; }
.is-os .is-stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.is-os .is-stat-item { text-align: center; }
.is-os .is-stat-num { font-size: 30px; font-weight: 900; color: #c7d2fe; line-height: 1; }
.is-os .is-stat-label { font-size: 12px; color: #94a3b8; font-weight: 600; margin-top: 8px; }

/* ---- FINAL CTA ---- */
.is-os .is-final-wrap { background: linear-gradient(135deg, #1e1b4b, #4a3ac8, #7c73f5); padding: 72px 0; text-align: center; position: relative; overflow: hidden; }
.is-os .is-final-wrap::before { content: ""; position: absolute; top: -80px; left: -80px; width: 320px; height: 320px; background: rgba(255,255,255,0.08); border-radius: 50%; }
.is-os .is-final-wrap::after { content: ""; position: absolute; bottom: -100px; right: -60px; width: 380px; height: 380px; background: rgba(255,255,255,0.05); border-radius: 50%; }
.is-os .is-final-wrap h2 { font-size: clamp(26px, 3.5vw, 40px) !important; color: #fff !important; margin: 0 0 14px !important; position: relative; z-index: 1; font-weight: 900 !important; }
.is-os .is-final-wrap p { font-size: 17px; color: rgba(255,255,255,0.9); margin: 0 auto 32px; max-width: 480px; position: relative; z-index: 1; }
.is-os .is-btn-white { display: inline-block; background: #fff; color: #4a3ac8 !important; padding: 17px 40px; border-radius: 12px; font-size: 16px; font-weight: 800; text-decoration: none !important; position: relative; z-index: 1; transition: all 0.2s; box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
.is-os .is-btn-white:hover { background: #eef1ff; transform: translateY(-3px); }

/* ---- RESPONSIVE ---- */
@media (max-width: 900px) {
  .is-os .is-tile-grid { grid-template-columns: 1fr; }
  .is-os .is-cat-grid { grid-template-columns: repeat(2, 1fr); }
  .is-os .is-why-grid { grid-template-columns: 1fr; }
  .is-os .is-stat-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
}
@media (max-width: 720px) {
  .is-os .is-toc { margin: -24px 20px 0; padding: 24px 22px; }
  .is-os .is-toc-grid { grid-template-columns: 1fr; }
  .is-os .is-hero-stats { flex-wrap: wrap; gap: 20px; }
  .is-os .is-sec { padding: 44px 0; }
  .is-os .is-hero-wrap { padding: 48px 0 56px; }
}
</style>

<div class="is-os">

  <div class="is-hero-wrap">
    <div class="is-inner">
      <div class="is-hero-badge">Our Services</div>
      <h1>Nationwide Surety Bond Solutions for Every Business Need</h1>
      <p>Inspire Surety provides fast, compliant surety bond solutions for contractors, professionals, and businesses across all 50 states. From license and permit bonds to large-scale construction bonds, we match you with the right bond and the lowest rate available.</p>
      <a href="/surety-bonds/" class="is-btn-primary">
        Browse All Bonds
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4a3ac8" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
      <div class="is-hero-stats">
        <div><span class="is-hero-stat-num">8,000+</span><span class="is-hero-stat-label">Bond Types</span></div>
        <div><span class="is-hero-stat-num">50</span><span class="is-hero-stat-label">States Licensed</span></div>
        <div><span class="is-hero-stat-num">A+</span><span class="is-hero-stat-label">Rated Partners</span></div>
      </div>
    </div>
  </div>

  <div class="is-toc">
    <div class="is-toc-title">On This Page</div>
    <div class="is-toc-grid">
      <a href="#what-we-do">What We Do</a>
      <a href="#categories">Bond Categories We Cover</a>
      <a href="#why-us">Why Choose Inspire Surety</a>
    </div>
  </div>

  <div class="is-sec" id="what-we-do">
    <div class="is-inner">
      <span class="is-eyebrow">Overview</span>
      <h2>What We Do</h2>
      <p>We connect businesses, contractors, and professionals with the exact surety bond they need — fast, affordable, and fully compliant with state and federal requirements. Whether you need a single license bond or an account-based program covering multiple states, our team and technology streamline the entire process.</p>
      <div class="is-tile-grid">
        <div class="is-tile"><div class="is-tile-icon">⚡</div><h4>Fast Issuance</h4><p>Prequalification and bond issuance for bids, permits, and contract starts.</p></div>
        <div class="is-tile"><div class="is-tile-icon">✅</div><h4>License Compliance</h4><p>Streamlined contractor license bond support across every profession.</p></div>
        <div class="is-tile"><div class="is-tile-icon">🛡️</div><h4>Business Protection</h4><p>Fidelity bond options to safeguard companies from employee dishonesty.</p></div>
        <div class="is-tile"><div class="is-tile-icon">🌎</div><h4>Nationwide Coverage</h4><p>Compliant documentation supporting multi-jurisdictional filings.</p></div>
        <div class="is-tile"><div class="is-tile-icon">💰</div><h4>Lowest Rates</h4><p>Competitive pricing from A-rated surety partners nationwide.</p></div>
        <div class="is-tile"><div class="is-tile-icon">📲</div><h4>Digital Delivery</h4><p>Fast, fully automated application and issuance process.</p></div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="categories">
    <div class="is-inner">
      <span class="is-eyebrow">Explore</span>
      <h2>Bond Categories We Cover</h2>
      <p>Find your bond category and explore requirements, guides, and applications.</p>
      <div class="is-cat-grid">
        <a href="/license-permit-bond-hub/" class="is-cat-card cat-1"><h4>License &amp; Permit</h4><p>Auto dealer, notary, mortgage broker &amp; more.</p></a>
        <a href="/contractors-construction-bond-hub/" class="is-cat-card cat-2"><h4>Construction</h4><p>Bid, performance, payment &amp; contractor bonds.</p></a>
        <a href="/court-fiduciary-bond-hub/" class="is-cat-card cat-3"><h4>Court &amp; Fiduciary</h4><p>Probate, guardian, trustee &amp; public official bonds.</p></a>
        <a href="/environmental-reclamation-bond-hub/" class="is-cat-card cat-4"><h4>Environmental</h4><p>Reclamation, oil &amp; gas, remediation bonds.</p></a>
        <a href="/federal-blm-bond-hub/" class="is-cat-card cat-5"><h4>Federal &amp; BLM</h4><p>BLM, U.S. Customs, USDA &amp; federal bonds.</p></a>
        <a href="/escrow-real-estate-bond-hub/" class="is-cat-card cat-6"><h4>Escrow &amp; Real Estate</h4><p>Escrow agent, title &amp; mortgage broker bonds.</p></a>
        <a href="/cannabis-bond-hub/" class="is-cat-card cat-7"><h4>Cannabis</h4><p>License, tax &amp; cultivator bonds.</p></a>
        <a href="/agriculture-food-bond-hub/" class="is-cat-card cat-8"><h4>Agriculture &amp; Food</h4><p>Grain, livestock, USDA &amp; PACA bonds.</p></a>
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

  <div class="is-sec" id="why-us">
    <div class="is-inner">
      <span class="is-eyebrow">Our Advantage</span>
      <h2>Why Choose Inspire Surety</h2>
      <div class="is-why-grid">
        <div class="is-why-pill"><div class="is-why-icon">$</div><span>Lowest rates from A-rated sureties</span></div>
        <div class="is-why-pill"><div class="is-why-icon">⚡</div><span>Fast, automated application process</span></div>
        <div class="is-why-pill"><div class="is-why-icon">📲</div><span>Instant digital delivery</span></div>
        <div class="is-why-pill"><div class="is-why-icon">🎯</div><span>Specialists across 8 bond categories</span></div>
        <div class="is-why-pill"><div class="is-why-icon">🌎</div><span>Licensed nationwide in all 50 states</span></div>
        <div class="is-why-pill"><div class="is-why-icon">✓</div><span>100% state compliance guaranteed</span></div>
      </div>
    </div>
  </div>

  <div class="is-final-wrap">
    <div class="is-inner">
      <h2>Ready to Get Bonded?</h2>
      <p>Fast approvals, lowest rates, A-rated surety partners standing by.</p>
      <a href="/contact/" class="is-btn-white">Get Started</a>
    </div>
  </div>

</div>