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

export default function HomePage() {
  const [heroRef, heroVisible] = useScrollReveal();
  const [statsRef, statsVisible] = useScrollReveal();
  const [deptRef, deptVisible] = useScrollReveal();
  const [whyRef, whyVisible] = useScrollReveal();

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

      {/* ─── DEPARTMENTS GRID ─── */}
      <section className="section-pad" ref={deptRef}>
        <div className="container-max">
          <div className={`text-center mb-14 transition-all duration-700 ${deptVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-primary-600 font-semibold uppercase tracking-widest text-sm mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Our <span className="gradient-text">Departments</span>
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

      {/* ─── WHY IMPROX ─── */}
      <section className="section-pad section-light" ref={whyRef}>
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

            {/* Visual Grid */}
            <div className="grid grid-cols-2 gap-4">
              {departments.slice(0, 4).map((dept, i) => (
                <div
                  key={dept.id}
                  className={`glass rounded-2xl overflow-hidden card-hover transition-all duration-700 ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="relative h-24 overflow-hidden">
                    <img
                      src={dept.image}
                      alt={dept.name}
                      className="department-image"
                      loading="lazy"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    <div className={`absolute -bottom-4 left-3 w-10 h-10 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center text-lg shadow-lg border-2 border-white`}>
                      {dept.icon}
                    </div>
                  </div>
                  <div className="p-4 pt-6">
                    <p className="text-slate-900 font-semibold text-sm">{dept.name}</p>
                    <p className="text-slate-500 text-xs mt-1">{dept.stats[0].value} {dept.stats[0].label}</p>
                  </div>
                </div>
              ))}
            </div>
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