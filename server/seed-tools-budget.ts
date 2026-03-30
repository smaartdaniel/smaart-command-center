// Tools & Platforms and Budget Calculator seed data for each segment

export interface ToolSeed {
  name: string;
  type: string;
  url: string;
  description: string;
  pricing: string;
  campaigns: string[];
}

export interface BudgetConfigSeed {
  minMonthly: number;
  recommendedMonthly: number;
  maxMonthly: number;
  avgCPL: number;
  avgCPC: number;
  avgCPM: number;
  conversionRate: number;
  platformFee: number;
}

export const SEGMENT_TOOLS: Record<string, ToolSeed[]> = {
  "first-party-data": [
    { name: "Google Tag Manager", type: "tool", url: "https://tagmanager.google.com", description: "Free tag management system that lets you deploy tracking pixels, conversion tags, and analytics code without editing site code. Essential for SMAART to manage all pixels from one dashboard.", pricing: "Free", campaigns: ["Conversion Tracking", "Retargeting", "Analytics"] },
    { name: "Segment CDP", type: "platform", url: "https://segment.com", description: "Customer Data Platform that collects data from every touchpoint and routes it to 300+ marketing tools. Gives SMAART a single source of truth for all customer interactions.", pricing: "$120/mo", campaigns: ["Audience Sync", "Data Enrichment", "Cross-Platform Tracking"] },
    { name: "OneTrust", type: "tool", url: "https://www.onetrust.com", description: "Consent and privacy management platform for cookie banners, CCPA compliance, and data governance. Protects SMAART from regulatory fines while building trust.", pricing: "$200/mo", campaigns: ["Consent Management", "Privacy Compliance", "Cookie Consent"] },
    { name: "GoHighLevel", type: "platform", url: "https://www.gohighlevel.com", description: "All-in-one CRM and marketing automation platform SMAART uses for lead management, email sequences, pipeline tracking, and client communication.", pricing: "$297/mo", campaigns: ["Lead Gen", "Email Nurture", "Pipeline Management", "SMS Campaigns"] },
    { name: "Cookiebot", type: "tool", url: "https://www.cookiebot.com", description: "Automated cookie consent solution that scans your site, categorizes cookies, and displays a compliant consent banner. Supports Google Consent Mode v2.", pricing: "Free (up to 100 pages)", campaigns: ["Consent Management", "CCPA Compliance", "Cookie Scanning"] },
  ],
  "cross-device": [
    { name: "LiveRamp", type: "platform", url: "https://liveramp.com", description: "Identity resolution platform that connects offline customer data to online identities across devices. Enables SMAART to match CRM contacts to digital ad profiles.", pricing: "Custom (starts ~$1,000/mo)", campaigns: ["Identity Resolution", "Audience Onboarding", "Cross-Device Matching"] },
    { name: "Meta Custom Audiences", type: "tool", url: "https://business.facebook.com/adsmanager", description: "Upload your CRM customer lists to Meta and match them to Facebook/Instagram profiles for targeted advertising. Match rates of 40-70% for quality email lists.", pricing: "Free (ad spend separate)", campaigns: ["Retargeting", "Lookalike Audiences", "Customer Suppression"] },
    { name: "Google Customer Match", type: "tool", url: "https://ads.google.com", description: "Upload first-party data to Google Ads to target known customers across Search, YouTube, Gmail, and Display. Higher intent targeting than standard audiences.", pricing: "Free (ad spend separate)", campaigns: ["Search Retargeting", "YouTube Targeting", "Gmail Ads", "Display Retargeting"] },
    { name: "AppsFlyer", type: "analytics", url: "https://www.appsflyer.com", description: "Mobile attribution and marketing analytics platform that tracks cross-device user journeys. Helps SMAART understand which touchpoints drive conversions.", pricing: "$0.05-0.10/conversion", campaigns: ["Mobile Attribution", "Cross-Device Analytics", "Deep Linking"] },
    { name: "Lotame", type: "platform", url: "https://www.lotame.com", description: "Data management platform for building, enriching, and activating audience segments across channels. Adds third-party data layers to SMAART's first-party data.", pricing: "Custom pricing", campaigns: ["Audience Enrichment", "Data Marketplace", "Cross-Channel Activation"] },
  ],
  "geofencing": [
    { name: "Simpli.fi", type: "platform", url: "https://simpli.fi", description: "Programmatic advertising platform specializing in addressable geofencing and location-based targeting. Draw custom boundaries around any physical location to target visitors.", pricing: "$5,000/mo minimum", campaigns: ["Geofencing", "Addressable Targeting", "Event Targeting", "Competitor Conquesting"] },
    { name: "GroundTruth", type: "platform", url: "https://www.groundtruth.com", description: "Location intelligence platform with verified visit data. Target users who have physically visited competitor locations, industry events, or business districts.", pricing: "Custom (CPM-based)", campaigns: ["Competitor Conquesting", "Neighborhood Targeting", "Foot Traffic Attribution"] },
    { name: "Reveal Mobile (Mira)", type: "tool", url: "https://www.revealmobile.com", description: "Location audience platform that builds targetable segments from real-world visitation data. Ideal for targeting South Florida business owners by where they work and network.", pricing: "$2,500/mo", campaigns: ["Location Audiences", "Visitation Analytics", "Event Targeting"] },
    { name: "Foursquare", type: "analytics", url: "https://foursquare.com/products/targeting", description: "Uses its massive location dataset to build precise audience segments based on real-world behavior. 14+ billion check-ins power highly accurate targeting.", pricing: "Custom pricing", campaigns: ["Place-Based Targeting", "Audience Insights", "Attribution Analytics"] },
  ],
  "programmatic": [
    { name: "The Trade Desk", type: "platform", url: "https://www.thetradedesk.com", description: "Leading independent demand-side platform (DSP) for programmatic advertising across display, video, audio, CTV, and native. Best-in-class data marketplace and reporting.", pricing: "Platform fee + CPM-based", campaigns: ["Display", "Video", "CTV", "Audio", "Native", "DOOH"] },
    { name: "AdRoll", type: "platform", url: "https://www.adroll.com", description: "Growth marketing platform combining retargeting, prospecting, and email in one dashboard. Easier to use than enterprise DSPs, ideal for mid-market companies like SMAART.", pricing: "$36/mo + ad spend", campaigns: ["Retargeting", "Prospecting", "Brand Awareness", "Email Retargeting"] },
    { name: "DV360 (Display & Video 360)", type: "platform", url: "https://marketingplatform.google.com/about/display-video-360/", description: "Google's enterprise DSP with access to the largest programmatic inventory. Integrates natively with Google Analytics and Google Ads for unified measurement.", pricing: "Platform fee + CPM", campaigns: ["Display", "Video", "Native", "Audio", "Connected TV"] },
    { name: "StackAdapt", type: "platform", url: "https://www.stackadapt.com", description: "Multi-channel programmatic platform known for its intuitive UI and strong B2B targeting capabilities. Native, display, video, CTV, and audio in one platform.", pricing: "Self-serve, CPM-based", campaigns: ["Native Ads", "Display", "Video", "CTV", "In-Game Ads"] },
    { name: "Lotame", type: "tool", url: "https://www.lotame.com", description: "Data management platform for enriching programmatic audiences with third-party data. Layer demographics, interests, and purchase intent onto SMAART's campaigns.", pricing: "Custom pricing", campaigns: ["Audience Enrichment", "Data Segments", "Lookalike Modeling"] },
  ],
  "ctv-audio": [
    { name: "Roku Ads", type: "platform", url: "https://advertising.roku.com", description: "Reach cord-cutters on the largest CTV platform in the US. Roku reaches 80M+ households with non-skippable, TV-quality ad placements.", pricing: "$500 minimum campaign", campaigns: ["Brand Awareness", "Video Pre-Roll", "Sponsored Tiles", "Screensaver Ads"] },
    { name: "Spotify Ad Studio", type: "platform", url: "https://ads.spotify.com", description: "Self-serve audio advertising platform reaching 500M+ listeners. Create 15-30 second audio ads targeting by demographics, interests, listening habits, and location.", pricing: "$250 minimum campaign", campaigns: ["Audio Ads", "Podcast Ads", "Video Takeover", "Sponsored Playlists"] },
    { name: "Hulu Ads", type: "platform", url: "https://advertising.hulu.com", description: "Premium streaming ad inventory on Disney's Hulu platform. Non-skippable ads with 95%+ completion rates in a brand-safe, living room environment.", pricing: "$500 minimum (self-serve)", campaigns: ["Brand Awareness", "Video Ads", "Binge Ads", "GatewayGo Interactive"] },
    { name: "iHeartMedia", type: "platform", url: "https://www.iheartmedia.com/advertising", description: "Largest audio company in America with 850+ radio stations and the top podcast network. Reach South Florida commuters and business owners through local radio and podcasts.", pricing: "Custom pricing", campaigns: ["Radio Spots", "Podcast Sponsorship", "Digital Audio", "Live Events"] },
    { name: "SiriusXM / Pandora", type: "platform", url: "https://www.siriusxmmedia.com", description: "Premium audio advertising across SiriusXM satellite radio and Pandora streaming. Reach affluent audiences in vehicles and at work.", pricing: "$5,000+ minimum", campaigns: ["Audio Ads", "Podcast Ads", "Branded Stations", "Programmatic Audio"] },
  ],
  "meta-ads": [
    { name: "Meta Ads Manager", type: "platform", url: "https://business.facebook.com/adsmanager", description: "The primary interface for creating, managing, and optimizing Facebook and Instagram ad campaigns. Full control over targeting, bidding, creative, and reporting.", pricing: "Free (ad spend separate)", campaigns: ["Lead Gen", "Retargeting", "Brand Awareness", "Conversions", "Traffic"] },
    { name: "Meta Business Suite", type: "tool", url: "https://business.facebook.com", description: "Unified dashboard for managing Facebook and Instagram business presence, including post scheduling, inbox management, and basic ad insights.", pricing: "Free", campaigns: ["Organic Content", "Community Management", "Inbox Management"] },
    { name: "AdEspresso", type: "tool", url: "https://adespresso.com", description: "Meta advertising optimization tool that simplifies A/B testing, automates rules, and provides actionable analytics. Perfect for testing ad creative variations at scale.", pricing: "$49/mo", campaigns: ["A/B Testing", "Ad Optimization", "Reporting", "Campaign Management"] },
    { name: "Madgicx", type: "analytics", url: "https://madgicx.com", description: "AI-powered Meta ads optimization platform with audience automation, creative insights, and budget allocation tools. Uses machine learning to find winning combinations.", pricing: "$44/mo", campaigns: ["Audience AI", "Creative Analytics", "Budget Optimization", "Automation Rules"] },
    { name: "Meta Conversions API", type: "api", url: "https://developers.facebook.com/docs/marketing-api/conversions-api", description: "Server-side tracking API that sends conversion events directly from your server to Meta, bypassing browser limitations. Critical for accurate tracking in a cookieless world.", pricing: "Free", campaigns: ["Server-Side Tracking", "Conversion Optimization", "Data Reliability"] },
  ],
  "google-ads": [
    { name: "Google Ads", type: "platform", url: "https://ads.google.com", description: "The world's largest advertising platform covering Search, Display, YouTube, Shopping, and Performance Max campaigns. Essential for capturing high-intent insurance searches.", pricing: "Free (ad spend separate)", campaigns: ["Search", "Display", "YouTube", "Performance Max", "Local Services"] },
    { name: "Google Analytics 4", type: "analytics", url: "https://analytics.google.com", description: "Event-based analytics platform for understanding user behavior across web and app. GA4's predictive audiences and cross-device reporting are critical for SMAART.", pricing: "Free", campaigns: ["Conversion Tracking", "Audience Building", "Attribution Modeling", "Predictive Analytics"] },
    { name: "Optmyzr", type: "tool", url: "https://www.optmyzr.com", description: "Google Ads optimization and automation tool with one-click optimizations, custom rule engines, and PPC reporting. Saves hours on account management weekly.", pricing: "$208/mo", campaigns: ["Bid Management", "Ad Testing", "Budget Pacing", "Quality Score Optimization"] },
    { name: "Google Keyword Planner", type: "tool", url: "https://ads.google.com/home/tools/keyword-planner/", description: "Free keyword research tool built into Google Ads. Find search volumes, competition levels, and bid estimates for insurance and financial services keywords.", pricing: "Free", campaigns: ["Keyword Research", "Search Volume Analysis", "Bid Estimation"] },
    { name: "SpyFu", type: "analytics", url: "https://www.spyfu.com", description: "Competitive intelligence tool that reveals competitors' Google Ads keywords, ad copy, and estimated budgets. See exactly what other insurance agencies in South Florida are bidding on.", pricing: "$39/mo", campaigns: ["Competitor Analysis", "Keyword Research", "Ad Copy Research", "PPC Analytics"] },
  ],
  "content-contextual": [
    { name: "Taboola", type: "platform", url: "https://www.taboola.com", description: "World's largest content discovery platform powering native ads on premium publishers like NBC, USA Today, and Business Insider. Drive awareness through recommended content.", pricing: "$10/day minimum", campaigns: ["Native Ads", "Content Discovery", "Brand Awareness", "Lead Gen"] },
    { name: "Outbrain", type: "platform", url: "https://www.outbrain.com", description: "Native advertising platform reaching 1B+ users on premium publisher sites. Outbrain's Smartfeed technology surfaces SMAART content alongside trusted editorial content.", pricing: "CPC-based, ~$0.30-1.00", campaigns: ["Content Amplification", "Native Ads", "Video Discovery", "Brand Awareness"] },
    { name: "Nativo", type: "platform", url: "https://www.nativo.com", description: "True native advertising platform where ads render in the publisher's exact look and feel. Higher engagement rates than standard display because content feels editorial.", pricing: "CPM-based, custom pricing", campaigns: ["In-Feed Native", "Sponsored Content", "Brand Content", "Story Ads"] },
    { name: "Semrush Content Marketing", type: "tool", url: "https://www.semrush.com/content-marketing/", description: "Content strategy and optimization toolkit for topic research, content auditing, and SEO writing. Ensures SMAART's content ranks and resonates with target audiences.", pricing: "$129/mo (included in Guru)", campaigns: ["Content Strategy", "Topic Research", "SEO Optimization", "Content Audit"] },
    { name: "WordPress + Yoast", type: "tool", url: "https://yoast.com", description: "The leading SEO plugin for WordPress that guides on-page optimization, readability, and schema markup. Essential for SMAART's blog and educational content.", pricing: "$99/year (Premium)", campaigns: ["SEO", "Blog Optimization", "Schema Markup", "Content Analysis"] },
  ],
  "referral": [
    { name: "ReferralCandy", type: "platform", url: "https://www.referralcandy.com", description: "Automated referral marketing platform that makes it easy to launch and manage refer-a-friend programs. Tracks referrals, automates rewards, and provides analytics.", pricing: "$59/mo", campaigns: ["Referral Program", "Reward Automation", "Viral Loops"] },
    { name: "PartnerStack", type: "platform", url: "https://www.partnerstack.com", description: "Partner ecosystem platform for managing referral partners, affiliates, and strategic alliances. Track partner performance and automate commission payouts.", pricing: "Custom pricing", campaigns: ["Partner Management", "Affiliate Tracking", "Commission Automation"] },
    { name: "GoHighLevel", type: "platform", url: "https://www.gohighlevel.com", description: "SMAART's CRM can power referral tracking through custom pipelines, automated follow-up sequences, and attribution tracking for referred leads.", pricing: "$297/mo (already in use)", campaigns: ["Referral Tracking", "Automated Follow-Up", "Pipeline Management", "SMS/Email Nurture"] },
    { name: "Rewardful", type: "tool", url: "https://www.rewardful.com", description: "Simple affiliate and referral tracking for SaaS and service businesses. Create unique referral links, track conversions, and manage payouts from one dashboard.", pricing: "$49/mo", campaigns: ["Affiliate Programs", "Referral Links", "Commission Tracking"] },
  ],
  "x-ads": [
    { name: "X Ads Manager", type: "platform", url: "https://ads.x.com", description: "Self-serve advertising platform for X (formerly Twitter) with campaign objectives for reach, engagement, website traffic, and conversions. Target by interests, keywords, and followers.", pricing: "Free (ad spend separate)", campaigns: ["Promoted Posts", "Follower Campaigns", "Website Traffic", "Lead Gen"] },
    { name: "Typefully", type: "tool", url: "https://typefully.com", description: "Professional X content creation and scheduling tool with thread writing, analytics, and optimal posting time recommendations. Grow SMAART's organic X presence.", pricing: "$12.50/mo", campaigns: ["Content Scheduling", "Thread Publishing", "Analytics", "Growth Tracking"] },
    { name: "Hootsuite", type: "tool", url: "https://www.hootsuite.com", description: "Social media management platform for scheduling posts, monitoring mentions, and analyzing performance across X and other platforms from one dashboard.", pricing: "$99/mo", campaigns: ["Social Scheduling", "Social Listening", "Analytics", "Team Collaboration"] },
    { name: "SparkToro", type: "analytics", url: "https://sparktoro.com", description: "Audience intelligence tool that reveals where your target audience hangs out online, who they follow, and what they engage with. Find the right X accounts to target.", pricing: "$50/mo", campaigns: ["Audience Research", "Influencer Discovery", "Content Strategy"] },
  ],
  "email": [
    { name: "GoHighLevel", type: "platform", url: "https://www.gohighlevel.com", description: "SMAART's primary CRM with built-in email marketing, automation workflows, SMS integration, and pipeline management. All email campaigns should originate here.", pricing: "$297/mo (already in use)", campaigns: ["Welcome Sequences", "Nurture Drips", "Win-Back Campaigns", "Newsletter"] },
    { name: "Mailchimp", type: "platform", url: "https://mailchimp.com", description: "Industry-leading email marketing platform with advanced segmentation, A/B testing, predictive analytics, and a massive template library. Best deliverability rates in the industry.", pricing: "$20/mo (Essentials)", campaigns: ["Email Campaigns", "A/B Testing", "Automation", "Landing Pages"] },
    { name: "ActiveCampaign", type: "platform", url: "https://www.activecampaign.com", description: "Marketing automation platform combining email, CRM, and machine learning. Site tracking, lead scoring, and predictive sending optimize every email SMAART sends.", pricing: "$49/mo", campaigns: ["Email Automation", "Lead Scoring", "Site Tracking", "Predictive Sending"] },
    { name: "SendGrid", type: "api", url: "https://sendgrid.com", description: "Transactional and marketing email API with best-in-class deliverability. Use for automated notifications, receipts, and high-volume email sends.", pricing: "Free (100 emails/day)", campaigns: ["Transactional Email", "API Integration", "Email Deliverability"] },
    { name: "Litmus", type: "tool", url: "https://www.litmus.com", description: "Email testing and analytics platform that previews emails across 100+ email clients and devices. Ensures every SMAART email looks perfect before sending.", pricing: "$99/mo", campaigns: ["Email Testing", "Preview Rendering", "Spam Testing", "Analytics"] },
  ],
  "tracking": [
    { name: "Google Tag Manager", type: "tool", url: "https://tagmanager.google.com", description: "Free tag management system for deploying and managing all tracking pixels, conversion tags, and custom events without touching site code.", pricing: "Free", campaigns: ["Tag Management", "Conversion Tracking", "Event Tracking", "Pixel Deployment"] },
    { name: "Segment", type: "platform", url: "https://segment.com", description: "Customer data infrastructure that collects events from your website and routes them to every analytics and marketing tool. Single source of truth for all tracking.", pricing: "$120/mo", campaigns: ["Data Collection", "Event Routing", "Identity Resolution", "Data Warehousing"] },
    { name: "Hotjar", type: "analytics", url: "https://www.hotjar.com", description: "Behavior analytics tool with heatmaps, session recordings, and user surveys. See exactly how visitors interact with SMAART's website and where they drop off.", pricing: "$39/mo", campaigns: ["Heatmaps", "Session Recordings", "User Surveys", "Conversion Funnels"] },
    { name: "FullStory", type: "analytics", url: "https://www.fullstory.com", description: "Digital experience intelligence platform with session replay, frustration signals, and conversion analytics. Identify and fix UX issues costing SMAART leads.", pricing: "$199/mo", campaigns: ["Session Replay", "Error Tracking", "Frustration Detection", "Conversion Analytics"] },
    { name: "CallRail", type: "tool", url: "https://www.callrail.com", description: "Call tracking and analytics platform that ties phone calls back to specific ads, keywords, and campaigns. Critical for insurance where many conversions happen by phone.", pricing: "$45/mo", campaigns: ["Call Tracking", "Call Recording", "Source Attribution", "Form Tracking"] },
  ],
  "analytics": [
    { name: "Looker Studio", type: "platform", url: "https://lookerstudio.google.com", description: "Free data visualization and dashboarding tool from Google. Connect all data sources (GA4, Ads, CRM) to create executive-ready marketing dashboards for SMAART.", pricing: "Free", campaigns: ["Executive Dashboards", "Channel Reports", "Custom Visualizations"] },
    { name: "Google Analytics 4", type: "analytics", url: "https://analytics.google.com", description: "Event-based analytics platform providing cross-device user journey insights, predictive audiences, and attribution modeling. The foundation of SMAART's measurement stack.", pricing: "Free", campaigns: ["Web Analytics", "Conversion Tracking", "Audience Insights", "Attribution"] },
    { name: "Supermetrics", type: "tool", url: "https://supermetrics.com", description: "Data connector that pulls marketing data from 100+ sources (Meta, Google, LinkedIn, email) into Looker Studio, Google Sheets, or your data warehouse.", pricing: "$39/mo", campaigns: ["Data Integration", "Automated Reporting", "Cross-Channel Analytics"] },
    { name: "Databox", type: "platform", url: "https://databox.com", description: "Business analytics platform with 70+ native integrations, custom dashboards, goal tracking, and automated alerts. Get real-time KPIs on mobile and TV displays.", pricing: "$72/mo", campaigns: ["KPI Tracking", "Goal Monitoring", "Automated Alerts", "Mobile Dashboards"] },
    { name: "Triple Whale", type: "analytics", url: "https://www.triplewhale.com", description: "Attribution and analytics platform designed for DTC and service businesses. Tracks true ROAS across all channels with server-side tracking and AI insights.", pricing: "$129/mo", campaigns: ["Multi-Touch Attribution", "ROAS Tracking", "Creative Analytics", "AI Insights"] },
  ],
  "creative-playbook": [
    { name: "Canva Pro", type: "tool", url: "https://www.canva.com", description: "Design platform with thousands of templates for social media ads, presentations, and marketing materials. Brand Kit feature ensures all SMAART designs stay on-brand.", pricing: "$13/mo per user", campaigns: ["Social Ads", "Display Ads", "Presentations", "Brand Assets"] },
    { name: "CapCut", type: "tool", url: "https://www.capcut.com", description: "Professional video editing tool (by ByteDance) with AI-powered features: auto-captions, background removal, templates, and effects. Perfect for creating short-form video ads.", pricing: "Free (Pro $8/mo)", campaigns: ["Video Ads", "Social Reels", "Testimonial Videos", "UGC-Style Content"] },
    { name: "Frame.io", type: "platform", url: "https://frame.io", description: "Video review and collaboration platform for managing creative approvals. Share video drafts, collect timestamped feedback, and maintain version control for ad creative.", pricing: "$15/mo", campaigns: ["Creative Review", "Video Approvals", "Version Control", "Team Collaboration"] },
    { name: "Figma", type: "tool", url: "https://www.figma.com", description: "Collaborative design tool for creating ad mockups, landing pages, and brand guidelines. Real-time collaboration means Ray, Gus, and Daniel can review designs together.", pricing: "Free (Pro $15/mo)", campaigns: ["Ad Mockups", "Landing Page Design", "Brand Guidelines", "Prototyping"] },
    { name: "Foreplay", type: "tool", url: "https://www.foreplay.co", description: "Ad creative swipe file and inspiration tool. Save competitor ads from Meta Ad Library, organize by category, and use as reference for SMAART's creative briefs.", pricing: "$49/mo", campaigns: ["Competitive Research", "Creative Briefs", "Ad Swipe Files", "Inspiration"] },
  ],
  "positioning": [
    { name: "SEMrush", type: "platform", url: "https://www.semrush.com", description: "All-in-one competitive intelligence platform for SEO, PPC, content, and social media research. Analyze competitors' organic and paid strategies in the insurance space.", pricing: "$129/mo", campaigns: ["Competitor Analysis", "SEO Research", "PPC Intelligence", "Content Gap Analysis"] },
    { name: "SparkToro", type: "analytics", url: "https://sparktoro.com", description: "Audience research tool that reveals where your target market spends time online, what they read, who they follow, and what they search for. Essential for positioning.", pricing: "$50/mo", campaigns: ["Audience Research", "Media Planning", "Influencer Discovery", "Content Strategy"] },
    { name: "SimilarWeb", type: "analytics", url: "https://www.similarweb.com", description: "Digital intelligence platform for benchmarking SMAART against competitors. See traffic volumes, traffic sources, audience overlap, and engagement metrics for any website.", pricing: "$149/mo", campaigns: ["Competitive Benchmarking", "Traffic Analysis", "Market Research", "Industry Trends"] },
    { name: "Brandwatch", type: "tool", url: "https://www.brandwatch.com", description: "Social listening and consumer intelligence platform. Monitor what people say about SMAART, competitors, and the insurance industry across social media and the web.", pricing: "Custom pricing", campaigns: ["Social Listening", "Brand Monitoring", "Sentiment Analysis", "Trend Detection"] },
  ],
  "client-app": [
    { name: "GoHighLevel", type: "platform", url: "https://www.gohighlevel.com", description: "White-label client portal solution with document sharing, messaging, appointment booking, and pipeline visibility. SMAART's primary CRM can also serve as the client-facing app.", pricing: "$297/mo (already in use)", campaigns: ["Client Portal", "Appointment Booking", "Document Sharing", "Messaging"] },
    { name: "Moxo", type: "platform", url: "https://www.moxo.com", description: "Client interaction workspace for professional services firms. Secure document exchange, digital signatures, workflow automation, and branded client experience.", pricing: "$100/mo", campaigns: ["Client Onboarding", "Document Exchange", "Digital Signatures", "Workflow Automation"] },
    { name: "Glasscubes", type: "platform", url: "https://www.glasscubes.com", description: "Client portal and collaboration platform designed for accounting and professional services. Automated document requests, approval workflows, and client communication.", pricing: "$50/mo", campaigns: ["Document Requests", "Client Collaboration", "Approval Workflows", "File Sharing"] },
    { name: "Copilot", type: "platform", url: "https://www.copilot.com", description: "Modern client portal platform for service businesses. Combines billing, messaging, file sharing, and intake forms in a beautiful branded experience.", pricing: "$39/mo", campaigns: ["Client Portal", "Billing", "Intake Forms", "Helpdesk"] },
  ],
};

