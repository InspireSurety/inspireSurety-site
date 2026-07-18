---
title: "Freight Broker Bonds"
layout: "layout.njk"
---

<style>
.is-fb *, .is-fb *::before, .is-fb *::after { box-sizing: border-box; }
.is-fb {
  font-family: inherit;
  color: #0f172a;
  margin: 0 calc(-50vw + 50%);
  width: 100vw;
  padding: 0;
}
.is-fb .is-inner { max-width: 1000px; margin: 0 auto; padding: 0 24px; }

.is-fb .is-hero-wrap {
  background: linear-gradient(135deg, #0c1e3d 0%, #2563eb 55%, #38bdf8 100%);
  padding: 72px 0 64px;
  position: relative;
  overflow: hidden;
}
.is-fb .is-hero-wrap::before {
  content: "";
  position: absolute;
  top: -100px; right: -100px;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  border-radius: 50%;
}
.is-fb .is-hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.25);
  color: #bae6fd; font-size: 11px; font-weight: 800; letter-spacing: 0.08em;
  text-transform: uppercase; padding: 6px 16px; border-radius: 999px;
  margin-bottom: 20px; position: relative; z-index: 1;
}
.is-fb .is-hero-wrap h1 {
  font-size: clamp(32px, 5vw, 52px) !important; font-weight: 900 !important;
  color: #fff !important; line-height: 1.1 !important; margin: 0 0 12px !important;
  position: relative; z-index: 1; letter-spacing: -0.02em;
}
.is-fb .is-hero-wrap p { font-size: 16px; color: rgba(255,255,255,0.9); line-height: 1.7; max-width: 620px; margin: 0 0 28px; position: relative; z-index: 1; }
.is-fb .is-btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: #fff; color: #2563eb !important;
  padding: 16px 34px; border-radius: 12px;
  font-size: 16px; font-weight: 800;
  text-decoration: none !important; transition: all 0.2s;
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
  position: relative; z-index: 1;
}
.is-fb .is-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.3); }
.is-fb .is-hero-note { font-size: 13px; color: rgba(255,255,255,0.65); margin-top: 14px; position: relative; z-index: 1; }

