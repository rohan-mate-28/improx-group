import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { departments, socialLinks, contactInfo } from '../data/departments';
import { ArrowRightIcon, CheckCircleIcon, SocialIcon } from '../components/Icons';

// ─── ANIMATED COUNTER SUB-COMPONENT ───
function AnimatedCounter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const numericTarget = parseInt(target.replace(/\D/g, ''));
        let start = 0;
        const step = numericTarget / (duration / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= numericTarget) {
            setCount(numericTarget);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  const suffix = target.includes('+') ? '+' : target.includes('%') ? '%' : '';
  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── SCROLL REVEAL CUSTOM HOOK ───
function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { 
        setVisible(true); 
        observer.disconnect(); 
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

// ─── STATIC DATA MODELS ───
const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '150+', label: 'Enterprise Clients' },
  { value: '10', label: 'Departments' },
  { value: '98%', label: 'Client Satisfaction' },
];

const whyUs = [
  'Full-stack business services under one roof',
  'Dedicated account managers for every client',
  'Agile delivery with transparent reporting',
  'Global expertise with local understanding',
  'Proven track record across 30+ industries',
  'Data-driven decisions at every step',
];

const industries = [
  { 
    name: 'Healthcare', 
    tagline: 'Patient-first operational transformation & digital ecosystems.',
    info: 'Navigating the intersection of rigorous clinical care and complex regulatory landscapes requires highly adaptive technology architecture. We engineer end-to-end medical environments, modern telemedicine networks, unified EHR data fabrics, and secure cloud environments that break down communication silos while preserving clinical accuracy.',
    focus: ['HIPAA & HITECH Architecture', 'Remote Patient Telemetry Systems', 'FHIR Interoperability Layers', 'AI-Driven Clinical Diagnostics']
  },
  { 
    name: 'Finance', 
    tagline: 'Algorithmic efficiency and risk orchestration platforms.',
    info: 'Modern asset ecosystems demand high-speed processing systems, secure infrastructure, and predictive capabilities to maintain structural alpha. We help investment managers, insurance agencies, and trading institutions design custom high-frequency data pipelines and automated risk analysis tools.',
    focus: ['Quantitative Trading Frameworks', 'Predictive Risk Simulation Models', 'Automated Reconciliation Engines', 'Portfolio Lifecycle Analytics']
  },
  { 
    name: 'Banking', 
    tagline: 'Core infrastructure scaling and open banking ecosystems.',
    info: 'As global banking shifts toward decentralized access and open banking structures, traditional financial systems face unprecedented technical demands. We build secure API architectures, lightning-fast transaction ledgers, and automated fraud-detection systems.',
    focus: ['PSD2 & Open Banking API Fabrics', 'High-Throughput Ledger Systems', 'Real-Time Fraud Mitigations', 'Legacy Core Mainframe Upgrades']
  },
  { 
    name: 'Education', 
    tagline: 'Modernizing student journeys through unified virtual platforms.',
    info: 'Academic settings require modern digital infrastructure that connects student engagement with backend administrative tools. We design and integrate custom Learning Management Systems (LMS), secure campus networks, and cloud infrastructure.',
    focus: ['Enterprise LMS Customizations', 'Predictive Retention Dashboarding', 'Immersive Classroom Pipelines', 'Automated Enrollment Workflows']
  },
  { 
    name: 'Retail', 
    tagline: 'Omnichannel supply optimization and local point-of-sale systems.',
    info: 'Physical retail operations depend entirely on clear supply chains and fast inventory tracking across physical and digital storefronts. We build smart inventory platforms, connect localized POS terminals, and map store layouts.',
    focus: ['Real-Time Multi-Store Syncing', 'Smart Inventory Distributions', 'Integrated Point-of-Sale Bridges', 'Localized Store Analytics']
  },
  { 
    name: 'E-Commerce', 
    tagline: 'High-conversion headless architectures and international setups.',
    info: 'Digital commerce requires fast page loads, modular flexibility, and frictionless payment checkouts to capture dynamic online shoppers. We design fast headless commerce layouts, localized checkout experiences, and intelligent recommendation systems.',
    focus: ['Headless Engine Orchestration', 'Multi-Currency Global Checkouts', 'AI Search Optimization Layer', 'Dynamic Cart Behavior Workflows']
  },
  { 
    name: 'Manufacturing', 
    tagline: 'IoT telemetry architectures and industrial pipeline analytics.',
    info: 'Industrial production spaces rely on machinery uptime and highly optimized material logistics. We deploy secure IoT monitoring networks, predictive machine maintenance platforms, and automated assembly workflows.',
    focus: ['Industrial IoT Sensor Architectures', 'Predictive Maintenance Trackers', 'Supply Chain Visibility Portals', 'Automated Quality Control Audits']
  },
  { 
    name: 'Technology', 
    tagline: 'SaaS design environments and automated cloud workflows.',
    info: 'Tech companies must build software fast and scale infrastructure without driving up operational overhead. We design scalable multi-tenant SaaS layouts, manage clean migrations to public clouds, and set up automated DevOps integration pipelines.',
    focus: ['Multi-Tenant SaaS Blueprints', 'Declarative Infrastructure (IaC)', 'High-Availability Cloud Design', 'Continuous Integration Automation']
  },
  { 
    name: 'Real Estate', 
    tagline: 'PropTech platforms and digitized transaction pipelines.',
    info: 'Property developers and asset groups depend on streamlined document workflows and engaging virtual visual displays to move properties. We build modern PropTech software systems, automated document signoff pipelines, and detailed visual leasing tracking tools.',
    focus: ['PropTech Application Design', 'Automated Leasing Signoffs', 'Spatial Layout Visualizations', 'Asset Portfolio Dashboards']
  },
  { 
    name: 'Logistics', 
    tagline: 'Dynamic routing models and cold-chain asset tracking.',
    info: 'Global shipping networks require pinpoint route planning and immediate asset tracking to protect operating margins. We build custom fleet routing algorithms, live GPS asset tracking maps, and specialized temperature tracking environments.',
    focus: ['Dynamic Fleet Routing Math', 'Cold-Chain Environmental Trackers', 'Warehouse Space Allocations', 'Last-Mile Delivery Pipelines']
  },
  { 
    name: 'Hospitality', 
    tagline: 'High-scale booking systems and centralized asset tracking.',
    info: 'Hotel and resort operations need fast, modern booking platforms and immediate property metrics to maximize occupancy. We build high-scale booking software, connect property asset systems, and manage personalized guest messaging frameworks.',
    focus: ['Booking Software Integrations', 'Centralized Property Databases', 'Dynamic Rate Adjustment Logic', 'Guest Engagement Automations']
  },
  { 
    name: 'Government', 
    tagline: 'Secure public platforms and citizen touchpoint services.',
    info: 'Public sector programs require secure systems, accessible layouts, and reliable infrastructure capable of managing citizen data safely. We build simple public portals, digital documentation processing streams, and secure storage networks.',
    focus: ['FedRAMP Compliant Architectures', 'Accessible Public Portals (WCAG)', 'Secure Records Encryption', 'Digital Application Streams']
  }
];

