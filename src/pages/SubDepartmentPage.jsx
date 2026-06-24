import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { departments } from "../data/departments";
import { ArrowRightIcon, CheckCircleIcon } from "../components/Icons";

export default function SubDepartmentPage() {
  const { deptSlug, subSlug } = useParams();
  const [activeTab, setActiveTab] = useState(0);

  const dept = departments.find((d) => d.slug === deptSlug);
  const subDept = dept?.subDepartments.find((s) => s.slug === subSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [subSlug]);

  if (!dept) return <Navigate to="/departments" replace />;
  if (!subDept) return <Navigate to={`/departments/${deptSlug}`} replace />;

  const accent = dept.accent || "#3b82f6";

  // ─── STOCK IMAGES PER SUBDEPT ───
  const getImages = (slug) => {
    const map = {
      "business-strategy": [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&auto=format",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&auto=format",
        "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&auto=format",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&auto=format",
      ],
      "management-consulting": [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&auto=format",
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&auto=format",
        "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&auto=format",
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&auto=format",
      ],
      "cloud-migration": [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&auto=format",
        "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&auto=format",
        "https://images.unsplash.com/photo-1563986764494-0de2e4926784?q=80&auto=format",
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&auto=format",
      ],
      "devops-cicd": [
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&auto=format",
        "https://images.unsplash.com/photo-1618401471353-b98aedd07871?q=80&auto=format",
        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&auto=format",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&auto=format",
      ],
      "data-science-ml": [
        "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&auto=format",
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&auto=format",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&auto=format",
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&auto=format",
      ],
      "digital-marketing": [
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&auto=format",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&auto=format",
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&auto=format",
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&auto=format",
      ],
      "software-development": [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&auto=format",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&auto=format",
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&auto=format",
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&auto=format",
      ],
      cybersecurity: [
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&auto=format",
        "https://images.unsplash.com/photo-1563986764494-0de2e4926784?q=80&auto=format",
        "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&auto=format",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&auto=format",
      ],
    };
    return (
      map[slug] || [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&auto=format",
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&auto=format",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&auto=format",
        "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&auto=format",
      ]
    );
  };

  const images = getImages(subSlug);

  // Tab labels for deep-dive section
  const tabs = ["What It Is", "Who It's For", "How We Deliver", "What You Get"];

  return (
    <div className="pt-20 overflow-hidden bg-white">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-white py-16">
        <div className="absolute inset-0">
          <img
            src={
              dept.image ||
              "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&auto=format"
            }
            alt={subDept.name}
            className="w-full h-full object-cover opacity-10"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white to-white" />
        </div>
        <div
          className="absolute top-0 left-0 w-96 h-96 opacity-20 blur-3xl rounded-full pointer-events-none"
          style={{ background: accent }}
        />
        <div
          className="absolute right-0 bottom-0 w-[30rem] h-[30rem] opacity-10 blur-3xl rounded-full pointer-events-none"
          style={{ background: accent }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 mb-8">
            <Link to="/" className="hover:text-primary-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              to="/departments"
              className="hover:text-primary-600 transition-colors"
            >
              Departments
            </Link>
            <span>/</span>
            <Link
              to={`/departments/${dept.slug}`}
              className="hover:text-primary-600 transition-colors"
            >
              {dept.name}
            </Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">{subDept.name}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 xl:col-span-8 max-w-3xl">
              <div
                className="inline-flex items-center gap-2 rounded-xl px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5 border"
                style={{
                  background: `${accent}10`,
                  color: accent,
                  borderColor: `${accent}20`,
                }}
              >
                <span>{dept.icon || "💼"}</span> {dept.name} Specialization
              </div>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-slate-900 mb-6 leading-[1.1]">
                {subDept.name}
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                {subDept.desc}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white rounded-xl px-6 py-3 font-semibold shadow-md hover:bg-slate-800 transition-all"
                >
                  Talk to Our Team <ArrowRightIcon />
                </Link>
                <Link
                  to={`/departments/${dept.slug}`}
                  className="inline-flex items-center justify-center border border-slate-200 text-slate-700 rounded-xl px-6 py-3 font-semibold hover:bg-slate-50 transition-all"
                >
                  Back to {dept.name}
                </Link>
              </div>
            </div>

            {/* Animated ring graphic */}
            <div className="lg:col-span-5 xl:col-span-4 flex items-center justify-center relative min-h-[300px] sm:min-h-[380px] group">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-dashed border-slate-200/80 animate-[spin_60s_linear_infinite]" />
                <div
                  className="absolute w-[85%] h-[85%] rounded-full border border-slate-100 p-8 animate-[spin_40s_linear_infinite_reverse]"
                  style={{ boxShadow: `inset 0 0 24px ${accent}05` }}
                >
                  <div className="w-full h-full rounded-full border border-dashed border-slate-200/40 relative">
                    <div
                      className="absolute top-0 left-1/2 w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2"
                      style={{ background: accent }}
                    />
                    <div
                      className="absolute bottom-0 left-1/2 w-2 h-2 rounded-full -translate-x-1/2 translate-y-1/2"
                      style={{ background: accent }}
                    />
                  </div>
                </div>
                <div
                  className="absolute w-[55%] h-[55%] rounded-full opacity-40 animate-ping"
                  style={{
                    background: `radial-gradient(circle, ${accent}15 0%, transparent 70%)`,
                  }}
                />
                <div
                  className="w-28 h-28 rounded-full bg-white border border-slate-100 flex flex-col items-center justify-center relative shadow-2xl transition-all duration-500 group-hover:scale-110"
                  style={{ boxShadow: `0 20px 40px -15px ${accent}30` }}
                >
                  <span className="text-3xl filter drop-shadow-sm mb-1">
                    {dept.icon || "💼"}
                  </span>
                  <span className="text-[9px] font-black tracking-widest text-slate-400 uppercase">
                    Service
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BANNER ─── */}
      <section
        className="py-10 border-y border-slate-100"
        style={{ background: `${accent}06` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-slate-200/60">
            {(
              dept.stats || [
                { label: "Projects Delivered", value: "500+" },
                { label: "Industries Served", value: "30+" },
                { label: "Average ROI", value: "3.2×" },
                { label: "Client Satisfaction", value: "98%" },
              ]
            ).map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div
                  className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight"
                  style={i === 0 ? { color: accent } : {}}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OVERVIEW ─── */}
      {subDept.overview && (
        <section className="py-20 bg-slate-50/50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-slate-200/60 rounded-3xl p-8 lg:p-12 shadow-xl shadow-slate-100/50 overflow-hidden">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex px-3 py-1 bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold rounded-lg uppercase tracking-wide">
                    Service Overview
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight sm:text-4xl">
                    What {subDept.name} Actually Means
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {subDept.overview}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                    {(dept.benefits || []).slice(0, 4).map((b, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <CheckCircleIcon
                          size={18}
                          className="text-emerald-500 mt-0.5 flex-shrink-0"
                        />
                        <p className="text-sm text-slate-700 font-medium">
                          {b}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 group/panel h-80 sm:h-96">
                    <img
                      src={images[0]}
                      alt={subDept.name}
                      className="w-full h-full object-cover group-hover/panel:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl">
                      <p className="text-xs font-bold text-white/90 uppercase tracking-widest mb-1">
                        {dept.name}
                      </p>
                      <p className="text-xs text-white/70">
                        {subDept.name} — Improx Group
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── KEY POINTS ─── */}
      {subDept.keyPoints && subDept.keyPoints.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <span
                className="text-xs font-bold uppercase tracking-widest mb-3 block"
                style={{ color: accent }}
              >
                What We Cover
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                Core Capabilities in {subDept.name}
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Every {subDept.name} engagement draws on these specific
                capabilities. The depth of each varies by scope, but all are
                built into how we approach this work.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subDept.keyPoints.map((kp, i) => (
                <div
                  key={i}
                  className="group bg-slate-50 border border-slate-200/60 rounded-2xl p-7 hover:bg-white hover:shadow-xl hover:shadow-slate-100/80 hover:border-slate-200 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${accent}15`, color: accent }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm leading-snug">
                      {kp.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {kp.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── TABBED DEEP-DIVE ─── */}
      <section className="py-24 bg-slate-50/40 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">
              Full Picture
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Everything You Need to Know
            </h2>
          </div>

          {/* Tab controls */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 pb-px">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2.5 text-sm font-semibold rounded-t-lg border-b-2 transition-all -mb-px ${
                  activeTab === i
                    ? "text-white border-current"
                    : "border-transparent text-slate-500 hover:text-slate-700 bg-white border border-slate-200 rounded-lg mb-1"
                }`}
                style={
                  activeTab === i
                    ? { background: accent, borderColor: accent }
                    : {}
                }
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="bg-white border border-slate-200/60 rounded-2xl p-6 sm:p-10 shadow-sm min-h-[300px]">
            {/* Tab 0 — What It Is */}
            {activeTab === 0 && (
              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-slate-900">
                    What {subDept.name} Actually Is
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {subDept.desc}
                  </p>
                  {subDept.overview && (
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {subDept.overview.split(". ").slice(0, 3).join(". ")}.
                    </p>
                  )}
                </div>
                <div className="space-y-3">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
                    What this service covers
                  </h4>
                  {(subDept.keyPoints || []).map((kp, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 py-2.5 border-b border-slate-50"
                    >
                      <div
                        className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
                        style={{ background: `${accent}15` }}
                      >
                        <CheckCircleIcon size={12} style={{ color: accent }} />
                      </div>
                      <span className="text-sm text-slate-700 font-medium">
                        {kp.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 1 — Who It's For */}
            {activeTab === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-black text-slate-900">
                  Who Gets the Most from {subDept.name}
                </h3>
                {subDept.whoItsFor && (
                  <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
                    {subDept.whoItsFor}
                  </p>
                )}
                <div className="grid sm:grid-cols-3 gap-5 mt-4">
                  {[
                    {
                      label: "Scale-ups",
                      desc: "Growing faster than existing processes and infrastructure can support. Needs external expertise to catch up.",
                    },
                    {
                      label: "Enterprises",
                      desc: "Complex environments with legacy debt, compliance pressure, or the need to modernize without disrupting live operations.",
                    },
                    {
                      label: "Transformation projects",
                      desc: "Organizations mid-change — a merger, pivot, or overhaul — who need structured external guidance to navigate it well.",
                    },
                  ].map((seg, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 border border-slate-100 rounded-2xl p-5"
                    >
                      <div
                        className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center text-xs font-bold"
                        style={{ background: `${accent}15`, color: accent }}
                      >
                        0{i + 1}
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm mb-2">
                        {seg.label}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {seg.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2 — How We Deliver */}
            {activeTab === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-black text-slate-900">
                  How We Deliver {subDept.name}
                </h3>
                {subDept.howWeDeliver ? (
                  <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
                    {subDept.howWeDeliver}
                  </p>
                ) : (
                  <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
                    We start with a structured discovery phase, build a delivery
                    plan with your team, execute in tested increments, and hand
                    over with full documentation and training.
                  </p>
                )}
                <div className="grid sm:grid-cols-2 gap-5 mt-4">
                  {[
                    {
                      title: "We stay through execution",
                      body: "Most advisors deliver a recommendation and leave. We stay engaged until the recommendation is producing measurable results.",
                    },
                    {
                      title: "Honest scope from day one",
                      body: "We tell you when the problem is smaller — or larger — than you think. We scope to match the actual work.",
                    },
                    {
                      title: "Specialists, not generalists",
                      body: "Every team member has direct experience in this specific area, not just the parent department.",
                    },
                    {
                      title: "Outcomes, not outputs",
                      body: "We define success in terms that connect to your business: revenue, cost, speed, risk. Not deliverables billed.",
                    },
                  ].map((point, i) => (
                    <div
                      key={i}
                      className="border border-slate-200/60 rounded-xl p-5 bg-white hover:shadow-sm transition-all"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `${accent}20` }}
                        >
                          <CheckCircleIcon
                            size={11}
                            style={{ color: accent }}
                          />
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm">
                          {point.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed pl-7">
                        {point.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3 — What You Get */}
            {activeTab === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-black text-slate-900">
                  What You Get from a {subDept.name} Engagement
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
                  Every {subDept.name} engagement includes the following
                  deliverables. Scope is confirmed in writing before work
                  begins.
                </p>
                {subDept.whatYouGet && subDept.whatYouGet.length > 0 ? (
                  <div className="grid sm:grid-cols-2 gap-3">
                    {subDept.whatYouGet.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100"
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: `${accent}15` }}
                        >
                          <CheckCircleIcon
                            size={11}
                            style={{ color: accent }}
                          />
                        </div>
                        <span className="text-sm text-slate-700 font-medium leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-3">
                    {(dept.services || []).map((s, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100"
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: `${accent}15` }}
                        >
                          <CheckCircleIcon
                            size={11}
                            style={{ color: accent }}
                          />
                        </div>
                        <span className="text-sm text-slate-700 font-medium">
                          {s}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── WHO IT'S FOR (FULL SECTION) ─── */}
      {subDept.whoItsFor && (
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span
                  className="text-xs font-bold uppercase tracking-widest block"
                  style={{ color: accent }}
                >
                  Right Fit
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Is This Engagement Right for You?
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {subDept.whoItsFor}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-105"
                  style={{ background: accent }}
                >
                  Discuss Your Situation <ArrowRightIcon />
                </Link>
              </div>
              <div className="lg:col-span-7 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden">
                <div
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-5"
                  style={{ background: accent }}
                />
                <div className="relative z-10 space-y-7">
                  <h3 className="text-xl font-black">Engagement Principles</h3>
                  <div className="space-y-4">
                    {[
                      {
                        n: "01",
                        t: "Structured Discovery",
                        b: "Every engagement begins with a thorough discovery phase — mapping your environment, constraints, and success metrics before any work starts.",
                      },
                      {
                        n: "02",
                        t: "Design Before Execution",
                        b: "We produce a detailed plan before executing. Zero surprises, no scope creep without your sign-off.",
                      },
                      {
                        n: "03",
                        t: "Embedded Delivery",
                        b: "Our team works alongside yours, not in isolation. Knowledge transfers throughout, not just at handover.",
                      },
                      {
                        n: "04",
                        t: "Independent After Us",
                        b: "Full documentation and training so you can operate everything we build without calling us for every question.",
                      },
                    ].map((phase, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <span className="text-xs font-black opacity-50 mt-0.5">
                          {phase.n}
                        </span>
                        <div>
                          <p className="text-sm font-bold text-white/90 mb-0.5">
                            {phase.t}
                          </p>
                          <p className="text-xs text-white/60 leading-relaxed">
                            {phase.b}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── WHAT YOU GET (FULL DELIVERABLES) ─── */}
      {subDept.whatYouGet && subDept.whatYouGet.length > 0 && (
        <section className="py-24 bg-slate-50/40 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <span
                className="text-xs font-bold uppercase tracking-widest mb-2 block"
                style={{ color: accent }}
              >
                Deliverables
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                What You Walk Away With
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Every item below is agreed in writing before the engagement
                begins. You know exactly what you are buying.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {subDept.whatYouGet.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 bg-white border border-slate-200/60 rounded-2xl hover:shadow-md transition-all group"
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${accent}15`, color: accent }}
                  >
                    <CheckCircleIcon size={16} style={{ color: accent }} />
                  </div>
                  <span className="text-sm text-slate-800 font-semibold leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── HOW WE DELIVER (FULL SECTION) ─── */}
      {subDept.howWeDeliver && (
        <section className="py-24 bg-slate-900 overflow-hidden relative">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 50%, white 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl mb-14">
              <span
                className="text-xs font-bold uppercase tracking-widest mb-3 block"
                style={{ color: accent }}
              >
                Our Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
                How We Deliver {subDept.name}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {subDept.howWeDeliver}
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-[19px] sm:left-[23px] top-0 bottom-0 w-px bg-slate-700 hidden sm:block" />
              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Discovery & Scoping",
                    dur: "Week 1–2",
                    desc: "We map your current state, document constraints, agree on success metrics, and produce a delivery plan with your team before any execution begins.",
                  },
                  {
                    step: "02",
                    title: "Design & Blueprint",
                    dur: "Week 2–3",
                    desc: "A detailed implementation plan is produced and reviewed with stakeholders. Zero surprises — you know exactly what we are building before we build it.",
                  },
                  {
                    step: "03",
                    title: "Phased Execution",
                    dur: "Week 3–6",
                    desc: "Delivery happens in tested increments. Each phase is validated before the next begins, keeping quality high and risk low throughout.",
                  },
                  {
                    step: "04",
                    title: "Handover & Enablement",
                    dur: "Week 6+",
                    desc: "Full documentation, team training, and a hypercare period ensure your team can operate and extend everything we deliver independently.",
                  },
                ].map((phase, i) => (
                  <div
                    key={i}
                    className="flex gap-6 sm:gap-10 items-start group/phase"
                  >
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 relative z-10 border-2 transition-all"
                      style={{
                        background: `${accent}20`,
                        color: accent,
                        borderColor: `${accent}40`,
                      }}
                    >
                      {phase.step}
                    </div>
                    <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 flex-grow group-hover/phase:border-slate-600 transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h3 className="text-white font-bold text-base sm:text-lg">
                          {phase.title}
                        </h3>
                        <span
                          className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md flex-shrink-0"
                          style={{ background: `${accent}15`, color: accent }}
                        >
                          {phase.dur}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {phase.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── PARTNERSHIP SECTION ─── */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex px-3 py-1 bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold rounded-lg uppercase tracking-wide">
                Partnership Philosophy
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-[1.15]">
                Why Organizations Choose Improx Group
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We are not a vendor handing over a solution. We are a partner
                invested in your success, accountable for outcomes, and
                committed to leaving you stronger after we leave.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    label: "Outcomes-first",
                    desc: "Measured by business impact, not activity or hours billed.",
                  },
                  {
                    label: "Deep specialization",
                    desc: "Domain experts, not generalists deployed across any engagement.",
                  },
                  {
                    label: "Hands-on engagement",
                    desc: "We work alongside your team, not in isolation from them.",
                  },
                  {
                    label: "Transparent partnership",
                    desc: "Clear scope, honest assessments, and no hidden fees.",
                  },
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                      style={{ background: `${accent}15` }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: accent }}
                      />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">
                        {point.label}
                      </div>
                      <div className="text-slate-600 text-xs leading-relaxed">
                        {point.desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden min-h-[500px]">
              <img
                src={images[1] || images[0]}
                alt="Partnership"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
                  <p className="text-white font-bold text-base mb-1">
                    {subDept.name}
                  </p>
                  <p className="text-white/70 text-xs leading-relaxed">
                    {dept.tagline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RELATED SUB-DEPARTMENTS ─── */}
      {dept.subDepartments.filter((s) => s.slug !== subSlug).length > 0 && (
        <section className="py-20 bg-slate-50/30 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-slate-400 font-semibold uppercase tracking-widest text-xs mb-2">
                Related Services
              </p>
              <h2 className="text-2xl font-black text-slate-900">
                More in {dept.name}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {dept.subDepartments
                .filter((s) => s.slug !== subSlug)
                .slice(0, 3)
                .map((related, i) => (
                  <Link
                    key={i}
                    to={`/departments/${dept.slug}/${related.slug}`}
                    className="group flex items-start gap-4 p-5 border border-slate-200/60 rounded-2xl bg-white hover:border-slate-300 hover:shadow-md transition-all"
                  >
                    {/* <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{ background: `${accent}10` }}
                    >
                      {dept.icon || '💼'}
                    </div> */}
                    <div className="flex-grow min-w-0">
                      <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-slate-700 transition-colors">
                        {related.name}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {related.desc
                          ? related.desc.split(".")[0] + "."
                          : `Specialized ${related.name} services under ${dept.name}.`}
                      </p>
                    </div>
                    <ArrowRightIcon
                      size={14}
                      className="text-slate-400 group-hover:text-slate-700 flex-shrink-0 mt-1 transition-colors"
                    />
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
