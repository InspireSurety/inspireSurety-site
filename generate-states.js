const fs = require('fs');

const states = [
  { name: "Alabama", slug: "alabama", abbr: "al", regulator: "Alabama Securities Commission" },
  { name: "Alaska", slug: "alaska", abbr: "ak", regulator: "Alaska Division of Banking and Securities" },
  { name: "Arizona", slug: "arizona", abbr: "az", regulator: "Arizona Department of Insurance and Financial Institutions" },
  { name: "Arkansas", slug: "arkansas", abbr: "ar", regulator: "Arkansas Securities Department" },
  { name: "California", slug: "california", abbr: "ca", regulator: "California Department of Financial Protection and Innovation" },
  { name: "Colorado", slug: "colorado", abbr: "co", regulator: "Colorado Division of Banking" },
  { name: "Georgia", slug: "georgia", abbr: "ga", regulator: "Georgia Department of Banking and Finance" },
  { name: "Idaho", slug: "idaho", abbr: "id", regulator: "Idaho Department of Finance" },
  { name: "Illinois", slug: "illinois", abbr: "il", regulator: "Illinois Department of Financial and Professional Regulation" },
  { name: "Indiana", slug: "indiana", abbr: "in", regulator: "Indiana Department of Financial Institutions" },
  { name: "Kansas", slug: "kansas", abbr: "ks", regulator: "Kansas Office of the State Bank Commissioner" },
  { name: "Kentucky", slug: "kentucky", abbr: "ky", regulator: "Kentucky Department of Financial Institutions" },
  { name: "Louisiana", slug: "louisiana", abbr: "la", regulator: "Louisiana Office of Financial Institutions" },
  { name: "Maine", slug: "maine", abbr: "me", regulator: "Maine Bureau of Consumer Credit Protection" },
  { name: "Maryland", slug: "maryland", abbr: "md", regulator: "Maryland Office of the Commissioner of Financial Regulation" },
  { name: "Massachusetts", slug: "massachusetts", abbr: "ma", regulator: "Massachusetts Division of Banks" },
  { name: "Michigan", slug: "michigan", abbr: "mi", regulator: "Michigan Department of Insurance and Financial Services" },
  { name: "Minnesota", slug: "minnesota", abbr: "mn", regulator: "Minnesota Department of Commerce" },
  { name: "Mississippi", slug: "mississippi", abbr: "ms", regulator: "Mississippi Department of Banking and Consumer Finance" },
  { name: "Missouri", slug: "missouri", abbr: "mo", regulator: "Missouri Division of Finance" },
  { name: "Nebraska", slug: "nebraska", abbr: "ne", regulator: "Nebraska Department of Banking and Finance" },
  { name: "Nevada", slug: "nevada", abbr: "nv", regulator: "Nevada Financial Institutions Division" },
  { name: "New Hampshire", slug: "new-hampshire", abbr: "nh", regulator: "New Hampshire Banking Department" },
  { name: "New Jersey", slug: "new-jersey", abbr: "nj", regulator: "New Jersey Department of Banking and Insurance" },
  { name: "New Mexico", slug: "new-mexico", abbr: "nm", regulator: "New Mexico Financial Institutions Division" },
  { name: "New York", slug: "new-york", abbr: "ny", regulator: "New York Department of Financial Services" },
  { name: "North Carolina", slug: "north-carolina", abbr: "nc", regulator: "North Carolina Office of the Commissioner of Banks" },
  { name: "North Dakota", slug: "north-dakota", abbr: "nd", regulator: "North Dakota Department of Financial Institutions" },
  { name: "Ohio", slug: "ohio", abbr: "oh", regulator: "Ohio Department of Commerce Division of Financial Institutions" },
  { name: "Oklahoma", slug: "oklahoma", abbr: "ok", regulator: "Oklahoma Department of Consumer Credit" },
  { name: "Oregon", slug: "oregon", abbr: "or", regulator: "Oregon Division of Financial Regulation" },
  { name: "Pennsylvania", slug: "pennsylvania", abbr: "pa", regulator: "Pennsylvania Department of Banking and Securities" },
  { name: "South Carolina", slug: "south-carolina", abbr: "sc", regulator: "South Carolina Board of Financial Institutions" },
  { name: "South Dakota", slug: "south-dakota", abbr: "sd", regulator: "South Dakota Division of Banking" },
  { name: "Tennessee", slug: "tennessee", abbr: "tn", regulator: "Tennessee Department of Financial Institutions" },
  { name: "Texas", slug: "texas", abbr: "tx", regulator: "Texas Department of Banking" },
  { name: "Vermont", slug: "vermont", abbr: "vt", regulator: "Vermont Department of Financial Regulation" },
  { name: "Virginia", slug: "virginia", abbr: "va", regulator: "Virginia Bureau of Financial Institutions" },
  { name: "Washington", slug: "washington", abbr: "wa", regulator: "Washington Department of Financial Institutions" },
  { name: "West Virginia", slug: "west-virginia", abbr: "wv", regulator: "West Virginia Division of Financial Institutions" },
  { name: "Wisconsin", slug: "wisconsin", abbr: "wi", regulator: "Wisconsin Department of Financial Institutions" },
  { name: "Wyoming", slug: "wyoming", abbr: "wy", regulator: "Wyoming Division of Banking" }
];