const mockBlogs = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise Workflows',
    excerpt: 'Discover how automated models and machine intelligence are shifting core operational costs.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
    tag: 'Artificial Intelligence',
    date: 'June 18, 2026'
  },
  {
    id: 2,
    title: 'Architecting Scalable Cloud Microservices',
    excerpt: 'Key strategies for multi-region cloud configurations, performance limits, and security protocols.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop',
    tag: 'Cloud Transformation',
    date: 'June 12, 2026'
  },
  {
    id: 3,
    title: 'Maximizing Client Conversions via Data Insights',
    excerpt: 'How cleaning and filtering your database pipeline yields targeted outreach success.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
    tag: 'Data Intelligence',
    date: 'May 28, 2026'
  }
];

// ─── ROOT HOMEPAGE COMPONENT ───
export default function HomePage() {
  const [heroRef, heroVisible] = useScrollReveal();
  const [statsRef, statsVisible] = useScrollReveal();
  const [deptRef, deptVisible] = useScrollReveal();
  const [whyRef, whyVisible] = useScrollReveal();
  const [blogRef, blogVisible] = useScrollReveal();

  // Explicit active tab hooks moved out of counter block down to home logic container
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = industries[activeIndex];

  return (
    <div className="overflow-hidden bg-white">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="hero-glow w-96 h-96 bg-primary-400 top-20 left-10" />
        <div className="hero-glow w-80 h-80 bg-accent-400 top-40 right-10" />
        <div className="hero-glow w-64 h-64 bg-primary-300 bottom-20 left-1/3" />

        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle w-1.5 h-1.5 bg-primary-400/40"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          />
        ))}

        <div className="container-max px-4 sm:px-6 lg:px-8 text-center relative z-10" ref={heroRef}>
          <div className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 text-sm text-primary-700 font-medium animate-pulse">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Trusted by 150+ companies worldwide
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
              One Partner.<br />
              <span className="gradient-text">Infinite Possibilities.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Improx Group delivers end-to-end business solutions across consulting, cloud, marketing, data, IT, and beyond — built to scale your vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/departments" className="btn-primary flex items-center justify-center gap-2 text-base px-8 py-4">
                Explore Departments <ArrowRightIcon />
              </Link>
              <Link to="/contact" className="btn-outline flex items-center justify-center gap-2 text-base px-8 py-4">
                Talk to Us
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center gap-6 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-500 hover:text-primary-600 transition-colors text-sm hover:-translate-y-0.5 duration-300"
                >
                  <SocialIcon name={social.icon} size={18} />
                  <span className="hidden sm:inline">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-300 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-3 bg-primary-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
     <section className="py-8 md:py-16 bg-gradient-to-r from-primary-50 to-blue-50" ref={statsRef}>
  <div className="container-max px-4"> 
    {/* Reduced gap from gap-8 to gap-4 on mobile */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`text-center transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: `${i * 150}ms` }}
        >
          {/* Scaled down text: text-2.5xl on mobile, scaling up to text-5xl */}
          <div className="text-2xl sm:text-3xl lg:text-5xl font-black gradient-text mb-1 md:mb-2">
            {statsVisible ? <AnimatedCounter target={stat.value} /> : '0'}
          </div>
          {/* Made label text slightly smaller on mobile */}
          <p className="text-slate-600 text-xs sm:text-sm font-medium leading-tight">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ─── ABOUT ─── */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-primary-600 font-semibold uppercase tracking-widest text-sm mb-3">
              About Improx Group
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              A Unified Ecosystem Of Business Excellence
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Improx Group is a diversified business solutions organization bringing together consulting, cloud solutions, marketing, data analytics, business process services, media publication, market research, virtual assistant services, information technology and social media management under one powerful ecosystem.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our mission is to help organizations innovate, optimize, transform and grow through integrated expertise, advanced technology and strategic guidance.
            </p>
          </div>
        </div>
      </section>

      {/* ─── DEPARTMENTS GRID ─── */}
      <section className="section-pad" ref={deptRef}>
        <div className="container-max">
          <div className={`text-center mb-14 transition-all duration-700 ${deptVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-primary-600 font-semibold uppercase tracking-widest text-sm mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Our <span className="gradient-text">Business Divisions</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              10 specialized divisions. One unified mission: to drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {departments.map((dept, i) => (
              <Link
                key={dept.id}
                to={`/departments/${dept.slug}`}
                className={`glass rounded-2xl overflow-hidden card-hover group cursor-pointer transition-all duration-700 ${deptVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
                  
                </div>

                <div className="p-6 flex flex-col min-h-[180px]">
  <div>
    <h3 className="text-slate-900 font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">
      {dept.name}
    </h3>

    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
      {dept.tagline}
    </p>
  </div>

  <div className="mt-auto pt-6">
    <div className="inline-flex items-center gap-2 text-primary-600 text-sm font-semibold">
      Explore
      <ArrowRightIcon
        size={14}
        className="group-hover:translate-x-1 transition-transform duration-300"
      />
    </div>
  </div>
</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES WE SERVE ─── */}
   <section className="py-20 lg:py-28 bg-slate-50 text-slate-800 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200">
      <div className="max-w-2xl">
        <p className="text-blue-600 font-semibold uppercase tracking-widest text-xs mb-3">Market Architecture</p>
        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">Industries We Serve</h2>
      </div>
      <p className="mt-4 md:mt-0 text-slate-600 max-w-sm text-sm sm:text-base leading-relaxed">
        Deploying domain expertise and highly scalable technical frameworks across vertical markets.
      </p>
    </div>

    <div className="grid lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-col gap-2 max-h-[550px] overflow-y-auto pr-2 custom-scrollbar">
        {industries.map((item, idx) => {
          const isSelected = activeIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`flex items-center justify-between px-5 py-4 rounded-lg text-left transition-all duration-200 border w-full group ${
                isSelected
                  ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/10 translate-x-1'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              <span className="text-sm font-bold tracking-wide truncate">{item.name}</span>
              <span className={`text-xs font-mono transition-opacity duration-200 ${isSelected ? 'opacity-60 text-white' : 'opacity-0 group-hover:opacity-40 text-slate-500'}`}>
                // {(idx + 1).toString().padStart(2, '0')}
              </span>
            </button>
          );
        })}
      </div>

      <div className="lg:col-span-8 bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-xl p-8 lg:p-12 min-h-[520px] flex flex-col justify-between relative shadow-sm backdrop-blur-sm">
        <div className="relative z-10">
          <div className="mb-8">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest block mb-1">
              Sector Profile No. {((activeIndex + 1).toString().padStart(2, '0'))}
            </span>
            <h3 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">{activeIndustry?.name}</h3>
            <p className="text-blue-600 font-medium text-sm sm:text-base mt-1.5">{activeIndustry?.tagline}</p>
          </div>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-10 font-normal text-justify">
            {activeIndustry?.info}
          </p>
        </div>

        <div className="relative z-10 pt-8 border-t border-slate-200">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Core Structural Focus Areas</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {activeIndustry?.focus.map((feature, fIdx) => (
              <div key={fIdx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 bg-white px-4 py-3 rounded-lg border border-slate-200">
                <span className="w-1 h-1 rounded-full bg-blue-600 shrink-0" />
                <span className="font-semibold tracking-wide text-slate-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ─── FUTURE READY SOLUTIONS ─── */}
      <section className="section-pad">
        <div className="container-max">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-black mb-8">Future Ready Solutions</h2>
            <p className="text-xl text-slate-600">
              Helping organizations embrace innovation, automation, artificial intelligence, cloud computing and data-driven decision making.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="glass p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-3 text-slate-900">Artificial Intelligence</h3>
              <p className="text-slate-600">Smart automation and business intelligence pipelines built to scale operation frameworks.</p>
            </div>
            <div className="glass p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-3 text-slate-900">Cloud Transformation</h3>
              <p className="text-slate-600">Scalable, low-latency, and secure cloud container architecture deployed globally.</p>
            </div>
            <div className="glass p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-3 text-slate-900">Data Intelligence</h3>
              <p className="text-slate-600">Transforming vast databases into precise strategic dashboards and clean target insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY IMPROX ─── */}
     {/* ─── WHY IMPROX ─── */}
<section className="py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden" ref={whyRef}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Upper Section Header */}
    <div className="max-w-3xl mb-16 lg:mb-24">
      <p className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-3">Why Improx</p>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
        The partner that stays <br />
        <span className="gradient-text">until the job is done.</span>
      </h2>
      <p className="text-slate-500 text-lg sm:text-xl leading-relaxed mt-6">
        We don't just deliver isolated source files — we scale cohesive operational ecosystems. Every engagement is backed by direct communication channels, senior software architecture standards, and clear metrics.
      </p>
    </div>

    {/* Main Large Content Splitting Panels */}
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
      
      {/* Left Column: Big Core Value Checklist */}
      <div className={`lg:col-span-5 flex flex-col justify-between transition-all duration-700 ${whyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-3">
            Core Operating Framework
          </h3>
          <ul className="space-y-4">
            {whyUs.map((item, i) => (
              <li
                key={i}
                className={`flex items-start gap-4 text-slate-700 text-base sm:text-lg transition-all duration-500 ${whyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="mt-1 flex-shrink-0 p-1 bg-primary-50 rounded-lg text-primary-600">
                  <CheckCircleIcon size={20} />
                </span>
                <span className="font-medium tracking-wide">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 lg:mt-0 pt-8 border-t border-slate-200">
          <Link to="/about" className="btn-primary inline-flex items-center justify-center gap-3 w-full sm:w-auto text-base px-8 py-4 shadow-lg shadow-primary-600/10">
            Learn More About Our Philosophy <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>

      {/* Right Column: Massive Full-Cover Uncropped Showcase Panels */}
      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 relative min-h-[500px]">
        <div className="absolute -inset-4 bg-gradient-to-tr from-primary-100/40 via-blue-50/20 to-transparent rounded-3xl -z-10 blur-2xl opacity-70" />
        
        {departments.slice(0, 4).map((dept, i) => {
          const onlineImages = [
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop'
          ];

          return (
            <div
              key={dept.id}
              className={`glass rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between border border-slate-100 ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Image Frame: set to object-contain or auto dimensions so it scales fully in width/height without weird cuts */}
              <div className="relative w-full h-48 bg-slate-50 flex items-center justify-center overflow-hidden border-b border-slate-100">
                <img
                  src={onlineImages[i]}
                  alt={dept.name}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
              </div>
              
              {/* Content Panel */}
              <div className="p-6 bg-white flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-slate-900 font-black text-base tracking-tight mb-1">
                    {dept.name}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium line-clamp-2 leading-relaxed">
                    {dept.tagline || 'Engineered multi-channel workflows optimized for high-growth modern business deployments.'}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-primary-600 font-bold text-xs bg-primary-50 px-2.5 py-1 rounded-md tracking-wide">
                    {dept.stats?.[0]?.value || 'Enterprise Tier'}
                  </span>
                  <span className="text-slate-400 text-xs font-medium">
                    {dept.stats?.[0]?.label || 'Solutions'}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  </div>
</section>
      {/* ─── BLOGS & ARTICLES SECTION ─── */}
      <section className="section-pad bg-white" ref={blogRef}>
        <div className="container-max">
          <div className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-12 transition-all duration-700 ${blogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div>
              <p className="text-primary-600 font-semibold uppercase tracking-widest text-sm mb-3">Insights</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
                Blogs & Articles
              </h2>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {mockBlogs.map((blog) => (
              <div key={blog.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-slate-100 mb-4">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {blog.tag}
                  </span>
                </div>
                <p className="text-slate-400 text-xs font-medium mb-1">{blog.date}</p>
                <h3 className="text-slate-900 font-bold text-xl mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                  {blog.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}