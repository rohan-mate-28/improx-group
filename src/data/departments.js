export const departments = [
  {
    id: 'consulting',
    image: '/Consulting.webp',
    name: 'Consulting',
    slug: 'consulting',
    icon: '🧩',
    tagline: 'Strategic clarity for complex challenges',
    color: 'from-blue-500 to-indigo-600',
    accent: '#6366f1',
    description: 'Improx Consulting delivers sharp, actionable strategy to help organizations navigate market complexity, drive sustainable growth, and unlock lasting institutional value. Our advisory services combine deep cross-industry expertise with advanced qualitative diagnostics to transform systemic bottlenecks into agile operational frameworks. We work directly alongside global enterprise leadership and scaling organizations to construct long-term roadmaps, implement structural transformations, optimize capital allocations, and safeguard critical business infrastructures against emerging regulatory and microeconomic disruptions.',
    subDepartments: [
      { 
        slug: 'business-strategy', 
        name: 'Business Strategy', 
        desc: 'Market entry, competitive positioning, and long-term growth roadmaps. We systematically evaluate macro-environmental shifts, project addressable market capacities, and audit internal resources to design defensible corporate strategies. By engineering clear, data-backed blueprints, we assist organizations in identifying uncontested market spaces, pricing effectively, executing mergers or acquisitions, and structuring agile revenue models that sustainably outpace industry rivals across turbulent economic cycles.' 
      },
      { 
        slug: 'management-consulting', 
        name: 'Management Consulting', 
        desc: 'Organizational design, change management, and performance improvement. Our team re-architects corporate hierarchies, aligns operational workflows with core business goals, and leads enterprise-wide cultural shifts. Through detailed skills gap analysis and rigorous workforce modeling, we eliminate functional friction, deploy target operating models, train emerging leadership, and institute performance-linked governance systems that ensure maximum human capital productivity.' 
      },
      { 
        slug: 'financial-advisory', 
        name: 'Financial Advisory', 
        desc: 'Investment strategy, cost optimization, and financial modeling. We provide analytical depth to corporate finance by building highly detailed dynamic forecasting models, auditing operational cost centers, and optimizing working capital allocations. Our advisors guide cross-border investments, structure debt or equity frameworks, assess capital expenditures, and execute rigorous scenario analyses to ensure long-term liquidity and premium enterprise valuation.' 
      },
      { 
        slug: 'risk-compliance', 
        name: 'Risk & Compliance', 
        desc: 'Regulatory compliance frameworks, risk assessments, and governance. We establish comprehensive enterprise risk management systems to protect businesses from legal, financial, and reputational exposures. Our specialists systematically map out domestic and global regulatory obligations, build proactive internal controls, design fraud mitigation protocols, and execute continuous governance audits to maintain compliance with evolving statutory standards.' 
      },
      { 
        slug: 'operations-consulting', 
        name: 'Operations Consulting', 
        desc: 'Supply chain optimization, process re-engineering, and efficiency audits. We fundamentally reshape physical and digital production ecosystems to cut overhead and maximize throughput. By applying global best practices to sourcing, logistics, inventory management, and floor-level workflows, we isolate critical material bottlenecks, re-negotiate vendor networks, and build resilient, responsive supply chains capable of handling spikes in demand.' 
      },
    ],
    services: [
      'Strategic Business Planning', 'Market Entry Strategy', 'Organizational Transformation',
      'M&A Advisory', 'Cost Optimization', 'Performance Benchmarking',
    ],
    stats: [{ label: 'Projects Delivered', value: '500+' }, { label: 'Industries Served', value: '30+' }, { label: 'ROI Average', value: '3.2x' }],
    benefits: ['Deep domain expertise across industries', 'Data-driven decision frameworks', 'Hands-on implementation support', 'Global best practice integration'],
  },
  {
    id: 'cloud',
    image: '/cloud-storage.webp',
    name: 'Cloud',
    slug: 'cloud',
    icon: '☁️',
    tagline: 'Scale without limits, secure by design',
    color: 'from-cyan-500 to-blue-600',
    accent: '#06b6d4',
    description: 'Improx Cloud empowers businesses with hyper-scalable, modern cloud infrastructures designed to maximize operational agility and reduce total cost of ownership. We manage the entire cloud transformation lifecycle — from complex on-premise migrations to the architecture of advanced multi-cloud and hybrid landscapes. By leveraging automated provisioning, robust serverless paradigms, and deep orchestration strategies, we transition legacy systems into high-availability environments that adapt instantly to changing application workloads while keeping data secured to rigorous global standards.',
    subDepartments: [
      { 
        slug: 'cloud-migration', 
        name: 'Cloud Migration', 
        desc: 'Seamless lift-and-shift or re-architect migrations to AWS, Azure, or GCP. We minimize downtime by employing data replication pipelines, automated schema conversions, and structured phase-based cutovers. Whether modernizing monolithic applications into microservices or safely shifting large enterprise databases, our migration framework preserves complete data integrity and establishes optimized cloud foundations without disrupting business continuity.' 
      },
      { 
        slug: 'cloud-architecture', 
        name: 'Cloud Architecture', 
        desc: 'Scalable, resilient multi-cloud and hybrid cloud designs. Our architects construct fault-tolerant systems using international structural standards, ensuring no single point of failure exists within your digital ecosystem. We engineer cross-cloud network typologies, define storage tiering strategies, establish dynamic content delivery networks, and build high-performance computing clusters that smoothly balance operational demand across global regions.' 
      },
      { 
        slug: 'devops-cicd', 
        name: 'DevOps & CI/CD', 
        desc: 'Pipeline automation, containerization with Docker and Kubernetes. We bridge the gap between development and operations by implementing declarative Infrastructure as Code (IaC) via Terraform, alongside automated testing and deployment pipelines. By standardizing application runtimes within secure containers and optimizing Kubernetes clusters, we enable teams to push feature releases hourly instead of quarterly with near-zero manual errors.' 
      },
      { 
        slug: 'cloud-security', 
        name: 'Cloud Security', 
        desc: 'IAM policies, zero-trust models, and compliance management. We implement rigorous defensive perimeters around cloud workloads by enforcing absolute zero-trust network access, continuous encryption for data at rest and in transit, and granular Identity and Access Management policies. Our teams continually scan for misconfigurations and provide automated posture management to meet SOC2, ISO 27001, and HIPAA compliance requirements.' 
      },
      { 
        slug: 'managed-cloud-services', 
        name: 'Managed Cloud Services', 
        desc: '24/7 monitoring, incident response, and cloud cost governance. We act as an extension of your engineering team, utilizing automated AI telemetry to discover and mitigate infrastructure anomalies before they affect users. Through resource rightsizing, automated scheduling of non-production environments, and deep utilization auditing, we regularly eliminate cloud waste to keep your infrastructure highly efficient.' 
      },
    ],
    services: [
      'Cloud Migration & Modernization', 'Infrastructure as Code (IaC)', 'Kubernetes Orchestration',
      'Serverless Architecture', 'Cloud Cost Optimization', 'Disaster Recovery Planning',
    ],
    stats: [{ label: 'Migrations Done', value: '200+' }, { label: 'Uptime SLA', value: '99.9%' }, { label: 'Cost Saved', value: '40%' }],
    benefits: ['Multi-cloud expertise (AWS, Azure, GCP)', 'Zero-downtime migration methodology', 'Automated scaling and monitoring', 'SOC2 compliant infrastructure'],
  },
  {
    id: 'marketing',
    image: '/digital-marketing.webp',
    name: 'Marketing',
    slug: 'marketing',
    icon: '📣',
    tagline: 'Campaigns that convert, brands that endure',
    color: 'from-orange-500 to-pink-600',
    accent: '#f97316',
    description: 'Improx Marketing crafts omni-channel marketing ecosystems rooted in advanced consumer insights and data-driven creative execution. We map complete customer decision journeys to build high-performance funnels that capture attention, cultivate brand equity, and turn cold traffic into loyal brand advocates. By combining psychological positioning principles with real-time media attribution engines, our division assists business-to-business and business-to-consumer entities in scaling customer acquisition, maximizing customer lifetime value, and capturing meaningful market share.',
    subDepartments: [
      { 
        slug: 'digital-marketing', 
        name: 'Digital Marketing', 
        desc: 'Search engine optimization, pay-per-click management, and conversion rate optimization. We run precise search and programmatic campaigns focused on intent-driven keywords and high-yield user segments. By combining technical site audits, clean backlink building, and deep A/B testing on landing pages, we remove checkout friction, boost organic search footprints, and maximize the volume of profitable actions taken across your digital web properties.' 
      },
      { 
        slug: 'brand-strategy', 
        name: 'Brand Strategy', 
        desc: 'Brand identity design, competitive positioning, and messaging architecture. We define what your brand stands for, crafting distinct visual languages, emotional positioning models, and functional style guides. Through competitive differentiation mapping and deep persona building, we ensure your brand message remains clear, unified, and memorable across every single physical and digital touchpoint it encounters.' 
      },
      { 
        slug: 'content-marketing', 
        name: 'Content Marketing', 
        desc: 'Blogs, whitepapers, high-production video, and thought leadership campaigns. We produce engaging, authoritative content assets tailored to address the exact pain points your customers experience. From multi-chapter technical whitepapers and editorial research reports to cinematic explainer videos and educational infographics, our assets capture search interest, build brand authority, and naturally move prospects deeper through your sales funnel.' 
      },
      { 
        slug: 'performance-marketing', 
        name: 'Performance Marketing', 
        desc: 'ROI-driven paid media execution on Google, Meta, LinkedIn, and programmatic networks. We treat ad spend as a clear financial investment, running data-centric campaigns built around tight demographic profiling, custom behavioral lookalikes, and dynamic creative variations. We continually monitor core metrics like Customer Acquisition Cost and Return on Ad Spend to scale high-performing campaigns while cutting waste.' 
      },
      { 
        slug: 'marketing-automation', 
        name: 'Marketing Automation', 
        desc: 'HubSpot, Marketo, and Salesforce Marketing Cloud system architectures. We build intelligent, automated communication systems that nurture leads based on how they interact with your digital platforms. By setting up behavior-triggered email campaigns, advanced lead scoring systems, and clean CRM sync pipelines, we deliver personalized messages to the right buyer at the exact moment they are ready to convert.' 
      },
    ],
    services: [
      'SEO & SEM', 'Email Campaigns', 'Content Strategy', 'Paid Advertising',
      'Influencer Marketing', 'Marketing Analytics & Reporting',
    ],
    stats: [{ label: 'Campaigns Run', value: '1000+' }, { label: 'Avg. Lead Growth', value: '65%' }, { label: 'Clients', value: '150+' }],
    benefits: ['Full-funnel marketing expertise', 'Real-time campaign analytics', 'Dedicated account strategists', 'Proven industry-specific playbooks'],
  },
  {
    id: 'data',
    image: '/data.webp',
    name: 'Data',
    slug: 'data',
    icon: '📊',
    tagline: 'Transform raw data into competitive advantage',
    color: 'from-green-500 to-teal-600',
    accent: '#10b981',
    description: 'Improx Data engineers the foundational platforms, quantitative models, and corporate frameworks required to turn disjointed enterprise information into an operational asset. We structure robust data lifecycles — covering everything from distributed ingest systems to predictive artificial intelligence modeling. By breaking down internal data silos and making data accessible through clean dashboards, we provide leadership teams with real-time visibility into their operations, enabling faster decisions, deeper automation, and accurate forecasting.',
    subDepartments: [
      { 
        slug: 'data-engineering', 
        name: 'Data Engineering', 
        desc: 'High-throughput data pipelines, ETL/ELT architecture, data lakes, and modern warehousing solutions like Snowflake and BigQuery. We design and build resilient data pipelines that ingest, clean, and format massive structured and unstructured data streams. By deploying modern architectural patterns, we guarantee your storage foundations remain cost-effective, fast to query, and prepared to handle high-concurrency analysis.' 
      },
      { 
        slug: 'data-analytics', 
        name: 'Data Analytics', 
        desc: 'Interactive dashboards, executive KPI reporting, and self-service BI systems via Tableau, Power BI, and Looker. We turn complex data points into intuitive visual stories. Our engineers design executive command centers and self-service portals that let non-technical team members filter operational metrics, discover hidden performance trends, and track core company goals in real time.' 
      },
      { 
        slug: 'data-science-ml', 
        name: 'Data Science & ML', 
        desc: 'Predictive analytics, custom Natural Language Processing, computer vision models, and personalization engines. We extract deep insights from your historical data by training specialized machine learning algorithms. From predicting customer churn and automating invoice categorization to processing unstructured text and running image recognition, we convert raw data assets into automated solutions.' 
      },
      { 
        slug: 'data-governance', 
        name: 'Data Governance', 
        desc: 'Data quality frameworks, lineage tracking, unified cataloging, and strict GDPR/CCPA compliance. We protect your company from information security risks by establishing clear data definitions, access controls, and retention rules. Our data governance systems keep accurate track of where data comes from, monitor data quality, and ensure sensitive client information stays fully compliant with international privacy laws.' 
      },
      { 
        slug: 'ai-automation', 
        name: 'AI & Automation', 
        desc: 'Generative AI integrations, intelligent agents, and operational MLOps infrastructure. We move AI models out of development and into core business processes. By deploying secure large language model workflows, building contextual vector databases, and engineering robust monitoring pipelines, we help companies deploy dependable AI solutions that automate customer interactions and scale internal workflows.' 
      },
    ],
    services: [
      'Data Strategy Consulting', 'ETL Pipeline Development', 'Business Intelligence',
      'Machine Learning Models', 'Real-time Analytics', 'Data Governance Frameworks',
    ],
    stats: [{ label: 'Data Models Built', value: '300+' }, { label: 'Accuracy Rate', value: '97%' }, { label: 'TB Data Processed', value: '50+' }],
    benefits: ['End-to-end data stack expertise', 'Cloud-native data platforms', 'Privacy-first data governance', 'Rapid prototype to production'],
  },
  {
    id: 'business-process',
    image: '/business-process.webp',
    name: 'Business Process',
    slug: 'business-process',
    icon: '⚙️',
    tagline: 'Leaner operations, faster outcomes',
    color: 'from-yellow-500 to-amber-600',
    accent: '#f59e0b',
    description: 'Improx Business Process services modernize everyday corporate operations to eliminate waste, lower overhead, and accelerate process speeds. We look closely at manual back-office tasks and complex enterprise resources to find and fix hidden bottlenecks. By combining smart software automation, specialized outsourcing solutions, and disciplined operational methodologies, we help businesses establish scalable workflows that free teams from repetitive tasks, ensuring absolute operational accuracy and lower costs.',
    subDepartments: [
      { 
        slug: 'process-automation-rpa', 
        name: 'Process Automation (RPA)', 
        desc: 'UiPath, Blue Prism, and Automation Anywhere software deployments. We program smart software bots to take over repetitive digital tasks like reading forms, matching invoices across systems, and running data entry. Our automation systems run around the clock with zero human error, integrating directly with your legacy software without requiring expensive API re-writes.' 
      },
      { 
        slug: 'bpo-services', 
        name: 'BPO Services', 
        desc: 'Outsourced back-office support, Finance & Accounting operations, HR administration, and scalable data verification. We manage your time-consuming back-office processes using our dedicated execution centers. By running structured workflows for accounts payable, payroll processing, employee onboarding, and data validation, we help your core internal team stay focused on critical business initiatives.' 
      },
      { 
        slug: 'erp-implementation', 
        name: 'ERP Implementation', 
        desc: 'SAP, Oracle, and Microsoft Dynamics platform architecture and customization. We lead large-scale software integrations that bring your entire business together — from finance to manufacturing. Our engineers design your core database structures, migrate historical data safely, build custom reporting tools, and train your staff to ensure your enterprise resource platform works smoothly from day one.' 
      },
      { 
        slug: 'lean-six-sigma', 
        name: 'Lean & Six Sigma', 
        desc: 'Continuous operational improvement, waste reduction, and rigorous workflow audits. We apply disciplined methodologies to locate and eliminate errors and wasted time across your business. By analyzing production steps, identifying process variance, and standardizing team operations, we help you get more value out of your existing resources while keeping quality consistently high.' 
      },
      { 
        slug: 'workflow-design', 
        name: 'Workflow Design', 
        desc: 'End-to-end process mapping, Standard Operating Procedure (SOP) design, and operational re-engineering. We document and improve how work happens across your departments. Our team creates detailed visual maps of your current processes, updates them to remove friction, and writes clear, comprehensive SOP guides that make onboarding new employees simple and consistent.' 
      },
    ],
    services: [
      'Robotic Process Automation', 'Business Process Outsourcing', 'ERP Consulting',
      'Workflow Automation', 'Process Auditing', 'SOP Development',
    ],
    stats: [{ label: 'Processes Automated', value: '400+' }, { label: 'Efficiency Gain', value: '55%' }, { label: 'Cost Reduction', value: '35%' }],
    benefits: ['Certified RPA developers', 'Agile process transformation', 'Measurable KPIs from day one', 'Change management support'],
  },
  {
    id: 'media-publication',
    image: '/media-publication.webp',
    name: 'Media Publication',
    slug: 'media-publication',
    icon: '📰',
    tagline: 'Stories that inform, inspire, and influence',
    color: 'from-purple-500 to-violet-600',
    accent: '#8b5cf6',
    description: 'Improx Media Publication builds authoritative media properties and high-impact digital content designed to establish your brand as an industry voice. We combine investigative journalism, multimedia production, and distribution strategies to build loyal, highly targeted audiences. From managing independent news portals and executive thought leadership to producing corporate documentaries, we help companies share their expertise, build real credibility, and naturally guide the conversations happening within their industries.',
    subDepartments: [
      { 
        slug: 'editorial-journalism', 
        name: 'Editorial & Journalism', 
        desc: 'Professional news writing, technical features, research investigations, and expert commentary. Our team of experienced business writers gathers primary source data, interviews key industry figures, and writes engaging articles. We handle complex industry topics and present them as balanced, credible stories that capture readers and build real institutional trust.' 
      },
      { 
        slug: 'digital-publishing', 
        name: 'Digital Publishing', 
        desc: 'Online magazines, automated email newsletters, professional podcasts, and interactive webinar series. We design and run modern digital media channels from the ground up. Our technical teams build clean reading layouts, manage active subscriber databases, handle professional audio production, and run interactive streaming events that keep your audience coming back month after month.' 
      },
      { 
        slug: 'brand-journalism', 
        name: 'Brand Journalism', 
        desc: 'Corporate storytelling, expert thought leadership, and executive ghostwriting services. We turn your company’s internal technical knowledge into public-facing articles and whitepapers. By working closely with your leadership team, we write compelling opinion pieces and industry forecasts under your executives’ names, building their profiles as trusted industry experts.' 
      },
      { 
        slug: 'video-production', 
        name: 'Video Production', 
        desc: 'Explainer videos, corporate documentaries, interview series, and high-impact short-form social reels. We handle the complete video lifecycle — including scriptwriting, set filming, motion graphics, and final editing. Our team creates high-production visual content designed to perform across channels, whether you need a deep product explainer or a quick social media campaign.' 
      },
      { 
        slug: 'press-pr', 
        name: 'Press & PR', 
        desc: 'Press release distribution, media relations, and targeted journalist outreach campaigns. We write and share your company’s major news with the publications that matter. By building strong relationships with key industry editors, coordinating exclusive interviews, and monitoring brand mentions, we help your business secure valuable earned media coverage and handle public communication effectively.' 
      },
    ],
    services: [
      'Content Production', 'Digital Magazine Publishing', 'Video & Podcast Creation',
      'PR & Media Relations', 'Executive Ghostwriting', 'Sponsored Content Programs',
    ],
    stats: [{ label: 'Articles Published', value: '5000+' }, { label: 'Media Partners', value: '80+' }, { label: 'Monthly Readers', value: '500K+' }],
    benefits: ['Experienced editorial team', 'Multi-platform distribution', 'SEO-optimized content', 'Rapid turnaround times'],
  },
  {
    id: 'market-research',
    image: '/market-reserch.webp',
    name: 'Market Research',
    slug: 'market-research',
    icon: '🔍',
    tagline: 'Insights that power confident decisions',
    color: 'from-rose-500 to-red-600',
    accent: '#f43f5e',
    description: 'Improx Market Research conducts deep primary and secondary market research to help businesses understand their customers, analyze their competition, and de-risk major business investments. We combine advanced statistical methods with qualitative human insights to explain exactly why markets change. Whether you are validating a new product concept, entering an unfamiliar geographic territory, or auditing your brand’s health, our data-backed reports give your team the accurate answers needed to move forward confidently.',
    subDepartments: [
      { 
        slug: 'quantitative-research', 
        name: 'Quantitative Research', 
        desc: 'Large-scale consumer surveys, rigorous statistical analysis, conjoint testing, and market segmentation models. We collect and analyze thousands of data points to map out clear market realities. Using advanced statistical software, we find hidden patterns in buyer behavior, analyze feature preferences, and group consumers into clear segments to help you target your product and marketing spend effectively.' 
      },
      { 
        slug: 'qualitative-research', 
        name: 'Qualitative Research', 
        desc: 'Moderated focus groups, in-depth user interviews, and field-based ethnographic studies. We go beyond simple survey numbers to understand consumer motivations, frustrations, and unspoken habits. Our trained researchers run open-ended sessions that reveal exactly how users feel about your brand, how they use products in their daily lives, and what drives their purchasing decisions.' 
      },
      { 
        slug: 'competitive-intelligence', 
        name: 'Competitive Intelligence', 
        desc: 'Competitor benchmarking, detailed SWOT analysis, and comprehensive market mapping. We monitor your competitors’ products, pricing, marketing strategies, and corporate moves. By analyzing their strengths and vulnerabilities, we help you find open gaps in the market, outmaneuver rival campaigns, and position your brand as the obvious choice for consumers.' 
      },
      { 
        slug: 'consumer-insights', 
        name: 'Consumer Insights', 
        desc: 'Customer journey mapping, Net Promoter Score (NPS) tracking, and data-backed persona development. We look closely at every single point of contact a buyer has with your company. By tracking satisfaction trends, identifying where customers get frustrated, and building realistic consumer profiles, we show you exactly how to improve your customer experience and boost long-term loyalty.' 
      },
      { 
        slug: 'industry-reports', 
        name: 'Industry Reports', 
        desc: 'Custom sector deep-dives, emerging trend forecasting, and long-term macroeconomic analysis. We provide comprehensive overviews of specific vertical industries, detailing total addressable market sizes, technological disruptions, and shifting regulatory landscapes. Our reports give your executives the forward-looking context needed to make smart annual planning decisions.' 
      },
    ],
    services: [
      'Market Sizing & Forecasting', 'Customer Surveys & Panels', 'Competitor Analysis',
      'Brand Health Tracking', 'Product Concept Testing', 'Trend Forecasting',
    ],
    stats: [{ label: 'Studies Completed', value: '600+' }, { label: 'Countries Covered', value: '45+' }, { label: 'Data Points Daily', value: '1M+' }],
    benefits: ['Proprietary research panels', 'Rapid turnaround (48–72 hrs)', 'Multilingual research capability', 'ESOMAR-compliant methodology'],
  },
  {
    id: 'virtual-assistant',
    image: '/virtual-assistant.webp',
    name: 'Virtual Assistant',
    slug: 'virtual-assistant',
    icon: '🤖',
    tagline: 'Your remote workforce, ready when you are',
    color: 'from-teal-500 to-cyan-600',
    accent: '#14b8a6',
    description: 'Improx Virtual Assistant services connect busy organizations with highly skilled, pre-vetted remote professionals trained to handle your administrative, technical, and operational workflows. We remove the massive overhead, long hiring cycles, and geographic limitations of traditional staffing. By pairing your business with dedicated assistants backed by structured management support, we handle your repetitive daily tasks smoothly, ensuring your core internal team stays focused on strategic growth.',
    subDepartments: [
      { 
        slug: 'executive-assistance', 
        name: 'Executive Assistance', 
        desc: 'Calendar coordination, complex travel planning, inbox management, and executive meeting preparation. Our assistants keep company leaders organized and focused on high-value tasks. We handle scheduling across time zones, organize busy travel schedules, filter out noise from your email inbox, and gather background information for upcoming corporate meetings.' 
      },
      { 
        slug: 'administrative-va', 
        name: 'Administrative VA', 
        desc: 'Accurate data entry, digital file organization, contract scheduling, and everyday corporate correspondence. We keep your back-office documentation running smoothly. Our assistants handle high-volume data updates, clean up cluttered cloud storage systems, track project deadlines, and draft professional business communications based on your team’s guidelines.' 
      },
      { 
        slug: 'technical-va', 
        name: 'Technical VA', 
        desc: 'Website content updates, CRM database management, and platform configuration support. We bridge the gap between basic administration and technical execution. Our virtual assistants update web pages, fix broken links, maintain clean contact lists in your CRM, update e-commerce products, and help set up common SaaS applications.' 
      },
      { 
        slug: 'customer-support-va', 
        name: 'Customer Support VA', 
        desc: 'Live chat support, helpdesk ticket management, and after-hours customer service coverage. We help you maintain fast response times around the clock. Our support assistants respond politely to common customer questions, escalate technical bugs to your development team, update help documentation, and manage incoming consumer reviews.' 
      },
      { 
        slug: 'research-va', 
        name: 'Research VA', 
        desc: 'Web-based research projects, B2B lead generation, and target database building. We gather the raw background information your sales and marketing teams need to grow. Our assistants scan directories, find accurate corporate contact details, summarize public industry reports, and build structured spreadsheets of qualified business prospects.' 
      },
    ],
    services: [
      'Executive Virtual Assistance', 'Inbox & Calendar Management', 'CRM Data Management',
      'Customer Service Support', 'Research & Lead Gen', 'Social Media Scheduling',
    ],
    stats: [{ label: 'Active VAs', value: '200+' }, { label: 'Hours Saved/Month', value: '10K+' }, { label: 'Client Satisfaction', value: '98%' }],
    benefits: ['Vetted, trained professionals', 'Flexible hourly or monthly plans', 'Quick onboarding (< 48 hrs)', 'Dedicated client success manager'],
  },
  {
    id: 'information-technology',
    image: '/Information-tech.webp',
    name: 'Information Technology',
    slug: 'information-technology',
    icon: '💻',
    tagline: 'Engineering the backbone of your digital future',
    color: 'from-indigo-500 to-blue-700',
    accent: '#4f46e5',
    description: 'Improx IT division builds, secures, and manages high-performance corporate infrastructure and custom software solutions designed to drive digital transformation. We work with modern web frameworks, strict cybersecurity models, and structured IT service standards to help enterprises replace slow legacy systems with secure, automated tools. From writing unique business applications to monitoring global corporate networks, our engineering teams ensure your technology runs reliably and securely around the clock.',
    subDepartments: [
      { 
        slug: 'software-development', 
        name: 'Software Development', 
        desc: 'Custom web applications, responsive mobile apps, secure API integrations, and robust enterprise software built on modern development stacks. We write clean, modular code designed to scale smoothly as your business grows. Our developers learn your exact operational needs to build unique software that automates manual workflows and delivers great user experiences across devices.' 
      },
      { 
        slug: 'it-infrastructure', 
        name: 'IT Infrastructure', 
        desc: 'Corporate network architecture, server infrastructure management, and secure hybrid data center solutions. We design the physical and digital networks that keep your business connected. Our engineers set up secure routing protocols, optimize storage arrays, manage local domain directories, and ensure your entire company network stays fast, redundant, and highly available.' 
      },
      { 
        slug: 'cybersecurity', 
        name: 'Cybersecurity', 
        desc: 'Proactive penetration testing, 24/7 Security Operations Center monitoring, and comprehensive vulnerability management. We protect your company data from digital threats. Our security teams hunt for network vulnerabilities, train employees to avoid phishing attacks, respond to security incidents instantly, and verify your systems meet rigid ISO 27001 standards.' 
      },
      { 
        slug: 'it-support', 
        name: 'IT Support & Helpdesk', 
        desc: 'Multi-tier technical support, structured IT service management, and corporate endpoint monitoring. We resolve daily technical issues quickly to keep your team productive. Our support specialists handle everything from setting up new employee laptops and fixing software errors to resetting permissions and troubleshooting complex server connection problems.' 
      },
      { 
        slug: 'qa-testing', 
        name: 'QA & Testing', 
        desc: 'Manual product testing, automated regression suites, load testing, and comprehensive software security reviews. We catch software bugs before they ever reach your users. Our QA engineers write automated scripts that test user paths, stress-test servers under heavy mock traffic, and verify that updates don\'t break existing software features.' 
      },
    ],
    services: [
      'Custom Software Development', 'Mobile App Development', 'IT Infrastructure Management',
      'Cybersecurity Assessments', 'IT Helpdesk Services', 'QA & Automation Testing',
    ],
    stats: [{ label: 'Apps Delivered', value: '350+' }, { label: 'Tech Stack Expertise', value: '40+' }, { label: 'Security Incidents Prevented', value: '99%' }],
    benefits: ['Agile development methodology', 'Full-stack engineering teams', 'ISO 27001 security practices', '24/7 support and monitoring'],
  },
  {
    id: 'social-media',
    image: '/social-media.webp',
    name: 'Social Media',
    slug: 'social-media',
    icon: '📱',
    tagline: 'Build communities, drive engagement, grow faster',
    color: 'from-pink-500 to-rose-600',
    accent: '#ec4899',
    description: 'Improx Social Media creates and manages high-impact platform strategies across all major networks to grow your online community, boost brand engagement, and drive business results. We combine platform-native content design, targeted paid social ads, and active community management to build real connections between brands and consumers. By monitoring trends as they happen and analyzing community data, we keep your business relevant online, turning casual social media scrollers into active customers and long-term brand advocates.',
    subDepartments: [
      { 
        slug: 'social-strategy', 
        name: 'Social Strategy', 
        desc: 'Targeted platform selection, content calendar planning, and data-backed audience growth strategies. We map out your social media footprint based on where your ideal customers actually spend their time. Our team builds comprehensive content maps, sets clear publishing schedules, and establishes platform-specific KPIs to ensure your social media activities align directly with your broader corporate objectives.' 
      },
      { 
        slug: 'content-creation', 
        name: 'Content Creation', 
        desc: 'Custom graphic design, short-form video production, engaging carousel swipe-throughs, and interactive story assets. We create high-quality, eye-catching visual content designed to stop users from scrolling past. Our creative team writes engaging copy, edits dynamic short-form videos, and builds unique visual layouts tailored specifically to look natural and perform well on each individual network.' 
      },
      { 
        slug: 'community-management', 
        name: 'Community Management', 
        desc: 'Real-time comment moderation, direct message response systems, and active brand reputation monitoring. We treat your social channels as an interactive, two-way conversation. Our managers answer customer questions quickly, spark friendly community discussions, handle negative reviews professionally, and build a positive, highly engaged audience around your brand name.' 
      },
      { 
        slug: 'social-advertising', 
        name: 'Social Advertising', 
        desc: 'Paid Meta, LinkedIn, and TikTok ad campaigns built around precise behavioral targeting and continuous creative optimization. We scale your social media reach through highly trackable paid ad strategies. By designing custom ad funnels, building specialized lookalike audiences, and testing variations of copy and visuals, we maximize your ad return while lowering customer acquisition costs.' 
      },
      { 
        slug: 'influencer-partnerships', 
        name: 'Influencer Partnerships', 
        desc: 'Influencer discovery, creator outreach, campaign agreement management, and detailed ROI performance reporting. We connect your brand with trusted online creators who speak directly to your target audience. Our team handles the entire process — from checking influencer metrics and negotiating content contracts to managing deliverables and tracking the exact traffic and sales generated.' 
      },
    ],
    services: [
      'Social Media Management', 'Content Calendar Planning', 'Paid Social Advertising',
      'Influencer Campaign Management', 'Analytics & Reporting', 'Crisis Communication',
    ],
    stats: [{ label: 'Accounts Managed', value: '200+' }, { label: 'Followers Grown', value: '5M+' }, { label: 'Avg Engagement Rate', value: '8.2%' }],
    benefits: ['Platform-native creative teams', 'Real-time trend monitoring', 'Monthly performance reviews', 'Cross-platform campaign synergy'],
  },
];

export const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/improxtechinc/', icon: 'linkedin' },
  { name: 'Instagram', url: 'https://www.instagram.com/improxtechinc/', icon: 'instagram' },
  { name: 'Twitter / X', url: 'https://x.com/improxtechinc', icon: 'twitter' },
  { name: 'Facebook', url: 'https://www.facebook.com/improxtechinc/', icon: 'facebook' },
  { name: 'Pinterest', url: 'https://in.pinterest.com/improxtechinc/', icon: 'pinterest' },
];

export const contactInfo = {
  phone: '+91 9370992910',
  email: 'info@improxgroup.com',
  website: 'www.ImproxGroup.com',
  address: 'Pune, Maharashtra, India',
};