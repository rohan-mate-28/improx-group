// src/data/navStructure.js

export const departments = [
  {
    id: 'consulting',
    image: '/Consulting.webp',
    name: 'Management Consulting',
    slug: 'consulting',
    icon: 'Compass',
    tagline: 'Strategic clarity for complex challenges',
    color: 'from-blue-500 to-indigo-600',
    accent: '#6366f1',
    description: 'Improx Consulting delivers sharp, actionable strategy to help organizations navigate market complexity, drive sustainable growth, and unlock lasting institutional value.',
    subDepartments: [
      { slug: 'business-strategy', name: 'Business Strategy', desc: 'Market entry, competitive positioning, and long-term growth roadmaps.' },
      { slug: 'management-consulting', name: 'Management Consulting', desc: 'Organizational design, change management, and performance improvement.' },
      { slug: 'financial-advisory', name: 'Financial Advisory', desc: 'Investment strategy, cost optimization, and financial modeling.' },
      { slug: 'risk-compliance', name: 'Risk & Compliance', desc: 'Regulatory compliance frameworks, risk assessments, and governance.' },
      { slug: 'operations-consulting', name: 'Operations Consulting', desc: 'Supply chain optimization, process re-engineering, and efficiency audits.' }
    ]
  },
  {
    id: 'cloud',
    image: '/cloud-storage.webp',
    name: 'Cloud Architecture',
    slug: 'cloud',
    icon: 'Layers',
    tagline: 'Scale without limits, secure by design',
    color: 'from-cyan-500 to-blue-600',
    accent: '#06b6d4',
    description: 'Improx Cloud empowers businesses with hyper-scalable, modern cloud infrastructures designed to maximize operational agility and reduce total cost of ownership.',
    subDepartments: [
      { slug: 'cloud-migration', name: 'Cloud Migration', desc: 'Seamless lift-and-shift or re-architect migrations to AWS, Azure, or GCP.' },
      { slug: 'cloud-architecture', name: 'Cloud Architecture', desc: 'Scalable, resilient multi-cloud and hybrid cloud designs.' },
      { slug: 'devops-cicd', name: 'DevOps & CI/CD', desc: 'Pipeline automation, containerization with Docker and Kubernetes.' },
      { slug: 'cloud-security', name: 'Cloud Security', desc: 'IAM policies, zero-trust models, and compliance management.' },
      { slug: 'managed-cloud-services', name: 'Managed Cloud Services', desc: '24/7 monitoring, incident response, and cloud cost governance.' }
    ]
  },
  {
    id: 'marketing',
    image: '/digital-marketing.webp',
    name: 'Performance Marketing',
    slug: 'marketing',
    icon: 'Target',
    tagline: 'Campaigns that convert, brands that endure',
    color: 'from-orange-500 to-pink-600',
    accent: '#f97316',
    description: 'Improx Marketing crafts omni-channel marketing ecosystems rooted in advanced consumer insights and data-driven creative execution.',
    subDepartments: [
      { slug: 'digital-marketing', name: 'Digital Marketing', desc: 'Search engine optimization, pay-per-click management, and conversion rate optimization.' },
      { slug: 'brand-strategy', name: 'Brand Strategy', desc: 'Brand identity design, competitive positioning, and messaging architecture.' },
      { slug: 'content-marketing', name: 'Content Marketing', desc: 'Blogs, whitepapers, high-production video, and thought leadership campaigns.' },
      { slug: 'performance-marketing', name: 'Performance Marketing', desc: 'ROI-driven paid media execution on Google, Meta, LinkedIn, and programmatic networks.' },
      { slug: 'marketing-automation', name: 'Marketing Automation', desc: 'HubSpot, Marketo, and Salesforce Marketing Cloud system architectures.' }
    ]
  },
  {
    id: 'data',
    image: '/data.webp',
    name: 'Data & AI Systems',
    slug: 'data',
    icon: 'Cpu',
    tagline: 'Transform raw data into competitive advantage',
    color: 'from-green-500 to-teal-600',
    accent: '#10b981',
    description: 'Improx Data engineers the foundational platforms, quantitative models, and corporate frameworks required to turn disjointed enterprise information into an operational asset.',
    subDepartments: [
      { slug: 'data-engineering', name: 'Data Engineering', desc: 'High-throughput data pipelines, ETL/ELT architecture, data lakes, and modern warehousing solutions.' },
      { slug: 'data-analytics', name: 'Data Analytics', desc: 'Interactive dashboards, executive KPI reporting, and self-service BI systems via Tableau or Power BI.' },
      { slug: 'data-science-ml', name: 'Data Science & ML', desc: 'Predictive analytics, custom Natural Language Processing, computer vision models, and personalization engines.' },
      { slug: 'data-governance', name: 'Data Governance', desc: 'Data quality frameworks, lineage tracking, unified cataloging, and strict GDPR/CCPA compliance.' },
      { slug: 'ai-automation', name: 'AI & Automation', desc: 'Generative AI integrations, intelligent agents, and operational MLOps infrastructure.' }
    ]
  },
  {
    id: 'business-process',
    image: '/business-process.webp',
    name: 'Business Process (RPA)',
    slug: 'business-process',
    icon: 'GitMerge',
    tagline: 'Leaner operations, faster outcomes',
    color: 'from-yellow-500 to-amber-600',
    accent: '#f59e0b',
    description: 'Improx Business Process services modernize everyday corporate operations to eliminate waste, lower overhead, and accelerate process speeds.',
    subDepartments: [
      { slug: 'process-automation-rpa', name: 'Process Automation (RPA)', desc: 'UiPath, Blue Prism, and Automation Anywhere software deployments.' },
      { slug: 'bpo-services', name: 'BPO Services', desc: 'Outsourced back-office support, Finance & Accounting operations, HR administration, and scalable data verification.' },
      { slug: 'erp-implementation', name: 'ERP Implementation', desc: 'SAP, Oracle, and Microsoft Dynamics platform architecture and customization.' },
      { slug: 'lean-six-sigma', name: 'Lean & Six Sigma', desc: 'Continuous operational improvement, waste reduction, and rigorous workflow audits.' },
      { slug: 'workflow-design', name: 'Workflow Design', desc: 'End-to-end process mapping, Standard Operating Procedure (SOP) design, and operational re-engineering.' }
    ]
  },
  {
    id: 'media-publication',
    image: '/media-publication.webp',
    name: 'Media Publication',
    slug: 'media-publication',
    icon: 'Newspaper',
    tagline: 'Stories that inform, inspire, and influence',
    color: 'from-purple-500 to-violet-600',
    accent: '#8b5cf6',
    description: 'Improx Media Publication builds authoritative media properties and high-impact digital content designed to establish your brand as an industry voice.',
    subDepartments: [
      { slug: 'editorial-journalism', name: 'Editorial & Journalism', desc: 'Professional news writing, technical features, research investigations, and expert commentary.' },
      { slug: 'digital-publishing', name: 'Digital Publishing', desc: 'Online magazines, automated email newsletters, professional podcasts, and interactive webinar series.' },
      { slug: 'brand-journalism', name: 'Brand Journalism', desc: 'Corporate storytelling, expert thought leadership, and executive ghostwriting services.' },
      { slug: 'video-production', name: 'Video Production', desc: 'Explainer videos, corporate documentaries, interview series, and high-impact short-form social reels.' },
      { slug: 'press-pr', name: 'Press & PR', desc: 'Press release distribution, media relations, and targeted journalist outreach campaigns.' }
    ]
  },
  {
    id: 'market-research',
    image: '/market-reserch.webp',
    name: 'Market Research',
    slug: 'market-research',
    icon: 'LineChart',
    tagline: 'Insights that power confident decisions',
    color: 'from-rose-500 to-red-600',
    accent: '#f43f5e',
    description: 'Improx Market Research conducts deep primary and secondary market research to help businesses understand their customers, analyze their competition, and de-risk major business investments.',
    subDepartments: [
      { slug: 'quantitative-research', name: 'Quantitative Research', desc: 'Large-scale consumer surveys, rigorous statistical analysis, conjoint testing, and market segmentation models.' },
      { slug: 'qualitative-research', name: 'Qualitative Research', desc: 'Moderated focus groups, in-depth user interviews, and field-based ethnographic studies.' },
      { slug: 'competitive-intelligence', name: 'Competitive Intelligence', desc: 'Competitor benchmarking, detailed SWOT analysis, and comprehensive market mapping.' },
      { slug: 'consumer-insights', name: 'Consumer Insights', desc: 'Customer journey mapping, Net Promoter Score (NPS) tracking, and data-backed persona development.' },
      { slug: 'industry-reports', name: 'Industry Reports', desc: 'Custom sector deep-dives, emerging trend forecasting, and long-term macroeconomic analysis.' }
    ]
  },
  {
    id: 'virtual-assistant',
    image: '/virtual-assistant.webp',
    name: 'Virtual Assistant Workforce',
    slug: 'virtual-assistant',
    icon: 'Users',
    tagline: 'Your remote workforce, ready when you are',
    color: 'from-teal-500 to-cyan-600',
    accent: '#14b8a6',
    description: 'Improx Virtual Assistant services connect busy organizations with highly skilled, pre-vetted remote professionals trained to handle your administrative, technical, and operational workflows.',
    subDepartments: [
      { slug: 'executive-assistance', name: 'Executive Assistance', desc: 'Calendar coordination, complex travel planning, inbox management, and executive meeting preparation.' },
      { slug: 'administrative-va', name: 'Administrative VA', desc: 'Accurate data entry, digital file organization, contract scheduling, and everyday corporate correspondence.' },
      { slug: 'technical-va', name: 'Technical VA', desc: 'Website content updates, CRM database management, and platform configuration support.' },
      { slug: 'customer-support-va', name: 'Customer Support VA', desc: 'Live chat support, helpdesk ticket management, and after-hours customer service coverage.' },
      { slug: 'research-va', name: 'Research VA', desc: 'Web-based research projects, B2B lead generation, and target database building.' }
    ]
  },
  {
    id: 'information-technology',
    image: '/Information-tech.webp',
    name: 'Information Technology',
    slug: 'information-technology',
    icon: 'ShieldCheck',
    tagline: 'Engineering the backbone of your digital future',
    color: 'from-indigo-500 to-blue-700',
    accent: '#4f46e5',
    description: 'Improx IT division builds, secures, and manages high-performance corporate infrastructure and custom software solutions designed to drive digital transformation.',
    subDepartments: [
      { slug: 'software-development', name: 'Software Development', desc: 'Custom web applications, responsive mobile apps, secure API integrations, and robust enterprise software.' },
      { slug: 'it-infrastructure', name: 'IT Infrastructure', desc: 'Corporate network architecture, server infrastructure management, and secure hybrid data center solutions.' },
      { slug: 'cybersecurity', name: 'Cybersecurity', desc: 'Proactive penetration testing, 24/7 Security Operations Center monitoring, and comprehensive vulnerability management.' },
      { slug: 'it-support', name: 'IT Support & Helpdesk', desc: 'Multi-tier technical support, structured IT service management, and corporate endpoint monitoring.' },
      { slug: 'qa-testing', name: 'QA & Testing', desc: 'Manual product testing, automated regression suites, load testing, and comprehensive software security reviews.' }
    ]
  },
  {
    id: 'social-media',
    image: '/social-media.webp',
    name: 'Social Media',
    slug: 'social-media',
    icon: 'Share2',
    tagline: 'Build communities, drive engagement, grow faster',
    color: 'from-pink-500 to-rose-600',
    accent: '#ec4899',
    description: 'Improx Social Media creates and manages high-impact platform strategies across all major networks to grow your online community, boost brand engagement, and drive business results.',
    subDepartments: [
      { slug: 'social-strategy', name: 'Social Strategy', desc: 'Targeted platform selection, content calendar planning, and data-backed audience growth strategies.' },
      { slug: 'content-creation', name: 'Content Creation', desc: 'Custom graphic design, short-form video production, engaging carousel swipe-throughs, and interactive story assets.' },
      { slug: 'community-management', name: 'Community Management', desc: 'Real-time comment moderation, direct message response systems, and active brand reputation monitoring.' },
      { slug: 'social-advertising', name: 'Social Advertising', desc: 'Paid Meta, LinkedIn, and TikTok ad campaigns built around precise behavioral targeting.' },
      { slug: 'influencer-partnerships', name: 'Influencer Partnerships', desc: 'Influencer discovery, creator outreach, campaign agreement management, and detailed ROI performance reporting.' }
    ]
  }
];

export const navGroupsStructure = [
  {
    title: "Strategy & Growth",
    description: "Corporate advisory and insights",
    itemIds: ["consulting", "market-research", "media-publication"]
  },
  {
    title: "Technology & Infrastructure",
    description: "Digital systems and modern scaling",
    itemIds: ["cloud", "data", "information-technology"]
  },
  {
    title: "Operations & Reach",
    description: "Workflow optimization and scale",
    itemIds: ["business-process", "marketing", "virtual-assistant", "social-media"]
  }
];