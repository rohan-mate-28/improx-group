import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { departments } from '../data/departments';
import { ArrowRightIcon } from '../components/Icons';

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

const values = [
  { icon: '🎯', title: 'Client First', desc: 'Every decision starts with what\'s best for our client\'s long-term success.' },
  { icon: '🔬', title: 'Data-Driven', desc: 'We rely on evidence, not assumptions — every recommendation is rooted in data.' },
  { icon: '⚡', title: 'Agile Execution', desc: 'Rapid delivery without sacrificing quality. We move fast and iterate smartly.' },
  { icon: '🤝', title: 'Long-term Partnership', desc: 'We don\'t disappear after delivery. We grow with you through every phase.' },
  { icon: '🌍', title: 'Global Mindset', desc: 'Diverse team, global perspective, local understanding of your market.' },
  { icon: '🔒', title: 'Trust & Transparency', desc: 'Clear communication, honest reporting, and ethical business practices.' },
];

const team = [
  { name: 'Rahul Sharma', role: 'CEO & Founder', dept: 'Strategy' },
  { name: 'Priya Patel', role: 'Chief Technology Officer', dept: 'IT & Cloud' },
  { name: 'Amit Desai', role: 'VP Marketing', dept: 'Marketing' },
  { name: 'Sneha Kulkarni', role: 'Head of Data', dept: 'Data & AI' },
  { name: 'Rohan Mehta', role: 'Director, Business Process', dept: 'BPO & RPA' },
  { name: 'Ananya Singh', role: 'Head of Social Media', dept: 'Social Media' },
];

export default function AboutPage() {
  const [heroRef, heroVisible] = useScrollReveal();
  const [missionRef, missionVisible] = useScrollReveal();
  const [valuesRef, valuesVisible] = useScrollReveal();
  const [deptRef, deptVisible] = useScrollReveal();
  const [teamRef, teamVisible] = useScrollReveal();

  return (
    <div className="pt-20 overflow-hidden bg-white">
      {/* ─── HERO ─── */}
      <section className="section-pad relative bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="hero-glow w-80 h-80 bg-primary-400 top-0 right-0" />
        <div className="hero-glow w-64 h-64 bg-accent-400 bottom-0 left-0" />
        <div className="container-max relative z-10">
          <div ref={heroRef} className={`max-w-3xl transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-primary-600 font-semibold uppercase tracking-widest text-sm mb-3">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Built to power<br /><span className="gradient-text">your ambition</span>
            </h1>
            <p className="text-slate-700 text-xl leading-relaxed mb-8">
              Improx Group is a multi-disciplinary business services firm headquartered in Pune, India. We combine consulting depth, technology expertise, and creative execution to help businesses thrive in a rapidly changing world.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Founded with a singular mission — to be the most trusted partner for businesses seeking growth — Improx has grown into a powerhouse of 10 specialized departments serving clients across 45+ countries. We believe great outcomes come from deep expertise, relentless execution, and genuine partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* ─── MISSION ─── */}
      <section className="section-pad bg-gradient-to-r from-primary-50 to-blue-50" ref={missionRef}>
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { title: 'Our Mission', icon: '🚀', text: 'To empower businesses of every size with integrated services that drive measurable, sustainable growth.' },
              { title: 'Our Vision', icon: '🔭', text: 'To be the world\'s most trusted multi-service business partner, recognized for integrity, innovation, and impact.' },
              { title: 'Our Promise', icon: '✨', text: 'Every engagement delivers tangible outcomes. We measure our success by the results we create for you.' },
            ].map((item, i) => (
              <div
                key={i}
                className={`glass rounded-2xl p-8 text-center card-hover transition-all duration-700 ${missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="text-4xl mb-4 inline-block animate-float" style={{ animationDelay: `${i * 0.5}s` }}>{item.icon}</div>
                <h3 className="text-slate-900 font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="section-pad" ref={valuesRef}>
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-primary-600 font-semibold uppercase tracking-widest text-sm mb-3">What Drives Us</p>
            <h2 className="text-3xl font-black text-slate-900 mb-4">Our <span className="gradient-text">Core Values</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <div
                key={i}
                className={`glass rounded-2xl p-6 card-hover transition-all duration-700 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-3xl mb-4">{val.icon}</div>
                <h3 className="text-slate-900 font-bold mb-2">{val.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DEPARTMENTS OVERVIEW ─── */}
      <section className="section-pad section-light" ref={deptRef}>
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Our <span className="gradient-text">10 Departments</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {departments.map((dept, i) => (
              <Link
                key={dept.id}
                to={`/departments/${dept.slug}`}
                className={`glass rounded-xl p-5 text-center card-hover group transition-all duration-700 ${deptVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="text-3xl block mb-2 group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-300">{dept.icon}</span>
                <p className="text-slate-800 text-sm font-semibold group-hover:text-primary-600 transition-colors">{dept.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="section-pad" ref={teamRef}>
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-primary-600 font-semibold uppercase tracking-widest text-sm mb-3">Our Team</p>
            <h2 className="text-3xl font-black text-slate-900 mb-4">The People <span className="gradient-text">Behind Improx</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className={`glass rounded-2xl p-6 card-hover transition-all duration-700 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg shadow-primary-500/30">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-slate-900 font-bold">{member.name}</h3>
                <p className="text-primary-600 text-sm font-medium">{member.role}</p>
                <p className="text-slate-500 text-xs mt-1">{member.dept}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-pad">
        <div className="container-max text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Let's build something great together</h2>
          <p className="text-slate-500 text-lg mb-8">Ready to experience the Improx difference?</p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4">
            Contact Us <ArrowRightIcon />
          </Link>
        </div>
      </section>
    </div>
  );
}