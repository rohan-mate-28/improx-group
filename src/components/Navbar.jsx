import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
// Import source from departments.js as requested
import { departments } from "../data/departments"; 

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);
  const [mobileDeptOpen, setMobileDeptOpen] = useState(false);
  const [activeDept, setActiveDept] = useState(departments[0]);
  const [mobileServicesOpen, setMobileServicesOpen] = useState({});

  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDeptOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDeptOpen(false);
    setMobileDeptOpen(false);
  }, [location]);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setDeptOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setDeptOpen(false);
    }, 200);
  };

  const toggleDropdownClick = (e) => {
    e.stopPropagation();
    setDeptOpen((prev) => !prev);
  };

  const toggleMobileService = (id) => {
    setMobileServicesOpen(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", type: "dropdown" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* Logo Branding */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/logo-black.png" alt="Logo" className="h-9 w-auto transition-transform duration-300 group-hover:scale-105" />
            <div className="border-l border-slate-300 pl-3 hidden sm:block">
              <p className="text-[11px] font-bold text-slate-800 tracking-[0.2em] uppercase">IMPROX</p>
              <p className="text-[9px] text-slate-400 font-semibold tracking-widest uppercase">BUSINESS GROUP</p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              if (item.type === "dropdown") {
                return (
                  <div 
                    ref={dropdownRef} 
                    key={item.name} 
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={toggleDropdownClick}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                        deptOpen ? "bg-slate-50 text-blue-600" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={14} className={`transition-transform duration-300 ${deptOpen ? "rotate-180 text-blue-600" : "text-slate-400"}`} />
                    </button>

                    {/* DUAL-PANEL DESKTOP OVERLAY */}
                    {deptOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[1000px] bg-white rounded-2xl border border-slate-200/90 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] grid grid-cols-12 overflow-hidden z-50 h-[520px]">
                        
                        {/* LEFT PANEL: Core Departments */}
                        <div className="col-span-5 bg-white p-4 overflow-y-auto border-r border-slate-100 flex flex-col gap-0.5 custom-scrollbar">
                          <span className="text-[10px] font-extrabold text-slate-400 tracking-widest uppercase px-2.5 pb-2 pt-1">Core Departments</span>
                          {departments.map((dept) => {
                            const isCurrent = activeDept?.id === dept.id;
                            return (
                              <button
                                key={dept.id}
                                onMouseEnter={() => setActiveDept(dept)}
                                className={`group flex items-center justify-between p-2.5 rounded-xl text-left transition-all ${
                                  isCurrent 
                                    ? "bg-blue-50 text-blue-600 font-bold" 
                                    : "hover:bg-slate-50 text-slate-600 hover:text-slate-900"
                                }`}
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <span className="text-xs font-semibold truncate">{dept.name}</span>
                                </div>
                                <ChevronRight size={14} className={`transition-transform ${isCurrent ? "text-blue-600 translate-x-0" : "text-slate-300 opacity-0 group-hover:opacity-100 -translate-x-1"}`} />
                              </button>
                            );
                          })}
                        </div>

                        {/* RIGHT PANEL: Dynamic Sub-departments */}
                        <div className="col-span-7 bg-slate-50/50 p-6 flex flex-col justify-between overflow-y-auto">
                          {activeDept && (
                            <>
                              <div className="space-y-4">
                                <div className="border-b border-slate-200/60 pb-4">
                                  <div className="flex items-center gap-2">
                                    <span className="text-[9px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-2 py-0.5 rounded">Capabilities</span>
                                    <Link to={`/departments/${activeDept.slug}`} className="text-[10px] text-slate-400 hover:text-blue-600 flex items-center gap-0.5 ml-auto font-bold">
                                      View Hub <ArrowRight size={10} />
                                    </Link>
                                  </div>
                                  <h3 className="text-sm font-black text-slate-800 mt-2">{activeDept.name}</h3>
                                  <p className="text-xs text-slate-400 font-medium mt-0.5">{activeDept.tagline}</p>
                                </div>

                                <div className="grid grid-cols-1 gap-2">
                                  {activeDept.subDepartments?.map((sub, idx) => (
                                    <Link
                                      key={idx}
                                      to={`/departments/${activeDept.slug}/${sub.slug}`}
                                      className="group/item flex items-center justify-between p-3 rounded-xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-xs transition-all"
                                    >
                                      <div className="min-w-0 pr-4">
                                        <h4 className="text-xs font-bold text-slate-800 group-hover/item:text-blue-600 transition-colors">{sub.name}</h4>
                                        <p className="text-[10px] text-slate-400 truncate mt-0.5 font-medium">{sub.desc}</p>
                                      </div>
                                      <div className="p-1.5 rounded-lg bg-slate-50 group-hover/item:bg-blue-50 text-slate-400 group-hover/item:text-blue-600 transition-all shrink-0">
                                        <ArrowRight size={13} className="group-hover/item:translate-x-0.5 transition-transform" />
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              <Link
                                to={`/departments/${activeDept.slug}`}
                                className="group flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all shadow-md mt-6"
                              >
                                <span>Overview Hub</span>
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </>
                          )}
                        </div>

                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    location.pathname === item.path ? "text-blue-600 bg-blue-50/50" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="ml-4 pl-4 border-l border-slate-200">
              <Link to="/contact" className="bg-slate-900 text-white text-xs font-bold tracking-wide uppercase px-5 py-2.5 rounded-lg hover:bg-blue-600 transition-all shadow-sm">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE DRILL-DOWN DRAWER */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((item) => {
              if (item.type === "dropdown") {
                return (
                  <div key={item.name} className="space-y-1">
                    <button
                      onClick={() => setMobileDeptOpen(!mobileDeptOpen)}
                      className="w-full flex items-center justify-between px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 rounded-xl"
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} className={`transition-transform duration-200 ${mobileDeptOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                    </button>
                    
                    {mobileDeptOpen && (
                      <div className="pl-2 space-y-1.5 pt-1 border-l border-slate-100 ml-3">
                        {departments.map((subItem) => {
                          const isMobileChildOpen = mobileServicesOpen[subItem.id];
                          return (
                            <div key={subItem.id} className="space-y-0.5">
                              <button
                                onClick={() => toggleMobileService(subItem.id)}
                                className={`w-full flex items-center justify-between py-2 px-2.5 rounded-xl text-xs font-bold transition-all ${
                                  isMobileChildOpen ? "bg-blue-50/60 text-blue-600" : "text-slate-700 hover:bg-slate-50"
                                }`}
                              >
                                <span className="truncate">{subItem.name}</span>
                                <ChevronDown size={14} className={`transition-transform duration-200 shrink-0 ml-2 ${isMobileChildOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                              </button>

                              {isMobileChildOpen && (
                                <div className="pl-4 space-y-1 py-1 bg-slate-50/40 rounded-xl mt-0.5 border-l-2 border-blue-200">
                                  {subItem.subDepartments?.map((sub, keyIdx) => (
                                    <Link
                                      key={keyIdx}
                                      to={`/departments/${subItem.slug}/${sub.slug}`}
                                      onClick={() => {
                                        setMobileOpen(false);
                                        setMobileDeptOpen(false);
                                      }}
                                      className="block py-1.5 text-[11px] text-slate-500 hover:text-blue-600 font-semibold transition-colors"
                                    >
                                      • {sub.name}
                                    </Link>
                                  ))}
                                  <Link
                                    to={`/departments/${subItem.slug}`}
                                    onClick={() => {
                                      setMobileOpen(false);
                                      setMobileDeptOpen(false);
                                    }}
                                    className="flex items-center gap-1 py-1.5 text-[11px] text-blue-600 font-bold tracking-wide uppercase mt-1"
                                  >
                                    <span>View Hub</span>
                                    <ArrowRight size={10} />
                                  </Link>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2 rounded-xl text-sm font-semibold ${
                    location.pathname === item.path ? "text-blue-600 bg-blue-50" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-100">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center w-full bg-slate-900 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl shadow-md"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}