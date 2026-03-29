// SMAART Marketing Command Center — Seed Data
// Maps every section of the marketing plan into executable segments + modules

export const SEGMENTS = [
  {
    name: "First-Party Data Engine",
    slug: "first-party-data",
    icon: "Database",
    description: "Build the foundation: pixels, lead magnets, CRM data, consent management",
    category: "strategy",
    status: "not_started",
    progress: 0,
    order: 1,
    modules: [
      {
        name: "Pixel Installation",
        slug: "pixels",
        icon: "Code",
        description: "Install Meta, Google, LinkedIn, X pixels on smaartcompany.com",
        order: 1,
        guide: `## What Is Pixel Installation?\n\nA tracking pixel is a small piece of JavaScript code placed on your website that monitors visitor behavior. It is the foundation of all digital advertising — without pixels, you cannot track conversions, build retargeting audiences, or optimize ad delivery.\n\nFor SMAART Company, pixels are critical because our sales cycle is longer than impulse purchases. A business owner might visit smaartcompany.com three times before requesting a consultation. Without pixels, those first two visits are invisible and we cannot retarget them.\n\n## Why It Matters\n\nEvery dollar spent on ads without proper pixel tracking is money wasted. Pixels allow you to:\n- Track which ads generate actual leads and sales\n- Build audiences of people who visited your site (retargeting)\n- Optimize ad delivery to people most likely to convert\n- Measure true ROI across all channels\n- Feed conversion data back to ad platforms for smarter bidding\n\n## Implementation Steps\n\n1. **Meta Pixel**: Go to Meta Events Manager → Create Pixel → Install base code in the <head> of every page. Add standard events: PageView, Lead, Contact, ViewContent. Fire the Lead event on the quote request thank-you page.\n\n2. **Google Tag (gtag.js)**: Create a Google Ads conversion action → Install the global site tag → Add conversion tracking on thank-you pages and form submissions. Enable Enhanced Conversions for better match rates.\n\n3. **LinkedIn Insight Tag**: Go to Campaign Manager → Account Assets → Install the Insight Tag. This is critical for B2B targeting of business owners and CFOs in South Florida.\n\n4. **X (Twitter) Pixel**: Go to Ads Manager → Tools → Conversion Tracking → Install base code + event-specific code for form submissions.\n\n## Pro Tips\n\n- Use Google Tag Manager (GTM) to manage all pixels in one place instead of editing code directly\n- Test every pixel with the Meta Pixel Helper and Google Tag Assistant browser extensions\n- Set up Enhanced Conversions for better match rates in cookieless environments\n- Always verify pixels fire correctly on staging before pushing to production`,
        defaultTasks: JSON.stringify([
          "Install Meta Pixel via Google Tag Manager",
          "Set up Google Ads conversion tracking (gtag.js)",
          "Install LinkedIn Insight Tag for B2B tracking",
          "Add X (Twitter) conversion pixel",
          "Test all pixels with browser debugging tools",
          "Configure Enhanced Conversions for Google Ads"
        ])
      },
      {
        name: "Lead Magnets",
        slug: "lead-magnets",
        icon: "FileText",
        description: "Tax checklist PDF, business quiz, ebook, free consult page",
        order: 2,
        guide: `## What Are Lead Magnets?\n\nA lead magnet is a free resource you offer in exchange for a prospect's contact information. For SMAART, this means creating valuable content that business owners in South Florida actually want — tax checklists, financial health quizzes, industry-specific guides — and gating it behind a simple form.\n\nLead magnets are the engine that fills your CRM with qualified prospects who have already demonstrated interest in your services.\n\n## Why It Matters\n\nCold outreach converts at 1-2%. Lead magnets convert at 15-30% because the prospect self-selects by downloading something relevant to their needs. Every lead magnet download is a hand raised saying "I have this problem."\n\nFor an insurance and financial services company like SMAART, the trust barrier is high. A free resource positions you as the expert before the first call ever happens.\n\n## Implementation Steps\n\n1. **Tax Season Checklist PDF**: Create a "2026 South Florida Business Tax Preparation Checklist" — 1-page PDF with actionable items. Gate it behind name + email + business type.\n\n2. **Business Insurance Quiz**: Build an interactive quiz ("Is Your Business Properly Protected?") using Typeform or GoHighLevel forms. 5-7 questions that qualify the lead and route them to the right service line.\n\n3. **Industry-Specific Guides**: Create downloadable guides for top verticals — restaurants, medical practices, real estate agencies, construction companies — each addressing their unique insurance and financial pain points.\n\n4. **Free Consultation Page**: Dedicated landing page with calendar booking (Calendly or GHL) for a 15-minute "Business Protection Review."\n\n## Pro Tips\n\n- The best lead magnets solve an immediate, specific problem — not a general one\n- Always A/B test the lead magnet title on the landing page\n- Follow up within 5 minutes of download — speed to lead is everything\n- Use progressive profiling: ask for email first, then company details on the thank-you page`,
        defaultTasks: JSON.stringify([
          "Create 2026 Business Tax Preparation Checklist PDF",
          "Build interactive Business Insurance Quiz in GoHighLevel",
          "Design landing pages for each lead magnet",
          "Set up form-to-CRM automation in GoHighLevel",
          "Create thank-you page with calendar booking CTA"
        ])
      },
      {
        name: "CRM Data Export",
        slug: "crm-export",
        icon: "Upload",
        description: "Export GoHighLevel/Salesforce contacts as segmented audience lists",
        order: 3,
        guide: `## What Is CRM Data Export?\n\nCRM data export means taking your existing client and prospect lists from GoHighLevel and uploading them to advertising platforms (Meta, Google, LinkedIn) as Custom Audiences. This is first-party data — the most valuable targeting data you own.\n\nSMAART's GoHighLevel CRM contains thousands of contacts: current clients, past leads, quote requests, and event attendees. Each of these segments can be turned into a precision targeting audience.\n\n## Why It Matters\n\nYour existing customer list is worth more than any interest-based targeting Meta or Google can offer. When you upload a customer list:\n- Ad platforms match 40-70% of those emails/phones to real user profiles\n- You can create Lookalike audiences from your best clients\n- You can exclude current clients from acquisition campaigns (saving money)\n- You can target past leads who never converted with re-engagement ads\n\n## Implementation Steps\n\n1. **Segment Your CRM**: Break your GoHighLevel contacts into segments — Active Clients, Lost Leads (last 90 days), Quote Requests (no conversion), High-Value Clients ($10k+ annual revenue), Industry Verticals.\n\n2. **Export Clean Lists**: Export each segment as CSV with: email, phone, first name, last name, city, state, zip. Clean data = higher match rates.\n\n3. **Upload to Platforms**: Upload to Meta Custom Audiences, Google Customer Match, and LinkedIn Matched Audiences. Each platform has specific formatting requirements.\n\n4. **Set Refresh Schedule**: Re-export and re-upload monthly to keep audiences current. Stale lists waste budget on people whose situation has changed.\n\n## Pro Tips\n\n- Hash emails before upload for privacy compliance (platforms do this automatically now)\n- The more data fields you include, the higher the match rate\n- Create an "Exclude" audience of current clients for all acquisition campaigns\n- Use Zapier or Make to automate monthly CRM-to-platform syncs`,
        defaultTasks: JSON.stringify([
          "Segment GoHighLevel contacts into 5 audience lists",
          "Export and clean CSV files for each segment",
          "Upload Custom Audiences to Meta Business Manager",
          "Upload Customer Match lists to Google Ads",
          "Upload Matched Audiences to LinkedIn Campaign Manager",
          "Set up monthly automated re-sync schedule"
        ])
      },
      {
        name: "Consent & Privacy",
        slug: "consent",
        icon: "Shield",
        description: "Cookie consent, privacy policy, data collection disclosures",
        order: 4,
        guide: `## What Is Consent & Privacy Management?\n\nConsent management ensures your website collects data legally and transparently. This includes cookie consent banners, privacy policies, data collection disclosures, and opt-in mechanisms. With increasing regulation (CCPA, state privacy laws) and browser restrictions (third-party cookie deprecation), this is no longer optional.\n\nFor SMAART, handling sensitive financial and insurance data means privacy compliance is both a legal requirement and a trust signal for prospects.\n\n## Why It Matters\n\nBeyond legal compliance, proper consent management:\n- Protects SMAART from fines (CCPA violations can cost $7,500 per intentional violation)\n- Builds trust with privacy-conscious business owners\n- Ensures your pixel data is compliant and usable for optimization\n- Future-proofs your data strategy as regulations tighten\n- Enables Consent Mode in Google Ads for better conversion modeling\n\n## Implementation Steps\n\n1. **Cookie Consent Banner**: Install a CMP (Consent Management Platform) like Cookiebot or OneTrust. Configure it to block non-essential cookies until consent is given. Enable Google Consent Mode v2.\n\n2. **Privacy Policy Update**: Update smaartcompany.com privacy policy to cover all data collection — pixels, forms, cookies, CRM storage. List every third party receiving data (Meta, Google, etc.).\n\n3. **Form Disclosures**: Add clear consent language on every form: "By submitting, you agree to receive communications from SMAART Company. You can unsubscribe anytime."\n\n4. **Data Retention Policy**: Define how long you keep prospect data (typically 24 months for non-clients) and implement automated deletion in GoHighLevel.\n\n## Pro Tips\n\n- Google Consent Mode v2 is now required for EU users and will soon be standard in the US — implement it now\n- Keep consent records (who consented, when, to what) for at least 3 years\n- Use the banner as a trust signal — a clean, professional consent flow says "we take your data seriously"\n- Test your consent flow on mobile — most visitors are on phones`,
        defaultTasks: JSON.stringify([
          "Install Cookiebot or OneTrust consent management platform",
          "Configure Google Consent Mode v2 in GTM",
          "Update privacy policy with all data collection disclosures",
          "Add consent language to all website forms",
          "Define and implement data retention policy in GoHighLevel"
        ])
      },
    ],
    bestPractices: [
      { title: "80% of Ad Value Is in the Headline", source: "Ogilvy", sourceUrl: "https://www.ogilvy.com", content: "David Ogilvy's research showed that 5x more people read the headline than the body copy. Every SMAART ad must lead with a specific benefit.", category: "framework" },
    ]
  },
  {
    name: "Cross-Device Identity",
    slug: "cross-device",
    icon: "Smartphone",
    description: "Link phone, laptop, and TV to a single profile using identity graphs",
    category: "strategy",
    status: "not_started",
    progress: 0,
    order: 2,
    modules: [
      {
        name: "Custom Audiences",
        slug: "custom-audiences",
        icon: "Users",
        description: "Upload CRM lists to Meta + Google Customer Match",
        order: 1,
        guide: `## What Are Custom Audiences?\n\nCustom Audiences let you target your existing contacts — clients, leads, website visitors — across Meta, Google, and LinkedIn. You upload your CRM data (emails, phone numbers) and the platform matches those identities to user profiles, creating a hyper-targeted audience.\n\nFor SMAART, this means showing ads specifically to people who already know you — past quote requests, event attendees, newsletter subscribers, and current clients you want to upsell.\n\n## Why It Matters\n\nCustom Audiences consistently deliver 2-5x better ROAS than interest-based targeting because you are reaching people with proven intent. Key use cases for SMAART:\n- **Reactivation**: Target leads who requested a quote but never converted (60-90 day window)\n- **Upsell**: Show advisory or payroll ads to existing tax-only clients\n- **Exclusion**: Remove current clients from acquisition campaigns to avoid wasting spend\n- **Seasonal**: Target past tax clients in October-November with early-bird tax prep messaging\n\n## Implementation Steps\n\n1. **Meta Custom Audiences**: Go to Meta Business Manager → Audiences → Create Custom Audience → Customer List. Upload CSV with email, phone, first name, last name, city, state, zip. Create separate audiences for: Current Clients, Lost Leads, High-Value Prospects.\n\n2. **Google Customer Match**: Go to Google Ads → Audience Manager → Create Customer List. Upload with same data format. Enable in Search, Shopping, YouTube, and Gmail campaigns.\n\n3. **LinkedIn Matched Audiences**: Campaign Manager → Account Assets → Matched Audiences → Upload company list or contact list. Ideal for targeting business owners and decision-makers.\n\n4. **Refresh Cadence**: Set a calendar reminder to re-upload updated lists every 2-4 weeks. Stale audiences miss new leads and waste budget on converted clients.\n\n## Pro Tips\n\n- Minimum list size: Meta needs 1,000+, Google needs 1,000+, LinkedIn needs 300+\n- Include as many data fields as possible for higher match rates\n- Create "Seed" audiences of your top 100-500 clients for Lookalike creation\n- Always create an exclusion audience of current clients and upload it to every acquisition campaign`,
        defaultTasks: JSON.stringify([
          "Export segmented contact lists from GoHighLevel",
          "Create Meta Custom Audiences (Clients, Leads, High-Value)",
          "Set up Google Customer Match audiences",
          "Upload LinkedIn Matched Audiences for B2B targeting",
          "Create exclusion audience of current clients",
          "Set bi-weekly refresh schedule for all custom audiences"
        ])
      },
      {
        name: "Lookalike Audiences",
        slug: "lookalike",
        icon: "UserPlus",
        description: "Create 1% lookalike from top 500 clients on Meta",
        order: 2,
        guide: `## What Are Lookalike Audiences?\n\nLookalike (or Similar) audiences are algorithmically generated audiences that share characteristics with your best customers. You give Meta or Google a "seed" list of your top clients, and the platform finds millions of similar people to target.\n\nFor SMAART, this means finding business owners across South Florida who look like your most profitable clients — same demographics, behaviors, interests, and online patterns.\n\n## Why It Matters\n\nLookalikes are the bridge between your first-party data and massive scale. A 1% Lookalike on Meta in South Florida gives you roughly 20,000-30,000 highly qualified prospects. The algorithm is remarkably good at finding the right people — Lookalikes typically outperform interest targeting by 50-150% on CPA.\n\nThe quality of your seed list directly determines the quality of the Lookalike. A seed of 500 high-LTV clients will outperform a seed of 5,000 mixed-quality leads.\n\n## Implementation Steps\n\n1. **Build Your Seed List**: Export your top 200-500 clients ranked by lifetime revenue from GoHighLevel. This is your "golden" audience — the people you want more of.\n\n2. **Meta Lookalikes**: Upload seed as Custom Audience → Create Lookalike → Select 1% (highest similarity), 1-3% (balanced), and 3-5% (broader reach). Start campaigns with 1%, scale to 3%.\n\n3. **Google Similar Audiences**: Upload seed to Customer Match → Google auto-generates Similar Audiences. Use in Display, YouTube, and Discovery campaigns.\n\n4. **Test and Stack**: Run 1%, 2%, and 3% Lookalikes in separate ad sets. Measure CPA at each level. Often 2% outperforms 1% because it gives the algorithm more room to optimize.\n\n## Pro Tips\n\n- Seed quality > seed quantity. 200 perfect clients beats 2,000 mixed contacts.\n- Create industry-specific Lookalikes: seed with restaurant clients to find more restaurant owners\n- Refresh seed lists quarterly as your client base evolves\n- Layer Lookalikes with geographic targeting (Miami-Dade, Broward, Palm Beach) for precision`,
        defaultTasks: JSON.stringify([
          "Export top 500 clients ranked by lifetime revenue",
          "Create 1%, 2%, and 3% Meta Lookalike audiences",
          "Build industry-specific seed lists (restaurants, medical, construction)",
          "Set up Google Similar Audiences from Customer Match",
          "A/B test Lookalike percentages in separate ad sets"
        ])
      },
      {
        name: "Retargeting Setup",
        slug: "retargeting",
        icon: "RefreshCw",
        description: "Website visitor retargeting across Meta, Google, AdRoll",
        order: 3,
        guide: `## What Is Retargeting?\n\nRetargeting (remarketing) shows ads to people who have already visited your website or engaged with your content but did not convert. When someone visits smaartcompany.com, browses the services page, but leaves without filling out a form — retargeting follows them across Facebook, Instagram, Google, and the open web with relevant ads.\n\nFor SMAART, where the average prospect visits 3-5 times before converting, retargeting is the single highest-ROI tactic in your entire media plan.\n\n## Why It Matters\n\nRetargeting typically delivers 3-10x better ROAS than prospecting because these people already know you:\n- 97% of first-time website visitors leave without converting\n- Retargeted visitors are 70% more likely to convert than cold prospects\n- It keeps SMAART top-of-mind during the long B2B decision cycle\n- Cost per conversion is typically 50-75% lower than cold targeting\n\n## Implementation Steps\n\n1. **Define Retargeting Windows**: Create audiences by recency — 7 days (hot), 14 days (warm), 30 days (standard), 90 days (broad). Different windows get different messaging and bids.\n\n2. **Meta Retargeting**: In Meta Business Manager → Audiences → Website Custom Audiences. Create: All Visitors (30d), Service Page Visitors (14d), Blog Readers (60d), Form Abandoners (7d).\n\n3. **Google Remarketing**: In Google Ads → Audience Manager → Website Visitors. Create matching segments. Deploy across Search (RLSA), Display, YouTube, and Gmail.\n\n4. **Sequential Messaging**: Map the retargeting journey — Visit 1 shows a value-driven ad ("Protect your business"), Visit 2 shows social proof ("500+ South Florida businesses trust SMAART"), Visit 3 shows urgency ("Free consultation this week only").\n\n5. **Frequency Capping**: Set caps at 3-5 impressions per day per user. More than that causes ad fatigue and negative brand perception.\n\n## Pro Tips\n\n- Exclude converters immediately — do not waste budget showing ads to people who already filled out a form\n- Use dynamic retargeting to show the specific service page someone visited\n- Retargeting on Google Search (RLSA) lets you bid higher on branded and competitor keywords for past visitors\n- Set up burn pixels on thank-you pages to stop retargeting the moment someone converts`,
        defaultTasks: JSON.stringify([
          "Create Meta Website Custom Audiences (7d, 14d, 30d, 90d)",
          "Set up Google Remarketing lists with matching windows",
          "Build sequential messaging creative (awareness → proof → urgency)",
          "Configure frequency capping at 3-5 impressions/day",
          "Add burn pixels on thank-you pages to exclude converters",
          "Set up RLSA campaigns in Google Search"
        ])
      },
    ],
    bestPractices: []
  },
  {
    name: "Geofencing & Location",
    slug: "geofencing",
    icon: "MapPin",
    description: "Trigger ads when prospects enter competitor zones and business districts",
    category: "strategy",
    status: "not_started",
    progress: 0,
    order: 3,
    modules: [
      {
        name: "Zone Configuration",
        slug: "zones",
        icon: "Map",
        description: "Define geofence zones: competitor offices, chambers of commerce, co-working spaces",
        order: 1,
        guide: `## What Is Zone Configuration?\n\nGeofencing creates virtual boundaries around physical locations. When a mobile device enters one of these zones, it becomes eligible for targeted advertising. Zone configuration is the process of defining exactly which locations to fence and why.\n\nFor SMAART, this means drawing geofences around competitor accounting and insurance offices, chambers of commerce, SBA offices, co-working spaces, and business districts across Miami-Dade, Broward, and Palm Beach counties.\n\n## Why It Matters\n\nGeofencing reaches people based on real-world behavior, which is one of the strongest intent signals available:\n- Someone visiting a competitor's office is actively shopping for services\n- Someone at a chamber of commerce event is a business owner networking\n- Someone at a co-working space is likely a small business owner or entrepreneur\n- These signals are impossible to replicate with online-only targeting\n\n## Implementation Steps\n\n1. **Competitor Mapping**: List the top 20 competing accounting firms and insurance agencies in South Florida. Get their addresses. These are your primary geofence targets.\n\n2. **Business Hubs**: Identify high-traffic business locations — Brickell Financial District, Las Olas Blvd, Downtown West Palm Beach, Aventura business parks, Coral Gables Mile, Doral business corridor.\n\n3. **Event Venues**: Geofence venues that host business events — Miami Beach Convention Center, Broward Convention Center, Palm Beach County Convention Center, major hotels hosting business conferences.\n\n4. **Zone Sizing**: Set radius at 100-500 meters for specific buildings, 1-2km for business districts. Too wide = wasted impressions. Too narrow = insufficient volume.\n\n5. **Dwell Time Filters**: Configure minimum dwell time of 5-10 minutes to filter out people just driving past.\n\n## Pro Tips\n\n- Do not geofence hospitals, schools, or government buildings — it violates most platform policies\n- Layer geofencing with demographic targeting (age 25-65, business owners) to reduce waste\n- Track "conquest" visits — people who saw your geofenced ad and then visited smaartcompany.com\n- Start with 10-15 high-confidence locations, measure, then expand`,
        defaultTasks: JSON.stringify([
          "Map top 20 competitor offices in Miami-Dade, Broward, Palm Beach",
          "Identify 10 key business district zones across South Florida",
          "List upcoming business events and conference venues to geofence",
          "Define radius and dwell-time settings for each zone type",
          "Create master spreadsheet of all geofence locations with GPS coordinates"
        ])
      },
      {
        name: "Platform Setup",
        slug: "geo-platform",
        icon: "Settings",
        description: "Configure Simpli.fi or GroundTruth for precision geotargeting",
        order: 2,
        guide: `## What Is Geofencing Platform Setup?\n\nGeofencing requires specialized platforms that can serve ads based on real-time location data. While Meta and Google offer radius targeting, dedicated geofencing platforms like Simpli.fi and GroundTruth offer precision down to specific building footprints and provide foot traffic attribution.\n\nFor SMAART, the platform choice depends on budget and scale. Simpli.fi is the recommended starting point for its balance of precision and cost.\n\n## Why It Matters\n\nDedicated geofencing platforms offer capabilities that standard ad platforms cannot:\n- Building-level precision (not just radius targeting)\n- Real foot traffic attribution — did someone who saw your ad actually visit your office?\n- Historical location data — target people who visited a location in the past 30 days\n- Cross-device matching — reach someone on desktop after their phone was at a competitor's office\n\n## Implementation Steps\n\n1. **Platform Selection**: Start with Simpli.fi for its self-serve capabilities and $5,000/month minimum. If budget allows, consider GroundTruth for their Blueprints technology (building-level precision).\n\n2. **Account Setup**: Create account, connect payment, set up tracking pixel on smaartcompany.com for conversion attribution.\n\n3. **Upload Zones**: Import your geofence coordinates from the Zone Configuration module. Set activation times (business hours M-F for offices, event times for venues).\n\n4. **Audience Creation**: Build audiences — Active Visitors (seen in zone last 7 days), Historical (last 30 days), Frequent (3+ visits in 30 days).\n\n5. **Attribution Setup**: Install the platform's conversion pixel on your website. Configure visit attribution window (typically 30 days post-ad exposure).\n\n## Pro Tips\n\n- Start with a 60-day test period and $3,000-5,000/month budget to gather meaningful data\n- Use "addressable geofencing" (household-level) for high-value prospect lists if the platform supports it\n- Combine geofencing with retargeting — show follow-up ads on Meta/Google to people who were in your geofence\n- Request monthly foot traffic reports to prove ROI to the team`,
        defaultTasks: JSON.stringify([
          "Evaluate Simpli.fi vs GroundTruth for SMAART's needs and budget",
          "Set up account and payment on selected platform",
          "Install geofencing platform's conversion pixel on smaartcompany.com",
          "Upload all geofence zones with activation schedules",
          "Configure visit attribution and reporting dashboards"
        ])
      },
      {
        name: "Creative for Location",
        slug: "geo-creative",
        icon: "Image",
        description: "Proximity-aware ad variants ('Looking for a better accountant nearby?')",
        order: 3,
        guide: `## What Is Location-Based Creative?\n\nLocation-based creative means designing ads that acknowledge the prospect's physical context. When someone is near a competitor or in a business district, the ad speaks directly to that situation — "Looking for better business insurance? We're 5 minutes away" or "Tired of your accountant? SMAART is right around the corner."\n\nFor SMAART, this contextual relevance dramatically increases click-through rates because the ad feels personal and timely rather than generic.\n\n## Why It Matters\n\nLocation-aware ads achieve 2-3x higher engagement than generic creative because:\n- They feel relevant and timely — the prospect is literally in the right place\n- They create urgency — "nearby" and "close by" drive immediate action\n- They position SMAART as a local, accessible option\n- They capitalize on dissatisfaction signals (visiting competitors = shopping around)\n\n## Implementation Steps\n\n1. **Competitor Conquest Ads**: Create ads specifically for people near competitor offices — "Not getting the attention you deserve from your accountant? SMAART puts your business first. Free consultation today."\n\n2. **Business District Ads**: For people in Brickell, Las Olas, Downtown WPB — "South Florida business owners trust SMAART for year-round financial guidance. Book your free review."\n\n3. **Event Proximity Ads**: For people at business events — "At [Event Name]? Meet the SMAART team. Schedule a 15-minute business protection review at our booth."\n\n4. **Format Variations**: Create 300x250 (medium rectangle), 320x50 (mobile banner), 728x90 (leaderboard), and 160x600 (skyscraper) for each message. Mobile-first — 80%+ of geofenced impressions are on phones.\n\n5. **Landing Pages**: Each geofenced creative should link to a location-specific landing page — not the homepage. "Looking for a better accountant in Brickell?" → dedicated Brickell landing page.\n\n## Pro Tips\n\n- Never mention the competitor by name in your ads — it violates most platform policies and looks unprofessional\n- Use strong CTAs: "Call Now," "Get Directions," "Book Free Review" — take advantage of mobile proximity\n- Rotate creative every 2-3 weeks to prevent ad fatigue\n- Include SMAART's address and phone number in the ad for immediate action`,
        defaultTasks: JSON.stringify([
          "Design competitor conquest ad set (4 sizes, 3 messages)",
          "Create business district awareness ads for key zones",
          "Build event proximity ad templates (customizable per event)",
          "Design mobile-optimized formats (320x50 and 300x250 priority)",
          "Create location-specific landing pages for top 5 zones"
        ])
      },
    ],
    bestPractices: []
  },
  {
    name: "Programmatic Display & Native",
    slug: "programmatic",
    icon: "Layout",
    description: "Real-time bidding across the open web — display, native, and video placements",
    category: "strategy",
    status: "not_started",
    progress: 0,
    order: 4,
    modules: [
      {
        name: "DSP Selection",
        slug: "dsp",
        icon: "Monitor",
        description: "Choose DSP: AdRoll (starter) → Trade Desk (scale)",
        order: 1,
        guide: `## What Is a DSP?\n\nA Demand-Side Platform (DSP) is the technology that lets you buy display, video, and native ads programmatically across millions of websites in real-time. Instead of negotiating with individual publishers, a DSP accesses ad exchanges where billions of impressions are auctioned every second.\n\nFor SMAART, a DSP extends your reach beyond Meta and Google into premium publisher sites that business owners read — Forbes, Bloomberg, local business journals, industry publications.\n\n## Why It Matters\n\nProgrammatic display fills the awareness gap that search and social cannot reach:\n- 85% of internet time is spent outside of search engines and social feeds\n- Display ads build familiarity before someone ever searches for "accountant near me"\n- Native ads blend into publisher content and feel less intrusive\n- Retargeting across the open web keeps SMAART visible everywhere\n\n## Implementation Steps\n\n1. **Starter: AdRoll** — Best for companies spending $2,000-10,000/month on programmatic. Self-serve, integrates with your website easily, strong retargeting capabilities. Sign up at adroll.com, install pixel, upload creative.\n\n2. **Scale: The Trade Desk** — When budget exceeds $10,000/month, move to The Trade Desk for premium inventory access, better targeting, and CTV integration. Requires a managed service partner or in-house expertise.\n\n3. **Alternative: StackAdapt** — Good middle ground with native advertising strength and user-friendly interface. Worth evaluating if native content is a priority.\n\n4. **Evaluation Criteria**: Compare on — minimum spend, self-serve vs managed, inventory quality, targeting capabilities, reporting depth, integration with your other tools.\n\n## Pro Tips\n\n- Start with AdRoll for 90 days to learn programmatic basics, then evaluate upgrading\n- Demand transparency on where your ads appear — request site-level reporting\n- Negotiate managed service fees (typically 10-15% of spend) if using a partner\n- Ensure your DSP supports offline conversion uploads so you can optimize toward actual clients, not just clicks`,
        defaultTasks: JSON.stringify([
          "Evaluate AdRoll, Trade Desk, and StackAdapt for SMAART's needs",
          "Set up AdRoll account and install tracking pixel",
          "Upload initial display ad creative (4 standard sizes)",
          "Configure conversion tracking for form submissions",
          "Request demo from The Trade Desk for future scaling"
        ])
      },
      {
        name: "Audience Segments",
        slug: "prog-audiences",
        icon: "Target",
        description: "Define behavioral + contextual targeting segments",
        order: 2,
        guide: `## What Are Programmatic Audience Segments?\n\nProgrammatic audience segments are pre-built groups of users categorized by behavior, demographics, interests, and intent. Data providers like Oracle/BlueKai, Lotame, and LiveRamp sell access to these segments through your DSP, letting you target "Small Business Owners in South Florida" or "People researching business insurance" across the open web.\n\n## Why It Matters\n\nWithout audience segments, programmatic display is just spraying ads at random websites. With segments, every impression goes to someone who fits your ideal client profile. For SMAART, this means targeting:\n- Business owners with 5-200 employees in Miami-Dade, Broward, Palm Beach\n- People actively researching insurance, accounting, or financial services\n- Professionals with specific job titles (CEO, CFO, Controller, Office Manager)\n- Users who have visited competitor websites (competitive conquest)\n\n## Implementation Steps\n\n1. **Define Core Segments**: Create 3-5 primary audience segments based on SMAART's ideal client profiles:\n   - Small Business Owners (1-50 employees, South Florida)\n   - Mid-Market Decision Makers (50-200 employees, C-suite/Finance)\n   - Insurance Shoppers (in-market for business insurance)\n   - Tax Services Seekers (in-market for tax preparation/planning)\n\n2. **Layer Data Sources**: Combine first-party (your CRM uploads), second-party (publisher data), and third-party (data providers) for maximum precision.\n\n3. **Behavioral Targeting**: Target users who have visited financial services websites, read business content, or engaged with competitor ads.\n\n4. **Contextual Segments**: Target based on page content — ads appear on pages about small business finance, tax planning, insurance, and entrepreneurship.\n\n## Pro Tips\n\n- Start with broader segments and narrow based on performance data\n- Third-party data adds $1-3 CPM to your costs — factor this into budget planning\n- Test contextual vs behavioral targeting separately to see which performs better for SMAART\n- Refresh audience segments quarterly as data providers update their taxonomy`,
        defaultTasks: JSON.stringify([
          "Define 5 core audience segments based on SMAART ICP",
          "Research third-party data providers available in your DSP",
          "Build behavioral targeting segments for insurance/finance intent",
          "Create contextual targeting keyword lists for relevant content",
          "Set up A/B tests comparing behavioral vs contextual targeting"
        ])
      },
      {
        name: "Placement Strategy",
        slug: "placements",
        icon: "LayoutGrid",
        description: "Site lists, category targeting, brand safety settings",
        order: 3,
        guide: `## What Is Placement Strategy?\n\nPlacement strategy determines where your programmatic ads appear — which websites, apps, and content categories. It is the difference between your SMAART ad appearing on Forbes.com vs a low-quality content farm. Smart placement strategy maximizes brand perception while minimizing wasted impressions.\n\n## Why It Matters\n\nWhere your ad appears affects how people perceive SMAART:\n- An ad on South Florida Business Journal = credibility and trust\n- An ad on a random pop-up site = brand damage and wasted money\n- Brand safety incidents (ads appearing next to inappropriate content) can destroy trust instantly\n\nFor a professional services firm like SMAART, placement quality is non-negotiable. Business owners judge you by the company you keep.\n\n## Implementation Steps\n\n1. **Build a Whitelist**: Create a curated list of 50-100 premium sites where SMAART should appear — South Florida Business Journal, Sun Sentinel, Miami Herald, Forbes, Bloomberg, Inc., Entrepreneur, local business blogs.\n\n2. **Category Targeting**: Select relevant IAB categories — Business/Finance, Small Business, Insurance, Tax/Accounting, Real Estate, Healthcare (for medical practice clients).\n\n3. **Brand Safety Settings**: Block categories — Adult, Gambling, Violence, Controversial Politics, Fake News. Use brand safety verification tools (IAS, DoubleVerify) if available in your DSP.\n\n4. **Blacklist Maintenance**: Review placement reports weekly for the first month. Add low-quality sites and apps to your blacklist. Expect to blacklist 20-50 sites in the first 30 days.\n\n5. **App vs Web Split**: Start with 80% web / 20% app. In-app inventory is cheaper but often lower quality for B2B targeting. Adjust based on performance.\n\n## Pro Tips\n\n- Premium placements cost 2-5x more per impression but convert 3-10x better — the math works out\n- Always request site-level reporting — if your DSP cannot tell you where ads appeared, switch DSPs\n- Consider Private Marketplace (PMP) deals with local publishers for guaranteed premium inventory\n- Review the "Long Tail" — the bottom 20% of sites by volume often accounts for 80% of wasted spend`,
        defaultTasks: JSON.stringify([
          "Build curated whitelist of 50+ premium publisher sites",
          "Configure IAB category targeting for business/finance content",
          "Set up brand safety blocklist and verification tools",
          "Review and blacklist low-quality placements weekly for 30 days",
          "Explore PMP deals with South Florida Business Journal and local publishers"
        ])
      },
      {
        name: "Bid Optimization",
        slug: "bidding",
        icon: "TrendingUp",
        description: "CPA bidding strategy, dayparting, frequency capping",
        order: 4,
        guide: `## What Is Bid Optimization?\n\nBid optimization is the process of tuning how much you pay for each programmatic impression to maximize conversions while minimizing cost. This includes setting bid strategies (CPA, CPC, viewable CPM), dayparting (showing ads only during business hours), and frequency capping (limiting how many times one person sees your ad).\n\n## Why It Matters\n\nProgrammatic advertising without bid optimization is like setting your thermostat and never adjusting it. Proper optimization can reduce your cost per lead by 30-50%:\n- Dayparting ensures you are not paying for impressions at 3 AM when no one converts\n- Frequency capping prevents ad fatigue and wasted spend on oversaturated users\n- CPA bidding tells the algorithm to find people most likely to convert, not just most likely to see your ad\n\n## Implementation Steps\n\n1. **Start with Target CPA**: Set your target CPA at 1.5x your break-even CPA. For SMAART, if a qualified lead is worth $200, start with a $50-75 target CPA and let the algorithm optimize.\n\n2. **Dayparting Setup**: Run ads Monday-Friday 7AM-8PM EST initially. Business owners research during work hours. After 30 days, check hourly conversion data and narrow to peak hours.\n\n3. **Frequency Capping**: Set caps at 3 impressions per user per day, 15 per week. For retargeting, you can go higher (5/day) because the audience is warmer.\n\n4. **Bid Adjustments**: Increase bids 20-30% for high-value segments (C-suite, business owners). Decrease bids for broader awareness audiences.\n\n5. **Budget Pacing**: Set even pacing (spread budget evenly across the day/month) to start. Switch to front-loaded if you see better performance early in the week.\n\n## Pro Tips\n\n- Let campaigns run for 2 weeks minimum before making bid changes — the algorithm needs data\n- Monitor viewability rates — if below 50%, you are paying for ads no one sees\n- Use bid multipliers for mobile vs desktop based on which device converts better\n- Review frequency reports weekly — if average frequency exceeds 20/month, your audience is too narrow or your cap is too high`,
        defaultTasks: JSON.stringify([
          "Set initial target CPA based on SMAART's lead value",
          "Configure dayparting for business hours (M-F 7AM-8PM EST)",
          "Set frequency caps at 3/day and 15/week",
          "Create bid adjustment rules for high-value audience segments",
          "Set up weekly optimization review calendar"
        ])
      },
    ],
    bestPractices: []
  },
  {
    name: "Connected TV & Audio",
    slug: "ctv-audio",
    icon: "Tv",
    description: "Streaming TV and Spotify ads — build awareness in living rooms",
    category: "strategy",
    status: "not_started",
    progress: 0,
    order: 5,
    modules: [
      {
        name: "CTV Production",
        slug: "ctv-production",
        icon: "Film",
        description: "30-second commercial script, Adwave AI production, or professional shoot",
        order: 1,
        guide: `## What Is CTV Production?\n\nCTV (Connected TV) production means creating video commercials designed for streaming platforms — Roku, Hulu, Peacock, Tubi, and other OTT services. Unlike traditional TV, CTV ads can be precision-targeted to specific demographics and geographies.\n\nFor SMAART, this is your chance to have a TV-quality commercial reaching South Florida business owners while they stream their favorite shows — at a fraction of traditional TV costs.\n\n## Why It Matters\n\n73% of US households now use Connected TV, and CTV ad spend is growing 25% year over year. For SMAART:\n- CTV builds brand authority — "if they're on TV, they must be legit"\n- Unskippable 15-30 second formats guarantee full message delivery\n- Precision targeting means your ad reaches business owners, not random viewers\n- CTV complements your digital ads — brand awareness from TV increases search and social conversion rates by 20-30%\n\n## Implementation Steps\n\n1. **Script Development**: Write a 30-second script following the PAS framework — Problem ("Tax season stress? Insurance confusion?"), Agitate ("Most firms disappear after April"), Solution ("SMAART provides year-round support for South Florida businesses"). Include clear CTA: "Visit smaartcompany.com or call (305) XXX-XXXX."\n\n2. **Production Options**:\n   - **Budget ($500-2,000)**: Use Adwave AI or similar AI video tools with stock footage, motion graphics, voiceover\n   - **Mid-Range ($3,000-8,000)**: Hire a local South Florida production company for a 1-day shoot with real SMAART team members\n   - **Premium ($10,000+)**: Full professional production with client testimonials, office footage, and cinematic quality\n\n3. **Format Requirements**: 1920x1080 (HD minimum), MP4/MOV, 15-second and 30-second versions, max 1GB file size, professional audio mix.\n\n4. **Create Multiple Versions**: Film enough for 3-4 different cuts — a brand awareness version, a tax season version, an insurance-focused version, and a testimonial version.\n\n## Pro Tips\n\n- Always produce both 15-second and 30-second versions — some placements only accept :15\n- Lead with the hook in the first 3 seconds — even on non-skippable formats, attention matters\n- Include burned-in captions — many people watch CTV with reduced volume\n- Show real people (SMAART team, real clients) — authenticity beats polish on streaming platforms`,
        defaultTasks: JSON.stringify([
          "Write 30-second PAS framework script for SMAART CTV ad",
          "Get quotes from 3 South Florida production companies",
          "Evaluate AI video tools (Adwave, Synthesia) for budget option",
          "Produce 15-second and 30-second versions",
          "Create seasonal variants (tax season, insurance, brand awareness)"
        ])
      },
      {
        name: "CTV Distribution",
        slug: "ctv-distribution",
        icon: "Play",
        description: "Roku, Hulu, connected TV targeting in South Florida",
        order: 2,
        guide: `## What Is CTV Distribution?\n\nCTV distribution is the process of placing your video commercial on streaming platforms — selecting which services (Roku, Hulu, Peacock, Tubi, Pluto TV), which audiences, and which geographic areas. You can buy CTV inventory through your programmatic DSP or directly from platforms.\n\nFor SMAART, distribution strategy means reaching South Florida business owners on the streaming services they actually use, during the shows they actually watch.\n\n## Why It Matters\n\nCTV distribution decisions determine whether your commercial reaches 10,000 relevant business owners or 100,000 irrelevant viewers:\n- Platform selection matters — Hulu skews upscale, Tubi/Pluto skew budget-conscious\n- Geographic precision means no wasted impressions outside South Florida\n- Audience targeting layers (income, business owner, education) ensure you reach decision-makers\n- Proper distribution turns a $5,000/month CTV budget into meaningful brand lift\n\n## Implementation Steps\n\n1. **Platform Selection**: Start with Roku (largest CTV platform, 80M+ accounts) and Hulu (premium, higher-income audience). Add Peacock and Tubi for incremental reach.\n\n2. **Buying Method**: Use your programmatic DSP (The Trade Desk, Simpli.fi) for cross-platform buying, or use Roku's OneView platform for Roku-specific inventory. DSP buying gives more targeting flexibility.\n\n3. **Targeting Configuration**:\n   - Geography: Miami-Dade, Broward, Palm Beach counties (zip code level)\n   - Demographics: Adults 25-65, HHI $75k+\n   - Interests: Business owners, finance, entrepreneurship\n   - Daypart: Prime time (7PM-11PM) and weekend mornings\n\n4. **Budget Allocation**: Allocate 60% to Roku/Hulu (premium), 40% to Tubi/Pluto (reach). Plan for $15-25 CPM for premium inventory, $8-12 CPM for broad reach.\n\n5. **Measurement**: Set up post-view conversion tracking — did someone who saw the CTV ad later visit smaartcompany.com? Most DSPs offer this attribution.\n\n## Pro Tips\n\n- CTV is a brand play — do not expect direct-response conversions. Measure success by website traffic lift and branded search volume increases.\n- Run CTV for at least 90 days — brand awareness takes time to build\n- Cross-reference CTV exposure with your retargeting pools — show follow-up ads to CTV viewers on Meta/Google\n- Request completion rate reports — CTV should show 95%+ completion (non-skippable format advantage)`,
        defaultTasks: JSON.stringify([
          "Set up CTV buying through programmatic DSP or Roku OneView",
          "Configure South Florida geographic targeting (zip code level)",
          "Set demographic and interest-based audience layers",
          "Allocate budget across premium and reach platforms",
          "Configure post-view conversion tracking and attribution"
        ])
      },
      {
        name: "Audio Ads",
        slug: "audio",
        icon: "Volume2",
        description: "15-second Spotify ad, South Florida geo-targeting",
        order: 3,
        guide: `## What Are Streaming Audio Ads?\n\nAudio ads play between songs on streaming platforms like Spotify, Pandora, and iHeart Radio. For SMAART, a 15-30 second audio ad reaches South Florida business owners during their commute, workout, or workday — moments when visual ads cannot reach them.\n\n## Why It Matters\n\nAudio advertising fills a gap that display, social, and video cannot:\n- 62% of Spotify listeners are in "lean-back" mode — not looking at screens\n- Audio ads achieve 24% higher recall than display ads\n- There is virtually zero ad fraud in audio (unlike display)\n- Spotify's self-serve Ad Studio lets you launch campaigns with as little as $250\n- Audio completes your surround-sound marketing strategy — SMAART is everywhere\n\n## Implementation Steps\n\n1. **Script Writing**: Write a 15-second audio script (about 40 words). Follow this structure: Hook (2 sec) → Problem (4 sec) → Solution (5 sec) → CTA (4 sec). Example: "Running a business in South Florida is hard enough. Don't let tax headaches slow you down. SMAART Company handles your numbers so you can focus on growth. Visit smaartcompany.com for a free consultation."\n\n2. **Production**: Use Spotify Ad Studio's free voiceover tool, or hire a professional voice actor from Fiverr/Voices.com ($100-300). Choose a warm, authoritative voice that matches SMAART's brand. Add subtle background music (upbeat, professional).\n\n3. **Targeting Setup**: Use Spotify Ad Studio → Target by location (South Florida metros), age (25-55), interests (business, finance, entrepreneurship), and playlist context (focus, productivity, commute).\n\n4. **Companion Banner**: Upload a 640x640 companion display ad that appears on the Spotify screen while the audio ad plays. Include SMAART logo, tagline, and "Learn More" CTA.\n\n5. **Budget and Schedule**: Start with $1,000/month on Spotify. Run during weekday mornings (6-10 AM commute) and afternoons (12-6 PM work hours). Measure by ad recall lift and website traffic correlation.\n\n## Pro Tips\n\n- Keep it to ONE message per ad — audio listeners cannot rewind or re-read\n- Mention "SMAART" at least twice in 15 seconds so the brand name sticks\n- Test different voice talent — male vs female, energetic vs calm\n- Use podcast ads as an extension — sponsor local South Florida business podcasts for even deeper trust`,
        defaultTasks: JSON.stringify([
          "Write 15-second and 30-second audio ad scripts",
          "Hire voice talent or use Spotify Ad Studio voiceover tool",
          "Produce final audio files with background music",
          "Design 640x640 companion banner for Spotify",
          "Set up Spotify Ad Studio campaign with South Florida targeting"
        ])
      },
    ],
    bestPractices: []
  },
  {
    name: "Meta Ads",
    slug: "meta-ads",
    icon: "Facebook",
    description: "Facebook & Instagram deep targeting — the workhorse of lead generation",
    category: "strategy",
    status: "not_started",
    progress: 0,
    order: 6,
    modules: [
      {
        name: "Campaign Structure",
        slug: "meta-campaigns",
        icon: "FolderOpen",
        description: "Campaign → Ad Set → Ad hierarchy, naming conventions",
        order: 1,
        guide: `## What Is Campaign Structure?\n\nMeta's advertising system uses a three-level hierarchy: Campaign (objective) → Ad Set (targeting, budget, schedule) → Ad (creative). Proper structure keeps your account organized, makes reporting readable, and prevents audience overlap that wastes budget.\n\nFor SMAART, clear campaign structure is the difference between an account that scales profitably and one that becomes an unmanageable mess within 30 days.\n\n## Why It Matters\n\nA well-structured Meta account:\n- Prevents audience overlap (the same person seeing ads from multiple ad sets)\n- Makes it easy to see which targeting and creative combinations perform best\n- Allows budget to flow to winning combinations automatically (with CBO)\n- Keeps naming consistent so anyone on the team can read reports\n- Enables clean A/B testing without confounding variables\n\n## Implementation Steps\n\n1. **Campaign Architecture**: Create 3 campaign types:\n   - **Prospecting (Top of Funnel)**: Objective = Leads or Traffic. Target Lookalikes, interest-based, and broad audiences.\n   - **Retargeting (Middle of Funnel)**: Objective = Leads. Target website visitors, video viewers, engagement audiences.\n   - **Retention (Bottom of Funnel)**: Objective = Conversions. Target past clients for upsell/cross-sell.\n\n2. **Naming Convention**: Use this format → [Objective]_[Audience]_[Placement]_[Date] — Example: "LEAD_1%LAL-TopClients_Feed+Stories_2026-03"\n\n3. **Ad Set Structure**: Within each campaign, create ad sets by audience type. Do not mix audiences in a single ad set. Example Prospecting Campaign:\n   - Ad Set 1: 1% Lookalike of Top Clients\n   - Ad Set 2: Interest — Small Business Owners in South Florida\n   - Ad Set 3: Broad (let Meta's algorithm find the audience)\n\n4. **Ad Structure**: Run 3-5 ad variants per ad set. Mix formats: 1 static image, 1 video, 1 carousel, 1 UGC-style. Kill underperformers after $50-100 spend with no conversions.\n\n5. **Budget Strategy**: Start with Campaign Budget Optimization (CBO) at $50-100/day per campaign. Let Meta distribute budget to the best-performing ad sets automatically.\n\n## Pro Tips\n\n- Never run more than 3-4 ad sets per campaign — too many fragments the budget\n- Use the "Campaign Budget Optimization" toggle at the campaign level for automated budget allocation\n- Check audience overlap tool monthly: Audiences → Audience Overlap. Merge overlapping audiences.\n- Create a "Testing" campaign specifically for new creative — once a winner emerges, move it to the main campaign`,
        defaultTasks: JSON.stringify([
          "Create Prospecting campaign with Lookalike and Interest ad sets",
          "Create Retargeting campaign for website visitors and engagers",
          "Set up naming convention document for the team",
          "Configure Campaign Budget Optimization (CBO) on all campaigns",
          "Build audience overlap check into monthly review process"
        ])
      },
      {
        name: "Audience Builder",
        slug: "meta-audiences",
        icon: "Users",
        description: "Custom, Lookalike, Interest, and Behavioral audiences",
        order: 2,
        guide: `## What Is the Meta Audience Builder?\n\nMeta's Audience Builder lets you create targeting layers from multiple data sources — your CRM lists (Custom Audiences), algorithmic expansion (Lookalikes), platform data (Interests, Behaviors, Demographics), and engagement data (video viewers, page engagers). Mastering the Audience Builder is what separates a $30 CPL from a $100 CPL.\n\n## Why It Matters\n\nFor SMAART, Meta's audience targeting is your most powerful weapon for finding South Florida business owners at scale:\n- 3.05 billion monthly active users on Meta platforms\n- Granular targeting by job title, industry, income, behaviors\n- The ability to stack multiple signals (business owner + South Florida + interested in insurance)\n- Lookalike modeling that finds thousands of prospects who mirror your best clients\n\n## Implementation Steps\n\n1. **Custom Audiences (Priority 1)**:\n   - Upload CRM: Current Clients, Lost Leads, High-Value Prospects\n   - Website: All visitors (30d), Service page visitors (14d), Form abandoners (7d)\n   - Engagement: Video viewers (75%+), IG engagers (90d), FB page engagers (90d)\n\n2. **Lookalike Audiences (Priority 2)**:\n   - 1% LAL from Top 500 Clients (by revenue)\n   - 1% LAL from All Converters (form submissions)\n   - 2% LAL from Website Visitors\n   - Stack with South Florida geography for precision\n\n3. **Interest & Behavior Audiences (Priority 3)**:\n   - Interests: Small business, Entrepreneurship, Business insurance, Tax preparation, Accounting software\n   - Behaviors: Small business owners, Business page admins\n   - Demographics: Age 28-62, Income top 25%\n   - Narrow further: AND "likely to engage with financial services"\n\n4. **Exclusion Audiences (Critical)**:\n   - Exclude current clients from all prospecting campaigns\n   - Exclude recent converters (last 30 days) from lead campaigns\n   - Exclude employees and team members\n\n## Pro Tips\n\n- Advantage+ Audience (formerly broad targeting) now outperforms detailed targeting in many cases — test it\n- Refresh Custom Audiences every 2 weeks for accuracy\n- Create separate Lookalikes for each service line (insurance clients → insurance LAL, tax clients → tax LAL)\n- Use "AND" narrowing instead of "OR" stacking for interest targeting — it is more precise but smaller`,
        defaultTasks: JSON.stringify([
          "Build all Custom Audiences (CRM, Website, Engagement)",
          "Create Lookalike audiences from top client segments",
          "Configure Interest and Behavior targeting for SMAART's ICP",
          "Set up exclusion audiences (clients, converters, employees)",
          "Test Advantage+ Audience against detailed targeting",
          "Document all audiences in a master audience map"
        ])
      },
      {
        name: "Ad Creative",
        slug: "meta-creative",
        icon: "Paintbrush",
        description: "4:5 static, Reels, Stories — 3x3 testing matrix",
        order: 3,
        guide: `## What Is Meta Ad Creative?\n\nAd creative is the actual content users see — images, videos, carousels, and copy. On Meta platforms, creative quality determines 70-80% of ad performance. The best targeting in the world cannot save bad creative, and great creative can succeed even with broad targeting.\n\nFor SMAART, this means investing heavily in producing scroll-stopping creative that speaks to the pain points of South Florida business owners.\n\n## Why It Matters\n\nMeta's own research confirms that creative is the #1 lever for ad performance:\n- 70-80% of results variance comes from creative, not targeting or budget\n- Users make a "scroll or stop" decision in under 0.4 seconds\n- Average users see 6,000-10,000 ads per day — yours must earn attention\n- Creative fatigue sets in after 500-1,000 impressions per user — you need constant fresh creative\n\n## Implementation Steps\n\n1. **Format Requirements**:\n   - Static Images: 1080x1350 (4:5 vertical) for Feed, 1080x1080 for marketplace\n   - Video: 9:16 for Reels/Stories, 4:5 for Feed video. Under 15 seconds for Reels, under 30 for Feed.\n   - Carousel: 1080x1080 per card, 3-5 cards telling a sequential story\n\n2. **3x3 Testing Matrix**: For every campaign launch, create:\n   - 3 Headlines: Benefit-driven, Question-based, Social proof\n   - 3 Visuals: Team photo/UGC style, Bold text overlay, Client result/testimonial\n   - = 9 ad combinations. Let Meta optimize delivery to the best performers.\n\n3. **Copy Frameworks**:\n   - **PAS**: Problem → Agitate → Solution. "Drowning in tax paperwork? Every hour you spend on books is an hour away from growing your business. SMAART handles it all — tax, insurance, advisory — so you focus on what matters."\n   - **Social Proof**: "Join 500+ South Florida businesses that trust SMAART for year-round financial guidance."\n   - **Direct Offer**: "Free 15-minute Business Protection Review. No obligation. Book now."\n\n4. **Creative Production Cadence**: Launch 3-5 new creative variants every 2 weeks. Kill ads with frequency above 3.0 and below-average CTR.\n\n## Pro Tips\n\n- UGC-style content (filmed on phone, natural lighting, casual tone) outperforms studio content by 2-3x on Meta\n- Bold burned-in captions are mandatory — 65% of users watch video without sound\n- The first 3 seconds of video determine everything — lead with the hook, not the logo\n- Use the Meta Ad Library (facebook.com/ads/library) to research competitor creative for inspiration`,
        defaultTasks: JSON.stringify([
          "Create 3x3 testing matrix (3 headlines x 3 visuals)",
          "Produce 4:5 static ads with bold text overlays",
          "Film 15-second Reels-style UGC video ads",
          "Write PAS, Social Proof, and Direct Offer copy variants",
          "Set up bi-weekly creative refresh calendar",
          "Install Meta Ad Library browser bookmark for competitor research"
        ])
      },
      {
        name: "Budget & Bidding",
        slug: "meta-budget",
        icon: "DollarSign",
        description: "CBO vs ABO, bid caps, budget scaling rules",
        order: 4,
        guide: `## What Is Meta Budget & Bidding?\n\nBudget and bidding strategy determines how much you spend, how you allocate across campaigns, and how aggressively Meta bids for impressions on your behalf. The two main approaches are Campaign Budget Optimization (CBO — Meta distributes budget across ad sets) and Ad Set Budget Optimization (ABO — you control each ad set's budget manually).\n\n## Why It Matters\n\nBudget mismanagement is the #1 reason Meta campaigns fail for small businesses:\n- Spending too little ($10/day) starves the algorithm of data needed to optimize\n- Spending too much too fast triggers the "learning phase" repeatedly\n- Wrong bid strategy means overpaying for low-quality leads or missing high-quality ones\n- Improper scaling (doubling budget overnight) crashes campaign performance\n\n## Implementation Steps\n\n1. **Starting Budget**: Allocate $3,000-5,000/month for Meta. Split: 60% Prospecting, 30% Retargeting, 10% Testing.\n\n2. **CBO vs ABO Decision**:\n   - Use CBO (recommended) when ad sets target similar-sized audiences\n   - Use ABO when you need guaranteed spend on specific audiences (retargeting)\n   - Minimum $20/day per ad set for ABO, $50/day per campaign for CBO\n\n3. **Bid Strategy**:\n   - Start with "Lowest Cost" (let Meta find the cheapest conversions)\n   - After 50+ conversions, switch to "Cost Cap" at your target CPL\n   - For retargeting: use "Lowest Cost" — the audience is small and high-intent\n\n4. **Scaling Rules**:\n   - Never increase budget more than 20% at a time\n   - Wait 3-5 days between budget increases\n   - If CPA spikes after scaling, pause for 48 hours then resume at previous budget\n   - Horizontal scaling (new ad sets with different audiences) is safer than vertical scaling (increasing budget)\n\n5. **Budget Monitoring**: Check daily for the first 2 weeks, then 3x/week. Set up automated rules: pause ad sets if CPA exceeds 2x target for 3 consecutive days.\n\n## Pro Tips\n\n- Meta needs 50 conversions per week per ad set to fully exit the "learning phase" — if your volume is lower, consolidate ad sets\n- Set a daily spend alert at 120% of daily budget to catch overspend early\n- Use the "learning limited" status as a signal to consolidate, not add budget\n- Friday-Sunday typically has higher CPMs due to e-commerce competition — shift B2B budget to M-Th if possible`,
        defaultTasks: JSON.stringify([
          "Set monthly Meta budget and campaign-level allocation",
          "Configure CBO on Prospecting and ABO on Retargeting campaigns",
          "Set bid strategy (Lowest Cost initially, Cost Cap after 50 conversions)",
          "Create scaling rules document (20% max increase, 3-5 day wait)",
          "Set up automated rules for CPA overspend alerts"
        ])
      },
      {
        name: "Reporting",
        slug: "meta-reporting",
        icon: "BarChart3",
        description: "Attribution windows, conversion tracking, ROAS monitoring",
        order: 5,
        guide: `## What Is Meta Reporting?\n\nMeta reporting encompasses conversion tracking setup, attribution window configuration, custom report creation, and ongoing ROAS (Return on Ad Spend) monitoring. Proper reporting tells you exactly which campaigns, audiences, and creative generate revenue — not just clicks.\n\nFor SMAART, reporting is the accountability layer that proves marketing's contribution to revenue and guides optimization decisions.\n\n## Why It Matters\n\nWithout proper reporting, you are flying blind:\n- Default Meta reports show vanity metrics (reach, impressions) instead of business metrics (cost per qualified lead, revenue per client)\n- Wrong attribution windows either over-count or under-count conversions\n- Missing conversion events mean the algorithm cannot optimize toward real business outcomes\n- Lack of reporting discipline leads to the #1 CMO failure: "We're spending money but can't prove it works"\n\n## Implementation Steps\n\n1. **Conversion Events Setup**: In Meta Events Manager, configure these events:\n   - PageView (all pages) — already from pixel installation\n   - Lead (form submission on quote/consultation pages)\n   - Contact (phone number click or chat initiation)\n   - Schedule (calendar booking completion)\n   - ViewContent (service page views — for retargeting)\n\n2. **Attribution Window**: Set to 7-day click, 1-day view for most campaigns. For long-cycle B2B (insurance, advisory), test 28-day click attribution to capture delayed conversions.\n\n3. **Custom Columns**: Build a custom column set that shows: Amount Spent, Leads, Cost Per Lead, Link CTR, Frequency, ROAS. Save as "SMAART Master View" and use for all reporting.\n\n4. **Weekly Report Template**: Every Monday, pull: Total Spend, Total Leads, Avg CPL, Top 3 Performing Ads, Top 3 Performing Audiences, Week-over-Week Trend.\n\n5. **ROAS Tracking**: Connect GoHighLevel pipeline data to Meta using Conversions API (CAPI) for server-side tracking. Upload offline conversions (closed deals) monthly to show true ROAS.\n\n## Pro Tips\n\n- Use Conversions API (CAPI) alongside browser pixel for 20-30% better attribution accuracy\n- Compare Meta-reported conversions to your CRM data weekly — discrepancies reveal tracking issues\n- Set up automated email reports to Ray and Gus every Monday morning\n- Create a "Source of Truth" dashboard that reconciles Meta, Google, and CRM data in one view`,
        defaultTasks: JSON.stringify([
          "Configure all conversion events in Meta Events Manager",
          "Set attribution windows (7-day click, 1-day view)",
          "Build custom reporting columns (SMAART Master View)",
          "Create weekly report template and distribution schedule",
          "Implement Conversions API (CAPI) for server-side tracking",
          "Set up monthly offline conversion uploads from GoHighLevel"
        ])
      },
    ],
    bestPractices: [
      { title: "70-80% of Performance Is Creative", source: "Meta for Business", sourceUrl: "https://www.facebook.com/business/ads-guide", content: "Meta's research confirms creative quality drives 70-80% of ad performance — not budget or targeting. Test at least 1 new creative per week.", category: "framework" },
      { title: "4:5 Vertical Format", source: "Meta for Business", sourceUrl: "https://www.facebook.com/business/ads-guide", content: "Use 4:5 vertical for Feed, 9:16 for Reels/Stories. Capture attention in first 3 seconds. Bold burned-in captions (65% watch without sound).", category: "template" },
      { title: "UGC Outperforms Studio Content", source: "Meta for Business", sourceUrl: "https://www.facebook.com/business/ads-guide", content: "User-generated-content style outperforms polished studio content by 2-3x in engagement. Include social proof (reviews, star ratings, client logos).", category: "metric" },
    ]
  },
  {
    name: "Google Ads",
    slug: "google-ads",
    icon: "Search",
    description: "Search, Display, YouTube, Local Services — capture high-intent prospects",
    category: "strategy",
    status: "not_started",
    progress: 0,
    order: 7,
    modules: [
      {
        name: "Keyword Research",
        slug: "keywords",
        icon: "Key",
        description: "Target keywords by service line: accounting, tax, payroll, advisory, insurance",
        order: 1,
        guide: `## What Is Keyword Research?\n\nKeyword research identifies the exact search terms South Florida business owners type into Google when looking for SMAART's services. These keywords become the foundation of your Google Search campaigns — each keyword represents a real person with a real need at a real moment.\n\n## Why It Matters\n\nGoogle Search is the highest-intent channel in your entire marketing plan. Someone searching "business insurance Miami" is actively looking to buy — right now. Keyword research ensures:\n- You bid on terms with commercial intent, not just informational queries\n- You discover the actual language prospects use (not industry jargon)\n- You identify negative keywords that waste budget (job seekers, DIY, free)\n- You organize keywords by service line for clean campaign structure\n\n## Implementation Steps\n\n1. **Core Keyword Lists by Service Line**:\n   - Insurance: "business insurance Miami," "commercial insurance South Florida," "liability insurance for small business," "workers comp Miami-Dade"\n   - Tax: "business tax preparation Miami," "corporate tax accountant near me," "tax planning South Florida"\n   - Advisory: "fractional CFO Miami," "business financial advisor South Florida," "small business consultant Broward"\n   - Payroll: "payroll services Miami," "payroll company South Florida"\n\n2. **Keyword Tools**: Use Google Keyword Planner (free in Google Ads), Semrush, or Ubersuggest. Pull search volume, competition level, and estimated CPC for each keyword.\n\n3. **Match Types**:\n   - Exact Match [business insurance miami] — highest intent, lowest volume\n   - Phrase Match "business insurance miami" — moderate intent and volume\n   - Broad Match: business insurance miami — highest volume, needs careful negative keyword management\n\n4. **Negative Keywords**: Build a negative keyword list from day one:\n   - Jobs/careers: "jobs," "salary," "hiring," "career"\n   - Free/DIY: "free," "template," "DIY," "how to"\n   - Irrelevant: "personal," "auto," "health" (if not offered), "home"\n\n5. **Competitor Keywords**: Bid on competitor brand names ("XYZ Accounting Miami") as a conquest strategy, but only with strong ad copy explaining why SMAART is better.\n\n## Pro Tips\n\n- Long-tail keywords ("small business tax accountant Brickell Miami") have lower volume but 2-3x higher conversion rates\n- Check Search Terms Report weekly for the first month — you will find surprising terms to add or negate\n- Group keywords by intent: informational (blog content), commercial (landing pages), transactional (form pages)\n- Estimated CPC for insurance keywords in Miami can be $15-50+ — budget accordingly`,
        defaultTasks: JSON.stringify([
          "Build keyword lists for all SMAART service lines",
          "Pull search volume and CPC data from Google Keyword Planner",
          "Create master negative keyword list (100+ terms)",
          "Organize keywords by match type and campaign structure",
          "Research competitor brand keywords for conquest campaigns",
          "Set up weekly Search Terms Report review process"
        ])
      },
      {
        name: "Search Campaigns",
        slug: "search-campaigns",
        icon: "Search",
        description: "Text ads, responsive search ads, ad extensions, negative keywords",
        order: 2,
        guide: `## What Are Google Search Campaigns?\n\nGoogle Search campaigns place your ads at the top of search results when someone types a relevant keyword. These are text-based Responsive Search Ads (RSAs) with headlines, descriptions, and extensions (callouts, sitelinks, phone numbers). For SMAART, Search is where you capture high-intent demand — people actively looking for insurance, tax, or advisory services.\n\n## Why It Matters\n\nGoogle Search is your highest-converting channel because the prospect has already raised their hand:\n- Search ads appear at the exact moment of need — "business insurance quote Miami" means they want to buy today\n- Average conversion rate for financial services search ads is 5-7% (vs 1-2% for display)\n- You only pay when someone clicks (CPC model) — no waste on uninterested viewers\n- Search provides the clearest ROI attribution of any channel\n\n## Implementation Steps\n\n1. **Campaign Structure**: Create separate campaigns per service line:\n   - Campaign: SMAART | Search | Insurance (keywords: business insurance, commercial insurance, liability insurance)\n   - Campaign: SMAART | Search | Tax (keywords: tax preparation, tax planning, corporate tax)\n   - Campaign: SMAART | Search | Advisory (keywords: fractional CFO, financial advisor, business consultant)\n   - Campaign: SMAART | Search | Brand (keywords: SMAART company, SMAART insurance, SMAART Miami)\n\n2. **Responsive Search Ads**: Create 2-3 RSAs per ad group with:\n   - 15 headline variations (benefit-driven, include keywords, include location)\n   - 4 description variations (value prop, social proof, CTA, differentiator)\n   - Pin critical headlines (brand name, main offer) to positions 1 and 2\n\n3. **Ad Extensions**:\n   - Sitelinks: "Free Consultation," "Our Services," "Client Testimonials," "About SMAART"\n   - Callouts: "Year-Round Support," "500+ Businesses Served," "Bilingual Team"\n   - Call Extension: SMAART phone number with call tracking\n   - Location Extension: Link Google Business Profile\n   - Structured Snippets: Services — Insurance, Tax, Payroll, Advisory, CFO\n\n4. **Landing Pages**: Each campaign should point to a service-specific landing page — not the homepage. Insurance campaign → insurance landing page with insurance-specific form.\n\n## Pro Tips\n\n- Brand campaigns are cheap ($0.50-2 CPC) and protect against competitors bidding on your name\n- Use ad customizers to dynamically insert the keyword into headlines for higher relevance\n- Set ad rotation to "Optimize" to let Google show the best-performing ad combinations\n- Check Quality Score weekly — scores below 5 mean your landing page or ad relevance needs improvement`,
        defaultTasks: JSON.stringify([
          "Create Search campaigns for each SMAART service line",
          "Write 15 headline and 4 description variations per campaign",
          "Set up all ad extensions (sitelinks, callouts, call, location)",
          "Build service-specific landing pages for each campaign",
          "Configure negative keyword lists at campaign and account level",
          "Launch Brand campaign to protect SMAART name"
        ])
      },
      {
        name: "Display Campaigns",
        slug: "display",
        icon: "Monitor",
        description: "Topic, keyword, and affinity targeting on Google Display Network",
        order: 3,
        guide: `## What Are Google Display Campaigns?\n\nGoogle Display Network (GDN) reaches over 90% of internet users across 2+ million websites and apps. Display campaigns show banner ads (images, responsive ads, HTML5) on websites that your target audience visits — news sites, blogs, apps, and Gmail.\n\nFor SMAART, Display serves as the awareness layer that complements high-intent Search campaigns. Display builds familiarity so that when a prospect eventually searches for "business insurance Miami," they recognize and trust SMAART.\n\n## Why It Matters\n\nDisplay fills the top of your funnel at scale:\n- $2-5 CPM means you can reach 100,000 South Florida business owners for $200-500\n- Remarketing on Display keeps SMAART visible after someone leaves your website\n- Display + Search together increase conversion rates 20-30% vs Search alone\n- Visual branding builds trust and recognition over time\n\n## Implementation Steps\n\n1. **Campaign Types**:\n   - Remarketing Display: Show ads to website visitors who did not convert (highest priority)\n   - Prospecting Display: Target new audiences by topic, interest, and demographics\n   - Gmail Campaigns: Ads in Gmail that expand to full landing page when clicked\n\n2. **Targeting Options**:\n   - Topics: Business & Finance, Insurance, Small Business, Accounting\n   - Custom Intent: Create audiences of people searching for your keywords but not on Google Search\n   - Affinity: Business Professionals, Small Business Owners, Frequent Business Travelers\n   - Demographics: Layer with age 25-62, HHI top 25%, South Florida geography\n\n3. **Ad Formats**: Create Responsive Display Ads (Google auto-assembles) with:\n   - 5 landscape images (1200x628), 5 square images (1200x1200), 5 logos\n   - 5 headlines (30 chars), 5 long headlines (90 chars), 5 descriptions (90 chars)\n   - Also upload custom HTML5 or static banners: 300x250, 728x90, 160x600, 320x50\n\n4. **Placement Exclusions**: Immediately exclude: mobile apps (accidental clicks), parked domains, and content categories (gambling, adult, sensitive subjects).\n\n## Pro Tips\n\n- Responsive Display Ads reach more placements than static banners and usually perform better — always create them\n- Set frequency cap at 5 impressions/day for prospecting, 3/day for remarketing\n- Mobile app placements account for up to 70% of GDN spend with minimal conversions — exclude them\n- Review placement reports weekly and blacklist low-quality sites aggressively`,
        defaultTasks: JSON.stringify([
          "Create Remarketing Display campaign for website visitors",
          "Build Prospecting Display campaign with topic and interest targeting",
          "Design Responsive Display Ads (images, headlines, descriptions)",
          "Upload custom static banners in 4 standard sizes",
          "Exclude mobile apps, parked domains, and sensitive categories",
          "Set up placement report review process (weekly)"
        ])
      },
      {
        name: "Local Services Ads",
        slug: "lsa",
        icon: "MapPin",
        description: "Google Guaranteed badge, pay-per-lead for local services",
        order: 4,
        guide: `## What Are Local Services Ads?\n\nLocal Services Ads (LSAs) appear at the very top of Google Search results — above regular Search Ads. They feature a "Google Guaranteed" or "Google Screened" badge, your business photo, star rating, hours, and a direct call or message button. You pay per lead (phone call or message), not per click.\n\nFor SMAART, LSAs are potentially the highest-ROI channel because they combine trust (Google badge), prime positioning (top of page), and pay-per-lead pricing.\n\n## Why It Matters\n\nLSAs dominate local search results:\n- Appear above all other ads — position zero\n- Google Guaranteed badge builds instant trust\n- Pay-per-lead model means you only pay when someone contacts you\n- Average cost per lead is typically 30-50% lower than Search Ads for local services\n- Google verifies and screens your business, filtering out sketchy competitors\n\n## Implementation Steps\n\n1. **Eligibility Check**: Verify SMAART qualifies for LSAs in the "Insurance" and/or "Financial Planning" categories in South Florida. Go to ads.google.com/local-services-ads to check availability.\n\n2. **Verification Process**: Submit:\n   - Business license and insurance proof\n   - Background checks for business owners (Google-mandated)\n   - Business registration verification\n   - This process takes 2-4 weeks — start immediately\n\n3. **Profile Optimization**:\n   - Upload professional team photos (not logos)\n   - Set service areas: Miami-Dade, Broward, Palm Beach\n   - List all services offered\n   - Respond to every review within 24 hours\n   - Set business hours accurately\n\n4. **Budget and Bidding**: Set weekly budget based on desired lead volume. Start at $500/week, increase as you validate lead quality. You can set "Max per lead" bid to control costs.\n\n5. **Lead Management**: Respond to every LSA lead within 5 minutes. LSAs punish slow response times by reducing your visibility. Set up phone forwarding and notification alerts.\n\n## Pro Tips\n\n- Google reviews are the #1 ranking factor for LSAs — launch a review generation campaign immediately\n- You can dispute low-quality leads (spam, wrong service, out of area) for credit — do this within 30 days\n- Photos with people (team members, office, client meetings) outperform logos and graphics\n- LSAs now support message leads — turn this on for prospects who prefer texting over calling`,
        defaultTasks: JSON.stringify([
          "Check SMAART LSA eligibility for insurance/financial categories",
          "Begin Google verification and background check process",
          "Optimize Google Business Profile with photos and services",
          "Set initial weekly LSA budget and max per lead bid",
          "Set up 5-minute lead response alerts and call forwarding",
          "Launch Google review generation campaign with existing clients"
        ])
      },
      {
        name: "YouTube Pre-Roll",
        slug: "youtube",
        icon: "Play",
        description: "15-second skippable + 6-second bumper ads",
        order: 5,
        guide: `## What Are YouTube Pre-Roll Ads?\n\nYouTube pre-roll ads play before or during YouTube videos. There are two key formats: skippable in-stream (user can skip after 5 seconds) and bumper ads (6-second non-skippable). YouTube is the second-largest search engine and the most-watched video platform in the US.\n\nFor SMAART, YouTube is where business owners go for education, industry news, and entertainment — and where your brand message can appear in a premium, full-screen video environment.\n\n## Why It Matters\n\nYouTube reaches 2.5 billion monthly users and is increasingly where B2B decision-makers spend time:\n- 70% of B2B buyers watch videos throughout their purchase journey\n- YouTube ads are 84% more likely to hold attention than TV ads\n- You can target by search history, interests, demographics, and even competitor channel viewers\n- Video builds trust faster than any other format — people buy from people they've "seen"\n\n## Implementation Steps\n\n1. **Video Production**: Create two versions:\n   - 15-second skippable: Hook (2 sec) → Value prop (8 sec) → CTA (5 sec). "Is your business properly protected? SMAART Company provides year-round insurance, tax, and advisory support for South Florida businesses. Visit smaartcompany.com for a free review."\n   - 6-second bumper: One message only. "SMAART — Insurance, Tax & Advisory for South Florida businesses. smaartcompany.com"\n\n2. **Targeting Setup**:\n   - Custom Intent: Target people who searched for "business insurance," "small business accountant," etc. on Google\n   - In-Market: Business Services, Insurance, Financial Services\n   - Affinity: Small Business Owners, Business Professionals\n   - Topic: Business & Finance channels\n   - Geography: Miami-Dade, Broward, Palm Beach\n\n3. **Campaign Structure**: Create separate campaigns for:\n   - Awareness (skippable + bumper, broad targeting, optimize for views)\n   - Consideration (skippable, custom intent targeting, optimize for website visits)\n   - Retargeting (skippable, website visitor audiences, optimize for conversions)\n\n4. **Bidding**: Use Target CPV (cost per view) for awareness, Target CPA for retargeting. Expect $0.03-0.08 per view for awareness, $5-15 CPA for retargeting.\n\n## Pro Tips\n\n- The first 5 seconds are everything — if they skip, you still got 5 seconds of brand exposure for free\n- Add burned-in captions — many YouTube viewers watch with sound off\n- Use YouTube's "Audiences" report to discover which audience segments convert best and scale those\n- Companion banner (300x60) appears next to your video on desktop — design it to reinforce the CTA`,
        defaultTasks: JSON.stringify([
          "Produce 15-second skippable and 6-second bumper video ads",
          "Set up Custom Intent audiences based on Google Search keywords",
          "Create awareness, consideration, and retargeting campaigns",
          "Design companion banner (300x60) for desktop placements",
          "Configure conversion tracking for YouTube campaigns"
        ])
      },
      {
        name: "Budget & Bidding",
        slug: "google-budget",
        icon: "DollarSign",
        description: "Target CPA, max conversions, smart bidding strategies",
        order: 6,
        guide: `## What Is Google Ads Budget & Bidding?\n\nGoogle Ads offers multiple bidding strategies that control how your budget is spent across Search, Display, and YouTube. Smart Bidding uses machine learning to optimize bids in real-time based on hundreds of signals — device, location, time of day, user history, and more.\n\nFor SMAART, proper budget allocation and bidding strategy across Google channels is critical because insurance and financial services keywords are among the most expensive on Google ($15-75 per click).\n\n## Why It Matters\n\nGoogle Ads budget and bidding directly impacts your cost per acquisition:\n- Wrong bid strategy on expensive insurance keywords can drain $500/day with zero leads\n- Smart Bidding finds conversions 15-30% cheaper than manual bidding once it has data\n- Budget allocation between Search, Display, YouTube, and LSAs determines your channel mix ROI\n- Daily budget caps prevent runaway spend during high-competition periods\n\n## Implementation Steps\n\n1. **Monthly Budget Allocation** (assuming $5,000-10,000/month):\n   - Google Search: 50% ($2,500-5,000) — highest intent, highest priority\n   - Local Services Ads: 20% ($1,000-2,000) — if eligible, best CPL\n   - YouTube: 15% ($750-1,500) — awareness and retargeting\n   - Display: 15% ($750-1,500) — remarketing and broad awareness\n\n2. **Bidding Strategy Progression**:\n   - Week 1-4: "Maximize Clicks" with max CPC caps — gather data\n   - Week 4-8: "Maximize Conversions" — let Google find converters\n   - Week 8+: "Target CPA" — set your desired cost per lead and let Google optimize\n   - You need 30+ conversions/month before Target CPA works effectively\n\n3. **Budget Rules**:\n   - Set daily budgets (Google can spend up to 2x daily budget on any day, but averages out monthly)\n   - Never change budget more than 20% at a time\n   - Pause underperforming campaigns rather than reducing budget to tiny amounts\n\n4. **Bid Adjustments**:\n   - +20% for mobile (most local searches are mobile)\n   - +15% for Miami-Dade (highest population density)\n   - -30% for ages 18-24 (unlikely to be business owners)\n   - +25% for business hours (M-F 8AM-6PM)\n\n## Pro Tips\n\n- Set up conversion value tracking — a closed insurance client is worth more than a tax lead. Assign different values to different conversion actions.\n- Use "Target ROAS" bidding once you have enough conversion value data (30+ conversions with values)\n- Shared budgets across campaigns can help prevent one campaign from starving another\n- Set up automated rules: pause keywords with >$200 spend and 0 conversions`,
        defaultTasks: JSON.stringify([
          "Set monthly Google Ads budget with channel allocation",
          "Configure initial bidding strategy (Maximize Clicks with caps)",
          "Set bid adjustments for device, location, demographics, and schedule",
          "Create automated rules for overspend and underperformance",
          "Plan bidding strategy progression (Clicks → Conversions → Target CPA)"
        ])
      },
    ],
    bestPractices: [
      { title: "Benefit-First Headlines", source: "Ogilvy", sourceUrl: "https://www.ogilvy.com", content: "Promise a benefit in every headline. 'Cut Your Tax Bill by 30%' > 'Accounting Services Available'. Include brand name.", category: "framework" },
      { title: "Test Everything", source: "Ogilvy", sourceUrl: "https://www.ogilvy.com", content: "Run 3-5 headline variants per campaign minimum. Never assume which message will win. Let the data decide.", category: "checklist" },
    ]
  },
  {
    name: "Content & Contextual",
    slug: "content-contextual",
    icon: "BookOpen",
    description: "Place SMAART alongside relevant content on business/finance sites",
    category: "strategy",
    status: "not_started",
    progress: 0,
    order: 8,
    modules: [
      {
        name: "Content Strategy",
        slug: "content-strategy",
        icon: "FileText",
        description: "3x/week blog pipeline, thought leadership calendar",
        order: 1,
        guide: `## What Is Content Strategy?\n\nContent strategy is your plan for creating, publishing, and distributing valuable content that attracts and educates your target audience. For SMAART, this means a consistent pipeline of blog posts, articles, guides, and social content that positions SMAART as the go-to authority for South Florida business insurance and financial services.\n\n## Why It Matters\n\nContent is the engine that powers every other channel:\n- SEO: Blog content ranks for long-tail keywords that bring free organic traffic\n- Social: Content gives you something to post besides ads (Jab, Jab, Jab, Right Hook)\n- Email: Content fuels your nurture sequences and newsletters\n- Authority: Consistent publishing builds the "Visible Expert" effect (Hinge Marketing research shows these firms grow 3x faster)\n- Retargeting: Blog readers become retargeting audiences for bottom-funnel ads\n\n## Implementation Steps\n\n1. **Content Calendar**: Build a 90-day calendar with 3 posts/week:\n   - Monday: Educational (How-to, guide, checklist)\n   - Wednesday: Thought Leadership (Market trends, opinion, predictions)\n   - Friday: Client Spotlight or Case Study\n\n2. **Content Pillars** (4 core topics):\n   - Business Insurance: "X things your business insurance should cover," industry-specific guides\n   - Tax Strategy: Seasonal content, deductions, planning tips\n   - Financial Growth: Advisory, fractional CFO insights, cash flow management\n   - South Florida Business: Local market insights, regulations, community\n\n3. **SEO-Driven Topics**: Use Semrush or Ahrefs to find keywords with 100-1,000 monthly searches and low-medium competition. Write content targeting those terms. Example: "workers compensation insurance Miami" (590/month, medium competition).\n\n4. **Content Production Workflow**: Brief → Draft (AI-assisted) → Expert Review (SMAART team) → Publish → Distribute (social, email, paid boost). Aim for 1,000-1,500 words per post.\n\n5. **Distribution**: Every blog post should be shared on LinkedIn, Facebook, Instagram (as a carousel), and to your email list. Boost top performers with $20-50 in Meta Ads.\n\n## Pro Tips\n\n- AI-assisted writing (using Claude, ChatGPT) for first drafts saves 70% of production time — but always have a SMAART expert review for accuracy and brand voice\n- Repurpose every blog post into 3-5 social posts, 1 email excerpt, and 1 video script\n- Interlink blog posts to each other and to service pages for SEO value\n- Track which posts generate the most form submissions, not just pageviews`,
        defaultTasks: JSON.stringify([
          "Build 90-day content calendar with 3x/week publishing cadence",
          "Define 4 content pillars and topic clusters",
          "Research 30 SEO-driven blog topics using keyword tools",
          "Create content production workflow (brief → draft → review → publish)",
          "Set up blog distribution process across social and email channels"
        ])
      },
      {
        name: "Contextual Targeting",
        slug: "contextual",
        icon: "Globe",
        description: "Keyword and topic targeting on business/finance publisher sites",
        order: 2,
        guide: `## What Is Contextual Targeting?\n\nContextual targeting places your ads on web pages whose content matches specific keywords or topics. Instead of targeting the person (behavioral), you target the content they are reading. When someone reads an article about "business insurance trends in 2026," your SMAART ad appears alongside it.\n\nThis is privacy-friendly targeting that works without cookies or tracking data — making it increasingly valuable as third-party cookies disappear.\n\n## Why It Matters\n\nContextual targeting is experiencing a renaissance because:\n- No cookies or personal data required — fully privacy compliant\n- Ads appear in relevant context, increasing brand association and click intent\n- Studies show contextual ads drive 2.5x higher brand recall than behavioral targeting\n- It works across all programmatic platforms and the Google Display Network\n- For SMAART, it places your brand alongside exactly the content your prospects are reading\n\n## Implementation Steps\n\n1. **Keyword-Based Contextual Targeting**: Build keyword lists that match SMAART's services:\n   - Insurance: "business insurance," "commercial coverage," "liability protection," "workers compensation"\n   - Finance: "small business accounting," "tax preparation," "financial planning," "cash flow management"\n   - Local: "South Florida business," "Miami business," "Broward entrepreneurs"\n\n2. **Topic-Based Targeting**: Select IAB content categories:\n   - Business & Finance > Insurance > Commercial\n   - Business & Finance > Accounting & Tax\n   - Business > Small Business\n   - News > Local News > South Florida\n\n3. **Negative Contexts**: Exclude pages about:\n   - Personal insurance (auto, home, health)\n   - Business failures, bankruptcies, layoffs\n   - Political content, controversial topics\n\n4. **Platform Setup**: Deploy contextual targeting through your DSP (AdRoll, Trade Desk) and Google Display Network. Run as a separate campaign from behavioral targeting to measure performance independently.\n\n## Pro Tips\n\n- Contextual + behavioral combined often outperforms either alone — test layering them\n- Use contextual targeting on premium publisher sites only (whitelist) for maximum brand safety\n- Contextual CPMs are typically 20-40% lower than behavioral — better efficiency for awareness\n- Review the "page context" reports to ensure your ads appear on truly relevant pages`,
        defaultTasks: JSON.stringify([
          "Build contextual keyword lists for all SMAART service areas",
          "Select IAB topic categories for targeting",
          "Create negative context exclusion list",
          "Deploy contextual campaigns on GDN and DSP",
          "A/B test contextual vs behavioral targeting performance"
        ])
      },
      {
        name: "Native Advertising",
        slug: "native",
        icon: "Newspaper",
        description: "Taboola/Outbrain promoted content on major publishers",
        order: 3,
        guide: `## What Is Native Advertising?\n\nNative ads look and feel like the editorial content on the publisher's website. They appear as "recommended" or "sponsored" articles at the bottom or within article feeds on major news and content sites. Platforms like Taboola and Outbrain power these placements across thousands of premium publishers.\n\nFor SMAART, native advertising bridges content marketing and paid media. Your blog posts and guides appear on Forbes, CNN, Business Insider, and local news sites as if they were editorial recommendations.\n\n## Why It Matters\n\nNative ads outperform display in key metrics:\n- 53% higher viewability than standard display ads\n- 2x higher click-through rates than banner ads\n- Users view native ads 53% more frequently than display\n- They bypass "banner blindness" because they match the content experience\n- Ideal for promoting SMAART's educational content to a broad business audience\n\n## Implementation Steps\n\n1. **Content Selection**: Choose 3-5 high-performing blog posts or guides to promote. The content should be genuinely valuable — native works because people click expecting useful content, not a sales pitch.\n\n2. **Platform Selection**:\n   - **Taboola**: Larger reach, better for awareness, minimum $50/day\n   - **Outbrain**: Higher-quality publishers, better for B2B, minimum $20/day\n   - Start with one, add the second after 30 days of data\n\n3. **Creative Requirements**: Each native ad needs:\n   - Headline (60-80 characters): "5 Insurance Mistakes South Florida Business Owners Make"\n   - Thumbnail image (1200x800): Authentic, editorial-style photos\n   - CTA Text: "Read More" or "Learn More"\n\n4. **Landing Pages**: Link to the full blog post on smaartcompany.com — NOT a sales page. Include a clear CTA within the article (sidebar form, inline CTA, exit-intent popup) to capture leads.\n\n5. **Budget and Bidding**: Start with $1,000-2,000/month. Use CPC bidding starting at $0.30-0.80. Monitor CTR (target 0.3%+) and cost per lead from content readers.\n\n## Pro Tips\n\n- Headlines that look like articles outperform headlines that look like ads — "7 Tax Deductions Most Miami Businesses Miss" beats "Get Tax Help Today"\n- Test 5-10 headline/image combinations per content piece and let the platform optimize\n- Track the full funnel: click → read → engage → form submit. Native is top-of-funnel — measure accordingly\n- Retarget native ad readers with bottom-funnel Meta/Google ads for conversion`,
        defaultTasks: JSON.stringify([
          "Select 3-5 high-value blog posts for native promotion",
          "Set up Taboola and/or Outbrain account",
          "Create 5+ headline/thumbnail combinations per content piece",
          "Configure CPC bidding and daily budgets",
          "Set up conversion tracking from native ad clicks to form submissions"
        ])
      },
    ],
    bestPractices: [
      { title: "Jab, Jab, Jab, Right Hook", source: "VaynerMedia", sourceUrl: "https://vaynermedia.com", content: "Give value 3x before asking. Three pieces of free, useful content for every sales message. Post organically first, then boost winners.", category: "framework" },
    ]
  },
  {
    name: "Referral & Partners",
    slug: "referral",
    icon: "Handshake",
    description: "Turn happy clients into your best marketing channel",
    category: "strategy",
    status: "not_started",
    progress: 0,
    order: 9,
    modules: [
      {
        name: "Referral Program",
        slug: "referral-program",
        icon: "Gift",
        description: "Client referral rewards, tracking, and communication",
        order: 1,
        guide: `## What Is a Referral Program?\n\nA referral program systematizes word-of-mouth by giving existing clients a structured way — and incentive — to refer new business. For SMAART, this means creating a formal program where happy clients refer other South Florida business owners and receive rewards for successful introductions.\n\n## Why It Matters\n\nReferrals are the most profitable acquisition channel for professional services:\n- Referred clients have a 37% higher retention rate\n- Referral leads convert at 3-5x the rate of cold leads\n- Cost per acquisition for referrals is near zero (just the reward cost)\n- In insurance and financial services, trust is everything — a friend's recommendation bypasses months of trust-building\n- Most firms get referrals passively. A structured program turns passive into predictable.\n\n## Implementation Steps\n\n1. **Program Structure**: Design a simple, clear reward structure:\n   - Tier 1: Refer a business that gets a quote → $50 Amazon gift card\n   - Tier 2: Refer a business that becomes a client → $250 credit toward SMAART services\n   - Tier 3: Refer 3+ clients in a year → VIP client status + annual dinner invitation\n\n2. **Tracking System**: Use GoHighLevel to track referrals:\n   - Create a custom field "Referred By" on the contact record\n   - Build a pipeline stage "Referral — Pending Reward"\n   - Automate reward fulfillment when the referred client signs\n\n3. **Communication Launch**:\n   - Email all current clients announcing the program\n   - Create a dedicated referral page on smaartcompany.com with a simple form\n   - Add referral mention to every client touchpoint (email signatures, statements, invoices)\n\n4. **Ongoing Activation**: Send quarterly referral reminders. Time them after positive interactions — tax refund delivery, insurance claim resolution, quarterly review meetings.\n\n5. **Recognition**: Publicly thank referrers (with permission) on social media. Create a "Referral Hall of Fame" for top advocates.\n\n## Pro Tips\n\n- The best time to ask for a referral is immediately after delivering a positive outcome\n- Make the referral process as frictionless as possible — one link, one form, done\n- Track "referral velocity" — how many referrals per client per year. Target 0.5 (one every 2 years average)\n- Consider a "give-get" model: the referrer AND the new client both get a reward`,
        defaultTasks: JSON.stringify([
          "Design referral reward tiers and program rules",
          "Build referral tracking in GoHighLevel (custom fields, pipeline stage)",
          "Create referral landing page on smaartcompany.com",
          "Draft and send program announcement email to all clients",
          "Add referral CTA to email signatures, invoices, and statements",
          "Set up quarterly referral reminder automation"
        ])
      },
      {
        name: "Partner Network",
        slug: "partners",
        icon: "Building",
        description: "Strategic partnerships with complementary service providers",
        order: 2,
        guide: `## What Is a Partner Network?\n\nA partner network is a group of complementary businesses that refer clients to each other. For SMAART, this means building relationships with businesses that serve the same client base (South Florida business owners) but do not compete — attorneys, real estate agents, bankers, HR consultants, IT companies, and business brokers.\n\n## Why It Matters\n\nPartner referrals are high-trust, high-conversion leads:\n- A recommendation from a client's attorney or banker carries massive credibility\n- Partners see your ideal clients at exactly the right moment (starting a business, buying property, getting sued)\n- Reciprocal partnerships create a flywheel — you refer to them, they refer to you\n- In South Florida's relationship-driven business culture, who you know matters as much as what you know\n\n## Implementation Steps\n\n1. **Identify Ideal Partners**: Target businesses that serve South Florida SMBs:\n   - Business attorneys (incorporation, contracts, disputes)\n   - Commercial real estate agents (business owners buying/leasing space)\n   - Business bankers and SBA lenders\n   - HR/PEO companies (share payroll and benefits clients)\n   - IT/MSP companies (serve the same SMB market)\n   - Business brokers (buying/selling businesses need financial services)\n\n2. **Outreach Strategy**: Start with 20 target partners.\n   - Warm intros from existing clients ("Who is your business attorney?")\n   - LinkedIn outreach with a clear value proposition\n   - Chamber of commerce and BNI chapter networking\n   - Host a "Partner Lunch" at a nice Miami restaurant — invite 5-6 potential partners\n\n3. **Partnership Agreement**: Keep it simple — one-page document covering:\n   - Mutual referral commitment\n   - How referrals are tracked (shared Google Sheet or CRM tags)\n   - Quarterly check-in meetings\n   - Co-marketing opportunities (joint webinars, shared content)\n\n4. **Co-Marketing**: Create joint content with partners — "SMAART + [Law Firm]: The Complete Guide to Starting a Business in Florida." Both parties promote to their audiences.\n\n5. **Partner Portal**: Consider giving top partners access to a simple dashboard showing their referral status and rewards.\n\n## Pro Tips\n\n- Quality over quantity — 5 active partners who each send 2 referrals/month beats 50 partners who never refer\n- Always reciprocate first — send your partner a referral before asking for one\n- Schedule quarterly "Partner Review" lunches to maintain relationships\n- Track partner referral quality (conversion rate, LTV) to identify your most valuable partnerships`,
        defaultTasks: JSON.stringify([
          "Identify 20 target partner businesses in South Florida",
          "Create partner outreach script and value proposition",
          "Schedule 5 partner introduction meetings this month",
          "Draft simple one-page partnership agreement",
          "Plan first Partner Lunch event for networking"
        ])
      },
    ],
    bestPractices: []
  },
  {
    name: "X (Twitter) Ads",
    slug: "x-ads",
    icon: "Twitter",
    description: "Promoted tweets, thread ads, and follower campaigns on X",
    category: "strategy",
    status: "not_started",
    progress: 0,
    order: 10,
    modules: [
      {
        name: "Campaign Setup",
        slug: "x-campaigns",
        icon: "Megaphone",
        description: "Campaign objectives, audience targeting, promoted tweet creation",
        order: 1,
        guide: `## What Is X (Twitter) Campaign Setup?\n\nX Ads Manager allows you to create promoted content that reaches users beyond your organic followers. Campaign setup includes choosing an objective (website clicks, engagement, followers, app installs), defining your audience, and creating promoted tweets that appear in users' timelines.\n\nFor SMAART, X provides access to a business-savvy, news-consuming audience — particularly decision-makers, entrepreneurs, and finance professionals who are active on the platform.\n\n## Why It Matters\n\nX offers unique advantages for B2B professional services:\n- Real-time relevance — you can promote content tied to breaking news, tax deadlines, and regulatory changes\n- Professional audience — X over-indexes on business owners, executives, and high-income professionals\n- Lower CPCs than Meta or LinkedIn — typically $0.50-2.00 per click for B2B\n- Conversation-driven platform — threads and replies create genuine engagement\n- Tax season, open enrollment, and regulatory deadlines create natural content hooks\n\n## Implementation Steps\n\n1. **Account Setup**: Go to ads.x.com → Create Ads Account → Link payment → Install X Pixel on smaartcompany.com for conversion tracking.\n\n2. **Campaign Objectives**: Start with two campaigns:\n   - **Website Traffic**: Drive clicks to SMAART blog posts and lead magnets\n   - **Engagement**: Promote high-value tweets to build authority and followers\n\n3. **Budget**: Start with $500-1,000/month. Set daily budgets of $20-35. Use automatic bidding initially to learn platform costs.\n\n4. **Ad Formats**:\n   - Promoted Tweets: Single image or video with strong copy\n   - Promoted Threads: Educational multi-tweet content (most unique X format)\n   - Website Cards: Image + headline + CTA button linking to smaartcompany.com\n\n5. **Creative Guidelines**: X rewards authenticity and value:\n   - Write like a person, not a brand\n   - Lead with insight or opinion, not a sales pitch\n   - Use threads for educational content (5-7 tweets per thread)\n   - Include 1-2 relevant hashtags, not more\n\n## Pro Tips\n\n- Organic first: post content organically, see what gets engagement, then promote the winners\n- X's conversation targeting lets you target people talking about specific topics — "tax season," "business insurance," "small business"\n- Post during business hours (M-F 7AM-6PM EST) for maximum B2B reach\n- Use X Analytics to identify your best-performing organic tweets and replicate their style`,
        defaultTasks: JSON.stringify([
          "Create X Ads Manager account and link payment",
          "Install X Pixel on smaartcompany.com",
          "Set up Website Traffic and Engagement campaigns",
          "Create 5 promoted tweet variations with images",
          "Set daily budget and automatic bidding"
        ])
      },
      {
        name: "Thread Ad Strategy",
        slug: "x-threads",
        icon: "MessageSquare",
        description: "Educational thread format — value first, CTA last",
        order: 2,
        guide: `## What Is a Thread Ad Strategy?\n\nThreads are multi-tweet sequences where each tweet builds on the previous one. On X, threads are the most engaging content format — they generate 3-5x more engagement than single tweets. A thread ad strategy means creating educational, value-packed threads that organically weave in SMAART's expertise and end with a clear call to action.\n\n## Why It Matters\n\nThreads are X's native content format and they work exceptionally well for B2B:\n- They demonstrate deep expertise in a way single tweets cannot\n- Users actively seek out and save valuable threads (bookmarks)\n- The thread format rewards knowledge sharing, which builds authority\n- Promoted threads have 50-70% lower CPE (cost per engagement) than promoted single tweets\n- For SMAART, threads position Ray, Gus, and the team as South Florida's go-to business experts\n\n## Implementation Steps\n\n1. **Thread Structure (5-7 tweets)**:\n   - Tweet 1 (Hook): Bold statement or question that stops the scroll. "Most South Florida business owners are underinsured. Here are 5 coverage gaps that could bankrupt you 🧵"\n   - Tweets 2-5 (Value): One actionable insight per tweet. Specific, practical, expert-level.\n   - Tweet 6 (Summary): Recap the key takeaways\n   - Tweet 7 (CTA): "Want us to review your coverage? DM us or visit smaartcompany.com/review"\n\n2. **Thread Topics for SMAART**:\n   - "7 tax deductions South Florida business owners forget every year"\n   - "How to choose the right business insurance (a thread for first-time owners)"\n   - "The real cost of not having a fractional CFO — a breakdown"\n   - "South Florida business regulations you need to know in 2026"\n   - "5 signs your accountant is costing you money"\n\n3. **Production Cadence**: Publish 1 organic thread per week. Promote the top-performing thread each month with $200-500 in ad spend.\n\n4. **Visual Enhancement**: Add an image to the first tweet (hook) and the last tweet (CTA). Use charts, infographics, or screenshots in the middle tweets for variety.\n\n5. **Engagement Strategy**: Reply to every comment on promoted threads. Retweet positive responses. Like all genuine engagement. This amplifies reach organically.\n\n## Pro Tips\n\n- The hook tweet is everything — spend 50% of your writing time on tweet 1\n- Number your tweets ("1/7") so readers know there is more to come\n- End every thread by asking readers to repost for reach: "Repost this if you know a business owner who needs to see this"\n- Repurpose threads into LinkedIn carousel posts and blog articles`,
        defaultTasks: JSON.stringify([
          "Write 4 thread scripts on core SMAART topics",
          "Design hook images and CTA graphics for threads",
          "Publish 1 organic thread per week for 4 weeks",
          "Promote top-performing thread with paid amplification",
          "Set up engagement response workflow for thread comments"
        ])
      },
      {
        name: "Audience Targeting",
        slug: "x-audiences",
        icon: "Target",
        description: "Interest, keyword, follower lookalike, and tailored audiences",
        order: 3,
        guide: `## What Is X Audience Targeting?\n\nX offers multiple targeting methods: keyword targeting (reach people who tweeted or searched specific terms), interest targeting (based on X's interest categories), follower lookalikes (people similar to followers of specific accounts), tailored audiences (your CRM lists uploaded to X), and conversation targeting (people engaging with specific topics).\n\n## Why It Matters\n\nX's targeting capabilities are underrated for B2B:\n- Keyword targeting catches people actively discussing business topics in real-time\n- Follower lookalikes let you target followers of competitors, industry publications, and business influencers\n- Conversation targeting reaches people engaged in trending business discussions\n- Tailored audiences from your CRM match rates are improving and cost less than Meta/Google equivalents\n\n## Implementation Steps\n\n1. **Keyword Targeting**: Target users who tweeted or searched:\n   - "business insurance," "need an accountant," "tax help," "small business"\n   - "Miami business," "South Florida entrepreneur," "looking for CPA"\n   - Exclude: "hiring," "job," "internship" (filter out job seekers)\n\n2. **Follower Lookalikes**: Target people similar to followers of:\n   - Competitor accounts (local accounting and insurance firms)\n   - Industry accounts: @SBAgov, @SCORE, @MiamiChamber, @GtBizJournal\n   - Finance influencers relevant to small business\n\n3. **Interest Categories**: Select:\n   - Business: Small business, entrepreneurship, startups\n   - Finance: Investing, accounting, financial planning\n   - Technology: Business software, SaaS\n\n4. **Tailored Audiences**: Upload your GoHighLevel CRM lists to X:\n   - Email list of all contacts → Custom Audience\n   - Website visitors via X Pixel → Retargeting Audience\n   - App users (if applicable)\n\n5. **Geographic + Demographic Layer**: Always layer with:\n   - Location: South Florida (Miami, Fort Lauderdale, West Palm Beach metros)\n   - Age: 25-60\n   - Language: English and Spanish\n\n## Pro Tips\n\n- Conversation targeting is X's hidden gem — target people in conversations about tax season, insurance quotes, and business growth\n- Exclude your own followers from awareness campaigns to focus on net new audience\n- Follower lookalike targeting works best when you pick accounts with 10k-500k followers\n- Refresh tailored audiences monthly from your CRM for accuracy`,
        defaultTasks: JSON.stringify([
          "Build keyword targeting lists for SMAART service areas",
          "Identify 20+ accounts for follower lookalike targeting",
          "Select relevant interest and conversation categories",
          "Upload GoHighLevel CRM list as Tailored Audience",
          "Configure geographic and demographic targeting layers"
        ])
      },
    ],
    bestPractices: []
  },
  {
    name: "Email Marketing",
    slug: "email",
    icon: "Mail",
    description: "10 automated sequences via GoHighLevel — nurture, convert, retain",
    category: "strategy",
    status: "not_started",
    progress: 0,
    order: 11,
    modules: [
      {
        name: "Welcome Sequence",
        slug: "welcome",
        icon: "Sparkles",
        description: "5-email onboarding series for new leads",
        order: 1,
        guide: `## What Is a Welcome Sequence?\n\nA welcome sequence is an automated series of emails sent to new leads immediately after they enter your system — via form submission, lead magnet download, or consultation request. It is the single most important email automation because it sets the tone for the entire relationship.\n\nFor SMAART, the welcome sequence transforms a cold form submission into a warm prospect who understands what SMAART offers, trusts the team, and is primed for a consultation.\n\n## Why It Matters\n\nWelcome emails have the highest open rates of any email type (50-60% vs 20% for regular marketing emails):\n- First impressions are permanent — the welcome sequence shapes how the prospect perceives SMAART\n- Automated sequences work 24/7 — a lead at 11 PM gets the same great experience as one at 9 AM\n- Leads that receive a welcome sequence are 33% more likely to engage long-term\n- Speed matters — leads contacted within 5 minutes are 21x more likely to convert\n\n## Implementation Steps\n\n1. **Email 1 (Immediately)**: "Welcome to SMAART" — Thank them, confirm what they signed up for, introduce SMAART's mission. Include a link to book a consultation. Keep it short (150 words max).\n\n2. **Email 2 (Day 2)**: "How SMAART is Different" — Share 3 key differentiators: year-round support, technology-powered, South Florida specialists. Include a client testimonial.\n\n3. **Email 3 (Day 4)**: "Your Free Resource" — Deliver relevant content based on their interest (insurance guide, tax checklist, financial planning tips). Value-first, no hard sell.\n\n4. **Email 4 (Day 7)**: "Meet the Team" — Introduce Ray, Gus, and key team members. Personal photos, short bios. Humanize the brand. Include a "Questions? Reply to this email" CTA.\n\n5. **Email 5 (Day 10)**: "Ready for Your Free Review?" — Soft close with a clear CTA to book a 15-minute consultation. Include social proof (500+ businesses served, Google reviews score). Create urgency with limited consultation spots.\n\n## Pro Tips\n\n- Use the lead's first name in every subject line — personalization boosts open rates 26%\n- Send from a person (daniel@smaartcompany.com), not a brand (noreply@smaartcompany.com)\n- A/B test subject lines on Email 1 — it gets the most volume and sets the baseline\n- Add the lead to your retargeting audience upon entering the sequence for multi-channel reinforcement`,
        defaultTasks: JSON.stringify([
          "Write 5-email welcome sequence copy in GoHighLevel",
          "Design email templates with SMAART branding",
          "Set up automation triggers (form submission, lead magnet download)",
          "Configure timing delays (immediate, day 2, 4, 7, 10)",
          "A/B test Email 1 subject line with two variants"
        ])
      },
      {
        name: "Nurture Sequences",
        slug: "nurture",
        icon: "Droplets",
        description: "Tax season, quarterly, advisory upsell sequences",
        order: 2,
        guide: `## What Are Nurture Sequences?\n\nNurture sequences are automated email flows that keep leads warm over weeks or months by delivering relevant content, insights, and offers aligned with their stage in the buying journey. For SMAART, this means separate sequences for tax season, insurance renewals, quarterly check-ins, and advisory service upsells.\n\n## Why It Matters\n\nMost leads are not ready to buy when they first engage. In B2B financial services:\n- Average sales cycle is 30-90 days for basic services, 90-180 days for advisory\n- 73% of leads are not yet sales-ready when they enter your CRM\n- Companies that nurture leads generate 50% more sales-ready leads at 33% lower cost\n- Without nurturing, leads go cold and competitors pick them up\n\n## Implementation Steps\n\n1. **Tax Season Sequence (Oct-Apr)**:\n   - 8 emails over 5 months\n   - Oct: "Planning Ahead: Tax Prep Starts Now"\n   - Nov: "Year-End Tax Moves for South Florida Businesses"\n   - Jan: "Documents You Need for 2025 Filing"\n   - Feb: "Filing Early = Bigger Savings. Here's Why"\n   - Mar-Apr: Urgency emails with deadline reminders\n\n2. **Insurance Renewal Sequence (Triggered 60 days before renewal)**:\n   - Email 1: "Your policy renews in 60 days — let's make sure you're properly covered"\n   - Email 2 (30 days): "3 coverage upgrades to consider before renewal"\n   - Email 3 (14 days): "Don't auto-renew without reviewing — free consultation"\n\n3. **Advisory Upsell Sequence (For existing tax/insurance clients)**:\n   - 4 emails over 30 days introducing fractional CFO, financial planning, and business growth advisory\n   - Lead with problems they're likely facing: cash flow issues, growth plateaus, financial visibility\n\n4. **Quarterly Check-In (Automated every 90 days)**:\n   - Single email: "Checking in — anything we can help with this quarter?"\n   - Include 1 relevant piece of content\n   - CTA: "Reply to this email or book a quick call"\n\n## Pro Tips\n\n- Segment nurtures by service interest — do not send insurance content to tax-only leads\n- Use GoHighLevel's tagging system to track which sequence each contact is in\n- Monitor "reply rate" not just open rate — replies indicate real engagement\n- After 6 months of nurturing with no engagement, move leads to a monthly newsletter instead`,
        defaultTasks: JSON.stringify([
          "Build tax season nurture sequence (8 emails, Oct-Apr)",
          "Create insurance renewal sequence (3 emails, triggered by date)",
          "Write advisory upsell sequence for existing clients",
          "Set up quarterly check-in automation in GoHighLevel",
          "Configure segmentation tags for sequence routing"
        ])
      },
      {
        name: "Win-Back Campaign",
        slug: "winback",
        icon: "RotateCcw",
        description: "Re-engagement for dormant leads and lost clients",
        order: 3,
        guide: `## What Is a Win-Back Campaign?\n\nA win-back campaign targets people who previously engaged with SMAART but went dormant — leads who never converted, clients who left, and contacts who stopped opening emails. The goal is to re-engage them with a compelling reason to come back.\n\n## Why It Matters\n\nWin-back campaigns are highly profitable because these people already know SMAART:\n- Reactivating a past client costs 5-7x less than acquiring a new one\n- Dormant leads have already expressed interest — they just need a nudge\n- Win-back campaigns typically recover 5-15% of dormant contacts\n- A clean, engaged email list improves deliverability for all your other emails\n\n## Implementation Steps\n\n1. **Define Dormancy**: Set thresholds:\n   - Leads: No email open in 90+ days, no form submission in 120+ days\n   - Clients: No active engagement in 6+ months, did not renew services\n\n2. **Win-Back Email 1 — "We Miss You"**: Personal tone, acknowledge the gap. "It's been a while since we connected. A lot has changed at SMAART — here's what's new." Include a compelling offer (free financial health check, discounted first consultation).\n\n3. **Win-Back Email 2 (Day 5) — "What Changed?"**: Ask for feedback. "Was there something we could have done better? We'd love to hear from you." Include a 1-question survey link.\n\n4. **Win-Back Email 3 (Day 12) — "Special Offer"**: Clear incentive to re-engage. "$100 off your next service" or "Complimentary insurance policy review — no obligation."\n\n5. **Win-Back Email 4 (Day 20) — "Last Call"**: "If we don't hear from you, we'll stop emailing so we don't clog your inbox. Click here to stay on our list." Sunset inactive contacts who do not engage with any of the 4 emails.\n\n6. **Sunsetting**: Remove contacts who did not engage with any win-back email from your active list. Move them to a "cold storage" segment. This improves deliverability for your engaged contacts.\n\n## Pro Tips\n\n- Run win-back campaigns quarterly for maximum list hygiene\n- Subject lines with "We miss you" or "It's been a while" consistently outperform clever alternatives\n- Offer a specific, valuable incentive — not just "come back"\n- Track win-back recovery rate as a KPI: (reactivated contacts / total dormant) x 100`,
        defaultTasks: JSON.stringify([
          "Define dormancy criteria in GoHighLevel (90+ days no open)",
          "Write 4-email win-back sequence with escalating offers",
          "Create 1-question feedback survey for dormant leads",
          "Set up sunsetting automation (remove after 4 unopened win-backs)",
          "Schedule quarterly win-back campaign runs"
        ])
      },
      {
        name: "List Management",
        slug: "lists",
        icon: "ListChecks",
        description: "Segmentation, hygiene, deliverability monitoring",
        order: 4,
        guide: `## What Is Email List Management?\n\nList management encompasses how you organize, segment, clean, and maintain your email contact database. It includes segmentation strategy, bounce and complaint handling, hygiene processes, and deliverability monitoring. A clean, well-segmented list is the foundation of every email marketing tactic.\n\n## Why It Matters\n\nPoor list management silently destroys email performance:\n- Sending to invalid emails increases bounce rate → ESPs flag you as spam\n- Unsegmented blasts get lower engagement → lower deliverability for everyone\n- A 2% complaint rate can get your domain blacklisted by Gmail and Outlook\n- Every 6 months, 25% of your list decays (people change jobs, emails go stale)\n- For SMAART, email is a primary nurture channel — if emails do not get delivered, leads go cold\n\n## Implementation Steps\n\n1. **Segmentation Architecture**: Create these segments in GoHighLevel:\n   - By Status: Active Client, Lead, Prospect, Former Client, Dormant\n   - By Service Interest: Insurance, Tax, Advisory, Payroll\n   - By Source: Website form, Referral, Event, Ad campaign\n   - By Engagement: Highly engaged (opened 3+ in 30d), Moderately engaged, Disengaged\n\n2. **Hygiene Schedule** (Monthly):\n   - Remove hard bounces immediately\n   - Flag soft bounces after 3 consecutive failures\n   - Run email verification on new imports (use NeverBounce or ZeroBounce)\n   - Suppress role addresses (info@, admin@, sales@)\n\n3. **Deliverability Monitoring**:\n   - Set up DMARC, DKIM, and SPF records for smaartcompany.com\n   - Monitor inbox placement using GlockApps or MailTester\n   - Track open rates by ESP (Gmail, Outlook, Yahoo) — if one drops, investigate\n   - Keep complaint rate below 0.1%\n\n4. **Preference Center**: Give contacts control over email frequency and topics. A preference center reduces unsubscribes by 35%.\n\n## Pro Tips\n\n- Never buy email lists — purchased lists have 90%+ invalid addresses and will destroy your sender reputation\n- Double opt-in is worth the friction — it ensures only real, interested contacts enter your system\n- Warm up new sending domains/IPs slowly: 100 emails day 1, doubling every 2-3 days\n- Track "list growth rate" monthly: (new subscribers - unsubscribes - bounces) / total list size`,
        defaultTasks: JSON.stringify([
          "Set up segmentation architecture in GoHighLevel",
          "Run email verification on entire existing list",
          "Configure DMARC, DKIM, and SPF records for smaartcompany.com",
          "Set up monthly list hygiene automation (bounces, inactive contacts)",
          "Build subscriber preference center on smaartcompany.com"
        ])
      },
      {
        name: "A/B Testing",
        slug: "email-testing",
        icon: "FlaskConical",
        description: "Subject lines, send times, CTAs, content testing",
        order: 5,
        guide: `## What Is Email A/B Testing?\n\nA/B testing (split testing) sends two variations of an email to small segments of your list, measures which performs better, then sends the winner to the remaining list. For SMAART, this means systematically testing subject lines, send times, CTAs, email layouts, and content to continuously improve email performance.\n\n## Why It Matters\n\nSmall improvements in email metrics compound into massive results:\n- A 5% improvement in open rate across 10,000 contacts = 500 more people seeing your message\n- A 2% improvement in click rate = 200 more people visiting your landing page\n- Over 12 months of consistent testing, you can double email-driven leads\n- Without testing, you are guessing — and your assumptions are usually wrong\n\n## Implementation Steps\n\n1. **Testing Hierarchy** (test in this order for maximum impact):\n   - Subject Lines (biggest impact on open rate — test first)\n   - Send Time/Day (when your audience checks email)\n   - CTA (button text, color, placement)\n   - Email Layout (text-only vs designed, long vs short)\n   - From Name (brand name vs person name)\n\n2. **Subject Line Testing**: For every broadcast email, create 2 subject line variants:\n   - Variant A: Benefit-driven ("Save 20% on Your 2026 Tax Prep")\n   - Variant B: Curiosity-driven ("The tax mistake costing South Florida businesses thousands")\n   - Send A to 15% of list, B to 15%, winner to remaining 70%\n\n3. **Send Time Testing**: Test 4 time slots over 4 weeks:\n   - Tuesday 8 AM, Tuesday 12 PM, Thursday 8 AM, Thursday 12 PM\n   - Track open rate AND click rate for each slot\n\n4. **CTA Testing**: Test button text ("Book Free Consultation" vs "Get Started" vs "Talk to an Expert"), color (brand blue vs green vs orange), and position (top vs bottom vs both).\n\n5. **Documentation**: Keep a testing log with test name, date, variants, results, and learnings. Review quarterly to build a library of what works for SMAART's audience.\n\n## Pro Tips\n\n- Test ONE variable at a time — if you change both subject line and layout, you do not know which caused the difference\n- Need at least 1,000 recipients per variant for statistically significant results\n- Do not over-test — one test per email, one email per test\n- GoHighLevel supports A/B testing natively — use the built-in split test feature for subject lines`,
        defaultTasks: JSON.stringify([
          "Set up A/B testing framework in GoHighLevel",
          "Create subject line testing protocol (2 variants per email)",
          "Run send time optimization test over 4 weeks",
          "Test CTA variations on next 3 broadcast emails",
          "Create testing log spreadsheet for documenting results"
        ])
      },
    ],
    bestPractices: []
  },
  {
    name: "Tracking System",
    slug: "tracking",
    icon: "Activity",
    description: "5-layer tracking architecture — the nervous system of the entire plan",
    category: "operations",
    status: "not_started",
    progress: 0,
    order: 12,
    modules: [
      {
        name: "GTM Configuration",
        slug: "gtm",
        icon: "Code",
        description: "Google Tag Manager: pixel firing rules, triggers, variables",
        order: 1,
        guide: `## What Is GTM Configuration?\n\nGoogle Tag Manager (GTM) is a free tag management system that lets you install and manage all your tracking pixels, conversion tags, and analytics code from one central interface — without editing website code directly. GTM uses a container (installed once), tags (code snippets), triggers (when to fire), and variables (data to capture).\n\nFor SMAART, GTM is the control center for all tracking. Every pixel (Meta, Google, LinkedIn, X) and every conversion event fires through GTM.\n\n## Why It Matters\n\nWithout GTM, tracking becomes chaotic:\n- Adding or updating pixels requires developer time and code deployments\n- Debugging tracking issues means digging through website source code\n- You have no version control — if something breaks, you cannot roll back\n- GTM gives marketers independence from developers for tracking changes\n- With GTM, you can deploy a new conversion tag in 5 minutes instead of 5 days\n\n## Implementation Steps\n\n1. **GTM Account Setup**: Create a GTM account at tagmanager.google.com. Create a container for smaartcompany.com. Install the container code in the <head> and <body> of every page.\n\n2. **Core Tags to Install**:\n   - Google Analytics 4 (GA4) — Track all pageviews, events, and conversions\n   - Meta Pixel — Base code + standard events (PageView, Lead, Contact)\n   - Google Ads Conversion Tracking — Form submissions and calls\n   - LinkedIn Insight Tag — B2B conversion tracking\n   - X (Twitter) Pixel — Event tracking\n\n3. **Trigger Configuration**:\n   - All Pages (for base pixel codes)\n   - Form Submission (for conversion events — use form ID or thank-you page URL)\n   - Phone Number Click (for call tracking)\n   - Scroll Depth (for content engagement)\n   - Video Play (if you have video content)\n\n4. **Variables Setup**:\n   - Page URL, Page Path, Click URL, Click Text\n   - Form field values (for dynamic conversion data)\n   - Data Layer variables (for custom events)\n\n5. **Testing**: Use GTM's Preview Mode to test every tag before publishing. Verify in real-time that tags fire on the correct pages and events. Cross-check with browser extensions (Meta Pixel Helper, Google Tag Assistant).\n\n## Pro Tips\n\n- Always use Preview Mode before publishing — a broken tag can kill all your tracking\n- Name tags clearly: "[Platform] - [Event] - [Trigger]" e.g., "Meta - Lead - Form Submit"\n- Set up a workspace for testing changes, separate from the production workspace\n- Enable consent mode integration so GTM respects your cookie consent banner`,
        defaultTasks: JSON.stringify([
          "Create GTM account and install container on smaartcompany.com",
          "Configure all pixel tags (GA4, Meta, Google Ads, LinkedIn, X)",
          "Set up form submission and phone click triggers",
          "Create variables for URL, form data, and data layer",
          "Test all tags in Preview Mode before publishing",
          "Document tag naming convention for the team"
        ])
      },
      {
        name: "UTM Framework",
        slug: "utms",
        icon: "Link",
        description: "Naming conventions, URL builder, campaign tagging standards",
        order: 2,
        guide: `## What Is a UTM Framework?\n\nUTM parameters are tags appended to URLs that tell analytics tools where traffic came from. A UTM framework is your standardized naming convention for these tags — ensuring every campaign, ad, and link across all channels is tracked consistently in Google Analytics and your CRM.\n\nFor SMAART, a clean UTM framework means you can answer "which campaign generated this lead?" for every single contact in GoHighLevel.\n\n## Why It Matters\n\nWithout UTM discipline:\n- Google Analytics shows all Facebook traffic as "facebook.com / referral" — no campaign details\n- You cannot distinguish paid vs organic traffic from the same platform\n- GoHighLevel shows "web form" as the source with no campaign context\n- When leadership asks "what generated these leads?", you are guessing\n- UTMs are the connective tissue between ad spend and CRM pipeline\n\n## Implementation Steps\n\n1. **Naming Convention** (use lowercase, underscores instead of spaces):\n   - utm_source: Platform name — meta, google, linkedin, x, email, partner\n   - utm_medium: Traffic type — cpc, cpm, social, email, referral\n   - utm_campaign: Campaign name — tax_season_2026, insurance_awareness_q1, retargeting_30d\n   - utm_content: Ad/creative identifier — static_pas_v1, video_ugc_v2, thread_5_tips\n   - utm_term: Keyword (for search) — business_insurance_miami\n\n2. **URL Builder Tool**: Create a Google Sheet URL builder that the team uses for every link. Columns: Destination URL, Source, Medium, Campaign, Content, Term, Generated URL. Share with everyone who touches campaigns.\n\n3. **Platform Implementation**:\n   - Meta Ads: Use UTM parameters in the URL Parameters field at the ad level\n   - Google Ads: Use auto-tagging (gclid) + manual UTMs for backup\n   - Email: Add UTMs to every link in every email\n   - Social organic: Add UTMs to bio links and post links\n\n4. **CRM Integration**: Configure GoHighLevel to capture UTM parameters from form submissions. Map utm_source to "Lead Source," utm_campaign to "Campaign," and utm_content to "Ad Variant."\n\n## Pro Tips\n\n- NEVER use spaces or capital letters in UTMs — "Meta" and "meta" are two different sources in GA4\n- Create a UTM audit checklist — before any campaign launches, verify UTMs are correct\n- Use URL shorteners (Bitly, Rebrandly) for social posts to hide long UTM strings\n- Review GA4 Campaign report weekly to catch UTM errors (misspellings, inconsistencies)`,
        defaultTasks: JSON.stringify([
          "Define SMAART UTM naming conventions document",
          "Build Google Sheet URL builder tool for the team",
          "Configure UTM capture in GoHighLevel forms",
          "Apply UTMs to all active Meta and Google campaigns",
          "Set up GA4 Campaign report for weekly UTM monitoring"
        ])
      },
      {
        name: "Call Tracking",
        slug: "calls",
        icon: "Phone",
        description: "CallRail setup, dynamic number insertion, call attribution",
        order: 3,
        guide: `## What Is Call Tracking?\n\nCall tracking assigns unique phone numbers to different marketing channels so you can attribute inbound calls to specific campaigns. Dynamic Number Insertion (DNI) automatically swaps the phone number on your website based on how the visitor arrived — showing different numbers for Google Ads, Meta, organic, and direct traffic.\n\nFor SMAART, many prospects prefer to call rather than fill out forms — especially for insurance and high-touch services. Without call tracking, those conversions are invisible to your marketing attribution.\n\n## Why It Matters\n\nFor professional services, phone calls are often the highest-quality leads:\n- 65% of B2B purchases involve a phone call before close\n- Inbound calls convert at 30-50% vs 2-5% for form submissions\n- Without call tracking, you might be attributing $10,000/month in calls to "direct" traffic when they actually came from Google Ads\n- Call recording enables quality monitoring and sales coaching\n\n## Implementation Steps\n\n1. **CallRail Setup**: Create account at callrail.com ($45/month starter plan). Purchase tracking numbers for South Florida area codes (305, 786, 954, 561).\n\n2. **Tracking Number Pool**: Create a pool of 6-10 numbers for dynamic insertion on smaartcompany.com. Each visitor gets a unique number that ties their call back to their traffic source.\n\n3. **Channel-Specific Numbers**: Assign dedicated numbers to:\n   - Google Ads campaigns (one number per major campaign)\n   - Meta Ads (one number for all Meta)\n   - Google Business Profile\n   - Print/offline materials\n\n4. **Dynamic Number Insertion**: Install CallRail's JavaScript snippet on smaartcompany.com. Configure it to replace the displayed phone number based on UTM source. Visitor from Google Ads sees one number, visitor from Meta sees another.\n\n5. **Integration**: Connect CallRail to GoHighLevel via Zapier — automatically create a contact and log the call when someone calls a tracking number. Include source, campaign, duration, and recording link.\n\n## Pro Tips\n\n- Enable call recording for quality assurance (check Florida's two-party consent law — you need verbal consent or a pre-call announcement)\n- Set up "whisper messages" so the person answering knows which campaign the call came from\n- Track call duration — calls over 60 seconds are typically qualified leads\n- Upload phone call conversions to Google Ads and Meta monthly for algorithm optimization`,
        defaultTasks: JSON.stringify([
          "Set up CallRail account and purchase South Florida tracking numbers",
          "Install Dynamic Number Insertion on smaartcompany.com",
          "Assign dedicated tracking numbers to each major ad channel",
          "Connect CallRail to GoHighLevel via Zapier",
          "Configure call recording with consent announcement",
          "Set up monthly call conversion upload to Google Ads and Meta"
        ])
      },
      {
        name: "CRM Attribution",
        slug: "crm-attribution",
        icon: "GitBranch",
        description: "GoHighLevel source tracking, pipeline attribution",
        order: 4,
        guide: `## What Is CRM Attribution?\n\nCRM attribution connects every contact and deal in GoHighLevel back to the marketing touchpoint that created or influenced it. This means knowing that Client X came from a Google Ads campaign, downloaded a tax checklist, received 3 nurture emails, then booked a consultation — and SMAART can attribute revenue to the right channels.\n\n## Why It Matters\n\nCRM attribution answers the most important marketing question: "What is our return on ad spend?"\n- Without it, you know how much you spent but not what you got\n- Revenue attribution justifies marketing budget to leadership (Ray and Gus)\n- It reveals which channels produce the highest-LTV clients (not just the most leads)\n- It enables smart budget reallocation from low-performing to high-performing channels\n\n## Implementation Steps\n\n1. **Source Tracking Fields**: Add custom fields in GoHighLevel:\n   - First Touch Source (how they first found SMAART)\n   - First Touch Campaign (which specific campaign)\n   - First Touch Medium (paid, organic, referral)\n   - Last Touch Source (what drove the conversion)\n   - Last Touch Campaign\n\n2. **Automation Setup**: Create GoHighLevel workflows that automatically populate these fields based on UTM parameters captured from form submissions. Map utm_source → First Touch Source, utm_campaign → First Touch Campaign.\n\n3. **Pipeline Attribution**: In each pipeline stage, add required fields for source tracking. When a deal is created, the source fields should auto-populate from the contact record.\n\n4. **Revenue Attribution Report**: Build a monthly report that shows:\n   - Revenue by First Touch Source (which channel brings the most revenue)\n   - Revenue by Campaign (which campaigns are most profitable)\n   - Time to Close by Source (which channels close fastest)\n   - Client LTV by Source (which channels bring the best long-term clients)\n\n5. **Multi-Touch Attribution**: For sophisticated analysis, implement a simple multi-touch model: 40% credit to first touch, 40% to last touch, 20% distributed across middle touches.\n\n## Pro Tips\n\n- First-touch attribution answers "what channel brings people in?" Last-touch answers "what closes deals?" You need both.\n- Schedule a monthly "Attribution Review" meeting with the team to review which channels are actually driving revenue\n- When a referral comes in, still tag the original marketing touchpoint that brought the referrer\n- Export attribution data quarterly to a spreadsheet for trend analysis — GoHighLevel reporting has limitations`,
        defaultTasks: JSON.stringify([
          "Create custom source tracking fields in GoHighLevel",
          "Build automation workflows for UTM-to-field mapping",
          "Add source fields to all pipeline stages",
          "Create monthly revenue attribution report template",
          "Schedule monthly attribution review meeting with team"
        ])
      },
      {
        name: "Offline Conversions",
        slug: "offline",
        icon: "Upload",
        description: "Upload closed deals back to Meta/Google for optimization",
        order: 5,
        guide: `## What Are Offline Conversion Uploads?\n\nOffline conversion uploads send your actual business results (closed deals, signed clients, revenue) back to advertising platforms. When SMAART signs a new client who originally came from a Meta ad, uploading that conversion tells Meta "this type of person converts into a paying client" — enabling the algorithm to find more people like them.\n\n## Why It Matters\n\nWithout offline conversion uploads, ad platforms optimize for leads (form submissions). But not all leads are equal — some become $50k/year clients, others never respond to the first call. Offline conversions teach the algorithm the difference:\n- Meta and Google can optimize for actual revenue, not just clicks\n- Your bidding algorithms get 30-50% better at finding high-quality prospects\n- You can measure true ROAS (ad spend vs actual revenue), not estimated ROAS\n- It closes the loop between marketing spend and business outcomes\n\n## Implementation Steps\n\n1. **Data Preparation**: Export closed deals from GoHighLevel monthly with:\n   - Email address and/or phone number (for matching)\n   - Conversion date (when the deal closed)\n   - Conversion value (annual contract value)\n   - Event name (e.g., "Closed Won")\n\n2. **Meta Offline Conversions**:\n   - Go to Events Manager → Offline Events → Create Offline Event Set\n   - Upload CSV with hashed emails, conversion dates, and values\n   - Or automate via Conversions API (CAPI) for real-time uploads\n\n3. **Google Ads Offline Conversions**:\n   - Import conversions via Google Click ID (GCLID)\n   - Store GCLID in GoHighLevel when a lead submits a form from a Google Ad\n   - Upload GCLID + conversion date + value monthly\n\n4. **Automation**: Set up a Zapier workflow — when a GoHighLevel deal moves to "Closed Won," automatically format and queue the conversion for upload to Meta and Google.\n\n5. **Validation**: After the first upload, check match rates. Meta should match 50-70% of contacts. Google should match 80%+ (if using GCLID). Low match rates indicate data quality issues.\n\n## Pro Tips\n\n- Upload within 7-14 days of the conversion for maximum algorithm learning benefit\n- Include conversion VALUE, not just the conversion event — this enables Value-Based Bidding\n- Start uploading even if you only have 10-20 conversions/month — every data point helps\n- Use Enhanced Conversions (Google) and Advanced Matching (Meta) for higher match rates without manual uploads`,
        defaultTasks: JSON.stringify([
          "Set up Offline Event Set in Meta Events Manager",
          "Configure GCLID capture in GoHighLevel forms",
          "Create monthly offline conversion export process",
          "Build Zapier automation for real-time conversion uploads",
          "Validate match rates after first upload (target 50%+ Meta, 80%+ Google)"
        ])
      },
    ],
    bestPractices: []
  },
  {
    name: "Analytics Dashboard",
    slug: "analytics",
    icon: "BarChart3",
    description: "6 Looker Studio dashboards — your marketing command center",
    category: "operations",
    status: "not_started",
    progress: 0,
    order: 13,
    modules: [
      {
        name: "Executive Overview",
        slug: "exec-dashboard",
        icon: "Gauge",
        description: "KPIs, channel performance, pipeline, revenue attribution",
        order: 1,
        guide: `## What Is the Executive Dashboard?\n\nThe Executive Dashboard is a single-page Looker Studio report that gives Ray, Gus, and the leadership team a real-time view of marketing performance. It answers three questions: "How much did we spend?", "How many leads did we get?", and "What is the revenue impact?"\n\n## Why It Matters\n\nThe executive dashboard is how marketing proves its value:\n- Leadership does not have time to dig through Meta Ads Manager or Google Analytics\n- A single dashboard prevents the "are ads working?" question by making the answer always visible\n- It aligns the team on the same metrics and definitions\n- It enables data-driven budget decisions instead of gut feelings\n\n## Implementation Steps\n\n1. **Data Sources**: Connect to Looker Studio:\n   - Google Analytics 4 (website traffic, behavior)\n   - Google Ads (search, display, YouTube spend and conversions)\n   - Meta Ads (via Supermetrics or Funnel.io connector)\n   - GoHighLevel (leads, pipeline, revenue — via Google Sheets export or API)\n   - CallRail (phone leads)\n\n2. **KPI Scorecard** (top of dashboard):\n   - Total Marketing Spend (MTD and vs budget)\n   - Total Leads Generated (MTD)\n   - Cost Per Lead (CPL) — overall and by channel\n   - Pipeline Value (open deals)\n   - Closed Revenue (attributed to marketing)\n   - ROAS (Revenue / Ad Spend)\n\n3. **Channel Performance Table**: Columns = Channel, Spend, Leads, CPL, Conversion Rate, Revenue. Rows = Meta, Google Search, Google Display, YouTube, CTV, Email, Referral, Organic.\n\n4. **Trend Charts**: Line charts showing weekly trends for Spend, Leads, CPL, and Pipeline. Include month-over-month comparison.\n\n5. **Date Filters**: Allow filtering by date range, channel, and campaign for drill-down analysis.\n\n## Pro Tips\n\n- Update data sources daily — stale dashboards lose credibility fast\n- Include a "Last Updated" timestamp so viewers know the data is fresh\n- Add conditional formatting: green when CPL is below target, red when above\n- Keep the executive dashboard to ONE page — additional detail goes in channel-specific dashboards\n- Schedule automatic PDF email to leadership every Monday morning`,
        defaultTasks: JSON.stringify([
          "Set up Looker Studio account and connect GA4",
          "Connect Google Ads and Meta Ads data sources",
          "Build KPI scorecard with 6 core metrics",
          "Create channel performance comparison table",
          "Add weekly trend charts and date filters",
          "Schedule automated Monday morning email report"
        ])
      },
      {
        name: "Channel Performance",
        slug: "channel-dashboard",
        icon: "BarChart3",
        description: "Deep metrics per channel: Google, Meta, X, CTV, geo",
        order: 2,
        guide: `## What Is the Channel Performance Dashboard?\n\nThe Channel Performance Dashboard provides deep-dive metrics for each advertising channel — separate pages or sections for Meta, Google Search, Google Display, YouTube, CTV, Geofencing, and X. It shows the full funnel from impression to closed deal for each channel.\n\n## Why It Matters\n\nThe executive dashboard shows what is happening across channels. The channel dashboard shows why:\n- Which Meta campaigns are driving leads and which are wasting money?\n- Which Google keywords have the best conversion rate?\n- Is CTV driving measurable website traffic lift?\n- Should we increase X spend or redirect it to Meta?\n- Channel-level data enables precise budget optimization\n\n## Implementation Steps\n\n1. **Meta Ads Page**: Metrics by campaign, ad set, and ad:\n   - Spend, Impressions, Reach, Frequency\n   - CTR, CPC, CPM\n   - Leads, Cost Per Lead, Conversion Rate\n   - Breakdown by: Campaign, Audience, Creative\n\n2. **Google Ads Page**: Separate sections for Search, Display, YouTube:\n   - Search: Keyword performance, Quality Score, impression share, CPC, conversions\n   - Display: Placement performance, audience segment performance, viewability\n   - YouTube: View rate, completion rate, CPA, view-through conversions\n\n3. **CTV & Audio Page**:\n   - Impressions delivered, completion rate, frequency\n   - Website traffic lift during campaign flight vs baseline\n   - Branded search volume correlation\n\n4. **Geofencing Page**:\n   - Impressions by zone, CTR by zone, foot traffic attribution\n   - Cost per visit, conversion from zone exposure to website visit\n\n5. **Cross-Channel Comparison**: A summary page showing all channels side-by-side on: CPL, Conversion Rate, ROAS, Lead Quality Score.\n\n## Pro Tips\n\n- Use Supermetrics or Funnel.io to pull Meta Ads data into Looker Studio automatically\n- Include "Lead Quality" indicators — not just quantity. A Meta lead at $20 CPL that never converts is worse than a Google lead at $80 CPL that closes.\n- Add week-over-week change indicators (arrows up/down) for quick trend spotting\n- Review the channel dashboard every Wednesday to make Thursday optimization decisions`,
        defaultTasks: JSON.stringify([
          "Build Meta Ads deep-dive page in Looker Studio",
          "Create Google Ads page with Search, Display, YouTube sections",
          "Add CTV and Audio performance tracking page",
          "Build cross-channel comparison summary view",
          "Set up Supermetrics or Funnel.io connectors for data automation"
        ])
      },
      {
        name: "Lead & Pipeline",
        slug: "pipeline-dashboard",
        icon: "Workflow",
        description: "Real-time lead flow, conversion rates, speed to contact",
        order: 3,
        guide: `## What Is the Lead & Pipeline Dashboard?\n\nThe Lead & Pipeline Dashboard tracks every lead from first touch through each stage of your GoHighLevel pipeline to closed deal. It shows lead volume, conversion rates between stages, speed to first contact, and pipeline value — making it the operational heartbeat of your sales process.\n\n## Why It Matters\n\nMarketing generates leads, but the pipeline dashboard reveals whether those leads become revenue:\n- If leads are coming in but not progressing, there is a sales process problem\n- If speed to contact is slow (>30 minutes), leads are going cold and you are wasting ad spend\n- Stage conversion rates reveal exactly where leads drop off — that is where to focus improvement\n- Pipeline value forecasting helps predict revenue 30-60-90 days out\n\n## Implementation Steps\n\n1. **Lead Volume Tracking**:\n   - New leads per day/week/month (total and by source)\n   - Lead trend chart (are we growing?)\n   - Lead source breakdown (pie chart: Google, Meta, Referral, Organic, Email)\n\n2. **Pipeline Funnel Visualization**:\n   - Stage 1: New Lead → Stage 2: Contacted → Stage 3: Qualified → Stage 4: Proposal Sent → Stage 5: Closed Won / Lost\n   - Show count and conversion rate at each stage\n   - Highlight bottleneck stages (where conversion rate drops below 50%)\n\n3. **Speed to Contact**:\n   - Average time from lead creation to first contact (target: <5 minutes)\n   - Distribution chart: % contacted in <5 min, 5-30 min, 30-60 min, >1 hour\n   - Speed to contact by source (are some channels getting faster response?)\n\n4. **Pipeline Value**:\n   - Total open pipeline value (sum of all active deals)\n   - Weighted pipeline (deal value x stage probability)\n   - Expected close this month, next month, 90 days\n\n5. **Lead Quality Scoring**: Assign quality scores based on engagement (emails opened, pages visited, calls answered) and display average quality by source.\n\n## Pro Tips\n\n- Speed to contact is the single most impactful metric to improve — going from 30 minutes to 5 minutes can double conversion rates\n- Set up GoHighLevel alerts for any lead not contacted within 10 minutes\n- Track "pipeline velocity" — average days from new lead to closed deal — and work to reduce it\n- Include a "Lost Deal Reasons" breakdown to inform marketing messaging (price, timing, went to competitor, etc.)`,
        defaultTasks: JSON.stringify([
          "Connect GoHighLevel pipeline data to Looker Studio",
          "Build lead volume and source breakdown visualizations",
          "Create pipeline funnel with stage conversion rates",
          "Add speed-to-contact tracking and alerts",
          "Build pipeline value forecast (30/60/90 day)",
          "Set up GoHighLevel alert for leads not contacted within 10 minutes"
        ])
      },
      {
        name: "Email Dashboard",
        slug: "email-dashboard",
        icon: "Mail",
        description: "Campaign metrics, sequence performance, list health",
        order: 4,
        guide: `## What Is the Email Dashboard?\n\nThe Email Dashboard tracks the performance of all email marketing activity — broadcast campaigns, automated sequences, and transactional emails. It shows delivery rates, open rates, click rates, conversion rates, and list health metrics across all email activity in GoHighLevel.\n\n## Why It Matters\n\nEmail is your highest-ROI channel ($36 return for every $1 spent on average), but only if you monitor and optimize it:\n- Declining open rates signal deliverability issues before they become critical\n- Sequence completion rates reveal where leads lose interest\n- Unsubscribe trends warn of content problems\n- List growth rate indicates whether your lead generation is outpacing list decay\n\n## Implementation Steps\n\n1. **Campaign Performance Section**:\n   - Table: Campaign name, Send date, Recipients, Open rate, Click rate, Unsubscribe rate, Conversions\n   - Benchmark lines: Industry average open rate (20%), click rate (2.5%)\n   - Highlight campaigns that beat or miss benchmarks\n\n2. **Sequence Performance Section**:\n   - Table: Sequence name, Total enrolled, Completion rate, Open rate by email position, Drop-off point\n   - Funnel visualization showing how many contacts reach each email in the sequence\n\n3. **List Health Metrics**:\n   - Total list size and growth trend\n   - Active vs inactive contacts (percentage)\n   - Bounce rate (hard and soft)\n   - Complaint rate (target: <0.1%)\n   - Unsubscribe rate trend\n\n4. **A/B Test Results**: Log of all completed A/B tests with winning variants and lift percentages.\n\n5. **Revenue Attribution**: For emails that drove form submissions or consultations, show estimated pipeline value created by email marketing.\n\n## Pro Tips\n\n- Track "revenue per email sent" as your north star metric — it captures both engagement and conversion\n- Set up automated alerts: open rate drops below 15%, complaint rate exceeds 0.08%\n- Compare GoHighLevel email stats to a third-party tool (GlockApps) monthly — GHL metrics can be inflated by email preloading\n- Dashboard should auto-update daily — stale email data is useless`,
        defaultTasks: JSON.stringify([
          "Build email campaign performance table in Looker Studio",
          "Create sequence funnel visualization with drop-off analysis",
          "Add list health metrics (growth, bounces, complaints)",
          "Set up automated alerts for deliverability issues",
          "Connect email-driven conversion tracking to pipeline data"
        ])
      },
      {
        name: "Alerts Configuration",
        slug: "alerts",
        icon: "Bell",
        description: "Budget overspend, CPL spike, conversion drop alerts",
        order: 5,
        guide: `## What Are Marketing Alerts?\n\nMarketing alerts are automated notifications that fire when key metrics exceed thresholds — budget overspend, cost per lead spikes, conversion rate drops, or unusual activity. They enable proactive management instead of discovering problems during weekly reviews.\n\nFor SMAART, alerts are the early warning system that prevents wasted spend and catches issues within hours instead of days.\n\n## Why It Matters\n\nWithout alerts, problems compound:\n- A broken conversion pixel means 5 days of ads optimizing for nothing before you notice in the weekly report\n- A budget overspend on Friday evening goes unchecked until Monday morning\n- A CPL spike from a competitor entering your market drains budget silently\n- A deliverability issue causes 3 email campaigns to land in spam before anyone checks\n- Alerts turn marketing from reactive to proactive\n\n## Implementation Steps\n\n1. **Budget Alerts**:\n   - Daily spend exceeds 120% of daily budget → Slack/email alert immediately\n   - Weekly spend pacing above 110% of weekly budget → Monday morning alert\n   - Monthly spend hits 80% of monthly budget → mid-month alert\n\n2. **Performance Alerts**:\n   - CPL exceeds 2x target for 2 consecutive days → investigate immediately\n   - Conversion rate drops below 50% of 30-day average → check tracking\n   - CTR drops below 50% of 30-day average → creative fatigue signal\n   - No conversions for 48 hours on any active campaign → tracking audit\n\n3. **Email Alerts**:\n   - Bounce rate exceeds 3% on any send → list hygiene issue\n   - Complaint rate exceeds 0.08% → content or targeting problem\n   - Open rate drops below 12% → deliverability investigation\n\n4. **Implementation Tools**:\n   - Google Ads: Use automated rules (Tools → Rules) for budget and CPA alerts\n   - Meta Ads: Set up automated rules in Ads Manager → Automated Rules\n   - Email: GoHighLevel automation workflows triggered by metric thresholds\n   - Custom: Zapier or Make.com to monitor data sources and send Slack alerts\n\n5. **Response Protocol**: Document what to do when each alert fires — who investigates, what to check first, and when to pause campaigns.\n\n## Pro Tips\n\n- Start with 5-8 critical alerts, not 50 — alert fatigue causes people to ignore everything\n- Send alerts to a dedicated Slack channel, not personal DMs — team visibility\n- Include context in the alert: "Meta CPL is $85 (target: $40) — Campaign: Insurance Prospecting Q1"\n- Review and adjust thresholds monthly as your baselines change`,
        defaultTasks: JSON.stringify([
          "Configure budget overspend alerts in Google Ads and Meta",
          "Set up CPL and conversion rate alerts with 2x threshold",
          "Create email deliverability alerts in GoHighLevel",
          "Build Slack channel for marketing alerts",
          "Document alert response protocol for the team"
        ])
      },
    ],
    bestPractices: []
  },
  {
    name: "Ad Creative Playbook",
    slug: "creative-playbook",
    icon: "Paintbrush",
    description: "World-class frameworks from Ogilvy, VaynerMedia, Droga5, BBDO, Meta",
    category: "intelligence",
    status: "not_started",
    progress: 0,
    order: 14,
    modules: [
      {
        name: "Creative Audit Tool",
        slug: "audit-tool",
        icon: "ClipboardCheck",
        description: "Score every ad on 8 dimensions before launch (minimum 60/80)",
        order: 1,
        guide: `## What Is the Creative Audit Tool?\n\nThe Creative Audit Tool is a scoring system that evaluates every SMAART ad against 8 research-backed dimensions before it launches. Each dimension is scored 1-10, for a total possible score of 80. Minimum launch threshold is 60/80. Any ad below 60 gets revised before spending a single dollar.\n\n## Why It Matters\n\n70-80% of ad performance is determined by creative quality (Meta research). Yet most companies never systematically evaluate their creative before launch:\n- It prevents "we thought it looked good" from becoming an excuse for poor results\n- It creates a shared quality standard across the team\n- It catches fatal creative flaws (missing CTA, wrong format, weak hook) before budget is wasted\n- Over time, it builds organizational knowledge about what works for SMAART's audience\n\n## Implementation Steps\n\n1. **The 8 Scoring Dimensions** (each scored 1-10):\n   - **Hook Power**: Does the first 1-3 seconds (video) or headline (static) stop the scroll?\n   - **Benefit Clarity**: Is the main benefit obvious within 2 seconds of viewing?\n   - **Visual Quality**: Professional, on-brand, platform-optimized (correct dimensions, contrast, readability)?\n   - **Emotional Resonance**: Does it trigger an emotion (fear, aspiration, relief, curiosity)?\n   - **Social Proof**: Does it include testimonials, stats, logos, or trust signals?\n   - **CTA Strength**: Is the call-to-action clear, specific, and compelling?\n   - **Brand Consistency**: Does it match SMAART's brand voice, colors, and positioning?\n   - **Platform Fit**: Is it designed for the specific platform (4:5 for Meta Feed, 9:16 for Reels, etc.)?\n\n2. **Scoring Process**: Before any ad launches:\n   - Creator self-scores the ad\n   - One team member provides a peer score\n   - Average the two scores\n   - Below 60: Revise. 60-70: Acceptable. 70+: Strong. 75+: Exceptional — increase budget.\n\n3. **Score Tracking**: Log every ad's score in a spreadsheet alongside its performance data. After 30 ads, correlate scores with actual CPL/ROAS to validate the scoring system.\n\n4. **Monthly Review**: Review the top 5 and bottom 5 scoring ads each month. What patterns emerge? Use insights to update creative guidelines.\n\n## Pro Tips\n\n- The scoring system is most valuable when used consistently, not perfectly — a rough score is better than no score\n- Weight the dimensions based on your data: if "Hook Power" correlates most with performance, give it 2x weight\n- Print the 8 dimensions on a card and keep it at every workstation\n- Use the audit tool for competitor ads too — score their creative to identify weaknesses you can exploit`,
        defaultTasks: JSON.stringify([
          "Build Creative Audit Scorecard (8 dimensions, 1-10 scale)",
          "Create scoring template in Google Sheets",
          "Score all current live SMAART ads with the audit tool",
          "Set minimum launch threshold at 60/80 for all new creative",
          "Set up monthly creative review process"
        ])
      },
      {
        name: "3x3 Testing Matrix",
        slug: "testing-matrix",
        icon: "Grid3x3",
        description: "3 headlines × 3 visuals = 9 variants per campaign test",
        order: 2,
        guide: `## What Is the 3x3 Testing Matrix?\n\nThe 3x3 Testing Matrix is a structured approach to creative testing: 3 different headlines paired with 3 different visuals creates 9 unique ad variants. Each variant tests a specific combination, allowing you to isolate which headlines and which visuals perform best — and why.\n\n## Why It Matters\n\nRandom creative testing wastes budget and teaches you nothing. The 3x3 matrix:\n- Systematically tests the two most impactful creative elements (headline and visual)\n- Produces statistically valid results with small budgets ($300-500 per test)\n- Reveals winning COMBINATIONS, not just winning individual elements\n- Creates a learning loop — each test informs the next round of creative\n- Ogilvy's principle: "Test everything. The most important word in advertising is TEST."\n\n## Implementation Steps\n\n1. **Choose 3 Headline Angles**:\n   - Benefit: "Protect Your Business — SMAART Insurance for South Florida Companies"\n   - Question: "Is Your Business Properly Insured? Most Aren't."\n   - Social Proof: "500+ South Florida Businesses Trust SMAART for Year-Round Protection"\n\n2. **Choose 3 Visual Approaches**:\n   - Team Photo: Real SMAART team members (builds trust)\n   - Bold Text Overlay: Key message in large text on branded background (stops scroll)\n   - Client Result: Testimonial card or before/after metric (proves value)\n\n3. **Create 9 Combinations**: Headline A + Visual 1, Headline A + Visual 2, Headline A + Visual 3, Headline B + Visual 1... etc.\n\n4. **Test Execution**:\n   - Run all 9 variants in one ad set with equal budget\n   - Set budget at $30-50/day for the ad set ($3-5 per variant per day)\n   - Run for 7-10 days minimum\n   - Primary metric: Cost Per Lead. Secondary: CTR, Conversion Rate.\n\n5. **Analysis**: After the test period:\n   - Identify the winning combination (lowest CPL with volume)\n   - Identify the winning headline (average performance across all 3 visuals)\n   - Identify the winning visual (average performance across all 3 headlines)\n   - Use winners in the next campaign; replace losers with new variants\n\n## Pro Tips\n\n- Run 3x3 tests monthly to continuously find winning creative\n- Keep body copy and CTA identical across all 9 variants — only change headline and visual\n- After 3 rounds of testing, you will have a clear picture of what headlines and visuals work for SMAART\n- Document every test result in a "Creative Learnings" log for team reference`,
        defaultTasks: JSON.stringify([
          "Define 3 headline angles for the first test round",
          "Create 3 visual approaches (team photo, text overlay, testimonial)",
          "Build 9 ad combinations and upload to Meta Ads Manager",
          "Set equal budget allocation and run test for 7-10 days",
          "Analyze results and document winning combinations"
        ])
      },
      {
        name: "Ad Templates",
        slug: "ad-templates",
        icon: "LayoutTemplate",
        description: "PAS video, social proof static, X thread, CTV scripts",
        order: 3,
        guide: `## What Are Ad Templates?\n\nAd templates are pre-built creative frameworks that the team can quickly adapt for any campaign or service line. Instead of starting from scratch every time, templates provide proven structures for each ad format — video scripts, static layouts, thread formats, and CTV scripts.\n\nFor SMAART, templates ensure consistent quality and dramatically reduce creative production time from days to hours.\n\n## Why It Matters\n\nTemplates solve the creative bottleneck:\n- New campaigns launch in hours instead of days\n- Consistent brand quality across all platforms\n- Proven frameworks mean higher baseline performance (no experimental misfires)\n- Team members can produce creative even without deep advertising experience\n- Templates embody lessons from past testing — institutional knowledge in a reusable format\n\n## Implementation Steps\n\n1. **PAS Video Script Template** (15-30 seconds):\n   - 0-3 sec: PROBLEM hook ("Running a business in South Florida is hard enough...")\n   - 3-10 sec: AGITATE ("Don't let [specific pain point] slow you down...")\n   - 10-25 sec: SOLUTION ("SMAART handles your [service] so you can focus on growth.")\n   - 25-30 sec: CTA ("Visit smaartcompany.com or call [number] today.")\n\n2. **Social Proof Static Template** (1080x1350):\n   - Top: SMAART logo + headline ("Trusted by 500+ South Florida Businesses")\n   - Middle: Client testimonial quote with photo or star rating\n   - Bottom: CTA button graphic ("Get Your Free Review")\n\n3. **X Thread Template** (5-7 tweets):\n   - Tweet 1: Bold hook + thread emoji\n   - Tweets 2-5: One insight per tweet, numbered\n   - Tweet 6: Summary / key takeaway\n   - Tweet 7: CTA + link to smaartcompany.com\n\n4. **CTV Script Template** (30 seconds):\n   - 0-5 sec: Attention-grabbing visual + hook narration\n   - 5-20 sec: Value proposition with supporting visuals (office, team, happy clients)\n   - 20-27 sec: Social proof ("Serving South Florida for X years")\n   - 27-30 sec: Logo + CTA + URL + phone number\n\n5. **Carousel Template** (5 cards, 1080x1080):\n   - Card 1: Question or hook\n   - Cards 2-4: One benefit per card with supporting visual\n   - Card 5: CTA with form link\n\n## Pro Tips\n\n- Store templates in a shared Canva or Figma workspace so everyone can access and customize\n- Create separate template sets for each service line (insurance, tax, advisory)\n- Update templates quarterly based on what the 3x3 testing matrix reveals works best\n- Include brand guidelines notes on each template (fonts, colors, do's and don'ts)`,
        defaultTasks: JSON.stringify([
          "Create PAS video script template with SMAART examples",
          "Design social proof static ad template in Canva/Figma",
          "Build X thread template with 5-7 tweet structure",
          "Write CTV 30-second script template",
          "Design carousel template (5 cards) for Meta/LinkedIn"
        ])
      },
      {
        name: "Monthly Calendar",
        slug: "creative-calendar",
        icon: "Calendar",
        description: "Weekly content cadence: JAB-JAB-JAB-RIGHT HOOK",
        order: 4,
        guide: `## What Is the Creative Calendar?\n\nThe creative calendar maps out every piece of content and advertising creative on a weekly and monthly basis. It follows VaynerMedia's "Jab, Jab, Jab, Right Hook" framework — give value three times before making a sales ask. The calendar ensures SMAART maintains a consistent, balanced content presence across all channels.\n\n## Why It Matters\n\nWithout a calendar:\n- Content is reactive (only posting when you remember) instead of strategic\n- You default to selling too often, which alienates your audience\n- Seasonal opportunities (tax season, open enrollment, year-end) are missed\n- Creative production is last-minute and low-quality\n- A calendar creates accountability, consistency, and strategic rhythm\n\n## Implementation Steps\n\n1. **Weekly Cadence** (Jab-Jab-Jab-Right Hook):\n   - Monday (JAB): Educational post — industry insight, tip, or how-to\n   - Wednesday (JAB): Social proof — testimonial, case study, client win\n   - Friday (JAB): Community/personality — team highlight, local event, behind-the-scenes\n   - Saturday/Sunday (RIGHT HOOK): Promotional — service offer, CTA, lead magnet push\n\n2. **Monthly Themes** (align with business seasonality):\n   - January: New Year business planning, goal setting\n   - February-April: Tax season preparation and filing\n   - May-June: Mid-year financial review, insurance audit\n   - July-August: Summer business growth strategies\n   - September: Q4 planning, open enrollment\n   - October-November: Year-end tax planning, insurance renewals\n   - December: Holiday business tips, year-in-review\n\n3. **Content Production Sprint**: On the first Monday of each month, plan and produce all content for the month. Batch production is 3x more efficient than daily creation.\n\n4. **Cross-Channel Adaptation**: Every content piece should be adapted for:\n   - LinkedIn (professional, long-form)\n   - Instagram (visual, Reels-friendly)\n   - Facebook (conversational, community-driven)\n   - X (concise, opinion-driven)\n   - Email newsletter (curated, personal)\n\n5. **Calendar Tool**: Use a shared Google Sheet or project management tool (Notion, Asana) that shows: Date, Platform, Content Type (Jab/Hook), Topic, Status, Link.\n\n## Pro Tips\n\n- The 3:1 ratio (3 jabs to 1 hook) is the minimum — Gary Vee sometimes goes 6:1 for cold audiences\n- Every Right Hook should have a clear, specific CTA — "Book a free review" is better than "Contact us"\n- Repurpose: 1 blog post = 1 LinkedIn article + 3 social graphics + 1 email + 1 video clip\n- Leave 20% of calendar slots flexible for real-time content (news, trends, client wins)`,
        defaultTasks: JSON.stringify([
          "Build monthly creative calendar template (Google Sheet or Notion)",
          "Define monthly themes aligned with SMAART business seasonality",
          "Plan first month of content with Jab-Jab-Jab-Hook cadence",
          "Schedule monthly content production sprint (first Monday)",
          "Set up cross-channel content adaptation workflow"
        ])
      },
    ],
    bestPractices: [
      { title: "The Ogilvy Method", source: "Ogilvy", sourceUrl: "https://www.ogilvy.com", content: "Headlines = 80% of ad value. Promise a benefit. Use the reader's language. Include brand name. Test everything. Visual hierarchy: illustration → headline → copy.", category: "framework" },
      { title: "Jab, Jab, Jab, Right Hook", source: "VaynerMedia", sourceUrl: "https://vaynermedia.com", content: "Give value 3x before asking. Post organically first, boost winners. Creative is the variable in the 'interest media' era. Platform-native content always.", category: "framework" },
      { title: "Emotional Disruption", source: "Droga5", sourceUrl: "https://droga5.com", content: "Find the tension. Flip the script. One big idea, everywhere. Earn attention, don't buy it. SMAART's tension: 'Your accountant disappears in May. We don't.'", category: "framework" },
      { title: "The Work, The Work, The Work", source: "BBDO", sourceUrl: "https://bbdo.com", content: "Hierarchy: Relevance → Simplicity → Drama → Memorability. One sentence: 'SMAART handles your numbers so you can focus on your business.'", category: "framework" },
      { title: "Meta 2025-2026 Creative Best Practices", source: "Meta for Business", sourceUrl: "https://www.facebook.com/business/ads-guide", content: "70-80% of performance = creative quality. 4:5 vertical, 3-second hooks, drama scripts, bold captions, graphic CTAs, weekly testing, UGC-style.", category: "template" },
    ]
  },
  {
    name: "Positioning Strategy",
    slug: "positioning",
    icon: "Crosshair",
    description: "Dominate South Florida — Ries & Trout, April Dunford, Hinge frameworks",
    category: "intelligence",
    status: "not_started",
    progress: 0,
    order: 15,
    modules: [
      {
        name: "Positioning Statement",
        slug: "statement",
        icon: "Quote",
        description: "Core positioning: Technology-Powered Business Growth Platform",
        order: 1,
        guide: `## What Is a Positioning Statement?\n\nA positioning statement defines how SMAART occupies a unique place in the prospect's mind. It answers: For whom? What category? What unique benefit? Why should they believe you? It is the strategic foundation that every ad, email, webpage, and sales conversation builds upon.\n\nFor SMAART, the positioning is: "The Technology-Powered Business Growth Platform for South Florida companies." Not just insurance. Not just accounting. A growth platform.\n\n## Why It Matters\n\nPositioning determines everything downstream:\n- It dictates your messaging hierarchy across all channels\n- It differentiates SMAART from 5,000+ insurance and accounting firms in South Florida\n- It attracts the right clients (growth-minded business owners) and repels the wrong ones (price shoppers)\n- Al Ries and Jack Trout proved: "Positioning is not what you do to a product. It is what you do to the mind of the prospect."\n- A clear position simplifies every marketing decision — "Does this reinforce our position? Yes → do it. No → skip it."\n\n## Implementation Steps\n\n1. **Positioning Statement Formula** (April Dunford's framework):\n   - **For**: South Florida business owners (5-200 employees) who want to grow without financial headaches\n   - **Who Are Dissatisfied With**: Seasonal accountants who disappear after April, one-dimensional insurance brokers, and firms that are not technology-enabled\n   - **SMAART Is A**: Technology-powered business growth platform\n   - **That Provides**: Year-round insurance, tax, advisory, and financial technology services\n   - **Unlike**: Traditional firms that are seasonal, siloed, and technology-averse\n   - **SMAART's Key Differentiator**: We combine expert financial services with modern technology so every client has real-time visibility into their business health — all year, not just tax season.\n\n2. **Message Testing**: Test 3 positioning angles with 5-10 prospects:\n   - Angle A: "Year-round business growth platform" (category creation)\n   - Angle B: "The accountant that never disappears" (competitive repositioning)\n   - Angle C: "Technology meets financial expertise" (differentiation)\n\n3. **Internal Alignment**: Present the positioning to Ray, Gus, and the full team. Everyone must be able to articulate it in one sentence. Practice until it is automatic.\n\n4. **Documentation**: Write the positioning statement on one page. Include: positioning statement, supporting proof points, target audience description, and competitive differentiation.\n\n## Pro Tips\n\n- The positioning statement is internal strategy — it never appears in ads verbatim\n- "Be first in a category or create one" (Ries & Trout). SMAART can create the "Business Growth Platform" category in South Florida.\n- Simplicity wins: if you cannot explain your position in 8 words or less, it is too complex\n- Revisit positioning annually — markets shift, competitors emerge, your strengths evolve`,
        defaultTasks: JSON.stringify([
          "Complete April Dunford's 5+1 positioning framework for SMAART",
          "Draft 3 positioning angle variants for testing",
          "Test positioning angles with 5-10 current clients for feedback",
          "Create one-page positioning document for internal alignment",
          "Present positioning to Ray, Gus, and the full team"
        ])
      },
      {
        name: "Competitive Map",
        slug: "comp-map",
        icon: "Map",
        description: "Visual positioning map: tech-enabled vs traditional, seasonal vs year-round",
        order: 2,
        guide: `## What Is a Competitive Map?\n\nA competitive map is a visual 2x2 matrix that plots SMAART against competitors on two key dimensions. It instantly shows prospects where SMAART fits in the market and why it is the superior choice. For SMAART, the two axes are: Technology-Enabled vs Traditional (x-axis) and Year-Round vs Seasonal (y-axis).\n\n## Why It Matters\n\nA competitive map:\n- Makes your differentiation visually obvious in 3 seconds\n- Repositions competitors as inferior without attacking them directly\n- Gives the sales team a powerful visual tool for prospect conversations\n- Helps the marketing team ensure all messaging reinforces the competitive position\n- Al Ries: "The basic approach of positioning is not to create something new and different, but to manipulate what's already up there in the mind."\n\n## Implementation Steps\n\n1. **Identify Top 10 Competitors**: Research the most prominent insurance agencies and accounting firms in South Florida:\n   - Large firms (BDO, Kaufman Rossin, MBAF)\n   - Regional players (Caballero Fierman, Alberni Caballero)\n   - Direct competitors in SMAART's size range\n   - Digital-first upstarts\n\n2. **Choose Two Differentiating Axes**:\n   - X-Axis: Traditional (paper-based, minimal technology) ←→ Technology-Enabled (client portal, real-time dashboards, AI-powered)\n   - Y-Axis: Seasonal (disappears after April) ←→ Year-Round (continuous support, quarterly reviews, proactive outreach)\n\n3. **Plot Competitors**: Place each competitor on the map based on research. Most traditional firms cluster in the bottom-left (traditional + seasonal). SMAART should be alone in the top-right (tech-enabled + year-round).\n\n4. **Visual Design**: Create a clean, branded graphic that can be used in:\n   - Sales decks and proposals\n   - Website "Why SMAART" page\n   - Social media content\n   - Internal presentations\n\n5. **Competitive Intelligence**: For each competitor, document:\n   - Services offered\n   - Pricing model (if public)\n   - Technology they use (or do not)\n   - Online reviews and reputation\n   - Messaging and positioning they use\n\n## Pro Tips\n\n- Choose axes where SMAART genuinely wins — do not pick dimensions where you are average\n- Update the competitive map every 6 months as the market evolves\n- Use the map in content marketing: "How to choose the right business insurance partner (2x2 framework)"\n- Never disparage competitors by name in public-facing materials — let the map speak for itself`,
        defaultTasks: JSON.stringify([
          "Research top 10 SMAART competitors in South Florida",
          "Define two differentiating axes for the competitive map",
          "Plot all competitors on the 2x2 matrix",
          "Design branded competitive map graphic for sales and marketing use",
          "Document competitive intelligence for each major competitor"
        ])
      },
      {
        name: "Messaging Architecture",
        slug: "messaging",
        icon: "MessageCircle",
        description: "Four pillars: Visionary Integrity, Excellence, Partnership, Resources",
        order: 3,
        guide: `## What Is Messaging Architecture?\n\nMessaging architecture is a structured hierarchy of messages that ensures everyone at SMAART — from ads to sales calls to the website — communicates a consistent brand story. It defines the master narrative, supporting pillars, proof points, and specific taglines for each audience and channel.\n\n## Why It Matters\n\nWithout messaging architecture:\n- Every ad says something different\n- The website tells one story, the sales team tells another\n- New team members make up messaging on the fly\n- Prospects get confused about what SMAART actually does\n- Messaging architecture creates "one voice, many channels"\n\n## Implementation Steps\n\n1. **Master Narrative** (one paragraph that captures everything):\n   "SMAART is a technology-powered business growth platform for South Florida companies. We combine expert insurance, tax, and advisory services with modern technology to give business owners real-time visibility into their financial health — year-round, not just tax season. Our clients grow faster because they make better-informed decisions with SMAART behind them."\n\n2. **Four Message Pillars**:\n   - **Visionary Integrity**: "We see the bigger picture and do right by our clients." Proof: year-round proactive outreach, transparent pricing, no hidden fees.\n   - **Excellence in Execution**: "Everything we do is precise, timely, and thorough." Proof: 99.5% on-time filing, real-time dashboards, dedicated account managers.\n   - **True Partnership**: "We succeed when our clients succeed." Proof: quarterly business reviews, proactive advisory, growth planning.\n   - **Resources & Technology**: "We leverage technology so our clients have an unfair advantage." Proof: client portal, AI chatbot, real-time financial dashboards.\n\n3. **Audience-Specific Messaging**:\n   - Small Business Owners (1-20 employees): "Finally, a partner who handles the financial complexity so you can focus on your business."\n   - Mid-Market Companies (20-200 employees): "Enterprise-grade financial services without the enterprise price tag."\n   - Startups: "Get the financial foundation right from day one."\n\n4. **Channel Adaptation**:\n   - Ads: Short, benefit-driven, one pillar per ad\n   - Website: Full narrative with all pillars and proof points\n   - Email: Conversational tone, one pillar per email\n   - Sales: Customize pillar emphasis based on prospect's primary pain point\n\n## Pro Tips\n\n- Print the messaging architecture on one page and give it to every team member\n- When reviewing any piece of content, ask: "Which pillar does this reinforce?"\n- Test messaging pillars as ad headlines — data will tell you which resonates most\n- Update messaging architecture once per year, or when positioning changes`,
        defaultTasks: JSON.stringify([
          "Write master narrative paragraph for SMAART",
          "Define four message pillars with proof points",
          "Create audience-specific message variations",
          "Build channel adaptation guidelines (ads, web, email, sales)",
          "Design one-page messaging architecture document for the team"
        ])
      },
      {
        name: "Activation Plan",
        slug: "activation",
        icon: "Rocket",
        description: "Roll out positioning across website, ads, sales, email, referral",
        order: 4,
        guide: `## What Is a Positioning Activation Plan?\n\nActivation is the process of deploying your positioning and messaging across every customer touchpoint — website, ads, email sequences, sales scripts, social media, collateral, and internal communications. The best positioning in the world means nothing if it stays in a strategy document.\n\n## Why It Matters\n\nPositioning only works when it is everywhere, consistently:\n- Every touchpoint should reinforce the same core message\n- Inconsistent messaging confuses prospects and dilutes brand equity\n- Activation is where strategy meets execution — it is the hardest part\n- Companies that align all channels to their positioning see 23% higher revenue growth (Lucidpress research)\n\n## Implementation Steps\n\n1. **Website Activation** (Week 1-2):\n   - Rewrite homepage hero section with positioning-aligned headline\n   - Update all service page headlines and descriptions\n   - Add "Why SMAART" page with competitive map and four pillars\n   - Update meta descriptions and page titles for SEO alignment\n\n2. **Ad Creative Activation** (Week 2-3):\n   - Refresh all Meta ad copy with new messaging pillars\n   - Update Google Ads headlines and descriptions\n   - Create new 3x3 testing matrix using positioning-aligned messages\n   - Update CTV scripts with new positioning language\n\n3. **Email Activation** (Week 3-4):\n   - Rewrite welcome sequence with positioning-aligned messaging\n   - Update all nurture sequences with new language\n   - Create new email templates with updated brand voice\n\n4. **Sales Activation** (Week 4):\n   - Train Ray, Gus, and the sales team on the new positioning\n   - Update sales deck and proposal templates\n   - Create one-pager leave-behind for prospect meetings\n   - Develop objection-handling scripts aligned with four pillars\n\n5. **Collateral Activation** (Week 5-6):\n   - Update business cards, email signatures, letterhead\n   - Refresh social media bios and cover images\n   - Update Google Business Profile description\n   - Create referral partner one-pager with new positioning\n\n## Pro Tips\n\n- Do not try to change everything at once — prioritize website and ads first (highest visibility)\n- Create a "Positioning Audit Checklist" to verify every touchpoint is updated\n- Schedule a 30-day post-activation review to assess consistency and gather feedback\n- Assign one person as "Brand Guardian" responsible for ensuring all new content aligns with positioning`,
        defaultTasks: JSON.stringify([
          "Rewrite website homepage and service pages with new positioning",
          "Refresh all active ad creative with positioning-aligned messaging",
          "Update email sequences with new brand voice and pillars",
          "Train sales team on new positioning and provide updated materials",
          "Audit all touchpoints with positioning consistency checklist"
        ])
      },
    ],
    bestPractices: [
      { title: "Position in the Prospect's Mind", source: "Ries & Trout", sourceUrl: "https://www.amazon.com/Positioning-Battle-Your-Mind/dp/0071373586", content: "Be first in a category or create one. Own a word ('simplified'). Big fish in small pond. Oversimplify your message. Reposition competitors as outdated.", category: "framework" },
      { title: "Obviously Awesome (5+1)", source: "April Dunford", sourceUrl: "https://www.aprildunford.com", content: "5 components: Competitive Alternatives, Unique Attributes, Value, Target Customer, Market Category + Relevant Trend. SMAART = Business Growth Platform.", category: "framework" },
      { title: "Visible Expert Model", source: "Hinge Marketing", sourceUrl: "https://hingemarketing.com", content: "Visible Expert firms grow 3x faster. Levels: Resident Expert → Local Hero (Y1) → Rising Star (Y2) → Industry Rock Star (Y3+). Content-driven authority is #1.", category: "framework" },
    ]
  },
  {
    name: "SMAART Client App",
    slug: "client-app",
    icon: "Smartphone",
    description: "White-label client portal — the competitive weapon for retention & referrals",
    category: "intelligence",
    status: "not_started",
    progress: 0,
    order: 16,
    modules: [
      {
        name: "Portal Launch (SuiteDash)",
        slug: "portal-launch",
        icon: "Rocket",
        description: "Deploy white-label at app.smaartcompany.com in 30 days",
        order: 1,
        guide: `## What Is the Client Portal?\n\nThe Client Portal is a white-labeled web application at app.smaartcompany.com where SMAART clients can access documents, view dashboards, communicate with their team, and manage their account. Built on SuiteDash, it provides an all-in-one client experience that sets SMAART apart from every competitor still using email and paper.\n\n## Why It Matters\n\nA client portal is SMAART's competitive weapon for retention and growth:\n- 60% of consumers prefer digital self-service over calling or emailing\n- Portals reduce email volume by 60% and speed up project completion by 40%\n- Client satisfaction increases 25% when they have 24/7 access to their information\n- It creates massive switching costs — once a client is using your portal daily, they will not leave\n- This is what turns SMAART from a "service provider" into a "platform" in the client's mind\n\n## Implementation Steps\n\n1. **SuiteDash Setup** (Week 1):\n   - Create SuiteDash account (Pinnacle plan)\n   - Configure white-label settings: custom domain (app.smaartcompany.com), SMAART logo, brand colors\n   - Set up user roles: Admin, Staff, Client\n\n2. **Feature Configuration** (Week 2):\n   - Client Dashboard: Welcome message, quick links, notifications\n   - Document Hub: Secure file sharing with folder structure by client\n   - Messaging: In-app messaging between client and their SMAART team member\n   - Task Board: Client-facing tasks (documents needed, forms to sign)\n\n3. **Client Migration** (Week 3):\n   - Import top 50 clients as first cohort\n   - Create client accounts with pre-populated profiles\n   - Upload existing documents to each client's vault\n\n4. **Launch Communication** (Week 4):\n   - Send personalized onboarding email to each client with login credentials\n   - Include a 2-minute video walkthrough of the portal\n   - Offer a "Portal Launch" one-on-one call to walk through features\n\n5. **Feedback Loop**: After 30 days, survey clients on portal experience. Iterate based on feedback before rolling out to remaining clients.\n\n## Pro Tips\n\n- Start with 50 clients (your best, most engaged) before rolling out to everyone\n- The portal only works if the SMAART team actually uses it — train staff to communicate through the portal, not email\n- Mobile responsiveness is critical — most clients will access on their phones\n- Add a "What's New" section to the dashboard to highlight new features and keep engagement high`,
        defaultTasks: JSON.stringify([
          "Set up SuiteDash account with white-label configuration",
          "Configure custom domain at app.smaartcompany.com",
          "Set up document hub, messaging, and task board features",
          "Import first 50 client accounts with profiles and documents",
          "Create onboarding email and video walkthrough for clients",
          "Schedule 30-day post-launch client feedback survey"
        ])
      },
      {
        name: "Document Exchange",
        slug: "documents",
        icon: "FileUp",
        description: "Secure upload, e-signatures, document vault",
        order: 2,
        guide: `## What Is the Document Exchange?\n\nThe Document Exchange is the secure file-sharing and e-signature system within the client portal. Clients can upload documents (tax forms, insurance policies, financial statements), download completed work, and electronically sign agreements — all without email attachments or physical paper.\n\n## Why It Matters\n\nDocument management is one of the biggest pain points for both SMAART and clients:\n- 65% of accounting firms say document collection is their biggest bottleneck\n- Email attachments are insecure, get lost, and lack organization\n- Paper signatures add 3-5 days to any process\n- A digital document vault creates a permanent, searchable archive of every client interaction\n- Secure document handling is a regulatory requirement for insurance and financial services\n\n## Implementation Steps\n\n1. **Folder Structure**: Create a standard folder template for every client:\n   - /Tax Documents/2026\n   - /Insurance Policies/Active\n   - /Insurance Policies/Expired\n   - /Financial Statements/Monthly\n   - /Signed Agreements\n   - /Correspondence\n\n2. **Upload Workflow**: Configure SuiteDash document requests:\n   - Create "Document Request" templates: "Please upload your Q1 P&L statement"\n   - Client receives notification, clicks link, uploads directly to their folder\n   - SMAART team receives notification of upload\n\n3. **E-Signature Integration**: Set up e-signatures (SuiteDash built-in or integrate with DocuSign/PandaDoc):\n   - Create signature-ready templates for common documents (engagement letters, insurance applications, authorization forms)\n   - Audit trail with timestamps for compliance\n\n4. **Security Configuration**:\n   - Enable 256-bit SSL encryption (standard on SuiteDash)\n   - Set up two-factor authentication for all client accounts\n   - Configure access permissions (clients only see their own documents)\n   - Set document retention policy (7 years for tax, per IRS guidelines)\n\n5. **Client Training**: Create a simple guide: "How to Upload Documents to Your SMAART Portal" — PDF + video, under 3 minutes.\n\n## Pro Tips\n\n- Send document request reminders automatically if not fulfilled within 7 days\n- Use OCR-enabled upload for automatic document categorization (if supported)\n- Create a "Tax Season Document Checklist" that tracks what has been uploaded and what is still needed\n- Celebrate milestones: "All documents received! We're working on your return." — keeps clients engaged`,
        defaultTasks: JSON.stringify([
          "Create standard folder structure template for all clients",
          "Configure document request templates in SuiteDash",
          "Set up e-signature workflows for common documents",
          "Enable two-factor authentication and security settings",
          "Create client guide for uploading documents (PDF + video)"
        ])
      },
      {
        name: "Financial Dashboards",
        slug: "fin-dashboards",
        icon: "BarChart3",
        description: "Real-time P&L, cash flow, AR/AP for clients",
        order: 3,
        guide: `## What Are Client Financial Dashboards?\n\nFinancial dashboards give SMAART clients real-time visibility into their business finances — P&L statements, cash flow, accounts receivable/payable, and key financial ratios. Instead of waiting for monthly statements, clients can log into the portal and see their financial health at any moment.\n\n## Why It Matters\n\nThis is SMAART's ultimate differentiator:\n- 78% of small business owners do not know their current financial position\n- Real-time visibility enables better, faster business decisions\n- It transforms SMAART from "tax preparer" to "financial co-pilot"\n- Competitors still send quarterly PDF reports — SMAART shows live data\n- Clients who can see their data are 40% more engaged and 35% less likely to churn (Glasscubes research)\n\n## Implementation Steps\n\n1. **Data Integration**: Connect client accounting data to the dashboard:\n   - QuickBooks Online API integration (most common for SMAART clients)\n   - Xero API integration (alternative)\n   - Manual upload option for clients not on cloud accounting\n\n2. **Dashboard Widgets** (start with these 5):\n   - Revenue vs Last Year (monthly bar chart)\n   - Cash Flow Forecast (30-60-90 day projection)\n   - Accounts Receivable Aging (who owes you, how overdue)\n   - Profit & Loss Summary (current month vs budget)\n   - Key Ratios: Current ratio, profit margin, days sales outstanding\n\n3. **Permission Levels**:\n   - Client Owner: Full access to all financial data\n   - Client Staff: Limited access (configured per client)\n   - SMAART Team: Full access for advisory purposes\n\n4. **Alert System**: Configure automated alerts sent to clients:\n   - Cash balance drops below $X threshold\n   - Invoice overdue by 30+ days\n   - Monthly revenue drops 20%+ vs prior month\n   - Unusual expense detected\n\n5. **Advisory Layer**: Use dashboard data to trigger proactive SMAART outreach:\n   - "We noticed your AR is growing. Let's discuss collection strategies."\n   - "Your cash flow forecast shows a gap in 60 days. Here are options."\n\n## Pro Tips\n\n- Start with a simple dashboard (3-5 widgets) and add complexity based on client feedback\n- Not every client wants or needs financial dashboards — start with advisory and mid-market clients\n- The dashboard's value is in the conversation it starts, not just the data it shows\n- Compliance note: ensure financial data display complies with client confidentiality agreements`,
        defaultTasks: JSON.stringify([
          "Set up QuickBooks Online API integration for dashboard data",
          "Design 5 core dashboard widgets (Revenue, Cash Flow, AR, P&L, Ratios)",
          "Configure client permission levels and access controls",
          "Build automated financial alert system for clients",
          "Create proactive advisory triggers based on dashboard data"
        ])
      },
      {
        name: "AI Chatbot (Ask SMAART)",
        slug: "ai-chatbot",
        icon: "Bot",
        description: "Natural language financial queries powered by AI",
        order: 4,
        guide: `## What Is the Ask SMAART AI Chatbot?\n\nAsk SMAART is an AI-powered chatbot embedded in the client portal that answers natural language questions about a client's finances, insurance policies, tax status, and SMAART services. A client can type "What was my profit last quarter?" or "When does my liability insurance expire?" and get an instant answer.\n\n## Why It Matters\n\nAI chatbots in professional services are still rare — this is a massive differentiator:\n- Clients get instant answers 24/7 without waiting for email replies\n- Reduces simple inquiry volume for SMAART staff by 30-40%\n- Positions SMAART as technology-forward (reinforces "Technology-Powered" positioning)\n- Younger business owners (millennials, Gen Z) expect digital self-service\n- It turns the portal from a document vault into an interactive financial assistant\n\n## Implementation Steps\n\n1. **Scope Definition**: Define what Ask SMAART can and cannot answer:\n   - CAN: Policy details, account balance, invoice status, document status, service descriptions, FAQ, scheduling\n   - CANNOT: Financial advice (must go to a human advisor), policy changes, payment processing\n\n2. **Knowledge Base**: Build the chatbot's knowledge base:\n   - SMAART FAQ (50-100 common questions and answers)\n   - Service descriptions and pricing\n   - Client-specific data pulled from their portal profile\n   - Insurance policy details and renewal dates\n   - Tax filing status and deadlines\n\n3. **Technology Selection**:\n   - Option A: SuiteDash built-in chat + AI integration (simplest)\n   - Option B: Custom chatbot using Claude/OpenAI API embedded in the portal\n   - Option C: Third-party chatbot platform (Intercom, Drift) with SuiteDash integration\n\n4. **Human Handoff**: Configure escalation rules:\n   - If AI confidence is below threshold → hand off to human agent\n   - If client asks about financial advice → "Let me connect you with your SMAART advisor"\n   - If question involves a complaint → immediate human escalation\n\n5. **Training and Iteration**: Launch with beta group of 10 tech-savvy clients. Collect feedback for 30 days. Review all conversations weekly. Add new Q&A pairs based on questions the AI cannot answer.\n\n## Pro Tips\n\n- Start simple — a well-trained FAQ chatbot is more useful than an unreliable AI\n- Always provide the option to "Talk to a Human" — never trap users in a bot loop\n- Log every chatbot interaction for quality review and knowledge base expansion\n- Use the chatbot to proactively surface information: "Your insurance policy expires in 30 days. Want to schedule a review?"`,
        defaultTasks: JSON.stringify([
          "Define chatbot scope (what it can and cannot answer)",
          "Build initial knowledge base with 50+ FAQ entries",
          "Select chatbot technology (SuiteDash built-in vs custom AI)",
          "Configure human handoff rules and escalation triggers",
          "Launch beta with 10 clients and collect 30 days of feedback"
        ])
      },
      {
        name: "Referral Hub",
        slug: "app-referral",
        icon: "Share2",
        description: "In-app referral with tracking and rewards",
        order: 5,
        guide: `## What Is the Referral Hub?\n\nThe Referral Hub is a built-in feature of the SMAART client portal that makes it effortless for clients to refer other businesses. It provides a unique referral link, tracks referral status in real-time, displays earned rewards, and makes sharing as simple as clicking a button.\n\n## Why It Matters\n\nEmbedding referrals in the portal multiplies referral program effectiveness:\n- Clients see the referral option every time they log in — constant visibility\n- One-click sharing removes all friction from the referral process\n- Real-time tracking creates a game-like engagement loop (clients check their referral status)\n- Reward visibility motivates continued participation\n- Research shows in-app referral features generate 3-5x more referrals than email-only programs\n\n## Implementation Steps\n\n1. **Unique Referral Links**: Generate a unique referral URL for each client:\n   - Format: smaartcompany.com/refer/[client-code]\n   - Landing page captures the new prospect's info and attributes it to the referrer\n\n2. **Sharing Mechanisms**:\n   - One-click email: Pre-written referral email the client can send from the portal\n   - Copy link: Click to copy their unique referral URL\n   - Social sharing: Share buttons for LinkedIn, Facebook, WhatsApp, and text message\n   - QR Code: Downloadable QR code for in-person networking events\n\n3. **Referral Dashboard** (visible in client portal):\n   - Number of referrals sent\n   - Status of each referral (Pending, Contacted, Quoted, Signed)\n   - Rewards earned and redeemed\n   - Leaderboard (optional — shows top referrers for gamification)\n\n4. **Reward Tracking**:\n   - Display current reward tier and progress toward next tier\n   - Show earned rewards with redemption options\n   - Send automated congratulations when a referral converts\n\n5. **Automation**: Trigger referral hub prompts at key moments:\n   - After a positive NPS survey response\n   - After successful tax filing or insurance claim resolution\n   - On the client's anniversary with SMAART\n   - After viewing the financial dashboard (they are engaged and happy)\n\n## Pro Tips\n\n- The referral hub should be visible on the portal dashboard — not buried in a menu\n- Make the pre-written referral email feel personal, not corporate — clients should feel comfortable sending it as-is\n- Celebrate referrers publicly (with permission) — "Referrer of the Month" in the portal and social media\n- Consider a dual-sided incentive: the referrer AND the new client both receive a benefit`,
        defaultTasks: JSON.stringify([
          "Generate unique referral links for all portal clients",
          "Build one-click sharing (email, copy link, social, QR code)",
          "Create referral dashboard with status tracking and rewards",
          "Set up automated referral prompts at key client moments",
          "Design Referrer of the Month recognition program"
        ])
      },
    ],
    bestPractices: [
      { title: "40% Engagement Increase", source: "Glasscubes", sourceUrl: "https://www.glasscubes.com/best-practices-for-using-a-client-portal-app-in-your-accounting-firm/", content: "Firms using client portals see 40% increase in client engagement and 50% reduction in response times. 60% of consumers prefer digital self-service.", category: "metric" },
      { title: "60% Less Email, 25% Higher Satisfaction", source: "Moxo Research", sourceUrl: "https://www.moxo.com/blog/best-white-label-client-portal", content: "White-label portals reduce email volume by 60%, speed up projects 40%, improve satisfaction 25%, cut admin overhead 50%.", category: "metric" },
    ]
  }
];
