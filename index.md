---
title: "InspireSurety | Your Trusted Surety Bond Partner"
layout: "layout.njk"
---

<style>
.is-hm *, .is-hm *::before, .is-hm *::after { box-sizing: border-box; }
.is-hm {
  font-family: inherit;
  color: #0f172a;
  margin: 0 calc(-50vw + 50%);
  width: 100vw;
  padding: 0;
}
.is-hm .is-inner { max-width: 1100px; margin: 0 auto; padding: 0 24px; }

/* ---- HERO: BRAND INDIGO AUTHORITY ---- */
.is-hm .is-hero-wrap {
  background: linear-gradient(135deg, #0f0c29 0%, #1e1b4b 55%, #4a3ac8 100%);
  padding: 76px 0 68px;
  position: relative;
  overflow: hidden;
}
.is-hm .is-hero-wrap::before {
  content: "";
  position: absolute;
  top: -120px; right: -80px;
  width: 440px; height: 440px;
  background: radial-gradient(circle, rgba(88,73,228,0.28) 0%, transparent 70%);
  border-radius: 50%;
}
.is-hm .is-hero-wrap::after {
  content: "";
  position: absolute;
  bottom: -140px; left: -100px;
  width: 380px; height: 380px;
  background: radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%);
  border-radius: 50%;
}
.is-hm .is-hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
  color: #c7d2fe; font-size: 11px; font-weight: 800; letter-spacing: 0.08em;
  text-transform: uppercase; padding: 6px 16px; border-radius: 999px;
  margin-bottom: 22px; position: relative; z-index: 1;
}
.is-hm .is-hero-badge span { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; display: inline-block; }
.is-hm .is-hero-wrap h1 {
  font-size: clamp(32px, 5vw, 54px) !important; font-weight: 900 !important;
  color: #fff !important; line-height: 1.1 !important; margin: 0 0 18px !important;
  position: relative; z-index: 1; letter-spacing: -0.02em; max-width: 700px;
}
.is-hm .is-hero-wrap p {
  font-size: 17px; color: rgba(255,255,255,0.85); line-height: 1.7;
  max-width: 620px; margin: 0 0 32px; position: relative; z-index: 1;
}
.is-hm .is-btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: #fff; color: #352c81 !important;
  padding: 16px 34px; border-radius: 12px;
  font-size: 16px; font-weight: 800;
  text-decoration: none !important; transition: all 0.2s;
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
  position: relative; z-index: 1;
}
.is-hm .is-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.3); }
.is-hm .is-hero-stats { display: flex; gap: 32px; margin-top: 40px; padding-top: 28px; border-top: 1px solid rgba(255,255,255,0.15); position: relative; z-index: 1; flex-wrap: wrap; }
.is-hm .is-hero-stat-num { font-size: 26px; font-weight: 900; color: #fff; line-height: 1; display: block; }
.is-hm .is-hero-stat-label { font-size: 11px; color: rgba(255,255,255,0.65); font-weight: 600; margin-top: 4px; display: block; }

/* ---- CATEGORY ACCENT STRIP: SHOWS ALL 8 HUB COLORS ---- */
.is-hm .is-accent-strip { display: flex; height: 6px; }
.is-hm .is-accent-strip span { flex: 1; }
.is-hm .ac-1 { background: #1e40af; } /* License & Permit */
.is-hm .ac-2 { background: #d97706; } /* Construction */
.is-hm .ac-3 { background: #6d28d9; } /* Court & Fiduciary */
.is-hm .ac-4 { background: #166534; } /* Environmental */
.is-hm .ac-5 { background: #475569; } /* Federal & BLM */
.is-hm .ac-6 { background: #0f766e; } /* Escrow & Real Estate */
.is-hm .ac-7 { background: #15803d; } /* Cannabis */
.is-hm .ac-8 { background: #92400e; } /* Agriculture */

/* ---- BASE: WHITE CANVAS ---- */
.is-hm .is-sec { background: #fff; padding: 64px 0; }
.is-hm .is-sec + .is-sec { border-top: 1px solid #f1f5f9; }
.is-hm .is-sec h2 { font-size: clamp(22px, 2.8vw, 32px) !important; font-weight: 900 !important; color: #0f172a !important; margin: 0 0 8px !important; letter-spacing: -0.01em; text-align: center; }
.is-hm .is-eyebrow { display: block; text-align: center; font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #4a3ac8; margin-bottom: 10px; }
.is-hm .is-desc { font-size: 15px; color: #64748b; margin: 0 auto 36px; max-width: 560px; text-align: center; }

/* ---- FEATURE GRID: 4 CARDS, TOP BORDER ACCENT ---- */
.is-hm .is-feat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.is-hm .is-feat-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 24px 20px; transition: all 0.2s; }
.is-hm .is-feat-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(0,0,0,0.08); }
.is-hm .is-feat-card.f1 { border-top: 3px solid #5849e4; }
.is-hm .is-feat-card.f2 { border-top: 3px solid #059669; }
.is-hm .is-feat-card.f3 { border-top: 3px solid #d97706; }
.is-hm .is-feat-card.f4 { border-top: 3px solid #0891b2; }
.is-hm .is-feat-icon { width: 42px; height: 42px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 19px; margin-bottom: 14px; }
.is-hm .f1 .is-feat-icon { background: #eef1ff; }
.is-hm .f2 .is-feat-icon { background: #d1fae5; }
.is-hm .f3 .is-feat-icon { background: #fef3c7; }
.is-hm .f4 .is-feat-icon { background: #cffafe; }
.is-hm .is-feat-card h4 { font-size: 15px !important; font-weight: 700 !important; color: #0f172a !important; margin: 0 0 8px !important; }
.is-hm .is-feat-card p { font-size: 13px; color: #64748b; margin: 0; line-height: 1.6; }

/* ---- CATEGORY CARDS: THE 8 HUBS, EACH IN ITS OWN COLOR ---- */
.is-hm .is-cat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.is-hm .is-cat-card {
  border-radius: 16px; padding: 26px 22px; color: #fff;
  transition: all 0.25s; text-decoration: none; display: block;
  position: relative; overflow: hidden;
}
.is-hm .is-cat-card:hover { transform: translateY(-5px); box-shadow: 0 16px 36px rgba(0,0,0,0.2); }
.is-hm .is-cat-card h4 { font-size: 15px !important; font-weight: 800 !important; color: #fff !important; margin: 0 0 8px !important; position: relative; z-index: 1; }
.is-hm .is-cat-card p { font-size: 12.5px; color: rgba(255,255,255,0.8); margin: 0 0 14px; line-height: 1.55; position: relative; z-index: 1; }
.is-hm .is-cat-card .is-cat-arrow { font-size: 13px; font-weight: 700; color: #fff; position: relative; z-index: 1; }
.is-hm .cat-license { background: linear-gradient(135deg, #1e40af, #0891b2); }
.is-hm .cat-construction { background: linear-gradient(135deg, #57534e, #d97706); }
.is-hm .cat-court { background: linear-gradient(135deg, #4c1d95, #6d28d9); }
.is-hm .cat-environ { background: linear-gradient(135deg, #14532d, #166534); }
.is-hm .cat-federal { background: linear-gradient(135deg, #1e293b, #475569); }
.is-hm .cat-escrow { background: linear-gradient(135deg, #134e4a, #0f766e); }
.is-hm .cat-cannabis { background: linear-gradient(135deg, #166534, #15803d); }
.is-hm .cat-ag { background: linear-gradient(135deg, #78350f, #92400e); }

/* ---- STEPS ---- */
.is-hm .is-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.is-hm .is-step { text-align: center; }
.is-hm .is-step-num {
  width: 52px; height: 52px; margin: 0 auto 16px;
  background: linear-gradient(135deg, #5849e4, #352c81);
  border-radius: 16px; display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 20px; font-weight: 900;
  box-shadow: 0 8px 20px rgba(74,58,200,0.3);
}
.is-hm .is-step h3 { font-size: 15.5px !important; font-weight: 700 !important; color: #0f172a !important; margin: 0 0 8px !important; }
.is-hm .is-step p { font-size: 13.5px; color: #64748b; margin: 0; line-height: 1.6; }

/* ---- STAT BAND: PREMIUM MOMENT ---- */
.is-hm .is-stat-wrap { background: #0f0c29; border-radius: 20px; padding: 44px 36px; }
.is-hm .is-stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.is-hm .is-stat-item { text-align: center; }
.is-hm .is-stat-num { font-size: 34px; font-weight: 900; color: #c7d2fe; line-height: 1; }
.is-hm .is-stat-label { font-size: 12px; color: #94a3b8; font-weight: 600; margin-top: 8px; }

/* ---- TESTIMONIALS ---- */
.is-hm .is-testimonials { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.is-hm .is-testimonial { background: #fff; border: 1px solid #e2e8f0; border-top: 3px solid #5849e4; border-radius: 14px; padding: 22px 20px; }
.is-hm .is-testimonial-text { font-size: 13.5px; color: #334155; line-height: 1.65; font-style: italic; margin: 0 0 14px; }
.is-hm .is-testimonial-name { font-weight: 700; color: #1e293b; font-size: 13.5px; display: block; }
.is-hm .is-testimonial-role { font-size: 12px; color: #94a3b8; }

/* ---- FINAL CTA ---- */
.is-hm .is-final-wrap {
  background: linear-gradient(135deg, #0f0c29, #1e1b4b, #4a3ac8);
  padding: 76px 0; text-align: center; position: relative; overflow: hidden;
}
.is-hm .is-final-wrap::before { content: ""; position: absolute; top: -80px; left: -80px; width: 320px; height: 320px; background: rgba(255,255,255,0.06); border-radius: 50%; }
.is-hm .is-final-wrap::after { content: ""; position: absolute; bottom: -100px; right: -60px; width: 380px; height: 380px; background: rgba(255,255,255,0.04); border-radius: 50%; }
.is-hm .is-final-wrap h2 { font-size: clamp(26px, 3.5vw, 40px) !important; color: #fff !important; margin: 0 0 14px !important; position: relative; z-index: 1; font-weight: 900 !important; }
.is-hm .is-final-wrap p { font-size: 16px; color: rgba(255,255,255,0.85); margin: 0 auto 32px; max-width: 480px; position: relative; z-index: 1; }
.is-hm .is-btn-white { display: inline-block; background: #fff; color: #352c81 !important; padding: 16px 40px; border-radius: 12px; font-size: 15.5px; font-weight: 800; text-decoration: none !important; position: relative; z-index: 1; transition: all 0.2s; box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
.is-hm .is-btn-white:hover { background: #eef1ff; transform: translateY(-3px); }

/* ---- RESPONSIVE ---- */
@media (max-width: 900px) {
  .is-hm .is-feat-grid { grid-template-columns: repeat(2, 1fr); }
  .is-hm .is-cat-grid { grid-template-columns: repeat(2, 1fr); }
  .is-hm .is-steps { grid-template-columns: 1fr; gap: 28px; }
  .is-hm .is-stat-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .is-hm .is-testimonials { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .is-hm .is-hero-wrap { padding: 52px 0 48px; }
  .is-hm .is-sec { padding: 44px 0; }
  .is-hm .is-hero-stats { gap: 20px; }
}
</style>

<div class="is-hm">

  <!-- HERO -->
  <div class="is-hero-wrap">
    <div class="is-inner">
      <div class="is-hero-badge"><span></span>Licensed in All 50 States</div>
      <h1>Your Trusted Surety Bond Partner</h1>
      <p>Focused. Fast. Nationwide. Secure projects, licenses, and business obligations with a reliable surety bond partner — backed by access to over 8,000 commercial surety bond solutions for niche and large-scale needs.</p>
      <a href="/pages/surety-bonds/" class="is-btn-primary">
        Browse All Bonds
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#352c81" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
      <div class="is-hero-stats">
        <div><span class="is-hero-stat-num">8,000+</span><span class="is-hero-stat-label">Bond Solutions</span></div>
        <div><span class="is-hero-stat-num">50</span><span class="is-hero-stat-label">States Licensed</span></div>
        <div><span class="is-hero-stat-num">A+</span><span class="is-hero-stat-label">Rated Partners</span></div>
        <div><span class="is-hero-stat-num">Same-Day</span><span class="is-hero-stat-label">Issuance Available</span></div>
      </div>
    </div>
  </div>

  <!-- ACCENT STRIP: previews all 8 category colors -->
  <div class="is-accent-strip">
    <span class="ac-1"></span><span class="ac-2"></span><span class="ac-3"></span><span class="ac-4"></span>
    <span class="ac-5"></span><span class="ac-6"></span><span class="ac-7"></span><span class="ac-8"></span>
  </div>

  <!-- FEATURES -->
  <div class="is-sec">
    <div class="is-inner">
      <span class="is-eyebrow">Why Inspire Surety</span>
      <h2>Fast. Compliant. Nationwide.</h2>
      <p class="is-desc">Inspire Surety provides fast, compliant bond solutions for contractors, professionals, and businesses across all 50 states.</p>
      <div class="is-feat-grid">
        <div class="is-feat-card f1">
          <div class="is-feat-icon">⚡</div>
          <h4>Fast Issuance</h4>
          <p>Prequalification and bond issuance for bids, permits, and contract starts.</p>
        </div>
        <div class="is-feat-card f2">
          <div class="is-feat-icon">✅</div>
          <h4>License Compliance</h4>
          <p>Streamlined contractor license bond support across every profession.</p>
        </div>
        <div class="is-feat-card f3">
          <div class="is-feat-icon">🛡️</div>
          <h4>Business Protection</h4>
          <p>Fidelity bond options to safeguard companies from employee dishonesty.</p>
        </div>
        <div class="is-feat-card f4">
          <div class="is-feat-icon">🌎</div>
          <h4>Nationwide Coverage</h4>
          <p>Compliant documentation supporting multi-jurisdictional filings.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- BOND CATEGORIES: 8 HUB LINKS IN THEIR OWN COLORS -->
  <div class="is-sec">
    <div class="is-inner">
      <span class="is-eyebrow">Explore Bond Categories</span>
      <h2>Every Bond Type, Organized by Category</h2>
      <p class="is-desc">Find your bond category and explore requirements, guides, and applications.</p>
      <div class="is-cat-grid">
        <a href="/pages/license-permit-bond-hub/" class="is-cat-card cat-license">
          <h4>License &amp; Permit</h4>
          <p>Auto dealer, notary, mortgage broker &amp; more.</p>
          <span class="is-cat-arrow">Explore →</span>
        </a>
        <a href="/pages/contractors-construction-bond-hub/" class="is-cat-card cat-construction">
          <h4>Construction</h4>
          <p>Bid, performance, payment &amp; contractor bonds.</p>
          <span class="is-cat-arrow">Explore →</span>
        </a>
        <a href="/pages/court-fiduciary-bond-hub/" class="is-cat-card cat-court">
          <h4>Court &amp; Fiduciary</h4>
          <p>Probate, guardian, trustee &amp; public official bonds.</p>
          <span class="is-cat-arrow">Explore →</span>
        </a>
        <a href="/pages/environmental-reclamation-bond-hub/" class="is-cat-card cat-environ">
          <h4>Environmental</h4>
          <p>Reclamation, oil &amp; gas, remediation bonds.</p>
          <span class="is-cat-arrow">Explore →</span>
        </a>
        <a href="/pages/federal-blm-bond-hub/" class="is-cat-card cat-federal">
          <h4>Federal &amp; BLM</h4>
          <p>BLM, U.S. Customs, USDA &amp; federal bonds.</p>
          <span class="is-cat-arrow">Explore →</span>
        </a>
        <a href="/pages/escrow-real-estate-bond-hub/" class="is-cat-card cat-escrow">
          <h4>Escrow &amp; Real Estate</h4>
          <p>Escrow agent, title &amp; mortgage broker bonds.</p>
          <span class="is-cat-arrow">Explore →</span>
        </a>
        <a href="/pages/cannabis-bond-hub/" class="is-cat-card cat-cannabis">
          <h4>Cannabis</h4>
          <p>License, tax &amp; cultivator bonds.</p>
          <span class="is-cat-arrow">Explore →</span>
        </a>
        <a href="/pages/agriculture-food-bond-hub/" class="is-cat-card cat-ag">
          <h4>Agriculture &amp; Food</h4>
          <p>Grain, livestock, USDA &amp; PACA bonds.</p>
          <span class="is-cat-arrow">Explore →</span>
        </a>
      </div>
    </div>
  </div>

  <!-- HOW IT WORKS -->
  <div class="is-sec">
    <div class="is-inner">
      <span class="is-eyebrow">Simple Process</span>
      <h2>Get Bonded in Three Steps</h2>
      <p class="is-desc">From application to issuance — fast, guided, and fully digital.</p>
      <div class="is-steps">
        <div class="is-step">
          <div class="is-step-num">1</div>
          <h3>Choose Your Bond</h3>
          <p>Browse categories or search to find the exact bond you need.</p>
        </div>
        <div class="is-step">
          <div class="is-step-num">2</div>
          <h3>Get Matched</h3>
          <p>We match you with the best rate from A-rated surety partners.</p>
        </div>
        <div class="is-step">
          <div class="is-step-num">3</div>
          <h3>Get Bonded</h3>
          <p>Receive your bond with fast digital delivery, ready to file.</p>
        </div>
      </div>

      <div class="is-stat-wrap" style="margin-top:44px;">
        <div class="is-stat-grid">
          <div class="is-stat-item"><div class="is-stat-num">8,000+</div><div class="is-stat-label">Bond Types</div></div>
          <div class="is-stat-item"><div class="is-stat-num">50</div><div class="is-stat-label">States</div></div>
          <div class="is-stat-item"><div class="is-stat-num">8</div><div class="is-stat-label">Bond Categories</div></div>
          <div class="is-stat-item"><div class="is-stat-num">A+</div><div class="is-stat-label">Rated Sureties</div></div>
        </div>
      </div>
    </div>
  </div>

  <!-- TESTIMONIALS -->
  <div class="is-sec">
    <div class="is-inner">
      <span class="is-eyebrow">Real Results</span>
      <h2>What Our Customers Are Saying</h2>
      <div class="is-testimonials">
        <div class="is-testimonial">
          <p class="is-testimonial-text">Inspire Surety helped us secure multiple bonds across different states. Fast and flawless service.</p>
          <span class="is-testimonial-name">Kara M.</span>
          <span class="is-testimonial-role">Operations Director</span>
        </div>
        <div class="is-testimonial">
          <p class="is-testimonial-text">We needed several unusual bond types. Inspire Surety found them all and issued them quickly.</p>
          <span class="is-testimonial-name">Damon T.</span>
          <span class="is-testimonial-role">Compliance Director</span>
        </div>
        <div class="is-testimonial">
          <p class="is-testimonial-text">As a new business owner, I had no idea which bond I needed. They guided me through everything.</p>
          <span class="is-testimonial-name">Shelly R.</span>
          <span class="is-testimonial-role">Small Business Owner</span>
        </div>
      </div>
    </div>
  </div>

  <!-- FINAL CTA -->
  <div class="is-final-wrap">
    <div class="is-inner">
      <h2>Ready to Get Bonded?</h2>
      <p>Fast approvals, lowest rates, licensed agents standing by across all 50 states.</p>
      <a href="/pages/surety-bonds/" class="is-btn-white">Browse All Bonds</a>
    </div>
  </div>

</div>