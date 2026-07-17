module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy({"_redirects": "_redirects"});

  // ============================================
  // PREMIUM SHORTCODES
  // ============================================

  // Hero intro block with stats
  eleventyConfig.addPairedShortcode("heroIntro", function(content, stats) {
    let statsHtml = "";
    if (stats) {
      const items = stats.split("|");
      statsHtml = `<div class="hero-stats">` + 
        items.map(item => {
          const [num, label] = item.split(":");
          return `<div class="hero-stat"><span class="hero-stat-num">${num}</span><span class="hero-stat-label">${label}</span></div>`;
        }).join("") + `</div>`;
    }
    return `<div class="premium-hero">${content}${statsHtml}</div>`;
  });

  // Numbered process steps
  eleventyConfig.addShortcode("stepsStart", function() {
    return `<div class="steps-grid">`;
  });
  eleventyConfig.addShortcode("stepsEnd", function() {
    return `</div>`;
  });
  eleventyConfig.addPairedShortcode("step", function(content, number, title) {
    return `<div class="step-card">
      <div class="step-number">${number}</div>
      <h3 class="step-title">${title}</h3>
      <p class="step-text">${content}</p>
    </div>`;
  });

  // Testimonial card
  eleventyConfig.addShortcode("testimonialsStart", function() {
    return `<div class="testimonials-grid">`;
  });
  eleventyConfig.addShortcode("testimonialsEnd", function() {
    return `</div>`;
  });
  eleventyConfig.addPairedShortcode("testimonial", function(content, name, role) {
    return `<div class="testimonial-card">
      <svg class="quote-icon" width="28" height="28" viewBox="0 0 24 24" fill="#c7cdfe"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/></svg>
      <p class="testimonial-text">${content}</p>
      <div class="testimonial-author">
        <span class="testimonial-name">${name}</span>
        <span class="testimonial-role">${role}</span>
      </div>
    </div>`;
  });

  // FAQ accordion item
  eleventyConfig.addShortcode("faqStart", function() {
    return `<div class="faq-list">`;
  });
  eleventyConfig.addShortcode("faqEnd", function() {
    return `</div>`;
  });
  eleventyConfig.addPairedShortcode("faq", function(content, question) {
    return `<details class="faq-item">
      <summary class="faq-question">${question}
        <svg class="faq-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
      </summary>
      <div class="faq-answer">${content}</div>
    </details>`;
  });

  // Feature checklist grid
  eleventyConfig.addShortcode("checklistStart", function() {
    return `<div class="checklist-grid">`;
  });
  eleventyConfig.addShortcode("checklistEnd", function() {
    return `</div>`;
  });
  eleventyConfig.addShortcode("checkItem", function(text) {
    return `<div class="check-item">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
      <span>${text}</span>
    </div>`;
  });

  // CTA banner
  eleventyConfig.addPairedShortcode("ctaBanner", function(content, buttonText, buttonUrl) {
    return `<div class="cta-banner">
      <p class="cta-text">${content}</p>
      <a href="${buttonUrl || '/contact/'}" class="cta-button">${buttonText || 'Get Started'}
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>`;
  });

  // Image with caption (styled, no broken alt text look)
  eleventyConfig.addShortcode("bondImage", function(src, alt) {
    return `<figure class="premium-figure">
      <img src="${src}" alt="${alt || ''}" loading="lazy">
    </figure>`;
  });

  return {
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};