export const SEGMENT_BUDGET_CONFIGS: Record<string, BudgetConfigSeed> = {
  "first-party-data": {
    minMonthly: 500,
    recommendedMonthly: 2000,
    maxMonthly: 5000,
    avgCPL: 45,
    avgCPC: 2.50,
    avgCPM: 12,
    conversionRate: 0.035,
    platformFee: 297,
  },
  "cross-device": {
    minMonthly: 1000,
    recommendedMonthly: 3000,
    maxMonthly: 8000,
    avgCPL: 55,
    avgCPC: 3.00,
    avgCPM: 15,
    conversionRate: 0.03,
    platformFee: 500,
  },
  "geofencing": {
    minMonthly: 2000,
    recommendedMonthly: 5000,
    maxMonthly: 15000,
    avgCPL: 65,
    avgCPC: 4.50,
    avgCPM: 18,
    conversionRate: 0.025,
    platformFee: 750,
  },
  "programmatic": {
    minMonthly: 3000,
    recommendedMonthly: 7500,
    maxMonthly: 20000,
    avgCPL: 70,
    avgCPC: 3.50,
    avgCPM: 8,
    conversionRate: 0.02,
    platformFee: 500,
  },
  "ctv-audio": {
    minMonthly: 2500,
    recommendedMonthly: 7500,
    maxMonthly: 25000,
    avgCPL: 85,
    avgCPC: 5.00,
    avgCPM: 25,
    conversionRate: 0.015,
    platformFee: 250,
  },
  "meta-ads": {
    minMonthly: 1500,
    recommendedMonthly: 5000,
    maxMonthly: 15000,
    avgCPL: 35,
    avgCPC: 2.00,
    avgCPM: 10,
    conversionRate: 0.04,
    platformFee: 49,
  },
  "google-ads": {
    minMonthly: 2000,
    recommendedMonthly: 6000,
    maxMonthly: 20000,
    avgCPL: 50,
    avgCPC: 8.50,
    avgCPM: 35,
    conversionRate: 0.05,
    platformFee: 208,
  },
  "content-contextual": {
    minMonthly: 1000,
    recommendedMonthly: 3500,
    maxMonthly: 10000,
    avgCPL: 40,
    avgCPC: 0.75,
    avgCPM: 6,
    conversionRate: 0.02,
    platformFee: 129,
  },
  "referral": {
    minMonthly: 500,
    recommendedMonthly: 2000,
    maxMonthly: 5000,
    avgCPL: 25,
    avgCPC: 1.50,
    avgCPM: 8,
    conversionRate: 0.08,
    platformFee: 59,
  },
  "x-ads": {
    minMonthly: 1000,
    recommendedMonthly: 3000,
    maxMonthly: 8000,
    avgCPL: 60,
    avgCPC: 3.50,
    avgCPM: 12,
    conversionRate: 0.025,
    platformFee: 112,
  },
  "email": {
    minMonthly: 300,
    recommendedMonthly: 1500,
    maxMonthly: 5000,
    avgCPL: 15,
    avgCPC: 0.50,
    avgCPM: 3,
    conversionRate: 0.06,
    platformFee: 297,
  },
  "tracking": {
    minMonthly: 200,
    recommendedMonthly: 1000,
    maxMonthly: 3000,
    avgCPL: 0,
    avgCPC: 0,
    avgCPM: 0,
    conversionRate: 0,
    platformFee: 400,
  },
  "analytics": {
    minMonthly: 200,
    recommendedMonthly: 800,
    maxMonthly: 2500,
    avgCPL: 0,
    avgCPC: 0,
    avgCPM: 0,
    conversionRate: 0,
    platformFee: 250,
  },
  "creative-playbook": {
    minMonthly: 500,
    recommendedMonthly: 2000,
    maxMonthly: 6000,
    avgCPL: 0,
    avgCPC: 0,
    avgCPM: 0,
    conversionRate: 0,
    platformFee: 150,
  },
  "positioning": {
    minMonthly: 500,
    recommendedMonthly: 2000,
    maxMonthly: 5000,
    avgCPL: 0,
    avgCPC: 0,
    avgCPM: 0,
    conversionRate: 0,
    platformFee: 330,
  },
  "client-app": {
    minMonthly: 300,
    recommendedMonthly: 1000,
    maxMonthly: 3000,
    avgCPL: 0,
    avgCPC: 0,
    avgCPM: 0,
    conversionRate: 0,
    platformFee: 350,
  },
};
