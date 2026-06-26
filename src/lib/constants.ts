export const COMPANY = {
  name: "Company Avenue Advisory",
  fullName: "Company Avenue Advisory Pvt. Ltd.",
  tagline: "Trusted Business Compliance Partner",
  email: "info@companyavenue.in",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  address: "123, Business Hub, Connaught Place, New Delhi – 110001",
  workingHours: "Mon – Sat: 9:00 AM – 7:00 PM",
  website: "https://companyavenue.in",
  gstin: "07AABCC1234D1Z5",
  founded: "2009",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        group: "Company Formation",
        items: [
          { label: "Private Limited Company", href: "/services/private-limited-company" },
          { label: "Limited Liability Partnership", href: "/services/llp-registration" },
          { label: "One Person Company", href: "/services/one-person-company" },
        ],
      },
      {
        group: "Tax & GST",
        items: [
          { label: "GST Registration", href: "/services/gst-registration" },
          { label: "GST Filing", href: "/services/gst-filing" },
          { label: "Income Tax Return", href: "/services/income-tax-return" },
          { label: "TDS Return", href: "/services/tds-return" },
        ],
      },
      {
        group: "Compliance",
        items: [
          { label: "Trademark Registration", href: "/services/trademark-registration" },
          { label: "ROC Compliance", href: "/services/roc-compliance" },
          { label: "Annual Filing", href: "/services/annual-filing" },
          { label: "Secretarial Services", href: "/services/secretarial-services" },
        ],
      },
      {
        group: "Accounting & HR",
        items: [
          { label: "Accounting & Bookkeeping", href: "/services/accounting-bookkeeping" },
          { label: "Payroll Management", href: "/services/payroll-management" },
          { label: "PF & ESIC", href: "/services/pf-esic" },
          { label: "Professional Tax", href: "/services/professional-tax" },
        ],
      },
      {
        group: "Startup & MSME",
        items: [
          { label: "MSME Registration", href: "/services/msme-registration" },
          { label: "Startup India", href: "/services/startup-india" },
          { label: "IEC Registration", href: "/services/iec-registration" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      {
        group: "Sectors",
        items: [
          { label: "IT & Technology", href: "/industries/it-technology" },
          { label: "Manufacturing", href: "/industries/manufacturing" },
          { label: "Healthcare", href: "/industries/healthcare" },
          { label: "Retail & Ecommerce", href: "/industries/retail-ecommerce" },
          { label: "Import & Export", href: "/industries/import-export" },
          { label: "Real Estate", href: "/industries/real-estate" },
        ],
      },
    ],
  },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: "private-limited-company",
    title: "Private Limited Company",
    shortDesc: "Incorporate your Pvt. Ltd. company with end-to-end support and fast government processing.",
    icon: "Building2",
    category: "Company Formation",
    popular: true,
  },
  {
    id: "llp-registration",
    title: "LLP Registration",
    shortDesc: "Register a Limited Liability Partnership with flexible structure and lower compliance burden.",
    icon: "Users",
    category: "Company Formation",
  },
  {
    id: "one-person-company",
    title: "One Person Company",
    shortDesc: "Start your solo business journey with complete limited liability protection.",
    icon: "User",
    category: "Company Formation",
  },
  {
    id: "gst-registration",
    title: "GST Registration",
    shortDesc: "Obtain your GSTIN quickly and stay compliant from day one of business operations.",
    icon: "Receipt",
    category: "Tax & GST",
    popular: true,
  },
  {
    id: "gst-filing",
    title: "GST Return Filing",
    shortDesc: "Monthly, quarterly, and annual GST returns filed accurately and on time.",
    icon: "FileText",
    category: "Tax & GST",
  },
  {
    id: "income-tax-return",
    title: "Income Tax Return",
    shortDesc: "Expert ITR filing for individuals, firms, and companies across all tax slabs.",
    icon: "IndianRupee",
    category: "Tax & GST",
    popular: true,
  },
  {
    id: "trademark-registration",
    title: "Trademark Registration",
    shortDesc: "Protect your brand identity with trademark registration and monitoring services.",
    icon: "ShieldCheck",
    category: "Compliance",
  },
  {
    id: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    shortDesc: "Accurate books, financial statements, and MIS reports for informed decisions.",
    icon: "BookOpen",
    category: "Accounting & HR",
  },
  {
    id: "payroll-management",
    title: "Payroll Management",
    shortDesc: "End-to-end payroll processing, salary structuring, and statutory compliance.",
    icon: "Wallet",
    category: "Accounting & HR",
  },
  {
    id: "msme-registration",
    title: "MSME Registration",
    shortDesc: "Get your Udyam certificate and unlock government benefits for your business.",
    icon: "Award",
    category: "Startup & MSME",
  },
  {
    id: "startup-india",
    title: "Startup India",
    shortDesc: "DPIIT recognition for tax exemptions, funding access, and government schemes.",
    icon: "Rocket",
    category: "Startup & MSME",
  },
  {
    id: "iec-registration",
    title: "IEC Registration",
    shortDesc: "Import Export Code registration for businesses dealing in international trade.",
    icon: "Globe",
    category: "Startup & MSME",
  },
];

