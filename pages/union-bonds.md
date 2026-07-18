---
title: "Union Bonds"
layout: "layout.njk"
---

<style>
.is-un *, .is-un *::before, .is-un *::after { box-sizing: border-box; }
.is-un {
  font-family: inherit;
  color: #0f172a;
  margin: 0 calc(-50vw + 50%);
  width: 100vw;
  padding: 0;
}
.is-un .is-inner { max-width: 1000px; margin: 0 auto; padding: 0 24px; }

.is-un .is-hero-wrap {
  background: linear-gradient(135deg, #292524 0%, #57534e 55%, #d97706 100%);
  padding: 72px 0 64px;
  position: relative;
  overflow: hidden;
}
.is-un .is-hero-wrap::before {
  content: "";
  position: absolute;
  top: -100px; right: -100px;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  border-radius: 50%;
}
.is-un .is-hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.25);
  color: #fed7aa; font-size: 11px; font-weight: 800; letter-spacing: 0.08em;
  text-transform: uppercase; padding: 6px 16px; border-radius: 999px;
  margin-bottom: 20px; position: relative; z-index: 1;
}
.is-un .is-hero-wrap h1 {
  font-size: clamp(30px, 4.8vw, 50px) !important; font-weight: 900 !important;
  color: #fff !important; line-height: 1.1 !important; margin: 0 0 12px !important;
  position: relative; z-index: 1; letter-spacing: -0.02em;
}
.is-un .is-hero-wrap p { font-size: 16px; color: rgba(255,255,255,0.9); line-height: 1.7; max-width: 620px; margin: 0 0 28px; position: relative; z-index: 1; }
.is-un .is-btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: #fff; color: #b45309 !important;
  padding: 16px 34px; border-radius: 12px;
  font-size: 16px; font-weight: 800;
  text-decoration: none !important; transition: all 0.2s;
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
  position: relative; z-index: 1;
}
.is-un .is-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.3); }

