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
  { title: 'Client First', desc: 'Every tactical decision and resource allocation starts with what\'s best for our client\'s long-term operational success, rather than short-term margins.' },
  { title: 'Data-Driven Infrastructure', desc: 'We rely entirely on historical evidence, market research, and telemetry data — ensuring every architecture recommendation is deeply rooted in verifiable facts.' },
  { title: 'Agile Execution Models', desc: 'Rapid iteration pipelines and swift delivery frameworks without ever sacrificing code quality or operational integrity. We move fast and pivot smartly.' },
  { title: 'Long-term Strategic Alliance', desc: 'We do not abandon you after structural delivery. We grow alongside your business ecosystem through every subsequent phase of market scaling.' },
  { title: 'Global Mindset & Footprint', desc: 'A diverse, multi-disciplinary team offering cross-continental perspectives combined with hyper-local awareness of specific compliance parameters.' },
  { title: 'Immutable Trust & Clarity', desc: 'Radically transparent engineering logs, upfront pricing, realistic timelines, and honest client reporting frameworks guide our corporate lifecycle.' },
];

const team = [
  { 
    name: 'Rahul Sharma', 
    role: 'CEO & Founder', 
    dept: 'Strategy',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&auto=format&fit=crop'
  },
  { 
    name: 'Priya Patel', 
    role: 'Chief Technology Officer', 
    dept: 'IT & Cloud Systems',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop'
  },
  { 
    name: 'Amit Desai', 
    role: 'VP Marketing Operations', 
    dept: 'Growth Marketing',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&h=400&auto=format&fit=crop'
  },
  { 
    name: 'Sneha Kulkarni', 
    role: 'Head of Data Science', 
    dept: 'Data Analytics & AI',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=400&auto=format&fit=crop'
  },
  { 
    name: 'Rohan Mehta', 
    role: 'Director, Business Process', 
    dept: 'BPO & Automation',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=400&auto=format&fit=crop'
  },
  { 
    name: 'Ananya Singh', 
    role: 'Head of Brand Identity', 
    dept: 'Social Media & Creative',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&auto=format&fit=crop'
  },
];

