import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import DepartmentPage from "./pages/DepartmentPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import SubDepartmentPage from './pages/SubDepartmentPage';

// ─── GLOBAL SCROLL RESET LIFECYCLE LISTENER ───
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly force scroll parameters to coordinate origin on pathname change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      {/* Listens globally inside the router scope */}
      <ScrollToTop />
      
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/departments/:slug" element={<DepartmentPage />} />
          
          {/* Moved ABOVE the NotFoundPage route & changed parameter to :deptSlug */}
          <Route
            path="/departments/:deptSlug/:subSlug"
            element={<SubDepartmentPage />}
          />

          <Route path="/contact" element={<ContactPage />} />
          
          {/* ALWAYS keep the catch-all * route at the very bottom */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}