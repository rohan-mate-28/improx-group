import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import * as Icons from "lucide-react"; 
import { navGroups } from "../data/navStructure";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);
  const [mobileDeptOpen, setMobileDeptOpen] = useState({}); 
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setDeptOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDeptOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileGroup = (title) => {
    setMobileDeptOpen(prev => ({ ...prev, [title]: !prev[title] }));
  };

  // Dynamic Lucide Icon Mapper Component
  const NavIcon = ({ name, className, size = 18 }) => {
    const IconComponent = Icons[name];
    if (!IconComponent) return <Icons.Activity className={className} size={size} />;
    return <IconComponent className={className} size={size} />;
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", type: "dropdown" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* Clean Corporate Brand Logo Block */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo-black.png"
              alt="Logo"
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="border-l border-slate-300 pl-3 hidden sm:block">
              <p className="text-[11px] font-bold text-slate-800 tracking-[0.2em] uppercase">
                IMPROX
              </p>
              <p className="text-[9px] text-slate-400 font-semibold tracking-widest uppercase">
                BUSINESS GROUP
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              if (item.type === "dropdown") {
                return (
                  <div ref={dropdownRef} key={item.name} className="relative">
                    <button
                      onClick={() => setDeptOpen(!deptOpen)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                        deptOpen 
                          ? "bg-slate-50 text-blue-600" 
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${deptOpen ? "rotate-180 text-blue-600" : "text-slate-400"}`}
                      />
                    </button>

                    {/* RE-DESIGNED MEGA LIST DROPDOWN PANEL */}
                    {deptOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[920px] bg-white rounded-2xl border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-6 animate-fade-in z-50">
                        <div className="grid grid-cols-3 gap-6">
                          {navGroups.map((group) => (
                            <div key={group.title} className="space-y-4">
                              {/* List Header */}
                              <div className="border-b border-slate-50 pb-2">
                                <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase">{group.title}</h3>
                                <p className="text-[11px] text-slate-400">{group.description}</p>
                              </div>

                              {/* Structured Lists */}
                              <div className="space-y-1">
                                {group.items.map((subItem) => (
                                  <Link
                                    key={subItem.id}
                                    to={`/departments/${subItem.slug}`}
                                    onClick={() => setDeptOpen(false)}
                                    className="group flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-all duration-200"
                                  >
                                    {/* Minimal Dynamic Icon */}
                                    <div className="mt-0.5 p-1.5 rounded-lg bg-slate-50 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                      <NavIcon name={subItem.icon} size={16} />
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center justify-between">
                                        <h4 className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                                          {subItem.name}
                                        </h4>
                                        <ArrowRight size={12} className="opacity-0 -translate-x-2 text-blue-600 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                                      </div>
                                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{subItem.tagline}</p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
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
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    location.pathname === item.path 
                      ? "text-blue-600 bg-blue-50/50" 
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="ml-4 pl-4 border-l border-slate-200">
              <Link to="/contact" className="bg-slate-900 text-white text-xs font-bold tracking-wide uppercase px-5 py-2.5 rounded-lg hover:bg-blue-600 shadow-sm transition-all duration-200">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Toggle Trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Accordion Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((item) => {
              if (item.type === "dropdown") {
                return (
                  <div key={item.name} className="space-y-1">
                    <span className="block px-3 text-xs font-bold tracking-wider text-slate-400 uppercase py-1">
                      {item.name}
                    </span>
                    
                    <div className="pl-2 space-y-3 pt-2">
                      {navGroups.map((group) => (
                        <div key={group.title} className="space-y-1">
                          <button 
                            onClick={() => toggleMobileGroup(group.title)}
                            className="w-full flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase px-3 py-1 bg-slate-50 rounded-md"
                          >
                            <span>{group.title}</span>
                            <ChevronDown size={12} className={`transition-transform ${mobileDeptOpen[group.title] ? 'rotate-180' : ''}`} />
                          </button>

                          {mobileDeptOpen[group.title] && (
                            <div className="space-y-0.5 pl-1.5 transition-all">
                              {group.items.map((subItem) => (
                                <Link
                                  key={subItem.id}
                                  to={`/departments/${subItem.slug}`}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-3 py-2 px-3 rounded-lg text-slate-600 hover:bg-slate-50 text-sm font-medium"
                                >
                                  <NavIcon name={subItem.icon} className="text-slate-400" size={16} />
                                  <span>{subItem.name}</span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-lg text-base font-semibold ${
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
                className="block text-center w-full bg-slate-900 text-white font-bold text-sm py-3 rounded-xl shadow-md"
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