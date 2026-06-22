import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { departments } from '../data/departments';
import { ArrowRightIcon, CheckCircleIcon } from '../components/Icons';

export default function SubDepartmentPage() {
  const { deptSlug, subSlug } = useParams();

  // Find parent department
  const dept = departments.find((d) => d.slug === deptSlug);
  
  // Find sub-department inside that parent
  const subDept = dept?.subDepartments.find((s) => s.slug === subSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [subSlug]);

  if (!dept) return <Navigate to="/departments" replace />;
  if (!subDept) return <Navigate to={`/departments/${deptSlug}`} replace />;

  // ─── UNIQUE CONTENT MATRIX FOR EACH SUBSLUG ───
  const getSubDepartmentArticles = (slug, name) => {
    const defaultArticles = [
      {
        title: `The Future of ${name}: Industry Trends & Transformations`,
        excerpt: `Discover how modern disruptions and emerging operational frameworks are shifting parameters across ${name} sectors globally.`,
        date: 'June 18, 2026',
        readTime: '5 min read',
        tag: 'Insights',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&auto=format'
      },
      {
        title: `Step-by-Step Strategy: Maximizing ROI in ${name}`,
        excerpt: `A practical blueprint outlining actionable strategies designed to lower technical overhead while driving performance yield.`,
        date: 'June 12, 2026',
        readTime: '8 min read',
        tag: 'Strategy',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&auto=format'
      },
      {
        title: `Common Pitfalls to Avoid When Scaling Your ${name} Architecture`,
        excerpt: `An analysis of common deployment and operational errors that enterprise teams run into, and how you can architect a framework to bypass them entirely.`,
        date: 'May 29, 2026',
        readTime: '6 min read',
        tag: 'Best Practices',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&auto=format'
      }
    ];

    const articleMatrix = {
      // Consulting Sub-departments
      'business-strategy': [
        { title: 'Blue Ocean Shifts: Finding Untapped Market Space in 2026', excerpt: 'How legacy businesses can identify structural market vulnerabilities and position new service layers cleanly.', date: 'June 15, 2026', readTime: '7 min read', tag: 'Strategy', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&auto=format' },
        { title: 'The Anatomy of a High-Yield Competitive Position Framework', excerpt: 'Breaking down how data-backed matrices beat pure intuition when engineering long-term growth roadmaps.', date: 'June 02, 2026', readTime: '5 min read', tag: 'Analysis', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&auto=format' },
        { title: 'A Founder Guide to International Market Entry Timelines', excerpt: 'Mitigating compliance hurdles and foreign operational drag during enterprise scaling phases.', date: 'May 14, 2026', readTime: '9 min read', tag: 'Global Growth', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&auto=format' }
      ],
      'management-consulting': [
        { title: 'Redesigning Org Structures for Post-Agile Workflows', excerpt: 'Why strict departmental silos break in remote environments, and how to introduce hybrid matrices.', date: 'June 11, 2026', readTime: '6 min read', tag: 'Management', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&auto=format' },
        { title: 'Change Management Playbooks That Actually Reduce Attrition', excerpt: 'Empathy-driven corporate restructuring techniques backed by operational psychology data.', date: 'May 24, 2026', readTime: '8 min read', tag: 'HR Strategy', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&auto=format' },
        { title: 'Audit Methodologies for Mid-Market Performance Bottlenecks', excerpt: 'How to run micro-interviews and activity tracking without introducing structural company friction.', date: 'May 03, 2026', readTime: '5 min read', tag: 'Operations', image: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&auto=format' }
      ],

      // Cloud Sub-departments
      'cloud-migration': [
        { title: 'Zero-Downtime Database Migration Frameworks for Enterprise Tech', excerpt: 'An in-depth technical analysis of live-replication pipelines moving local clusters directly to AWS.', date: 'June 19, 2026', readTime: '11 min read', tag: 'Architecture', image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&auto=format' },
        { title: 'Legacy Monolith to Microservices: The Re-Architecting Cost Formula', excerpt: 'How to precisely calculate if full-code factorization yields infrastructure savings or operational debt.', date: 'June 07, 2026', readTime: '8 min read', tag: 'Cloud Economics', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&auto=format' },
        { title: 'Avoiding Post-Migration Sticker Shock in Multi-Cloud Spaces', excerpt: 'Configuring billing thresholds and dynamic computing resource limits before running data ingestions.', date: 'May 20, 2026', readTime: '6 min read', tag: 'FinOps', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&auto=format' }
      ],
      'devops-cicd': [
        { title: 'Optimizing Kubernetes Cluster Orchestration for Variable Loads', excerpt: 'Fine-tuning horizontal pod autoscaling metrics to counter sudden API usage spikes smoothly.', date: 'June 14, 2026', readTime: '7 min read', tag: 'DevOps', image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&auto=format' },
        { title: 'Securing GitHub Action Runner Pipelines Against Vector Injections', excerpt: 'Hardening variables, isolation routines, and secret keys across public-facing enterprise builds.', date: 'May 28, 2026', readTime: '10 min read', tag: 'Security', image: 'https://images.unsplash.com/photo-1563986764494-0de2e4926784?q=80&auto=format' },
        { title: 'The Direct Metrics of Containerization Build Speeds', excerpt: 'Using smart layered caches in Docker to trim down compilation wait times from minutes to seconds.', date: 'May 11, 2026', readTime: '5 min read', tag: 'Automation', image: 'https://images.unsplash.com/photo-1618401471353-b98aedd07871?q=80&auto=format' }
      ],

      // Data Sub-departments
      'data-engineering': [
        { title: 'Building Multi-Tenant Data Lakes with Snowflake and BigQuery', excerpt: 'Structuring clean transactional schemas to split structured internal assets safely away from raw inputs.', date: 'June 16, 2026', readTime: '9 min read', tag: 'Data Engineering', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&auto=format' },
        { title: 'Modern ETL vs ELT: Deciding On Storage Engine Compute Layers', excerpt: 'Evaluating real-time latency trade-offs when pushing transformation tasks down to storage servers.', date: 'June 01, 2026', readTime: '7 min read', tag: 'Pipelines', image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&auto=format' },
        { title: 'Managing Schema Drift Across Unstructured Event Streams', excerpt: 'Using programmatic parsing rules to keep analytic dashboards from breaking during rapid upstream API updates.', date: 'May 19, 2026', readTime: '8 min read', tag: 'Architecture', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&auto=format' }
      ],
      'data-science-ml': [
        { title: 'Fine-Tuning Open Source LLMs for Domain-Specific NLP Workloads', excerpt: 'Methods to inject company knowledge bases into inference graphs cleanly without weight degradation.', date: 'June 17, 2026', readTime: '12 min read', tag: 'Machine Learning', image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&auto=format' },
        { title: 'Mitigating Data Bias in Predictive Classification Engines', excerpt: 'Statistical verification routines to clear hidden historical anomalies from algorithmic training pools.', date: 'June 04, 2026', readTime: '8 min read', tag: 'AI Ethics', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&auto=format' },
        { title: 'MLOps Architectures for Zero-Downtime Model Hot Swaps', excerpt: 'Running safe shadow tests and canary routes against fresh model endpoints before full deployment.', date: 'May 22, 2026', readTime: '10 min read', tag: 'MLOps', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&auto=format' }
      ],

      // Marketing Sub-departments
      'digital-marketing': [
        { title: 'Algorithmic Optimization for Search Visibility in 2026', excerpt: 'Adapting structural index parameters to capture modern generative engine results panels proactively.', date: 'June 20, 2026', readTime: '6 min read', tag: 'SEO Strategy', image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&auto=format' },
        { title: 'Predictive Attribution Modeling Across Multi-Touch Conversions', excerpt: 'Using statistical variance mapping to isolate exact value generators within complex enterprise pipelines.', date: 'June 09, 2026', readTime: '9 min read', tag: 'Analytics', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&auto=format' },
        { title: 'Scale Mechanics: Systemizing Continuous High-Yield CAC Reduction', excerpt: 'Practical design parameters for isolating underperforming traffic loops without cutting overall volume.', date: 'May 25, 2026', readTime: '7 min read', tag: 'Growth Marketing', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&auto=format' }
      ],

      // Engineering Sub-departments
      'software-development': [
        { title: 'Next.js 16 Architectural Paradigms for High-Throughput UI Layouts', excerpt: 'Structuring advanced state synchronization mechanics across concurrent edge rendering nodes cleanly.', date: 'June 21, 2026', readTime: '10 min read', tag: 'Frontend Tech', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&auto=format' },
        { title: 'Decoupling High-Frequency Write Bottlenecks in MERN Ecosystems', excerpt: 'Configuring atomic updates and Redis-based cache ingestion structures directly before MongoDB commits.', date: 'June 10, 2026', readTime: '8 min read', tag: 'Backend Tech', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&auto=format' },
        { title: 'Type Safe Micro-Frontends: Scalable Monorepo Configuration Frameworks', excerpt: 'Preventing design breaks and dependency hell across decentralized independent runtime applications.', date: 'May 18, 2026', readTime: '11 min read', tag: 'Systems Design', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&auto=format' }
      ],

      // CyberSecurity Sub-departments
      'cybersecurity': [
        { title: 'Zero-Trust Architecture: Hardening Decentralized Core Gateways', excerpt: 'Configuring dynamic verification protocols for identity management nodes across hybrid remote stacks.', date: 'June 13, 2026', readTime: '9 min read', tag: 'Security Infrastructure', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&auto=format' },
        { title: 'Automated Vulnerability Identification Pools inside CI/CD Environments', excerpt: 'Integrating programmatic linting arrays to capture regression injections directly before product merges.', date: 'June 03, 2026', readTime: '7 min read', tag: 'SecOps Systems', image: 'https://images.unsplash.com/photo-1563986764494-0de2e4926784?q=80&auto=format' },
        { title: 'Mitigating Sophisticated Distributed Edge Denial Vectors in Real-Time', excerpt: 'Deploying edge worker verification matrices to filter clean traffic targets from hostile structural bursts.', date: 'May 15, 2026', readTime: '12 min read', tag: 'Threat Assessment', image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&auto=format' }
      ]
    };

    return articleMatrix[slug] || defaultArticles;
  };

  const articles = getSubDepartmentArticles(subSlug, subDept.name);

  // ─── UNIQUE SERVICE CAPABILITIES IMAGES ACCORDING TO SUB-DEPARTMENTS ───
  const getSubDepartmentTeasers = (slug) => {
    const imagesMap = {
      'business-strategy': [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&auto=format',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&auto=format',
        'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&auto=format',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&auto=format'
      ],
      'management-consulting': [
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&auto=format',
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&auto=format',
        'https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&auto=format',
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&auto=format'
      ],
      'cloud-migration': [
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&auto=format',
        'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&auto=format',
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&auto=format',
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&auto=format'
      ],
      'devops-cicd': [
        'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&auto=format',
        'https://images.unsplash.com/photo-1618401471353-b98aedd07871?q=80&auto=format',
        'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&auto=format',
        'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&auto=format'
      ],
      'data-engineering': [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&auto=format',
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&auto=format',
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&auto=format',
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&auto=format'
      ],
      'data-science-ml': [
        'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&auto=format',
        'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&auto=format',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&auto=format',
        'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&auto=format'
      ],
      'digital-marketing': [
        'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&auto=format',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&auto=format',
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&auto=format',
        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&auto=format'
      ],
      'software-development': [
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&auto=format',
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&auto=format',
        'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&auto=format',
        'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&auto=format'
      ],
      'cybersecurity': [
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&auto=format',
        'https://images.unsplash.com/photo-1563986764494-0de2e4926784?q=80&auto=format',
        'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&auto=format',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&auto=format'
      ],
    };

    const baseFallbacks = [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&auto=format',
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&auto=format',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&auto=format',
      'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&auto=format'
    ];

    return imagesMap[slug] || baseFallbacks;
  };

  const serviceTeaserImages = getSubDepartmentTeasers(subSlug);

  return (
    <div className="pt-20 overflow-hidden bg-white">
      {/* ─── HERO SECTION ─── */}
      <section className="relative section-pad min-h-[60vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <img
            src={dept.image || "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&auto=format"}
            alt={subDept.name}
            className="w-full h-full object-cover opacity-10"
            loading="lazy"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white to-white" />
        </div>

        {/* Ambient background glows */}
        <div className="absolute top-0 left-0 w-96 h-96 opacity-20 blur-3xl rounded-full pointer-events-none" style={{ background: dept.accent || '#3b82f6' }} />
        <div className="absolute right-0 bottom-0 w-[30rem] h-[30rem] opacity-10 blur-3xl rounded-full pointer-events-none" style={{ background: dept.accent || '#3b82f6' }} />

        <div className="container-max relative z-10 w-full">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 mb-8">
            <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/departments" className="hover:text-primary-600 transition-colors">Departments</Link>
            <span>/</span>
            <Link to={`/departments/${dept.slug}`} className="hover:text-primary-600 transition-colors">{dept.name}</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">{subDept.name}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Area */}
            <div className="lg:col-span-7 xl:col-span-8 max-w-3xl">
              <div 
                className="inline-flex items-center gap-2 rounded-xl px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5 border"
                style={{ background: `${dept.accent || '#3b82f6'}10`, color: dept.accent || '#3b82f6', borderColor: `${dept.accent || '#3b82f6'}20` }}
              >
                <span>{dept.icon || '💼'}</span> {dept.name} Core Specialization
              </div>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-slate-900 mb-6 leading-[1.1]">
                {subDept.name}
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                {subDept.desc || 'Leveraging advanced operational intelligence models to deploy optimized components built directly for global enterprise scaling parameters.'}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary flex items-center gap-2 shadow-md hover:shadow-lg transition-all">
                  Consult with our Experts <ArrowRightIcon />
                </Link>
                <Link to={`/departments/${dept.slug}`} className="btn-outline">
                  Back to {dept.name}
                </Link>
              </div>
            </div>

            {/* Right Classy Geometric Tech Canvas */}
            <div className="lg:col-span-5 xl:col-span-4 flex items-center justify-center relative min-h-[300px] sm:min-h-[380px] group">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
                
                {/* Outer Spinning Ring Layer */}
                <div 
                  className="absolute inset-0 rounded-full border-2 border-dashed border-slate-200/80 animate-[spin_60s_linear_infinite] group-hover:border-slate-300 transition-colors"
                  style={{ borderImage: `linear-gradient(to right, ${dept.accent || '#3b82f6'}30, transparent) 1` }}
                />

                {/* Middle Rotating Grid Matrix Frame */}
                <div 
                  className="absolute w-[85%] h-[85%] rounded-full border border-slate-100 p-8 animate-[spin_40s_linear_infinite_reverse]"
                  style={{ boxShadow: `inset 0 0 24px ${dept.accent || '#3b82f6'}05` }}
                >
                  <div className="w-full h-full rounded-full border border-dashed border-slate-200/40 relative">
                    <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-sm" style={{ background: dept.accent || '#3b82f6' }} />
                    <div className="absolute bottom-0 left-1/2 w-2 h-2 rounded-full -translate-x-1/2 translate-y-1/2 shadow-sm" style={{ background: dept.accent || '#3b82f6' }} />
                  </div>
                </div>

                {/* Inner Wave / Pulsing Accent Radar */}
                <div 
                  className="absolute w-[55%] h-[55%] rounded-full opacity-40 animate-ping"
                  style={{ background: `radial-gradient(circle, ${dept.accent || '#3b82f6'}15 0%, transparent 70%)` }}
                />

                {/* Floating Glassmorphic Control Pod Cards */}
                <div className="absolute -top-4 -right-2 bg-white/70 backdrop-blur-md border border-slate-100 p-3.5 rounded-2xl shadow-xl shadow-slate-200/30 flex items-center gap-3 animate-[bounce_5s_ease-in-out_infinite] group-hover:scale-105 transition-transform duration-500">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs" style={{ background: `${dept.accent || '#3b82f6'}15`, color: dept.accent || '#3b82f6' }}>01</div>
                  <div>
                    <div className="w-16 h-2 bg-slate-200 rounded mb-1" />
                    <div className="w-10 h-1.5 bg-slate-100 rounded" />
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur-md border border-slate-100 p-3 rounded-xl shadow-xl shadow-slate-200/30 flex items-center gap-2.5 animate-[bounce_6s_ease-in-out_infinite_1s] group-hover:scale-105 transition-transform duration-500">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: dept.accent || '#3b82f6' }}></span>
                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: dept.accent || '#3b82f6' }}></span>
                  </span>
                  <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Active Pipeline Engine</div>
                </div>

                {/* Central Premium Glowing Core Sphere */}
                <div 
                  className="w-28 h-28 rounded-full bg-white border border-slate-100 flex flex-col items-center justify-center relative shadow-2xl transition-all duration-500 group-hover:scale-110"
                  style={{ boxShadow: `0 20px 40px -15px ${dept.accent || '#3b82f6'}30, inset 0 -4px 12px ${dept.accent || '#3b82f6'}05` }}
                >
                  <span className="text-3xl filter drop-shadow-sm mb-1 animate-pulse">{dept.icon || '💼'}</span>
                  <span className="text-[9px] font-black tracking-widest text-slate-400 uppercase">System</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DETAILED OVERVIEW & FEATURES ─── */}
      <section className="section-pad section-light">
        <div className="container-max">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Box Component: Core Service Matrix Map */}
            <div className="lg:col-span-6 space-y-4">
              <div className="glass rounded-3xl p-6 sm:p-8 bg-white border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 bg-gradient-to-bl rounded-bl-full" style={{ from: dept.accent }} />
                
                <h2 className="text-2xl font-black text-slate-900 mb-2">Service Capabilities</h2>
                <p className="text-slate-500 text-xs mb-6 max-w-md">
                  Through our structured delivery pipeline, we provide granular operational architecture engineered to scale efficiently.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {(dept.services || ['System Auditing', 'Infrastructure Design', 'Integration Architecture', 'Performance Yield Management']).slice(0, 4).map((service, idx) => (
                    <div key={idx} className="group/service rounded-2xl overflow-hidden border border-slate-100 bg-slate-50/50 flex flex-col h-full hover:border-slate-200 transition-all">
                      <div className="h-40 overflow-hidden bg-slate-200 relative">
                        <img 
                          src={serviceTeaserImages[idx % serviceTeaserImages.length]} 
                          alt={service} 
                          className="w-full h-full object-cover group-hover/service:scale-105 transition-transform duration-500" 
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent" />
                        <CheckCircleIcon size={16} className="absolute top-3 right-3 text-white bg-primary-500 rounded-full border border-white" />
                      </div>
                      <div className="p-3.5 bg-white flex-grow">
                        <p className="text-slate-800 font-bold text-xs leading-snug line-clamp-2">{service}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Box Content: Detailed Value Delivery */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex px-3 py-1 bg-blue-50 border border-blue-100 text-primary-700 text-xs font-bold rounded-lg uppercase tracking-wide">
                Operational Strategy
              </div>
              <h3 className="text-3xl font-black text-slate-900 leading-tight">Why target this roadmap?</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We design specialized pipelines inside this subset to reduce operational drag and structure scalable growth components. By aligning modern tooling architectures with enterprise metrics, we help maximize operational capacity.
              </p>
              
              <ul className="space-y-4">
                {(dept.benefits || ['Automated risk mitigation routines built-in', 'Substantial minimization of processing layer overheads', 'Direct clear trajectory paths for scaling nodes']).slice(0, 3).map((benefit, i) => (
                  <li key={i} className="flex items-start gap-4 group/item">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-105 transition-transform"
                      style={{ background: `${dept.accent || '#3b82f6'}15`, border: `1px solid ${dept.accent || '#3b82f6'}3A` }}
                    >
                      <CheckCircleIcon size={14} style={{ color: dept.accent || '#3b82f6' }} />
                    </div>
                    <div>
                      <p className="text-slate-700 text-sm font-semibold mb-0.5">Key Advantage Pillar #{i + 1}</p>
                      <p className="text-slate-500 text-xs leading-relaxed">{benefit}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ─── DYNAMIC: UNIQUE BLOGS & ARTICLES SECTION ─── */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <p className="text-primary-600 font-semibold uppercase tracking-widest text-xs mb-2">Knowledge Base</p>
              <h2 className="text-3xl font-black text-slate-900">
                Latest Articles & Insights
              </h2>
            </div>
            <p className="text-slate-500 text-sm mt-2 md:mt-0 max-w-sm leading-relaxed">
              Stay ahead with curated editorial pieces covering operational transformations inside {subDept.name}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <article 
                key={i} 
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 card-hover h-full"
              >
                {/* Dynamic Editorial Article Cover image frame */}
                <div className="h-56 overflow-hidden bg-slate-100 relative">
                  <img 
                    src={article.image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&auto=format"} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span 
                      className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm backdrop-blur-md bg-white/90"
                      style={{ color: dept.accent || '#3b82f6' }}
                    >
                      {article.tag}
                    </span>
                  </div>
                </div>

                {/* Article Copy Content Layout */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium mb-2">
                      <span>{article.date}</span>
                      <span>&bull;</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-slate-900 font-bold text-base mb-2 group-hover:text-primary-600 transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-50 flex items-center justify-end">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-primary-600 group-hover:gap-2 transition-all cursor-pointer">
                      Read Article <ArrowRightIcon size={12} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="section-pad section-light">
        <div className="container-max">
          <div className="glass rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden bg-white border border-slate-100 shadow-sm" style={{ borderColor: `${dept.accent || '#3b82f6'}22` }}>
            <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full blur-2xl opacity-40" style={{ background: dept.accent }} />
            <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-40" style={{ background: dept.accent }} />
            
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 max-w-2xl mx-auto leading-tight">
              Need custom implementation architectures for {subDept.name}?
            </h2>
            <p className="text-slate-500 text-sm mb-6 max-w-xl mx-auto leading-relaxed">
              Connect with our project desk engineers to scope your timeline goals and execute your enterprise strategy.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm shadow-lg shadow-primary-500/10">
              Book standard audit <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}