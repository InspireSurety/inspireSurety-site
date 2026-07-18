---
title: "Ocean Transport Bonds"
layout: "layout.njk"
---

<style>
.is-ot *, .is-ot *::before, .is-ot *::after { box-sizing: border-box; }
.is-ot {
  font-family: inherit;
  color: #0f172a;
  margin: 0 calc(-50vw + 50%);
  width: 100vw;
  padding: 0;
}
.is-ot .is-inner { max-width: 1000px; margin: 0 auto; padding: 0 24px; }

.is-ot .is-hero-wrap {
  background: linear-gradient(135deg, #0c1e3d 0%, #2563eb 55%, #38bdf8 100%);
  padding: 72px 0 64px;
  position: relative;
  overflow: hidden;
}
.is-ot .is-hero-wrap::before {
  content: "";
  position: absolute;
  top: -100px; right: -100px;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  border-radius: 50%;
}
.is-ot .is-hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.25);
  color: #bae6fd; font-size: 11px; font-weight: 800; letter-spacing: 0.08em;
  text-transform: uppercase; padding: 6px 16px; border-radius: 999px;
  margin-bottom: 20px; position: relative; z-index: 1;
}
.is-ot .is-hero-wrap h1 {
  font-size: clamp(30px, 4.8vw, 50px) !important; font-weight: 900 !important;
  color: #fff !important; line-height: 1.1 !important; margin: 0 0 12px !important;
  position: relative; z-index: 1; letter-spacing: -0.02em;
}
.is-ot .is-hero-wrap p { font-size: 16px; color: rgba(255,255,255,0.9); line-height: 1.7; max-width: 620px; margin: 0 0 28px; position: relative; z-index: 1; }
.is-ot .is-btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: #fff; color: #2563eb !important;
  padding: 16px 34px; border-radius: 12px;
  font-size: 16px; font-weight: 800;
  text-decoration: none !important; transition: all 0.2s;
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
  position: relative; z-index: 1;
}
.is-ot .is-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.3); }

