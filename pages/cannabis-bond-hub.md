---
title: "Cannabis Bond Hub"
layout: "layout.njk"
---

<style>
.is-cn *, .is-cn *::before, .is-cn *::after { box-sizing: border-box; }
.is-cn {
  font-family: inherit;
  color: #0f172a;
  margin: 0 calc(-50vw + 50%);
  width: 100vw;
  padding: 0;
}
.is-cn .is-inner { max-width: 1000px; margin: 0 auto; padding: 0 24px; }

/* ---- HERO: DEEP GREEN / LIME ---- */
.is-cn .is-hero-wrap {
  background: linear-gradient(135deg, #052e16 0%, #166534 60%, #15803d 100%);
  padding: 68px 0 60px;
  position: relative;
  overflow: hidden;
}
.is-cn .is-hero-wrap::before {
  content: "";
  position: absolute;
  top: -100px; right: -100px;
  width: 380px; height: 380px;
  background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
  border-radius: 50%;
}
.is-cn .is-hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
  color: #bef264; font-size: 11px; font-weight: 800; letter-spacing: 0.08em;
  text-transform: uppercase; padding: 6px 16px; border-radius: 999px;
  margin-bottom: 20px; position: relative; z-index: 1;
}
.is-cn .is-hero-wrap h1 {
  font-size: clamp(28px, 4.5vw, 44px) !important; font-weight: 900 !important;
  color: #fff !important; line-height: 1.15 !important; margin: 0 0 16px !important;
  position: relative; z-index: 1; letter-spacing: -0.02em; max-width: 640px;
}
.is-cn .is-hero-wrap p {
  font-size: 16px; color: rgba(255,255,255,0.85); line-height: 1.7;
  max-width: 620px; margin: 0; position: relative; z-index: 1;
}