const testimonialPool = [
  ["Getting our money transmitter bond felt overwhelming until Inspire Surety walked us through it step by step.", "Renee T.", "Payments Startup Co-Founder"],
  ["We needed bonds issued across several states simultaneously, and the team handled it without a single delay.", "Marcus D.", "Head of Regulatory Compliance"],
  ["As someone new to money services licensing, I appreciated how clearly everything was explained to me.", "Priya K.", "MSB Operations Lead"],
  ["Our renewal was due within days, and the turnaround time genuinely saved our license from lapsing.", "Jonathan B.", "Money Services Business Owner"],
  ["Switching providers was the best decision, faster responses and far better rates than our last surety.", "Isabel M.", "Remittance Company Director"],
  ["Our bond amount increased significantly due to growth, and approval still came back within a day.", "Devon A.", "Digital Currency Exchange Manager"],
  ["The application process was refreshingly simple compared to what I expected for a regulated industry.", "Carlos N.", "Fintech Compliance Manager"],
  ["We had a tight licensing deadline and Inspire Surety got our bond issued same day.", "Whitney S.", "MSB Founder"],
  ["Every question I had was answered quickly, which mattered a lot during a stressful license renewal.", "Grant P.", "Payment Processing Director"],
  ["Our multi-state expansion required several bonds at once, and everything was coordinated seamlessly.", "Alina R.", "VP of Compliance"],
  ["I was surprised how affordable our premium ended up being given our bond amount.", "Trevor H.", "Money Transfer Business Owner"],
  ["The team caught an error in our initial paperwork before it delayed our filing.", "Bianca L.", "Licensing Coordinator"],
  ["We've used Inspire Surety for three separate state licenses now and the experience is consistent every time.", "Omar F.", "Regional Operations Manager"],
  ["Everything was digital, so we never had to worry about mailing documents or missing a signature.", "Kelsey W.", "MSB Compliance Analyst"],
  ["Our credit wasn't perfect, but they still found us a competitive rate.", "Andre M.", "Small Business MSB Owner"],
  ["The support team responded within minutes every time we had a question.", "Natasha G.", "Fintech Operations Lead"],
  ["We appreciated the transparency about how our premium was calculated.", "Lucas V.", "Payments Company Founder"],
  ["Renewing was even faster than the original application, which we didn't expect.", "Simone K.", "MSB License Holder"],
  ["Our underwriting was completed faster than any other bond we've secured.", "Dominic R.", "Money Services Executive"],
  ["I recommend Inspire Surety to every fintech founder I know entering this space.", "Harper J.", "Digital Payments Founder"],
  ["Working across multiple regulators was intimidating, but they simplified it entirely.", "Vanessa T.", "Multi-State Compliance Director"],
  ["Our bond was issued well before our license expiration deadline.", "Felix N.", "MSB Renewal Coordinator"],
  ["I liked that someone actually explained why our bond amount was set where it was.", "Rosalind P.", "Payments Business Owner"],
  ["The online process meant we never had to leave our office to get bonded.", "Miles A.", "Digital Wallet Company Manager"],
  ["Their responsiveness made a stressful licensing period much easier to manage.", "Yvonne C.", "MSB Program Manager"],
  ["We compared several providers and Inspire Surety had both the best price and the fastest turnaround.", "Terrence B.", "Remittance Service Owner"],
  ["Our compliance team specifically praised how organized the whole process was.", "Camille D.", "Head of Licensing"],
  ["I didn't expect same-day issuance, but that's exactly what we got.", "Julian S.", "Money Transmitter Startup Founder"],
  ["They made a genuinely confusing regulatory process feel manageable.", "Priscilla E.", "MSB Compliance Officer"],
  ["Every state we've expanded into, they've been able to support us with the right bond quickly.", "Rashad L.", "Multi-State MSB Director"],
  ["Their team clearly understands money transmitter regulations better than anyone else we spoke with.", "Ingrid F.", "Payments Regulatory Specialist"],
  ["We needed a fast increase in our bond amount and they delivered within 24 hours.", "Desmond H.", "MSB Growth Operations Lead"],
  ["I appreciated not being pushed into a higher bond amount than we actually needed.", "Marguerite O.", "Small MSB Owner"],
  ["Their digital delivery meant we filed with the state the same day we applied.", "Cole W.", "Fintech Operations Director"],
  ["Every renewal since our first bond has been fast and completely hassle-free.", "Anaya R.", "MSB Compliance Manager"],
  ["We needed an unusual bond amount and they structured it correctly on the first try.", "Preston K.", "Payments Infrastructure Lead"],
  ["Their knowledge of state-specific requirements saved us from a costly filing mistake.", "Odessa M.", "Regulatory Affairs Manager"],
  ["I've referred three other fintech companies to them since our bond was issued.", "Baxter L.", "MSB Founder"],
  ["The pricing was clear from the start with no hidden fees or surprises.", "Marisol T.", "Money Services Business Owner"],
  ["Our audit went smoothly in part because our bond documentation was so well organized.", "Clive R.", "Compliance Director"],
  ["They handled a complex multi-entity bonding structure without any issues.", "Selena W.", "Corporate Licensing Manager"],
  ["I was impressed by how quickly they responded to our urgent renewal request.", "Antoine P.", "MSB Operations Director"],
  ["Their underwriting team clearly has deep experience with money transmitter risk profiles.", "Farrah D.", "Payments Risk Manager"]
];

