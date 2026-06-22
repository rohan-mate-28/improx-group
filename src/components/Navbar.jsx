import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { departments } from "../data/departments";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);
  const [mobileDeptOpen, setMobileDeptOpen] = useState(false); 
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setMobileDeptOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDeptOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", type: "dropdown" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-xl border-b border-slate-200"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo-black.png"
              alt="Logo"
              className="h-10 transition-all duration-500 group-hover:scale-110"
            />
            <div>
              <p className="text-[10px] text-slate-500 tracking-widest">
                BUSINESS GROUP
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => {
              if (item.type === "dropdown") {
                return (
                  <div ref={dropdownRef} key={item.name} className="relative">
                    <button
                      onClick={() => setDeptOpen(!deptOpen)}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                    >
                      {item.name}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          deptOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {deptOpen && (
                      /* 
                        FIX: Replaced left-1/2 -translate-x-1/2 with screen positioning boundaries.
                        Added right-[-150px] or left-auto to dynamically offset the wide panel 
                        safely relative to desktop constraints without cutting off the viewport boundaries.
                      */
                      <div className="absolute top-full right-[-200px] md:right-[-100px] lg:right-[-40px] xl:left-1/2 xl:-translate-x-1/2 mt-2 w-[calc(100vw-32px)] sm:w-[750px] md:w-[850px] max-w-[90vw] lg:max-w-none glass bg-white rounded-3xl p-6 sm:p-8 shadow-2xl animate-fade-up z-50 overflow-y-auto max-h-[80vh]">
                        <div className="mb-5">
                          <h3 className="text-lg font-bold text-slate-800">Our Departments</h3>
                          <p className="text-sm text-slate-500">Explore all business divisions</p>
                        </div>

                        {/* Responsive grid mapping adjustments */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                          {departments.map((dept) => (
                            <Link
                              key={dept.id}
                              to={`/departments/${dept.slug}`}
                              onClick={() => setDeptOpen(false)}
                              className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-blue-50 transition-all duration-300"
                            >
                              <div className={`w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center text-xl shadow-lg`}>
                                {dept.icon}
                              </div>
                              <div>
                                <h4 className="font-semibold text-slate-800 group-hover:text-blue-600 line-clamp-1">{dept.name}</h4>
                                <p className="text-xs text-slate-500 line-clamp-1">{dept.tagline}</p>
                              </div>
                            </Link>
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
                  className={`group relative font-semibold transition-all duration-300 hover:text-blue-600 ${
                    location.pathname === item.path ? "text-blue-600" : "text-slate-700"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-2 left-0 h-[3px] rounded-full bg-gradient-to-r from-blue-600 to-sky-400 transition-all duration-300 ${
                      location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            {/* CTA */}
            <Link to="/contact" className="btn-primary hover-pulse-glow">
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-800"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Accordion Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-[100vh] overflow-y-auto" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t border-slate-200 px-6 py-6">
          <div className="space-y-4">
            {navLinks.map((item) => {
              if (item.type === "dropdown") {
                return (
                  <div key={item.name} className="space-y-2">
                    <button
                      onClick={() => setMobileDeptOpen(!mobileDeptOpen)}
                      className="flex items-center justify-between w-full text-slate-700 font-medium hover:text-blue-600 text-left py-1"
                    >
                      <span className="font-semibold">{item.name}</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          mobileDeptOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 pl-4 space-y-2 border-l border-slate-100 ${
                        mobileDeptOpen ? "max-h-[400px] py-1" : "max-h-0"
                      }`}
                    >
                      {departments.map((dept) => (
                        <Link
                          key={dept.id}
                          to={`/departments/${dept.slug}`}
                          className="flex items-center gap-3 py-2 px-2 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <span className="text-lg">{dept.icon}</span>
                          <span className="text-sm font-medium text-slate-600">{dept.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block font-medium hover:text-blue-600 py-1 ${
                    location.pathname === item.path ? "text-blue-600 font-semibold" : "text-slate-700"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-100 space-y-4">
              <Link
                to="/contact"
                className="btn-primary block text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}