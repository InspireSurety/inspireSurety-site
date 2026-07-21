---
title: "CA Prequalification Letter"
layout: "layout.njk"
---

<style>
.is-cpl *, .is-cpl *::before, .is-cpl *::after { box-sizing: border-box; }
.is-cpl {
  font-family: inherit;
  color: #0f172a;
  margin: 0 calc(-50vw + 50%);
  width: 100vw;
  padding: 0;
}
.is-cpl .is-inner { max-width: 1100px; margin: 0 auto; padding: 0 24px; }

.is-cpl .is-hero-wrap {
  background: linear-gradient(135deg, #292524 0%, #57534e 55%, #d97706 100%);
  padding: 76px 0 68px;
  position: relative;
  overflow: hidden;
}
.is-cpl .is-hero-wrap::before {
  content: "";
  position: absolute;
  top: -120px; right: -80px;
  width: 440px; height: 440px;
  background: radial-gradient(circle, rgba(217,119,6,0.28) 0%, transparent 70%);
  border-radius: 50%;
}
.is-cpl .is-hero-wrap::after {
  content: "";
  position: absolute;
  bottom: -140px; left: -100px;
  width: 380px; height: 380px;
  background: radial-gradient(circle, rgba(87,83,78,0.22) 0%, transparent 70%);
  border-radius: 50%;
}
.is-cpl .is-hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
  color: #fde68a; font-size: 11px; font-weight: 800; letter-spacing: 0.08em;
  text-transform: uppercase; padding: 6px 16px; border-radius: 999px;
  margin-bottom: 22px; position: relative; z-index: 1;
}
.is-cpl .is-hero-badge span { width: 6px; height: 6px; border-radius: 50%; background: #f59e0b; display: inline-block; }
.is-cpl .is-hero-wrap h1 {
  font-size: clamp(30px, 4.6vw, 48px) !important; font-weight: 900 !important;
  color: #fff !important; line-height: 1.15 !important; margin: 0 0 18px !important;
  position: relative; z-index: 1; letter-spacing: -0.02em; max-width: 700px;
}
.is-cpl .is-hero-wrap p {
  font-size: 16.5px; color: rgba(255,255,255,0.88); line-height: 1.7;
  max-width: 680px; margin: 0; position: relative; z-index: 1;
}

.is-cpl .is-toc-wrap { margin-top: -34px; position: relative; z-index: 2; }
.is-cpl .is-toc-card {
  background: #1c1917; border-radius: 16px; padding: 26px 30px;
  box-shadow: 0 20px 44px rgba(0,0,0,0.28);
}
.is-cpl .is-toc-card h3 { font-size: 12px !important; font-weight: 800 !important; letter-spacing: 0.08em; text-transform: uppercase; color: #fcd34d !important; margin: 0 0 14px !important; }
.is-cpl .is-toc-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px 24px; list-style: none; padding: 0; margin: 0; }
.is-cpl .is-toc-list li { font-size: 13.5px; }
.is-cpl .is-toc-list a { color: #e7e5e4; text-decoration: none; transition: color 0.2s; }
.is-cpl .is-toc-list a:hover { color: #fcd34d; }

.is-cpl .is-sec { background: #fff; padding: 60px 0; }
.is-cpl .is-sec + .is-sec { border-top: 1px solid #f1f5f9; }
.is-cpl .is-sec h2 { font-size: clamp(21px, 2.6vw, 30px) !important; font-weight: 900 !important; color: #0f172a !important; margin: 0 0 8px !important; letter-spacing: -0.01em; }
.is-cpl .is-eyebrow { display: block; font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #d97706; margin-bottom: 10px; }
.is-cpl .is-desc { font-size: 15px; color: #64748b; line-height: 1.7; margin: 0 0 20px; }
.is-cpl .is-sec p { font-size: 15px; color: #475569; line-height: 1.75; margin: 0 0 16px; }

.is-cpl .is-guarantee-list { list-style: none; padding: 0; margin: 14px 0; }
.is-cpl .is-guarantee-list li {
  font-size: 14.5px; color: #334155; padding: 8px 0 8px 26px; position: relative; line-height: 1.5;
  border-bottom: 1px solid #f8fafc;
}
.is-cpl .is-guarantee-list li:last-child { border-bottom: none; }
.is-cpl .is-guarantee-list li::before {
  content: "✓"; position: absolute; left: 0; top: 8px;
  color: #d97706; font-weight: 900; font-size: 14px;
}

.is-cpl .is-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.is-cpl .is-related-col h4 { font-size: 13px !important; font-weight: 800 !important; letter-spacing: 0.06em; text-transform: uppercase; color: #d97706 !important; margin: 0 0 14px !important; }
.is-cpl .is-related-list { display: flex; flex-direction: column; gap: 4px; }
.is-cpl .is-related-list a {
  font-size: 14px; color: #334155; text-decoration: none; padding: 8px 0;
  border-bottom: 1px solid #f1f5f9; transition: color 0.15s;
}
.is-cpl .is-related-list a:last-child { border-bottom: none; }
.is-cpl .is-related-list a:hover { color: #d97706; }

.is-cpl .is-final-wrap {
  background: linear-gradient(135deg, #292524, #57534e, #d97706);
  padding: 68px 0; text-align: center; position: relative; overflow: hidden;
}
.is-cpl .is-final-wrap::before { content: ""; position: absolute; top: -80px; left: -80px; width: 320px; height: 320px; background: rgba(255,255,255,0.06); border-radius: 50%; }
.is-cpl .is-final-wrap::after { content: ""; position: absolute; bottom: -100px; right: -60px; width: 380px; height: 380px; background: rgba(255,255,255,0.05); border-radius: 50%; }
.is-cpl .is-final-wrap h2 { font-size: clamp(24px, 3.2vw, 36px) !important; color: #fff !important; margin: 0 0 14px !important; position: relative; z-index: 1; font-weight: 900 !important; }
.is-cpl .is-final-wrap p { font-size: 15.5px; color: rgba(255,255,255,0.88); margin: 0 auto 30px; max-width: 480px; position: relative; z-index: 1; }
.is-cpl .is-btn-white {
  display: inline-block; background: #fff; color: #292524 !important; padding: 15px 38px;
  border-radius: 12px; font-size: 15px; font-weight: 800; text-decoration: none !important;
  position: relative; z-index: 1; transition: all 0.2s; box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}
.is-cpl .is-btn-white:hover { background: #fef3c7; transform: translateY(-3px); }

@media (max-width: 900px) {
  .is-cpl .is-toc-list { grid-template-columns: repeat(2, 1fr); }
  .is-cpl .is-related-grid { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .is-cpl .is-hero-wrap { padding: 52px 0 46px; }
  .is-cpl .is-sec { padding: 42px 0; }
  .is-cpl .is-toc-list { grid-template-columns: 1fr; }
}
</style>

<div class="is-cpl">

  <div class="is-hero-wrap">
    <div class="is-inner">
      <div class="is-hero-badge"><span></span>Bond Guide</div>
      <h1>CA Prequalification Letter</h1>
      <p>A strong CA prequalification letter unlocks public and private work across California. Below is a focused, action&#8209;oriented guide that shows exactly what to include, how agencies score submissions, a ready checklist, and practical steps to speed approvals so you can bid with confidence.</p>
    </div>
  </div>

  <div class="is-inner is-toc-wrap">
    <div class="is-toc-card">
      <h3>On This Page</h3>
      <ul class="is-toc-list">
        <li><a href="#prequal-letter">Prequalification Letter CA</a></li>
        <li><a href="#prequal-packet">CA Prequal Packet</a></li>
        <li><a href="#ca-letter">California Prequal Letter</a></li>
        <li><a href="#template">Prequal Letter Template CA</a></li>
        <li><a href="#contractor-prequal">Contractor Prequal California</a></li>
        <li><a href="#checklist">Prequalification Checklist CA</a></li>
        <li><a href="#scoring">Prequal Scoring Factors CA</a></li>
        <li><a href="#bonding-letter">Bonding Capacity Letter CA</a></li>
        <li><a href="#dir-form">DIR Prequal Form CA</a></li>
        <li><a href="#tips">Prequal Tips &amp; Action Steps</a></li>
        <li><a href="#related">Related Resources</a></li>
      </ul>
    </div>
  </div>

  <div class="is-sec">
    <div class="is-inner">
      <p>Need more construction bond resources? Visit our <a href="/contractors-construction-bond-hub/" style="color:#d97706;font-weight:700;">Contractors &amp; Construction Bond Hub</a> for guides on bid, performance, payment, and subdivision bonds.</p>
    </div>
  </div>

  <div class="is-sec" id="prequal-letter">
    <div class="is-inner">
      <span class="is-eyebrow">Overview</span>
      <h2>Prequalification Letter CA</h2>
      <p>A prequalification letter CA summarizes your company's license, bonding capacity, financial strength, safety record, and relevant experience so an awarding body can decide if you qualify to bid. Keep it concise, factual, and easy to verify.</p>
    </div>
  </div>

  <div class="is-sec" id="prequal-packet">
    <div class="is-inner">
      <span class="is-eyebrow">Document Set</span>
      <h2>CA Prequal Packet</h2>
      <p>A CA prequal packet is the full set of documents you submit: the cover letter, agency questionnaire, financials, bonding letter, licenses, insurance, resumes, and references. Label attachments and include an index to make review fast.</p>
    </div>
  </div>

  <div class="is-sec" id="ca-letter">
    <div class="is-inner">
      <span class="is-eyebrow">Structure</span>
      <h2>California Prequal Letter</h2>
      <p>Your California prequal letter should open with one clear paragraph: company name, CSLB license number, DIR registration, single&#8209;job bonding capacity, and the signer's contact. Use short bullets or numbered items for key facts.</p>
    </div>
  </div>

  <div class="is-sec" id="template">
    <div class="is-inner">
      <span class="is-eyebrow">Format</span>
      <h2>Prequal Letter Template CA</h2>
      <p>A tight prequal letter template CA includes: company info; license and DIR registration; single&#8209;job and aggregate bonding capacity; a one&#8209;page financial summary with attachments; three project references; EMR or safety rating; insurance limits; authorized signer and contact.</p>
    </div>
  </div>

  <div class="is-sec" id="contractor-prequal">
    <div class="is-inner">
      <span class="is-eyebrow">Screening Process</span>
      <h2>Contractor Prequal California</h2>
      <p>Contractor prequal California programs screen bidders for capacity and risk. Public agencies and many owners score on financials, experience, safety, claims, and staff qualifications. Match your submission to the scoring categories to maximize points.</p>
      <p>See our <a href="/contractor-prequalification/" style="color:#d97706;font-weight:700;">Contractor Prequalification</a> guide for a full walkthrough.</p>
    </div>
  </div>

  <div class="is-sec" id="checklist">
    <div class="is-inner">
      <span class="is-eyebrow">Prep Checklist</span>
      <h2>Prequalification Checklist CA</h2>
      <ul class="is-guarantee-list">
        <li>Confirm the agency's exact prequalification form and submission deadline.</li>
        <li>Gather CSLB license, EIN, DIR registration, and current insurance certificates.</li>
        <li>Attach 2&#8211;3 years of financial statements and recent bank statements.</li>
        <li>Include a bonding capacity letter from your surety or broker.</li>
        <li>Add three relevant project references, key staff resumes, and safety docs.</li>
      </ul>
    </div>
  </div>

  <div class="is-sec" id="scoring">
    <div class="is-inner">
      <span class="is-eyebrow">Evaluation Criteria</span>
      <h2>Prequal Scoring Factors CA</h2>
      <p>Agencies rate bidders on financial strength, similar project experience, safety and EMR, claims history, staffing, and schedule capacity. Clear, verifiable documentation reduces follow&#8209;up and improves scores.</p>
    </div>
  </div>

  <div class="is-sec" id="bonding-letter">
    <div class="is-inner">
      <span class="is-eyebrow">Surety Verification</span>
      <h2>Bonding Capacity Letter CA</h2>
      <p>A bonding capacity letter CA from your surety or broker should state single&#8209;job and aggregate capacity, the surety contact for verification, and any collateral requirements. Short, signed letters speed underwriting checks.</p>
    </div>
  </div>

  <div class="is-sec" id="dir-form">
    <div class="is-inner">
      <span class="is-eyebrow">Compliance</span>
      <h2>DIR Prequal Form CA</h2>
      <p>If the agency uses a DIR prequal form CA, complete every line exactly, attach required exhibits, and sign where requested. Omissions are the most common cause for delays and rejections.</p>
    </div>
  </div>

  <div class="is-sec" id="tips">
    <div class="is-inner">
      <span class="is-eyebrow">Action Steps</span>
      <h2>Prequal Tips California &amp; Action Steps</h2>
      <p>Start the packet before bid invitations arrive. Keep a standardized packet you can tailor for each agency. Use a surety broker to create a succinct bonding letter. Label attachments, include an index, and provide a single point of contact for questions.</p>
      <p><strong>Action steps:</strong> download the agency form, assemble your CA prequal packet using the checklist, obtain a short bonding capacity letter, and submit early with signed authorizations so reviewers can verify quickly.</p>
    </div>
  </div>

  <div class="is-sec" id="related">
    <div class="is-inner">
      <span class="is-eyebrow">Explore More</span>
      <h2>Related Contractor &amp; Construction Resources</h2>
      <p class="is-desc">Guides and tools to qualify, bid, and complete bonded projects with confidence.</p>
      <div class="is-related-grid">
        <div class="is-related-col">
          <h4>Core Guides</h4>
          <div class="is-related-list">
            <a href="/construction-contractor-bond-guide/">Construction &amp; Contractor Bond Guide</a>
            <a href="/contractors-construction-bond-hub/">Contractors &amp; Construction Bond Hub</a>
            <a href="/how-surety-bond-cost-are-calculated/">How Surety Bond Costs Are Calculated</a>
            <a href="/contractor-prequalification/">Contractor Prequalification</a>
          </div>
        </div>
        <div class="is-related-col">
          <h4>Bid, Performance &amp; Payment</h4>
          <div class="is-related-list">
            <a href="/bid-bond/">Bid Bond</a>
            <a href="/payment-performance-bonds/">Payment &amp; Performance Bonds</a>
          </div>
        </div>
        <div class="is-related-col">
          <h4>Licensing &amp; State Requirements</h4>
          <div class="is-related-list">
            <a href="/construction-contractor-license-bonds/">Construction &amp; Contractor License Bonds</a>
            <a href="/arizona-contractor-license-bonds/">Arizona Contractor License Bonds</a>
            <a href="/florida-contractor-license-bonds/">Florida Contractor License Bonds</a>
            <a href="/texas-contractor-license-bonds/">Texas Contractor License Bonds</a>
            <a href="/contractor-license-bond/">Contractor License Bond</a>
          </div>
        </div>
      </div>
      <div class="is-related-grid" style="margin-top:20px;">
        <div class="is-related-col">
          <h4>Subdivision &amp; Site Work</h4>
          <div class="is-related-list">
            <a href="/subdivision-bond/">Subdivision Bond</a>
            <a href="/environmental-reclamation-bond-guide/">Environmental &amp; Reclamation Bond Guide</a>
            <a href="/standby-trust-agreement/">Standby Trust Agreement</a>
          </div>
        </div>
        <div class="is-related-col">
          <h4>Capacity &amp; Program Options</h4>
          <div class="is-related-list">
            <a href="/construction-bond-accounts-to-20m-aggregate/">Construction Bond Accounts to $20M Aggregate</a>
            <a href="/surety-bond-basics-guide/">Surety Bond Basics Guide</a>
            <a href="/surety-bond-learning-center/">Learning Center</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="is-final-wrap">
    <div class="is-inner">
      <h2>Need Help With Your Prequalification Packet?</h2>
      <p>Get matched with a licensed surety agent to build your bonding capacity letter today.</p>
      <a href="/contractor-prequalification/" class="is-btn-white">Visit Contractor Prequalification</a>
    </div>
  </div>

</div>