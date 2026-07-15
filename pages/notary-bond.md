---
title: "Notary Bond"
layout: "layout.njk"
---

<style>
.is-not *, .is-not *::before, .is-not *::after { box-sizing: border-box; }
.is-not {
  font-family: inherit;
  color: #0f172a;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 0 40px;
}

/* ---- HERO: SPLIT LAYOUT ---- */
.is-not .is-hero {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 32px;
  align-items: center;
  background: linear-gradient(135deg, #eff6ff, #f8fafc);
  border: 1px solid #dbeafe;
  border-radius: 24px;
  padding: 44px 40px;
  margin-bottom: 56px;
}
.is-not .is-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #dbeafe;
  color: #1d4ed8;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 6px 16px;
  border-radius: 999px;
  margin-bottom: 16px;
}
.is-not .is-hero h1 {
  font-size: clamp(26px, 3.5vw, 38px) !important;
  font-weight: 900 !important;
  color: #0f172a !important;
  line-height: 1.15 !important;
  margin: 0 0 14px !important;
}
.is-not .is-hero p {
  font-size: 15px;
  color: #475569;
  line-height: 1.7;
  margin: 0 0 20px;
}
.is-not .is-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: #fff !important;
  padding: 14px 28px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none !important;
  transition: all 0.2s;
  box-shadow: 0 4px 16px rgba(37,99,235,0.3);
}
.is-not .is-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,99,235,0.38); }

