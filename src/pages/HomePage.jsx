import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { departments, socialLinks, contactInfo } from '../data/departments';
import { ArrowRightIcon, CheckCircleIcon, SocialIcon } from '../components/Icons';

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
  { name: 'Healthcare', info: 'Next-gen telemedicine, compliance frameworks, and patient data security systems.' },
  { name: 'Finance', info: 'Algorithmic strategy, risk management structures, and automated workflows.' },
  { name: 'Banking', info: 'Secure infrastructure scaling, open banking APIs, and high-frequency ledgers.' },
  { name: 'Education', info: 'LMS integrations, remote infrastructure, and digital skill curriculum development.' },
  { name: 'Retail', info: 'Omnichannel supply networks, POS systems integration, and spatial optimization.' },
  { name: 'E-Commerce', info: 'High-conversion headless setups, dynamic checkouts, and international processing.' },
  { name: 'Manufacturing', info: 'IoT cloud telemetry, automated assembly planning, and maintenance analytics.' },
  { name: 'Technology', info: 'SaaS design architecture, cloud computing migrations, and automated operations.' },
  { name: 'Real Estate', info: 'PropTech platforms, digital documentation pipelines, and interactive visual mockups.' },
  { name: 'Logistics', info: 'Route optimization matrices, dynamic asset distribution, and cold-chain tracking.' },
  { name: 'Hospitality', info: 'Booking engine scaling, property asset systems, and targeted marketing campaigns.' },
  { name: 'Government', info: 'Civic digital portals, citizen interaction touchpoints, and secure data storage.' }
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

