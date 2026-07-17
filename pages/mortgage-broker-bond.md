---
title: "Mortgage Broker Bond"
layout: "layout.njk"
---

<style>
.is-mb *, .is-mb *::before, .is-mb *::after { box-sizing: border-box; }
.is-mb {
  font-family: inherit;
  color: #0f172a;
  margin: 0 calc(-50vw + 50%);
  width: 100vw;
  padding: 0;
}
.is-mb .is-inner { max-width: 1000px; margin: 0 auto; padding: 0 24px; }

/* ---- HERO: TIER 3 — DERIVED FROM TIER 2 BLUE/SKY (License & Permit lineage) ---- */
.is-mb .is-hero-wrap {
  background: linear-gradient(135deg, #0c1e3d 0%, #2563eb 55%, #38bdf8 100%);
  padding: 72px 0 64px;
  position: relative;
  overflow: hidden;
}
.is-mb .is-hero-wrap::before {
  content: "";
  position: absolute;
  top: -100px; right: -100px;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  border-radius: 50%;
}
.is-mb .is-hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.25);
  color: #bae6fd; font-size: 11px; font-weight: 800; letter-spacing: 0.08em;
  text-transform: uppercase; padding: 6px 16px; border-radius: 999px;
  margin-bottom: 20px; position: relative; z-index: 1;
}
.is-mb .is-hero-wrap h1 {
  font-size: clamp(32px, 5vw, 52px) !important; font-weight: 900 !important;
  color: #fff !important; line-height: 1.1 !important; margin: 0 0 12px !important;
  position: relative; z-index: 1; letter-spacing: -0.02em;
}
.is-mb .is-hero-tag { font-size: 17px; color: #bae6fd; font-weight: 700; margin-bottom: 20px; position: relative; z-index: 1; }
.is-mb .is-hero-wrap p { font-size: 16px; color: rgba(255,255,255,0.9); line-height: 1.7; max-width: 600px; margin: 0 0 28px; position: relative; z-index: 1; }
.is-mb .is-btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: #fff; color: #2563eb !important;
  padding: 16px 34px; border-radius: 12px;
  font-size: 16px; font-weight: 800;
  text-decoration: none !important; transition: all 0.2s;
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
  position: relative; z-index: 1;
}
.is-mb .is-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.3); }
.is-mb .is-hero-note { font-size: 13px; color: rgba(255,255,255,0.65); margin-top: 14px; position: relative; z-index: 1; }
.is-mb .is-hero-stats { display: flex; gap: 32px; margin-top: 36px; padding-top: 28px; border-top: 1px solid rgba(255,255,255,0.2); position: relative; z-index: 1; flex-wrap: wrap; }
.is-mb .is-hero-stat-num { font-size: 26px; font-weight: 900; color: #fff; line-height: 1; display: block; }
.is-mb .is-hero-stat-label { font-size: 11px; color: rgba(255,255,255,0.7); font-weight: 600; margin-top: 4px; display: block; }

/* ---- TOC ---- */
.is-mb .is-toc {
  background: #0c1e3d; border-radius: 20px; padding: 32px 36px;
  margin: -36px auto 0; max-width: 940px; position: relative; z-index: 2;
  box-shadow: 0 20px 50px rgba(0,0,0,0.25);
}
.is-mb .is-toc-title { font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #93c5fd; margin-bottom: 16px; }
.is-mb .is-toc-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px 24px; }
.is-mb .is-toc-grid a { font-size: 14px; color: #e2e8f0; text-decoration: none; font-weight: 500; display: flex; align-items: center; gap: 8px; }
.is-mb .is-toc-grid a::before { content: "→"; color: #38bdf8; }
.is-mb .is-toc-grid a:hover { color: #93c5fd; }

/* ---- SECTIONS: WHITE CANVAS ---- */
.is-mb .is-sec { background: #fff; padding: 64px 0; }
.is-mb .is-sec + .is-sec { border-top: 1px solid #f1f5f9; }
.is-mb .is-sec h2 { font-size: clamp(22px, 2.8vw, 30px) !important; font-weight: 900 !important; color: #0f172a !important; margin: 0 0 16px !important; letter-spacing: -0.01em; }
.is-mb .is-eyebrow { display: inline-block; font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #2563eb; margin-bottom: 10px; }
.is-mb .is-sec p { font-size: 15px; color: #475569; line-height: 1.75; margin: 0 0 14px; }

/* ---- CHECKLIST ---- */
.is-mb .is-check-list { display: flex; flex-direction: column; gap: 2px; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; margin: 20px 0; background: #fff; }
.is-mb .is-check-row { display: flex; align-items: center; gap: 12px; padding: 14px 20px; border-bottom: 1px solid #f1f5f9; }
.is-mb .is-check-row:last-child { border-bottom: none; }
.is-mb .is-check-icon { width: 26px; height: 26px; border-radius: 50%; background: #eff6ff; color: #2563eb; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; font-weight: 800; }
.is-mb .is-check-row span { font-size: 14.5px; color: #334155; font-weight: 500; }

/* ---- STAT BAND ---- */
.is-mb .is-stat-band { display: flex; background: #fff; border: 1px solid #e2e8f0; border-radius: 18px; overflow: hidden; margin: 24px 0; box-shadow: 0 8px 28px rgba(0,0,0,0.06); }
.is-mb .is-stat-cell { flex: 1; text-align: center; padding: 28px 16px; border-right: 1px solid #f1f5f9; }
.is-mb .is-stat-cell:last-child { border-right: none; }
.is-mb .is-stat-cell-big { background: linear-gradient(135deg, #2563eb, #38bdf8); color: #fff; }
.is-mb .is-stat-num { font-size: 30px; font-weight: 900; color: #2563eb; line-height: 1; }
.is-mb .is-stat-cell-big .is-stat-num { color: #fff; }
.is-mb .is-stat-label { font-size: 11.5px; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; margin-top: 8px; }
.is-mb .is-stat-cell-big .is-stat-label { color: rgba(255,255,255,0.85); }

/* ---- STEPS ---- */
.is-mb .is-steps { display: flex; flex-direction: column; gap: 0; margin: 24px 0; }
.is-mb .is-step { display: grid; grid-template-columns: 80px 1fr; gap: 24px; align-items: start; padding: 28px 0; border-bottom: 1px solid #e2e8f0; }
.is-mb .is-step:last-child { border-bottom: none; }
.is-mb .is-step-num { width: 64px; height: 64px; background: linear-gradient(135deg, #2563eb, #38bdf8); border-radius: 18px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 26px; font-weight: 900; flex-shrink: 0; box-shadow: 0 8px 20px rgba(37,99,235,0.35); }
.is-mb .is-step h3 { font-size: 18px !important; font-weight: 800 !important; color: #0f172a !important; margin: 0 0 6px !important; }
.is-mb .is-step p { font-size: 14.5px; color: #475569; margin: 0; line-height: 1.65; }

/* ---- STATE CARDS ---- */
.is-mb .is-state-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 24px 0; }
.is-mb .is-state-card { background: #0c1e3d; border-radius: 18px; padding: 28px 26px; color: #fff; }
.is-mb .is-state-flag { font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #93c5fd; margin-bottom: 10px; }
.is-mb .is-state-card h4 { font-size: 19px !important; font-weight: 800 !important; color: #fff !important; margin: 0 0 12px !important; }
.is-mb .is-state-card p { font-size: 13.5px; color: #cbd5e1; line-height: 1.65; margin: 0 0 16px; }
.is-mb .is-state-card a { font-size: 13.5px; color: #7dd3fc; font-weight: 700; text-decoration: none; }
.is-mb .is-state-card a:hover { text-decoration: underline; }

/* ---- WHY US ---- */
.is-mb .is-why-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin: 20px 0; }
.is-mb .is-why-pill { background: #fff; border: 2px solid #e2e8f0; border-radius: 14px; padding: 20px; display: flex; align-items: center; gap: 14px; transition: all 0.2s; }
.is-mb .is-why-pill:hover { border-color: #38bdf8; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(56,189,248,0.15); }
.is-mb .is-why-icon { width: 40px; height: 40px; border-radius: 10px; background: #eff6ff; color: #2563eb; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; font-weight: 800; }
.is-mb .is-why-pill span { font-size: 14px; color: #1e293b; font-weight: 600; }

/* ---- FAQ ---- */
.is-mb .is-faq-list { display: flex; flex-direction: column; gap: 10px; margin: 20px 0; }
.is-mb .is-faq-item { border: 1px solid #e2e8f0; border-radius: 14px; background: #fff; overflow: hidden; }
.is-mb .is-faq-item[open] { border-color: #93c5fd; box-shadow: 0 6px 20px rgba(37,99,235,0.1); }
.is-mb .is-faq-item summary { font-size: 15px; font-weight: 700; color: #0f172a; padding: 18px 22px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; list-style: none; gap: 14px; }
.is-mb .is-faq-item summary::-webkit-details-marker { display: none; }
.is-mb .is-faq-item summary::after { content: "+"; font-size: 22px; font-weight: 300; color: #2563eb; flex-shrink: 0; transition: transform 0.25s; line-height: 1; }
.is-mb .is-faq-item[open] summary::after { transform: rotate(45deg); }
.is-mb .is-faq-body { padding: 0 22px 20px; }
.is-mb .is-faq-body p { font-size: 14.5px; color: #475569; margin: 0; line-height: 1.7; }

/* ---- FINAL CTA ---- */
.is-mb .is-final-wrap { background: linear-gradient(135deg, #0c1e3d, #2563eb, #38bdf8); padding: 72px 0; text-align: center; position: relative; overflow: hidden; }
.is-mb .is-final-wrap::before { content: ""; position: absolute; top: -80px; left: -80px; width: 320px; height: 320px; background: rgba(255,255,255,0.08); border-radius: 50%; }
.is-mb .is-final-wrap::after { content: ""; position: absolute; bottom: -100px; right: -60px; width: 380px; height: 380px; background: rgba(255,255,255,0.05); border-radius: 50%; }
.is-mb .is-final-wrap h2 { font-size: clamp(26px, 3.5vw, 40px) !important; color: #fff !important; margin: 0 0 14px !important; position: relative; z-index: 1; font-weight: 900 !important; }
.is-mb .is-final-wrap p { font-size: 17px; color: rgba(255,255,255,0.9); margin: 0 auto 32px; max-width: 480px; position: relative; z-index: 1; }
.is-mb .is-btn-white { display: inline-block; background: #fff; color: #2563eb !important; padding: 17px 40px; border-radius: 12px; font-size: 16px; font-weight: 800; text-decoration: none !important; position: relative; z-index: 1; transition: all 0.2s; box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
.is-mb .is-btn-white:hover { background: #eff6ff; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.25); }

/* ---- RESPONSIVE ---- */
@media (max-width: 720px) {
  .is-mb .is-toc { margin: -24px 20px 0; padding: 24px 22px; }
  .is-mb .is-toc-grid { grid-template-columns: 1fr; }
  .is-mb .is-stat-band { flex-wrap: wrap; }
  .is-mb .is-stat-cell { flex: 1 1 50%; border-bottom: 1px solid #f1f5f9; }
  .is-mb .is-state-grid { grid-template-columns: 1fr; }
  .is-mb .is-why-grid { grid-template-columns: 1fr; }
  .is-mb .is-hero-stats { flex-wrap: wrap; gap: 20px; }
  .is-mb .is-sec { padding: 44px 0; }
  .is-mb .is-hero-wrap { padding: 48px 0 56px; }
}
</style>

<div class="is-mb">

  <div class="is-hero-wrap">
    <div class="is-inner">
      <div class="is-hero-badge">License &amp; Permit Bond</div>
      <h1>Mortgage Broker Bond</h1>
      <div class="is-hero-tag">Fast Approval &amp; Lowest Rates</div>
      <p>Fast approvals. Lowest rates. Guaranteed state compliance. Licensed nationwide. A-rated surety partners.</p>
      <a href="https://fc16062.propeller.insure/axelerator-public/#do=show+widget+page&name=public+home&one_search_search=mortgage+broker" class="is-btn-primary">
        Start Your Application
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
      <div class="is-hero-note">100% automated application — apply and get matched instantly.</div>
      <div class="is-hero-stats">
        <div><span class="is-hero-stat-num">$10K–$100K</span><span class="is-hero-stat-label">Bond Range</span></div>
        <div><span class="is-hero-stat-num">1–2 Yrs</span><span class="is-hero-stat-label">Term Length</span></div>
        <div><span class="is-hero-stat-num">Fast</span><span class="is-hero-stat-label">Digital Issuance</span></div>
      </div>
    </div>
  </div>

  <div class="is-toc">
    <div class="is-toc-title">On This Page</div>
    <div class="is-toc-grid">
      <a href="#what-is">What Is a Mortgage Broker Bond?</a>
      <a href="#cost">Bond Amount &amp; Cost</a>
      <a href="#who-needs">Who Needs This Bond?</a>
      <a href="#eligibility">Requirements and Eligibility</a>
      <a href="#process">How the Process Works</a>
      <a href="#states">State-Specific Requirements</a>
      <a href="#why-us">Why Choose Us</a>
      <a href="#faq">Frequently Asked Questions</a>
    </div>
  </div>

  <div class="is-sec" id="what-is">
    <div class="is-inner">
      <span class="is-eyebrow">The Basics</span>
      <h2>What Is a Mortgage Broker Bond?</h2>
      <p>A mortgage broker bond is a state-required surety bond for mortgage brokers and bankers, guaranteeing compliance with state lending laws and consumer protection regulations. The bond ensures that brokers operate honestly, follow licensing requirements, and protect borrowers from fraud or improper lending practices.</p>
      <p>If a mortgage broker violates lending laws, engages in fraud, or fails to fulfill obligations to borrowers, an affected party can file a claim against the bond.</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Guarantees compliance with state lending laws</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Protects borrowers from fraud and improper practices</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Guarantees ethical mortgage broker operations</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Required before a mortgage broker license can be issued</span></div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="cost">
    <div class="is-inner">
      <span class="is-eyebrow">Pricing</span>
      <h2>Mortgage Broker Bond Amount &amp; Cost</h2>
      <p>Bond amounts are set by each state, typically ranging from $10,000 to $100,000 depending on the broker's licensing category and loan volume.</p>
      <div class="is-stat-band">
        <div class="is-stat-cell"><div class="is-stat-num">State</div><div class="is-stat-label">Requirements</div></div>
        <div class="is-stat-cell is-stat-cell-big"><div class="is-stat-num">$10K–$100K</div><div class="is-stat-label">Bond Amount</div></div>
        <div class="is-stat-cell"><div class="is-stat-num">1–2 Yrs</div><div class="is-stat-label">Term Length</div></div>
      </div>
      <p>Premiums depend on the required bond amount, your credit profile, and business history.</p>
      <p style="font-weight:700;color:#2563eb;font-size:16px;">Apply once — your state lookup happens during the application.</p>
    </div>
  </div>

  <div class="is-sec" id="who-needs">
    <div class="is-inner">
      <span class="is-eyebrow">Eligibility</span>
      <h2>Who Needs a Mortgage Broker Bond?</h2>
      <p>You need a mortgage broker bond if you are:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Applying for a new mortgage broker or banker license</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Renewing an existing mortgage license</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Operating as a mortgage loan originator under NMLS requirements</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Expanding your mortgage business into a new state</span></div>
      </div>
      <p>If your state requires an NMLS-licensed mortgage broker, it likely requires this bond.</p>
    </div>
  </div>

  <div class="is-sec" id="eligibility">
    <div class="is-inner">
      <span class="is-eyebrow">Requirements</span>
      <h2>Mortgage Broker Bond Requirements and Eligibility</h2>
      <p>States typically require:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Completed mortgage broker license application</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>State-mandated bond amount, often tied to loan volume</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>NMLS registration</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Renewal typically every 1–2 years</span></div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="process">
    <div class="is-inner">
      <span class="is-eyebrow">Simple Process</span>
      <h2>How the Process Works</h2>
      <div class="is-steps">
        <div class="is-step"><div class="is-step-num">1</div><div><h3>Complete the Application</h3><p>Submit the quick application. Your state lookup happens during the application.</p></div></div>
        <div class="is-step"><div class="is-step-num">2</div><div><h3>Secure the Lowest Rate</h3><p>We match you with the best rate available from A-rated sureties.</p></div></div>
        <div class="is-step"><div class="is-step-num">3</div><div><h3>Receive Your Bond</h3><p>Fast digital delivery for state filing and NMLS submission.</p></div></div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="states">
    <div class="is-inner">
      <span class="is-eyebrow">By State</span>
      <h2>State-Specific Mortgage Broker Bond Requirements</h2>
      <div class="is-state-grid">
        <div class="is-state-card">
          <div class="is-state-flag">Arizona</div>
          <h4>Arizona Mortgage Broker Bond</h4>
          <p>Arizona requires a mortgage broker/banker bond as part of the state licensing process, filed alongside NMLS registration.</p>
          <a href="/pages/mortgage-broker-banker-bond-arizona/">View Arizona Requirements →</a>
        </div>
        <div class="is-state-card">
          <div class="is-state-flag">Nationwide</div>
          <h4>Commercial Mortgage Broker Bond</h4>
          <p>Required for brokers handling commercial real estate financing transactions across multiple states.</p>
          <a href="/pages/commercial-mortgage-broker-bond/">View Commercial Requirements →</a>
        </div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="why-us">
    <div class="is-inner">
      <span class="is-eyebrow">Our Advantage</span>
      <h2>Why Choose Us for Your Mortgage Broker Bond</h2>
      <div class="is-why-grid">
        <div class="is-why-pill"><div class="is-why-icon">$</div><span>Lowest rates from A-rated sureties</span></div>
        <div class="is-why-pill"><div class="is-why-icon">⚡</div><span>Fast, automated application process</span></div>
        <div class="is-why-pill"><div class="is-why-icon">📲</div><span>Instant digital delivery</span></div>
        <div class="is-why-pill"><div class="is-why-icon">🎯</div><span>Mortgage bond specialists</span></div>
        <div class="is-why-pill"><div class="is-why-icon">✓</div><span>100% state compliance guaranteed</span></div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="faq">
    <div class="is-inner">
      <span class="is-eyebrow">Questions</span>
      <h2>Frequently Asked Questions</h2>
      <div class="is-faq-list">
        <details class="is-faq-item"><summary>How much does a mortgage broker bond cost?</summary><div class="is-faq-body"><p>Cost depends on your state's required bond amount, your credit profile, and business history. Premiums are typically a small percentage of the bond amount.</p></div></details>
        <details class="is-faq-item"><summary>How long does approval take?</summary><div class="is-faq-body"><p>Approvals are fast, with instant digital delivery available for most states and licensing categories.</p></div></details>
        <details class="is-faq-item"><summary>What does the bond guarantee?</summary><div class="is-faq-body"><p>The bond guarantees compliance with state lending laws and protects borrowers from fraud or improper mortgage practices.</p></div></details>
        <details class="is-faq-item"><summary>Do I need a separate bond for each state I operate in?</summary><div class="is-faq-body"><p>Yes, most states require a separate mortgage broker bond specific to that state's licensing requirements.</p></div></details>
      </div>
    </div>
  </div>

  <div class="is-final-wrap">
    <div class="is-inner">
      <h2>Ready to Get Your Mortgage Broker Bond?</h2>
      <p>Fast approvals, lowest rates, guaranteed state compliance.</p>
      <a href="https://fc16062.propeller.insure/axelerator-public/#do=show+widget+page&name=public+home&one_search_search=mortgage+broker" class="is-btn-white">Start My Application</a>
    </div>
  </div>

</div>