import React from 'react';
import { Page } from '../types.ts';
import {
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  Scale,
  Sparkles,
  Flame,
  CheckCircle,
  Layers,
  MapPin,
  ExternalLink,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* SECTION 1: CEO MESSAGE & CEO IMAGE (As per Sketch 1 Section 1) */}
      <section className="relative pt-6 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Subtle agricultural location badge in light green */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs text-emerald-900 font-semibold mb-6 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>ಪ್ರಧಾನ ಕಚೇರಿ: ಶಿರಸಿ, ಉತ್ತರ ಕನ್ನಡ ಜಿಲ್ಲೆ · ಮಲೆನಾಡಿನ ಅಡಿಕೆ ರಾಜಧಾನಿ</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: CEO Paragraphs in Kannada */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase">
                  ಸಂಸ್ಥಾಪಕರ ಮಾತುಗಳು (From The CEO's Desk)
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  ಪಶ್ಚಿಮ ಘಟ್ಟದ ಅಡಿಕೆ ಕೃಷಿಕರ ಶ್ರಮಕ್ಕೆ ಪ್ರಾಮಾಣಿಕ ಮೌಲ್ಯ ಮತ್ತು ವೈಜ್ಞಾನಿಕ ಸಂಸ್ಕರಣೆ
                </h1>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
                <p>
                  "ನಂದಿ ಟ್ರೇಡರ್ಸ್‌ಗೆ ಆತ್ಮೀಯ ಸ್ವಾಗತ. ಮಲೆನಾಡಿನ ಹಚ್ಚಹಸಿರಿನ ಅಡಿಕೆ ತೋಟಗಳ ಹೃದಯಭಾಗವಾದ ಶಿರಸಿಯಲ್ಲಿ ನಮ್ಮ ಈ ಪಯಣ ಆರಂಭವಾಯಿತು. ಮಳೆ-ಗಾಳಿಯನ್ನು ಲೆಕ್ಕಿಸದೆ ಎಪ್ಪತ್ತು ಅಡಿ ಎತ್ತರದ ಅಡಿಕೆ ಮರಗಳನ್ನು ಏರಿ ಕಷ್ಟಪಡುವ ಪ್ರತಿಯೊಬ್ಬ ಕೃಷಿಕನಿಗೂ ಆತನ ಬೆಳೆಯ ಪ್ರತಿಯೊಂದು ಪೈಸೆ ನ್ಯಾಯಯುತವಾಗಿ ತಲುಪಬೇಕು ಎಂಬುದು ನಮ್ಮ ಪ್ರಮುಖ ಧ್ಯೇಯವಾಗಿದೆ. ಕಳೆದ ಮೂರೂವರೆ ದಶಕಗಳಿಂದ ನಾವು ಸಾಂಪ್ರದಾಯಿಕ ಕೃಷಿಕರು ಹಾಗೂ ದೇಶದ ಅಗ್ರಗಣ್ಯ ಕೈಗಾರಿಕಾ ಮಾರುಕಟ್ಟೆಯ ನಡುವೆ ನಂಬಿಕಾರ್ಹ ಕೊಂಡಿಯಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದ್ದೇವೆ."
                </p>
                <p>
                  "ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲದ ನೇರ ಖರೀದಿ, ನಿಖರವಾದ ಡಿಜಿಟಲ್ ತೇವಾಂಶ ಪರೀಕ್ಷೆ, ಕಂಪ್ಯೂಟರೀಕೃತ ತೂಕ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ನೈಸರ್ಗಿಕ ಚೊಗರಿನ ಬೇಯಿಸುವ ವಿಧಾನದ ಮೂಲಕ ನಾವು ಅಡಿಕೆ ವ್ಯಾಪಾರವನ್ನು ಅತ್ಯಂತ ಪಾರದರ್ಶಕಗೊಳಿಸಿದ್ದೇವೆ. ನಂದಿ ಟ್ರೇಡರ್ಸ್‌ನಲ್ಲಿ ಯಾವುದೇ ಅನ್ಯಾಯದ ಕಡಿತಗಳಿಲ್ಲದೆ, ಹರಾಜು ಮುಗಿದ ದಿನವೇ ರೈತರ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ನೇರ ಹಣ ಸಂದಾಯವನ್ನು ಖಾತರಿಪಡಿಸುತ್ತೇವೆ."
                </p>
                <p className="text-sm text-emerald-900 font-medium italic border-l-4 border-emerald-600 bg-emerald-50/60 p-3 rounded-r-xl">
                  "ನಮ್ಮ ಸಂಸ್ಥೆಯ 'ನಂದಿ' ಲಾಂಛನವು ಬಲ, ಪ್ರಾಮಾಣಿಕತೆ ಮತ್ತು ಕೃಷಿಕರ ಬಗೆಗಿನ ನಿಷ್ಠೆಯ ಪ್ರತೀಕವಾಗಿದೆ. ನೀವು ನಮಗೆ ನೀಡುವ ಅಡಿಕೆ ಕೇವಲ ಕೃಷಿ ಬೆಳೆಯಲ್ಲ, ನಿಮ್ಮ ಬೆವರ ಹನಿಯ ಫಲ ಎಂಬ ಗೌರವ ನಮಗಿದೆ."
                </p>
              </div>

              {/* CEO signature lockup */}
              <div className="pt-4 flex items-center justify-between border-t border-slate-200">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-wide">
                    ಪ್ರಕಾಶ್ ಭಟ್ (Prakash Bhat)
                  </h3>
                  <p className="text-xs text-emerald-800 font-semibold">
                    ಸಂಸ್ಥಾಪಕರು ಮತ್ತು ಮುಖ್ಯ ಕಾರ್ಯನಿರ್ವಾಹಕ ಅಧಿಕಾರಿ (CEO & MD)
                  </p>
                  <p className="text-xs text-slate-500">
                    ೩೫+ ವರ್ಷಗಳ ಅಡಿಕೆ ಸಂಸ್ಕರಣೆ ಮತ್ತು ಎಪಿಎಂಸಿ ವಹಿವಾಟಿನ ಅನುಭವ
                  </p>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    ಶಿರಸಿ ಎಪಿಎಂಸಿ ಸದಸ್ಯತ್ವ: ೧೯೮೯/೪೪
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Footballer CEO Image (Direct image, easily editable in code) */}
            <div className="lg:col-span-5">
              <div className="relative group rounded-3xl bg-white p-4 sm:p-5 border border-emerald-200/90 shadow-xl overflow-hidden">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-100 border border-emerald-100 shadow-inner">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/800px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"
                    alt="ಪ್ರಕಾಶ್ ಭಟ್ - ಸಿಇಒ (Prakash Bhat)"
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback if network blocked
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-800 text-white font-bold text-[11px] shadow">
                    ಸಿಇಒ (CEO)
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm p-3 rounded-xl border border-emerald-100 text-center shadow-xs">
                    <p className="text-slate-900 font-bold text-sm">ಪ್ರಕಾಶ್ ಭಟ್ (Prakash Bhat)</p>
                    <p className="text-xs text-emerald-700 font-medium">ಮುಖ್ಯ ಕಾರ್ಯನಿರ್ವಾಹಕ ಅಧಿಕಾರಿ (CEO & MD)</p>
                  </div>
                </div>

                <div className="mt-3 px-2 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 text-emerald-800 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    ಶಿರಸಿ ಎಪಿಎಂಸಿ ಸದಸ್ಯತ್ವ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT THE COMPANY & THREE BOXES (As per Sketch 1 Section 2) */}
      <section className="relative py-12 bg-emerald-50/40 border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 px-3 py-1 rounded-full bg-white border border-emerald-200">
              ವಿಭಾಗ ೨ · ನಂದಿ ಟ್ರೇಡರ್ಸ್ ಸಂಸ್ಥೆಯ ಪರಿಚಯ
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              ಶಿರಸಿಯಲ್ಲಿ ಬೇರೂರಿ, ಕರ್ನಾಟಕದ ಕೃಷಿಕರಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಾ ದೇಶಾದ್ಯಂತ ಪೂರೈಕೆ
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              ಉತ್ತರ ಕನ್ನಡ ಜಿಲ್ಲೆಯ ಪ್ರಸಿದ್ಧ ಅಡಿಕೆ ಮಾರುಕಟ್ಟೆಯಾದ ಶಿರಸಿಯಲ್ಲಿ ಸ್ಥಾಪಿತವಾದ ನಂದಿ ಟ್ರೇಡರ್ಸ್, ಇಂದು ದಕ್ಷಿಣ ಭಾರತದ ಪ್ರಮುಖ ಸಂಸ್ಕರಣಾ ಕೇಂದ್ರಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಮಲೆನಾಡಿನ ಸಾಂಪ್ರದಾಯಿಕ ಕೃಷಿ ಸಂಸ್ಕೃತಿ ಮತ್ತು ಆಧುನಿಕ ಸಿಪ್ಪೆ ಸುಲಿಯುವ ಯಂತ್ರಗಳು, ಬೃಹತ್ ಒಣಗಿಸುವ ಅಂಗಳಗಳು ಮತ್ತು ಎಫ್‌ಎಸ್‌ಎಸ್‌ಎಐ ನಿಯಮಾವಳಿಗಳೊಂದಿಗೆ ನಾವು ಉನ್ನತ ಗುಣಮಟ್ಟದ ಅಡಿಕೆಯನ್ನು ಮಾರುಕಟ್ಟೆಗೆ ನೀಡುತ್ತಿದ್ದೇವೆ.
            </p>
          </div>

          {/* Three Boxes Below in Kannada (Exact requirement from user sketch 1) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Box 1: 10,000+ Happy Customers / Farmers */}
            <div className="rounded-2xl bg-white p-6 sm:p-8 border border-emerald-200/90 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-mono">
                    ೧೦,೦೦೦+
                  </span>
                  <span className="text-xs font-bold uppercase text-emerald-800 tracking-wider">
                    ನೋಂದಾಯಿತ
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  ಸಂತೃಪ್ತ ಕೃಷಿಕರು ಮತ್ತು ಗ್ರಾಹಕರು
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  ಶಿರಸಿ, ಸಿದ್ದಾಪುರ, ಯಲ್ಲಾಪುರ ಹಾಗೂ ಕರಾವಳಿ ಭಾಗದ ಹತ್ತು ಸಾವಿರಕ್ಕೂ ಅಧಿಕ ಕೃಷಿಕರು ನಿಖರವಾದ ಡಿಜಿಟಲ್ ತೂಕ ಹಾಗೂ ನೇರ ಬ್ಯಾಂಕ್ ಜಮೆಯ ನಂಬಿಕೆಯೊಂದಿಗೆ ನಮ್ಮೊಂದಿಗೆ ಕೈಜೋಡಿಸಿದ್ದಾರೆ.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>ನೇರ ತೋಟದ ಸಂಗ್ರಹಣೆ</span>
                <span className="text-emerald-700 font-bold">ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲ</span>
              </div>
            </div>

            {/* Box 2: 35+ Years & 25,000 MT Annual Capacity */}
            <div className="rounded-2xl bg-white p-6 sm:p-8 border border-emerald-200/90 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-mono">
                    ೨೫,೦೦೦ MT
                  </span>
                  <span className="text-xs font-bold uppercase text-emerald-800 tracking-wider">
                    ವಾರ್ಷಿಕ ಸಾಮರ್ಥ್ಯ
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  ೩೫+ ವರ್ಷಗಳ ಉದ್ಯಮ ನಂಬಿಕೆ
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  ಮೂರೂವರೆ ದಶಕಗಳ ಸುದೀರ್ಘ ಅನುಭವ. ಶಿರಸಿಯಲ್ಲಿ ೪೫,೦೦೦ ಚದರ ಅಡಿ ವಿಸ್ತೀರ್ಣದ ಸ್ವಚ್ಛ ಕಾಂಕ್ರೀಟ್ ಒಣಗಿಸುವ ಅಂಗಳಗಳು ಮತ್ತು ಪರಿಸರಸ್ನೇಹಿ ಯಾಂತ್ರಿಕ ಡ್ರೈಯರ್ ವ್ಯವಸ್ಥೆ.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>ಶಿರಸಿ ಎಪಿಎಂಸಿ ಮಾನ್ಯತೆ</span>
                <span className="text-emerald-700 font-bold">ಶೇ. ೧೦೦ ಗುಣಮಟ್ಟ</span>
              </div>
            </div>

            {/* Box 3: Good rate for arecanut (Highest Sirsi Mandi rate) */}
            <div className="rounded-2xl bg-white p-6 sm:p-8 border border-emerald-200/90 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-emerald-800 tracking-tight font-mono">
                    ಅಗ್ರ ದರ
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  ಅಡಿಕೆಗೆ ಅತ್ಯುತ್ತಮ ಮಾರುಕಟ್ಟೆ ಧಾರಣೆ
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  ಚಾಲಿ, ಬೆಟ್ಟೆ, ರಾಶಿ, ಚಿಕ್ನಿ ಮತ್ತು ಗೊರಬಲು ಅಡಿಕೆಗೆ ಮಾರುಕಟ್ಟೆಯ ಗರಿಷ್ಠ ಹರಾಜು ದರವನ್ನು ನಾವು ಖಾತರಿಪಡಿಸುತ್ತೇವೆ. ಪ್ರಮುಖ ಕಂಪನಿಗಳೊಂದಿಗೆ ನೇರ ಒಪ್ಪಂದವಿರುವುದರಿಂದ ರೈತರಿಗೆ ಹೆಚ್ಚಿನ ಲಾಭ ಸಿಗುತ್ತದೆ.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>ದೈನಂದಿನ ಹರಾಜು ಸ್ಪರ್ಧೆ</span>
                <span className="text-emerald-700 font-bold">ಆರ್‌ಟಿಜಿಎಸ್ ಪಾವತಿ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE DO SHOWCASE & BUTTON TO PAGE (As per Sketch 1 Section 3) */}
      <section className="relative py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white p-8 sm:p-12 border border-emerald-200/90 shadow-xl space-y-8">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                <Layers className="w-4 h-4 text-emerald-700" />
                <span>ವಿಭಾಗ ೩ · ನಮ್ಮ ಸೇವೆಗಳು ಮತ್ತು ಸಾಮರ್ಥ್ಯ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                "ನಾವು ನಿಮ್ಮ ಅಡಿಕೆಯನ್ನು ಉತ್ತಮ ಬೆಲೆಗೆ ಖರೀದಿಸಿ, ಸಂಸ್ಕರಿಸಿ ಮಾರಾಟ ಮಾಡುತ್ತೇವೆ"
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                ಮಲೆನಾಡಿನ ತೋಟಗಳಿಂದ ತಾಜಾ ಅಡಿಕೆಯನ್ನು ಸಂಗ್ರಹಿಸುವುದರಿಂದ ಹಿಡಿದು, ನೈಸರ್ಗಿಕ ಚೊಗರಿನಲ್ಲಿ ಬೇಯಿಸಿ, ಬಿಸಿಲಿನಲ್ಲಿ ಒಣಗಿಸಿ, ಗ್ರೇಡಿಂಗ್ ಮಾಡಿ ಭಾರತದ ಪ್ರಮುಖ ಸಂಸ್ಥೆಗಳಿಗೆ ಪೂರೈಸುವ ಸಮಗ್ರ ಸೇವೆ.
              </p>
            </div>

            {/* Core Services Grid in Kannada */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-emerald-200 text-emerald-800 flex items-center justify-center font-bold shadow-xs">
                  <Scale className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">೧. ನೇರ ತೋಟ ಖರೀದಿ</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ರೈತರ ತೋಟದ ಬಾಗಿಲಲ್ಲೇ ಅಥವಾ ಶಿರಸಿ ಎಪಿಎಂಸಿ ಅಂಗಳದಲ್ಲಿ ಕಂಪ್ಯೂಟರೀಕೃತ ನಿಖರ ತೂಕದೊಂದಿಗೆ ಹಸಿ ಮತ್ತು ಒಣ ಅಡಿಕೆ ಖರೀದಿ.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-emerald-200 text-emerald-800 flex items-center justify-center font-bold shadow-xs">
                  <Flame className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">೨. ವೈಜ್ಞಾನಿಕ ಬೇಯಿಸುವಿಕೆ</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ಶುದ್ಧ ತಾಮ್ರದ ಬಾಯ್ಲರ್‌ಗಳಲ್ಲಿ ಕೃತಕ ಬಣ್ಣಗಳಿಲ್ಲದೆ ಸಾಂಪ್ರದಾಯಿಕ ನೈಸರ್ಗಿಕ ಅಡಿಕೆ ಚೊಗರಿನಿಂದಲೇ ಆಕರ್ಷಕ ಕೆಂಪು ಬಣ್ಣ ತರಿಸುವುದು.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-emerald-200 text-emerald-800 flex items-center justify-center font-bold shadow-xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">೩. ಬಿಸಿಲು ಮತ್ತು ಡ್ರೈಯರ್ ಒಣಗಿಸುವಿಕೆ</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ೪೫,೦೦೦ ಚದರ ಅಡಿ ಸ್ವಚ್ಛ ಅಂಗಳಗಳಲ್ಲಿ ೪೦ ದಿನಗಳ ನೈಸರ್ಗಿಕ ಸೂರ್ಯನ ಬೆಳಕು ಮತ್ತು ಅಗತ್ಯವಿದ್ದಲ್ಲಿ ತೇವಾಂಶ ನಿಯಂತ್ರಿತ ಡ್ರೈಯರ್ ವ್ಯವಸ್ಥೆ.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-emerald-200 text-emerald-800 flex items-center justify-center font-bold shadow-xs">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">೪. ಹೈಟೆಕ್ ಗ್ರೇಡಿಂಗ್</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ಚಾಲಿ, ಬೆಟ್ಟೆ, ರಾಶಿ, ಚಿಕ್ನಿ ಮತ್ತು ಗೊರಬಲು ಗ್ರೇಡ್‌ಗಳನ್ನು ಯಾಂತ್ರಿಕವಾಗಿ ಪ್ರತ್ಯೇಕಿಸಿ ತೇವಾಂಶ ಮುಕ್ತ ಪ್ಯಾಕಿಂಗ್ ಮಾಡುವುದು.
                </p>
              </div>
            </div>

            {/* Navigation Button to What We Do Page (As per Sketch 1) */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-100">
              <div className="text-sm text-slate-600">
                ಅಡಿಕೆ ಬೆಳೆಯುವ ಹವಾಮಾನ, ಮಣ್ಣು ಹಾಗೂ ೬ ಹಂತಗಳ ಸಂಸ್ಕರಣಾ ಪ್ರಕ್ರಿಯೆಯನ್ನು ವಿವರವಾಗಿ ತಿಳಿಯಲು ಬಯಸುವಿರಾ?
              </div>
              <button
                onClick={() => {
                  onNavigate('what-we-do');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 px-8 py-3.5 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-md transition-all duration-200 active:scale-95 group shrink-0"
              >
                <span>ನಾವು ಮಾಡುವ ಕೆಲಸ - ವಿವರಗಳನ್ನು ಓದಿ</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
