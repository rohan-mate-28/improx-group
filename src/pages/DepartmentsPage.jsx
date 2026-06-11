import React from 'react';
import { Link } from 'react-router-dom';
import { departments } from '../data/departments';
import { ArrowRightIcon } from '../components/Icons';

export default function DepartmentsPage() {
  return (
    <div className="pt-20">
      <section className="section-pad">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="text-primary-400 font-semibold uppercase tracking-widest text-sm mb-3">What We Do</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              All <span className="gradient-text">Departments</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Explore our 10 specialized divisions — each built to deliver measurable results in their domain.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <Link
                key={dept.id}
                to={`/departments/${dept.slug}`}
                className="glass rounded-2xl p-8 card-hover group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${dept.color} flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                  {dept.icon}
                </div>
                <h2 className="text-white font-bold text-xl mb-2 group-hover:text-primary-300 transition-colors">{dept.name}</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{dept.description}</p>
                <div className="flex items-center gap-2 text-primary-400 text-sm font-semibold">
                  Learn more <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
