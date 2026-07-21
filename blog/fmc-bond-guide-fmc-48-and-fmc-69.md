---
title: "FMC Bond Guide: FMC-48 and FMC-69"
layout: "layout.njk"
---

<style>
.is-fmc *, .is-fmc *::before, .is-fmc *::after { box-sizing: border-box; }
.is-fmc {
  font-family: inherit;
  color: #0f172a;
  margin: 0 calc(-50vw + 50%);
  width: 100vw;
  padding: 0;
}
.is-fmc .is-inner { max-width: 1100px; margin: 0 auto; padding: 0 24px; }

.is-fmc .is-hero-wrap {
  background: linear-gradient(135deg, #334155 0%, #475569 55%, #64748b 100%);
  padding: 76px 0 68px;
  position: relative;
  overflow: hidden;
}
.is-fmc .is-hero-wrap::before {
  content: "";
  position: absolute;
  top: -120px; right: -80px;
  width: 440px; height: 440px;
  background: radial-gradient(circle, rgba(100,116,139,0.28) 0%, transparent 70%);
  border-radius: 50%;
}
.is-fmc .is-hero-wrap::after {
  content: "";
  position: absolute;
  bottom: -140px; left: -100px;
  width: 380px; height: 380px;
  background: radial-gradient(circle, rgba(71,85,105,0.22) 0%, transparent 70%);
  border-radius: 50%;
}
.is-fmc .is-hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
  color: #cbd5e1; font-size: 11px; font-weight: 800; letter-spacing: 0.08em;
  text-transform: uppercase; padding: 6px 16px; border-radius: 999px;
  margin-bottom: 22px; position: relative; z-index: 1;
}
.is-fmc .is-hero-badge span { width: 6px; height: 6px; border-radius: 50%; background: #94a3b8; display: inline-block; }
.is-fmc .is-hero-wrap h1 {
  font-size: clamp(30px, 4.6vw, 48px) !important; font-weight: 900 !important;
  color: #fff !important; line-height: 1.15 !important; margin: 0 0 18px !important;
  position: relative; z-index: 1; letter-spacing: -0.02em; max-width: 700px;
}
.is-fmc .is-hero-wrap p {
  font-size: 16.5px; color: rgba(255,255,255,0.88); line-height: 1.7;
  max-width: 680px; margin: 0; position: relative; z-index: 1;
}

.is-fmc .is-toc-wrap { margin-top: -34px; position: relative; z-index: 2; }
.is-fmc .is-toc-card {
  background: #1e293b; border-radius: 16px; padding: 26px 30px;
  box-shadow: 0 20px 44px rgba(0,0,0,0.28);
}
.is-fmc .is-toc-card h3 { font-size: 12px !important; font-weight: 800 !important; letter-spacing: 0.08em; text-transform: uppercase; color: #cbd5e1 !important; margin: 0 0 14px !important; }
.is-fmc .is-toc-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px 24px; list-style: none; padding: 0; margin: 0; }
.is-fmc .is-toc-list li { font-size: 13.5px; }
.is-fmc .is-toc-list a { color: #e7e5e4; text-decoration: none; transition: color 0.2s; }
.is-fmc .is-toc-list a:hover { color: #cbd5e1; }

.is-fmc .is-sec { background: #fff; padding: 60px 0; }
.is-fmc .is-sec + .is-sec { border-top: 1px solid #f1f5f9; }
.is-fmc .is-sec h2 { font-size: clamp(21px, 2.6vw, 30px) !important; font-weight: 900 !important; color: #0f172a !important; margin: 0 0 8px !important; letter-spacing: -0.01em; }
.is-fmc .is-eyebrow { display: block; font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #475569; margin-bottom: 10px; }
.is-fmc .is-desc { font-size: 15px; color: #64748b; line-height: 1.7; margin: 0 0 20px; }
.is-fmc .is-sec p { font-size: 15px; color: #475569; line-height: 1.75; margin: 0 0 16px; }

.is-fmc .is-guarantee-list { list-style: none; padding: 0; margin: 14px 0; }
.is-fmc .is-guarantee-list li {
  font-size: 14.5px; color: #334155; padding: 8px 0 8px 26px; position: relative; line-height: 1.5;
  border-bottom: 1px solid #f8fafc;
}
.is-fmc .is-guarantee-list li:last-child { border-bottom: none; }
.is-fmc .is-guarantee-list li::before {
  content: "✓"; position: absolute; left: 0; top: 8px;
  color: #475569; font-weight: 900; font-size: 14px;
}

.is-fmc .is-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.is-fmc .is-related-col h4 { font-size: 13px !important; font-weight: 800 !important; letter-spacing: 0.06em; text-transform: uppercase; color: #475569 !important; margin: 0 0 14px !important; }
.is-fmc .is-related-list { display: flex; flex-direction: column; gap: 4px; }
.is-fmc .is-related-list a {
  font-size: 14px; color: #334155; text-decoration: none; padding: 8px 0;
  border-bottom: 1px solid #f1f5f9; transition: color 0.15s;
}
.is-fmc .is-related-list a:last-child { border-bottom: none; }
.is-fmc .is-related-list a:hover { color: #475569; }

.is-fmc .is-final-wrap {
  background: linear-gradient(135deg, #334155, #475569, #64748b);
  padding: 68px 0; text-align: center; position: relative; overflow: hidden;
}
.is-fmc .is-final-wrap::before { content: ""; position: absolute; top: -80px; left: -80px; width: 320px; height: 320px; background: rgba(255,255,255,0.06); border-radius: 50%; }
.is-fmc .is-final-wrap::after { content: ""; position: absolute; bottom: -100px; right: -60px; width: 380px; height: 380px; background: rgba(255,255,255,0.05); border-radius: 50%; }
.is-fmc .is-final-wrap h2 { font-size: clamp(24px, 3.2vw, 36px) !important; color: #fff !important; margin: 0 0 14px !important; position: relative; z-index: 1; font-weight: 900 !important; }
.is-fmc .is-final-wrap p { font-size: 15.5px; color: rgba(255,255,255,0.88); margin: 0 auto 30px; max-width: 480px; position: relative; z-index: 1; }
.is-fmc .is-btn-white {
  display: inline-block; background: #fff; color: #334155 !important; padding: 15px 38px;
  border-radius: 12px; font-size: 15px; font-weight: 800; text-decoration: none !important;
  position: relative; z-index: 1; transition: all 0.2s; box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}
.is-fmc .is-btn-white:hover { background: #f1f5f9; transform: translateY(-3px); }

@media (max-width: 900px) {
  .is-fmc .is-toc-list { grid-template-columns: repeat(2, 1fr); }
  .is-fmc .is-related-grid { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .is-fmc .is-hero-wrap { padding: 52px 0 46px; }
  .is-fmc .is-sec { padding: 42px 0; }
  .is-fmc .is-toc-list { grid-template-columns: 1fr; }
}
</style>

<div class="is-fmc">

  <div class="is-hero-wrap">
    <div class="is-inner">
      <div class="is-hero-badge"><span></span>Bond Guide</div>
      <h1>FMC Bond Guide: FMC-48 and FMC-69</h1>
      <p>The global supply chain runs on trust, paperwork, and guarantees. For ocean transportation intermediaries, that guarantee often takes the form of a FMC bond or Federal Maritime Commission bond. Whether you're seeking an ocean freight forwarder bond or an NVOCC bond, understanding the differences between an FMC-48 bond and an FMC-69 bond is essential to winning licenses, protecting shippers, and keeping your business sailing smoothly.</p>
    </div>
  </div>

  <div class="is-inner is-toc-wrap">
    <div class="is-toc-card">
      <h3>On This Page</h3>
      <ul class="is-toc-list">
        <li><a href="#what-they-do">What These FMC Bonds Do</a></li>
        <li><a href="#who-needs">Who Needs Which FMC Bond</a></li>
        <li><a href="#amounts">Bond Amounts &amp; Key Differences</a></li>
        <li><a href="#how-to-obtain">How to Obtain an FMC Bond</a></li>
        <li><a href="#cost">Cost, Collateral &amp; Practical Tips</a></li>
        <li><a href="#takeaway">Final Takeaway</a></li>
        <li><a href="#related">Related Resources</a></li>
      </ul>
    </div>
  </div>

  <div class="is-sec">
    <div class="is-inner">
      <p>Working with federal or BLM bond requirements? Explore our <a href="/federal-blm-bond-hub/" style="color:#475569;font-weight:700;">Federal &amp; BLM Bond Hub</a> for USDA, BLM, HUD, and federal agency bond resources.</p>
    </div>
  </div>

  <div class="is-sec" id="what-they-do">
    <div class="is-inner">
      <span class="is-eyebrow">Overview</span>
      <h2>What These FMC Bonds Do</h2>
      <ul class="is-guarantee-list">
        <li>Guarantee financial responsibility to shippers, carriers, and regulators for lawful conduct and proper handling of freight using an OTI bond or other FMC instruments.</li>
        <li>Protect against harms such as misapplied funds, failure to perform contractual obligations, or violations of the Shipping Act under a Federal Maritime Commission bond.</li>
        <li>Enable licensure and registration with the Commission, a prerequisite for many international ocean transport operations where an FMC bond is required.</li>
      </ul>
    </div>
  </div>

  <div class="is-sec" id="who-needs">
    <div class="is-inner">
      <span class="is-eyebrow">Applicability</span>
      <h2>Who Needs Which FMC Bond</h2>
      <ul class="is-guarantee-list">
        <li>Ocean freight forwarders typically secure an ocean freight forwarder bond as proof of financial responsibility to meet FMC bond requirements.</li>
        <li>Non-Vessel-Operating Common Carriers (NVOCCs) often obtain an NVOCC bond with higher thresholds and distinct filing forms.</li>
        <li>Group or pooled operations and associations of OTIs may use the FMC-69 bond form for collective obligations, while individual principals usually rely on an FMC-48 bond or equivalent OTI bond.</li>
      </ul>
    </div>
  </div>

  <div class="is-sec" id="amounts">
    <div class="is-inner">
      <span class="is-eyebrow">Bond Structure</span>
      <h2>Bond Amounts and Key Differences</h2>
      <ul class="is-guarantee-list">
        <li>Bond levels reflect risk and status: smaller amounts apply to ocean freight forwarders, higher thresholds apply to NVOCCs and certain foreign registrants under specific FMC bond requirements.</li>
        <li>FMC-48 bond is the individual OTI bond form commonly used for single entities; FMC-69 bond is structured for groups or associations of OTIs and can cover collective obligations under defined terms.</li>
        <li>The Commission sets amounts to match statutory requirements and to ensure adequate protection for the marketplace, which influences overall FMC bond cost.</li>
      </ul>
    </div>
  </div>

  <div class="is-sec" id="how-to-obtain">
    <div class="is-inner">
      <span class="is-eyebrow">Process</span>
      <h2>How to Obtain an FMC Bond</h2>
      <ul class="is-guarantee-list">
        <li>Determine the exact bond form and amount required by the FMC for your business type and registration category to meet FMC bond requirements.</li>
        <li>Work with a surety agent experienced in maritime bonds to prepare an application package that supports either an FMC-48 bond or FMC-69 bond filing.</li>
        <li>Underwriting review evaluates credit, cash flow, business experience, and any prior claims or regulatory actions that affect FMC bond cost.</li>
        <li>Issue and file the Federal Maritime Commission bond with the FMC to activate licensure or registration and secure your OTI bond status.</li>
      </ul>
    </div>
  </div>

  <div class="is-sec" id="cost">
    <div class="is-inner">
      <span class="is-eyebrow">Pricing</span>
      <h2>Cost, Collateral, and Practical Tips</h2>
      <ul class="is-guarantee-list">
        <li>Premiums are a fraction of the bond amount and depend mainly on credit profile and financial strength, which determines FMC bond cost.</li>
        <li>Collateral or indemnity may be required for applicants with marginal credit or unique risk factors; strong financials reduce these demands.</li>
        <li>Plan ahead: bonding takes underwriting time, especially for new entrants or foreign registrants seeking an NVOCC bond or ocean freight forwarder bond.</li>
        <li>Keep clean records and strong financial statements to secure the best rates and minimal collateral for any FMC bond.</li>
      </ul>
    </div>
  </div>

  <div class="is-sec" id="takeaway">
    <div class="is-inner">
      <span class="is-eyebrow">Summary</span>
      <h2>Final Takeaway</h2>
      <p>FMC-48 bond and FMC-69 bond instruments are market-enabling tools that demonstrate credibility, protect trading partners, and unlock permission to operate in international maritime commerce. Treat the bond process—whether you need an OTI bond, ocean freight forwarder bond, or NVOCC bond—as a business priority: prepare documentation, work with an experienced surety partner, and manage your financial profile to lower FMC bond cost and accelerate approval. Secure the right Federal Maritime Commission bond, and you secure your place in the ocean transport marketplace.</p>
    </div>
  </div>

  <div class="is-sec" id="related">
    <div class="is-inner">
      <span class="is-eyebrow">Explore More</span>
      <h2>Related Commercial &amp; License Bond Resources</h2>
      <p class="is-desc">Everything you need for licensing compliance and financial assurance across industries.</p>
      <div class="is-related-grid">
        <div class="is-related-col">
          <h4>Guides &amp; Hubs</h4>
          <div class="is-related-list">
            <a href="/license-permit-bond-guide/">License &amp; Permit Bond Guide</a>
            <a href="/license-permit-bond-hub/">License &amp; Permit Bond Hub</a>
            <a href="/surety-bond-basics-guide/">Surety Bond Basics Guide</a>
          </div>
        </div>
        <div class="is-related-col">
          <h4>Popular Bonds</h4>
          <div class="is-related-list">
            <a href="/janitorial-bonds/">Janitorial Bonds</a>
            <a href="/freight-broker-bonds/">Freight Broker Bonds</a>
            <a href="/warehouse-operator-bond/">Warehouse Operator Bond</a>
            <a href="/employment-agency-bond/">Employment Agency Bond</a>
            <a href="/driving-schools-bond/">Driving Schools Bond</a>
            <a href="/escrow-agent-bond/">Escrow Agent Bond</a>
            <a href="/auctioneer-bond/">Auctioneer Bond</a>
            <a href="/insurance-adjuster-bond/">Insurance Adjuster Bond</a>
            <a href="/liquor-license-bond/">Liquor License Bond</a>
            <a href="/tax-bond/">Tax Bond</a>
            <a href="/utility-deposit-bonds/">Utility Deposit Bonds</a>
            <a href="/bonded-title/">Bonded Title</a>
          </div>
        </div>
        <div class="is-related-col">
          <h4>State-Specific</h4>
          <div class="is-related-list">
            <a href="/collection-agency-arizona/">Collection Agency – Arizona</a>
            <a href="/collection-agency-texas/">Collection Agency – Texas</a>
            <a href="/collection-agency-florida/">Collection Agency – Florida</a>
            <a href="/money-transmitter-arizona/">Money Transmitter – Arizona</a>
            <a href="/money-transmitter-texas/">Money Transmitter – Texas</a>
            <a href="/motor-vehicle-dealer-arizona/">Motor Vehicle Dealer – Arizona</a>
            <a href="/motor-vehicle-dealer-texas/">Motor Vehicle Dealer – Texas</a>
            <a href="/motor-vehicle-dealer-florida/">Motor Vehicle Dealer – Florida</a>
            <a href="/notary-arizona/">Notary – Arizona</a>
            <a href="/notary-texas/">Notary – Texas</a>
            <a href="/health-club-arizona/">Health Club – Arizona</a>
            <a href="/health-club-texas/">Health Club – Texas</a>
            <a href="/health-club-florida/">Health Club – Florida</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="is-final-wrap">
    <div class="is-inner">
      <h2>Ready to Get Your FMC Bond?</h2>
      <p>Get matched with a licensed surety agent and secure your ocean transport bond today.</p>
      <a href="/ocean-transport-bond/" class="is-btn-white">Get Your Ocean Transport Bond</a>
    </div>
  </div>

</div>