.is-fb .is-toc {
  background: #0c1e3d; border-radius: 20px; padding: 32px 36px;
  margin: -36px auto 0; max-width: 940px; position: relative; z-index: 2;
  box-shadow: 0 20px 50px rgba(0,0,0,0.25);
}
.is-fb .is-toc-title { font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #93c5fd; margin-bottom: 16px; }
.is-fb .is-toc-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px 24px; }
.is-fb .is-toc-grid a { font-size: 14px; color: #e2e8f0; text-decoration: none; font-weight: 500; display: flex; align-items: center; gap: 8px; }
.is-fb .is-toc-grid a::before { content: "→"; color: #38bdf8; }
.is-fb .is-toc-grid a:hover { color: #93c5fd; }

.is-fb .is-sec { background: #fff; padding: 64px 0; }
.is-fb .is-sec + .is-sec { border-top: 1px solid #f1f5f9; }
.is-fb .is-sec h2 { font-size: clamp(22px, 2.8vw, 30px) !important; font-weight: 900 !important; color: #0f172a !important; margin: 0 0 16px !important; letter-spacing: -0.01em; }
.is-fb .is-eyebrow { display: inline-block; font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #2563eb; margin-bottom: 10px; }
.is-fb .is-sec p { font-size: 15px; color: #475569; line-height: 1.75; margin: 0 0 14px; }

.is-fb .is-check-list { display: flex; flex-direction: column; gap: 2px; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; margin: 20px 0; background: #fff; }
.is-fb .is-check-row { display: flex; align-items: center; gap: 12px; padding: 14px 20px; border-bottom: 1px solid #f1f5f9; }
.is-fb .is-check-row:last-child { border-bottom: none; }
.is-fb .is-check-icon { width: 26px; height: 26px; border-radius: 50%; background: #eff6ff; color: #2563eb; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; font-weight: 800; }
.is-fb .is-check-row span { font-size: 14.5px; color: #334155; font-weight: 500; }

.is-fb .is-steps { display: flex; flex-direction: column; gap: 0; margin: 24px 0; }
.is-fb .is-step { display: grid; grid-template-columns: 80px 1fr; gap: 24px; align-items: start; padding: 28px 0; border-bottom: 1px solid #e2e8f0; }
.is-fb .is-step:last-child { border-bottom: none; }
.is-fb .is-step-num { width: 64px; height: 64px; background: linear-gradient(135deg, #2563eb, #38bdf8); border-radius: 18px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 26px; font-weight: 900; flex-shrink: 0; box-shadow: 0 8px 20px rgba(37,99,235,0.35); }
.is-fb .is-step h3 { font-size: 18px !important; font-weight: 800 !important; color: #0f172a !important; margin: 0 0 6px !important; }
.is-fb .is-step p { font-size: 14.5px; color: #475569; margin: 0; line-height: 1.65; }

.is-fb .is-why-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin: 20px 0; }
.is-fb .is-why-pill { background: #fff; border: 2px solid #e2e8f0; border-radius: 14px; padding: 20px; display: flex; align-items: center; gap: 14px; transition: all 0.2s; }
.is-fb .is-why-pill:hover { border-color: #38bdf8; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(56,189,248,0.15); }
.is-fb .is-why-icon { width: 40px; height: 40px; border-radius: 10px; background: #eff6ff; color: #2563eb; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; font-weight: 800; }
.is-fb .is-why-pill span { font-size: 14px; color: #1e293b; font-weight: 600; }

.is-fb .is-faq-list { display: flex; flex-direction: column; gap: 10px; margin: 20px 0; }
.is-fb .is-faq-item { border: 1px solid #e2e8f0; border-radius: 14px; background: #fff; overflow: hidden; }
.is-fb .is-faq-item[open] { border-color: #93c5fd; box-shadow: 0 6px 20px rgba(37,99,235,0.1); }
.is-fb .is-faq-item summary { font-size: 15px; font-weight: 700; color: #0f172a; padding: 18px 22px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; list-style: none; gap: 14px; }
.is-fb .is-faq-item summary::-webkit-details-marker { display: none; }
.is-fb .is-faq-item summary::after { content: "+"; font-size: 22px; font-weight: 300; color: #2563eb; flex-shrink: 0; transition: transform 0.25s; line-height: 1; }
.is-fb .is-faq-item[open] summary::after { transform: rotate(45deg); }
.is-fb .is-faq-body { padding: 0 22px 20px; }
.is-fb .is-faq-body p { font-size: 14.5px; color: #475569; margin: 0; line-height: 1.7; }

.is-fb .is-testimonials { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 24px 0; }
.is-fb .is-testimonial { background: #fff; border-radius: 16px; padding: 24px 22px; position: relative; box-shadow: 0 4px 16px rgba(0,0,0,0.05); border-top: 3px solid #2563eb; }
.is-fb .is-testimonial::before { content: '"'; position: absolute; top: 8px; right: 20px; font-size: 48px; color: #eff6ff; font-family: Georgia, serif; line-height: 1; }
.is-fb .is-testimonial-text { font-size: 14px; color: #334155; line-height: 1.65; font-style: italic; margin: 0 0 14px; position: relative; z-index: 1; }
.is-fb .is-testimonial-name { font-weight: 700; color: #1e293b; font-size: 14px; display: block; }
.is-fb .is-testimonial-role { font-size: 12px; color: #94a3b8; }

.is-fb .is-hub-links { display: flex; flex-wrap: wrap; gap: 10px; margin: 20px 0 24px; }
.is-fb .is-hub-links a { font-size: 13.5px; color: #1e40af; background: #eff6ff; border: 1px solid #bfdbfe; padding: 10px 18px; border-radius: 999px; text-decoration: none; font-weight: 600; transition: all 0.15s; }
.is-fb .is-hub-links a:hover { background: #2563eb; color: #fff; border-color: #2563eb; }

.is-fb .is-final-wrap { background: linear-gradient(135deg, #0c1e3d, #2563eb, #38bdf8); padding: 72px 0; text-align: center; position: relative; overflow: hidden; }
.is-fb .is-final-wrap::before { content: ""; position: absolute; top: -80px; left: -80px; width: 320px; height: 320px; background: rgba(255,255,255,0.08); border-radius: 50%; }
.is-fb .is-final-wrap::after { content: ""; position: absolute; bottom: -100px; right: -60px; width: 380px; height: 380px; background: rgba(255,255,255,0.05); border-radius: 50%; }
.is-fb .is-final-wrap h2 { font-size: clamp(26px, 3.5vw, 40px) !important; color: #fff !important; margin: 0 0 14px !important; position: relative; z-index: 1; font-weight: 900 !important; }
.is-fb .is-final-wrap p { font-size: 17px; color: rgba(255,255,255,0.9); margin: 0 auto 32px; max-width: 480px; position: relative; z-index: 1; }
.is-fb .is-btn-white { display: inline-block; background: #fff; color: #2563eb !important; padding: 17px 40px; border-radius: 12px; font-size: 16px; font-weight: 800; text-decoration: none !important; position: relative; z-index: 1; transition: all 0.2s; box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
.is-fb .is-btn-white:hover { background: #eff6ff; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.25); }

@media (max-width: 720px) {
  .is-fb .is-toc { margin: -24px 20px 0; padding: 24px 22px; }
  .is-fb .is-toc-grid { grid-template-columns: 1fr; }
  .is-fb .is-why-grid { grid-template-columns: 1fr; }
  .is-fb .is-testimonials { grid-template-columns: 1fr; }
  .is-fb .is-sec { padding: 44px 0; }
  .is-fb .is-hero-wrap { padding: 48px 0 56px; }
}
</style>

<div class="is-fb">

  <div class="is-hero-wrap">
    <div class="is-inner">
      <div class="is-hero-badge">License &amp; Permit Bond</div>
      <h1>Freight Broker Bonds (BMC-84)</h1>
      <p>Fast approvals. Industry-low rates. FMCSA-compliant. Licensed nationwide. A-rated surety partners.</p>
      <a href="https://fc16062.propeller.insure/axelerator-public/#do=show+widget+page&name=public+home&one_search_search=bmc-84" class="is-btn-primary">
        Start Your Application
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
      <div class="is-hero-note">Trusted protection for carriers and shippers — ensuring every freight broker meets federal standards and pays as agreed. Start your application now to secure your BMC-84 bond without delays.</div>
    </div>
  </div>

  <div class="is-toc">
    <div class="is-toc-title">On This Page</div>
    <div class="is-toc-grid">
      <a href="#what-is">What Is a Freight Broker Bond (BMC-84)?</a>
      <a href="#cost">Bond Amount &amp; Cost</a>
      <a href="#who-needs">Who Needs This Bond?</a>
      <a href="#eligibility">Requirements &amp; Eligibility</a>
      <a href="#process">How the Process Works</a>
      <a href="#why-us">Why Freight Brokers Choose Us</a>
      <a href="#faq">Top Questions Answered</a>
    </div>
  </div>

  <div class="is-sec" id="what-is">
    <div class="is-inner">
      <span class="is-eyebrow">The Basics</span>
      <h2>What Is a Freight Broker Bond (BMC-84)?</h2>
      <p>A Freight Broker Bond, also known as a BMC-84 bond, is a federal surety bond required by the FMCSA for all freight brokers and freight forwarders. It guarantees that brokers operate ethically, pay motor carriers and shippers as agreed, and comply with all federal transportation regulations.</p>
      <p>This bond protects carriers and shippers from:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Non-payment of freight charges</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Contract violations</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Fraudulent or deceptive practices</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Failure to comply with FMCSA regulations</span></div>
      </div>
      <p>If you're applying for or renewing your freight broker authority, you must have an active BMC-84 bond on file with the FMCSA.</p>
    </div>
  </div>

  <div class="is-sec" id="cost">
    <div class="is-inner">
      <span class="is-eyebrow">Pricing</span>
      <h2>Freight Broker Bond Amount &amp; Cost</h2>
      <p>The FMCSA requires a $75,000 freight broker bond for all brokers and freight forwarders.</p>
      <p>Your annual premium depends on:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Credit score</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Business financials</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Years in business</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Claims history</span></div>
      </div>
      <p style="font-weight:700;color:#2563eb;font-size:16px;">Most brokers qualify instantly with competitive rates, and new brokers can often secure affordable pricing even with limited credit history.</p>
    </div>
  </div>

  <div class="is-sec" id="who-needs">
    <div class="is-inner">
      <span class="is-eyebrow">Eligibility</span>
      <h2>Who Needs a Freight Broker Bond?</h2>
      <p>You need a BMC-84 bond if you are:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>A freight broker</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>A freight forwarder</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Applying for new FMCSA authority</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Renewing your existing authority</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Expanding into brokerage services</span></div>
      </div>
      <p>Any business arranging transportation of goods for compensation must maintain this bond to stay compliant.</p>
    </div>
  </div>

  <div class="is-sec" id="eligibility">
    <div class="is-inner">
      <span class="is-eyebrow">Requirements</span>
      <h2>Freight Broker Bond Requirements &amp; Eligibility</h2>
      <p>The FMCSA requires:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>A $75,000 BMC-84 bond</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Active USDOT and MC numbers</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Completed FMCSA application</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Credit review</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Annual renewal</span></div>
      </div>
      <p>Your bond must remain active at all times to avoid suspension of your broker authority.</p>
    </div>
  </div>

  <div class="is-sec" id="process">
    <div class="is-inner">
      <span class="is-eyebrow">Simple Process</span>
      <h2>How the Freight Broker Bond Process Works</h2>
      <div class="is-steps">
        <div class="is-step"><div class="is-step-num">1</div><div><h3>Complete the Application</h3><p>Submit the quick, 60-second online application.</p></div></div>
        <div class="is-step"><div class="is-step-num">2</div><div><h3>Secure the Lowest Rates</h3><p>We match you with the best rate available from A-rated sureties.</p></div></div>
        <div class="is-step"><div class="is-step-num">3</div><div><h3>Receive Your Bond</h3><p>File your BMC-84 or BMC-85 bond directly with the FMCSA for immediate compliance.</p></div></div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="why-us">
    <div class="is-inner">
      <span class="is-eyebrow">Our Advantage</span>
      <h2>Why Freight Brokers Choose Us</h2>
      <div class="is-why-grid">
        <div class="is-why-pill"><div class="is-why-icon">$</div><span>Lowest rates from A-rated sureties</span></div>
        <div class="is-why-pill"><div class="is-why-icon">⚡</div><span>Fast approvals</span></div>
        <div class="is-why-pill"><div class="is-why-icon">📲</div><span>Digital filing directly with FMCSA</span></div>
        <div class="is-why-pill"><div class="is-why-icon">🎯</div><span>Freight broker bond specialists</span></div>
        <div class="is-why-pill"><div class="is-why-icon">✓</div><span>100% compliance guaranteed</span></div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="faq">
    <div class="is-inner">
      <span class="is-eyebrow">Questions</span>
      <h2>Top Freight Broker Bond Questions Answered</h2>
      <p>Our most common questions answered efficiently.</p>
      <div class="is-faq-list">
        <details class="is-faq-item"><summary>How much does a freight broker bond cost?</summary><div class="is-faq-body"><p>The FMCSA requires a $75,000 bond amount. Your annual premium depends on credit score, business financials, years in business, and claims history.</p></div></details>
        <details class="is-faq-item"><summary>How long does approval take?</summary><div class="is-faq-body"><p>Approvals are fast, with most brokers qualifying instantly and bonds filed directly with the FMCSA for immediate compliance.</p></div></details>
        <details class="is-faq-item"><summary>What does the BMC-84 bond guarantee?</summary><div class="is-faq-body"><p>The bond guarantees payment of freight charges owed to carriers and shippers, and compliance with FMCSA regulations, protecting against fraud and contract violations.</p></div></details>
        <details class="is-faq-item"><summary>Can the bond be refunded?</summary><div class="is-faq-body"><p>Refund policies vary by surety. Contact us for specifics on your freight broker bond.</p></div></details>
        <details class="is-faq-item"><summary>Do I need a bond before activating my MC number?</summary><div class="is-faq-body"><p>Yes — an active BMC-84 bond must be on file with the FMCSA before your broker authority can be activated.</p></div></details>
      </div>
    </div>
  </div>

  <div class="is-sec">
    <div class="is-inner">
      <span class="is-eyebrow">Real Results</span>
      <h2>Customer Testimonials</h2>
      <p>What our customers are saying about us.</p>
      <div class="is-testimonials">
        <div class="is-testimonial"><p class="is-testimonial-text">Inspire Surety made getting our BMC-84 bond incredibly easy. They filed everything directly with the FMCSA and had us active fast.</p><span class="is-testimonial-name">Logan P.</span><span class="is-testimonial-role">Freight Broker</span></div>
        <div class="is-testimonial"><p class="is-testimonial-text">We manage multiple carrier relationships, so compliance is critical. Inspire Surety has been our go-to bonding partner for years.</p><span class="is-testimonial-name">Marcus H.</span><span class="is-testimonial-role">Transportation Service Manager</span></div>
        <div class="is-testimonial"><p class="is-testimonial-text">As a new brokerage, we needed affordable pricing. Inspire Surety delivered a great rate and walked us through every step.</p><span class="is-testimonial-name">Tonya B.</span><span class="is-testimonial-role">Logistics Startup Owner</span></div>
        <div class="is-testimonial"><p class="is-testimonial-text">From the first meeting with Steve, it was clear we were in good hands. We switched to Inspire Surety after years with another provider. The rate was better, the service was faster, and the filing with FMCSA was handled instantly. Truly a partner we can rely on.</p><span class="is-testimonial-name">Jody R.</span><span class="is-testimonial-role">Freight Broker Office</span></div>
        <div class="is-testimonial"><p class="is-testimonial-text">Our renewal deadline was approaching, and Inspire Surety handled the bond instantly. Excellent service and communication.</p><span class="is-testimonial-name">Rachel K.</span><span class="is-testimonial-role">Freight Forwarder</span></div>
        <div class="is-testimonial"><p class="is-testimonial-text">Our brokerage was struggling to get bonded due to being a new startup. Inspire Surety not only approved us quickly but walked us through every step with clarity. We were operating within 24 hours.</p><span class="is-testimonial-name">Miriam H.</span><span class="is-testimonial-role">Senior Logistics Manager</span></div>
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
      <h2>Ready to Get Your Freight Broker Bond?</h2>
      <p>Fast approvals, lowest rates, FMCSA compliance guaranteed.</p>
      <a href="https://fc16062.propeller.insure/axelerator-public/#do=show+widget+page&name=public+home&one_search_search=bmc-84" class="is-btn-white">Start My Application</a>
    </div>
  </div>

</div>