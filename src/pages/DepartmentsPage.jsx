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
  const [headRef, headVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();

  return (
    <div className="pt-20 bg-white">
      {/* Background glows */}
      <div className="relative overflow-hidden">
        <div className="hero-glow w-96 h-96 bg-primary-300 top-0 right-0" />
        <div className="hero-glow w-72 h-72 bg-accent-400 bottom-0 left-0" />

        <section className="section-pad relative z-10">
          <div className="container-max">
            <div ref={headRef} className={`text-center mb-14 transition-all duration-700 ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-primary-600 font-semibold uppercase tracking-widest text-sm mb-3">What We Do</p>
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
                All <span className="gradient-text">Departments</span>
              </h1>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                Explore our 10 specialized divisions — each built to deliver measurable results in their domain.
              </p>
            </div>

            <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, i) => (
                <Link
                  key={dept.id}
                  to={`/departments/${dept.slug}`}
                  className={`glass rounded-2xl overflow-hidden card-hover group transition-all duration-700 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={dept.image}
                      alt={dept.name}
                      className="department-image"
                      loading="lazy"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <div className={`absolute bottom-3 left-3 w-14 h-14 rounded-2xl bg-gradient-to-br ${dept.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {dept.icon}
                    </div>
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur text-primary-700 text-xs font-semibold px-3 py-1 rounded-full shadow">
                      {dept.subDepartments.length} specializations
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-slate-900 font-bold text-xl mb-2 group-hover:text-primary-600 transition-colors">{dept.name}</h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-3">{dept.description}</p>
                    <div className="flex items-center gap-2 text-primary-600 text-sm font-semibold group-hover:gap-3 transition-all">
                      Learn more <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}