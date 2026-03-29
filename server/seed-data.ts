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
      { name: "Pixel Installation", slug: "pixels", icon: "Code", description: "Install Meta, Google, LinkedIn, X pixels on smaartcompany.com", order: 1 },
      { name: "Lead Magnets", slug: "lead-magnets", icon: "FileText", description: "Tax checklist PDF, business quiz, ebook, free consult page", order: 2 },
      { name: "CRM Data Export", slug: "crm-export", icon: "Upload", description: "Export GoHighLevel/Salesforce contacts as segmented audience lists", order: 3 },
      { name: "Consent & Privacy", slug: "consent", icon: "Shield", description: "Cookie consent, privacy policy, data collection disclosures", order: 4 },
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
      { name: "Custom Audiences", slug: "custom-audiences", icon: "Users", description: "Upload CRM lists to Meta + Google Customer Match", order: 1 },
      { name: "Lookalike Audiences", slug: "lookalike", icon: "UserPlus", description: "Create 1% lookalike from top 500 clients on Meta", order: 2 },
      { name: "Retargeting Setup", slug: "retargeting", icon: "RefreshCw", description: "Website visitor retargeting across Meta, Google, AdRoll", order: 3 },
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
      { name: "Zone Configuration", slug: "zones", icon: "Map", description: "Define geofence zones: competitor offices, chambers of commerce, co-working spaces", order: 1 },
      { name: "Platform Setup", slug: "geo-platform", icon: "Settings", description: "Configure Simpli.fi or GroundTruth for precision geotargeting", order: 2 },
      { name: "Creative for Location", slug: "geo-creative", icon: "Image", description: "Proximity-aware ad variants ('Looking for a better accountant nearby?')", order: 3 },
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
      { name: "DSP Selection", slug: "dsp", icon: "Monitor", description: "Choose DSP: AdRoll (starter) → Trade Desk (scale)", order: 1 },
      { name: "Audience Segments", slug: "prog-audiences", icon: "Target", description: "Define behavioral + contextual targeting segments", order: 2 },
      { name: "Placement Strategy", slug: "placements", icon: "LayoutGrid", description: "Site lists, category targeting, brand safety settings", order: 3 },
      { name: "Bid Optimization", slug: "bidding", icon: "TrendingUp", description: "CPA bidding strategy, dayparting, frequency capping", order: 4 },
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
      { name: "CTV Production", slug: "ctv-production", icon: "Film", description: "30-second commercial script, Adwave AI production, or professional shoot", order: 1 },
      { name: "CTV Distribution", slug: "ctv-distribution", icon: "Play", description: "Roku, Hulu, connected TV targeting in South Florida", order: 2 },
      { name: "Audio Ads", slug: "audio", icon: "Volume2", description: "15-second Spotify ad, South Florida geo-targeting", order: 3 },
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
      { name: "Campaign Structure", slug: "meta-campaigns", icon: "FolderOpen", description: "Campaign → Ad Set → Ad hierarchy, naming conventions", order: 1 },
      { name: "Audience Builder", slug: "meta-audiences", icon: "Users", description: "Custom, Lookalike, Interest, and Behavioral audiences", order: 2 },
      { name: "Ad Creative", slug: "meta-creative", icon: "Paintbrush", description: "4:5 static, Reels, Stories — 3x3 testing matrix", order: 3 },
      { name: "Budget & Bidding", slug: "meta-budget", icon: "DollarSign", description: "CBO vs ABO, bid caps, budget scaling rules", order: 4 },
      { name: "Reporting", slug: "meta-reporting", icon: "BarChart3", description: "Attribution windows, conversion tracking, ROAS monitoring", order: 5 },
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
      { name: "Keyword Research", slug: "keywords", icon: "Key", description: "Target keywords by service line: accounting, tax, payroll, advisory, CRM", order: 1 },
      { name: "Search Campaigns", slug: "search-campaigns", icon: "Search", description: "Text ads, responsive search ads, ad extensions, negative keywords", order: 2 },
      { name: "Display Campaigns", slug: "display", icon: "Monitor", description: "Topic, keyword, and affinity targeting on Google Display Network", order: 3 },
      { name: "Local Services Ads", slug: "lsa", icon: "MapPin", description: "Google Guaranteed badge, pay-per-lead for local services", order: 4 },
      { name: "YouTube Pre-Roll", slug: "youtube", icon: "Play", description: "15-second skippable + 6-second bumper ads", order: 5 },
      { name: "Budget & Bidding", slug: "google-budget", icon: "DollarSign", description: "Target CPA, max conversions, smart bidding strategies", order: 6 },
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
      { name: "Content Strategy", slug: "content-strategy", icon: "FileText", description: "3x/week blog pipeline, thought leadership calendar", order: 1 },
      { name: "Contextual Targeting", slug: "contextual", icon: "Globe", description: "Keyword and topic targeting on business/finance publisher sites", order: 2 },
      { name: "Native Advertising", slug: "native", icon: "Newspaper", description: "Taboola/Outbrain promoted content on major publishers", order: 3 },
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
      { name: "Referral Program", slug: "referral-program", icon: "Gift", description: "Client referral rewards, tracking, and communication", order: 1 },
      { name: "Partner Network", slug: "partners", icon: "Building", description: "Strategic partnerships with complementary service providers", order: 2 },
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
      { name: "Campaign Setup", slug: "x-campaigns", icon: "Megaphone", description: "Campaign objectives, audience targeting, promoted tweet creation", order: 1 },
      { name: "Thread Ad Strategy", slug: "x-threads", icon: "MessageSquare", description: "Educational thread format — value first, CTA last", order: 2 },
      { name: "Audience Targeting", slug: "x-audiences", icon: "Target", description: "Interest, keyword, follower lookalike, and tailored audiences", order: 3 },
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
      { name: "Welcome Sequence", slug: "welcome", icon: "Sparkles", description: "5-email onboarding series for new leads", order: 1 },
      { name: "Nurture Sequences", slug: "nurture", icon: "Droplets", description: "Tax season, quarterly, advisory upsell sequences", order: 2 },
      { name: "Win-Back Campaign", slug: "winback", icon: "RotateCcw", description: "Re-engagement for dormant leads and lost clients", order: 3 },
      { name: "List Management", slug: "lists", icon: "ListChecks", description: "Segmentation, hygiene, deliverability monitoring", order: 4 },
      { name: "A/B Testing", slug: "email-testing", icon: "FlaskConical", description: "Subject lines, send times, CTAs, content testing", order: 5 },
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
      { name: "GTM Configuration", slug: "gtm", icon: "Code", description: "Google Tag Manager: pixel firing rules, triggers, variables", order: 1 },
      { name: "UTM Framework", slug: "utms", icon: "Link", description: "Naming conventions, URL builder, campaign tagging standards", order: 2 },
      { name: "Call Tracking", slug: "calls", icon: "Phone", description: "CallRail setup, dynamic number insertion, call attribution", order: 3 },
      { name: "CRM Attribution", slug: "crm-attribution", icon: "GitBranch", description: "GoHighLevel source tracking, pipeline attribution", order: 4 },
      { name: "Offline Conversions", slug: "offline", icon: "Upload", description: "Upload closed deals back to Meta/Google for optimization", order: 5 },
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
      { name: "Executive Overview", slug: "exec-dashboard", icon: "Gauge", description: "KPIs, channel performance, pipeline, revenue attribution", order: 1 },
      { name: "Channel Performance", slug: "channel-dashboard", icon: "BarChart3", description: "Deep metrics per channel: Google, Meta, X, CTV, geo", order: 2 },
      { name: "Lead & Pipeline", slug: "pipeline-dashboard", icon: "Workflow", description: "Real-time lead flow, conversion rates, speed to contact", order: 3 },
      { name: "Email Dashboard", slug: "email-dashboard", icon: "Mail", description: "Campaign metrics, sequence performance, list health", order: 4 },
      { name: "Alerts Configuration", slug: "alerts", icon: "Bell", description: "Budget overspend, CPL spike, conversion drop alerts", order: 5 },
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
      { name: "Creative Audit Tool", slug: "audit-tool", icon: "ClipboardCheck", description: "Score every ad on 8 dimensions before launch (minimum 60/80)", order: 1 },
      { name: "3x3 Testing Matrix", slug: "testing-matrix", icon: "Grid3x3", description: "3 headlines × 3 visuals = 9 variants per campaign test", order: 2 },
      { name: "Ad Templates", slug: "ad-templates", icon: "LayoutTemplate", description: "PAS video, social proof static, X thread, CTV scripts", order: 3 },
      { name: "Monthly Calendar", slug: "creative-calendar", icon: "Calendar", description: "Weekly content cadence: JAB-JAB-JAB-RIGHT HOOK", order: 4 },
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
      { name: "Positioning Statement", slug: "statement", icon: "Quote", description: "Core positioning: Technology-Powered Business Growth Platform", order: 1 },
      { name: "Competitive Map", slug: "comp-map", icon: "Map", description: "Visual positioning map: tech-enabled vs traditional, seasonal vs year-round", order: 2 },
      { name: "Messaging Architecture", slug: "messaging", icon: "MessageCircle", description: "Four pillars: Visionary Integrity, Excellence, Partnership, Resources", order: 3 },
      { name: "Activation Plan", slug: "activation", icon: "Rocket", description: "Roll out positioning across website, ads, sales, email, referral", order: 4 },
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
      { name: "Portal Launch (SuiteDash)", slug: "portal-launch", icon: "Rocket", description: "Deploy white-label at app.smaartcompany.com in 30 days", order: 1 },
      { name: "Document Exchange", slug: "documents", icon: "FileUp", description: "Secure upload, e-signatures, document vault", order: 2 },
      { name: "Financial Dashboards", slug: "fin-dashboards", icon: "BarChart3", description: "Real-time P&L, cash flow, AR/AP for clients", order: 3 },
      { name: "AI Chatbot (Ask SMAART)", slug: "ai-chatbot", icon: "Bot", description: "Natural language financial queries powered by AI", order: 4 },
      { name: "Referral Hub", slug: "app-referral", icon: "Share2", description: "In-app referral with tracking and rewards", order: 5 },
    ],
    bestPractices: [
      { title: "40% Engagement Increase", source: "Glasscubes", sourceUrl: "https://www.glasscubes.com/best-practices-for-using-a-client-portal-app-in-your-accounting-firm/", content: "Firms using client portals see 40% increase in client engagement and 50% reduction in response times. 60% of consumers prefer digital self-service.", category: "metric" },
      { title: "60% Less Email, 25% Higher Satisfaction", source: "Moxo Research", sourceUrl: "https://www.moxo.com/blog/best-white-label-client-portal", content: "White-label portals reduce email volume by 60%, speed up projects 40%, improve satisfaction 25%, cut admin overhead 50%.", category: "metric" },
    ]
  }
];
