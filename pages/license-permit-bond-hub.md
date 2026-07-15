<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{{ title }} | InspireSurety</title>
<meta name="description" content="{{ description }}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: { sans: ['Inter','sans-serif'] },
        colors: {
          brand: {
            50:'#eef1ff',100:'#e0e4ff',200:'#c7cdfe',300:'#a5aefc',
            400:'#8288f8',500:'#6a67f0',600:'#5849e4',700:'#4a3ac8',
            800:'#3d31a2',900:'#352c81',950:'#1e1856'
          }
        }
      }
    }
  }
</script>
<style>
  html{scroll-behavior:smooth}
  body{font-family:'Inter',sans-serif;-webkit-font-smoothing:antialiased}
  .lift{transition:transform .22s cubic-bezier(.2,.8,.2,1),box-shadow .22s ease,border-color .22s ease}
  .lift:hover{transform:translateY(-4px);box-shadow:0 14px 36px -8px rgba(74,58,200,.22);border-color:#c7cdfe}
  .dot-w{background-image:radial-gradient(rgba(255,255,255,.11) 1.5px,transparent 1.5px);background-size:24px 24px}

  .prose h1{font-size:2rem;font-weight:900;color:#0f172a;margin-bottom:1rem;line-height:1.1}
  .prose h2{font-size:1.5rem;font-weight:800;color:#1e293b;margin-top:2.5rem;margin-bottom:1rem;line-height:1.2;padding-bottom:.6rem;border-bottom:2px solid #eef1ff}
  .prose h3{font-size:1.15rem;font-weight:700;color:#1e293b;margin-top:1.5rem;margin-bottom:.5rem}
  .prose p{color:#475569;line-height:1.75;margin-bottom:1rem;font-size:.9375rem}
  .prose ul{list-style:none;padding:0;margin-bottom:1rem}
  .prose ul li{color:#475569;font-size:.9375rem;line-height:1.75;padding-left:1.5rem;position:relative;margin-bottom:.35rem}
  .prose ul li::before{content:"";position:absolute;left:0;top:.65em;height:8px;width:8px;border-radius:50%;background:#4a3ac8}
  .prose ol{padding-left:1.5rem;margin-bottom:1rem}
  .prose ol li{color:#475569;font-size:.9375rem;line-height:1.75;margin-bottom:.35rem}
  .prose a{color:#4a3ac8;font-weight:600;text-decoration:underline;text-underline-offset:3px}
  .prose a:hover{color:#352c81}
  .prose strong{color:#1e293b;font-weight:700}
  .prose table{width:100%;border-collapse:collapse;margin-bottom:1.5rem;font-size:.875rem}
  .prose th{background:#eef1ff;color:#352c81;font-weight:700;padding:.75rem 1rem;text-align:left;border:1px solid #c7cdfe}
  .prose td{padding:.7rem 1rem;border:1px solid #e2e8f0;color:#475569;vertical-align:top}
  .prose tr:nth-child(even) td{background:#f8f9fc}
  .prose blockquote{border-left:4px solid #4a3ac8;background:#eef1ff;padding:1rem 1.25rem;border-radius:0 .75rem .75rem 0;margin:1.5rem 0}
  .prose blockquote p{color:#352c81;font-weight:500;margin:0}

  /* ===== HEADER STYLES ===== */
  .nav-item { position: relative; }
  .nav-link {
    display: flex; align-items: center; gap: 4px;
    font-size: 14px; font-weight: 600; color: #334155;
    padding: 8px 4px; transition: color 0.15s;
  }
  .nav-link:hover { color: var(--nav-color, #4a3ac8); }
  .nav-caret { width: 14px; height: 14px; transition: transform 0.2s; }
  .nav-item:hover .nav-caret { transform: rotate(180deg); }

  .nav-dropdown {
    position: absolute; top: 100%; left: 0;
    background: #fff; border: 1px solid #e2e8f0;
    border-radius: 12px; box-shadow: 0 12px 32px rgba(0,0,0,0.12);
    padding: 8px; min-width: 220px;
    opacity: 0; visibility: hidden; transform: translateY(8px);
    transition: all 0.2s ease;
    z-index: 100;
  }
  .nav-item:hover .nav-dropdown { opacity: 1; visibility: visible; transform: translateY(4px); }
  .nav-dropdown a {
    display: block; padding: 10px 14px; border-radius: 8px;
    font-size: 13.5px; font-weight: 500; color: #334155;
    text-decoration: none; transition: background 0.15s;
  }
  .nav-dropdown a:hover { background: #f8fafc; color: var(--nav-color, #4a3ac8); }

  .construction-color { --nav-color: #c2410c; }
  .license-color { --nav-color: #1e40af; }
  .court-color { --nav-color: #6d28d9; }
  .more-color { --nav-color: #0f766e; }

  .search-wrap { position: relative; }
  .search-input {
    width: 0; opacity: 0; padding: 0;
    border: none; outline: none; font-size: 13.5px;
    transition: width 0.25s ease, opacity 0.2s ease, padding 0.25s ease;
  }
  .search-wrap.active .search-input {
    width: 200px; opacity: 1; padding: 8px 12px;
  }
  .search-results {
    position: absolute; top: 100%; right: 0; margin-top: 8px;
    background: #fff; border: 1px solid #e2e8f0; border-radius: 12px;
    box-shadow: 0 12px 32px rgba(0,0,0,0.15);
    width: 280px; max-height: 320px; overflow-y: auto;
    display: none; z-index: 200;
  }
  .search-results.show { display: block; }
  .search-results a {
    display: block; padding: 10px 16px; font-size: 13.5px;
    color: #334155; text-decoration: none; border-bottom: 1px solid #f1f5f9;
  }
  .search-results a:last-child { border-bottom: none; }
  .search-results a:hover { background: #f8fafc; color: #4a3ac8; }
  .search-empty { padding: 16px; font-size: 13px; color: #94a3b8; text-align: center; }
</style>
</head>
<body class="bg-white text-slate-800">

<!-- HEADER -->
<header class="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
  <div class="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16 gap-6">

    <!-- LOGO: WORDS ONLY -->
    <a href="/" class="flex items-center shrink-0">
      <span class="text-[19px] font-extrabold tracking-tight text-slate-900">Inspire<span class="text-brand-700">Surety</span></span>
    </a>

    <!-- NAV MENU -->
    <nav class="hidden lg:flex items-center gap-7">
      <div class="nav-item construction-color">
        <a href="/pages/contractors-construction-bond-hub/" class="nav-link">
          Construction Bonds
          <svg class="nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </a>
        <div class="nav-dropdown">
          <a href="/pages/contractors-construction-bond-hub/">All Construction Bonds</a>
          <a href="/pages/construction-contractor-license-bonds/">Contractor License Bonds</a>
          <a href="/pages/bid-bond/">Bid Bonds</a>
          <a href="/pages/payment-performance-bonds/">Payment &amp; Performance Bonds</a>
          <a href="/pages/subdivision-bond/">Subdivision Bonds</a>
        </div>
      </div>

      <div class="nav-item license-color">
        <a href="/pages/license-permit-bond-hub/" class="nav-link">
          License &amp; Permit Bonds
          <svg class="nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </a>
        <div class="nav-dropdown">
          <a href="/pages/license-permit-bond-hub/">All License &amp; Permit Bonds</a>
          <a href="/pages/notary-bond/">Notary Bond</a>
          <a href="/pages/motor-vehicle-dealer-bond/">Auto Dealer Bond</a>
          <a href="/pages/mortgage-broker-bond/">Mortgage Broker Bond</a>
          <a href="/pages/money-transmitter-bond/">Money Transmitter Bond</a>
          <a href="/pages/collection-agency-bond/">Collection Agency Bond</a>
        </div>
      </div>

      <div class="nav-item court-color">
        <a href="/pages/court-fiduciary-bond-hub/" class="nav-link">
          Court &amp; Fiduciary Bonds
          <svg class="nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </a>
        <div class="nav-dropdown">
          <a href="/pages/court-fiduciary-bond-hub/">All Court &amp; Fiduciary Bonds</a>
          <a href="/pages/probate-bonds/">Probate Bonds</a>
          <a href="/pages/guardian-bonds/">Guardian Bonds</a>
          <a href="/pages/trustee-bonds/">Trustee Bonds</a>
          <a href="/pages/public-official-bond/">Public Official Bond</a>
        </div>
      </div>

      <div class="nav-item more-color">
        <a href="/pages/surety-bond-learning-center/" class="nav-link">
          More Bonds
          <svg class="nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </a>
        <div class="nav-dropdown">
          <a href="/pages/environmental-reclamation-bond-hub/">Environmental &amp; Reclamation</a>
          <a href="/pages/federal-blm-bond-hub/">Federal &amp; BLM</a>
          <a href="/pages/escrow-real-estate-bond-hub/">Escrow &amp; Real Estate</a>
          <a href="/pages/cannabis-bond-hub/">Cannabis Bonds</a>
          <a href="/pages/agriculture-food-bond-hub/">Agriculture &amp; Food</a>
          <a href="/pages/surety-bond-learning-center/" style="font-weight:700;border-top:1px solid #f1f5f9;margin-top:4px;padding-top:12px;">Surety Bond Learning Center →</a>
        </div>
      </div>
    </nav>

    <!-- RIGHT SIDE: SEARCH, PHONE, ACCOUNT, CTA -->
    <div class="flex items-center gap-4 shrink-0">

      <!-- SEARCH -->
      <div class="search-wrap flex items-center" id="searchWrap">
        <input type="text" id="searchInput" class="search-input bg-slate-100 rounded-full text-slate-700" placeholder="Search bonds...">
        <button id="searchToggle" class="h-9 w-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition shrink-0" aria-label="Search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#475569" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
        </button>
        <div class="search-results" id="searchResults"></div>
      </div>

      <!-- PHONE -->
      <a href="tel:+19282270054" class="hidden md:flex items-center gap-1.5 text-[13.5px] font-semibold text-slate-600 hover:text-brand-700 transition">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        +1 928-227-0054
      </a>

      <!-- CTA -->
      <a href="/pages/surety-bonds/" class="text-[13px] font-bold text-white px-5 py-2.5 rounded-lg shadow-sm transition whitespace-nowrap" style="background:#4a3ac8" onmouseover="this.style.background='#3d31a2'" onmouseout="this.style.background='#4a3ac8'">
        View Our Bonds
      </a>

      <!-- MOBILE MENU BUTTON -->
      <button class="lg:hidden h-9 w-9 flex items-center justify-center text-slate-700" id="mobileMenuBtn" aria-label="Menu">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
      </button>
    </div>
  </div>

  <!-- MOBILE MENU -->
  <div class="lg:hidden hidden border-t border-slate-200 bg-white" id="mobileMenu">
    <div class="px-5 py-4 space-y-1">
      <a href="/pages/contractors-construction-bond-hub/" class="block py-2.5 text-sm font-semibold text-slate-700 border-b border-slate-100">Construction Bonds</a>
      <a href="/pages/license-permit-bond-hub/" class="block py-2.5 text-sm font-semibold text-slate-700 border-b border-slate-100">License &amp; Permit Bonds</a>
      <a href="/pages/court-fiduciary-bond-hub/" class="block py-2.5 text-sm font-semibold text-slate-700 border-b border-slate-100">Court &amp; Fiduciary Bonds</a>
      <a href="/pages/surety-bond-learning-center/" class="block py-2.5 text-sm font-semibold text-slate-700 border-b border-slate-100">More Bonds</a>
      <a href="tel:+19282270054" class="block py-2.5 text-sm font-semibold text-brand-700">Call +1 928-227-0054</a>
    </div>
  </div>
</header>

<!-- PAGE CONTENT -->
<main>
  {% if layout == 'home' %}

  <!-- HOME HERO -->
  <section class="relative overflow-hidden" style="background:linear-gradient(145deg,#0f0c29,#1e1b4b,#312e81)">
    <div class="absolute inset-0 dot-w pointer-events-none"></div>
    <div class="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style="background:radial-gradient(circle,rgba(99,102,241,.22) 0%,transparent 70%)"></div>
    <div class="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 lg:py-28 text-center">
      <div class="inline-flex items-center gap-2 border border-brand-400/25 bg-white/5 text-brand-300 text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
        <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        Licensed in All 50 States
      </div>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.06] tracking-tight max-w-3xl mx-auto">{{ title }}</h1>
      <p class="mt-5 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">{{ description }}</p>
      <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/pages/surety-bonds/" class="inline-flex items-center justify-center gap-2 font-bold text-[15px] text-white px-8 py-4 rounded-xl shadow-lg transition" style="background:#5849e4" onmouseover="this.style.background='#4a3ac8'" onmouseout="this.style.background='#5849e4'">
          Browse Bonds
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
        <a href="/pages/contact/" class="inline-flex items-center justify-center gap-2 font-bold text-[15px] text-brand-200 border border-brand-400/40 px-8 py-4 rounded-xl hover:bg-white/5 transition">
          Talk to an Agent
        </a>
      </div>
      <div class="mt-14 grid grid-cols-3 max-w-sm mx-auto divide-x divide-white/10 border-t border-white/10 pt-8">
        <div><p class="text-2xl font-black text-white">8,000+</p><p class="text-xs text-slate-400 mt-0.5">Bond Types</p></div>
        <div><p class="text-2xl font-black text-white">50</p><p class="text-xs text-slate-400 mt-0.5">States</p></div>
        <div><p class="text-2xl font-black text-white">24hr</p><p class="text-xs text-slate-400 mt-0.5">Issuance</p></div>
      </div>
    </div>
  </section>

  <div class="max-w-7xl mx-auto px-5 sm:px-8 py-16">
    <div class="prose max-w-none">
      {{ content | safe }}
    </div>
  </div>

  {% elif layout == 'blog' %}

  <div class="bg-slate-50 border-b border-slate-200 py-10">
    <div class="max-w-7xl mx-auto px-5 sm:px-8">
      <div class="flex items-center gap-2 text-xs text-slate-400 mb-4 font-medium">
        <a href="/" class="hover:text-brand-700">Home</a>
        <span>›</span>
        <a href="/blog/" class="hover:text-brand-700">Resources</a>
        <span>›</span>
        <span class="text-slate-600">{{ title }}</span>
      </div>
      {% if tags %}
      <div class="flex flex-wrap gap-2 mb-3">
        {% for tag in tags %}
        {% if tag != "blog" %}
        <span class="text-[11px] font-bold uppercase tracking-wide bg-brand-100 text-brand-700 px-3 py-1 rounded-full">{{ tag }}</span>
        {% endif %}
        {% endfor %}
      </div>
      {% endif %}
      <h1 class="text-3xl sm:text-4xl font-black text-slate-900 leading-tight max-w-3xl">{{ title }}</h1>
      {% if description %}<p class="mt-3 text-lg text-slate-500 max-w-2xl leading-relaxed">{{ description }}</p>{% endif %}
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-5 sm:px-8 py-12">
    <div class="prose max-w-none">
      {{ content | safe }}
    </div>
  </div>

  {% else %}

  <div class="max-w-7xl mx-auto px-5 sm:px-8 py-12">
    <div class="prose max-w-none">
      {{ content | safe }}
    </div>
  </div>

  {% endif %}
</main>

<!-- FOOTER -->
<footer class="bg-slate-950 text-slate-400 mt-8">
  <div class="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid grid-cols-2 sm:grid-cols-4 gap-8">
    <div class="col-span-2 sm:col-span-1">
      <a href="/" class="flex items-center mb-4">
        <span class="text-[17px] font-extrabold text-white">Inspire<span style="color:#a5aefc;">Surety</span></span>
      </a>
      <p class="text-xs leading-relaxed text-slate-500">Nationwide surety bond marketplace. Licensed in all 50 states.</p>
    </div>
    <div>
      <h4 class="text-white text-sm font-bold mb-4">Bond Categories</h4>
      <ul class="space-y-2.5 text-xs">
        <li><a href="/pages/contractors-construction-bond-hub/" class="hover:text-white transition">Contract Bonds</a></li>
        <li><a href="/pages/license-permit-bond-hub/" class="hover:text-white transition">License &amp; Permit</a></li>
        <li><a href="/pages/court-fiduciary-bond-hub/" class="hover:text-white transition">Court &amp; Fiduciary</a></li>
        <li><a href="/pages/environmental-reclamation-bond-hub/" class="hover:text-white transition">Environmental</a></li>
        <li><a href="/pages/federal-blm-bond-hub/" class="hover:text-white transition">Federal &amp; BLM</a></li>
        <li><a href="/pages/surety-bonds/" class="hover:text-white transition">All Bonds</a></li>
      </ul>
    </div>
    <div>
      <h4 class="text-white text-sm font-bold mb-4">Company</h4>
      <ul class="space-y-2.5 text-xs">
        <li><a href="/pages/about/" class="hover:text-white transition">About</a></li>
        <li><a href="/pages/our-services/" class="hover:text-white transition">Our Services</a></li>
        <li><a href="/blog/" class="hover:text-white transition">Resources</a></li>
        <li><a href="/pages/contact/" class="hover:text-white transition">Contact</a></li>
        <li><a href="/pages/glossary-of-surety-bond-terms/" class="hover:text-white transition">Glossary</a></li>
        <li><a href="/pages/surety-bond-learning-center/" class="hover:text-white transition">Learning Center</a></li>
      </ul>
    </div>
    <div>
      <h4 class="text-white text-sm font-bold mb-4">Legal</h4>
      <ul class="space-y-2.5 text-xs">
        <li><a href="/pages/privacy-policy/" class="hover:text-white transition">Privacy Policy</a></li>
        <li><a href="/pages/terms/" class="hover:text-white transition">Terms of Use</a></li>
        <li><a href="/pages/contact/" class="hover:text-white transition">Contact Us</a></li>
      </ul>
    </div>
  </div>
  <div class="border-t border-white/10 py-8 px-5 sm:px-8">
    <div class="max-w-7xl mx-auto space-y-4">
      <p class="text-[11px] text-slate-500 leading-relaxed font-medium uppercase tracking-wide">
        THE INFORMATION ON THIS WEBSITE IS PROVIDED FOR INFORMATIONAL PURPOSES ONLY. Nothing on this website should be construed as a solicitation, proposal, offer, recommendation, endorsement, or advice regarding any surety or insurance product. The information on this website is of a general nature and is not intended as a substitute for individual consultation with a licensed insurance professional. YOU ARE RESPONSIBLE FOR DETERMINING WHAT INSURANCE PRODUCTS YOU NEED AND IN WHAT AMOUNTS, BASED ON YOUR UNIQUE EXPOSURE TO RISKS AND ABILITY TO BEAR LOSSES. Stephen Wright is a licensed insurance agent in Arizona. Insurance products and features are subject to underwriting criteria and may not be available in all states.
      </p>
      <p class="text-[12px] text-slate-600 font-medium">
        Copyright © 2026 | Inspire Risk Advisors LLC, dba Inspire Surety | All Rights Reserved.
      </p>
    </div>
  </div>
</footer>

<!-- SEARCH FUNCTIONALITY -->
<script>
  const bondPages = [
    { name: "Notary Bond", url: "/pages/notary-bond/" },
    { name: "Notary Bond Guide", url: "/blog/notary-bond-guide/" },
    { name: "Auto Dealer Bond", url: "/pages/motor-vehicle-dealer-bond/" },
    { name: "Mortgage Broker Bond", url: "/pages/mortgage-broker-bond/" },
    { name: "Money Transmitter Bond", url: "/pages/money-transmitter-bond/" },
    { name: "Collection Agency Bond", url: "/pages/collection-agency-bond/" },
    { name: "Freight Broker Bond", url: "/pages/freight-broker-bonds/" },
    { name: "Utility Deposit Bond", url: "/pages/utility-deposit-bonds/" },
    { name: "Health Club Bond", url: "/pages/health-club-bonds/" },
    { name: "Liquor License Bond", url: "/pages/liquor-license-bond/" },
    { name: "Auctioneer Bond", url: "/pages/auctioneer-bond/" },
    { name: "Bid Bond", url: "/pages/bid-bond/" },
    { name: "Payment & Performance Bond", url: "/pages/payment-performance-bonds/" },
    { name: "Subdivision Bond", url: "/pages/subdivision-bond/" },
    { name: "Probate Bond", url: "/pages/probate-bonds/" },
    { name: "Guardian Bond", url: "/pages/guardian-bonds/" },
    { name: "Trustee Bond", url: "/pages/trustee-bonds/" },
    { name: "Public Official Bond", url: "/pages/public-official-bond/" },
    { name: "License & Permit Bond Hub", url: "/pages/license-permit-bond-hub/" },
    { name: "Construction Bond Hub", url: "/pages/contractors-construction-bond-hub/" },
    { name: "Court & Fiduciary Bond Hub", url: "/pages/court-fiduciary-bond-hub/" },
    { name: "All Surety Bonds", url: "/pages/surety-bonds/" }
  ];

  const searchWrap = document.getElementById('searchWrap');
  const searchToggle = document.getElementById('searchToggle');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  searchToggle.addEventListener('click', function() {
    searchWrap.classList.toggle('active');
    if (searchWrap.classList.contains('active')) {
      setTimeout(() => searchInput.focus(), 100);
    } else {
      searchResults.classList.remove('show');
    }
  });

  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    if (query.length < 2) {
      searchResults.classList.remove('show');
      return;
    }
    const matches = bondPages.filter(p => p.name.toLowerCase().includes(query));
    if (matches.length === 0) {
      searchResults.innerHTML = '<div class="search-empty">No bonds found. Try "notary" or "auto dealer".</div>';
    } else {
      searchResults.innerHTML = matches.map(p => `<a href="${p.url}">${p.name}</a>`).join('');
    }
    searchResults.classList.add('show');
  });

  document.addEventListener('click', function(e) {
    if (!searchWrap.contains(e.target)) {
      searchResults.classList.remove('show');
    }
  });

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
  });
</script>

</body>
</html>