export default function HomePage() {
  const [heroRef, heroVisible] = useScrollReveal();
  const [statsRef, statsVisible] = useScrollReveal();
  const [deptRef, deptVisible] = useScrollReveal();
  const [whyRef, whyVisible] = useScrollReveal();
  const [blogRef, blogVisible] = useScrollReveal();

  return (
    <div className="overflow-hidden bg-white">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-blue-50 via-white to-white">
        {/* Background glows */}
        <div className="hero-glow w-96 h-96 bg-primary-400 top-20 left-10" />
        <div className="hero-glow w-80 h-80 bg-accent-400 top-40 right-10" />
        <div className="hero-glow w-64 h-64 bg-primary-300 bottom-20 left-1/3" />

        {/* Animated particles */}
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
            <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 text-sm text-primary-700 font-medium animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
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

            {/* Social proof */}
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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-300 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-3 bg-primary-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="section-pad bg-gradient-to-r from-primary-50 to-blue-50" ref={statsRef}>
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`text-center transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="text-4xl lg:text-5xl font-black gradient-text mb-2">
                  {statsVisible ? <AnimatedCounter target={stat.value} /> : '0'}
                </div>
                <p className="text-slate-600 text-sm font-medium">{stat.label}</p>
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
              Improx Group is a diversified business solutions organization
              bringing together consulting, cloud solutions, marketing,
              data analytics, business process services, media publication,
              market research, virtual assistant services, information
              technology and social media management under one powerful
              ecosystem.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Our mission is to help organizations innovate, optimize,
              transform and grow through integrated expertise,
              advanced technology and strategic guidance.
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
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="department-image"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
                  <div className={`absolute bottom-3 left-3 w-11 h-11 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {dept.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-slate-900 font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">{dept.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{dept.tagline}</p>
                  <div className="mt-4 flex items-center gap-2 text-primary-600 text-sm font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    Explore <ArrowRightIcon size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES WE SERVE (HOVER OVERLAYS ADDED) ─── */}
      <section className="section-pad bg-slate-50">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="text-primary-600 font-semibold uppercase tracking-widest text-sm mb-3">Market Expertise</p>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900">
              Industries We Serve
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative h-36 overflow-hidden glass rounded-xl flex items-center justify-center p-6 text-center font-bold text-slate-800 transition-all duration-300 border border-slate-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                {/* Regular Display Title */}
                <span className="text-lg tracking-wide group-hover:opacity-0 transition-opacity duration-200">
                  {item.name}
                </span>

                {/* Hover Reveal Overlays Info */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-blue-800 p-4 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-300 text-left">
                  <h4 className="text-sm font-black mb-1 border-b border-white/20 pb-0.5 w-full text-center tracking-wider uppercase">
                    {item.name}
                  </h4>
                  <p className="text-xs font-normal text-blue-50/90 text-center leading-relaxed">
                    {item.info}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FUTURE READY SOLUTIONS ─── */}
      <section className="section-pad">
        <div className="container-max">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-black mb-8">
              Future Ready Solutions
            </h2>
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
         
      {/* ─── WHY IMPROX (ONLINE DECORATIVE IMAGES ADDED) ─── */}
   <section className="section-pad bg-gradient-to-b from-white to-slate-50" ref={whyRef}>
  <div className="container-max">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className={`transition-all duration-700 ${whyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        <p className="text-primary-600 font-semibold uppercase tracking-widest text-sm mb-3">Why Improx</p>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 leading-tight">
          The partner that stays<br /><span className="gradient-text">until the job is done</span>
        </h2>
        <p className="text-slate-500 text-lg leading-relaxed mb-8">
          We don't just deliver projects — we build long-term partnerships. Every engagement is backed by senior expertise, transparent communication, and measurable results.
        </p>
        <ul className="space-y-3">
          {whyUs.map((item, i) => (
            <li
              key={i}
              className={`flex items-center gap-3 text-slate-700 transition-all duration-500 ${whyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <CheckCircleIcon size={18} className="text-primary-500 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link to="/about" className="btn-primary inline-flex items-center gap-2">
            About Us <ArrowRightIcon />
          </Link>
        </div>
      </div>

      {/* Visual Grid with Direct Hardcoded High-Quality Online Images */}
      <div className="grid grid-cols-2 gap-4 relative group/grid">
        {/* Decorative background shape */}
        <div className="absolute -inset-2 bg-gradient-to-tr from-primary-100 to-transparent rounded-3xl -z-10 blur-xl opacity-60" />
        
        {departments.slice(0, 4).map((dept, i) => {
          // Dynamic production image allocation based on index sequence
          const onlineImages = [
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop', // Consulting / Strategy
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400&auto=format&fit=crop', // Tech / Operations
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop', // Marketing / Data
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop'  // Team Collaboration
          ];

          return (
            <div
              key={dept.id}
              className={`glass rounded-2xl overflow-hidden group/card bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-28 overflow-hidden bg-slate-100">
                <img
                  src={onlineImages[i]}
                  alt={dept.name}
                  className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                <div className={`absolute -bottom-3 left-3 w-9 h-9 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center text-white text-sm shadow-md border border-white group-hover/card:scale-105 transition-transform duration-300`}>
                  {dept.icon}
                </div>
              </div>
              <div className="p-4 pt-5">
                <p className="text-slate-900 font-bold text-sm tracking-tight truncate group-hover/card:text-primary-600 transition-colors">
                  {dept.name}
                </p>
                <p className="text-primary-600 font-medium text-xs mt-1">
                  {dept.stats?.[0]?.value || 'Top Tier'} {dept.stats?.[0]?.label || 'Solutions'}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>

      {/* ─── BLOGS & ARTICLES SECTION (NEWLY ADDED) ─── */}
      <section className="section-pad bg-white" ref={blogRef}>
        <div className="container-max">
          <div className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-12 transition-all duration-700 ${blogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div>
              <p className="text-primary-600 font-semibold uppercase tracking-widest text-sm mb-3">Insights</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
                Blogs & Articles
              </h2>
            </div>
            <Link to="/blogs" className="text-primary-600 font-bold hover:text-primary-700 inline-flex items-center gap-1 mt-4 md:mt-0 group transition-colors">
              View All Insights <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mockBlogs.map((blog, idx) => (
              <article 
                key={blog.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 flex flex-col transition-all duration-700 ${blogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur text-primary-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {blog.tag}
                  </span>
                </div>
                
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-slate-400 mb-2 font-medium">{blog.date}</p>
                    <h3 className="text-slate-900 font-bold text-xl mb-3 leading-snug hover:text-primary-600 transition-colors">
                      <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-3 mb-4 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>

                  <Link to={`/blogs/${blog.id}`} className="text-primary-600 font-bold text-sm inline-flex items-center gap-1 hover:text-primary-700 group mt-2 w-max">
                    Read Post <ArrowRightIcon size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="section-pad">
        <div className="container-max">
          <div className="relative rounded-3xl overflow-hidden gradient-bg p-10 sm:p-16 text-center">
            <div className="hero-glow w-64 h-64 bg-white top-0 right-0 opacity-20" />
            <div className="hero-glow w-48 h-48 bg-white bottom-0 left-0 opacity-10" />
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 relative z-10">
              Ready to transform your business?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto relative z-10">
              Talk to our experts today. No commitment, no fluff — just a clear plan for where you want to go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link to="/contact" className="bg-white text-primary-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg">
                Get a Free Consultation <ArrowRightIcon />
              </Link>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="border-2 border-white/60 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                Call {contactInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}