/* ---- QUOTE CARD (right side of hero) ---- */
.is-not .is-quote-card {
  background: #0f172a;
  border-radius: 18px;
  padding: 28px 24px;
  color: #fff;
}
.is-not .is-quote-label {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #60a5fa;
  margin-bottom: 14px;
}
.is-not .is-quote-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  font-size: 13.5px;
}
.is-not .is-quote-row:last-child { border-bottom: none; }
.is-not .is-quote-row span:first-child { color: #94a3b8; }
.is-not .is-quote-row span:last-child { color: #fff; font-weight: 700; }

/* ---- SECTIONS ---- */
.is-not .is-sec { margin-bottom: 52px; }
.is-not .is-sec h2 {
  font-size: clamp(19px, 2.3vw, 24px) !important;
  font-weight: 800 !important;
  color: #0f172a !important;
  margin: 0 0 14px !important;
}
.is-not .is-sec p { font-size: 14.5px; color: #475569; line-height: 1.75; margin: 0 0 12px; }
.is-not .is-divider { height: 1px; background: linear-gradient(90deg, transparent, #e2e8f0, transparent); margin: 0 0 52px; }

/* ---- REQUIRED DOCS: CHECKLIST STYLE ---- */
.is-not .is-doc-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  overflow: hidden;
}
.is-not .is-doc-row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 20px;
  background: #fff;
  border-bottom: 1px solid #f1f5f9;
}
.is-not .is-doc-row:last-child { border-bottom: none; }
.is-not .is-doc-icon {
  width: 28px; height: 28px;
  border-radius: 50%;
  background: #eff6ff;
  color: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 13px;
  font-weight: 800;
}
.is-not .is-doc-row span { font-size: 14px; color: #334155; }

/* ---- PRICING NOTES: TWO-COL CARDS ---- */
.is-not .is-price-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.is-not .is-price-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 22px;
}
.is-not .is-price-card h4 {
  font-size: 13px !important;
  font-weight: 700 !important;
  color: #64748b !important;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 8px !important;
}
.is-not .is-price-card .is-price-big {
  font-size: 26px;
  font-weight: 900;
  color: #1d4ed8;
  line-height: 1;
}
.is-not .is-price-card p {
  font-size: 13px;
  color: #64748b;
  margin: 6px 0 0;
}

/* ---- CARRIER BUTTONS ---- */
.is-not .is-carrier-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}
.is-not .is-carrier-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  border: 2px solid #2563eb;
  color: #1d4ed8 !important;
  padding: 13px 26px;
  border-radius: 12px;
  font-size: 14.5px;
  font-weight: 700;
  text-decoration: none !important;
  transition: all 0.2s;
}
.is-not .is-carrier-btn:hover { background: #2563eb; color: #fff !important; }

/* ---- FINAL CTA ---- */
.is-not .is-final {
  text-align: center;
  background: linear-gradient(135deg, #0c4a6e, #1e40af);
  border-radius: 24px;
  padding: 48px 40px;
  position: relative;
  overflow: hidden;
}
.is-not .is-final::before {
  content: "";
  position: absolute;
  top: -60px; right: -60px;
  width: 260px; height: 260px;
  background: rgba(255,255,255,0.05);
  border-radius: 50%;
}
.is-not .is-final h2 { font-size: clamp(19px, 2.6vw, 26px) !important; color: #fff !important; margin: 0 0 10px !important; position: relative; z-index: 1; }
.is-not .is-final p { font-size: 14px; color: rgba(255,255,255,0.8); margin: 0 0 22px; position: relative; z-index: 1; }
.is-not .is-btn-white {
  display: inline-block;
  background: #fff;
  color: #1e40af !important;
  padding: 13px 30px;
  border-radius: 10px;
  font-size: 14.5px;
  font-weight: 800;
  text-decoration: none !important;
  position: relative; z-index: 1;
  transition: all 0.2s;
}
.is-not .is-btn-white:hover { background: #eff6ff; transform: translateY(-2px); }

/* ---- RESPONSIVE ---- */
@media (max-width: 720px) {
  .is-not .is-hero { grid-template-columns: 1fr; padding: 32px 24px; }
  .is-not .is-price-grid { grid-template-columns: 1fr; }
  .is-not .is-final { padding: 36px 22px; }
}
</style>

<div class="is-not">

  <!-- HERO: SPLIT WITH QUOTE CARD -->
  <div class="is-hero">
    <div>
      <div class="is-hero-badge">License &amp; Permit Bond</div>
      <h1>Notary Bond</h1>
      <p>Get commissioned fast with an affordable notary bond. Required by most states before you can perform notarial acts, this bond protects the public and satisfies your state's commissioning requirement.</p>
      <a href="/pages/contact/" class="is-btn-primary">
        Apply for Your Bond
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>
    <div class="is-quote-card">
      <div class="is-quote-label">Bond Snapshot</div>
      <div class="is-quote-row"><span>Bond Amount</span><span>$1,000–$25,000</span></div>
      <div class="is-quote-row"><span>Term Length</span><span>4–10 Years</span></div>
      <div class="is-quote-row"><span>Credit Check</span><span>Rarely Required</span></div>
      <div class="is-quote-row"><span>Issuance Time</span><span>Same Day</span></div>
    </div>
  </div>

  <!-- REQUIRED DOCUMENTS -->
  <div class="is-sec">
    <h2>Required Documents</h2>
    <p>To apply for your notary bond, you'll typically need the following:</p>
    <div class="is-doc-list">
      <div class="is-doc-row"><div class="is-doc-icon">✓</div><span>Completed bond application with your legal name and address</span></div>
      <div class="is-doc-row"><div class="is-doc-icon">✓</div><span>State-specific bond amount confirmation</span></div>
      <div class="is-doc-row"><div class="is-doc-icon">✓</div><span>Notary commission application (if not already filed)</span></div>
      <div class="is-doc-row"><div class="is-doc-icon">✓</div><span>Government-issued photo ID for identity verification</span></div>
    </div>
  </div>

  <div class="is-divider"></div>

  <!-- PRICING NOTES -->
  <div class="is-sec">
    <h2>Pricing Notes</h2>
    <p>Notary bonds are among the most affordable surety bonds available, since notary claims are historically rare and bond amounts are set by state statute rather than individual risk assessment.</p>
    <div class="is-price-grid">
      <div class="is-price-card">
        <h4>Typical Premium</h4>
        <div class="is-price-big">Low, Fixed Rate</div>
        <p>Based on your state's required bond amount and term — not your credit score.</p>
      </div>
      <div class="is-price-card">
        <h4>Renewal</h4>
        <div class="is-price-big">Matches Commission Term</div>
        <p>Your bond term aligns with your notary commission period, typically 4–10 years.</p>
      </div>
    </div>
  </div>

  <div class="is-divider"></div>

  <!-- CARRIER APPLICATION -->
  <div class="is-sec">
    <h2>Apply With Our Carrier Partners</h2>
    <p>We work with A-rated surety partners to get your notary bond issued quickly and affordably.</p>
    <div class="is-carrier-row">
      <a href="/pages/contact/" class="is-carrier-btn">
        Apply with Carrier A
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
      <a href="/pages/contact/" class="is-carrier-btn">
        Apply with Carrier B
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>
  </div>

  <!-- FINAL CTA -->
  <div class="is-final">
    <h2>Get Bonded and Commissioned</h2>
    <p>Fast, affordable notary bonds — available in all states that require one.</p>
    <a href="/pages/contact/" class="is-btn-white">Start My Application</a>
  </div>

</div>