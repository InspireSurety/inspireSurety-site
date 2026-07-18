---
title: "Glossary of Surety Bond Terms"
layout: "layout.njk"
---

<style>
.is-gl *, .is-gl *::before, .is-gl *::after { box-sizing: border-box; }
.is-gl {
  font-family: inherit;
  color: #0f172a;
  margin: 0 calc(-50vw + 50%);
  width: 100vw;
  padding: 0;
}
.is-gl .is-inner { max-width: 1000px; margin: 0 auto; padding: 0 24px; }

/* ---- HERO: INDIGO AUTHORITY ---- */
.is-gl .is-hero-wrap {
  background: linear-gradient(135deg, #1e1b4b 0%, #4a3ac8 55%, #7c73f5 100%);
  padding: 72px 0 64px;
  position: relative;
  overflow: hidden;
}
.is-gl .is-hero-wrap::before {
  content: "";
  position: absolute;
  top: -100px; right: -100px;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  border-radius: 50%;
}
.is-gl .is-hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.22);
  color: #c7c3ff; font-size: 11px; font-weight: 800; letter-spacing: 0.08em;
  text-transform: uppercase; padding: 6px 16px; border-radius: 999px;
  margin-bottom: 20px; position: relative; z-index: 1;
}
.is-gl .is-hero-wrap h1 {
  font-size: clamp(32px, 5vw, 52px) !important; font-weight: 900 !important;
  color: #fff !important; line-height: 1.1 !important; margin: 0 0 12px !important;
  position: relative; z-index: 1; letter-spacing: -0.02em;
}
.is-gl .is-hero-tag { font-size: 17px; color: #c7c3ff; font-weight: 700; margin-bottom: 20px; position: relative; z-index: 1; }
.is-gl .is-hero-wrap p { font-size: 16px; color: rgba(255,255,255,0.88); line-height: 1.7; max-width: 600px; margin: 0 0 28px; position: relative; z-index: 1; }
.is-gl .is-hero-note { font-size: 13px; color: rgba(255,255,255,0.6); margin-top: 14px; position: relative; z-index: 1; }

/* ---- TOC ---- */
.is-gl .is-toc {
  background: #1a1730; border-radius: 20px; padding: 32px 36px;
  margin: -36px auto 0; max-width: 940px; position: relative; z-index: 2;
  box-shadow: 0 20px 50px rgba(0,0,0,0.25);
}
.is-gl .is-toc-title { font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #c7c3ff; margin-bottom: 16px; }
.is-gl .is-toc-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; }
.is-gl .is-toc-grid a {
  font-size: 14px; color: #e2e8f0; text-decoration: none; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,0.06); border-radius: 8px; padding: 10px 0;
  transition: background 0.2s, color 0.2s;
}
.is-gl .is-toc-grid a:hover { background: #4a3ac8; color: #fff; }

/* ---- SECTIONS: WHITE CANVAS ---- */
.is-gl .is-sec { background: #fff; padding: 64px 0; }
.is-gl .is-sec + .is-sec { border-top: 1px solid #f1f5f9; }
.is-gl .is-sec h2 { font-size: clamp(22px, 2.8vw, 30px) !important; font-weight: 900 !important; color: #0f172a !important; margin: 0 0 16px !important; letter-spacing: -0.01em; }
.is-gl .is-eyebrow { display: inline-block; font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #4338ca; margin-bottom: 10px; }
.is-gl .is-sec p { font-size: 15px; color: #475569; line-height: 1.75; margin: 0 0 14px; }

/* ---- TERM CARDS ---- */
.is-gl .is-term-list { display: flex; flex-direction: column; gap: 14px; margin: 20px 0; }
.is-gl .is-term-card {
  background: #fff; border: 1px solid #e2e8f0; border-top: 3px solid #4a3ac8;
  border-radius: 12px; padding: 22px 24px; scroll-margin-top: 100px;
}
.is-gl .is-term-card h3 { font-size: 17px !important; font-weight: 800 !important; color: #1e1b4b !important; margin: 0 0 8px !important; }
.is-gl .is-term-card p { font-size: 14.5px; color: #475569; margin: 0; line-height: 1.7; }
.is-gl .is-term-card a { color: #4a3ac8; font-weight: 700; text-decoration: underline; }
.is-gl .is-term-card a:hover { color: #7c73f5; }

/* ---- HUB TILES ---- */
.is-gl .is-tile-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 24px 0; }
.is-gl .is-tile {
  background: #fff; border: 1px solid #e2e8f0; border-top: 3px solid #4a3ac8;
  border-radius: 12px; padding: 22px 20px; text-decoration: none; display: block;
  transition: all 0.2s;
}
.is-gl .is-tile:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(0,0,0,0.08); border-top-color: #7c73f5; }
.is-gl .is-tile h4 { font-size: 15px !important; font-weight: 800 !important; color: #1e1b4b !important; margin: 0 0 6px !important; }
.is-gl .is-tile p { font-size: 13px; color: #64748b; margin: 0; line-height: 1.55; }

/* ---- FINAL CTA ---- */
.is-gl .is-final-wrap { background: linear-gradient(135deg, #1e1b4b, #4a3ac8, #7c73f5); padding: 72px 0; text-align: center; position: relative; overflow: hidden; }
.is-gl .is-final-wrap::before { content: ""; position: absolute; top: -80px; left: -80px; width: 320px; height: 320px; background: rgba(255,255,255,0.06); border-radius: 50%; }
.is-gl .is-final-wrap::after { content: ""; position: absolute; bottom: -100px; right: -60px; width: 380px; height: 380px; background: rgba(255,255,255,0.04); border-radius: 50%; }
.is-gl .is-final-wrap h2 { font-size: clamp(26px, 3.5vw, 40px) !important; color: #fff !important; margin: 0 0 14px !important; position: relative; z-index: 1; font-weight: 900 !important; }
.is-gl .is-final-wrap p { font-size: 17px; color: rgba(255,255,255,0.88); margin: 0 auto 32px; max-width: 480px; position: relative; z-index: 1; }
.is-gl .is-btn-white { display: inline-block; background: #fff; color: #4a3ac8 !important; padding: 17px 40px; border-radius: 12px; font-size: 16px; font-weight: 800; text-decoration: none !important; position: relative; z-index: 1; transition: all 0.2s; box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
.is-gl .is-btn-white:hover { background: #f5f4ff; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.25); }

/* ---- RESPONSIVE ---- */
@media (max-width: 720px) {
  .is-gl .is-toc { margin: -24px 20px 0; padding: 24px 22px; }
  .is-gl .is-toc-grid { grid-template-columns: repeat(4, 1fr); }
  .is-gl .is-tile-grid { grid-template-columns: 1fr; }
  .is-gl .is-sec { padding: 44px 0; }
  .is-gl .is-hero-wrap { padding: 48px 0 56px; }
}
</style>

<div class="is-gl">

  <div class="is-hero-wrap">
    <div class="is-inner">
      <div class="is-hero-badge">Surety Bond Learning Center</div>
      <h1>Glossary of Surety Bond Terms</h1>
      <div class="is-hero-tag">Plain-English Definitions</div>
      <p>Understand the terms you'll see on bond applications, forms, and underwriting requests — explained simply, with no jargon.</p>
      <div class="is-hero-note">Jump to any term using the index below.</div>
    </div>
  </div>

  <div class="is-toc">
    <div class="is-toc-title">Jump to a Term</div>
    <div class="is-toc-grid">
      <a href="#applicant">A</a>
      <a href="#bond-amount">B</a>
      <a href="#commercial-bond">C</a>
      <a href="#indemnity-agreement">I</a>
      <a href="#license-permit-bond">L</a>
      <a href="#obligee">O</a>
      <a href="#performance-bond">P</a>
      <a href="#renewal-term">R</a>
      <a href="#surety">S</a>
      <a href="#underwriting">U</a>
      <a href="#warranty-bond">W</a>
    </div>
  </div>

  <div class="is-sec" id="applicant">
    <div class="is-inner">
      <span class="is-eyebrow">A</span>
      <h2>A</h2>
      <div class="is-term-list">
        <div class="is-term-card">
          <h3>Applicant</h3>
          <p>The individual or business applying for a surety bond. Also called the principal once the bond is issued.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="bond-amount">
    <div class="is-inner">
      <span class="is-eyebrow">B</span>
      <h2>B</h2>
      <div class="is-term-list">
        <div class="is-term-card">
          <h3>Bond Amount (Penal Sum)</h3>
          <p>The maximum dollar amount the surety may be required to pay if a valid claim is filed.</p>
        </div>
        <div class="is-term-card">
          <h3>Bond Claim</h3>
          <p>A formal allegation that the bonded party violated laws, regulations, or contractual obligations. If valid, the surety pays the harmed party and the principal must reimburse the surety.</p>
        </div>
     <div class="is-term-card">
          <h3>Bond Form</h3>
          <p>The official document issued by the state or obligee that outlines the bond's requirements, obligations, and conditions.</p>
        </div>
        <div class="is-term-card">
          <h3>Bond Premium</h3>
          <p>The cost the principal pays to obtain the bond. Typically a small percentage of the total bond amount.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="commercial-bond">
    <div class="is-inner">
      <span class="is-eyebrow">C</span>
      <h2>C</h2>
      <div class="is-term-list">
        <div class="is-term-card">
          <h3>Commercial Bond</h3>
          <p>A category of bonds required by government agencies to ensure compliance with laws and regulations (e.g., <a href="/license-permit-bond-hub/">license &amp; permit bonds</a>).</p>
        </div>
        <div class="is-term-card">
          <h3>Contract Bond</h3>
          <p>A bond used in construction to guarantee performance, payment, or bid obligations.</p>
        </div>
        <div class="is-term-card">
          <h3>Credit Check</h3>
          <p>A review of the applicant's credit history used by the surety to determine risk and pricing.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="indemnity-agreement">
    <div class="is-inner">
      <span class="is-eyebrow">I</span>
      <h2>I</h2>
      <div class="is-term-list">
        <div class="is-term-card">
          <h3>Indemnity Agreement</h3>
          <p>A legally binding contract requiring the principal (and often owners) to reimburse the surety for any losses or claims paid.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="license-permit-bond">
    <div class="is-inner">
      <span class="is-eyebrow">L</span>
      <h2>L</h2>
      <div class="is-term-list">
        <div class="is-term-card">
          <h3>License &amp; Permit Bond</h3>
          <p>A bond required by state or local agencies to ensure businesses follow regulations and operate ethically.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="obligee">
    <div class="is-inner">
      <span class="is-eyebrow">O</span>
      <h2>O</h2>
      <div class="is-term-list">
        <div class="is-term-card">
          <h3>Obligee</h3>
          <p>The government agency or entity requiring the bond. The obligee is protected by the bond.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="performance-bond">
    <div class="is-inner">
      <span class="is-eyebrow">P</span>
      <h2>P</h2>
      <div class="is-term-list">
        <div class="is-term-card">
          <h3>Performance Bond</h3>
          <p>A contract bond guaranteeing that a contractor will complete a project according to the contract terms.</p>
        </div>
        <div class="is-term-card">
          <h3>Payment Bond</h3>
          <p>A contract bond guaranteeing that subcontractors, suppliers, and laborers will be paid.</p>
        </div>
        <div class="is-term-card">
          <h3>Principal</h3>
          <p>The individual or business required to obtain the bond and responsible for fulfilling the bonded obligations.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="renewal-term">
    <div class="is-inner">
      <span class="is-eyebrow">R</span>
      <h2>R</h2>
      <div class="is-term-list">
        <div class="is-term-card">
          <h3>Renewal Term</h3>
          <p>The period for which a bond remains active before it must be renewed, often annually.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="surety">
    <div class="is-inner">
      <span class="is-eyebrow">S</span>
      <h2>S</h2>
      <div class="is-term-list">
        <div class="is-term-card">
          <h3>Surety</h3>
          <p>The company that issues the bond and guarantees the principal's obligations. If a claim is paid, the principal must reimburse the surety.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="underwriting">
    <div class="is-inner">
      <span class="is-eyebrow">U</span>
      <h2>U</h2>
      <div class="is-term-list">
        <div class="is-term-card">
          <h3>Underwriting</h3>
          <p>The evaluation process used by the surety to assess risk, review credit, and determine bond pricing.</p>
        </div>
        <div class="is-term-card">
          <h3>Underwriter</h3>
          <p>The professional who reviews the application and decides whether the bond can be issued and at what rate.</p>
        </div>
        <div class="is-term-card">
          <h3>Utility Bond</h3>
          <p>A bond guaranteeing payment of utility bills for commercial accounts.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="is-sec" id="warranty-bond">
    <div class="is-inner">
      <span class="is-eyebrow">W</span>
      <h2>W</h2>
      <div class="is-term-list">
        <div class="is-term-card">
          <h3>Warranty Bond</h3>
          <p>A bond guaranteeing that a contractor will correct defects or workmanship issues during a warranty period.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="is-sec">
    <div class="is-inner">
      <span class="is-eyebrow">Explore More</span>
      <h2>Surety Bond Hubs</h2>
      <div class="is-tile-grid">
        <a class="is-tile" href="/contractors-construction-bond-hub/"><h4>Contractors &amp; Construction Bond Hub</h4><p>Performance, payment &amp; license bonds</p></a>
        <a class="is-tile" href="/court-fiduciary-bond-hub/"><h4>Court &amp; Fiduciary Bond Hub</h4><p>Probate, guardian &amp; trustee bonds</p></a>
        <a class="is-tile" href="/cannabis-bond-hub/"><h4>Cannabis Bond Hub</h4><p>State cannabis license bonds</p></a>
        <a class="is-tile" href="/environmental-reclamation-bond-hub/"><h4>Environmental &amp; Reclamation Bond Hub</h4><p>Environmental compliance bonds</p></a>
        <a class="is-tile" href="/federal-blm-bond-hub/"><h4>Federal &amp; BLM Bond Hub</h4><p>Federal &amp; land management bonds</p></a>
        <a class="is-tile" href="/escrow-real-estate-bond-hub/"><h4>Escrow &amp; Real Estate Bond Hub</h4><p>Title, escrow &amp; real estate bonds</p></a>
        <a class="is-tile" href="/license-permit-bond-hub/"><h4>License &amp; Permit Bond Hub</h4><p>Business &amp; occupational bonds</p></a>
        <a class="is-tile" href="/agriculture-food-bond-hub/"><h4>Agriculture &amp; Food Bond Hub</h4><p>Agricultural &amp; food industry bonds</p></a>
      </div>
    </div>
  </div>

  <div class="is-final-wrap">
    <div class="is-inner">
      <h2>Ready to Get Bonded?</h2>
      <p>Search our full library of surety bonds or apply in minutes with our automated application.</p>
      <a href="/surety-bonds/" class="is-btn-white">View Our Bonds</a>
    </div>
  </div>

</div>