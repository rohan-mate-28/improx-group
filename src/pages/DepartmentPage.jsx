import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { departments } from '../data/departments';
import { ArrowRightIcon, CheckCircleIcon } from '../components/Icons';

export default function DepartmentPage() {
  const { slug } = useParams();
  const dept = departments.find((d) => d.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!dept) return <Navigate to="/departments" replace />;

  return (
    <div className="pt-20 overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="relative section-pad min-h-[60vh] flex items-center">
        <div className="hero-glow w-96 h-96 opacity-20 top-0 left-0" style={{ background: dept.accent }} />
        <div className="hero-glow w-64 h-64 opacity-10 bottom-0 right-0" style={{ background: dept.accent }} />

        <div className="container-max relative z-10 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/departments" className="hover:text-white transition-colors">Departments</Link>
            <span>/</span>
            <span className="text-white">{dept.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center gap-3 glass rounded-2xl px-5 py-3 mb-6`}>
                <span className="text-4xl">{dept.icon}</span>
                <span className="text-white font-bold text-lg">{dept.name}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
                {dept.tagline}
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">{dept.description}</p>
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
                <div key={i} className="glass rounded-2xl p-6 text-center">
                  <div className="text-3xl font-black gradient-text mb-2">{stat.value}</div>
                  <p className="text-slate-400 text-xs leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SUB-DEPARTMENTS ─── */}
      <section className="section-pad bg-gradient-to-b from-transparent to-primary-900/10">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-primary-400 font-semibold uppercase tracking-widest text-sm mb-3">Specializations</p>
            <h2 className="text-3xl font-black text-white mb-4">
              What's Inside <span className="gradient-text">{dept.name}</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dept.subDepartments.map((sub, i) => (
              <div key={i} className="glass rounded-2xl p-6 card-hover group">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-sm"
                  style={{ background: `${dept.accent}33`, border: `1px solid ${dept.accent}44` }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-white font-bold mb-2 group-hover:text-primary-300 transition-colors">{sub.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{sub.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="section-pad">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary-400 font-semibold uppercase tracking-widest text-sm mb-3">Services</p>
              <h2 className="text-3xl font-black text-white mb-6">
                What We <span className="gradient-text">Deliver</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {dept.services.map((service, i) => (
                  <div key={i} className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                    <CheckCircleIcon size={16} className="text-primary-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-primary-400 font-semibold uppercase tracking-widest text-sm mb-3">Why Choose Us</p>
              <h2 className="text-3xl font-black text-white mb-6">
                The Improx <span className="gradient-text">Advantage</span>
              </h2>
              <ul className="space-y-4">
                {dept.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${dept.accent}22`, border: `1px solid ${dept.accent}44` }}
                    >
                      <CheckCircleIcon size={14} style={{ color: dept.accent }} />
                    </div>
                    <p className="text-slate-300 leading-relaxed">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OTHER DEPARTMENTS ─── */}
      <section className="section-pad">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-white mb-8">Explore Other Departments</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {departments.filter(d => d.id !== dept.id).slice(0, 5).map((d) => (
              <Link
                key={d.id}
                to={`/departments/${d.slug}`}
                className="glass rounded-xl p-4 text-center card-hover group"
              >
                <span className="text-2xl block mb-2">{d.icon}</span>
                <p className="text-white text-sm font-medium group-hover:text-primary-300 transition-colors">{d.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-pad">
        <div className="container-max">
          <div className="glass rounded-3xl p-10 sm:p-14 text-center" style={{ borderColor: `${dept.accent}33` }}>
            <h2 className="text-3xl font-black text-white mb-4">
              Ready to get started with {dept.name}?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Let's discuss your needs and build a tailored solution for your business.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4">
              Book a Free Consultation <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
