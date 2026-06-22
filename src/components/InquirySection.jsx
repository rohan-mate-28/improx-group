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
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section 
      ref={sectionRef}
      className={`py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-blue-50/50 text-slate-800 relative overflow-hidden border-t border-slate-200 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Decorative Subtle Background Gradients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Modern Light Dot Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

      <div className="container-max px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white border border-slate-200/80 rounded-[32px] p-6 sm:p-12 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.06)] relative">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Project Blueprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mt-4 mb-3">
              Ready to grow your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">Business?</span>
            </h2>
            <p className="text-slate-500 text-base font-medium leading-relaxed">
              Tell us what you're looking for. Our strategy consultants will map out a custom high-conversion design layout built tailored to your niche.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16 space-y-5 max-w-md mx-auto">
              <div className="w-20 h-20 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto text-emerald-500 text-4xl shadow-md rotate-6 hover:rotate-0 transition-transform duration-300">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Inquiry Submitted Successfully</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Thank you! We have logged your specifications and will match a framework proposal for your review within 24 hours.
              </p>
              <button
                className="inline-block pt-4 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors underline underline-offset-4"
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', businessType: '', budget: '', requirements: '' }); }}
              >
                Submit Alternative Concept
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Adv. Rohit Sharma"
                    className="w-full bg-slate-50/50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/5 text-sm font-medium transition-all duration-300 hover:border-slate-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full bg-slate-50/50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/5 text-sm font-medium transition-all duration-300 hover:border-slate-300"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider">Your Industry / Niche</label>
                  <input
                    type="text"
                    name="businessType"
                    value={form.businessType}
                    onChange={handleChange}
                    placeholder="e.g., Law Firm, Chartered Accountant, Gym"
                    className="w-full bg-slate-50/50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/5 text-sm font-medium transition-all duration-300 hover:border-slate-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider">Project Niche Level</label>
                  <div className="relative">
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full bg-slate-50/50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-500/5 text-sm font-medium transition-all duration-300 hover:border-slate-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="text-slate-400">Select business target scale...</option>
                      <option value="basic">Essential Pack (High-Trust Brand Portfolio)</option>
                      <option value="growth">Growth Pack (Automated Lead Generation Hub)</option>
                      <option value="enterprise">Dominator Pack (Custom Custom Architecture / SaaS)</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider">Project Specifications & Ideas *</label>
                <textarea
                  name="requirements"
                  required
                  rows={4}
                  value={form.requirements}
                  onChange={handleChange}
                  placeholder="Tell us about special layout requests, automation tools, maps, appointment schedulers, or pages you want setup..."
                  className="w-full bg-slate-50/50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/5 text-sm font-medium transition-all duration-300 hover:border-slate-300 resize-none"
                />
              </div>

              {/* Action Button */}
              <button
                type="submit"
                disabled={!form.name || !form.email || !form.requirements || isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 text-sm font-bold rounded-xl shadow-lg shadow-blue-600/10 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Assembling Strategy Blueprint...
                  </>
                ) : (
                  'Submit Growth Inquiry'
                )}
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}