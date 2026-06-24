export const subDepartments = [

  // ─── CONSULTING ───────────────────────────────────────────────
  {
    departmentSlug: "consulting",
    slug: "business-strategy",
    title: "Business Strategy Consulting",
    tagline: "Fewer assumptions. Clearer direction. Faster progress.",
    description: "We help leadership teams cut through the noise and build strategies that are grounded in how the market actually works — not how they hope it works.",
    heroImage: "/Consulting.webp",
    overview: `
      Strategy work fails most often not because the analysis was wrong, but because the process never surfaced the right questions. Companies invest months building plans based on internal assumptions that nobody seriously challenged. Markets shift while the plan is still being approved.

      Our approach starts with honest diagnosis — not a framework fitted to your situation, but a genuine investigation into your competitive position, your operational reality, and the external environment your business actually operates in. We talk to your customers, review your numbers, map your competitors, and spend real time understanding where value is being created and where it is leaking out.

      From that foundation, we build strategies that are specific, sequenced, and connected to execution. We do not stop at the slide deck. We stay engaged through implementation to make sure the plan survives contact with the organization.
    `,
    services: [
      "Corporate Strategy Development",
      "Market Entry Planning",
      "Competitive Positioning",
      "Revenue Model Design",
      "Growth Roadmapping",
      "M&A Strategic Support"
    ],
    benefits: [
      "Decisions grounded in real market data",
      "Strategies built to hold up as conditions change",
      "Clearer internal alignment on priorities",
      "Measurable milestones from the start",
      "Execution support, not just delivery"
    ],
    process: [
      "Business & Market Diagnosis",
      "Assumption Stress-Testing",
      "Strategic Option Development",
      "Prioritization & Roadmapping",
      "Implementation Support"
    ],
    industryContext: {
      heading: "What Most Strategy Projects Miss",
      body: "The majority of strategy engagements produce plans that look coherent on paper but fail to account for the specific constraints — organizational, financial, competitive — that determine what can actually be executed. A good strategy is not the most ambitious plan; it is the best plan given real constraints. We help businesses make that distinction before they commit resources to a direction.",
      facts: [
        { label: "of strategies fail at execution", stat: "67%", note: "Most plans underestimate internal resistance and resource constraints." },
        { label: "faster growth for companies with formal strategy reviews", stat: "2.4×", note: "Regular strategic calibration outperforms set-and-forget planning cycles." },
        { label: "of executives cite poor alignment as the top execution barrier", stat: "61%", note: "Strategy that is not communicated clearly does not get implemented consistently." }
      ]
    },
    faqs: [
      {
        question: "How is this different from a standard strategy consulting engagement?",
        answer: "Most strategy firms deliver a report and leave. We stay involved through the implementation phase because that is where most strategies actually break down. We treat the plan and the execution as one continuous project."
      },
      {
        question: "What types of organizations do you work with?",
        answer: "We work with scaling startups building their first structured strategy, mid-market businesses navigating a major market or operational shift, and enterprise teams that need outside perspective on a specific strategic question."
      }
    ]
  },

  {
    departmentSlug: "consulting",
    slug: "management-consulting",
    title: "Management Consulting",
    tagline: "Organizations that run well do not happen by accident.",
    description: "We help companies fix the structural and cultural problems that slow teams down, produce inconsistent results, and make good people want to leave.",
    heroImage: "/Consulting.webp",
    overview: `
      Most organizational problems are not people problems. They are design problems. Work flows through unclear structures, decisions happen at the wrong levels, accountability is diffuse, and teams develop workarounds that eventually become the actual process. The symptoms show up as missed targets, high turnover, and constant escalations to senior leadership — but the root causes are structural.

      We come in without a predetermined answer. We interview people at multiple levels, map how decisions are actually made, identify where friction originates, and distinguish between problems that need structural change and problems that need better management practices.

      The recommendations we make are specific to how your organization works, not drawn from a generic operating model template. And we do the change management work — communication planning, leadership alignment, team-level rollout — that determines whether a redesign actually sticks.
    `,
    services: [
      "Operating Model Design",
      "Organizational Restructuring",
      "Change Management",
      "Leadership Development Programs",
      "Workforce Planning",
      "Performance Management Systems"
    ],
    benefits: [
      "Clearer accountability across the organization",
      "Faster decision-making at the right levels",
      "Higher retention among high-performing employees",
      "Smoother transitions through major change",
      "Governance that enables rather than slows"
    ],
    process: [
      "Organizational Diagnostic",
      "Root Cause Identification",
      "Design & Modeling",
      "Change Enablement",
      "Governance & Anchoring"
    ],
    industryContext: {
      heading: "Why Organizational Redesigns Often Fail",
      body: "The biggest mistake in organizational change projects is treating structure as the solution to a culture problem, or treating culture as the solution to a structure problem. Both matter. A redesigned org chart delivered without change management produces resistance and reversion. Culture change without structural support produces temporary behavior shifts that fade. We address both simultaneously.",
      facts: [
        { label: "of change initiatives fail to achieve stated goals", stat: "70%", note: "Poor change management is cited as the primary cause in most post-mortems." },
        { label: "productivity improvement from clear role clarity", stat: "25%", note: "Employees who understand their responsibilities deliver more consistent output." },
        { label: "of top performers leave due to poor management, not pay", stat: "52%", note: "Organizational design directly affects retention of high-value employees." }
      ]
    },
    faqs: [
      {
        question: "How do you handle resistance from employees during major restructuring?",
        answer: "Resistance usually comes from uncertainty, not opposition. We address it through honest communication about what is changing and why, direct involvement of affected teams in design where feasible, and phased rollout plans that give people time to adjust without the disruption feeling arbitrary."
      },
      {
        question: "Can you help a company that has grown too fast and lost operational discipline?",
        answer: "Yes — this is one of the most common situations we work with. Fast growth creates role ambiguity, process gaps, and informal power structures that work at small scale but break as the company expands. We help impose appropriate structure without killing the speed and culture that drove the growth."
      }
    ]
  },

  // ─── CLOUD ────────────────────────────────────────────────────
  {
    departmentSlug: "cloud",
    slug: "cloud-migration",
    title: "Cloud Migration Services",
    tagline: "Move to the cloud without disrupting the business that depends on it.",
    description: "End-to-end migration planning, dependency mapping, and cutover execution for AWS, Azure, and Google Cloud — with a focus on data integrity and minimal downtime.",
    heroImage: "/cloud-storage.webp",
    overview: `
      Cloud migrations that go wrong tend to go wrong in predictable ways: inadequate discovery of dependencies, unrealistic timelines, insufficient testing before cutover, and underestimating the operational changes that follow the technical move. We have seen enough of these projects to know where the risk actually lives.

      Our migration process begins with a thorough assessment of your current environment — applications, databases, integrations, traffic patterns, and compliance requirements. We build a migration plan that accounts for what we find, not what is convenient to assume. Workloads are moved in a sequence that manages risk, and we run parallel environments with continuous data replication before any cutover is executed.

      Post-migration, we validate that everything is performing as expected before handing over to your team or transitioning to ongoing managed operations.
    `,
    services: [
      "Migration Readiness Assessment",
      "Dependency & Architecture Mapping",
      "Lift-and-Shift Execution",
      "Application Re-Architecting",
      "Data Migration & Validation",
      "Post-Migration Optimization"
    ],
    benefits: [
      "Minimal disruption to live operations",
      "Complete data integrity through the move",
      "Lower infrastructure costs post-migration",
      "Scalable environment from day one",
      "Clear documentation of what was built and why"
    ],
    process: [
      "Environment Discovery",
      "Migration Architecture Design",
      "Parallel Environment Build",
      "Data Sync & Validation",
      "Cutover & Handover"
    ],
    industryContext: {
      heading: "The Real Risks in Cloud Migration",
      body: "The technical side of migration is rarely the hardest part. The harder problems are organizational: stakeholders who underestimate timeline, teams unfamiliar with cloud operations, and the tendency to cut scope when costs rise. We help clients plan realistically, including for the things they do not want to hear upfront — like the fact that some applications will need significant work before they are cloud-ready.",
      facts: [
        { label: "of enterprises report cloud migrations exceeded original timelines", stat: "74%", note: "Inadequate discovery and scope creep are the most common causes." },
        { label: "average reduction in infrastructure costs post-migration", stat: "38%", note: "Achieved through rightsizing, elasticity, and elimination of unused capacity." },
        { label: "of migration failures attributed to poor dependency mapping", stat: "43%", note: "Applications rarely exist in isolation; undocumented integrations create cutover surprises." }
      ]
    },
    faqs: [
      {
        question: "How do you ensure no data is lost or corrupted during migration?",
        answer: "We run continuous replication between the source and target environments before cutover, validate data integrity at multiple checkpoints, and do not execute the final switch until we have confirmed parity. We also maintain rollback capability for a defined period after cutover."
      },
      {
        question: "What if some of our applications are not cloud-ready?",
        answer: "This is common and it is better to find out early. We identify these situations during the discovery phase and present options: refactoring the application before migration, using a compatibility layer, or phasing that workload later while moving everything else first."
      }
    ]
  },

  // ─── DATA ─────────────────────────────────────────────────────
  {
    departmentSlug: "data",
    slug: "data-engineering",
    title: "Data Engineering",
    tagline: "Analytics is only as trustworthy as the data feeding it.",
    description: "We design and build data pipelines, warehouses, and infrastructure that make your data reliable, timely, and ready to use — not a maintenance burden.",
    heroImage: "/data.webp",
    overview: `
      Most data problems are not analytics problems. They are data engineering problems. Reports that contradict each other, dashboards that lag by days, pipelines that break whenever an upstream schema changes, and analysts who spend most of their time cleaning data rather than using it — these are engineering problems that no BI tool will solve.

      We build the infrastructure layer that makes data work: ingestion pipelines that handle volume and variety without breaking, transformation logic that is version-controlled and testable, and warehouses structured for the queries people actually run. We use modern tooling — dbt, Airflow, Fivetran, Snowflake, BigQuery, Databricks — but we choose technology based on the problem, not preference.

      Everything we build is documented, monitored, and handed over in a state your team can maintain and extend.
    `,
    services: [
      "Data Pipeline Design & Build",
      "ETL / ELT Architecture",
      "Data Warehouse Implementation",
      "Data Lake Design",
      "Real-Time Streaming Pipelines",
      "Pipeline Monitoring & Alerting"
    ],
    benefits: [
      "Data your analysts can trust without verification rituals",
      "Pipelines that degrade gracefully instead of failing silently",
      "Faster time from raw data to business insight",
      "Reduced analyst time spent on data cleaning",
      "Infrastructure that scales without a full rebuild"
    ],
    process: [
      "Data Audit & Source Mapping",
      "Architecture Design",
      "Pipeline Build & Testing",
      "Warehouse Structuring",
      "Monitoring Setup & Documentation"
    ],
    industryContext: {
      heading: "Why Data Teams Spend So Much Time Fixing Rather Than Building",
      body: "Most data pipelines were not designed — they grew organically as different tools were connected over time. The result is brittle infrastructure with no documentation, unclear ownership, and a tendency to break at the worst possible moments. We bring engineering discipline to data infrastructure the same way it is applied to production software: version control, testing, observability, and documentation as standard practice.",
      facts: [
        { label: "of a typical data analyst's time is spent cleaning data", stat: "45%", note: "Poor data infrastructure is the primary cause of analytic inefficiency." },
        { label: "of organizations report data pipelines breaking monthly or more frequently", stat: "58%", note: "Unreliable data infrastructure erodes trust in analytics across the business." },
        { label: "faster query performance achievable with proper warehouse modeling", stat: "10×", note: "Structure matters as much as compute when it comes to analytics speed." }
      ]
    },
    faqs: [
      {
        question: "What data stack do you typically recommend?",
        answer: "It depends on your data volume, query patterns, team skill set, and budget. We do not have a preferred stack we push regardless of fit. For most mid-market companies, a combination of Snowflake or BigQuery with dbt for transformations and Airflow or Prefect for orchestration works well — but we make that determination after understanding the specifics."
      },
      {
        question: "Can you work with our existing pipelines rather than rebuilding everything?",
        answer: "Yes. We assess what you have, identify what is worth preserving versus what needs to be replaced, and build incrementally where possible. Full rebuilds are sometimes necessary, but they are the last resort, not the default."
      }
    ]
  },

  {
    departmentSlug: "data",
    slug: "data-science-ml",
    title: "Data Science & Machine Learning",
    tagline: "Machine learning that solves real problems, not impressive demos.",
    description: "We build and deploy predictive models, NLP systems, and AI-powered automation that deliver measurable business value — not proofs of concept that never make it to production.",
    heroImage: "/data.webp",
    overview: `
      The gap between a working machine learning model and a deployed machine learning model that a business actually uses is enormous. Most data science engagements produce something that performs well in a notebook and then sits unused because nobody built the infrastructure to run it, monitor it, or update it when it drifts.

      We work differently. We start by agreeing on the business problem and the metric we are trying to move — not the algorithm. We validate that the data required to build a useful model actually exists and is accessible. We build iteratively, with working versions in front of stakeholders early so expectations stay calibrated. And we build the deployment and monitoring infrastructure at the same time as the model itself.

      The result is a system that works in production, not just in a presentation.
    `,
    services: [
      "Predictive Modeling",
      "Natural Language Processing",
      "Computer Vision",
      "Recommendation Systems",
      "MLOps & Model Deployment",
      "Model Monitoring & Retraining"
    ],
    benefits: [
      "Models that run reliably in production, not just development",
      "Clear measurement of business impact, not just model accuracy",
      "Faster model updates when performance degrades",
      "Reduced manual workload in targeted processes",
      "ML infrastructure your team can maintain"
    ],
    process: [
      "Problem Definition & Feasibility",
      "Data Assessment",
      "Baseline Modeling",
      "Iterative Development",
      "Deployment & Monitoring Setup"
    ],
    industryContext: {
      heading: "Why Most ML Projects Do Not Deliver on Their Promise",
      body: "The failure mode is predictable: the data science team builds something impressive, presents it to stakeholders, and then the project stalls at productionization because no one planned for deployment. We treat the pipeline from training to production as part of the project from day one — not an afterthought after the model is built.",
      facts: [
        { label: "of ML models never make it to production", stat: "87%", note: "Deployment infrastructure, not model quality, is the most common bottleneck." },
        { label: "of models degrade meaningfully within 6 months without retraining", stat: "60%", note: "Monitoring and retraining pipelines are as important as the initial build." },
        { label: "reduction in operational cost achievable through targeted ML automation", stat: "30–50%", note: "High-volume, rule-based processes are where ML typically delivers the clearest ROI." }
      ]
    },
    faqs: [
      {
        question: "How do we know if machine learning is the right solution for our problem?",
        answer: "We ask three questions upfront: Is the problem well-defined enough that we can measure success? Does sufficient historical data exist to train a useful model? Would the cost of building and maintaining the model be justified by the value of getting better predictions? If the answer to any of these is no, we say so and recommend a simpler approach."
      },
      {
        question: "What happens when a model's accuracy degrades over time?",
        answer: "All models drift as the real world changes. We build monitoring pipelines that detect performance degradation automatically and trigger retraining workflows when metrics fall below defined thresholds. We do not treat deployment as the end of the project."
      }
    ]
  },

  // ─── MARKETING ───────────────────────────────────────────────
  {
    departmentSlug: "marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Traffic that converts. Spend that makes sense.",
    description: "We run search, paid media, and conversion optimization programs that are tied to revenue metrics — not vanity numbers that look good in monthly reports.",
    heroImage: "/digital-marketing.webp",
    overview: `
      Digital marketing produces a lot of numbers. Impressions, clicks, sessions, bounce rates, time on page — all of them easy to track and most of them easy to misinterpret. The question that actually matters is simpler: is the money being spent on digital marketing producing more revenue than it costs?

      We start there and work backwards. That means understanding your customer acquisition economics, identifying where in the funnel leads are dropping off, and allocating effort to the channels and tactics with the best evidence of impact for your specific business.

      We do not run the same playbook for every client. Search strategy for a B2B software company looks different from paid media for an e-commerce brand. We adapt the approach to the business and measure against the metrics that reflect actual growth.
    `,
    services: [
      "Search Engine Optimization",
      "Pay-Per-Click Management",
      "Conversion Rate Optimization",
      "Technical SEO Audits",
      "Landing Page Design & Testing",
      "Digital Performance Reporting"
    ],
    benefits: [
      "Lower customer acquisition costs over time",
      "Organic search traffic that compounds month over month",
      "Paid campaigns that scale predictably",
      "Clear attribution between spend and revenue",
      "Reduced reliance on any single traffic channel"
    ],
    process: [
      "Funnel & Baseline Analysis",
      "Channel Prioritization",
      "Campaign Build & Launch",
      "A/B Testing & Optimization",
      "Reporting & Iteration"
    ],
    industryContext: {
      heading: "Why Digital Marketing Spend Often Underdelivers",
      body: "The most common issue is not the campaign — it is the measurement. Businesses optimize for metrics that are easy to collect rather than metrics that connect to revenue. Clicks look good. Conversions look better. Revenue per acquisition looks best. We build measurement frameworks first, before touching campaign settings, because you cannot improve what you are not measuring correctly.",
      facts: [
        { label: "of digital ad spend is estimated to be wasted on non-converting traffic", stat: "26%", note: "Audience targeting quality has a larger impact on ROI than creative quality alone." },
        { label: "of organic search clicks go to the top three results", stat: "75%", note: "SEO that does not target position one or two provides minimal long-term value." },
        { label: "average CRO improvement from structured A/B testing programs", stat: "20–30%", note: "Most websites have significant conversion losses that testing can systematically recover." }
      ]
    },
    faqs: [
      {
        question: "How long before we see results from SEO?",
        answer: "Honest answer: meaningful organic traffic typically takes 4–6 months to build from a standing start. Technical SEO improvements can produce faster gains. Competitive categories take longer. We set realistic expectations in the first conversation and build a milestone framework so you can see progress at each stage, not just at the end."
      },
      {
        question: "Can you manage paid media and SEO simultaneously?",
        answer: "Yes, and there is good reason to do both together. Paid search gives you traffic and conversion data quickly while organic builds. The data from paid campaigns informs SEO keyword and content decisions. The two channels are more effective in combination than in isolation."
      }
    ]
  },

  // ─── INFORMATION TECHNOLOGY ──────────────────────────────────
  {
    departmentSlug: "information-technology",
    slug: "software-development",
    title: "Software Development",
    tagline: "Software your business can rely on and your team can maintain.",
    description: "Custom web and mobile applications built to handle real usage, integrate with existing systems, and remain manageable as your business grows.",
    heroImage: "/Information-tech.webp",
    overview: `
      The most common outcome in custom software development is software that technically works but is difficult to change. Requirements were written before the problem was fully understood, development ran in a waterfall cycle disconnected from real user feedback, and the final product solves the problem as it was described in the brief rather than the problem as it actually exists.

      We work iteratively and collaboratively. That means involving the people who understand the business problem directly in the development process, shipping working software in short cycles rather than big releases, and adjusting direction when real usage reveals what the initial design got wrong.

      Our teams are experienced across modern web and mobile stacks and bring the same discipline to backend services, APIs, and integrations as they do to the user-facing product.
    `,
    services: [
      "Web Application Development",
      "Mobile App Development (iOS & Android)",
      "API Design & Integration",
      "Legacy System Modernization",
      "Database Architecture",
      "Technical Architecture Review"
    ],
    benefits: [
      "Software built around how users actually work, not how the spec said they would",
      "Codebases that can be maintained without the original development team",
      "Early delivery of working software for real user feedback",
      "Reduced integration risk through continuous testing",
      "Clear technical documentation at handover"
    ],
    process: [
      "Requirements & Problem Definition",
      "Architecture & Stack Selection",
      "Iterative Development Sprints",
      "User Testing & Feedback",
      "Deployment & Handover"
    ],
    industryContext: {
      heading: "What Makes Custom Software Projects Succeed or Fail",
      body: "The technical work is rarely the reason a software project fails. The more common causes are unclear requirements that shift partway through, a development process that does not surface problems until too late to correct them, and a handover that leaves the client with software they cannot maintain. We address all three through process discipline, not just engineering skill.",
      facts: [
        { label: "of software projects experience significant scope changes", stat: "68%", note: "Iterative development reduces scope change risk by exposing assumptions early." },
        { label: "of enterprise software cost is maintenance, not initial development", stat: "70%", note: "Code quality decisions made at build time determine long-term operational cost." },
        { label: "faster delivery for teams using CI/CD versus manual deployment", stat: "2×", note: "Automated testing and deployment infrastructure reduces release risk and frequency." }
      ]
    },
    faqs: [
      {
        question: "How do we handle requirements that change during development?",
        answer: "Change is expected, not exceptional. Our iterative process is designed to accommodate it. We work in short sprints with frequent stakeholder review, so direction changes happen when they are relatively inexpensive to address rather than after significant work has been completed in the wrong direction."
      },
      {
        question: "What happens after the software is delivered?",
        answer: "We provide complete documentation, a structured handover to your team or internal developers, and post-launch support for a defined period. We also offer ongoing maintenance retainers for clients who want continued engineering support."
      }
    ]
  },

  {
    departmentSlug: "information-technology",
    slug: "cybersecurity",
    title: "Cybersecurity",
    tagline: "Security that works before an incident happens, not after.",
    description: "Proactive vulnerability assessment, 24/7 threat monitoring, and compliance programs that protect your business from the attacks that are actually happening.",
    heroImage: "/Information-tech.webp",
    overview: `
      Most companies discover their security gaps in one of two ways: a third-party audit that finds them, or a breach that exploits them. The first is far preferable. We help organizations find and fix vulnerabilities before attackers do — through penetration testing, configuration audits, and security monitoring that catches threats in progress.

      Cybersecurity is not a product you install once. It is an ongoing practice that requires continuous attention as your environment changes, new vulnerabilities emerge, and threat actors develop new techniques. We build security programs that function as ongoing disciplines, not point-in-time assessments that sit on a shelf.

      Our work also covers the human element — because the most technically secure environment in the world is undone by an employee who clicks a convincing phishing link.
    `,
    services: [
      "Penetration Testing",
      "Security Operations Center (SOC) Monitoring",
      "Vulnerability Assessment & Management",
      "Security Awareness Training",
      "Incident Response Planning",
      "Compliance (ISO 27001, SOC 2, GDPR)"
    ],
    benefits: [
      "Vulnerabilities found and fixed before they are exploited",
      "Faster detection and containment of active threats",
      "Compliance achieved without slowing down operations",
      "Employees who recognize and report social engineering",
      "Clear incident response plan when something does go wrong"
    ],
    process: [
      "Security Posture Assessment",
      "Penetration Testing",
      "Risk Prioritization",
      "Remediation Support",
      "Ongoing Monitoring & Review"
    ],
    industryContext: {
      heading: "The Security Reality Most Businesses Are Not Prepared For",
      body: "Attackers do not typically breach companies through sophisticated zero-day exploits. They use known vulnerabilities that were never patched, credentials that were leaked in a previous breach, and social engineering that bypasses technical controls entirely. The most effective security programs address these boring, common attack vectors before spending on advanced technology.",
      facts: [
        { label: "of breaches involve human elements such as phishing or credential theft", stat: "74%", note: "Technical controls alone cannot address the majority of real-world attack vectors." },
        { label: "average time to detect a data breach without active monitoring", stat: "194 days", note: "Extended dwell time significantly increases breach impact and recovery cost." },
        { label: "of successful attacks exploit vulnerabilities over 3 years old", stat: "60%", note: "Consistent patching and configuration management eliminates most attack surface." }
      ]
    },
    faqs: [
      {
        question: "How often should we run penetration tests?",
        answer: "At minimum, annually — and after any significant change to your environment such as a major application release, infrastructure migration, or acquisition. High-risk industries and regulated environments typically run tests more frequently. Continuous vulnerability scanning between formal pen tests is a useful complement."
      },
      {
        question: "What does a security awareness training program actually involve?",
        answer: "Effective training goes beyond a once-a-year video. We run simulated phishing campaigns to baseline current susceptibility, provide targeted training to employees based on their role and risk profile, and repeat the cycle regularly to track improvement over time. The goal is behavior change, not training completion metrics."
      }
    ]
  },

  // ─── BUSINESS PROCESS ────────────────────────────────────────
  {
    departmentSlug: "business-process",
    slug: "process-automation-rpa",
    title: "Process Automation (RPA)",
    tagline: "Let software handle the work that does not require a human being.",
    description: "We identify, design, and deploy robotic process automation programs that eliminate repetitive manual tasks — freeing your team for work that actually requires judgment.",
    heroImage: "/business-process.webp",
    overview: `
      There is a specific category of work in every organization that is well-defined, rule-based, and repetitive — and it is exactly the kind of work that drains time from people who are capable of doing much more. Data entry from one system to another, invoice validation against purchase orders, report generation from multiple sources, compliance checks against fixed criteria — none of this requires human judgment, but it consumes enormous amounts of human time.

      RPA addresses this directly. We identify the processes where automation will have the greatest impact, design bots that handle those processes reliably, and integrate them with your existing systems without requiring expensive API development.

      We also build the governance structure around automation — monitoring dashboards, exception handling procedures, and maintenance protocols — so the gains from automation are sustained over time rather than degrading as processes and systems change.
    `,
    services: [
      "Process Identification & Prioritization",
      "Bot Design & Development (UiPath, Blue Prism, Automation Anywhere)",
      "Legacy System Integration",
      "Exception Handling Design",
      "Automation Monitoring & Maintenance",
      "RPA Governance Frameworks"
    ],
    benefits: [
      "Elimination of manual errors in high-volume processes",
      "24/7 process execution without additional staffing",
      "Staff redeployment to higher-value activities",
      "Faster cycle times in targeted workflows",
      "Scalable capacity during demand peaks"
    ],
    process: [
      "Process Discovery & Assessment",
      "ROI & Prioritization Analysis",
      "Bot Development & Testing",
      "Integration & UAT",
      "Deployment & Monitoring"
    ],
    industryContext: {
      heading: "Getting RPA Right the First Time",
      body: "The most common RPA failure pattern is automating a broken process — digitalizing inefficiency rather than eliminating it. We assess process quality before building automation, and we recommend process redesign where the underlying workflow has problems that automation would simply make faster to repeat. The second most common failure is insufficient exception handling: bots that work perfectly until an edge case breaks them and nobody notices for days. We build exception management into every automation from the start.",
      facts: [
        { label: "average reduction in processing time for automated back-office tasks", stat: "65%", note: "High-volume, rule-based processes see the fastest and clearest ROI from RPA." },
        { label: "error rate for RPA bots versus manual data entry", stat: "Near zero", note: "Elimination of human error in data handling is one of RPA's most consistent benefits." },
        { label: "of RPA implementations fail to scale beyond initial pilots", stat: "30–50%", note: "Poor governance and exception handling design are the primary causes." }
      ]
    },
    faqs: [
      {
        question: "How do we identify which processes are suitable for automation?",
        answer: "We look for processes that are rule-based and well-documented, involve structured digital data, have high volume or frequency, and currently require significant manual time. Processes with too many exceptions or that depend heavily on unstructured data are typically poor candidates."
      },
      {
        question: "What happens when an automated process breaks or hits an exception?",
        answer: "Every automation we build includes exception handling logic that routes unusual cases to a human queue rather than failing silently. We also build monitoring dashboards that track bot performance and alert when error rates exceed defined thresholds."
      }
    ]
  },

  // ─── MARKET RESEARCH ─────────────────────────────────────────
  {
    departmentSlug: "market-research",
    slug: "quantitative-research",
    title: "Quantitative Research",
    tagline: "Decisions informed by numbers that hold up to scrutiny.",
    description: "Large-scale consumer surveys, statistical modeling, and market segmentation that give you confidence in the patterns driving your market — not just a sample of opinions.",
    heroImage: "/market-reserch.webp",
    overview: `
      Quantitative research is most valuable when the questions are right and the methodology is rigorous enough to produce results you can trust beyond the sample. A survey of 200 self-selected respondents on a free online platform tells you something. A carefully designed study with a representative sample, validated questions, and proper statistical analysis tells you something you can make decisions with.

      We design surveys from the ground up for each engagement, starting with the business question rather than a template. We select sample sources appropriate to the target population, apply weighting where necessary to ensure representativeness, and analyze results using the statistical approaches that fit the research design — segmentation, conjoint, regression, MaxDiff, or others.

      The deliverable is a report written for the people who need to act on it, not a data dump with methodology footnotes.
    `,
    services: [
      "Survey Design & Programming",
      "Consumer Panel Research",
      "Market Segmentation Studies",
      "Conjoint & MaxDiff Analysis",
      "Brand Tracking Studies",
      "Statistical Analysis & Reporting"
    ],
    benefits: [
      "Research findings you can cite with confidence",
      "Segmentation models that reflect how your market actually divides",
      "Pricing and product decisions grounded in stated and revealed preferences",
      "Tracking studies that show how market positions shift over time",
      "Reports written for executive audiences, not researchers"
    ],
    process: [
      "Research Brief & Question Definition",
      "Methodology Design",
      "Questionnaire Development & Testing",
      "Fieldwork & Data Collection",
      "Analysis & Reporting"
    ],
    industryContext: {
      heading: "Why Survey Research Gets a Bad Reputation",
      body: "Most bad survey research is bad because of decisions made before a single question is written: wrong sample, wrong mode, leading questions, and research questions that are too vague to answer definitively. Good quantitative research is a design discipline as much as a statistical one. The analysis is only as meaningful as the methodology that produced the data.",
      facts: [
        { label: "of business leaders say data quality is their biggest research concern", stat: "71%", note: "Sample representativeness and questionnaire design are the primary quality drivers." },
        { label: "of purchase decisions are influenced by understanding customer segments", stat: "89%", note: "Segmentation research consistently ranks among the highest-ROI research investments." },
        { label: "faster go-to-market for companies using pre-launch concept testing", stat: "30%", note: "Testing before commitment reduces costly late-stage pivots." }
      ]
    },
    faqs: [
      {
        question: "How large does a sample need to be to produce reliable results?",
        answer: "It depends on the level of precision required, how you plan to segment the results, and how common the behavior or attitude being measured is. For most national consumer studies, samples of 500–1,000 are sufficient. Niche B2B populations or highly segmented analysis require different approaches, which we design to fit the specific question."
      },
      {
        question: "How quickly can you field a study?",
        answer: "Most consumer panel studies can be in field within 5–7 business days of final questionnaire approval, with results delivered within 2–3 weeks of launch. Specialized populations or complex study designs take longer, and we provide realistic timelines in the project scope."
      }
    ]
  },

  // ─── SOCIAL MEDIA ────────────────────────────────────────────
  {
    departmentSlug: "social-media",
    slug: "social-strategy",
    title: "Social Media Strategy",
    tagline: "A social presence built on purpose, not just consistency.",
    description: "We help brands make deliberate choices about where to show up, what to say, and how to measure whether social media is actually contributing to business growth.",
    heroImage: "/social-media.webp",
    overview: `
      Most brands approach social media reactively — posting frequently enough to feel present, responding to trends when it seems relevant, and measuring success by follower counts and engagement rates without a clear line to business outcomes.

      A strategy changes that. It starts with the questions that matter: who are you trying to reach, where do they actually spend time online, what would make them follow and engage with your brand rather than a competitor, and how does any of that convert to revenue or brand value?

      We build social strategies that are specific enough to act on and flexible enough to adapt. Platform selection is deliberate. Content themes are tied to business objectives. KPIs are defined before the work begins. And the strategy is designed to evolve based on what the data shows.
    `,
    services: [
      "Platform Audit & Selection",
      "Content Pillar Development",
      "Editorial Calendar Planning",
      "Audience & Competitor Analysis",
      "KPI Framework Design",
      "Monthly Strategy Reviews"
    ],
    benefits: [
      "Clear focus on the platforms that actually reach your audience",
      "Content direction that reflects your brand identity consistently",
      "Measurement framework connected to real business goals",
      "Reduced wasted effort on channels with no return",
      "A strategy your team can execute without constant direction"
    ],
    process: [
      "Current State Audit",
      "Audience & Platform Research",
      "Strategy Development",
      "Content Framework Design",
      "Launch & Iteration Plan"
    ],
    industryContext: {
      heading: "The Real Cost of Social Without Strategy",
      body: "Brands that show up on every platform without a clear reason tend to produce content that works nowhere particularly well. The cost is not just wasted creative and management effort — it is the opportunity cost of not showing up strongly in the fewer places where the audience is actually concentrated. A focused strategy on two or three platforms almost always outperforms a diluted presence across six.",
      facts: [
        { label: "of social media managers report not having a documented content strategy", stat: "46%", note: "Ad hoc content consistently underperforms strategy-led content on all key metrics." },
        { label: "higher engagement rate for brands with consistent content pillars", stat: "3×", note: "Audience recognition and expectation-setting drives meaningful engagement improvement." },
        { label: "of consumers say brand consistency across channels influences their trust", stat: "68%", note: "Social strategy is inseparable from broader brand strategy for customer trust." }
      ]
    },
    faqs: [
      {
        question: "How do you decide which platforms a brand should focus on?",
        answer: "We start with the target audience, not the platform. We look at where that audience spends time, what content format fits the way they engage on each platform, and whether the brand has the capacity to execute well on that platform consistently. It is better to do two platforms well than six poorly."
      },
      {
        question: "How long does it take to see results from a new social strategy?",
        answer: "Organic social is a long game. Meaningful audience growth and engagement improvement typically take three to six months of consistent execution. Paid social can accelerate reach faster. We set realistic timelines and show progress at monthly intervals so clients can see what is working at each stage."
      }
    ]
  },

  // ─── VIRTUAL ASSISTANT ────────────────────────────────────────
  {
    departmentSlug: "virtual-assistant",
    slug: "executive-assistance",
    title: "Executive Assistance",
    tagline: "Protect the hours that matter most.",
    description: "Skilled remote assistants who handle the scheduling, coordination, and administrative load that pulls senior leaders away from the work only they can do.",
    heroImage: "/virtual-assistant.webp",
    overview: `
      Senior leaders often have more meetings on their calendar than they can afford and less time for the thinking their role actually requires. The problem is usually not a lack of discipline — it is a lack of support infrastructure.

      An executive assistant's job is to create protected time and mental space for the person they support. That means managing a calendar that reflects actual priorities, not just acceptance of every incoming request. It means making sure the right preparation exists before every important meeting. It means handling the correspondence, travel, and logistics that create noise without adding value.

      Our executive assistants are experienced, discreet, and capable of operating independently within clearly defined parameters. They work remotely, integrate with your existing tools, and are available within the hours your business requires.
    `,
    services: [
      "Calendar & Schedule Management",
      "Travel Planning & Coordination",
      "Email Inbox Management",
      "Meeting Preparation & Briefing Notes",
      "Stakeholder Correspondence",
      "Project Coordination Support"
    ],
    benefits: [
      "More protected time for high-priority work",
      "Better meeting preparation without personal effort",
      "Inbox management that surfaces what needs attention",
      "Seamless travel coordination with contingency planning",
      "A reliable operational layer that does not require supervision"
    ],
    process: [
      "Onboarding & Tool Access",
      "Priority & Preferences Briefing",
      "Calendar Restructuring",
      "Workflow Establishment",
      "Ongoing Review & Calibration"
    ],
    industryContext: {
      heading: "What High-Performing Leaders Have in Common",
      body: "Most effective executives operate with significant administrative support. The work of scheduling, correspondence management, and meeting logistics is not unimportant — it is just not the highest-value use of a senior leader's time. Offloading it properly to a skilled assistant typically frees 8–12 hours per week that can be redirected to strategic thinking, relationship-building, and the work that moves the business forward.",
      facts: [
        { label: "average hours per week senior leaders spend on schedulable administrative tasks", stat: "10–12 hrs", note: "Calendar management, email, and meeting prep account for the majority of this time." },
        { label: "of executives report that poor time management is their top productivity challenge", stat: "63%", note: "Administrative support directly addresses the most cited productivity constraint." },
        { label: "ROI reported by businesses using dedicated executive assistant support", stat: "6–10×", note: "Time freed from administration generates outsized returns when redirected to strategic work." }
      ]
    },
    faqs: [
      {
        question: "How does a remote assistant access the tools they need?",
        answer: "We work within whatever tools you already use — Google Workspace, Outlook, Slack, Zoom, travel platforms, and others. Access is set up during onboarding with appropriate permissions, and we follow whatever security practices your organization requires."
      },
      {
        question: "What if we need coverage across multiple time zones?",
        answer: "We can structure coverage to match the working hours of the leaders being supported, including early morning or late evening availability where required. For executives with genuinely global schedules, we can also coordinate handoffs between assistants in different time zones."
      }
    ]
  },

  // ─── MEDIA PUBLICATION ───────────────────────────────────────
  {
    departmentSlug: "media-publication",
    slug: "brand-journalism",
    title: "Brand Journalism",
    tagline: "Your organization knows things worth publishing.",
    description: "We help companies share genuine expertise through editorial content that builds real credibility — not the kind that looks like marketing because it is.",
    heroImage: "/media-publication.webp",
    overview: `
      The difference between thought leadership that builds trust and thought leadership that does not is specificity. Generic content about industry trends, written to avoid taking any position that might be disagreed with, has become so common that audiences have learned to ignore it.

      Real brand journalism works when it says something specific, shares something the reader did not already know, and reflects how the people in an organization actually think about their domain. It is closer to good editorial content than to marketing copy.

      We work with your subject matter experts to extract the specific knowledge and perspectives they hold, turn it into content that is engaging and accessible, and distribute it to the audiences who would value it most. The bylines are theirs. The credibility compounds over time.
    `,
    services: [
      "Executive Ghostwriting",
      "Thought Leadership Articles",
      "Industry Opinion & Commentary",
      "Long-Form Guides & Whitepapers",
      "LinkedIn Content Programs",
      "Speaking Abstract Development"
    ],
    benefits: [
      "Individual executives established as recognizable voices in their field",
      "Content that earns media coverage and inbound opportunities",
      "A body of published work that outlasts individual campaigns",
      "Trust with prospects who encounter the brand through content before a sales conversation",
      "Differentiation from competitors producing generic marketing material"
    ],
    process: [
      "Expert Knowledge Extraction",
      "Angle & Positioning Development",
      "Draft & Review",
      "Editing & Fact-Checking",
      "Publication & Distribution"
    ],
    industryContext: {
      heading: "Why Most Thought Leadership Does Not Work",
      body: "The problem is usually that the content is written to be inoffensive and broadly applicable, which means it is not particularly useful to anyone. Effective thought leadership takes a position, shares something specific, and is written with enough detail that a reader learns something. We help executives say the things they would say in a room with peers — not the things they would say in a press release.",
      facts: [
        { label: "of B2B buyers engage with thought leadership before entering a sales process", stat: "58%", note: "Content credibility influences vendor selection before sales contact is made." },
        { label: "of executives report that strong thought leadership directly influenced buying decisions", stat: "49%", note: "Published expertise drives measurable commercial outcomes in B2B markets." },
        { label: "of buyers say low-quality thought leadership decreases their trust in a vendor", stat: "71%", note: "Generic or promotional content actively damages credibility rather than building it." }
      ]
    },
    faqs: [
      {
        question: "How do you capture an executive's voice if they are not writing the content themselves?",
        answer: "We start with a structured interview or conversation — usually 30 to 45 minutes — where we extract the thinking, perspective, and specific examples that will anchor the piece. From that we produce a draft that the executive reviews and edits to match their voice. Over time, the process becomes faster as we develop an accurate sense of how they think and write."
      },
      {
        question: "Where do you publish the content?",
        answer: "That depends on the audience and objective. Options include LinkedIn, industry publications, the company's own blog, third-party newsletters, and media outlets we have relationships with. We recommend the distribution channels that will reach the specific audience you are trying to build credibility with."
      }
    ]
  },

];