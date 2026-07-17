---
title: "Guardian Bond"
layout: "layout.njk"
---

<style>
.is-gb *, .is-gb *::before, .is-gb *::after { box-sizing: border-box; }
.is-gb {
  font-family: inherit;
  color: #0f172a;
  margin: 0 calc(-50vw + 50%);
  width: 100vw;
  padding: 0;
}
.is-gb .is-inner { max-width: 1000px; margin: 0 auto; padding: 0 24px; }

/* ---- HERO: DARK SLATE-PLUM + LAVENDER ---- */
.is-gb .is-hero-wrap {
  background: linear-gradient(135deg, #1e1b2e 0%, #44337a 45%, #9333ea 100%);
  padding: 72px 0 64px;
  position: relative;
  overflow: hidden;
}
.is-gb .is-hero-wrap::before {
  content: "";
  position: absolute;
  top: -100px; right: -100px;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  border-radius: 50%;
}
.is-gb .is-hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.22);
  color: #e9d5ff; font-size: 11px; font-weight: 800; letter-spacing: 0.08em;
  text-transform: uppercase; padding: 6px 16px; border-radius: 999px;
  margin-bottom: 20px; position: relative; z-index: 1;
}
.is-gb .is-hero-wrap h1 {
  font-size: clamp(32px, 5vw, 52px) !important; font-weight: 900 !important;
  color: #fff !important; line-height: 1.1 !important; margin: 0 0 12px !important;
  position: relative; z-index: 1; letter-spacing: -0.02em;
}
.is-gb .is-hero-tag { font-size: 17px; color: #d8b4fe; font-weight: 700; margin-bottom: 20px; position: relative; z-index: 1; }
.is-gb .is-hero-wrap p { font-size: 16px; color: rgba(255,255,255,0.88); line-height: 1.7; max-width: 600px; margin: 0 0 28px; position: relative; z-index: 1; }
.is-gb .is-btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: #fff; color: #44337a !important;
  padding: 16px 34px; border-radius: 12px;
  font-size: 16px; font-weight: 800;
  text-decoration: none !important; transition: all 0.2s;
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
  position: relative; z-index: 1;
}
.is-gb .is-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.3); }
.is-gb .is-hero-note { font-size: 13px; color: rgba(255,255,255,0.6); margin-top: 14px; position: relative; z-index: 1; }
.is-gb .is-hero-stats { display: flex; gap: 32px; margin-top: 36px; padding-top: 28px; border-top: 1px solid rgba(255,255,255,0.2); position: relative; z-index: 1; flex-wrap: wrap; }
.is-gb .is-hero-stat-num { font-size: 26px; font-weight: 900; color: #fff; line-height: 1; display: block; }
.is-gb .is-hero-stat-label { font-size: 11px; color: rgba(255,255,255,0.65); font-weight: 600; margin-top: 4px; display: block; }

/* ---- TOC ---- */
.is-gb .is-toc {
  background: #1a1625; border-radius: 20px; padding: 32px 36px;
  margin: -36px auto 0; max-width: 940px; position: relative; z-index: 2;
  box-shadow: 0 20px 50px rgba(0,0,0,0.25);
}
.is-gb .is-toc-title { font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #d8b4fe; margin-bottom: 16px; }
.is-gb .is-toc-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px 24px; }
.is-gb .is-toc-grid a { font-size: 14px; color: #e2e8f0; text-decoration: none; font-weight: 500; display: flex; align-items: center; gap: 8px; }
.is-gb .is-toc-grid a::before { content: "→"; color: #9333ea; }
.is-gb .is-toc-grid a:hover { color: #d8b4fe; }

/* ---- SECTIONS: WHITE CANVAS ---- */
.is-gb .is-sec { background: #fff; padding: 64px 0; }
.is-gb .is-sec + .is-sec { border-top: 1px solid #f1f5f9; }
.is-gb .is-sec h2 { font-size: clamp(22px, 2.8vw, 30px) !important; font-weight: 900 !important; color: #0f172a !important; margin: 0 0 16px !important; letter-spacing: -0.01em; }
.is-gb .is-eyebrow { display: inline-block; font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #6b21a8; margin-bottom: 10px; }
.is-gb .is-sec p { font-size: 15px; color: #475569; line-height: 1.75; margin: 0 0 14px; }

/* ---- CHECKLIST ---- */
.is-gb .is-check-list { display: flex; flex-direction: column; gap: 2px; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; margin: 20px 0; background: #fff; }
.is-gb .is-check-row { display: flex; align-items: center; gap: 12px; padding: 14px 20px; border-bottom: 1px solid #f1f5f9; }
.is-gb .is-check-row:last-child { border-bottom: none; }
.is-gb .is-check-icon { width: 26px; height: 26px; border-radius: 50%; background: #faf5ff; color: #6b21a8; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; font-weight: 800; }
.is-gb .is-check-row span { font-size: 14.5px; color: #334155; font-weight: 500; }

/* ---- STAT BAND ---- */
.is-gb .is-stat-band { display: flex; background: #fff; border: 1px solid #e2e8f0; border-radius: 18px; overflow: hidden; margin: 24px 0; box-shadow: 0 8px 28px rgba(0,0,0,0.06); }
.is-gb .is-stat-cell { flex: 1; text-align: center; padding: 28px 16px; border-right: 1px solid #f1f5f9; }
.is-gb .is-stat-cell:last-child { border-right: none; }
.is-gb .is-stat-cell-big { background: linear-gradient(135deg, #44337a, #9333ea); color: #fff; }
.is-gb .is-stat-num { font-size: 30px; font-weight: 900; color: #44337a; line-height: 1; }
.is-gb .is-stat-cell-big .is-stat-num { color: #fff; }
.is-gb .is-stat-label { font-size: 11.5px; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; margin-top: 8px; }
.is-gb .is-stat-cell-big .is-stat-label { color: rgba(255,255,255,0.85); }

/* ---- STEPS ---- */
.is-gb .is-steps { display: flex; flex-direction: column; gap: 0; margin: 24px 0; }
.is-gb .is-step { display: grid; grid-template-columns: 80px 1fr; gap: 24px; align-items: start; padding: 28px 0; border-bottom: 1px solid #e2e8f0; }
.is-gb .is-step:last-child { border-bottom: none; }
.is-gb .is-step-num { width: 64px; height: 64px; background: linear-gradient(135deg, #44337a, #9333ea); border-radius: 18px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 26px; font-weight: 900; flex-shrink: 0; box-shadow: 0 8px 20px rgba(68,51,122,0.35); }
.is-gb .is-step h3 { font-size: 18px !important; font-weight: 800 !important; color: #0f172a !important; margin: 0 0 6px !important; }
.is-gb .is-step p { font-size: 14.5px; color: #475569; margin: 0; line-height: 1.65; }

/* ---- ROLES/TILES ---- */
.is-gb .is-tile-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0; }
.is-gb .is-tile { background: #fff; border: 1px solid #e2e8f0; border-top: 3px solid #44337a; border-radius: 12px; padding: 22px 20px; transition: all 0.2s; }
.is-gb .is-tile:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(0,0,0,0.08); border-top-color: #9333ea; }
.is-gb .is-tile-icon { width: 40px; height: 40px; border-radius: 10px; background: #faf5ff; display: flex; align-items: center; justify-content: center; font-size: 19px; margin-bottom: 14px; }
.is-gb .is-tile h4 { font-size: 14.5px !important; font-weight: 700 !important; color: #0f172a !important; margin: 0 0 6px !important; }
.is-gb .is-tile p { font-size: 13px; color: #64748b; margin: 0; line-height: 1.55; }

/* ---- WHY US ---- */
.is-gb .is-why-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin: 20px 0; }
.is-gb .is-why-pill { background: #fff; border: 2px solid #e2e8f0; border-radius: 14px; padding: 20px; display: flex; align-items: center; gap: 14px; transition: all 0.2s; }
.is-gb .is-why-pill:hover { border-color: #9333ea; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(147,51,234,0.12); }
.is-gb .is-why-icon { width: 40px; height: 40px; border-radius: 10px; background: #faf5ff; color: #6b21a8; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; font-weight: 800; }
.is-gb .is-why-pill span { font-size: 14px; color: #1e293b; font-weight: 600; }

/* ---- FAQ ---- */
.is-gb .is-faq-list { display: flex; flex-direction: column; gap: 10px; margin: 20px 0; }
.is-gb .is-faq-item { border: 1px solid #e2e8f0; border-radius: 14px; background: #fff; overflow: hidden; }
.is-gb .is-faq-item[open] { border-color: #d8b4fe; box-shadow: 0 6px 20px rgba(147,51,234,0.1); }
.is-gb .is-faq-item summary { font-size: 15px; font-weight: 700; color: #0f172a; padding: 18px 22px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; list-style: none; gap: 14px; }
.is-gb .is-faq-item summary::-webkit-details-marker { display: none; }
.is-gb .is-faq-item summary::after { content: "+"; font-size: 22px; font-weight: 300; color: #6b21a8; flex-shrink: 0; transition: transform 0.25s; line-height: 1; }
.is-gb .is-faq-item[open] summary::after { transform: rotate(45deg); }
.is-gb .is-faq-body { padding: 0 22px 20px; }
.is-gb .is-faq-body p { font-size: 14.5px; color: #475569; margin: 0; line-height: 1.7; }

/* ---- FINAL CTA ---- */
.is-gb .is-final-wrap { background: linear-gradient(135deg, #1e1b2e, #44337a, #9333ea); padding: 72px 0; text-align: center; position: relative; overflow: hidden; }
.is-gb .is-final-wrap::before { content: ""; position: absolute; top: -80px; left: -80px; width: 320px; height: 320px; background: rgba(255,255,255,0.06); border-radius: 50%; }
.is-gb .is-final-wrap::after { content: ""; position: absolute; bottom: -100px; right: -60px; width: 380px; height: 380px; background: rgba(255,255,255,0.04); border-radius: 50%; }
.is-gb .is-final-wrap h2 { font-size: clamp(26px, 3.5vw, 40px) !important; color: #fff !important; margin: 0 0 14px !important; position: relative; z-index: 1; font-weight: 900 !important; }
.is-gb .is-final-wrap p { font-size: 17px; color: rgba(255,255,255,0.88); margin: 0 auto 32px; max-width: 480px; position: relative; z-index: 1; }
.is-gb .is-btn-white { display: inline-block; background: #fff; color: #44337a !important; padding: 17px 40px; border-radius: 12px; font-size: 16px; font-weight: 800; text-decoration: none !important; position: relative; z-index: 1; transition: all 0.2s; box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
.is-gb .is-btn-white:hover { background: #faf5ff; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.25); }

/* ---- RESPONSIVE ---- */
@media (max-width: 720px) {
  .is-gb .is-toc { margin: -24px 20px 0; padding: 24px 22px; }
  .is-gb .is-toc-grid { grid-template-columns: 1fr; }
  .is-gb .is-stat-band { flex-wrap: wrap; }
  .is-gb .is-stat-cell { flex: 1 1 50%; border-bottom: 1px solid #f1f5f9; }
  .is-gb .is-tile-grid { grid-template-columns: 1fr; }
  .is-gb .is-why-grid { grid-template-columns: 1fr; }
  .is-gb .is-hero-stats { flex-wrap: wrap; gap: 20px; }
  .is-gb .is-sec { padding: 44px 0; }
  .is-gb .is-hero-wrap { padding: 48px 0 56px; }
}
</style>

<div class="is-gb">

  <div class="is-hero-wrap">
    <div class="is-inner">
      <div class="is-hero-badge">Court &amp; Fiduciary Bond</div>
      <h1>Guardian Bond</h1>
      <div class="is-hero-tag">Fast Approval &amp; Lowest Rates</div>
      <p>Fast approvals. Lowest rates. Guaranteed court compliance. Licensed nationwide. A-rated surety partners.</p>
      <a href="https://fc16062.propeller.insure/axelerator-public/#do=show+widget+page&State_search_scheme_property=Arizona&State_search_scheme_property=Federal&name=public+home&one_search_search=guardian" class="is-btn-primary">
        Start Your Application
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#44337a" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
      <div class="is-hero-note">100% automated application — apply and get matched instantly.</div>
      <div class="is-hero-stats">
        <div><span class="is-hero-stat-num">Court</span><span class="is-hero-stat-label">Required Coverage</span></div>
        <div><span class="is-hero-stat-num">Fast</span><span class="is-hero-stat-label">Digital Issuance</span></div>
        <div><span class="is-hero-stat-num">50</span><span class="is-hero-stat-label">States Available</span></div>
      </div>
    </div>
  </div>

  <div class="is-toc">
    <div class="is-toc-title">On This Page</div>
    <div class="is-toc-grid">
      <a href="#what-is">What Is a Guardian Bond?</a>
      <a href="#who-needs">Who Needs This Bond?</a>
      <a href="#eligibility">Requirements and Eligibility</a>
      <a href="#process">How the Process Works</a>
      <a href="#why-us">Why Choose Us</a>
      <a href="#faq">Frequently Asked Questions</a>
    </div>
  </div>

  <div class="is-sec" id="what-is">
    <div class="is-inner">
      <span class="is-eyebrow">The Basics</span>
      <h2>What Is a Guardian Bond?</h2>
      <p>A guardian bond is a court-required surety bond for individuals appointed to serve as guardian over a minor or an incapacitated adult. The bond guarantees that the guardian will manage the ward's assets and personal affairs honestly, follow court orders, and act in the ward's best interest at all times.</p>
      <p>If a guardian mismanages funds, neglects their duties, or fails to follow probate or guardianship law, the court or an interested party can file a claim against the bond.</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Guarantees honest management of the ward's assets</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Guarantees compliance with court orders and reporting requirements</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Protects minors and incapacitated persons from mismanagement</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Required before letters of guardianship are issued</span></div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="who-needs">
    <div class="is-inner">
      <span class="is-eyebrow">Eligibility</span>
      <h2>Who Needs a Guardian Bond?</h2>
      <p>You likely need a guardian bond if you are being appointed as:</p>
      <div class="is-tile-grid">
        <div class="is-tile"><div class="is-tile-icon">👶</div><h4>Guardian of a Minor</h4><p>Appointed to care for and manage the affairs of a child.</p></div>
        <div class="is-tile"><div class="is-tile-icon">🧑‍⚕️</div><h4>Guardian of an Incapacitated Adult</h4><p>Appointed to manage personal and financial decisions for an adult unable to do so.</p></div>
        <div class="is-tile"><div class="is-tile-icon">🏦</div><h4>Guardian of the Estate</h4><p>Responsible specifically for managing the ward's financial assets.</p></div>
      </div>
      <div class="is-stat-band">
        <div class="is-stat-cell"><div class="is-stat-num">Estate</div><div class="is-stat-label">Value Determines Bond</div></div>
        <div class="is-stat-cell is-stat-cell-big"><div class="is-stat-num">Court</div><div class="is-stat-label">Ordered Requirement</div></div>
        <div class="is-stat-cell"><div class="is-stat-num">Fast</div><div class="is-stat-label">Digital Issuance</div></div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="eligibility">
    <div class="is-inner">
      <span class="is-eyebrow">Requirements</span>
      <h2>Guardian Bond Requirements and Eligibility</h2>
      <p>Courts typically require:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Court appointment as guardian of a minor or incapacitated person</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Bond amount set by the court, typically based on the ward's estate value</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Completed bond application</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Credit review for larger bond amounts</span></div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="process">
    <div class="is-inner">
      <span class="is-eyebrow">Simple Process</span>
      <h2>How the Process Works</h2>
      <div class="is-steps">
        <div class="is-step">
          <div class="is-step-num">1</div>
          <div><h3>Complete the Application</h3><p>Submit our fully automated application with your court appointment and ward details.</p></div>
        </div>
        <div class="is-step">
          <div class="is-step-num">2</div>
          <div><h3>Get Matched Instantly</h3><p>Our system matches you with the best rate available from A-rated sureties.</p></div>
        </div>
        <div class="is-step">
          <div class="is-step-num">3</div>
          <div><h3>Receive Your Bond</h3><p>Fast digital delivery, ready to file with the guardianship court.</p></div>
        </div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="why-us">
    <div class="is-inner">
      <span class="is-eyebrow">Our Advantage</span>
      <h2>Why Choose Us for Your Guardian Bond</h2>
      <div class="is-why-grid">
        <div class="is-why-pill"><div class="is-why-icon">$</div><span>Lowest rates from A-rated sureties</span></div>
        <div class="is-why-pill"><div class="is-why-icon">⚡</div><span>100% automated application process</span></div>
        <div class="is-why-pill"><div class="is-why-icon">📲</div><span>Fast digital delivery</span></div>
        <div class="is-why-pill"><div class="is-why-icon">🎯</div><span>Guardianship bond specialists</span></div>
        <div class="is-why-pill"><div class="is-why-icon">✓</div><span>100% state compliance guaranteed</span></div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="faq">
    <div class="is-inner">
      <span class="is-eyebrow">Questions</span>
      <h2>Frequently Asked Questions</h2>
      <div class="is-faq-list">
        <details class="is-faq-item"><summary>How much does a guardian bond cost?</summary><div class="is-faq-body"><p>Cost depends on the bond amount set by the court, which is typically based on the value of the ward's estate, along with your credit profile.</p></div></details>
        <details class="is-faq-item"><summary>Can the bond requirement be waived?</summary><div class="is-faq-body"><p>In some cases, courts may waive or reduce the bond requirement depending on the circumstances of the guardianship. The court makes this determination.</p></div></details>
        <details class="is-faq-item"><summary>How fast can I get bonded?</summary><div class="is-faq-body"><p>Our automated application matches you with a surety instantly, with digital bond delivery available the same day for qualifying applicants.</p></div></details>
        <details class="is-faq-item"><summary>What happens if I mismanage the ward's assets?</summary><div class="is-faq-body"><p>The court or an interested party can file a claim against the bond. The surety pays the claim, then seeks reimbursement from the guardian.</p></div></details>
      </div>
    </div>
  </div>

  <div class="is-final-wrap">
    <div class="is-inner">
      <h2>Ready to Get Bonded?</h2>
      <p>Fast approvals, lowest rates, 100% automated application.</p>
      <a href="https://fc16062.propeller.insure/axelerator-public/#do=show+widget+page&State_search_scheme_property=Arizona&State_search_scheme_property=Federal&name=public+home&one_search_search=guardian" class="is-btn-white">Start My Application</a>
    </div>
  </div>

</div>