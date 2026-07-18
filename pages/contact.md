---
title: "Contact Us"
layout: "layout.njk"
---

<style>
.is-ct *, .is-ct *::before, .is-ct *::after { box-sizing: border-box; }
.is-ct {
  font-family: inherit;
  color: #0f172a;
  margin: 0 calc(-50vw + 50%);
  width: 100vw;
  padding: 0;
}
.is-ct .is-inner { max-width: 1000px; margin: 0 auto; padding: 0 24px; }

/* ---- HERO: INDIGO AUTHORITY ---- */
.is-ct .is-hero-wrap {
  background: linear-gradient(135deg, #0f0c29 0%, #1e1b4b 45%, #4a3ac8 100%);
  padding: 72px 0 64px;
  position: relative;
  overflow: hidden;
}
.is-ct .is-hero-wrap::before {
  content: "";
  position: absolute;
  top: -100px; right: -100px;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  border-radius: 50%;
}
.is-ct .is-hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.22);
  color: #c7c3ff; font-size: 11px; font-weight: 800; letter-spacing: 0.08em;
  text-transform: uppercase; padding: 6px 16px; border-radius: 999px;
  margin-bottom: 20px; position: relative; z-index: 1;
}
.is-ct .is-hero-wrap h1 {
  font-size: clamp(32px, 5vw, 52px) !important; font-weight: 900 !important;
  color: #fff !important; line-height: 1.1 !important; margin: 0 0 12px !important;
  position: relative; z-index: 1; letter-spacing: -0.02em;
}
.is-ct .is-hero-tag { font-size: 17px; color: #c7c3ff; font-weight: 700; margin-bottom: 20px; position: relative; z-index: 1; }
.is-ct .is-hero-wrap p { font-size: 16px; color: rgba(255,255,255,0.88); line-height: 1.7; max-width: 600px; margin: 0 0 28px; position: relative; z-index: 1; }

/* ---- FLOATING CONTACT CARD ---- */
.is-ct .is-toc {
  background: #1a1730; border-radius: 20px; padding: 36px;
  margin: -36px auto 0; max-width: 940px; position: relative; z-index: 2;
  box-shadow: 0 20px 50px rgba(0,0,0,0.25);
}
.is-ct .is-toc-title { font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #c7c3ff; margin-bottom: 20px; text-align: center; }
.is-ct .is-contact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.is-ct .is-contact-item { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 10px; }
.is-ct .is-contact-icon { width: 52px; height: 52px; border-radius: 14px; background: rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0; }
.is-ct .is-contact-item a, .is-ct .is-contact-item span.is-ct-text { font-size: 16px; color: #fff; text-decoration: none; font-weight: 700; }
.is-ct .is-contact-item a:hover { color: #c7c3ff; }
.is-ct .is-contact-label { font-size: 11px; color: rgba(255,255,255,0.55); font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; display: block; margin-bottom: 2px; }

/* ---- SECTIONS: WHITE CANVAS ---- */
.is-ct .is-sec { background: #fff; padding: 64px 0; }
.is-ct .is-sec + .is-sec { border-top: 1px solid #f1f5f9; }
.is-ct .is-sec h2 { font-size: clamp(22px, 2.8vw, 30px) !important; font-weight: 900 !important; color: #0f172a !important; margin: 0 0 16px !important; letter-spacing: -0.01em; }
.is-ct .is-eyebrow { display: inline-block; font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #4338ca; margin-bottom: 10px; }
.is-ct .is-sec p { font-size: 15px; color: #475569; line-height: 1.75; margin: 0 0 14px; }

/* ---- WHY US TILES ---- */
.is-ct .is-why-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin: 20px 0; }
.is-ct .is-why-pill { background: #fff; border: 2px solid #e2e8f0; border-radius: 14px; padding: 20px; display: flex; align-items: center; gap: 14px; transition: all 0.2s; }
.is-ct .is-why-pill:hover { border-color: #4a3ac8; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(74,58,200,0.12); }
.is-ct .is-why-icon { width: 40px; height: 40px; border-radius: 10px; background: #faf5ff; color: #4338ca; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; font-weight: 800; }
.is-ct .is-why-pill span { font-size: 14px; color: #1e293b; font-weight: 600; }
.is-ct .is-why-pill a { color: #4a3ac8; font-weight: 700; text-decoration: underline; }

/* ---- FAQ ---- */
.is-ct .is-faq-list { display: flex; flex-direction: column; gap: 10px; margin: 20px 0; }
.is-ct .is-faq-item { border: 1px solid #e2e8f0; border-radius: 14px; background: #fff; overflow: hidden; }
.is-ct .is-faq-item[open] { border-color: #c7c3ff; box-shadow: 0 6px 20px rgba(74,58,200,0.1); }
.is-ct .is-faq-item summary { font-size: 15px; font-weight: 700; color: #0f172a; padding: 18px 22px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; list-style: none; gap: 14px; }
.is-ct .is-faq-item summary::-webkit-details-marker { display: none; }
.is-ct .is-faq-item summary::after { content: "+"; font-size: 22px; font-weight: 300; color: #4338ca; flex-shrink: 0; transition: transform 0.25s; line-height: 1; }
.is-ct .is-faq-item[open] summary::after { transform: rotate(45deg); }
.is-ct .is-faq-body { padding: 0 22px 20px; }
.is-ct .is-faq-body p { font-size: 14.5px; color: #475569; margin: 0; line-height: 1.7; }

/* ---- FINAL CTA ---- */
.is-ct .is-final-wrap { background: linear-gradient(135deg, #0f0c29, #1e1b4b, #4a3ac8); padding: 72px 0; text-align: center; position: relative; overflow: hidden; }
.is-ct .is-final-wrap::before { content: ""; position: absolute; top: -80px; left: -80px; width: 320px; height: 320px; background: rgba(255,255,255,0.06); border-radius: 50%; }
.is-ct .is-final-wrap::after { content: ""; position: absolute; bottom: -100px; right: -60px; width: 380px; height: 380px; background: rgba(255,255,255,0.04); border-radius: 50%; }
.is-ct .is-final-wrap h2 { font-size: clamp(26px, 3.5vw, 40px) !important; color: #fff !important; margin: 0 0 14px !important; position: relative; z-index: 1; font-weight: 900 !important; }
.is-ct .is-final-wrap p { font-size: 17px; color: rgba(255,255,255,0.88); margin: 0 auto 32px; max-width: 480px; position: relative; z-index: 1; }
.is-ct .is-btn-white { display: inline-block; background: #fff; color: #4a3ac8 !important; padding: 17px 40px; border-radius: 12px; font-size: 16px; font-weight: 800; text-decoration: none !important; position: relative; z-index: 1; transition: all 0.2s; box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
.is-ct .is-btn-white:hover { background: #f5f4ff; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.25); }

/* ---- RESPONSIVE ---- */
@media (max-width: 720px) {
  .is-ct .is-toc { margin: -24px 20px 0; padding: 24px 22px; }
  .is-ct .is-contact-grid { grid-template-columns: 1fr; gap: 20px; }
  .is-ct .is-why-grid { grid-template-columns: 1fr; }
  .is-ct .is-sec { padding: 44px 0; }
  .is-ct .is-hero-wrap { padding: 48px 0 56px; }
}
</style>

<div class="is-ct">

  <div class="is-hero-wrap">
    <div class="is-inner">
      <div class="is-hero-badge">Get In Touch</div>
      <h1>Contact Us</h1>
      <div class="is-hero-tag">We're Here to Help</div>
      <p>Questions about a bond, your application, or which coverage you need? Reach out directly — a licensed agent will respond quickly.</p>
    </div>
  </div>

  <div class="is-toc">
    <div class="is-toc-title">Reach Us Directly</div>
    <div class="is-contact-grid">
      <div class="is-contact-item">
        <div class="is-contact-icon">📞</div>
        <div>
          <span class="is-contact-label">Call or Text</span>
          <a href="tel:+19282270054">+1 928-227-0054</a>
        </div>
      </div>
      <div class="is-contact-item">
        <div class="is-contact-icon">✉️</div>
        <div>
          <span class="is-contact-label">Email</span>
          <a href="mailto:swright@inspiresurety.com">swright@inspiresurety.com</a>
        </div>
      </div>
      <div class="is-contact-item">
        <div class="is-contact-icon">🕒</div>
        <div>
          <span class="is-contact-label">Business Hours</span>
          <span class="is-ct-text">Mon–Fri, 8am–5pm MST</span>
        </div>
      </div>
    </div>
  </div>

  <div class="is-sec">
    <div class="is-inner">
      <span class="is-eyebrow">Our Advantage</span>
      <h2>Why Contact InspireSurety?</h2>
      <div class="is-why-grid">
<div class="is-why-pill"><div class="is-why-icon">✓</div><span>Licensed &amp; compliant — Stephen Wright, licensed surety agent in Arizona</span></div>
        <div class="is-why-pill"><div class="is-why-icon">⚡</div><span>Fast response, most inquiries answered same business day</span></div>
        <div class="is-why-pill"><div class="is-why-icon">🎯</div><span>Nationwide coverage — bonds available in all 50 states</span></div>
        <div class="is-why-pill"><div class="is-why-icon">📄</div><span>Not sure what you need? Check our <a href="/glossary-of-surety-bond-terms/">Glossary</a> or browse <a href="/surety-bonds/">all bonds</a></span></div>
      </div>
    </div>
  </div>

  <div class="is-sec">
    <div class="is-inner">
      <span class="is-eyebrow">Questions</span>
      <h2>Frequently Asked Questions</h2>
      <div class="is-faq-list">
        <details class="is-faq-item"><summary>How quickly will I hear back?</summary><div class="is-faq-body"><p>Most calls and emails are answered within one business day. For urgent needs, calling or texting +1 928-227-0054 is the fastest option.</p></div></details>
        <details class="is-faq-item"><summary>Can I apply for a bond directly instead of contacting you first?</summary><div class="is-faq-body"><p>Yes. Most of our bonds have a fully automated application available directly on each bond's page — no need to wait for a reply if you're ready to apply now.</p></div></details>
        <details class="is-faq-item"><summary>Do you help with bonds in states other than Arizona?</summary><div class="is-faq-body"><p>Yes, we place surety bonds nationwide. Our licensed agent is based in Arizona, but coverage is available in all 50 states.</p></div></details>
        <details class="is-faq-item"><summary>What information should I have ready when I call or email?</summary><div class="is-faq-body"><p>Let us know which bond you need (or think you need), your state, and any deadline from a court, agency, or license requirement — this helps us respond faster.</p></div></details>
      </div>
    </div>
  </div>

  <div class="is-final-wrap">
    <div class="is-inner">
      <h2>Ready to Get Bonded?</h2>
      <p>Skip the wait — apply directly for most bonds with our automated application.</p>
      <a href="/surety-bonds/" class="is-btn-white">View Our Bonds</a>
    </div>
  </div>

</div>