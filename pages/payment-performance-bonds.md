---
title: "Payment & Performance Bonds"
layout: "layout.njk"
---

<style>
.is-pp *, .is-pp *::before, .is-pp *::after { box-sizing: border-box; }
.is-pp {
  font-family: inherit;
  color: #0f172a;
  margin: 0 calc(-50vw + 50%);
  width: 100vw;
  padding: 0;
}
.is-pp .is-inner { max-width: 1000px; margin: 0 auto; padding: 0 24px; }

/* ---- HERO: STEEL GRAY + SAFETY AMBER (Construction category) ---- */
.is-pp .is-hero-wrap {
  background: linear-gradient(135deg, #292524 0%, #57534e 45%, #d97706 100%);
  padding: 72px 0 64px;
  position: relative;
  overflow: hidden;
}
.is-pp .is-hero-wrap::before {
  content: "";
  position: absolute;
  top: -100px; right: -100px;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  border-radius: 50%;
}
.is-pp .is-hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.25);
  color: #fed7aa; font-size: 11px; font-weight: 800; letter-spacing: 0.08em;
  text-transform: uppercase; padding: 6px 16px; border-radius: 999px;
  margin-bottom: 20px; position: relative; z-index: 1;
}
.is-pp .is-hero-wrap h1 {
  font-size: clamp(32px, 5vw, 52px) !important; font-weight: 900 !important;
  color: #fff !important; line-height: 1.1 !important; margin: 0 0 12px !important;
  position: relative; z-index: 1; letter-spacing: -0.02em;
}
.is-pp .is-hero-tag { font-size: 17px; color: #fed7aa; font-weight: 700; margin-bottom: 20px; position: relative; z-index: 1; }
.is-pp .is-hero-wrap p { font-size: 16px; color: rgba(255,255,255,0.9); line-height: 1.7; max-width: 600px; margin: 0 0 28px; position: relative; z-index: 1; }
.is-pp .is-btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: #fff; color: #57534e !important;
  padding: 16px 34px; border-radius: 12px;
  font-size: 16px; font-weight: 800;
  text-decoration: none !important; transition: all 0.2s;
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
  position: relative; z-index: 1;
}
.is-pp .is-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.3); }
.is-pp .is-hero-note { font-size: 13px; color: rgba(255,255,255,0.65); margin-top: 14px; position: relative; z-index: 1; }
.is-pp .is-hero-stats { display: flex; gap: 32px; margin-top: 36px; padding-top: 28px; border-top: 1px solid rgba(255,255,255,0.2); position: relative; z-index: 1; flex-wrap: wrap; }
.is-pp .is-hero-stat-num { font-size: 26px; font-weight: 900; color: #fff; line-height: 1; display: block; }
.is-pp .is-hero-stat-label { font-size: 11px; color: rgba(255,255,255,0.7); font-weight: 600; margin-top: 4px; display: block; }

/* ---- TOC ---- */
.is-pp .is-toc {
  background: #1c1917; border-radius: 20px; padding: 32px 36px;
  margin: -36px auto 0; max-width: 940px; position: relative; z-index: 2;
  box-shadow: 0 20px 50px rgba(0,0,0,0.25);
}
.is-pp .is-toc-title { font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #fbbf24; margin-bottom: 16px; }
.is-pp .is-toc-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px 24px; }
.is-pp .is-toc-grid a { font-size: 14px; color: #e2e8f0; text-decoration: none; font-weight: 500; display: flex; align-items: center; gap: 8px; }
.is-pp .is-toc-grid a::before { content: "→"; color: #d97706; }
.is-pp .is-toc-grid a:hover { color: #fbbf24; }

/* ---- SECTIONS: WHITE CANVAS ---- */
.is-pp .is-sec { background: #fff; padding: 64px 0; }
.is-pp .is-sec + .is-sec { border-top: 1px solid #f1f5f9; }
.is-pp .is-sec h2 { font-size: clamp(22px, 2.8vw, 30px) !important; font-weight: 900 !important; color: #0f172a !important; margin: 0 0 16px !important; letter-spacing: -0.01em; }
.is-pp .is-eyebrow { display: inline-block; font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #b45309; margin-bottom: 10px; }
.is-pp .is-sec p { font-size: 15px; color: #475569; line-height: 1.75; margin: 0 0 14px; }

/* ---- CHECKLIST ---- */
.is-pp .is-check-list { display: flex; flex-direction: column; gap: 2px; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; margin: 20px 0; background: #fff; }
.is-pp .is-check-row { display: flex; align-items: center; gap: 12px; padding: 14px 20px; border-bottom: 1px solid #f1f5f9; }
.is-pp .is-check-row:last-child { border-bottom: none; }
.is-pp .is-check-icon { width: 26px; height: 26px; border-radius: 50%; background: #fff7ed; color: #b45309; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; font-weight: 800; }
.is-pp .is-check-row span { font-size: 14.5px; color: #334155; font-weight: 500; }

/* ---- STAT BAND ---- */
.is-pp .is-stat-band { display: flex; background: #fff; border: 1px solid #e2e8f0; border-radius: 18px; overflow: hidden; margin: 24px 0; box-shadow: 0 8px 28px rgba(0,0,0,0.06); }
.is-pp .is-stat-cell { flex: 1; text-align: center; padding: 28px 16px; border-right: 1px solid #f1f5f9; }
.is-pp .is-stat-cell:last-child { border-right: none; }
.is-pp .is-stat-cell-big { background: linear-gradient(135deg, #57534e, #d97706); color: #fff; }
.is-pp .is-stat-num { font-size: 30px; font-weight: 900; color: #57534e; line-height: 1; }
.is-pp .is-stat-cell-big .is-stat-num { color: #fff; }
.is-pp .is-stat-label { font-size: 11.5px; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; margin-top: 8px; }
.is-pp .is-stat-cell-big .is-stat-label { color: rgba(255,255,255,0.85); }

/* ---- STEPS ---- */
.is-pp .is-steps { display: flex; flex-direction: column; gap: 0; margin: 24px 0; }
.is-pp .is-step { display: grid; grid-template-columns: 80px 1fr; gap: 24px; align-items: start; padding: 28px 0; border-bottom: 1px solid #e2e8f0; }
.is-pp .is-step:last-child { border-bottom: none; }
.is-pp .is-step-num { width: 64px; height: 64px; background: linear-gradient(135deg, #57534e, #d97706); border-radius: 18px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 26px; font-weight: 900; flex-shrink: 0; box-shadow: 0 8px 20px rgba(87,83,78,0.3); }
.is-pp .is-step h3 { font-size: 18px !important; font-weight: 800 !important; color: #0f172a !important; margin: 0 0 6px !important; }
.is-pp .is-step p { font-size: 14.5px; color: #475569; margin: 0; line-height: 1.65; }

/* ---- COMPARISON: BID VS PAYMENT VS PERFORMANCE ---- */
.is-pp .is-compare-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 24px 0; }
.is-pp .is-compare-card { background: #1c1917; border-radius: 18px; padding: 28px 26px; color: #fff; }
.is-pp .is-compare-flag { font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #fdba74; margin-bottom: 10px; }
.is-pp .is-compare-card h4 { font-size: 19px !important; font-weight: 800 !important; color: #fff !important; margin: 0 0 12px !important; }
.is-pp .is-compare-card p { font-size: 13.5px; color: #d6d3d1; line-height: 1.65; margin: 0; }

/* ---- WHY US ---- */
.is-pp .is-why-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin: 20px 0; }
.is-pp .is-why-pill { background: #fff; border: 2px solid #e2e8f0; border-radius: 14px; padding: 20px; display: flex; align-items: center; gap: 14px; transition: all 0.2s; }
.is-pp .is-why-pill:hover { border-color: #d97706; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(217,119,6,0.1); }
.is-pp .is-why-icon { width: 40px; height: 40px; border-radius: 10px; background: #fff7ed; color: #b45309; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; font-weight: 800; }
.is-pp .is-why-pill span { font-size: 14px; color: #1e293b; font-weight: 600; }

/* ---- FAQ ---- */
.is-pp .is-faq-list { display: flex; flex-direction: column; gap: 10px; margin: 20px 0; }
.is-pp .is-faq-item { border: 1px solid #e2e8f0; border-radius: 14px; background: #fff; overflow: hidden; }
.is-pp .is-faq-item[open] { border-color: #fdba74; box-shadow: 0 6px 20px rgba(217,119,6,0.1); }
.is-pp .is-faq-item summary { font-size: 15px; font-weight: 700; color: #0f172a; padding: 18px 22px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; list-style: none; gap: 14px; }
.is-pp .is-faq-item summary::-webkit-details-marker { display: none; }
.is-pp .is-faq-item summary::after { content: "+"; font-size: 22px; font-weight: 300; color: #b45309; flex-shrink: 0; transition: transform 0.25s; line-height: 1; }
.is-pp .is-faq-item[open] summary::after { transform: rotate(45deg); }
.is-pp .is-faq-body { padding: 0 22px 20px; }
.is-pp .is-faq-body p { font-size: 14.5px; color: #475569; margin: 0; line-height: 1.7; }

/* ---- FINAL CTA ---- */
.is-pp .is-final-wrap { background: linear-gradient(135deg, #292524, #57534e, #d97706); padding: 72px 0; text-align: center; position: relative; overflow: hidden; }
.is-pp .is-final-wrap::before { content: ""; position: absolute; top: -80px; left: -80px; width: 320px; height: 320px; background: rgba(255,255,255,0.08); border-radius: 50%; }
.is-pp .is-final-wrap::after { content: ""; position: absolute; bottom: -100px; right: -60px; width: 380px; height: 380px; background: rgba(255,255,255,0.05); border-radius: 50%; }
.is-pp .is-final-wrap h2 { font-size: clamp(26px, 3.5vw, 40px) !important; color: #fff !important; margin: 0 0 14px !important; position: relative; z-index: 1; font-weight: 900 !important; }
.is-pp .is-final-wrap p { font-size: 17px; color: rgba(255,255,255,0.9); margin: 0 auto 32px; max-width: 480px; position: relative; z-index: 1; }
.is-pp .is-btn-white { display: inline-block; background: #fff; color: #57534e !important; padding: 17px 40px; border-radius: 12px; font-size: 16px; font-weight: 800; text-decoration: none !important; position: relative; z-index: 1; transition: all 0.2s; box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
.is-pp .is-btn-white:hover { background: #fff7ed; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.25); }

/* ---- RESPONSIVE ---- */
@media (max-width: 720px) {
  .is-pp .is-toc { margin: -24px 20px 0; padding: 24px 22px; }
  .is-pp .is-toc-grid { grid-template-columns: 1fr; }
  .is-pp .is-stat-band { flex-wrap: wrap; }
  .is-pp .is-stat-cell { flex: 1 1 50%; border-bottom: 1px solid #f1f5f9; }
  .is-pp .is-compare-grid { grid-template-columns: 1fr; }
  .is-pp .is-why-grid { grid-template-columns: 1fr; }
  .is-pp .is-hero-stats { flex-wrap: wrap; gap: 20px; }
  .is-pp .is-sec { padding: 44px 0; }
  .is-pp .is-hero-wrap { padding: 48px 0 56px; }
}
</style>

<div class="is-pp">

  <div class="is-hero-wrap">
    <div class="is-inner">
      <div class="is-hero-badge">Construction Bond</div>
      <h1>Payment &amp; Performance Bonds</h1>
      <div class="is-hero-tag">Fast Approval &amp; Lowest Rates</div>
      <p>Fast approvals. Lowest rates. Guaranteed project compliance. Licensed nationwide. A-rated surety partners.</p>
      <a href="https://fc16062.propeller.insure/axelerator-public/#do=show+widget+page&State_search_scheme_property=Arizona&State_search_scheme_property=Federal&name=public+home&one_search_search=payment" class="is-btn-primary">
        Start Your Application
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#57534e" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
      <div class="is-hero-note">100% automated application — apply and get matched instantly.</div>
      <div class="is-hero-stats">
        <div><span class="is-hero-stat-num">100%</span><span class="is-hero-stat-label">Contract Value Guaranteed</span></div>
        <div><span class="is-hero-stat-num">$20M</span><span class="is-hero-stat-label">Program Capacity</span></div>
        <div><span class="is-hero-stat-num">Fast</span><span class="is-hero-stat-label">Digital Issuance</span></div>
      </div>
    </div>
  </div>

  <div class="is-toc">
    <div class="is-toc-title">On This Page</div>
    <div class="is-toc-grid">
      <a href="#what-are">What Are Payment &amp; Performance Bonds?</a>
      <a href="#compare">Payment Bond vs. Performance Bond</a>
      <a href="#who-needs">Who Needs These Bonds?</a>
      <a href="#process">How the Process Works</a>
      <a href="#why-us">Why Choose Us</a>
      <a href="#faq">Frequently Asked Questions</a>
    </div>
  </div>

  <div class="is-sec" id="what-are">
    <div class="is-inner">
      <span class="is-eyebrow">The Basics</span>
      <h2>What Are Payment &amp; Performance Bonds?</h2>
      <p>Payment and performance bonds are construction surety bonds required on public and many private construction projects. Together, they protect project owners, subcontractors, and suppliers from financial loss if a contractor fails to fulfill their contractual obligations.</p>
      <p>These bonds are typically required together as a package, especially on federal, state, and municipal construction contracts under laws such as the Miller Act.</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Guarantee project completion according to contract terms</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Guarantee payment to subcontractors, laborers, and suppliers</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Protect project owners from contractor default</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Required on most public construction contracts</span></div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="compare">
    <div class="is-inner">
      <span class="is-eyebrow">Understanding the Difference</span>
      <h2>Payment Bond vs. Performance Bond</h2>
      <p>While often issued together, these two bonds protect different parties and different risks.</p>
      <div class="is-compare-grid">
        <div class="is-compare-card">
          <div class="is-compare-flag">Payment Bond</div>
          <h4>Protects Subcontractors &amp; Suppliers</h4>
          <p>Guarantees that subcontractors, laborers, and material suppliers are paid for their work on the project — even if the general contractor fails to pay them directly.</p>
        </div>
        <div class="is-compare-card">
          <div class="is-compare-flag">Performance Bond</div>
          <h4>Protects the Project Owner</h4>
          <p>Guarantees that the contractor will complete the project according to the terms of the contract. If the contractor defaults, the surety steps in to ensure completion.</p>
        </div>
      </div>
      <div class="is-stat-band">
        <div class="is-stat-cell"><div class="is-stat-num">100%</div><div class="is-stat-label">Contract Value Typical</div></div>
        <div class="is-stat-cell is-stat-cell-big"><div class="is-stat-num">$20M</div><div class="is-stat-label">Aggregate Capacity</div></div>
        <div class="is-stat-cell"><div class="is-stat-num">Miller Act</div><div class="is-stat-label">Federal Requirement</div></div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="who-needs">
    <div class="is-inner">
      <span class="is-eyebrow">Eligibility</span>
      <h2>Who Needs Payment &amp; Performance Bonds?</h2>
      <p>You likely need these bonds if you are:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>A general contractor awarded a public construction contract</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Bidding on a federal, state, or municipal project</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Required by a private project owner to guarantee completion</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Managing subcontractors and suppliers on a large project</span></div>
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
          <div><h3>Complete the Application</h3><p>Submit our fully automated application with your project and business details.</p></div>
        </div>
        <div class="is-step">
          <div class="is-step-num">2</div>
          <div><h3>Get Matched Instantly</h3><p>Our system matches you with the best rate available from A-rated sureties.</p></div>
        </div>
        <div class="is-step">
          <div class="is-step-num">3</div>
          <div><h3>Receive Your Bonds</h3><p>Fast digital delivery of your payment and performance bond package, ready to file.</p></div>
        </div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="why-us">
    <div class="is-inner">
      <span class="is-eyebrow">Our Advantage</span>
      <h2>Why Choose Us for Your Payment &amp; Performance Bonds</h2>
      <div class="is-why-grid">
        <div class="is-why-pill"><div class="is-why-icon">$</div><span>Lowest rates from A-rated sureties</span></div>
        <div class="is-why-pill"><div class="is-why-icon">⚡</div><span>100% automated application process</span></div>
        <div class="is-why-pill"><div class="is-why-icon">📲</div><span>Fast digital delivery</span></div>
        <div class="is-why-pill"><div class="is-why-icon">🎯</div><span>Construction bond specialists</span></div>
        <div class="is-why-pill"><div class="is-why-icon">✓</div><span>Up to $20M program capacity</span></div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="faq">
    <div class="is-inner">
      <span class="is-eyebrow">Questions</span>
      <h2>Frequently Asked Questions</h2>
      <div class="is-faq-list">
        <details class="is-faq-item"><summary>Are payment and performance bonds always required together?</summary><div class="is-faq-body"><p>On most public projects, yes — federal and many state laws require both bonds together, typically each covering 100% of the contract value.</p></div></details>
        <details class="is-faq-item"><summary>How much do these bonds cost?</summary><div class="is-faq-body"><p>Cost depends on contract value, your credit profile, and financial strength. Rates are typically a small percentage of the total bond amount.</p></div></details>
        <details class="is-faq-item"><summary>How fast can I get bonded?</summary><div class="is-faq-body"><p>Our automated application matches you with a surety instantly, with digital bond delivery available the same day for qualifying applicants.</p></div></details>
        <details class="is-faq-item"><summary>What happens if I default on the contract?</summary><div class="is-faq-body"><p>The surety steps in to ensure the project is completed and that subcontractors and suppliers are paid, then seeks reimbursement from the contractor.</p></div></details>
      </div>
    </div>
  </div>

  <div class="is-final-wrap">
    <div class="is-inner">
      <h2>Ready to Get Bonded?</h2>
      <p>Fast approvals, lowest rates, 100% automated application.</p>
      <a href="https://fc16062.propeller.insure/axelerator-public/#do=show+widget+page&State_search_scheme_property=Arizona&State_search_scheme_property=Federal&name=public+home&one_search_search=payment" class="is-btn-white">Start My Application</a>
    </div>
  </div>

</div>