.is-ot .is-toc {
  background: #0c1e3d; border-radius: 20px; padding: 32px 36px;
  margin: -36px auto 0; max-width: 940px; position: relative; z-index: 2;
  box-shadow: 0 20px 50px rgba(0,0,0,0.25);
}
.is-ot .is-toc-title { font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #93c5fd; margin-bottom: 16px; }
.is-ot .is-toc-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px 24px; }
.is-ot .is-toc-grid a { font-size: 14px; color: #e2e8f0; text-decoration: none; font-weight: 500; display: flex; align-items: center; gap: 8px; }
.is-ot .is-toc-grid a::before { content: "→"; color: #38bdf8; }
.is-ot .is-toc-grid a:hover { color: #93c5fd; }

.is-ot .is-sec { background: #fff; padding: 64px 0; }
.is-ot .is-sec + .is-sec { border-top: 1px solid #f1f5f9; }
.is-ot .is-sec h2 { font-size: clamp(22px, 2.8vw, 30px) !important; font-weight: 900 !important; color: #0f172a !important; margin: 0 0 16px !important; letter-spacing: -0.01em; }
.is-ot .is-eyebrow { display: inline-block; font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #2563eb; margin-bottom: 10px; }
.is-ot .is-sec p { font-size: 15px; color: #475569; line-height: 1.75; margin: 0 0 14px; }

.is-ot .is-check-list { display: flex; flex-direction: column; gap: 2px; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; margin: 20px 0; background: #fff; }
.is-ot .is-check-row { display: flex; align-items: center; gap: 12px; padding: 14px 20px; border-bottom: 1px solid #f1f5f9; }
.is-ot .is-check-row:last-child { border-bottom: none; }
.is-ot .is-check-icon { width: 26px; height: 26px; border-radius: 50%; background: #eff6ff; color: #2563eb; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; font-weight: 800; }
.is-ot .is-check-row span { font-size: 14.5px; color: #334155; font-weight: 500; }

.is-ot .is-bondtype-card {
  background: #fff; border: 1px solid #e2e8f0; border-top: 3px solid #2563eb;
  border-radius: 14px; padding: 24px 26px; margin-bottom: 16px;
}
.is-ot .is-bondtype-num {
  display: inline-flex; align-items: center; justify-content: center;
  width: 32px; height: 32px; border-radius: 10px;
  background: #1e40af; color: #fff; font-size: 14px; font-weight: 900;
  margin-bottom: 12px;
}
.is-ot .is-bondtype-card h3 { font-size: 17px !important; font-weight: 800 !important; color: #0f172a !important; margin: 0 0 8px !important; }
.is-ot .is-bondtype-card p { margin: 0 0 10px; }
.is-ot .is-bondtype-pills { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
.is-ot .is-bondtype-pill { background: #eff6ff; color: #1e40af; font-size: 13px; font-weight: 700; padding: 7px 16px; border-radius: 999px; border: 1px solid #bfdbfe; }

.is-ot .is-steps { display: flex; flex-direction: column; gap: 0; margin: 24px 0; }
.is-ot .is-step { display: grid; grid-template-columns: 80px 1fr; gap: 24px; align-items: start; padding: 28px 0; border-bottom: 1px solid #e2e8f0; }
.is-ot .is-step:last-child { border-bottom: none; }
.is-ot .is-step-num { width: 64px; height: 64px; background: linear-gradient(135deg, #2563eb, #38bdf8); border-radius: 18px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 26px; font-weight: 900; flex-shrink: 0; box-shadow: 0 8px 20px rgba(37,99,235,0.35); }
.is-ot .is-step h3 { font-size: 18px !important; font-weight: 800 !important; color: #0f172a !important; margin: 0 0 6px !important; }
.is-ot .is-step p { font-size: 14.5px; color: #475569; margin: 0; line-height: 1.65; }

.is-ot .is-why-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin: 20px 0; }
.is-ot .is-why-pill { background: #fff; border: 2px solid #e2e8f0; border-radius: 14px; padding: 20px; display: flex; align-items: center; gap: 14px; transition: all 0.2s; }
.is-ot .is-why-pill:hover { border-color: #38bdf8; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(56,189,248,0.15); }
.is-ot .is-why-icon { width: 40px; height: 40px; border-radius: 10px; background: #eff6ff; color: #2563eb; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; font-weight: 800; }
.is-ot .is-why-pill span { font-size: 14px; color: #1e293b; font-weight: 600; }

.is-ot .is-faq-list { display: flex; flex-direction: column; gap: 10px; margin: 20px 0; }
.is-ot .is-faq-item { border: 1px solid #e2e8f0; border-radius: 14px; background: #fff; overflow: hidden; }
.is-ot .is-faq-item[open] { border-color: #93c5fd; box-shadow: 0 6px 20px rgba(37,99,235,0.1); }
.is-ot .is-faq-item summary { font-size: 15px; font-weight: 700; color: #0f172a; padding: 18px 22px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; list-style: none; gap: 14px; }
.is-ot .is-faq-item summary::-webkit-details-marker { display: none; }
.is-ot .is-faq-item summary::after { content: "+"; font-size: 22px; font-weight: 300; color: #2563eb; flex-shrink: 0; transition: transform 0.25s; line-height: 1; }
.is-ot .is-faq-item[open] summary::after { transform: rotate(45deg); }
.is-ot .is-faq-body { padding: 0 22px 20px; }
.is-ot .is-faq-body p { font-size: 14.5px; color: #475569; margin: 0; line-height: 1.7; }

.is-ot .is-testimonials { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 24px 0; }
.is-ot .is-testimonial { background: #fff; border-radius: 16px; padding: 24px 22px; position: relative; box-shadow: 0 4px 16px rgba(0,0,0,0.05); border-top: 3px solid #2563eb; }
.is-ot .is-testimonial::before { content: '"'; position: absolute; top: 8px; right: 20px; font-size: 48px; color: #eff6ff; font-family: Georgia, serif; line-height: 1; }
.is-ot .is-testimonial-text { font-size: 14px; color: #334155; line-height: 1.65; font-style: italic; margin: 0 0 14px; position: relative; z-index: 1; }
.is-ot .is-testimonial-name { font-weight: 700; color: #1e293b; font-size: 14px; display: block; }
.is-ot .is-testimonial-role { font-size: 12px; color: #94a3b8; }

.is-ot .is-hub-links { display: flex; flex-wrap: wrap; gap: 10px; margin: 20px 0 24px; }
.is-ot .is-hub-links a { font-size: 13.5px; color: #1e40af; background: #eff6ff; border: 1px solid #bfdbfe; padding: 10px 18px; border-radius: 999px; text-decoration: none; font-weight: 600; transition: all 0.15s; }
.is-ot .is-hub-links a:hover { background: #2563eb; color: #fff; border-color: #2563eb; }

.is-ot .is-final-wrap { background: linear-gradient(135deg, #0c1e3d, #2563eb, #38bdf8); padding: 72px 0; text-align: center; position: relative; overflow: hidden; }
.is-ot .is-final-wrap::before { content: ""; position: absolute; top: -80px; left: -80px; width: 320px; height: 320px; background: rgba(255,255,255,0.08); border-radius: 50%; }
.is-ot .is-final-wrap::after { content: ""; position: absolute; bottom: -100px; right: -60px; width: 380px; height: 380px; background: rgba(255,255,255,0.05); border-radius: 50%; }
.is-ot .is-final-wrap h2 { font-size: clamp(26px, 3.5vw, 40px) !important; color: #fff !important; margin: 0 0 14px !important; position: relative; z-index: 1; font-weight: 900 !important; }
.is-ot .is-final-wrap p { font-size: 17px; color: rgba(255,255,255,0.9); margin: 0 auto 32px; max-width: 480px; position: relative; z-index: 1; }
.is-ot .is-btn-white { display: inline-block; background: #fff; color: #2563eb !important; padding: 17px 40px; border-radius: 12px; font-size: 16px; font-weight: 800; text-decoration: none !important; position: relative; z-index: 1; transition: all 0.2s; box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
.is-ot .is-btn-white:hover { background: #eff6ff; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.25); }

@media (max-width: 720px) {
  .is-ot .is-toc { margin: -24px 20px 0; padding: 24px 22px; }
  .is-ot .is-toc-grid { grid-template-columns: 1fr; }
  .is-ot .is-why-grid { grid-template-columns: 1fr; }
  .is-ot .is-testimonials { grid-template-columns: 1fr; }
  .is-ot .is-sec { padding: 44px 0; }
  .is-ot .is-hero-wrap { padding: 48px 0 56px; }
}
</style>

<div class="is-ot">

  <div class="is-hero-wrap">
    <div class="is-inner">
      <div class="is-hero-badge">License &amp; Permit Bond</div>
      <h1>Ocean Transport Bonds (FMC-48 &amp; FMC-69)</h1>
      <p>Get Your FMC Bond Today. Fast approvals. Lowest rates. Guaranteed FMC compliance. Licensed nationwide. A-rated surety partners.</p>
      <a href="https://fc16062.propeller.insure/axelerator-public/#do=show+widget+page&name=public+home&one_search_search=ocean+transport" class="is-btn-primary">
        Start Your Application
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>
  </div>

  <div class="is-toc">
    <div class="is-toc-title">On This Page</div>
    <div class="is-toc-grid">
      <a href="#what-are">What Are Ocean Transport Bonds?</a>
      <a href="#types">Types of FMC Bonds We Provide</a>
      <a href="#cost">Bond Amounts and Cost</a>
      <a href="#who-needs">Who Needs an FMC Bond</a>
      <a href="#eligibility">Requirements &amp; Eligibility</a>
      <a href="#process">How the Process Works</a>
      <a href="#why-us">Why Ocean Transport Companies Choose Us</a>
      <a href="#faq">Top Questions Answered</a>
    </div>
  </div>

  <div class="is-sec">
    <div class="is-inner">
      <p>An FMC bond protects shippers from financial loss and ensures your company follows all Federal Maritime Commission regulations. Whether you operate as an NVOCC, foreign-based NVOCC, or Ocean Freight Forwarder, this bond is essential for maintaining your authority.</p>
      <p>With an active FMC-approved bond on file, you demonstrate financial responsibility, ethical business practices, and full compliance with federal maritime rules. It also reassures your clients that their cargo, payments, and claims are handled with integrity and professionalism.</p>
      <p>Need help with a license or permit bond? Explore our <a href="/license-permit-bond-hub/" style="color:#2563eb;font-weight:700;">License &amp; Permit Bond Hub</a> for state-specific requirements and application guides.</p>
    </div>
  </div>

  <div class="is-sec" id="what-are">
    <div class="is-inner">
      <span class="is-eyebrow">Overview</span>
      <h2>What Are Ocean Transport Bonds (FMC-48 &amp; FMC-69)</h2>
      <p>Ocean Transport Bonds are federal surety bonds required by the Federal Maritime Commission (FMC) for companies operating as:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Ocean Freight Forwarders (OFFs)</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Non-Vessel-Operating Common Carriers (NVOCCs)</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Foreign-based NVOCCs</span></div>
      </div>
      <p>These bonds ensure compliance with FMC regulations and protect shippers from financial loss due to:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Failure to pay claims</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Misrepresentation of cargo services</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Violations of FMC rules</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Loss or damage caused by improper handling</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Unethical or fraudulent business practices</span></div>
      </div>
      <p>If you're applying for or renewing your FMC license or registration, you must have an active FMC-approved bond on file.</p>
    </div>
  </div>

  <div class="is-sec" id="types">
    <div class="is-inner">
      <span class="is-eyebrow">Bond Types</span>
      <h2>Types of FMC Bonds We Provide</h2>

      <div class="is-bondtype-card">
        <div class="is-bondtype-num">1</div>
        <h3>FMC-48 Bond (Ocean Freight Forwarder Bond)</h3>
        <p>Required for Ocean Freight Forwarders (OFFs). Guarantees compliance with FMC regulations and proper handling of freight forwarding services.</p>
        <p style="margin-bottom:6px;"><strong>Typical bond amount:</strong></p>
        <div class="is-bondtype-pills">
          <span class="is-bondtype-pill">$50,000 for U.S.-based OFFs</span>
        </div>
      </div>

      <div class="is-bondtype-card">
        <div class="is-bondtype-num">2</div>
        <h3>FMC-69 Bond (NVOCC Bond)</h3>
        <p>Required for Non-Vessel-Operating Common Carriers (NVOCCs). Protects shippers from financial loss due to NVOCC misconduct or regulatory violations.</p>
        <p style="margin-bottom:6px;"><strong>Typical bond amounts:</strong></p>
        <div class="is-bondtype-pills">
          <span class="is-bondtype-pill">$75,000 for U.S.-based NVOCCs</span>
          <span class="is-bondtype-pill">$150,000 for foreign-based NVOCCs</span>
        </div>
        <p style="margin-top:10px;">Some foreign NVOCCs may require additional coverage depending on FMC rules.</p>
      </div>
    </div>
  </div>

  <div class="is-sec" id="cost">
    <div class="is-inner">
      <span class="is-eyebrow">Pricing</span>
      <h2>Ocean Transport Bond Amounts and Cost</h2>
      <p>Bond amounts are set by the FMC. Your annual premium depends on:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Bond type (FMC-48 or FMC-69)</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Credit score</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Business financials</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Years in operation</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Claims history</span></div>
      </div>
      <p style="font-weight:700;color:#2563eb;font-size:16px;">Most FMC-regulated companies qualify quickly with competitive rates.</p>
    </div>
  </div>

  <div class="is-sec" id="who-needs">
    <div class="is-inner">
      <span class="is-eyebrow">Eligibility</span>
      <h2>Who Needs an FMC Bond</h2>
      <p>You may need an FMC bond if you operate as:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>An Ocean Freight Forwarder (OFF)</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>A U.S.-based NVOCC</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>A foreign-based NVOCC</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>A logistics provider offering ocean transport services</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>A freight intermediary handling international cargo</span></div>
      </div>
      <p>Any business arranging or transporting cargo by ocean must maintain an active FMC bond.</p>
    </div>
  </div>

  <div class="is-sec" id="eligibility">
    <div class="is-inner">
      <span class="is-eyebrow">Requirements</span>
      <h2>FMC Bond Requirements &amp; Eligibility</h2>
      <p>The FMC requires:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Completed FMC license or registration</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>FMC-mandated bond amount</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Credit review</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Annual renewal</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Continuous bond coverage to maintain active status</span></div>
      </div>
      <p>Failure to maintain your bond can result in suspension or revocation of your FMC authority.</p>
    </div>
  </div>

  <div class="is-sec" id="process">
    <div class="is-inner">
      <span class="is-eyebrow">Simple Process</span>
      <h2>How the FMC Bond Process Works</h2>
      <div class="is-steps">
        <div class="is-step"><div class="is-step-num">1</div><div><h3>Complete the Application</h3><p>Submit the quick, 60-second application.</p></div></div>
        <div class="is-step"><div class="is-step-num">2</div><div><h3>Secure the Lowest Rate</h3><p>We match you with the best rate available from A-rated sureties.</p></div></div>
        <div class="is-step"><div class="is-step-num">3</div><div><h3>Receive Your Bond</h3><p>Same-day issuance available for FMC filing.</p></div></div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="why-us">
    <div class="is-inner">
      <span class="is-eyebrow">Our Advantage</span>
      <h2>Why Ocean Transport Companies Choose Us</h2>
      <div class="is-why-grid">
        <div class="is-why-pill"><div class="is-why-icon">$</div><span>Lowest rates from A-rated sureties</span></div>
        <div class="is-why-pill"><div class="is-why-icon">⚡</div><span>Fast approvals</span></div>
        <div class="is-why-pill"><div class="is-why-icon">📲</div><span>Digital delivery for immediate FMC filing</span></div>
        <div class="is-why-pill"><div class="is-why-icon">🎯</div><span>Ocean-transport bond specialists</span></div>
        <div class="is-why-pill"><div class="is-why-icon">✓</div><span>100% federal compliance guaranteed</span></div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="faq">
    <div class="is-inner">
      <span class="is-eyebrow">Questions</span>
      <h2>Top FMC Bond Questions Answered</h2>
      <p>Our most common questions answered efficiently.</p>
      <div class="is-faq-list">
        <details class="is-faq-item"><summary>How much does an FMC bond cost?</summary><div class="is-faq-body"><p>Costs depend on bond type (FMC-48 or FMC-69), credit score, business financials, years in operation, and claims history.</p></div></details>
        <details class="is-faq-item"><summary>How long does approval take?</summary><div class="is-faq-body"><p>Approvals are fast, with same-day issuance available for FMC filing.</p></div></details>
        <details class="is-faq-item"><summary>What does an FMC bond guarantee?</summary><div class="is-faq-body"><p>The bond guarantees payment of claims, ethical business practices, and compliance with FMC regulations, protecting shippers from financial loss.</p></div></details>
        <details class="is-faq-item"><summary>Can the bond be refunded?</summary><div class="is-faq-body"><p>Refund policies vary by surety. Contact us for specifics on your FMC bond.</p></div></details>
        <details class="is-faq-item"><summary>Do foreign NVOCCs need a higher bond?</summary><div class="is-faq-body"><p>Yes — foreign-based NVOCCs typically require a $150,000 bond, compared to $75,000 for U.S.-based NVOCCs, and some may require additional coverage.</p></div></details>
      </div>
    </div>
  </div>

  <div class="is-sec">
    <div class="is-inner">
      <span class="is-eyebrow">Real Results</span>
      <h2>Customer Testimonials</h2>
      <p>What our customers are saying about us.</p>
      <div class="is-testimonials">
        <div class="is-testimonial"><p class="is-testimonial-text">Inspire Surety handled our FMC-48 bond quickly and professionally. We were licensed and operational without delays.</p><span class="is-testimonial-name">Priya D.</span><span class="is-testimonial-role">Ocean Freight Forwarder</span></div>
        <div class="is-testimonial"><p class="is-testimonial-text">Our NVOCC needed a high-value FMC-69 bond. Inspire Surety delivered excellent rates and fast approval.</p><span class="is-testimonial-name">Tootsie W.</span><span class="is-testimonial-role">NVOCC Owner</span></div>
        <div class="is-testimonial"><p class="is-testimonial-text">We rely on Inspire Surety for all FMC compliance bonds across our logistics network. Their expertise is unmatched.</p><span class="is-testimonial-name">Brian W.</span><span class="is-testimonial-role">Freight Forwarder</span></div>
        <div class="is-testimonial"><p class="is-testimonial-text">When expanding into international shipping, Inspire Surety secured our FMC bonds with ease. Outstanding service.</p><span class="is-testimonial-name">Julia R.</span><span class="is-testimonial-role">NVOCC Owner</span></div>
        <div class="is-testimonial"><p class="is-testimonial-text">As a new NVOCC, we needed clear guidance. Inspire Surety walked us through every step and delivered our bond instantly.</p><span class="is-testimonial-name">Leonard B.</span><span class="is-testimonial-role">NVOCC Owner</span></div>
        <div class="is-testimonial"><p class="is-testimonial-text">Their service is exceptional. Our FMC-48 bond was filed the same day, keeping our license active.</p><span class="is-testimonial-name">Carla J.</span><span class="is-testimonial-role">Ocean Freight Forwarder</span></div>
      </div>
    </div>
  </div>

  <div class="is-sec">
    <div class="is-inner">
      <span class="is-eyebrow">Explore More</span>
      <h2>Surety Bond Hubs</h2>
      <div class="is-hub-links">
        <a href="/contractors-construction-bond-hub/">Contractors &amp; Construction Bond Hub</a>
        <a href="/court-fiduciary-bond-hub/">Court &amp; Fiduciary Bond Hub</a>
        <a href="/cannabis-bond-hub/">Cannabis Bond Hub</a>
        <a href="/environmental-reclamation-bond-hub/">Environmental &amp; Reclamation Bond Hub</a>
        <a href="/federal-blm-bond-hub/">Federal &amp; BLM Bond Hub</a>
        <a href="/escrow-real-estate-bond-hub/">Escrow &amp; Real Estate Bond Hub</a>
        <a href="/license-permit-bond-hub/">License &amp; Permit Bond Hub</a>
        <a href="/agriculture-food-bond-hub/">Agriculture &amp; Food Bond Hub</a>
      </div>
      <a href="/surety-bond-learning-center/" style="color:#2563eb;font-weight:700;font-size:14.5px;text-decoration:none;">Surety Bond Learning Center →</a>
    </div>
  </div>

  <div class="is-final-wrap">
    <div class="is-inner">
      <h2>Ready to Get Your Ocean Transport Bond?</h2>
      <p>Fast approvals, lowest rates, guaranteed FMC compliance.</p>
      <a href="https://fc16062.propeller.insure/axelerator-public/#do=show+widget+page&name=public+home&one_search_search=ocean+transport" class="is-btn-white">Start My Application</a>
    </div>
  </div>

</div>