export const STATS = [
  { value: 1000, suffix: "+", label: "Businesses Served" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 5000, suffix: "+", label: "Returns Filed" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

export const TESTIMONIALS = [
  {
    name: "Arjun Sharma",
    role: "Founder",
    company: "TechBridge Solutions",
    rating: 5,
    text: "Company Avenue handled our entire Pvt. Ltd. registration and GST setup. Professional, fast, and completely transparent about pricing. Highly recommended for any startup.",
    avatar: "AS",
  },
  {
    name: "Priya Mehta",
    role: "CEO",
    company: "Retail Ventures India",
    rating: 5,
    text: "We've been using their accounting and payroll services for 3 years. Zero errors, always on time. They genuinely feel like a part of our finance team.",
    avatar: "PM",
  },
  {
    name: "Rohan Kapoor",
    role: "Managing Director",
    company: "Kapoor Exports",
    rating: 5,
    text: "Got our IEC registration and trademark done in record time. The team is knowledgeable and available whenever we need them. Great value.",
    avatar: "RK",
  },
  {
    name: "Neha Singh",
    role: "Co-Founder",
    company: "HealthFirst Clinics",
    rating: 5,
    text: "Switched to Company Avenue for our annual ROC filings and ITR. The process is seamless, everything is digital, and their team proactively reminds us about deadlines.",
    avatar: "NS",
  },
  {
    name: "Vikram Patel",
    role: "Director",
    company: "Patel Manufacturing Ltd.",
    rating: 5,
    text: "Excellent MSME and Startup India registration support. Their expertise in compliance gave us confidence to focus on scaling the business.",
    avatar: "VP",
  },
];

export const TRUST_LOGOS = [
  "Google",
  "Startup India",
  "MSME",
  "DPIIT",
  "MCA",
  "GST Network",
  "Income Tax",
  "ISO Certified",
  "Google Reviews",
  "Xero",
  "Zoho Books",
  "QuickBooks",
  "Tally",
  "Slack",
  "Razorpay",
];

export const WHY_CHOOSE = [
  {
    icon: "UserCheck",
    title: "Experienced Professionals",
    desc: "CAs, CSs, and legal experts with 15+ years handling thousands of compliance cases.",
  },
  {
    icon: "Zap",
    title: "Fast Turnaround",
    desc: "Streamlined processes ensure your filings are completed faster than industry standards.",
  },
  {
    icon: "DollarSign",
    title: "Transparent Pricing",
    desc: "No hidden charges. Fixed pricing with detailed breakdowns before you commit.",
  },
  {
    icon: "Headphones",
    title: "Dedicated Relationship Manager",
    desc: "A single point of contact who knows your business and is always reachable.",
  },
  {
    icon: "CheckCircle",
    title: "End-to-End Compliance",
    desc: "From registration to annual filings — we handle it all so you can focus on growth.",
  },
  {
    icon: "Monitor",
    title: "100% Online Process",
    desc: "Fully digital workflow with secure document sharing, e-signatures, and live tracking.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Free Consultation",
    desc: "Discuss your requirements with our expert team. We assess your needs and recommend the right services.",
  },
  {
    step: "02",
    title: "Document Collection",
    desc: "We provide a precise document checklist. Upload securely through our digital portal.",
  },
  {
    step: "03",
    title: "Application Filing",
    desc: "Our experts prepare and file accurate applications with the relevant government authorities.",
  },
  {
    step: "04",
    title: "Government Processing",
    desc: "We track your application status and liaise with authorities for any clarifications required.",
  },
  {
    step: "05",
    title: "Approval & Delivery",
    desc: "Certificates and documents are delivered digitally to your email and dashboard.",
  },
  {
    step: "06",
    title: "Ongoing Support",
    desc: "Your dedicated manager ensures continued compliance with proactive reminders and advisory.",
  },
];

export const INDUSTRIES = [
  { name: "IT & Technology", icon: "Monitor", desc: "Software, SaaS, IT services & digital agencies" },
  { name: "Manufacturing", icon: "Factory", desc: "MSME, large-scale, and export manufacturers" },
  { name: "Healthcare", icon: "Heart", desc: "Clinics, diagnostics, pharma & health startups" },
  { name: "Retail & E-commerce", icon: "ShoppingBag", desc: "Online stores, marketplaces & physical retail" },
  { name: "Import & Export", icon: "Globe", desc: "Trading businesses with IEC & customs needs" },
  { name: "Real Estate", icon: "Building", desc: "Developers, agents, and property businesses" },
  { name: "Education", icon: "GraduationCap", desc: "EdTech, schools, coaching & training institutes" },
  { name: "Hospitality", icon: "Hotel", desc: "Hotels, restaurants, food & beverage businesses" },
  { name: "Finance", icon: "TrendingUp", desc: "NBFCs, brokers, fintechs & financial advisors" },
];

export const BLOG_POSTS = [
  {
    id: "private-limited-company-registration-guide",
    title: "Complete Guide to Private Limited Company Registration in India (2024)",
    excerpt: "Everything you need to know about incorporating a Pvt. Ltd. company — documents, timeline, costs, and compliance requirements.",
    category: "Company Registration",
    readTime: "8 min read",
    date: "Dec 12, 2024",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  },
  {
    id: "gst-registration-process",
    title: "GST Registration Process: Step-by-Step Guide for New Businesses",
    excerpt: "A clear walkthrough of the GST registration process, eligibility criteria, required documents, and common mistakes to avoid.",
    category: "GST",
    readTime: "6 min read",
    date: "Dec 8, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    id: "trademark-registration-india",
    title: "Why Trademark Registration is Critical for Your Brand in India",
    excerpt: "Protect your brand identity before someone else does. Understanding trademark classes, filing timelines, and enforcement.",
    category: "Trademark",
    readTime: "5 min read",
    date: "Nov 28, 2024",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
  },
];
