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
  const [servRef, servVisible] = useScrollReveal();
  const [otherRef, otherVisible] = useScrollReveal();

  if (!dept) return <Navigate to="/departments" replace />;

  return (
    <div className="pt-20 overflow-hidden bg-white">
      {/* ─── HERO ─── */}
      <section className="relative section-pad min-h-[60vh] flex items-center overflow-hidden">
        {/* Hero image background */}
        <div className="absolute inset-0">
          <img
            src={dept.image}
            alt={dept.name}
            className="w-full h-full object-cover animate-fade-in"
            loading="lazy"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-white/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40" />
        </div>

        <div className="hero-glow w-96 h-96 opacity-20 top-0 left-0" style={{ background: dept.accent }} />
        <div className="hero-glow w-64 h-64 opacity-15 bottom-0 right-0" style={{ background: dept.accent }} />

        <div className="container-max relative z-10 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 animate-fade-up">
            <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/departments" className="hover:text-primary-600 transition-colors">Departments</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">{dept.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center gap-3 glass rounded-2xl px-5 py-3 mb-6 logo-float">
                <span className="text-4xl">{dept.icon}</span>
                <span className="text-slate-900 font-bold text-lg">{dept.name}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 leading-tight">
                {dept.tagline}
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">{dept.description}</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary flex items-center gap-2">
                  Get Started <ArrowRightIcon />
                </Link>
                <Link to="/departments" className="btn-outline">
                  All Departments
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {dept.stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass rounded-2xl p-6 text-center card-hover animate-fade-up"
                  style={{ animationDelay: `${0.2 + i * 0.15}s` }}
                >
                  <div className="text-3xl font-black gradient-text mb-2">{stat.value}</div>
                  <p className="text-slate-500 text-xs leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SUB-DEPARTMENTS ─── */}
      <section className="section-pad section-light" ref={subRef}>
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-primary-600 font-semibold uppercase tracking-widest text-sm mb-3">Specializations</p>
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              What's Inside <span className="gradient-text">{dept.name}</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dept.subDepartments.map((sub, i) => (
              <div
                key={i}
                className={`glass rounded-2xl p-6 card-hover group transition-all duration-700 ${subVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 font-bold text-sm group-hover:scale-110 transition-transform"
                  style={{ background: `${dept.accent}1a`, border: `1px solid ${dept.accent}55`, color: dept.accent }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-slate-900 font-bold mb-2 group-hover:text-primary-600 transition-colors">{sub.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{sub.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="section-pad" ref={servRef}>
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-700 ${servVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <p className="text-primary-600 font-semibold uppercase tracking-widest text-sm mb-3">Services</p>
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                What We <span className="gradient-text">Deliver</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {dept.services.map((service, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 glass rounded-xl px-4 py-3 card-hover transition-all duration-500 ${servVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${i * 70}ms` }}
                  >
                    <CheckCircleIcon size={16} className="text-primary-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`transition-all duration-700 ${servVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <p className="text-primary-600 font-semibold uppercase tracking-widest text-sm mb-3">Why Choose Us</p>
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                The Improx <span className="gradient-text">Advantage</span>
              </h2>
              <ul className="space-y-4">
                {dept.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-4 transition-all duration-500 ${servVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                    style={{ transitionDelay: `${150 + i * 90}ms` }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${dept.accent}1a`, border: `1px solid ${dept.accent}55` }}
                    >
                      <CheckCircleIcon size={14} style={{ color: dept.accent }} />
                    </div>
                    <p className="text-slate-600 leading-relaxed">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OTHER DEPARTMENTS ─── */}
      <section className="section-pad section-light" ref={otherRef}>
        <div className="container-max">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Explore Other Departments</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {departments.filter(d => d.id !== dept.id).slice(0, 5).map((d, i) => (
              <Link
                key={d.id}
                to={`/departments/${d.slug}`}
                className={`glass rounded-xl overflow-hidden card-hover group transition-all duration-700 ${otherVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative h-20 overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="department-image"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="absolute inset-0 flex items-center justify-center text-2xl group-hover:scale-125 transition-transform duration-300">{d.icon}</span>
                </div>
                <p className="text-slate-800 text-sm font-medium text-center py-3 group-hover:text-primary-600 transition-colors">{d.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-pad">
        <div className="container-max">
          <div className="glass rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden" style={{ borderColor: `${dept.accent}33` }}>
            <div className="hero-glow w-64 h-64 opacity-20 top-0 right-0" style={{ background: dept.accent }} />
            <h2 className="text-3xl font-black text-slate-900 mb-4 relative z-10">
              Ready to get started with {dept.name}?
            </h2>
            <p className="text-slate-500 text-lg mb-8 max-w-xl mx-auto relative z-10">
              Let's discuss your needs and build a tailored solution for your business.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4 relative z-10">
              Book a Free Consultation <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}