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

export default function DepartmentsPage() {
  const [aboutRef, aboutVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();
  const [blogRef, blogVisible] = useScrollReveal();

  return (
    <div className="pt-20 bg-white selection:bg-primary-500 selection:text-white">
      
      {/* ─── 1. HERO BANNER ─── */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          alt="Departments Banner"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[1px]" />

        <div className="container-max relative z-10 text-center px-4 sm:px-6 py-16">
          <p className="text-primary-400 font-extrabold uppercase tracking-widest text-xs sm:text-sm mb-4 animate-fade-up">
            What We Do
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tight max-w-4xl mx-auto leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Explore Our Business Divisions
          </h1>
          <p className="text-lg sm:text-xl text-slate-200/90 max-w-3xl mx-auto font-medium leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Improx Group operates across consulting, technology, cloud, marketing, research, media, business process, and digital transformation services.
          </p>
        </div>
      </section>

      {/* ─── 2. ABOUT & OVERVIEW ─── */}
      <section ref={aboutRef} className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-12 right-0 w-96 h-96 bg-primary-300/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-400/15 rounded-full blur-[90px] pointer-events-none" />

        <div className="container-max px-4 sm:px-6">
          <div className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-center transition-all duration-700 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="lg:col-span-5">
              <img
                src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=800&q=80"
                alt="Improx Group Team Overview"
                className="rounded-3xl shadow-xl border border-slate-100 object-cover w-full h-full"
              />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-primary-600 font-extrabold uppercase tracking-widest text-xs sm:text-sm">
                About Improx Group
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                One Group. Multiple Specialized Businesses.
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                Improx Group brings together industry specialists, technology experts, consultants, researchers, marketers, and business professionals under one ecosystem.
              </p>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                Through our diverse departments, we help startups, enterprises, government organizations, and global brands achieve sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. METRICS / STATS ─── */}
      <section className="py-16 bg-slate-50 border-y border-slate-100/70">
        <div className="container-max px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: "10+", lbl: "Business Divisions" },
              { val: "50+", lbl: "Specialized Services" },
              { val: "500+", lbl: "Projects Delivered" },
              { val: "25+", lbl: "Industries Served" }
            ].map((stat, idx) => (
              <div key={idx} className="glass bg-white rounded-2xl p-6 sm:p-8 text-center border border-slate-200/50 shadow-sm card-hover">
                <h3 className="text-4xl sm:text-5xl font-black gradient-text mb-2 tracking-tight">{stat.val}</h3>
                <p className="text-slate-600 font-bold text-sm sm:text-base">{stat.lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. MAIN DYNAMIC DEPARTMENTS LOOP ─── */}
      <section ref={gridRef} className="py-20 lg:py-28 bg-white">
        <div className="container-max px-4 sm:px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              All <span className="gradient-text">Departments</span>
            </h2>
            <p className="text-slate-500 font-medium text-base sm:text-lg">
              Explore our 10 specialized divisions — each built to deliver measurable results in their domain.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, i) => (
              <Link
                key={dept.id}
                to={`/departments/${dept.slug}`}
                className={`glass bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/60 card-hover group flex flex-col justify-between transition-all duration-700 ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={dept.image}
                      alt={dept.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    
                  

                  
                  </div>

                  <div className="p-6 sm:p-8 space-y-3">
                    <h3 className="text-slate-900 font-black text-xl group-hover:text-primary-600 transition-colors tracking-tight">
                      {dept.name}
                    </h3>
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed line-clamp-3 font-medium">
                      {dept.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 mt-auto">
                  <div className="flex items-center gap-2 text-primary-600 text-sm font-bold group-hover:gap-3 transition-all">
                    Learn more <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. INDUSTRIES & FEATURED EXPERTISE ─── */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container-max px-4 sm:px-6">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-12 tracking-tight">
            Industries & Expertise
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80", title: "Consulting & Strategy" },
              { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80", title: "Technology & Cloud" },
              { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80", title: "Marketing & Media" }
            ].map((item, index) => (
              <div key={index} className="relative rounded-[24px] overflow-hidden h-80 group shadow-md card-hover">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-8" />
                <h3 className="absolute bottom-6 left-6 text-white text-2xl font-black tracking-tight z-10">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. UNIQUE VALUE PROPOSITIONS ─── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-max px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Why Businesses Choose Improx Group
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Multi-Disciplinary Expertise", d: "Access specialists across consulting, technology, marketing, research, operations and business services." },
              { t: "End-to-End Solutions", d: "From strategic orchestration and architectural planning to complete execution and ongoing lifecycle optimization." },
              { t: "Global Delivery", d: "Supporting cross-border scaling and digital modernizations across major enterprise industries and geographic markets." }
            ].map((prop, i) => (
              <div key={i} className="glass bg-slate-50/50 rounded-2xl p-8 border border-slate-100 shadow-sm card-hover space-y-3">
                <h3 className="font-extrabold text-slate-900 text-xl tracking-tight">{prop.t}</h3>
                <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">{prop.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. NEW FEATURED ARTICLES & INSIGHTS ─── */}
      <section ref={blogRef} className="py-20 lg:py-28 bg-slate-50 border-y border-slate-100">
        <div className="container-max px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-primary-600 font-extrabold uppercase tracking-widest text-xs sm:text-sm mb-2">
                Knowledge Hub
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Latest Insights & <span className="gradient-text">Articles</span>
              </h2>
            </div>
            <Link to="/blog" className="group flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-primary-600 transition-colors whitespace-nowrap">
              View All Insights <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Accelerating Enterprise Digital Transformation in Modern Ecosystems",
                category: "Technology",
                date: "June 15, 2026",
                img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
                link: "/blog/digital-transformation"
              },
              {
                title: "Strategic Consulting: Navigating Market Growth in Fragmented Industries",
                category: "Strategy",
                date: "June 08, 2026",
                img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
                link: "/blog/strategic-consulting"
              },
              {
                title: "Data-Driven Marketing Ecosystems: The Future of Global Brand Scale",
                category: "Marketing",
                date: "May 29, 2026",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
                link: "/blog/marketing-ecosystems"
              }
            ].map((post, i) => (
              <Link 
                key={i} 
                to={post.link}
                className={`flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm card-hover transition-all duration-700 ${
                  blogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur text-white text-xs font-bold px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-slate-400">{post.date}</p>
                    <h3 className="font-extrabold text-slate-900 text-lg line-clamp-2 hover:text-primary-600 transition-colors tracking-tight leading-snug">
                      {post.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-primary-600 pt-2">
                    Read Article <ArrowRightIcon size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. PREMIUM BOTTOM CTA ─── */}
   

    </div>
  );
}