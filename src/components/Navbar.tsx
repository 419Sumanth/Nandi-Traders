import React, { useState } from 'react';
import { Page } from '../types.ts';
import { NandiLogo } from './NandiLogo.tsx';
import { PhoneCall, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 4 pages strictly in Kannada
  const navItems: { label: string; page: Page }[] = [
    { label: 'ಮುಖಪುಟ', page: 'home' },
    { label: 'ನಮ್ಮ ಬಗ್ಗೆ', page: 'about' },
    { label: 'ನಾವು ಮಾಡುವ ಕೆಲಸ', page: 'what-we-do' },
    { label: 'ಸಂಪರ್ಕಿಸಿ', page: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-emerald-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Logo & Brand in left corner */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-lg py-1 transition-opacity hover:opacity-90"
            aria-label="ನಂದಿ ಟ್ರೇಡರ್ಸ್ ಮುಖಪುಟ"
          >
            <NandiLogo size="md" />
          </button>

          {/* Zone 2: Navigation Links (Kannada, single line, clean typography) */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`relative text-sm font-semibold tracking-wide whitespace-nowrap transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded ${
                    isActive
                      ? 'text-emerald-700'
                      : 'text-slate-600 hover:text-emerald-800'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-emerald-950 bg-emerald-100/90 hover:bg-emerald-200 border border-emerald-200/80 rounded-xl shadow-xs hover:shadow transition-all duration-200 active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-700" />
              <span>ಶಿರಸಿ ಮಂಡಿ ಡೆಸ್ಕ್</span>
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg"
              aria-label="ಮೆನು ತೆರೆಯಿರಿ"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-emerald-100 bg-white px-4 pt-2 pb-6 space-y-2 shadow-xl">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-800 border-l-4 border-emerald-600'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors shadow-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>ಶಿರಸಿ ಮಂಡಿ ಸಂಪರ್ಕಿಸಿ</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
