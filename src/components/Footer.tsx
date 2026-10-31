import React from 'react';
import { Page } from '../types.ts';
import { NandiLogo } from './NandiLogo.tsx';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-slate-50 text-slate-700 border-t border-emerald-100 pt-16 pb-12 overflow-hidden">
      {/* Light-green delicate top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand & Bio in Kannada */}
          <div className="space-y-4">
            <NandiLogo size="lg" />
            <p className="text-sm leading-relaxed text-slate-600 pt-2">
              ನಂದಿ ಟ್ರೇಡರ್ಸ್ ಶಿರಸಿಯ ಪ್ರಮುಖ ಅಡಿಕೆ ಖರೀದಿ ಹಾಗೂ ಅತ್ಯಾಧುನಿಕ ಸಂಸ್ಕರಣಾ ಸಂಸ್ಥೆಯಾಗಿದೆ. ಪಶ್ಚಿಮ ಘಟ್ಟದ ೧೦,೦೦೦ಕ್ಕೂ ಅಧಿಕ ಕೃಷಿಕರೊಂದಿಗೆ ಸಹಭಾಗಿತ್ವ ಹೊಂದಿದ್ದು, ಉತ್ಕೃಷ್ಟ ಗುಣಮಟ್ಟದ ಚಾಲಿ, ಬೆಟ್ಟೆ ಮತ್ತು ರಾಶಿ ಅಡಿಕೆಯನ್ನು ರಾಷ್ಟ್ರೀಯ ಮಾರುಕಟ್ಟೆಗೆ ಒದಗಿಸುತ್ತಿದ್ದೇವೆ.
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-emerald-800 font-bold block mb-1">
                ಎಪಿಎಂಸಿ ಶಿರಸಿ ಪರವಾನಗಿ
              </span>
              <span className="text-xs text-slate-500 font-mono">
                APMC/UKD/SRS/TR-1989/442 · GSTIN: 29AAEFN8841M1ZG
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links in Kannada */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-900 mb-4 flex items-center gap-2">
              <span>ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-emerald-700 transition-colors flex items-center gap-2 text-slate-600 hover:translate-x-1 duration-150"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>ಮುಖಪುಟ (Home)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-emerald-700 transition-colors flex items-center gap-2 text-slate-600 hover:translate-x-1 duration-150"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>ನಮ್ಮ ಬಗ್ಗೆ (About Us)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('what-we-do')}
                  className="hover:text-emerald-700 transition-colors flex items-center gap-2 text-slate-600 hover:translate-x-1 duration-150"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>ನಾವು ಮಾಡುವ ಕೆಲಸ (What We Do)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-emerald-700 transition-colors flex items-center gap-2 text-slate-600 hover:translate-x-1 duration-150"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>ಸಂಪರ್ಕಿಸಿ (Contact Us)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Sirsi Location in Kannada */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-900 mb-4">
              ಶಿರಸಿ ಸಂಸ್ಕರಣಾ ಅಂಗಳ ಮತ್ತು ವಿಳಾಸ
            </h4>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  ಪ್ಲಾಟ್ ನಂ. ೧೮-೨೨, ಎಪಿಎಂಸಿ ಮಾರುಕಟ್ಟೆ ಪ್ರಾಂಗಣ, ಹುಬ್ಬಳ್ಳಿ-ಶಿರಸಿ ಹೆದ್ದಾರಿ, ಶಿರಸಿ - ೫೮೧೪೦೧, ಉತ್ತರ ಕನ್ನಡ, ಕರ್ನಾಟಕ.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="tel:+918384226500" className="hover:text-emerald-700 font-mono text-xs">
                  +91 (08384) 226500 / +91 94481 44520
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="mailto:info@nanditraderssirsi.com" className="hover:text-emerald-700 text-xs">
                  contact@nanditraderssirsi.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs text-slate-500">
                  ಸೋಮವಾರ – ಶನಿವಾರ: ಬೆಳಗ್ಗೆ ೮:೦೦ ರಿಂದ ಸಂಜೆ ೭:೩೦ (ಹರಾಜು ದಿನಗಳು)
                </span>
              </div>
            </div>
          </div>

          {/* Col 4: Social Media Icons in Kannada */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-900 mb-4">
              ಸಾಮಾಜಿಕ ಜಾಲತಾಣಗಳು
            </h4>
            <p className="text-xs text-slate-500 mb-4">
              ದೈನಂದಿನ ಮಂಡಿ ದರಗಳು ಮತ್ತು ಅಡಿಕೆ ಹರಾಜಿನ ಮಾಹಿತಿಗಾಗಿ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ:
            </p>
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white hover:bg-emerald-600 text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-200 shadow-xs"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white hover:bg-emerald-600 text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-200 shadow-xs"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white hover:bg-emerald-600 text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-200 shadow-xs"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white hover:bg-emerald-600 text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-200 shadow-xs"
                aria-label="Twitter / X"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-emerald-50/80 border border-emerald-100 text-xs text-emerald-900">
              <span className="font-bold">ದೈನಂದಿನ ಹರಾಜು ಮಾಹಿತಿ:</span> ಚಾಲಿ, ಬೆಟ್ಟೆ ಮತ್ತು ರಾಶಿ ಅಡಿಕೆಯ ನೇರ ಹರಾಜು ದರಗಳಿಗಾಗಿ ಪ್ರತಿದಿನ ಮಧ್ಯಾಹ್ನ ೧೧ ರಿಂದ ೩ ಗಂಟೆಯವರೆಗೆ ಮಂಡಿಗೆ ಕರೆ ಮಾಡಿ.
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location tag in Kannada */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} ನಂದಿ ಟ್ರೇಡರ್ಸ್, ಶಿರಸಿ. ಸರ್ವ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ. ಉತ್ತರ ಕನ್ನಡ ಎಪಿಎಂಸಿ ನೋಂದಾಯಿತ ಸಂಸ್ಥೆ.</p>
          <div className="flex items-center gap-3">
            <span className="text-emerald-800 font-semibold">ಶಿರಸಿ · ಪಶ್ಚಿಮ ಘಟ್ಟದ ಅಡಿಕೆ ರಾಜಧಾನಿ</span>
            <span>·</span>
            <span>ರೈತಸ್ನೇಹಿ ಪಾರದರ್ಶಕತೆ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
