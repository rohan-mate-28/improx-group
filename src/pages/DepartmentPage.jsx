import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { departments } from '../data/departments';
import { ArrowRightIcon, CheckCircleIcon } from '../components/Icons';

function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

export default function DepartmentPage() {
  const { slug } = useParams();
  const dept = departments.find((d) => d.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  const [subRef, subVisible] = useScrollReveal();
  const [processRef, processVisible] = useScrollReveal();
  const [servRef, servVisible] = useScrollReveal();
  const [blogRef, blogVisible] = useScrollReveal();
  const [faqRef, faqVisible] = useScrollReveal();
  const [otherRef, otherVisible] = useScrollReveal();

  // Active state for FAQ accordions
const [activeFaq, setActiveFaq] = useState(0);
  if (!dept) return <Navigate to="/departments" replace />;

  // ─── DYNAMIC CONTEXTUAL BLOG CONTENT MAPPING MATRIX ───
  const getDepartmentArticles = (deptSlug, deptName) => {
    const defaultArticles = [
      {
        title: `Optimizing ${deptName} Frameworks for Post-2026 Enterprises`,
        excerpt: `A master blueprint detailing operational adjustments needed to mitigate deployment friction while lowering infrastructure overhead.`,
        date: 'June 18, 2026',
        readTime: '6 min read',
        tag: 'Insights',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop'
      },
      {
        title: `The Architecture of High-Yield Resource Management`,
        excerpt: `Discover how structured workflows can isolate capacity constraints and systematically increase processing capacity within legacy pipelines.`,
        date: 'June 10, 2026',
        readTime: '8 min read',
        tag: 'Strategy',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop'
      },
      {
        title: `Avoiding Common Automation Pitfalls During Systems Migration`,
        excerpt: `An actionable guide outlining key structural flaws in modern development pipelines and programmatic methods to bypass them entirely.`,
        date: 'May 28, 2026',
        readTime: '5 min read',
        tag: 'Best Practices',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop'
      }
    ];

    const strategyArticles = [
      {
        title: 'Blue Ocean Shifts: Finding Untapped Corporate Market Spaces',
        excerpt: 'How enterprise firms isolate legacy architectural vulnerabilities to position high-margin service layers cleanly.',
        date: 'June 19, 2026',
        readTime: '7 min read',
        tag: 'Market Strategy',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop'
      },
      {
        title: 'Redesigning Org Structures for Post-Agile Corporate Environments',
        excerpt: 'Why strict cross-departmental silos crumble under variable market conditions, and how hybrid engineering matrices step in.',
        date: 'June 12, 2026',
        readTime: '6 min read',
        tag: 'Management',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop'
      },
      {
        title: 'Audit Methodologies for Mid-Market Performance Bottlenecks',
        excerpt: 'How to deploy micro-interviews and programmatic resource data points without introducing system friction.',
        date: 'June 02, 2026',
        readTime: '9 min read',
        tag: 'Operations',
        image: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=600&auto=format&fit=crop'
      }
    ];

    const cloudArticles = [
      {
        title: 'Zero-Downtime Live Database Migration for Cloud Environments',
        excerpt: 'An in-depth code evaluation of active structural replication moving local transaction logs safely to cloud containers.',
        date: 'June 17, 2026',
        readTime: '11 min read',
        tag: 'Cloud Engineering',
        image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=600&auto=format&fit=crop'
      },
      {
        title: 'Optimizing Container Orchestration Arrays Under Sudden API Spikes',
        excerpt: 'Fine-tuning deployment rules, horizontally scaled configurations, and threshold parameters for critical traffic load states.',
        date: 'June 11, 2026',
        readTime: '7 min read',
        tag: 'DevOps Architecture',
        image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=600&auto=format&fit=crop'
      },
      {
        title: 'Securing Shared Automation Action Runner Pipelines Against Attacks',
        excerpt: 'Hardening variable definitions, secrets tokens, and runtime environments across automated deployment vectors.',
        date: 'May 24, 2026',
        readTime: '10 min read',
        tag: 'Security Dev',
        image: 'https://images.unsplash.com/photo-1563986768494-0de2e4926784?q=80&w=600&auto=format&fit=crop'
      }
    ];

    const dataArticles = [
      {
        title: 'Building Multi-Tenant Modern Data Lakes with Elastic Compute Layers',
        excerpt: 'Structuring isolated access schemas to separate transactional production assets clearly from raw analysis inputs.',
        date: 'June 18, 2026',
        readTime: '9 min read',
        tag: 'Data Engineering',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop'
      },
      {
        title: 'Fine-Tuning Open Source Large Models for Domain-Specific Contexts',
        excerpt: 'Methods to inject custom internal legal or engineering knowledge bases into graphs without weight compilation failure.',
        date: 'June 14, 2026',
        readTime: '12 min read',
        tag: 'Machine Learning',
        image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop'
      },
      {
        title: 'Managing Schema Drift Architecture Across Dynamic Event Streams',
        excerpt: 'Programmatic validation techniques to prevent critical business dashboards from breaking during rapid upstream schema changes.',
        date: 'June 05, 2026',
        readTime: '8 min read',
        tag: 'Pipelines Dev',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop'
      }
    ];

    if (deptSlug.includes('strategy') || deptSlug.includes('consulting')) return strategyArticles;
    if (deptSlug.includes('cloud') || deptSlug.includes('devops')) return cloudArticles;
    if (deptSlug.includes('data') || deptSlug.includes('intelligence')) return dataArticles;
    
    return defaultArticles;
  };

  const blogArticles = getDepartmentArticles(slug, dept.name);

  // Fallback static QA information matrix block 
  const currentFaqs = [
    { q: `How long does a target roadmap deployment take within ${dept.name}?`, a: "Most enterprise engineering modifications or initial architectural setups route safely across 4 to 8 weeks depending entirely on schema scope." },
    { q: "Do your optimization features cleanly bridge custom legacy platforms?", a: "Yes, our systems rely on secure API interfaces and isolated compute structures to prevent dependency breaking or production pipeline lag." },
    { q: "What parameters outline ongoing support matrices?", a: "We supply dedicated DevOps oversight alongside structured framework audits to ensure high-capacity transaction handling continuously." }
  ];

  return (
    <div className="pt-20 overflow-hidden bg-white selection:bg-primary-500 selection:text-white">
      {/* ─── HERO SECTION ─── */}
      <section className="relative py-20 lg:py-32 min-h-[65vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={dept.image}
            alt={dept.name}
            className="w-full h-full object-cover animate-fade-in scale-105"
            loading="lazy"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30" />
        </div>

        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none" style={{ background: dept.accent }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15 pointer-events-none" style={{ background: dept.accent }} />

        <div className="container-max relative z-10 w-full px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 mb-8 font-medium bg-slate-50/60 backdrop-blur-sm px-4 py-2 rounded-full w-fit border border-slate-100/80 animate-fade-up">
            <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
            <span className="text-slate-300">/</span>
            <Link to="/departments" className="hover:text-primary-600 transition-colors">Departments</Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-800 font-bold">{dept.name}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div 
                className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md rounded-2xl px-5 py-3 mb-6 shadow-md border logo-float"
                style={{ borderColor: `${dept.accent}25` }}
              >
                <span className="text-4xl drop-shadow-sm">{dept.icon}</span>
                <span className="text-slate-900 font-black text-xl tracking-tight">{dept.name}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
                {dept.tagline}
              </h1>
              <p className="text-slate-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl font-medium">
                {dept.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <Link to="/contact" className="btn-primary flex items-center justify-center gap-3 text-base px-8 py-4 shadow-lg shadow-primary-500/10">
                  Get Started <ArrowRightIcon size={18} />
                </Link>
                <Link to="/departments" className="btn-outline flex items-center justify-center text-base px-8 py-4 bg-white/80 hover:bg-white backdrop-blur-sm">
                  All Departments
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-3 gap-4 sm:gap-6">
              {dept.stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass bg-white/70 backdrop-blur-md rounded-3xl p-6 text-center card-hover border border-slate-100 shadow-xl shadow-slate-200/30 animate-fade-up"
                  style={{ animationDelay: `${0.2 + i * 0.15}s` }}
                >
                  <div className="text-3xl sm:text-4xl font-black gradient-text mb-2 tracking-tight">{stat.value}</div>
                  <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SUB-DEPARTMENTS SECTIONS (REDUCED CARD PADDING & STABLE HOVER) ─── */}
      <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-100/60" ref={subRef}>
        <div className="container-max px-4 sm:px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-primary-600 font-extrabold uppercase tracking-widest text-xs sm:text-sm mb-3">Specializations</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What's Inside <span className="gradient-text">{dept.name}</span>
            </h2>
            <p className="text-slate-500 text-base mt-3 font-medium">
              Explore our core subsections customized to guide modern architecture and corporate goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {dept.subDepartments.map((sub, i) => (
              <Link
                key={i}
                to={`/departments/${dept.slug}/${sub.slug}`}
                className={`group flex flex-col justify-between p-5 sm:p-6 bg-white rounded-[24px] border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-slate-300/40 transition-all duration-500 block card-hover ${
                  subVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 font-bold text-sm shadow-sm group-hover:scale-105 transition-transform"
                    style={{
                      background: `${dept.accent}08`,
                      border: `1px solid ${dept.accent}25`,
                      color: dept.accent
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  <h3 className="text-slate-900 font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors tracking-tight leading-snug">
                    {sub.name}
                  </h3>

                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium line-clamp-4">
                    {sub.desc}
                  </p>
                </div>

                {/* Permanent clean link layout without dynamic alignment hopping shifts */}
                <div className="flex items-center justify-start pt-4 border-t border-slate-100 mt-5">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-slate-700 group-hover:text-primary-600 transition-colors duration-300">
                    Explore Deep Dive 
                    <ArrowRightIcon size={12} className="transform transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEW HIGHLY INFORMATIVE PROCESS TIMELINE ─── */}
      <section className="py-20 lg:py-28 bg-white" ref={processRef}>
        <div className="container-max px-4 sm:px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-primary-600 font-extrabold uppercase tracking-widest text-xs sm:text-sm mb-3">Operational Pipeline</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Deployment Strategy Blueprint
            </h2>
            <p className="text-slate-500 text-base mt-3 font-medium">
              A breakdown of how we integrate structural engineering changes cleanly alongside your running operational targets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {[
              { title: "01 / Structural Evaluation", body: "We deeply crawl your architecture schemas to flag data silos, layout bottlenecks, and integration vectors." },
              { title: "02 / Scaled Engineering", body: "Our full-stack teams build dedicated deployment clusters utilizing modern container models without breaking active loops." },
              { title: "03 / Automated Delivery", body: "Deploy transaction features directly into standard pipelines with zero service drop variables or user interruptions." }
            ].map((step, index) => (
              <div 
                key={index} 
                className={`relative bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 transition-all duration-700 ${processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="h-1.5 w-12 rounded-full mb-6" style={{ backgroundColor: dept.accent }} />
                <h4 className="text-slate-900 font-black text-lg mb-3 tracking-tight">{step.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES & ADVANTAGES SPLIT GRID ─── */}
      <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-100" ref={servRef}>
        <div className="container-max px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className={`lg:col-span-6 bg-white rounded-[32px] p-8 sm:p-12 border border-slate-200/60 shadow-xl shadow-slate-100/70 transition-all duration-700 ${servVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <p className="text-primary-600 font-extrabold uppercase tracking-widest text-xs sm:text-sm mb-3">Services</p>
              <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">
                What We <span className="gradient-text">Deliver</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {dept.services.map((service, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3.5 bg-slate-50 rounded-2xl p-4 border border-slate-100 shadow-sm card-hover transition-all duration-500 ${servVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                    style={{ transitionDelay: `${i * 70}ms` }}
                  >
                    <CheckCircleIcon size={20} className="text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-800 text-sm sm:text-base font-bold leading-snug">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`lg:col-span-6 space-y-8 lg:pt-4 transition-all duration-700 ${servVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div>
                <p className="text-primary-600 font-extrabold uppercase tracking-widest text-xs sm:text-sm mb-3">Why Choose Us</p>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  The Improx <span className="gradient-text">Advantage</span>
                </h2>
              </div>
              <ul className="space-y-6 pt-2">
                {dept.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-4 group transition-all duration-500 ${servVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}
                    style={{ transitionDelay: `${150 + i * 90}ms` }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm transition-transform group-hover:scale-105"
                      style={{ background: `${dept.accent}12`, border: `1px solid ${dept.accent}25` }}
                    >
                      <CheckCircleIcon size={16} style={{ color: dept.accent }} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-slate-600 text-base leading-relaxed font-medium">{benefit}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NEW CONTEXTUAL FAQ INFORMATION LAYER ─── */}
      <section className="py-20 lg:py-28 bg-white" ref={faqRef}>
        <div className="container-max px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-primary-600 font-extrabold uppercase tracking-widest text-xs sm:text-sm mb-3">Faq Matrix</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                Sector Insights & Technical Clarity
              </h2>
              <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
                Clear structural parameters focused entirely on enterprise expectations inside {dept.name}.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {currentFaqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-slate-100 rounded-2xl p-5 bg-slate-50/60 transition-all duration-500 ${faqVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full flex justify-between items-center text-left font-bold text-slate-900 text-base sm:text-lg tracking-tight"
                  >
                    <span>{faq.q}</span>
                    <span className="text-xl ml-2 font-light text-slate-400">{activeFaq === index ? '−' : '+'}</span>
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${activeFaq === index ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── NEW CONTEXTUAL BLOG SECTION FOR THE CURRENT DEPARTMENT ─── */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-100" ref={blogRef}>
        <div className="container-max px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-primary-600 font-extrabold uppercase tracking-widest text-xs sm:text-sm mb-3">Knowledge Base</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Latest inside <span className="gradient-text">{dept.name}</span>
              </h2>
            </div>
            <p className="text-slate-500 text-sm sm:text-base mt-2 md:mt-0 max-w-sm font-medium leading-relaxed">
              Stay fully ahead with modern industry developments, strategies, and case insights engineered by our sector experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article, i) => (
              <article 
                key={i} 
                className={`group flex flex-col overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all duration-500 card-hover h-full ${
                  blogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span 
                      className="text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-sm backdrop-blur-md bg-white/95 border border-slate-100"
                      style={{ color: dept.accent }}
                    >
                      {article.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold mb-3">
                      <span>{article.date}</span>
                      <span className="text-slate-300">&bull;</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-slate-900 font-bold text-lg mb-2.5 group-hover:text-primary-600 transition-colors line-clamp-2 leading-snug tracking-tight">
                      {article.title}
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 font-medium">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-50 flex items-center justify-end">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-600 group-hover:gap-2.5 transition-all cursor-pointer">
                      Read Article <ArrowRightIcon size={12} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

 
 

      {/* ─── LARGE CTA CONTAINER ─── */}
      <section className="py-12 lg:py-20 bg-slate-50 border-t border-slate-100">
        <div className="container-max px-4 sm:px-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-[40px] p-10 sm:p-16 text-center relative overflow-hidden shadow-2xl border border-slate-800">
            <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full blur-[140px] opacity-25 pointer-events-none" style={{ background: dept.accent }} />
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white">
                Ready to get started with {dept.name}?
              </h2>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-medium max-w-xl mx-auto">
                Let's discover your structural business needs and deploy an engineering ecosystem built tailored for sustainable operations.
              </p>
              <div className="pt-4">
                <Link to="/contact" className="btn-primary bg-white text-slate-950 hover:bg-slate-100 font-bold text-base px-10 py-4 inline-flex items-center gap-3 rounded-2xl shadow-xl shadow-black/20">
                  Book a Free Consultation <ArrowRightIcon size={18} className="text-slate-950" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}