export interface ProjectResult {
  label: string;
  value: string;
}

export interface ProjectFeature {
  name: string;
  description: string;
}

export interface TechnicalHighlight {
  challenge: string;
  solution: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: "web" | "app" | "personal";
  projectType: string;
  screenshots: string[];
  description: string;
  demo: string;
  tags: string[];
  impact: string;
  results: ProjectResult[];
  featured: boolean;
  caseStudy?: boolean;
  // Detail page fields
  tagline?: string;
  duration?: string;
  role?: string;
  techStack?: string[];
  problemStatement?: string;
  myRole?: string;
  features?: ProjectFeature[];
  technicalHighlights?: TechnicalHighlight[];
  learnings?: string;
  githubUrl?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "shree-deepak-industries",
    title: "Shree Deepak Industries",
    category: "web",
    projectType: "Client Website",
    screenshots: [
      "/projects/shree-deepak-industries/1.png",
      "/projects/shree-deepak-industries/2.png",
      "/projects/shree-deepak-industries/3.png",
    ],
    description:
      "Corporate manufacturing website focused on trust, catalog clarity, and lead generation for industrial buyers.",
    demo: "https://shreedeepakindustries.com/",
    tags: ["Business Website", "Responsive UI", "SEO", "Lead Forms"],
    impact: "Built for credibility and inquiry-focused conversions.",
    results: [
      { label: "Lighthouse", value: "95+" },
      { label: "Mobile First", value: "100%" },
      { label: "Lead Flow", value: "Optimized" },
    ],
    featured: true,
    tagline: "Industrial credibility, engineered for the web.",
    duration: "3 weeks",
    role: "Full-Stack Developer",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Resend"],
    problemStatement:
      "Shree Deepak Industries had no online presence despite serving a broad B2B customer base. Industrial buyers were unable to verify product catalog, certifications, or contact details without phone calls — creating friction that cost them leads. The challenge was to build a professional, fast-loading site that communicated trust and drove inquiry form submissions.",
    myRole:
      "Sole developer on this project. Handled discovery, design decisions, full-stack development, deployment, and post-launch SEO setup. Collaborated directly with the client to understand product catalog structure, establish brand tone, and align on conversion goals.",
    features: [
      {
        name: "Product Catalog",
        description:
          "Structured catalog pages for all product lines with specifications, certifications, and downloadable datasheets.",
      },
      {
        name: "Lead Capture Forms",
        description:
          "Multi-step inquiry forms with server-side email routing via Resend, ensuring every submission reaches the right department.",
      },
      {
        name: "Mobile-First Layout",
        description:
          "Fully responsive design tested across devices, prioritizing field sales team use cases on mobile.",
      },
      {
        name: "SEO Foundations",
        description:
          "Structured metadata, Open Graph tags, sitemap.xml, and robots.txt configured at launch for organic discoverability.",
      },
    ],
    technicalHighlights: [
      {
        challenge:
          "Client had no structured product data — catalog content existed only as PDFs and Word documents.",
        solution:
          "Built a lightweight data model using static TypeScript objects, enabling structured rendering without a CMS while keeping update friction low for the client.",
      },
      {
        challenge:
          "Form submissions needed to reach different contacts depending on product category.",
        solution:
          "Implemented conditional routing logic in the API route using Resend, mapping form category fields to the correct recipient address.",
      },
    ],
    learnings:
      "Working with clients who have no prior web presence taught me how much of the design process is actually content strategy. Helping the client articulate their value proposition before touching code made the final site significantly stronger. Next time I'd involve the client in a structured content workshop earlier in the project.",
    images: [
      "/projects/shree-deepak-industries/1.png",
      "/projects/shree-deepak-industries/2.png",
      "/projects/shree-deepak-industries/3.png",
    ],
  },
  {
    id: 2,
    slug: "deepak-roofing",
    title: "Deepak Roofing",
    category: "web",
    projectType: "Client Website",
    screenshots: [
      "/projects/deepak-roofing/1.png",
      "/projects/deepak-roofing/2.png",
      "/projects/deepak-roofing/3.png",
    ],
    description:
      "Service-focused roofing website designed to communicate offerings quickly and drive local business enquiries.",
    demo: "https://www.deepakroofing.com/",
    tags: ["Service Website", "Mobile UX", "Performance", "Conversion"],
    impact: "Structured for faster user decisions and better service discovery.",
    results: [
      { label: "Page Speed", value: "Fast" },
      { label: "Service Clarity", value: "High" },
      { label: "CTA Placement", value: "Strategic" },
    ],
    featured: false,
  },
  {
    id: 3,
    slug: "stakehub-product",
    title: "StakeHub Product",
    category: "app",
    projectType: "Product Platform",
    screenshots: [
      "/projects/stakehub-product/1.png",
      "/projects/stakehub-product/2.png",
      "/projects/stakehub-product/3.png",
      "/projects/stakehub-product/4.png",
    ],
    description:
      "Product-facing experience for StakeHub that presents platform capabilities with a clean, task-oriented flow.",
    demo: "https://product.stakehub.in/",
    tags: ["Product UI", "Dashboard Flow", "SaaS", "Frontend"],
    impact: "Focused on onboarding clarity and feature communication.",
    results: [
      { label: "UX Flow", value: "Streamlined" },
      { label: "Feature Discovery", value: "Improved" },
      { label: "Onboarding", value: "Clear" },
    ],
    caseStudy: true,
    featured: true,
  },
  {
    id: 4,
    slug: "stakehub-main",
    title: "StakeHub",
    category: "app",
    projectType: "Brand + Product",
    screenshots: [
      "/projects/stakehub-main/1.png",
      "/projects/stakehub-main/2.png",
      "/projects/stakehub-main/3.png",
    ],
    description:
      "Core StakeHub web presence highlighting product direction, positioning, and value proposition for India's unlisted shares market.",
    demo: "https://stakehub.in/",
    tags: ["Fintech", "Brand Website", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    impact: "Strengthened brand narrative across product and marketing touchpoints.",
    results: [
      { label: "Brand Consistency", value: "Strong" },
      { label: "Messaging", value: "Clear" },
      { label: "Product Intent", value: "Focused" },
    ],
    featured: true,
    tagline: "India's platform for trading unlisted shares.",
    duration: "Ongoing (6+ months)",
    role: "Frontend Developer",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Vercel",
      "Framer Motion",
    ],
    problemStatement:
      "The unlisted shares market in India is largely opaque — investors have historically relied on brokers with information asymmetry baked in. StakeHub needed a public-facing presence that demystified the platform, built credibility with first-time investors, and clearly communicated how buying and selling pre-IPO equity works. The design had to feel trustworthy — closer to a fintech product than a broker site.",
    myRole:
      "Joined as a Frontend Developer at Stakehub Infotech. Owned the stakehub.in marketing site end-to-end: architecture, component design, animations, and deployment pipeline. Collaborated with the product and design teams on the product.stakehub.in dashboard, building reusable UI primitives used across both surfaces.",
    features: [
      {
        name: "Market Overview Section",
        description:
          "Real-time display of featured unlisted shares with price trends, sector filters, and deal status indicators to help investors make informed decisions.",
      },
      {
        name: "How It Works Walkthrough",
        description:
          "Animated step-by-step explainer that breaks down the unlisted shares process for first-time investors, reducing friction and support queries.",
      },
      {
        name: "Trust Signals Architecture",
        description:
          "SEBI registration details, transaction volume counters, press coverage, and investor testimonials structured to build credibility above the fold.",
      },
      {
        name: "Performance-Optimised Animations",
        description:
          "Scroll-triggered entrance animations using Framer Motion with reduced-motion support, all running on compositor-only properties for 60fps performance.",
      },
    ],
    technicalHighlights: [
      {
        challenge:
          "Marketing site needed live share price data without adding server-side complexity or slowing time-to-interactive.",
        solution:
          "Used Next.js ISR (Incremental Static Regeneration) with a 60-second revalidation window, keeping pages statically fast while serving near-real-time data on key routes.",
      },
      {
        challenge:
          "Framer Motion animations caused layout shifts on low-end devices during initial hydration.",
        solution:
          "Wrapped all entrance animations in a mount-gated pattern — animations only activate after the component is hydrated, eliminating CLS from SSR/CSR mismatch.",
      },
      {
        challenge:
          "Design system needed to stay consistent across the marketing site and the product dashboard built by separate teams.",
        solution:
          "Extracted shared Tailwind tokens, typography scale, and base component variants into a shared config, giving both surfaces a coherent design foundation.",
      },
    ],
    learnings:
      "Building for a regulated financial product taught me that UI credibility is a product feature, not an afterthought. Every design decision — spacing, typography weight, colour choice — signals trustworthiness to an investor considering putting real money into the platform. I'd invest more time upfront in a formal design audit process for fintech projects in future.",
    images: [
      "/projects/stakehub-main/1.png",
      "/projects/stakehub-main/2.png",
      "/projects/stakehub-main/3.png",
    ],
  },
  {
    id: 7,
    slug: "nakshatra-jyotish",
    title: "Nakshatra Jyotish",
    category: "app",
    projectType: "Product Platform",
    screenshots: [
      "/projects/nakshatra-jyotish/1.png",
      "/projects/nakshatra-jyotish/2.png",
      "/projects/nakshatra-jyotish/3.png",
    ],
    description:
      "Astrology product website focused on spiritual guidance journeys, clear service presentation, and trust-building storytelling.",
    demo: "https://nakshatra-jyotish.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    impact:
      "Crafted to improve service discovery and user confidence through a calm, conversion-focused experience.",
    results: [
      { label: "UX", value: "Guided" },
      { label: "Performance", value: "Fast" },
      { label: "Deployment", value: "Vercel" },
    ],
    featured: true,
    tagline: "Ancient wisdom, modern clarity.",
    duration: "2 weeks",
    role: "Full-Stack Developer",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Framer Motion"],
    problemStatement:
      "The client, a practising Jyotish consultant, had no digital presence and relied entirely on word-of-mouth. Potential clients visiting via referral had no way to understand service offerings, pricing, or how to book a consultation. Trust is paramount in this space — the platform had to feel calm, credible, and spiritually aligned without looking dated.",
    myRole:
      "Sole developer. Handled the full project lifecycle — discovery interviews with the client, content architecture, UI design, development, and Vercel deployment. Also set up structured data markup for Google rich results.",
    features: [
      {
        name: "Service Discovery Pages",
        description:
          "Dedicated pages for each consultation type (natal chart, muhurta, prashna) with detailed explanations, what to expect, and transparent pricing.",
      },
      {
        name: "Booking Flow",
        description:
          "Simple consultation request form with preferred date/time slots, routed to the astrologer via email, with a confirmation message for the client.",
      },
      {
        name: "Testimonials & Trust Layer",
        description:
          "Client testimonials displayed with structured layout and subtle motion, reinforcing practitioner credibility without feeling promotional.",
      },
      {
        name: "Spiritual Visual Identity",
        description:
          "Colour palette, typography, and iconography designed to evoke calm and cosmic depth while remaining clean and readable across devices.",
      },
    ],
    technicalHighlights: [
      {
        challenge:
          "Client had no written content — all copy had to be drawn out through discovery conversations and shaped for the web.",
        solution:
          "Conducted two structured discovery sessions to extract service details, philosophy, and audience. Organised outputs into a content hierarchy before writing a single line of code.",
      },
      {
        challenge:
          "The spiritual aesthetic had to be conveyed through design without resorting to heavy imagery that would slow page load.",
        solution:
          "Used CSS custom properties for a warm, muted colour system and subtle SVG motifs instead of raster images. Page weight stayed under 200kb on first load.",
      },
    ],
    learnings:
      "This project sharpened my content strategy instincts. The most impactful work wasn't writing code — it was helping the client articulate what they offer and why it matters. I'd formalise a content-first workshop as a standard part of my client onboarding for every project going forward.",
    images: [
      "/projects/nakshatra-jyotish/1.png",
      "/projects/nakshatra-jyotish/2.png",
      "/projects/nakshatra-jyotish/3.png",
    ],
  },
  {
    id: 8,
    slug: "etincelle-foods",
    title: "Etincelle Foods",
    category: "web",
    projectType: "E-Commerce",
    screenshots: [],
    description:
      "E-commerce storefront for an organic food brand — clean product discovery, trust-first brand storytelling, and a streamlined checkout path.",
    demo: "https://etincelleFoods.in/",
    tags: ["E-Commerce", "Next.js", "TypeScript", "Tailwind CSS", "Stripe", "SEO"],
    impact: "Helped an artisan organic brand move from local-only to nationwide online sales.",
    results: [
      { label: "Stack", value: "Next.js" },
      { label: "Payments", value: "Stripe" },
      { label: "SEO", value: "Optimised" },
    ],
    featured: false,
    tagline: "Organic food, simply and beautifully sold.",
    duration: "4 weeks",
    role: "Full-Stack Developer",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "PostgreSQL",
      "Prisma",
      "Vercel",
    ],
    problemStatement:
      "Etincelle Foods sold organic products through local markets with no online channel. Expanding nationally required a storefront that matched the brand's quality positioning — clean, editorial, and trustworthy — without the overhead of a Shopify subscription. The platform needed to handle product browsing, cart, checkout, and order confirmation end-to-end.",
    myRole:
      "Sole developer. Scoped the project with the founder, designed the data model for products and orders, built the full storefront and checkout pipeline, integrated Stripe, and deployed to Vercel with a CI/CD pipeline.",
    features: [
      {
        name: "Product Catalogue",
        description:
          "Category-filtered product grid with ingredient lists, origin stories, certifications, and high-resolution photography.",
      },
      {
        name: "Cart & Checkout",
        description:
          "Persistent cart with quantity management, discount code support, and a streamlined Stripe Checkout flow.",
      },
      {
        name: "Order Management",
        description:
          "Admin dashboard for viewing orders, updating fulfilment status, and triggering transactional email updates to customers.",
      },
      {
        name: "Brand Storytelling",
        description:
          "Editorial landing page sections communicating sourcing philosophy, farming partnerships, and the brand's organic certifications.",
      },
    ],
    technicalHighlights: [
      {
        challenge:
          "Product pages needed to rank for ingredient and origin keywords without sacrificing dynamic personalisation.",
        solution:
          "Used Next.js generateStaticParams to pre-render all product pages at build time, then layered dynamic cart state client-side — best of static SEO and interactive UX.",
      },
      {
        challenge:
          "Stripe webhook reliability was critical — a failed fulfilment trigger would mean an unprocessed order with no customer notification.",
        solution:
          "Implemented idempotent webhook handling with a processed event log in PostgreSQL, retrying failed notifications safely without double-processing payments.",
      },
    ],
    learnings:
      "E-commerce projects surface edge cases that generic SaaS products smooth over — partial payment failures, inventory race conditions, shipping address validation. Building this from scratch gave me deep respect for what platforms like Shopify handle invisibly. I'd evaluate build-vs-buy more carefully for commerce projects in future unless the client has specific customisation needs that justify the overhead.",
    images: [],
  },
  {
    id: 5,
    slug: "studynotion-lms",
    title: "StudyNotion – LMS",
    category: "personal",
    projectType: "Personal Project",
    screenshots: [
      "/projects/studynotion-lms/1.png",
      "/projects/studynotion-lms/2.png",
      "/projects/studynotion-lms/3.png",
    ],
    description:
      "Full-stack learning management system enabling instructors to create courses and students to purchase, enroll, and track learning progress with integrated payments.",
    demo: "https://github.com/arun-upadhayay/",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Auth", "Payments"],
    impact:
      "End-to-end LMS with role-based access, payment integration, and real-time progress tracking.",
    results: [
      { label: "Stack", value: "MERN" },
      { label: "Auth", value: "JWT + RBAC" },
      { label: "Payments", value: "Integrated" },
    ],
    featured: false,
  },
  {
    id: 6,
    slug: "stocks-watchlist",
    title: "Stocks Watchlist Dashboard",
    category: "personal",
    projectType: "Personal Project",
    screenshots: [
      "/projects/stocks-watchlist/1.png",
      "/projects/stocks-watchlist/2.png",
    ],
    description:
      "Responsive stock watchlist dashboard with real-time data visualization, interactive charts, and toggle views for Balance Sheet and Cash Flow financial metrics.",
    demo: "https://github.com/arun-upadhayay/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "ECharts", "PostgreSQL"],
    impact:
      "Optimized data fetching and reduced re-renders for smooth real-time financial data display.",
    results: [
      { label: "Charts", value: "ECharts" },
      { label: "TypeScript", value: "Full" },
      { label: "Performance", value: "Optimized" },
    ],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
