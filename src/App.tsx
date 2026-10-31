import React, { useState, useEffect } from 'react';
import { Page } from './types.ts';
import { ImageProvider } from './context/ImageContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { BackgroundPattern } from './components/BackgroundPattern.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { WhatWeDoPage } from './pages/WhatWeDoPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Sync with window.location.hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (['home', 'about', 'what-we-do', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ImageProvider>
      <div className="min-h-screen relative flex flex-col font-sans bg-white text-slate-900 overflow-x-hidden selection:bg-emerald-100 selection:text-emerald-950">
        {/* Subtle white & light green watermark backdrop */}
        <BackgroundPattern />

        {/* Identical Header across all pages in Kannada */}
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

        {/* Dynamic Page Views */}
        <main className="relative z-10 flex-1">
          {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'what-we-do' && <WhatWeDoPage />}
          {currentPage === 'contact' && <ContactPage />}
        </main>

        {/* Identical Footer across all pages in Kannada */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </ImageProvider>
  );
}
