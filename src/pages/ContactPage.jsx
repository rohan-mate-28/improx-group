import React, { useState } from 'react';
import { departments, socialLinks, contactInfo } from '../data/departments';
import { SocialIcon, PhoneIcon, MailIcon, MapPinIcon } from '../components/Icons';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', dept: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero */}
      <section className="section-pad relative">
        <div className="hero-glow w-80 h-80 bg-primary-600 top-0 left-0" />
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary-400 font-semibold uppercase tracking-widest text-sm mb-3">Get In Touch</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Let's <span className="gradient-text">Start a Conversation</span>
            </h1>
            <p className="text-slate-400 text-lg">Whether you have a project in mind or just want to explore options, our team is here to help.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-bold mb-5 text-lg">Contact Details</h3>
                <ul className="space-y-4">
                  <li>
                    <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                      <div className="w-10 h-10 rounded-xl bg-primary-500/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0">
                        <PhoneIcon size={18} className="text-primary-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-0.5">Phone</p>
                        <p className="font-medium">{contactInfo.phone}</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-primary-500/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0">
                        <MailIcon size={18} className="text-primary-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-0.5">Email</p>
                        <p className="font-medium">{contactInfo.email}</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0">
                      <MapPinIcon size={18} className="text-primary-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-0.5">Address</p>
                      <p className="text-slate-300 font-medium">{contactInfo.address}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-bold mb-4">Follow Us</h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                    >
                      <div className="w-9 h-9 glass rounded-lg flex items-center justify-center group-hover:border-primary-500/50 transition-colors">
                        <SocialIcon name={social.icon} size={16} />
                      </div>
                      <span className="text-sm font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="glass rounded-2xl p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6 text-3xl">✅</div>
                    <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                    <p className="text-slate-400">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    <button
                      className="btn-primary mt-6"
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', dept: '', message: '' }); }}
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                    <div className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500/50 transition-colors text-sm"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            className="w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500/50 transition-colors text-sm"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 9370992910"
                            className="w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500/50 transition-colors text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Department of Interest</label>
                          <select
                            name="dept"
                            value={form.dept}
                            onChange={handleChange}
                            className="w-full glass rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500/50 transition-colors text-sm bg-transparent"
                          >
                            <option value="" className="bg-dark">Select a department</option>
                            {departments.map((d) => (
                              <option key={d.id} value={d.id} className="bg-dark">{d.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Message *</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Tell us about your project, goals, or any questions you have..."
                          className="w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500/50 transition-colors text-sm resize-none"
                          required
                        />
                      </div>
                      <button
                        onClick={handleSubmit}
                        disabled={!form.name || !form.email || !form.message}
                        className="btn-primary w-full py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
