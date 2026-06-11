import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { departments } from '../data/departments';
import { MenuIcon, XIcon, ChevronDownIcon } from './Icons';

const DEPT_COLS = [
  departments.slice(0, 4),
  departments.slice(4, 7),
  departments.slice(7, 10),
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);
  const [mobileDeptOpen, setMobileDeptOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setDeptOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setDeptOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-dark shadow-xl shadow-black/30' : 'bg-transparent'}`}>
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center text-white font-black text-lg shadow-lg shadow-primary-500/40 group-hover:shadow-primary-500/60 transition-shadow">
              IX
            </div>
            <div>
              <span className="text-white font-bold text-xl tracking-tight">Improx</span>
              <span className="gradient-text font-bold text-xl tracking-tight">Group</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8" ref={menuRef}>
            <Link to="/" className="nav-link animated-border">Home</Link>
            <Link to="/about" className="nav-link animated-border">About</Link>

            {/* Departments Mega Menu */}
            <div className="relative">
              <button
                className="nav-link animated-border flex items-center gap-1"
                onMouseEnter={() => setDeptOpen(true)}
                onMouseLeave={() => setDeptOpen(false)}
                onClick={() => setDeptOpen(!deptOpen)}
              >
                Departments
                <ChevronDownIcon className={`transition-transform duration-200 ${deptOpen ? 'rotate-180' : ''}`} />
              </button>
              {deptOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[820px] glass-dark rounded-2xl p-6 shadow-2xl shadow-black/50 border border-white/10"
                  onMouseEnter={() => setDeptOpen(true)}
                  onMouseLeave={() => setDeptOpen(false)}
                >
                  <p className="text-xs font-semibold text-primary-400 uppercase tracking-widest mb-4">Our Departments</p>
                  <div className="grid grid-cols-3 gap-4">
                    {departments.map((dept) => (
                      <Link
                        key={dept.id}
                        to={`/departments/${dept.slug}`}
                        className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                      >
                        <span className="text-2xl flex-shrink-0 mt-0.5">{dept.icon}</span>
                        <div>
                          <p className="text-sm font-semibold text-white group-hover:text-primary-300 transition-colors">{dept.name}</p>
                          <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{dept.tagline}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <Link to="/departments" className="text-xs text-primary-400 hover:text-primary-300 font-medium transition-colors">
                      View all departments →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className="nav-link animated-border">Contact</Link>
            <a href="tel:+919370992910" className="nav-link animated-border text-primary-300">+91 9370992910</a>
            <Link to="/contact" className="btn-primary text-sm py-2 px-5">Get Started</Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="glass-dark border-t border-white/10 px-4 py-6 space-y-1">
          <Link to="/" className="block py-3 text-slate-300 hover:text-white font-medium border-b border-white/5">Home</Link>
          <Link to="/about" className="block py-3 text-slate-300 hover:text-white font-medium border-b border-white/5">About</Link>

          <div>
            <button
              className="w-full flex items-center justify-between py-3 text-slate-300 hover:text-white font-medium border-b border-white/5"
              onClick={() => setMobileDeptOpen(!mobileDeptOpen)}
            >
              <span>Departments</span>
              <ChevronDownIcon className={`transition-transform ${mobileDeptOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileDeptOpen && (
              <div className="pl-4 mt-1 space-y-1">
                {departments.map((dept) => (
                  <Link
                    key={dept.id}
                    to={`/departments/${dept.slug}`}
                    className="flex items-center gap-2 py-2 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <span>{dept.icon}</span>
                    <span>{dept.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" className="block py-3 text-slate-300 hover:text-white font-medium border-b border-white/5">Contact</Link>
          <a href="tel:+919370992910" className="block py-3 text-primary-300 font-medium border-b border-white/5">+91 9370992910</a>
          <div className="pt-3">
            <Link to="/contact" className="btn-primary block text-center text-sm">Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
