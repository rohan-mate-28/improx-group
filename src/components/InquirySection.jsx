import React, { useState, useEffect, useRef } from 'react';

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

export default function InquirySection() {
  const [form, setForm] = useState({ name: '', email: '', businessType: '', budget: '', requirements: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sectionRef, isVisible] = useScrollReveal();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Smooth high-end button loader simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section 
      ref={sectionRef}
      className={`py-20 lg:py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Premium Ambient Light Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="container-max px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-slate-900/60 border border-slate-800/80 rounded-[32px] p-6 sm:p-12 shadow-2xl backdrop-blur-xl relative group">
          
          {/* Top Decorative Border Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 text-primary-400 text-xs font-black uppercase tracking-widest bg-primary-500/10 border border-primary-500/20 px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
              Project Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mt-4 mb-3">
              Let’s Build Something <span className="gradient-text shimmer-text">Exceptional</span>
            </h2>
            <p className="text-slate-400 text-base font-medium leading-relaxed">
              Drop your project requirements below. Our engineering architecture desk will analyze constraints to map a conversion-first solution framework.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16 space-y-5 max-w-md mx-auto animate-fade-up-strong">
              <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400 text-4xl shadow-xl shadow-emerald-500/5 rotate-6 hover:rotate-0 transition-transform duration-300">
                ✓
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">Inquiry Received Perfectly</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Thank you. Our engineering analysts are reviewing your targets and will align scope options within one business day.
              </p>
              <button
                className="inline-block pt-4 text-sm font-bold text-primary-400 hover:text-primary-300 transition-colors underline underline-offset-4 decoration-primary-500/30 hover:decoration-primary-400"
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', businessType: '', budget: '', requirements: '' }); }}
              >
                Submit Alternative Scope
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-black uppercase text-slate-400 tracking-wider">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-slate-950/80 border border-slate-800/80 focus:border-primary-500 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/10 text-sm font-medium transition-all duration-300 hover:border-slate-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-black uppercase text-slate-400 tracking-wider">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full bg-slate-950/80 border border-slate-800/80 focus:border-primary-500 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/10 text-sm font-medium transition-all duration-300 hover:border-slate-700"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-black uppercase text-slate-400 tracking-wider">Industry / Niche</label>
                  <input
                    type="text"
                    name="businessType"
                    value={form.businessType}
                    onChange={handleChange}
                    placeholder="e.g., Legal, Real Estate, Health & Gym"
                    className="w-full bg-slate-950/80 border border-slate-800/80 focus:border-primary-500 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/10 text-sm font-medium transition-all duration-300 hover:border-slate-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-black uppercase text-slate-400 tracking-wider">Target Objective Scale</label>
                  <div className="relative">
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full bg-slate-950/80 border border-slate-800/80 focus:border-primary-500 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/10 text-sm font-medium transition-all duration-300 hover:border-slate-700 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-slate-900 text-slate-400">Select business objective...</option>
                      <option value="basic" className="bg-slate-900">Essential Blueprint (High-Trust Portfolio)</option>
                      <option value="growth" className="bg-slate-900">Growth Engine (Automated Lead Generation)</option>
                      <option value="enterprise" className="bg-slate-900">Dominator Framework (Custom SaaS / Scaled Tech Stack)</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-xs">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="space-y-2">
                <label className="block text-xs font-black uppercase text-slate-400 tracking-wider">Project Specifications & Ideas *</label>
                <textarea
                  name="requirements"
                  required
                  rows={4}
                  value={form.requirements}
                  onChange={handleChange}
                  placeholder="Outline any special design features, automated alerts, integrations, or scheduling systems you need built..."
                  className="w-full bg-slate-950/80 border border-slate-800/80 focus:border-primary-500 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/10 text-sm font-medium transition-all duration-300 hover:border-slate-700 resize-none"
                />
              </div>

              {/* Action Button */}
              <button
                type="submit"
                disabled={!form.name || !form.email || !form.requirements || isSubmitting}
                className="w-full btn-primary py-4 text-sm font-bold shadow-xl shadow-primary-500/10 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 relative overflow-hidden transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Analyzing Blueprint...
                  </>
                ) : (
                  'Deploy Project Architecture Inquiry'
                )}
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}