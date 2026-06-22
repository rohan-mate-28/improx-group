import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageLoader from './PageLoader';
import InquirySection from './InquirySection';
import ContactPage from '../pages/ContactPage'; // 1. Import the ContactPage

export default function Layout({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // 2. Check if the current route path is exactly the contact page
  const isContactPage = location.pathname === '/contact';

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <PageLoader />}

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        
        {/* 3. Only show InquirySection if we are NOT on the contact page */}
        {!isContactPage && <InquirySection />}
        
        {/* 4. Display ContactPage on every page */}
        
        
        <Footer />
      </div>
    </>
  );
}