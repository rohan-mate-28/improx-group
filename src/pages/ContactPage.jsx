import React, { useState, useEffect, useRef } from 'react';
import { departments, socialLinks, contactInfo } from '../data/departments';
import { SocialIcon, PhoneIcon, MailIcon, MapPinIcon } from '../components/Icons';

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

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', dept: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [infoRef, infoVisible] = useScrollReveal();
  const [formRef, formVisible] = useScrollReveal();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20 overflow-hidden bg-white">
      {/* Hero */}
      <section className="section-pad relative bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="hero-glow w-80 h-80 bg-primary-400 top-0 left-0 animate-pulse-slow" />
        <div className="hero-glow w-64 h-64 bg-accent-400 bottom-0 right-0" />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="particle w-2 h-2 bg-primary-300/50"
            style={{
              left: `${5 + i * 16}%`,
              top: `${15 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${5 + i * 0.6}s`,
            }}
          />
        ))}

        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up-strong">
            <p className="text-primary-600 font-semibold uppercase tracking-widest text-sm mb-3">Get In Touch</p>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
              Let's <span className="gradient-text shimmer-text">Start a Conversation</span>
            </h1>
            <p className="text-slate-500 text-lg">Whether you have a project in mind or just want to explore options, our team is here to help.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div ref={infoRef} className="space-y-6">
              <div className={`glass rounded-2xl p-6 card-hover transition-all duration-700 ${infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h3 className="text-slate-900 font-bold mb-5 text-lg">Contact Details</h3>
                <ul className="space-y-4">
                  <li>
                    <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-slate-600 hover:text-primary-600 transition-all duration-300 group hover:translate-x-1">
                      <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary-100 transition-all duration-300">
                        <PhoneIcon size={18} className="text-primary-600" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-0.5">Phone</p>
                        <p className="font-medium text-slate-800">{contactInfo.phone}</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-slate-600 hover:text-primary-600 transition-all duration-300 group hover:translate-x-1">
                      <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary-100 transition-all duration-300">
                        <MailIcon size={18} className="text-primary-600" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-0.5">Email</p>
                        <p className="font-medium text-slate-800">{contactInfo.email}</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary-100 transition-all duration-300">
                      <MapPinIcon size={18} className="text-primary-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-0.5">Address</p>
                      <p className="text-slate-800 font-medium">{contactInfo.address}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div className={`glass rounded-2xl p-6 card-hover transition-all duration-700 delay-150 ${infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h3 className="text-slate-900 font-bold mb-4">Follow Us</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, i) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-600 hover:text-primary-600 transition-all duration-300 group hover:translate-x-1"
                    >
                      <div className="w-9 h-9 glass rounded-lg flex items-center justify-center group-hover:border-primary-400 group-hover:bg-primary-50 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                        <SocialIcon name={social.icon} size={16} />
                      </div>
                      <span className="text-sm font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div ref={formRef} className="lg:col-span-2">
              <div className={`glass rounded-2xl p-8 card-hover transition-all duration-700 ${formVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-6 text-3xl animate-bounce-in">✅</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Message Sent!</h3>
                    <p className="text-slate-500">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    <button
                      className="btn-primary mt-6 hover-pulse-glow"
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', dept: '', message: '' }); }}
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
                    <div className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full glass rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-300 text-sm hover:shadow-md"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            className="w-full glass rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-300 text-sm hover:shadow-md"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 9370992910"
                            className="w-full glass rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-300 text-sm hover:shadow-md"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Department of Interest</label>
                          <select
                            name="dept"
                            value={form.dept}
                            onChange={handleChange}
                            className="w-full glass rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-300 text-sm hover:shadow-md"
                          >
                            <option value="">Select a department</option>
                            {departments.map((d) => (
                              <option key={d.id} value={d.id}>{d.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Tell us about your project, goals, or any questions you have..."
                          className="w-full glass rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-300 text-sm resize-none hover:shadow-md"
                          required
                        />
                      </div>
                      <button
                        onClick={handleSubmit}
                        disabled={!form.name || !form.email || !form.message}
                        className="btn-primary w-full py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 hover-pulse-glow"
                      >
                        Send Message
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}