export default function AboutPage() {
  const [heroRef, heroVisible] = useScrollReveal();
  const [missionRef, missionVisible] = useScrollReveal();
  const [valuesRef, valuesVisible] = useScrollReveal();
  const [evolutionRef, evolutionVisible] = useScrollReveal();
  const [deptRef, deptVisible] = useScrollReveal();
  const [teamRef, teamVisible] = useScrollReveal();

  return (
    <div className="pt-20 overflow-hidden bg-white text-slate-800">
      
      {/* ─── HERO SECTION ─── */}
      <section className="py-20 lg:py-32 relative bg-gradient-to-b from-blue-50/50 via-white to-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 blur-2xl rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div ref={heroRef} className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className={`lg:col-span-6 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4">Who We Are</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                Built to power<br /><span className="gradient-text">your digital ambition</span>
              </h1>
              <p className="text-slate-700 text-lg sm:text-xl leading-relaxed mb-6 font-medium">
                Improx Group is a premium, multi-disciplinary business engineering and digital transformation firm operating out of Pune, India. We architect unified digital platforms, optimize back-office workflows, and craft conversion-driven digital identities.
              </p>
              <p className="text-slate-500 text-base leading-relaxed mb-4">
                We believe that fragmented solutions yield fragmented growth. That is why we built a cohesive collective of 10 specialized functional departments designed to operate in perfect synergy. Whether you are automating workflows via custom cloud applications or optimizing high-intent local lead acquisition structures, we remove the friction of dealing with disparate vendors.
              </p>
              <p className="text-slate-500 text-base leading-relaxed">
                Today, our cross-functional squads engineer robust, maintainable technology assets for growth-minded firms worldwide. By marrying rigorous software architectures with creative performance metrics, we transform operational vulnerabilities into scalable digital competitive advantages.
              </p>
            </div>

            <div className={`lg:col-span-6 w-full h-full transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="w-full h-full min-h-[450px] lg:min-h-[550px] relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop" 
                  alt="Improx Corporate Headquarters Hub" 
                  className="w-full h-full object-cover object-center absolute inset-0"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-slate-900/60 border border-white/20 rounded-2xl p-4 flex items-center gap-4 text-white">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <p className="text-sm font-bold tracking-wide">Global Solutions Delivery Center &bull; Pune, MH, India</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── VISION, MISSION & PROMISE ─── */}
      <section className="py-24 bg-gradient-to-r from-slate-50 to-blue-50/30" ref={missionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { title: 'Our Core Mission', text: 'To arm high-growth businesses and specialized professionals with deeply integrated operational software architectures, high-trust digital assets, and comprehensive automated marketing systems that turn market intent into measurable, compounding corporate revenue.' },
              { title: 'Our Long-Term Vision', text: 'To establish Improx as the definitive global benchmark for multi-service execution. We envision an environment where small local operators and massive corporate platforms alike can deploy customized technical workflows without architectural friction.' },
              { title: 'Our Strategic Promise', text: 'We do not deal in vague metrics or empty deliverables. Every software repository we hand over, every database configuration we lock down, and every performance campaign we execute is tied to tangible, verifiable business outcomes.' },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-white rounded-3xl p-10 shadow-sm border border-slate-100 transition-all duration-700 ${missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-12 h-1 bg-gradient-to-r from-primary-600 to-blue-400 rounded-full mb-6" />
                <h3 className="text-slate-900 font-black text-2xl mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed font-normal">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEW SECTION: OUR STRATEGIC EVOLUTION (LONG FORM CONTENT) ─── */}
      <section className="py-24 bg-white border-b border-slate-100" ref={evolutionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className={`lg:col-span-6 order-2 lg:order-1 transition-all duration-1000 ${evolutionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="w-full h-full min-h-[400px] lg:min-h-[500px] relative rounded-3xl overflow-hidden shadow-xl bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                  alt="Improx cross-functional developer sprint team session"
                  className="w-full h-full object-cover object-center absolute inset-0"
                  loading="lazy"
                />
              </div>
            </div>

            <div className={`lg:col-span-6 order-1 lg:order-2 transition-all duration-1000 delay-200 ${evolutionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4">Corporate Journey</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                Our Strategic Evolution: <br />
                <span className="gradient-text">From Local Agency to Global Hub</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-base leading-relaxed">
                <p>
                  Improx Group began as a specialized technological consultancy aimed at addressing a major pain point in corporate expansion: the disjointed state of commercial B2B operations. We noticed that high-intent service providers — such as expanding logistics systems, law practices, and vertical SaaS operations — were continuously losing margins because their web platforms, client databases, and customer support desks were completely isolated from one another.
                </p>
                <p>
                  By taking a software-first approach, we began constructing customized, fully integrated database dashboards and responsive single-page web experiences designed to automatically capture and route inquiries. The success of these early integrations quickly forced our transformation into a multi-disciplinary powerhouse. We systematically scaled our internal talent pool, establishing high-performance units dedicated entirely to Enterprise Cloud Architectures, automated Business Process Outsourcing (BPO), and high-conversion Local Performance Marketing.
                </p>
                <p>
                  By standardizing our production codebase on modern, strict-type architectures like TypeScript, Next.js, and automated container workflows, we ensured that every digital asset deployed under the Improx name remains highly performant, accessible, and ready for rapid market scaling. We have deliberately expanded our footprint from a core technology firm into a comprehensive global business accelerator capable of executing complex workflows simultaneously across multiple time zones.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ─── */}
      <section className="py-24 bg-slate-50/50" ref={valuesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4">What Drives Us</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Uncompromising <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-slate-500 text-lg mt-4 leading-relaxed">
              We operate under strict architectural and operational philosophies. These values aren't decorative wall text — they outline how we manage code, clients, and corporate deliverables daily.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-700 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <h3 className="text-slate-900 font-bold text-xl mb-3 tracking-tight">{val.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DEPARTMENTS OVERVIEW ─── */}
      <section className="py-24 bg-white border-t border-b border-slate-100" ref={deptRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4">Integrated Capabilities</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our <span className="gradient-text">10 Specialized Departments</span>
            </h2>
            <p className="text-slate-500 text-lg mt-4 leading-relaxed">
              Click to drill down into the technology stacks, automated delivery methods, and case metrics powering each operational unit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {departments.map((dept, i) => {
              const placeholderImages = [
                'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=500&auto=format&fit=crop', // Strategy / Consulting
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500&auto=format&fit=crop', // Tech / Development
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop', // Marketing
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop', // Data Sciences
                'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop', // BPO / Management
                'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=500&auto=format&fit=crop', // Media / Identity
                'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=500&auto=format&fit=crop', // Corporate Operations
                'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=500&auto=format&fit=crop', // Professional Services
                'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=500&auto=format&fit=crop', // Client Relations
                'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=500&auto=format&fit=crop'  // Support Architecture
              ];

              return (
                <Link
                  key={dept.id}
                  to={`/departments/${dept.slug}`}
                  className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 group transition-all duration-700 flex flex-col h-full ${deptVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  {/* Expanded uncropped image container */}
                  <div className="w-full h-44 relative bg-slate-100 overflow-hidden">
                    <img 
                      src={dept.image || placeholderImages[i % placeholderImages.length]} 
                      alt={dept.name} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                  </div>

                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <h4 className="text-slate-900 font-bold text-base tracking-tight group-hover:text-primary-600 transition-colors line-clamp-1">
                        {dept.name}
                      </h4>
                      <p className="text-slate-500 text-xs mt-2 line-clamp-3 leading-relaxed">
                        {dept.description || 'Enterprise grade solutions engineered for vertical business infrastructure alignment.'}
                      </p>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-primary-600 font-bold text-xs">
                      <span className="uppercase tracking-wider">Explore Unit</span>
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── TECHNICAL LEADERSHIP TEAM ─── */}
      <section className="py-24 bg-slate-50" ref={teamRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4">Leadership</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              The People <span className="gradient-text">Behind Improx Solutions</span>
            </h2>
            <p className="text-slate-500 text-lg mt-4 leading-relaxed">
              Our multidisciplinary executive team brings decades of combined expertise in software engineering, brand development, and international operational expansion.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className={`bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm group/member transition-all duration-700 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                {/* Large profile frames */}
                <div className="w-full h-72 rounded-2xl overflow-hidden mb-6 bg-slate-100 border border-slate-200 shadow-inner relative">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center group-hover/member:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-slate-900 font-black text-xl tracking-tight group-hover/member:text-primary-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary-700 text-sm font-bold mt-1 uppercase tracking-wide">{member.role}</p>
                
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 text-slate-600 text-xs font-semibold border border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                  {member.dept}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CALL TO ACTION (CTA) ─── */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Let's build something <span className="gradient-text">exceptional</span> together
          </h2>
          <p className="text-slate-500 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Ready to integrate your engineering, customer acquisition, and operational pipelines into a singular high-performance machine?
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-3 text-base font-bold px-10 py-5 rounded-xl shadow-lg shadow-primary-600/10 hover:shadow-xl transition-all">
            Initiate Consultation <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}