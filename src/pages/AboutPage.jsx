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
  { 
    name: 'Rahul Sharma', 
    role: 'CEO & Founder', 
    dept: 'Strategy',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&h=256&auto=format&fit=crop'
  },
  { 
    name: 'Priya Patel', 
    role: 'Chief Technology Officer', 
    dept: 'IT & Cloud',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&h=256&auto=format&fit=crop'
  },
  { 
    name: 'Amit Desai', 
    role: 'VP Marketing', 
    dept: 'Marketing',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&h=256&auto=format&fit=crop'
  },
  { 
    name: 'Sneha Kulkarni', 
    role: 'Head of Data', 
    dept: 'Data & AI',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&h=256&auto=format&fit=crop'
  },
  { 
    name: 'Rohan Mehta', 
    role: 'Director, Business Process', 
    dept: 'BPO & RPA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop'
  },
  { 
    name: 'Ananya Singh', 
    role: 'Head of Social Media', 
    dept: 'Social Media',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&h=256&auto=format&fit=crop'
  },
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
        <div className="hero-glow w-96 h-96 bg-primary-400/30 top-0 right-0 blur-3xl rounded-full" />
        <div className="hero-glow w-64 h-64 bg-accent-400/20 bottom-0 left-0 blur-2xl rounded-full" />
        
        <div className="container-max relative z-10">
          <div ref={heroRef} className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className={`lg:col-span-7 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-primary-600 font-semibold uppercase tracking-widest text-sm mb-3">About Us</p>
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Built to power<br /><span className="gradient-text">your ambition</span>
              </h1>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Improx Group is a multi-disciplinary business services firm headquartered in Pune, India. We combine consulting depth, technology expertise, and creative execution to help businesses thrive in a rapidly changing world.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Founded with a singular mission — to be the most trusted partner for businesses seeking growth — Improx has grown into a powerhouse of 10 specialized departments serving clients across 45+ countries. We believe great outcomes come from deep expertise, relentless execution, and genuine partnerships.
              </p>
            </div>

            <div className={`lg:col-span-5 relative transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="absolute -inset-3 bg-gradient-to-tr from-primary-600 to-blue-400 rounded-3xl opacity-10 blur-lg" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-2xl -z-10" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" 
                    alt="Improx Corporate Headquarters Hub" 
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-3 flex items-center gap-3 text-white backdrop-blur-md bg-slate-900/40 border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-xs font-semibold tracking-wide">Ecosystem Hub &bull; Pune, India</p>
                  </div>
                </div>
              </div>
            </div>

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

      {/* ─── DEPARTMENTS OVERVIEW (UPDATED WITH IMAGE CARDS) ─── */}
      <section className="section-pad section-light" ref={deptRef}>
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-primary-600 font-semibold uppercase tracking-widest text-sm mb-3">What We Do</p>
            <h2 className="text-3xl font-black text-slate-900 mb-4">Our <span className="gradient-text">10 Specialized Departments</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {departments.map((dept, i) => {
              // Sequence of highly context-relevant production-grade imagery fallbacks
              const placeholderImages = [
                'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=350&auto=format&fit=crop', // Strategy / Consulting
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=350&auto=format&fit=crop', // Tech / Development
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=350&auto=format&fit=crop', // Marketing
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=350&auto=format&fit=crop', // Data Sciences
                'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=350&auto=format&fit=crop', // BPO / Management
                'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=350&auto=format&fit=crop', // Media / Identity
                'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=350&auto=format&fit=crop', // Corporate Operations
                'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=350&auto=format&fit=crop', // Professional Services
                'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=350&auto=format&fit=crop', // Client Relations
                'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=350&auto=format&fit=crop'  // Support Architecture
              ];

              return (
                <Link
                  key={dept.id}
                  to={`/departments/${dept.slug}`}
                  className={`glass rounded-2xl overflow-hidden card-hover group transition-all duration-700 bg-white flex flex-col h-full ${deptVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  {/* Department Visual Cover image frame */}
                  <div className="relative h-28 overflow-hidden bg-slate-100">
                    <img 
                      src={dept.image || placeholderImages[i % placeholderImages.length]} 
                      alt={dept.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                    
                    {/* Absolute badge position for departmental icons */}
                    <div className={`absolute -bottom-3 left-4 w-9 h-9 rounded-xl bg-gradient-to-br ${dept.color || 'from-primary-500 to-blue-600'} flex items-center justify-center text-white text-base shadow-md border-2 border-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {dept.icon}
                    </div>
                  </div>

                  {/* Body textual layouts */}
                  <div className="p-4 pt-5 flex flex-col flex-grow justify-between">
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm tracking-tight group-hover:text-primary-600 transition-colors line-clamp-1">
                        {dept.name}
                      </h4>
                      <p className="text-slate-400 text-xs mt-1 line-clamp-2 leading-relaxed">
                        {dept.description || 'Enterprise grade solutions engineered for vertical business infrastructure alignment.'}
                      </p>
                    </div>
                    
                    <div className="mt-3 pt-2 border-t border-slate-50 flex items-center justify-between text-primary-600 font-semibold text-xs">
                      <span>Explore</span>
                      <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className={`glass rounded-2xl p-6 card-hover group/member bg-white transition-all duration-700 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden mb-5 border-2 border-slate-100 shadow-md group-hover/member:border-primary-500 transition-colors duration-300 bg-slate-100">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover/member:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 gradient-bg flex items-center justify-center text-white font-black text-lg -z-10">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>

                <h3 className="text-slate-900 font-bold text-lg group-hover/member:text-primary-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary-700 text-sm font-semibold mt-0.5">{member.role}</p>
                
                <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 text-slate-500 text-xs font-medium border border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                  {member.dept}
                </div>
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