.is-un .is-toc {
  background: #292524; border-radius: 20px; padding: 32px 36px;
  margin: -36px auto 0; max-width: 940px; position: relative; z-index: 2;
  box-shadow: 0 20px 50px rgba(0,0,0,0.25);
}
.is-un .is-toc-title { font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #fdba74; margin-bottom: 16px; }
.is-un .is-toc-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px 24px; }
.is-un .is-toc-grid a { font-size: 14px; color: #e2e8f0; text-decoration: none; font-weight: 500; display: flex; align-items: center; gap: 8px; }
.is-un .is-toc-grid a::before { content: "→"; color: #d97706; }
.is-un .is-toc-grid a:hover { color: #fdba74; }

.is-un .is-sec { background: #fff; padding: 64px 0; }
.is-un .is-sec + .is-sec { border-top: 1px solid #f1f5f9; }
.is-un .is-sec h2 { font-size: clamp(22px, 2.8vw, 30px) !important; font-weight: 900 !important; color: #0f172a !important; margin: 0 0 16px !important; letter-spacing: -0.01em; }
.is-un .is-eyebrow { display: inline-block; font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #b45309; margin-bottom: 10px; }
.is-un .is-sec p { font-size: 15px; color: #475569; line-height: 1.75; margin: 0 0 14px; }

.is-un .is-check-list { display: flex; flex-direction: column; gap: 2px; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; margin: 20px 0; background: #fff; }
.is-un .is-check-row { display: flex; align-items: center; gap: 12px; padding: 14px 20px; border-bottom: 1px solid #f1f5f9; }
.is-un .is-check-row:last-child { border-bottom: none; }
.is-un .is-check-icon { width: 26px; height: 26px; border-radius: 50%; background: #fff7ed; color: #b45309; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; font-weight: 800; }
.is-un .is-check-row span { font-size: 14.5px; color: #334155; font-weight: 500; }

.is-un .is-steps { display: flex; flex-direction: column; gap: 0; margin: 24px 0; }
.is-un .is-step { display: grid; grid-template-columns: 80px 1fr; gap: 24px; align-items: start; padding: 28px 0; border-bottom: 1px solid #e2e8f0; }
.is-un .is-step:last-child { border-bottom: none; }
.is-un .is-step-num { width: 64px; height: 64px; background: linear-gradient(135deg, #57534e, #d97706); border-radius: 18px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 26px; font-weight: 900; flex-shrink: 0; box-shadow: 0 8px 20px rgba(217,119,6,0.35); }
.is-un .is-step h3 { font-size: 18px !important; font-weight: 800 !important; color: #0f172a !important; margin: 0 0 6px !important; }
.is-un .is-step p { font-size: 14.5px; color: #475569; margin: 0; line-height: 1.65; }

.is-un .is-why-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin: 20px 0; }
.is-un .is-why-pill { background: #fff; border: 2px solid #e2e8f0; border-radius: 14px; padding: 20px; display: flex; align-items: center; gap: 14px; transition: all 0.2s; }
.is-un .is-why-pill:hover { border-color: #d97706; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(217,119,6,0.15); }
.is-un .is-why-icon { width: 40px; height: 40px; border-radius: 10px; background: #fff7ed; color: #b45309; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; font-weight: 800; }
.is-un .is-why-pill span { font-size: 14px; color: #1e293b; font-weight: 600; }

.is-un .is-faq-list { display: flex; flex-direction: column; gap: 10px; margin: 20px 0; }
.is-un .is-faq-item { border: 1px solid #e2e8f0; border-radius: 14px; background: #fff; overflow: hidden; }
.is-un .is-faq-item[open] { border-color: #fdba74; box-shadow: 0 6px 20px rgba(217,119,6,0.1); }
.is-un .is-faq-item summary { font-size: 15px; font-weight: 700; color: #0f172a; padding: 18px 22px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; list-style: none; gap: 14px; }
.is-un .is-faq-item summary::-webkit-details-marker { display: none; }
.is-un .is-faq-item summary::after { content: "+"; font-size: 22px; font-weight: 300; color: #b45309; flex-shrink: 0; transition: transform 0.25s; line-height: 1; }
.is-un .is-faq-item[open] summary::after { transform: rotate(45deg); }
.is-un .is-faq-body { padding: 0 22px 20px; }
.is-un .is-faq-body p { font-size: 14.5px; color: #475569; margin: 0; line-height: 1.7; }

.is-un .is-testimonials { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 24px 0; }
.is-un .is-testimonial { background: #fff; border-radius: 16px; padding: 24px 22px; position: relative; box-shadow: 0 4px 16px rgba(0,0,0,0.05); border-top: 3px solid #b45309; }
.is-un .is-testimonial::before { content: '"'; position: absolute; top: 8px; right: 20px; font-size: 48px; color: #fff7ed; font-family: Georgia, serif; line-height: 1; }
.is-un .is-testimonial-text { font-size: 14px; color: #334155; line-height: 1.65; font-style: italic; margin: 0 0 14px; position: relative; z-index: 1; }
.is-un .is-testimonial-name { font-weight: 700; color: #1e293b; font-size: 14px; display: block; }
.is-un .is-testimonial-role { font-size: 12px; color: #94a3b8; }

.is-un .is-hub-links { display: flex; flex-wrap: wrap; gap: 10px; margin: 20px 0 24px; }
.is-un .is-hub-links a { font-size: 13.5px; color: #9a3412; background: #fff7ed; border: 1px solid #fed7aa; padding: 10px 18px; border-radius: 999px; text-decoration: none; font-weight: 600; transition: all 0.15s; }
.is-un .is-hub-links a:hover { background: #b45309; color: #fff; border-color: #b45309; }

.is-un .is-final-wrap { background: linear-gradient(135deg, #292524, #57534e, #d97706); padding: 72px 0; text-align: center; position: relative; overflow: hidden; }
.is-un .is-final-wrap::before { content: ""; position: absolute; top: -80px; left: -80px; width: 320px; height: 320px; background: rgba(255,255,255,0.08); border-radius: 50%; }
.is-un .is-final-wrap::after { content: ""; position: absolute; bottom: -100px; right: -60px; width: 380px; height: 380px; background: rgba(255,255,255,0.05); border-radius: 50%; }
.is-un .is-final-wrap h2 { font-size: clamp(26px, 3.5vw, 40px) !important; color: #fff !important; margin: 0 0 14px !important; position: relative; z-index: 1; font-weight: 900 !important; }
.is-un .is-final-wrap p { font-size: 17px; color: rgba(255,255,255,0.9); margin: 0 auto 32px; max-width: 480px; position: relative; z-index: 1; }
.is-un .is-btn-white { display: inline-block; background: #fff; color: #b45309 !important; padding: 17px 40px; border-radius: 12px; font-size: 16px; font-weight: 800; text-decoration: none !important; position: relative; z-index: 1; transition: all 0.2s; box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
.is-un .is-btn-white:hover { background: #fff7ed; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.25); }

@media (max-width: 720px) {
  .is-un .is-toc { margin: -24px 20px 0; padding: 24px 22px; }
  .is-un .is-toc-grid { grid-template-columns: 1fr; }
  .is-un .is-why-grid { grid-template-columns: 1fr; }
  .is-un .is-testimonials { grid-template-columns: 1fr; }
  .is-un .is-sec { padding: 44px 0; }
  .is-un .is-hero-wrap { padding: 48px 0 56px; }
}
</style>

<div class="is-un">

  <div class="is-hero-wrap">
    <div class="is-inner">
      <div class="is-hero-badge">Construction Bond</div>
      <h1>Union Bonds (Wage &amp; Fringe / Wage &amp; Welfare)</h1>
      <p>Get Your Union Bond Today. Fast approvals. Lowest rates. Guaranteed compliance with union agreements. Licensed nationwide. A-rated surety partners.</p>
      <a href="https://fc16062.propeller.insure/axelerator-public/#do=show+widget+page&name=public+home&one_search_search=wage+welfare" class="is-btn-primary">
        Start Your Application
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#b45309" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>
  </div>

  <div class="is-toc">
    <div class="is-toc-title">On This Page</div>
    <div class="is-toc-grid">
      <a href="#what-is">What Is a Union Bond?</a>
      <a href="#cost">Bond Amounts and Cost</a>
      <a href="#who-needs">Who Needs This Bond</a>
      <a href="#eligibility">Requirements &amp; Eligibility</a>
      <a href="#process">How the Process Works</a>
      <a href="#why-us">Why Contractors Choose Us</a>
      <a href="#faq">Top Questions Answered</a>
    </div>
  </div>

  <div class="is-sec">
    <div class="is-inner">
      <p>Labor unions often require this bond before allowing contractors to dispatch union workers to a project.</p>
      <p>This bond protects unions and their members from unpaid wages, unpaid benefits, delinquent health or pension contributions, and violations of collective bargaining agreements.</p>
      <p>Securing a union bond demonstrates financial responsibility, strengthens trust with labor organizations, and keeps your projects moving without delays.</p>
      <p>Need help with a license or permit bond? Explore our <a href="/license-permit-bond-hub/" style="color:#b45309;font-weight:700;">License &amp; Permit Bond Hub</a> for state-specific requirements and application guides.</p>
    </div>
  </div>

  <div class="is-sec" id="what-is">
    <div class="is-inner">
      <span class="is-eyebrow">The Basics</span>
      <h2>What Is a Union Bond (Wage &amp; Fringe / Wage &amp; Welfare)</h2>
      <p>A union bond—also known as a wage &amp; fringe bond, wage &amp; welfare bond, or collective bargaining bond—is a surety bond required by labor unions to ensure contractors pay all required union wages, fringe benefits, and contributions on time.</p>
      <p>This bond protects unions and their members from:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Unpaid wages</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Unpaid fringe benefits</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Unpaid health, pension, or welfare contributions</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Contract violations</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Failure to comply with collective bargaining agreements</span></div>
      </div>
      <p>If you work with union labor, the union may require this bond before allowing your company to dispatch workers to a project.</p>
    </div>
  </div>

  <div class="is-sec" id="cost">
    <div class="is-inner">
      <span class="is-eyebrow">Pricing</span>
      <h2>Union Bond Amounts and Cost</h2>
      <p>Bond amounts vary by union and typically range from $10,000 to $500,000, depending on:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Number of union workers employed</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Trade or craft (electrical, plumbing, carpentry, etc.)</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Size and duration of the project</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Collective bargaining agreement requirements</span></div>
      </div>
      <p>Your premium depends on:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Bond amount</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Credit score</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Company financials</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Experience with union projects</span></div>
      </div>
      <p style="font-weight:700;color:#b45309;font-size:16px;">Most contractors qualify quickly with competitive rates, even for high-value bonds.</p>
    </div>
  </div>

  <div class="is-sec" id="who-needs">
    <div class="is-inner">
      <span class="is-eyebrow">Eligibility</span>
      <h2>Who Needs a Union Bond</h2>
      <p>You may need a union bond if you are:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>A general contractor working with union labor</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>A subcontractor signing a collective bargaining agreement</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>A construction firm hiring union workers</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>A specialty contractor (electrical, HVAC, plumbing, etc.)</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>A company required to guarantee wage and benefit payments</span></div>
      </div>
      <p>Any contractor participating in union projects may be required to file this bond before work begins.</p>
    </div>
  </div>

  <div class="is-sec" id="eligibility">
    <div class="is-inner">
      <span class="is-eyebrow">Requirements</span>
      <h2>Union Bond Requirements &amp; Eligibility</h2>
      <p>Unions typically require:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Signed collective bargaining agreement</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Union-mandated bond amount</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Credit review</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Company financial statements</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Proof of business history</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Annual or project-specific renewal</span></div>
      </div>
      <p>Some unions require higher bond amounts for new contractors or large crews.</p>
    </div>
  </div>

  <div class="is-sec" id="process">
    <div class="is-inner">
      <span class="is-eyebrow">Simple Process</span>
      <h2>How the Union Bond Process Works</h2>
      <div class="is-steps">
        <div class="is-step"><div class="is-step-num">1</div><div><h3>Complete the Application</h3><p>Submit the quick, 60-second application.</p></div></div>
        <div class="is-step"><div class="is-step-num">2</div><div><h3>Secure the Lowest Rate</h3><p>We match you with the best rate available from A-rated sureties.</p></div></div>
        <div class="is-step"><div class="is-step-num">3</div><div><h3>Receive Your Bond</h3><p>Same-day issuance available for union filing.</p></div></div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="why-us">
    <div class="is-inner">
      <span class="is-eyebrow">Our Advantage</span>
      <h2>Why Contractors Choose Us</h2>
      <div class="is-why-grid">
        <div class="is-why-pill"><div class="is-why-icon">$</div><span>Lowest rates from A-rated sureties</span></div>
        <div class="is-why-pill"><div class="is-why-icon">⚡</div><span>Fast approvals</span></div>
        <div class="is-why-pill"><div class="is-why-icon">📲</div><span>Digital delivery for immediate filing</span></div>
        <div class="is-why-pill"><div class="is-why-icon">🎯</div><span>Construction &amp; union-bond specialists</span></div>
        <div class="is-why-pill"><div class="is-why-icon">✓</div><span>100% compliance guaranteed</span></div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="faq">
    <div class="is-inner">
      <span class="is-eyebrow">Questions</span>
      <h2>Top Questions Answered</h2>
      <p>Our most common questions answered efficiently.</p>
      <div class="is-faq-list">
        <details class="is-faq-item"><summary>How much does a union bond cost?</summary><div class="is-faq-body"><p>Costs vary by union, with bond amounts typically ranging from $10,000 to $500,000. Your premium depends on bond amount, credit score, and company financials.</p></div></details>
        <details class="is-faq-item"><summary>How long does approval take?</summary><div class="is-faq-body"><p>Approvals are fast, with same-day issuance available for union filing.</p></div></details>
        <details class="is-faq-item"><summary>What does the bond guarantee?</summary><div class="is-faq-body"><p>The bond guarantees payment of union wages, fringe benefits, and contributions, protecting unions and their members from contract violations.</p></div></details>
        <details class="is-faq-item"><summary>Can the bond be refunded?</summary><div class="is-faq-body"><p>Refund policies vary by surety. Contact us for specifics on your union bond.</p></div></details>
        <details class="is-faq-item"><summary>Do I need a bond for each union?</summary><div class="is-faq-body"><p>Yes — each union typically requires its own bond.</p></div></details>
      </div>
    </div>
  </div>

  <div class="is-sec">
    <div class="is-inner">
      <span class="is-eyebrow">Real Results</span>
      <h2>Customer Testimonials</h2>
      <p>What our customers are saying about us.</p>
      <div class="is-testimonials">
        <div class="is-testimonial"><p class="is-testimonial-text">Our project required multiple union bonds across different trades. Inspire Surety handled every one quickly and kept our crews on schedule.</p><span class="is-testimonial-name">Ronald P.</span><span class="is-testimonial-role">Commercial Construction Manager</span></div>
        <div class="is-testimonial"><p class="is-testimonial-text">We were new to working under union agreements, and Inspire Surety made the bonding process incredibly simple. Their guidance saved us time and stress.</p><span class="is-testimonial-name">Elena M.</span><span class="is-testimonial-role">Electrical Contractor</span></div>
        <div class="is-testimonial"><p class="is-testimonial-text">Union audits can be tough, but having our wage and fringe bonds secured through Inspire Surety gave us total peace of mind.</p><span class="is-testimonial-name">Trevor H.</span><span class="is-testimonial-role">Mechanical Services Owner</span></div>
        <div class="is-testimonial"><p class="is-testimonial-text">We needed a high-value bond for a major public project. Inspire Surety delivered fast approval and excellent communication throughout.</p><span class="is-testimonial-name">Danielle C.</span><span class="is-testimonial-role">General Contractor</span></div>
        <div class="is-testimonial"><p class="is-testimonial-text">Our company works with several unions, and Inspire Surety has consistently provided fast, accurate bonding every time. They're a true partner.</p><span class="is-testimonial-name">Marcus Y.</span><span class="is-testimonial-role">Steel Fabrication Contractor</span></div>
        <div class="is-testimonial"><p class="is-testimonial-text">When a last-minute contract required immediate bonding, Inspire Surety stepped in and got it done the same day. Outstanding service.</p><span class="is-testimonial-name">Jasmine P.</span><span class="is-testimonial-role">Roofing &amp; Sheet Metal Contractor</span></div>
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
      <a href="/surety-bond-learning-center/" style="color:#b45309;font-weight:700;font-size:14.5px;text-decoration:none;">Surety Bond Learning Center →</a>
    </div>
  </div>

  <div class="is-final-wrap">
    <div class="is-inner">
      <h2>Ready to Get Your Union Bond?</h2>
      <p>Fast approvals, lowest rates, guaranteed compliance.</p>
      <a href="https://fc16062.propeller.insure/axelerator-public/#do=show+widget+page&name=public+home&one_search_search=wage+welfare" class="is-btn-white">Start My Application</a>
    </div>
  </div>

</div>