function pickTestimonials(index) {
  const start = (index * 6) % testimonialPool.length;
  const picks = [];
  for (let i = 0; i < 6; i++) {
    picks.push(testimonialPool[(start + i) % testimonialPool.length]);
  }
  return picks;
}

function buildState(state, index) {
  const t = pickTestimonials(index);
  return {
    row_id: index + 1,
    state_slug: state.slug,
    state_name: state.name,
    permalink_slug: `money-transmitter-bond-${state.slug}`,
    css_prefix: `is-mt-${state.abbr}`,
    checkout_url: `https://fc16062.propeller.insure/axelerator-public/#do=show+widget+page&State_search_scheme_property=${encodeURIComponent(state.name)}&State_search_scheme_property=Federal&name=public+home&one_search_search=money+transmitter`,
    hero_badge_text: `License and Permit Bond - ${state.name}`,
    h1_title: `${state.name} Money Transmitter Bond`,
    hero_tag: "Fast Approval and Lowest Rates",
    hero_description: `Secure Your ${state.name} Money Transmitter Bond Quickly and Affordably.`,
    hero_note: "Guaranteed state compliance - we determine the correct bond for your MSB based on your state's regulations.",
    hero_stat1_num: "50K-500K",
    hero_stat1_label: "Bond Range",
    hero_stat2_num: "NMLS",
    hero_stat2_label: "Filing Platform",
    hero_stat3_num: "Same-Day",
    hero_stat3_label: "Digital Issuance",
    regulator_name: state.regulator,
    bond_amount_display: "50K-500K",
    premium_range: "1%-5%",
    what_is_intro: `A ${state.name} Money Transmitter Bond is a state-required surety bond that protects consumers from financial loss if a money transmitter fails to follow ${state.name} regulations. This bond applies to businesses that:`,
    what_is_checklist: "Transmit money or monetary value across state lines;;Sell or issue payment instruments;;Operate digital wallets or stored-value platforms;;Provide app-based or online money transfer services",
    what_is_outro: `The bond ensures compliance with the ${state.regulator}.`,
    cost_intro: `${state.name} sets the bond amount based on transaction volume and business risk, typically ranging from $50,000 to $500,000.`,
    cost_factors_intro: "Your premium depends on:",
    cost_checklist: "Bond amount;;Credit score;;Financial strength;;Business experience",
    cost_note: `${state.name}-ready issuance - fast approvals and digital delivery for immediate filing with the state.`,
    who_needs_intro: "You need this bond if your business:",
    who_needs_checklist: "Sends or receives money on behalf of customers;;Issues payment instruments such as money orders;;Provides digital or electronic transfer services;;Handles stored-value or prepaid access products;;Operates as a licensed money services business",
    who_needs_outro: `Any company applying for a ${state.name} money transmitter license must maintain an active bond throughout the licensing period.`,
    requirements_intro: `${state.name} requires:`,
    requirements_checklist: `NMLS application;;Audited financial statements;;Background and credit checks;;Net-worth documentation;;Surety bond filing;;Compliance with ${state.regulator} regulations`,
    license_intro: "To obtain your license, you must:",
    license_checklist: "Apply through NMLS;;Secure the required surety bond;;Submit audited financials;;Provide business plans and compliance documents;;Pass background and credit checks",
    process_step1_title: "Complete the Application",
    process_step1_text: `Submit the quick application. Fast ${state.name} approval - your bond is issued to meet all ${state.regulator} requirements.`,
    process_step2_title: "Secure the Lowest Rate",
    process_step2_text: "We match you with the best rate available from A-rated sureties.",
    process_step3_title: "Receive Your Bond",
    process_step3_text: "Same-day issuance available for NMLS or state filing.",
    faq1_q: "How much does a money transmitter bond cost?",
    faq1_a: `Most qualified applicants pay 1 to 5 percent of the bond amount annually, with pricing based on bond amount, credit score, financial strength, and business experience in ${state.name}.`,
    faq2_q: "How long does approval take?",
    faq2_a: `Approvals are fast, with same-day issuance available for NMLS or ${state.name} state filing.`,
    faq3_q: "What does the bond guarantee?",
    faq3_a: `The bond guarantees compliance with ${state.regulator} regulations and protects consumers from financial loss.`,
    faq4_q: "Can the bond be refunded?",
    faq4_a: `Refund policies vary by surety. Contact us for specifics on your ${state.name} money transmitter bond.`,
    faq5_q: "Do I need a separate bond for each state?",
    faq5_a: "Yes, money transmitter bonds are state-specific and each state has individual requirements.",
    testimonial1_text: t[0][0], testimonial1_name: t[0][1], testimonial1_role: t[0][2],
    testimonial2_text: t[1][0], testimonial2_name: t[1][1], testimonial2_role: t[1][2],
    testimonial3_text: t[2][0], testimonial3_name: t[2][1], testimonial3_role: t[2][2],
    testimonial4_text: t[3][0], testimonial4_name: t[3][1], testimonial4_role: t[3][2],
    testimonial5_text: t[4][0], testimonial5_name: t[4][1], testimonial5_role: t[4][2],
    testimonial6_text: t[5][0], testimonial6_name: t[5][1], testimonial6_role: t[5][2],
    meta_title: `${state.name} Money Transmitter Bond - Instant NMLS Quotes`,
    meta_description: `Get your compliant ${state.name} money transmitter bond with direct electronic NMLS filing.`
  };
}

const dataPath = '_data/pseo/moneyTransmitterBond.json';
let existing = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Remove any state that already exists to avoid duplicates on re-run
const existingSlugs = new Set(existing.map(r => r.state_slug));

states.forEach((state, i) => {
  if (!existingSlugs.has(state.slug)) {
    existing.push(buildState(state, existing.length));
  }
});

fs.writeFileSync(dataPath, JSON.stringify(existing, null, 2), { encoding: 'utf8' });
console.log(`Done. Total states in file: ${existing.length}`);