import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { departments } from "../data/departments";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
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

  document.addEventListener(
    "mousedown",
    handleClickOutside
  );

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, []);

  const navLinks = [
    { name: "Home", path: "/" },
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
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
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

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`group relative font-semibold transition-all duration-300 hover:text-blue-600 ${
                  location.pathname === item.path
                    ? "text-blue-600"
                    : "text-slate-700"
                }`}
              >
                {item.name}

                <span
                  className={`absolute -bottom-2 left-0 h-[3px] rounded-full bg-gradient-to-r from-blue-600 to-sky-400 transition-all duration-300 ${
                    location.pathname === item.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}

            {/* Departments */}
            {/* Departments */}
<div
  ref={dropdownRef}
  className="relative"
>
  <button
    onClick={() => setDeptOpen(!deptOpen)}
    className="
      flex items-center gap-2
      px-4 py-3
      rounded-xl
      font-semibold
      text-slate-700
      hover:text-blue-600
      hover:bg-blue-50
      transition-all duration-300
      cursor-pointer
    "
  >
    Departments

    <ChevronDown
      size={18}
      className={`transition-transform duration-300 ${
        deptOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  {deptOpen && (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[850px] glass rounded-3xl p-8 shadow-2xl animate-fade-up z-50">

      <div className="mb-5">
        <h3 className="text-lg font-bold text-slate-800">
          Our Departments
        </h3>

        <p className="text-sm text-slate-500">
          Explore all business divisions
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {departments.map((dept) => (
          <Link
            key={dept.id}
            to={`/departments/${dept.slug}`}
            onClick={() => setDeptOpen(false)}
            className="
              group
              flex
              items-center
              gap-4
              p-4
              rounded-2xl
              hover:bg-blue-50
              transition-all
              duration-300
            "
          >
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${dept.color}
              flex items-center justify-center text-xl shadow-lg`}
            >
              {dept.icon}
            </div>

            <div>
              <h4 className="font-semibold text-slate-800 group-hover:text-blue-600">
                {dept.name}
              </h4>

              <p className="text-xs text-slate-500">
                {dept.tagline}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )}
</div>

            {/* Phone */}
            <a
              href="tel:+919370992910"
              className="font-bold text-blue-600 hover:text-blue-700"
            >
              +91 9370992910
            </a>

            {/* CTA */}
            <Link
              to="/contact"
              className="btn-primary hover-pulse-glow"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-800"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t border-slate-200 px-6 py-6">

          <div className="space-y-4">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-slate-700 font-medium hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-4">
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