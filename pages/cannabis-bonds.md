---
title: "Cannabis Bond"
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

.is-cn .is-hero-wrap {
  background: linear-gradient(135deg, #052e16 0%, #15803d 55%, #4ade80 100%);
  padding: 72px 0 64px;
  position: relative;
  overflow: hidden;
}
.is-cn .is-hero-wrap::before {
  content: "";
  position: absolute;
  top: -100px; right: -100px;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  border-radius: 50%;
}
.is-cn .is-hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.25);
  color: #bbf7d0; font-size: 11px; font-weight: 800; letter-spacing: 0.08em;
  text-transform: uppercase; padding: 6px 16px; border-radius: 999px;
  margin-bottom: 20px; position: relative; z-index: 1;
}
.is-cn .is-hero-wrap h1 {
  font-size: clamp(32px, 5vw, 52px) !important; font-weight: 900 !important;
  color: #fff !important; line-height: 1.1 !important; margin: 0 0 12px !important;
  position: relative; z-index: 1; letter-spacing: -0.02em;
}
.is-cn .is-hero-wrap p { font-size: 16px; color: rgba(255,255,255,0.9); line-height: 1.7; max-width: 640px; margin: 0; position: relative; z-index: 1; }

.is-cn .is-toc {
  background: #052e16; border-radius: 20px; padding: 32px 36px;
  margin: -36px auto 0; max-width: 940px; position: relative; z-index: 2;
  box-shadow: 0 20px 50px rgba(0,0,0,0.25);
}
.is-cn .is-toc-title { font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #86efac; margin-bottom: 16px; }
.is-cn .is-toc-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px 24px; }
.is-cn .is-toc-grid a { font-size: 14px; color: #e2e8f0; text-decoration: none; font-weight: 500; display: flex; align-items: center; gap: 8px; }
.is-cn .is-toc-grid a::before { content: "→"; color: #4ade80; }
.is-cn .is-toc-grid a:hover { color: #86efac; }

.is-cn .is-sec { background: #fff; padding: 64px 0; }
.is-cn .is-sec + .is-sec { border-top: 1px solid #f1f5f9; }
.is-cn .is-sec h2 { font-size: clamp(22px, 2.8vw, 30px) !important; font-weight: 900 !important; color: #0f172a !important; margin: 0 0 16px !important; letter-spacing: -0.01em; }
.is-cn .is-eyebrow { display: inline-block; font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #15803d; margin-bottom: 10px; }
.is-cn .is-sec p { font-size: 15px; color: #475569; line-height: 1.75; margin: 0 0 14px; }

.is-cn .is-check-list { display: flex; flex-direction: column; gap: 2px; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; margin: 20px 0; background: #fff; }
.is-cn .is-check-row { display: flex; align-items: center; gap: 12px; padding: 14px 20px; border-bottom: 1px solid #f1f5f9; }
.is-cn .is-check-row:last-child { border-bottom: none; }
.is-cn .is-check-icon { width: 26px; height: 26px; border-radius: 50%; background: #f0fdf4; color: #15803d; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; font-weight: 800; }
.is-cn .is-check-row span { font-size: 14.5px; color: #334155; font-weight: 500; }

.is-cn .is-bondtype-card {
  background: #fff; border: 1px solid #e2e8f0; border-top: 3px solid #15803d;
  border-radius: 14px; padding: 24px 26px; margin-bottom: 16px;
}
.is-cn .is-bondtype-num {
  display: inline-flex; align-items: center; justify-content: center;
  width: 32px; height: 32px; border-radius: 10px;
  background: #166534; color: #fff; font-size: 14px; font-weight: 900;
  margin-bottom: 12px;
}
.is-cn .is-bondtype-card h3 { font-size: 17px !important; font-weight: 800 !important; color: #0f172a !important; margin: 0 0 8px !important; }
.is-cn .is-bondtype-card p { margin: 0; }
.is-cn .is-bondtype-cta {
  display: inline-flex; align-items: center; gap: 6px; margin-top: 10px;
  color: #15803d; font-weight: 700; font-size: 13.5px; text-decoration: none;
}
.is-cn .is-bondtype-cta:hover { color: #052e16; text-decoration: underline; }

.is-cn .is-state-card {
  background: #052e16; border-radius: 18px; padding: 28px 26px; color: #fff; margin: 20px 0;
}
.is-cn .is-state-flag { font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #86efac; margin-bottom: 10px; }
.is-cn .is-state-card h4 { font-size: 19px !important; font-weight: 800 !important; color: #fff !important; margin: 0 0 12px !important; }
.is-cn .is-state-card p { font-size: 13.5px; color: #d1fae5; line-height: 1.65; margin: 0 0 16px; }
.is-cn .is-state-card a { font-size: 13.5px; color: #86efac; font-weight: 700; text-decoration: none; }
.is-cn .is-state-card a:hover { text-decoration: underline; }

.is-cn .is-steps { display: flex; flex-direction: column; gap: 0; margin: 24px 0; }
.is-cn .is-step { display: grid; grid-template-columns: 80px 1fr; gap: 24px; align-items: start; padding: 28px 0; border-bottom: 1px solid #e2e8f0; }
.is-cn .is-step:last-child { border-bottom: none; }
.is-cn .is-step-num { width: 64px; height: 64px; background: linear-gradient(135deg, #15803d, #4ade80); border-radius: 18px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 26px; font-weight: 900; flex-shrink: 0; box-shadow: 0 8px 20px rgba(21,128,61,0.35); }
.is-cn .is-step h3 { font-size: 18px !important; font-weight: 800 !important; color: #0f172a !important; margin: 0 0 6px !important; }
.is-cn .is-step p { font-size: 14.5px; color: #475569; margin: 0; line-height: 1.65; }

.is-cn .is-why-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin: 20px 0; }
.is-cn .is-why-pill { background: #fff; border: 2px solid #e2e8f0; border-radius: 14px; padding: 20px; display: flex; align-items: center; gap: 14px; transition: all 0.2s; }
.is-cn .is-why-pill:hover { border-color: #4ade80; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(74,222,128,0.15); }
.is-cn .is-why-icon { width: 40px; height: 40px; border-radius: 10px; background: #f0fdf4; color: #15803d; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; font-weight: 800; }
.is-cn .is-why-pill span { font-size: 14px; color: #1e293b; font-weight: 600; }

.is-cn .is-faq-list { display: flex; flex-direction: column; gap: 10px; margin: 20px 0; }
.is-cn .is-faq-item { border: 1px solid #e2e8f0; border-radius: 14px; background: #fff; overflow: hidden; }
.is-cn .is-faq-item[open] { border-color: #86efac; box-shadow: 0 6px 20px rgba(21,128,61,0.1); }
.is-cn .is-faq-item summary { font-size: 15px; font-weight: 700; color: #0f172a; padding: 18px 22px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; list-style: none; gap: 14px; }
.is-cn .is-faq-item summary::-webkit-details-marker { display: none; }
.is-cn .is-faq-item summary::after { content: "+"; font-size: 22px; font-weight: 300; color: #15803d; flex-shrink: 0; transition: transform 0.25s; line-height: 1; }
.is-cn .is-faq-item[open] summary::after { transform: rotate(45deg); }
.is-cn .is-faq-body { padding: 0 22px 20px; }
.is-cn .is-faq-body p { font-size: 14.5px; color: #475569; margin: 0; line-height: 1.7; }

.is-cn .is-testimonials { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 24px 0; }
.is-cn .is-testimonial { background: #fff; border-radius: 16px; padding: 24px 22px; position: relative; box-shadow: 0 4px 16px rgba(0,0,0,0.05); border-top: 3px solid #15803d; }
.is-cn .is-testimonial::before { content: '"'; position: absolute; top: 8px; right: 20px; font-size: 48px; color: #f0fdf4; font-family: Georgia, serif; line-height: 1; }
.is-cn .is-testimonial-text { font-size: 14px; color: #334155; line-height: 1.65; font-style: italic; margin: 0 0 14px; position: relative; z-index: 1; }
.is-cn .is-testimonial-name { font-weight: 700; color: #1e293b; font-size: 14px; display: block; }
.is-cn .is-testimonial-role { font-size: 12px; color: #94a3b8; }

.is-cn .is-hub-links { display: flex; flex-wrap: wrap; gap: 10px; margin: 20px 0 24px; }
.is-cn .is-hub-links a { font-size: 13.5px; color: #166534; background: #f0fdf4; border: 1px solid #bbf7d0; padding: 10px 18px; border-radius: 999px; text-decoration: none; font-weight: 600; transition: all 0.15s; }
.is-cn .is-hub-links a:hover { background: #15803d; color: #fff; border-color: #15803d; }

.is-cn .is-final-wrap { background: linear-gradient(135deg, #052e16, #15803d, #4ade80); padding: 72px 0; text-align: center; position: relative; overflow: hidden; }
.is-cn .is-final-wrap::before { content: ""; position: absolute; top: -80px; left: -80px; width: 320px; height: 320px; background: rgba(255,255,255,0.08); border-radius: 50%; }
.is-cn .is-final-wrap::after { content: ""; position: absolute; bottom: -100px; right: -60px; width: 380px; height: 380px; background: rgba(255,255,255,0.05); border-radius: 50%; }
.is-cn .is-final-wrap h2 { font-size: clamp(26px, 3.5vw, 40px) !important; color: #fff !important; margin: 0 0 14px !important; position: relative; z-index: 1; font-weight: 900 !important; }
.is-cn .is-final-wrap p { font-size: 17px; color: rgba(255,255,255,0.9); margin: 0 auto 32px; max-width: 480px; position: relative; z-index: 1; }
.is-cn .is-btn-white { display: inline-block; background: #fff; color: #15803d !important; padding: 17px 40px; border-radius: 12px; font-size: 16px; font-weight: 800; text-decoration: none !important; position: relative; z-index: 1; transition: all 0.2s; box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
.is-cn .is-btn-white:hover { background: #f0fdf4; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.25); }

@media (max-width: 720px) {
  .is-cn .is-toc { margin: -24px 20px 0; padding: 24px 22px; }
  .is-cn .is-toc-grid { grid-template-columns: 1fr; }
  .is-cn .is-why-grid { grid-template-columns: 1fr; }
  .is-cn .is-testimonials { grid-template-columns: 1fr; }
  .is-cn .is-sec { padding: 44px 0; }
  .is-cn .is-hero-wrap { padding: 48px 0 56px; }
}
</style>

<div class="is-cn">

  <div class="is-hero-wrap">
    <div class="is-inner">
      <div class="is-hero-badge">Cannabis Bond</div>
      <h1>Cannabis Bond</h1>
      <p>Cannabis bonds are state-required surety bonds that ensure cannabis businesses operate legally, ethically, and in full compliance with state cannabis regulations. These bonds protect the public and the state from financial loss caused by violations of cannabis laws.</p>
    </div>
  </div>

  <div class="is-toc">
    <div class="is-toc-title">On This Page</div>
    <div class="is-toc-grid">
      <a href="#what-are">What Are Cannabis Bonds?</a>
      <a href="#types">Types of Cannabis Bonds We Provide</a>
      <a href="#cost">Cannabis Bond Amounts and Cost</a>
      <a href="#who-needs">Who Needs a Cannabis Bond?</a>
      <a href="#eligibility">Cannabis Bond Requirements &amp; Eligibility</a>
      <a href="#process">How the Cannabis Bond Process Works</a>
      <a href="#states">State Cannabis Bond Pages</a>
      <a href="#why-us">Why Cannabis Businesses Choose Us</a>
      <a href="#faq">Top Cannabis Bond Questions Answered</a>
    </div>
  </div>

  <div class="is-sec" id="what-are">
    <div class="is-inner">
      <span class="is-eyebrow">Overview</span>
      <h2>What Are Cannabis Bonds?</h2>
      <p>Cannabis bonds protect against:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Non-payment of taxes or fees</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Violations of cannabis licensing laws</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Failure to follow security or tracking requirements</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Mismanagement of funds</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Fraud or regulatory non-compliance</span></div>
      </div>
      <p>If you're applying for or renewing a cannabis business license, your state may require one or more cannabis-specific bonds.</p>
    </div>
  </div>

  <div class="is-sec" id="types">
    <div class="is-inner">
      <span class="is-eyebrow">Bond Types</span>
      <h2>Types of Cannabis Bonds We Provide</h2>
      <p>Below are the most common cannabis-related bonds required by state regulators.</p>

      <div class="is-bondtype-card">
        <div class="is-bondtype-num">1</div>
        <h3>Cannabis License Bonds</h3>
        <p>Required for dispensaries, cultivators, processors, and distributors. Guarantees compliance with all state cannabis regulations.</p>
        <a href="https://fc16062.propeller.insure/axelerator-public/#do=show+widget+page&name=public+home&one_search_search=cannabis" class="is-bondtype-cta">Apply Now →</a>
      </div>

      <div class="is-bondtype-card">
        <div class="is-bondtype-num">2</div>
        <h3>Cannabis Tax Bonds</h3>
        <p>Required by state revenue departments. Ensures timely payment of cannabis excise taxes, sales taxes, and fees.</p>
        <a href="https://fc16062.propeller.insure/axelerator-public/#do=show+widget+page&name=public+home&one_search_search=cannabis" class="is-bondtype-cta">Apply Now →</a>
      </div>

      <div class="is-bondtype-card">
        <div class="is-bondtype-num">3</div>
        <h3>Cannabis Cultivation Bonds</h3>
        <p>Required for growers and cultivation facilities. Guarantees compliance with agricultural, environmental, and security rules.</p>
        <a href="https://fc16062.propeller.insure/axelerator-public/#do=show+widget+page&name=public+home&one_search_search=cannabis" class="is-bondtype-cta">Apply Now →</a>
      </div>

      <div class="is-bondtype-card">
        <div class="is-bondtype-num">4</div>
        <h3>Cannabis Dispensary Bonds</h3>
        <p>Required for retail cannabis stores. Protects the state and consumers from regulatory violations.</p>
        <a href="https://fc16062.propeller.insure/axelerator-public/#do=show+widget+page&name=public+home&one_search_search=cannabis" class="is-bondtype-cta">Apply Now →</a>
      </div>

      <div class="is-bondtype-card">
        <div class="is-bondtype-num">5</div>
        <h3>Cannabis Distributor &amp; Transporter Bonds</h3>
        <p>Required for businesses transporting cannabis or cannabis products. Ensures proper handling, tracking, and delivery.</p>
        <a href="https://fc16062.propeller.insure/axelerator-public/#do=show+widget+page&name=public+home&one_search_search=cannabis" class="is-bondtype-cta">Apply Now →</a>
      </div>

      <div class="is-bondtype-card">
        <div class="is-bondtype-num">6</div>
        <h3>Cannabis Manufacturing / Processing Bonds</h3>
        <p>Required for extraction labs, edible manufacturers, and product processors. Guarantees compliance with safety, testing, and production regulations.</p>
        <a href="https://fc16062.propeller.insure/axelerator-public/#do=show+widget+page&name=public+home&one_search_search=cannabis" class="is-bondtype-cta">Apply Now →</a>
      </div>

      <div class="is-bondtype-card">
        <div class="is-bondtype-num">7</div>
        <h3>Hemp Processor &amp; Handler Bonds</h3>
        <p>Required for hemp growers, processors, and handlers under state hemp programs. Ensures compliance with USDA and state hemp regulations.</p>
        <a href="https://fc16062.propeller.insure/axelerator-public/#do=show+widget+page&name=public+home&one_search_search=cannabis" class="is-bondtype-cta">Apply Now →</a>
      </div>
    </div>
  </div>

  <div class="is-sec" id="cost">
    <div class="is-inner">
      <span class="is-eyebrow">Pricing</span>
      <h2>Cannabis Bond Amounts and Cost</h2>
      <p>Bond amounts vary by state and license type, typically ranging from $5,000 to $250,000, depending on:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Type of cannabis license</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Size and scope of operations</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>State regulatory requirements</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Tax obligations</span></div>
      </div>
      <p>Your premium depends on:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Bond amount</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Credit score</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Business financials</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Licensing history</span></div>
      </div>
      <p style="font-weight:700;color:#15803d;font-size:16px;">Most cannabis businesses qualify quickly with competitive rates. Simplifies licensing with a national bond platform that automatically routes you to the correct state and cannabis bond type.</p>
    </div>
  </div>

  <div class="is-sec" id="who-needs">
    <div class="is-inner">
      <span class="is-eyebrow">Eligibility</span>
      <h2>Who Needs a Cannabis Bond?</h2>
      <p>You may need a cannabis bond if you operate:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>A dispensary or retail cannabis store</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>A cultivation or grow facility</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>A cannabis manufacturing or extraction lab</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>A cannabis distributor or transporter</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>A cannabis testing laboratory</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>A hemp farm or hemp processing facility</span></div>
      </div>
      <p>Any business participating in the cannabis supply chain may be required to file one or more bonds.</p>
    </div>
  </div>

  <div class="is-sec" id="eligibility">
    <div class="is-inner">
      <span class="is-eyebrow">Requirements</span>
      <h2>Cannabis Bond Requirements &amp; Eligibility</h2>
      <p>States typically require:</p>
      <div class="is-check-list">
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Completed cannabis license application</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>State-mandated bond amount</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Credit review</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Background check</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Proof of financial responsibility</span></div>
        <div class="is-check-row"><div class="is-check-icon">✓</div><span>Annual or biannual renewal</span></div>
      </div>
      <p>Some states require separate bonds for tax compliance and operational compliance.</p>
    </div>
  </div>

  <div class="is-sec" id="process">
    <div class="is-inner">
      <span class="is-eyebrow">Simple Process</span>
      <h2>How the Cannabis Bond Process Works</h2>
      <div class="is-steps">
        <div class="is-step"><div class="is-step-num">1</div><div><h3>Complete the App</h3><p>Submit the quick, 60-second application. Supports cannabis operators in all legal states with fast approvals, competitive rates, and guaranteed regulatory compliance.</p></div></div>
        <div class="is-step"><div class="is-step-num">2</div><div><h3>Secure the Lowest Rate</h3><p>We match you with the best rate available from A-rated sureties.</p></div></div>
        <div class="is-step"><div class="is-step-num">3</div><div><h3>Receive Your Bond</h3><p>Same-day issuance available for state filing.</p></div></div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="states">
    <div class="is-inner">
      <span class="is-eyebrow">By State</span>
      <h2>State Cannabis Bond Pages</h2>
      <div class="is-state-card">
        <div class="is-state-flag">Oklahoma</div>
        <h4>Oklahoma Cannabis Bonds</h4>
        <p>Covers Oklahoma's OMMA-regulated cannabis bond requirements for dispensaries, growers, processors, and transporters.</p>
        <a href="https://fc16062.propeller.insure/axelerator-public/#do=show+widget+page&State_search_scheme_property=Oklahoma&State_search_scheme_property=Federal&name=public+home&one_search_search=cannabis">View Oklahoma Cannabis Bond Requirements →</a>
      </div>
    </div>
  </div>

  <div class="is-sec" id="why-us">
    <div class="is-inner">
      <span class="is-eyebrow">Our Advantage</span>
      <h2>Why Cannabis Businesses Choose Us</h2>
      <div class="is-why-grid">
        <div class="is-why-pill"><div class="is-why-icon">$</div><span>Lowest rates from A-rated sureties</span></div>
        <div class="is-why-pill"><div class="is-why-icon">⚡</div><span>Fast approvals</span></div>
        <div class="is-why-pill"><div class="is-why-icon">📲</div><span>Digital delivery for immediate filing</span></div>
        <div class="is-why-pill"><div class="is-why-icon">🎯</div><span>Cannabis-industry bond specialists</span></div>
        <div class="is-why-pill"><div class="is-why-icon">✓</div><span>100% state compliance guaranteed</span></div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="faq">
    <div class="is-inner">
      <span class="is-eyebrow">Questions</span>
      <h2>Top Cannabis Bond Questions Answered</h2>
      <p>Our most common questions answered efficiently.</p>
      <div class="is-faq-list">
        <details class="is-faq-item"><summary>How much does a cannabis bond cost?</summary><div class="is-faq-body"><p>Costs vary by state and license type, with bond amounts typically ranging from $5,000 to $250,000 depending on operation size and regulatory requirements.</p></div></details>
        <details class="is-faq-item"><summary>How long does approval take?</summary><div class="is-faq-body"><p>Approvals are fast, with same-day issuance available for state filing in most cases.</p></div></details>
        <details class="is-faq-item"><summary>What does a cannabis bond guarantee?</summary><div class="is-faq-body"><p>The bond guarantees compliance with state cannabis regulations, proper tax payment, security and tracking compliance, and protection against fraud or mismanagement.</p></div></details>
        <details class="is-faq-item"><summary>Can the bond be refunded?</summary><div class="is-faq-body"><p>Refund policies vary by surety and bond type. Contact us for specifics on your cannabis bond.</p></div></details>
        <details class="is-faq-item"><summary>Do I need separate bonds for different license types?</summary><div class="is-faq-body"><p>Yes — some states require separate bonds for tax compliance and operational compliance depending on your license type.</p></div></details>
      </div>
    </div>
  </div>

  <div class="is-sec">
    <div class="is-inner">
      <span class="is-eyebrow">Real Results</span>
      <h2>Customer Testimonials</h2>
      <p>What our customers are saying about us.</p>
      <div class="is-testimonials">
        <div class="is-testimonial"><p class="is-testimonial-text">Inspire Surety made the cannabis bonding process incredibly smooth. We received our bond the same day and completed our licensing without delays.</p><span class="is-testimonial-name">Peter B.</span><span class="is-testimonial-role">Cannabis Delivery Driver</span></div>
        <div class="is-testimonial"><p class="is-testimonial-text">Our cultivation facility needed multiple bonds. Inspire Surety delivered excellent rates and handled everything professionally.</p><span class="is-testimonial-name">Danny R.</span><span class="is-testimonial-role">Grow Facility Manager</span></div>
        <div class="is-testimonial"><p class="is-testimonial-text">We rely on Inspire Surety for all cannabis compliance bonds. Their speed and accuracy make licensing effortless.</p><span class="is-testimonial-name">J.K.</span><span class="is-testimonial-role">Extraction Lab</span></div>
        <div class="is-testimonial"><p class="is-testimonial-text">When expanding into manufacturing, Inspire Surety secured our additional bonds quickly. Outstanding service.</p><span class="is-testimonial-name">Linda K.</span><span class="is-testimonial-role">Dispensary Owner</span></div>
        <div class="is-testimonial"><p class="is-testimonial-text">As a new cannabis business, we needed clear guidance. Inspire Surety walked us through every step and delivered our bond instantly.</p><span class="is-testimonial-name">Ariana L.</span><span class="is-testimonial-role">Edible Manufacturer</span></div>
        <div class="is-testimonial"><p class="is-testimonial-text">Licensing deadlines in our state are strict. Inspire Surety got our cannabis bond issued immediately.</p><span class="is-testimonial-name">Noah B.</span><span class="is-testimonial-role">Dispensary Owner</span></div>
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
      <a href="/surety-bond-learning-center/" style="color:#15803d;font-weight:700;font-size:14.5px;text-decoration:none;">Surety Bond Learning Center →</a>
    </div>
  </div>

  <div class="is-final-wrap">
    <div class="is-inner">
      <h2>Ready to Get Your Cannabis Bond?</h2>
      <p>Fast approvals, lowest rates, guaranteed state compliance.</p>
      <a href="https://fc16062.propeller.insure/axelerator-public/#do=show+widget+page&name=public+home&one_search_search=cannabis" class="is-btn-white">Start My Application</a>
    </div>
  </div>

</div>