/* ---- TOC ---- */
.is-cn .is-toc {
  background: #041a0d; border-radius: 20px; padding: 30px 34px;
  margin: -32px auto 0; max-width: 940px; position: relative; z-index: 2;
  box-shadow: 0 20px 50px rgba(0,0,0,0.25);
}
.is-cn .is-toc-title { font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #bef264; margin-bottom: 14px; }
.is-cn .is-toc-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px 24px; }
.is-cn .is-toc-grid a { font-size: 14px; color: #e2e8f0; text-decoration: none; font-weight: 500; display: flex; align-items: center; gap: 8px; }
.is-cn .is-toc-grid a::before { content: "→"; color: #84cc16; }
.is-cn .is-toc-grid a:hover { color: #bef264; }

/* ---- BASE: WHITE CANVAS ---- */
.is-cn .is-sec { background: #fff; padding: 60px 0; }
.is-cn .is-sec + .is-sec { border-top: 1px solid #f1f5f9; }
.is-cn .is-sec h2 { font-size: clamp(21px, 2.6vw, 28px) !important; font-weight: 900 !important; color: #0f172a !important; margin: 0 0 8px !important; letter-spacing: -0.01em; }
.is-cn .is-eyebrow { display: inline-block; font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #15803d; margin-bottom: 10px; }
.is-cn .is-desc { font-size: 15px; color: #64748b; margin: 0 0 26px; max-width: 620px; }

/* ---- WHY LIST ---- */
.is-cn .is-why-list { display: flex; flex-direction: column; gap: 0; margin: 20px 0; max-width: 640px; }
.is-cn .is-why-item { display: flex; align-items: center; gap: 16px; padding: 14px 0; border-bottom: 1px solid #f1f5f9; }
.is-cn .is-why-item:last-child { border-bottom: none; }
.is-cn .is-why-num {
  width: 28px; height: 28px; border-radius: 8px;
  background: #15803d; color: #fff;
  font-size: 12.5px; font-weight: 800;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.is-cn .is-why-item span { font-size: 14.5px; color: #334155; }

/* ---- CORE BOND TYPES: CLEAN CARDS ---- */
.is-cn .is-tile-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0; }
.is-cn .is-tile {
  background: #fff; border: 1px solid #e2e8f0; border-top: 3px solid #15803d;
  border-radius: 12px; padding: 22px 20px; transition: all 0.2s;
}
.is-cn .is-tile:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(0,0,0,0.08); border-top-color: #84cc16; }
.is-cn .is-tile-icon {
  width: 40px; height: 40px; border-radius: 10px; background: #f0fdf4;
  display: flex; align-items: center; justify-content: center; font-size: 19px; margin-bottom: 14px;
}
.is-cn .is-tile h4 { font-size: 14.5px !important; font-weight: 700 !important; color: #0f172a !important; margin: 0 0 6px !important; }
.is-cn .is-tile p { font-size: 13px; color: #64748b; margin: 0; line-height: 1.55; }

/* ---- GUIDE LIST ---- */
.is-cn .is-guide-list { display: flex; flex-direction: column; gap: 0; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; margin: 20px 0; max-width: 700px; }
.is-cn .is-guide-row { display: flex; align-items: center; gap: 14px; padding: 15px 20px; background: #fff; border-bottom: 1px solid #f1f5f9; transition: background 0.15s; }
.is-cn .is-guide-row:last-child { border-bottom: none; }
.is-cn .is-guide-row:hover { background: #f0fdf4; }
.is-cn .is-guide-row a { font-size: 14.5px; color: #1e293b; text-decoration: none; font-weight: 500; flex: 1; }
.is-cn .is-guide-row a:hover { color: #15803d; }
.is-cn .is-guide-arrow { color: #84cc16; flex-shrink: 0; font-size: 15px; }

/* ---- SINGLE PREMIUM MOMENT: DARK STAT BAND ---- */
.is-cn .is-stat-wrap { background: #041a0d; border-radius: 20px; padding: 40px 36px; margin: 24px 0; }
.is-cn .is-stat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.is-cn .is-stat-item { text-align: center; }
.is-cn .is-stat-num { font-size: 32px; font-weight: 900; color: #bef264; line-height: 1; }
.is-cn .is-stat-label { font-size: 12px; color: #cbd5e1; font-weight: 600; margin-top: 8px; }

/* ---- FINAL CTA ---- */
.is-cn .is-final-wrap {
  background: linear-gradient(135deg, #052e16, #166534, #15803d);
  padding: 68px 0; text-align: center; position: relative; overflow: hidden;
}
.is-cn .is-final-wrap::before { content: ""; position: absolute; top: -80px; left: -80px; width: 300px; height: 300px; background: rgba(255,255,255,0.06); border-radius: 50%; }
.is-cn .is-final-wrap::after { content: ""; position: absolute; bottom: -100px; right: -60px; width: 360px; height: 360px; background: rgba(255,255,255,0.04); border-radius: 50%; }
.is-cn .is-final-wrap h2 { font-size: clamp(24px, 3.2vw, 34px) !important; color: #fff !important; margin: 0 0 12px !important; position: relative; z-index: 1; font-weight: 900 !important; }
.is-cn .is-final-wrap p { font-size: 15.5px; color: rgba(255,255,255,0.85); margin: 0 auto 28px; max-width: 460px; position: relative; z-index: 1; }
.is-cn .is-btn-white { display: inline-block; background: #fff; color: #166534 !important; padding: 15px 36px; border-radius: 12px; font-size: 15px; font-weight: 800; text-decoration: none !important; position: relative; z-index: 1; transition: all 0.2s; box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
.is-cn .is-btn-white:hover { background: #f0fdf4; transform: translateY(-3px); }

/* ---- RESPONSIVE ---- */
@media (max-width: 720px) {
  .is-cn .is-toc { margin: -24px 20px 0; padding: 24px 22px; }
  .is-cn .is-toc-grid { grid-template-columns: 1fr; }
  .is-cn .is-tile-grid { grid-template-columns: 1fr; }
  .is-cn .is-stat-grid { grid-template-columns: 1fr; gap: 20px; }
  .is-cn .is-hero-wrap { padding: 44px 0 52px; }
  .is-cn .is-sec { padding: 44px 0; }
}
</style>

<div class="is-cn">

  <div class="is-hero-wrap">
    <div class="is-inner">
      <div class="is-hero-badge">Cannabis Bonds</div>
      <h1>Your Complete Resource for Cannabis Industry Bonds</h1>
      <p>Cannabis bonds protect states, municipalities, and the public by guaranteeing that licensed cannabis businesses comply with tax, regulatory, and operational requirements. This hub organizes all your cannabis-related bond content into one authoritative, easy-to-navigate resource.</p>
    </div>
  </div>

  <div class="is-toc">
    <div class="is-toc-title">On This Page</div>
    <div class="is-toc-grid">
      <a href="#what-are">What Are Cannabis Bonds?</a>
      <a href="#core-types">Core Bond Types</a>
      <a href="#guides">Cannabis Bond Guides</a>
      <a href="#why-matters">Why These Bonds Matter</a>
    </div>
  </div>

  <div class="is-sec" id="what-are">
    <div class="is-inner">
      <span class="is-eyebrow">Overview</span>
      <h2>What Are Cannabis Bonds?</h2>
      <p class="is-desc">Cannabis bonds are surety bonds required by states and municipalities for businesses operating in the cannabis industry. These bonds guarantee that businesses:</p>
      <div class="is-why-list">
        <div class="is-why-item"><div class="is-why-num">1</div><span>Pay required state and local cannabis taxes</span></div>
        <div class="is-why-item"><div class="is-why-num">2</div><span>Comply with state cannabis licensing regulations</span></div>
        <div class="is-why-item"><div class="is-why-num">3</div><span>Operate ethically within the regulated cannabis market</span></div>
        <div class="is-why-item"><div class="is-why-num">4</div><span>Meet financial obligations tied to cultivation and sales licenses</span></div>
        <div class="is-why-item"><div class="is-why-num">5</div><span>Protect the public and government agencies from non-compliance</span></div>
      </div>
      <p style="font-size:14.5px;color:#64748b;margin-top:16px;">Requirements vary significantly by state, as cannabis licensing is regulated at the state and local level.</p>
    </div>
  </div>

  <div class="is-sec" id="core-types">
    <div class="is-inner">
      <span class="is-eyebrow">Core Bond Types</span>
      <h2>Core Types of Cannabis Bonds</h2>
      <p class="is-desc">The most common bonds required across the cannabis industry.</p>
      <div class="is-tile-grid">
        <div class="is-tile"><div class="is-tile-icon">🌿</div><h4>Cannabis License Bonds</h4><p>Required for cultivators, processors, and dispensaries to obtain a state license.</p></div>
        <div class="is-tile"><div class="is-tile-icon">💰</div><h4>Cannabis Tax Bonds</h4><p>Guarantee payment of state and local excise taxes on cannabis sales.</p></div>
        <div class="is-tile"><div class="is-tile-icon">🌱</div><h4>Grower/Cultivator Bonds</h4><p>Required for licensed growers to ensure compliance with cultivation regulations.</p></div>
        <div class="is-tile"><div class="is-tile-icon">🏪</div><h4>Dispensary Bonds</h4><p>Guarantee retail cannabis dispensaries operate within state compliance rules.</p></div>
      </div>

      <div class="is-stat-wrap">
        <div class="is-stat-grid">
          <div class="is-stat-item"><div class="is-stat-num">4+</div><div class="is-stat-label">Core Bond Types</div></div>
          <div class="is-stat-item"><div class="is-stat-num">State</div><div class="is-stat-label">Regulated Coverage</div></div>
          <div class="is-stat-item"><div class="is-stat-num">Multi</div><div class="is-stat-label">State Availability</div></div>
        </div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="guides">
    <div class="is-inner">
      <span class="is-eyebrow">Deep Dives</span>
      <h2>Cannabis Bond Guides</h2>
      <p class="is-desc">Detailed guides on specific cannabis bond types, requirements, and costs.</p>
      <div class="is-guide-list">
        <div class="is-guide-row"><a href="/cannabis-bond-guide/">Cannabis Bond Guide</a><span class="is-guide-arrow">→</span></div>
        <div class="is-guide-row"><a href="/cannabis-bonds/">Cannabis Bonds Overview</a><span class="is-guide-arrow">→</span></div>
        <div class="is-guide-row"><a href="/oklahoma-growers-license-bond/">Oklahoma Growers License Bond Guide</a><span class="is-guide-arrow">→</span></div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="why-matters">
    <div class="is-inner">
      <span class="is-eyebrow">Why It Matters</span>
      <h2>Why Cannabis Businesses Need These Bonds</h2>
      <p class="is-desc">Cannabis bonds help businesses:</p>
      <div class="is-why-list">
        <div class="is-why-item"><div class="is-why-num">1</div><span>Meet state and local licensing requirements</span></div>
        <div class="is-why-item"><div class="is-why-num">2</div><span>Build trust with regulators and municipalities</span></div>
        <div class="is-why-item"><div class="is-why-num">3</div><span>Avoid penalties and license suspension</span></div>
        <div class="is-why-item"><div class="is-why-num">4</div><span>Demonstrate financial responsibility to the state</span></div>
        <div class="is-why-item"><div class="is-why-num">5</div><span>Operate legally within the regulated cannabis market</span></div>
      </div>
    </div>
  </div>

  <div class="is-final-wrap">
    <div class="is-inner">
      <h2>Get Your Cannabis Bond Today</h2>
      <p>Fast approvals. Competitive rates. A-rated surety partners. Licensed where permitted.</p>
      <a href="/contact/" class="is-btn-white">Apply Now</a>
    </div>
  </div>

</div>