import React from 'react';
import { Building2, ShieldCheck } from 'lucide-react';

interface BrandItem {
  id: string;
  name: string;
  nameKannada: string;
  categoryKannada: string;
  badgeBg: string;
  badgeText: string;
}

const BRANDS: BrandItem[] = [
  {
    id: 'vimal',
    name: 'VIMAL',
    nameKannada: 'ವಿಮಲ್ (VIMAL)',
    categoryKannada: 'ಪಾನ್ ಮಸಾಲಾ & ಏಲಕ್ಕಿ',
    badgeBg: 'bg-red-50 text-red-700 border-red-200',
    badgeText: 'ವಿಮಲ್',
  },
  {
    id: 'rmd',
    name: 'RMD',
    nameKannada: 'ಆರ್‌ಎಮ್‌ಡಿ (RMD)',
    categoryKannada: 'ಆರ್.ಎಂ. ಧಾರಿವಾಲ್ ಗ್ರೂಪ್',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    badgeText: 'ಆರ್‌ಎಮ್‌ಡಿ',
  },
  {
    id: 'madhu',
    name: 'MADHU',
    nameKannada: 'ಮಧು (MADHU)',
    categoryKannada: 'ಫ್ಲೇವರ್ಡ್ ಸುಪಾರಿ',
    badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    badgeText: 'ಮಧು',
  },
  {
    id: 'manikchand',
    name: 'MANIKCHAND',
    nameKannada: 'ಮಾಣಿಕ್‌ಚಂದ್',
    categoryKannada: 'ಸ್ಮೋಕ್‌ಲೆಸ್ ತಂಬಾಕು ಉತ್ಪಾದಕರು',
    badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
    badgeText: 'ಮಾಣಿಕ್‌ಚಂದ್',
  },
  {
    id: 'shikhar',
    name: 'SHIKHAR',
    nameKannada: 'ಶಿಖರ್ (SHIKHAR)',
    categoryKannada: 'ಪಾನ್ ಮಸಾಲಾ & ಜರ್ದಾ',
    badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
    badgeText: 'ಶಿಖರ್',
  },
  {
    id: 'dilbagh',
    name: 'DILBAGH',
    nameKannada: 'ದಿಲ್‌ಬಾಗ್ (DILBAGH)',
    categoryKannada: 'ಉತ್ತರ ಭಾರತ ಪ್ರಮುಖ ಬ್ರಾಂಡ್',
    badgeBg: 'bg-rose-50 text-rose-700 border-rose-200',
    badgeText: 'ದಿಲ್‌ಬಾಗ್',
  },
  {
    id: 'rajnigandha',
    name: 'RAJNIGANDHA',
    nameKannada: 'ರಜನೀಗಂಧ',
    categoryKannada: 'ಡಿಎಸ್ ಗ್ರೂಪ್ ಪ್ರೀಮಿಯಂ ಪಾನ್ ಮಸಾಲಾ',
    badgeBg: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    badgeText: 'ರಜನೀಗಂಧ',
  },
  {
    id: 'panparag',
    name: 'PAN PARAG',
    nameKannada: 'ಪಾನ್ ಪರಾಗ್',
    categoryKannada: 'ಕೊಠಾರಿ ಪ್ರಾಡಕ್ಟ್ಸ್ ಲಿಮಿಟೆಡ್',
    badgeBg: 'bg-orange-50 text-orange-700 border-orange-200',
    badgeText: 'ಪಾನ್ ಪರಾಗ್',
  },
  {
    id: 'goa',
    name: 'GOA',
    nameKannada: 'ಗೋವಾ ೧೦೦೦ (GOA)',
    categoryKannada: 'ಕರಾವಳಿ & ಪಶ್ಚಿಮ ವಲಯ',
    badgeBg: 'bg-teal-50 text-teal-700 border-teal-200',
    badgeText: 'ಗೋವಾ',
  },
  {
    id: 'kuber',
    name: 'KUBER',
    nameKannada: 'ಕುಬೇರ್ (KUBER)',
    categoryKannada: 'ಖೈನಿ & ಸುಪಾರಿ ಉತ್ಪನ್ನಗಳು',
    badgeBg: 'bg-slate-50 text-slate-700 border-slate-200',
    badgeText: 'ಕುಬೇರ್',
  },
  {
    id: 'kamla-pasand',
    name: 'KAMLA PASAND',
    nameKannada: 'ಕಮಲಾ ಪಸಂದ್',
    categoryKannada: 'ಪ್ರೀಮಿಯಂ ಪಾನ್ ಮಸಾಲಾ',
    badgeBg: 'bg-lime-50 text-lime-800 border-lime-200',
    badgeText: 'ಕಮಲಾ',
  },
];

export const BrandMarquee: React.FC<{ title?: string; subtitle?: string }> = ({
  title = 'ನಮ್ಮ ಸಾಂಸ್ಥಿಕ ಗ್ರಾಹಕರು ಮತ್ತು ಪ್ರಮುಖ ತಂಬಾಕು / ಪಾನ್ ಮಸಾಲಾ ಬ್ರಾಂಡ್‌ಗಳು',
  subtitle = 'ಶಿರಸಿಯ ಹೈ-ಗ್ರೇಡ್ ಸಂಸ್ಕರಿತ ಅಡಿಕೆ ಮತ್ತು ಸುಪಾರಿಯನ್ನು ಬಳಸುವ ಭಾರತದ ಅಗ್ರಗಣ್ಯ ಉತ್ಪಾದಕ ಸಂಸ್ಥೆಗಳು',
}) => {
  const duplicatedList = [...BRANDS, ...BRANDS];

  return (
    <section className="relative py-14 overflow-hidden bg-white border-y border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100">
          <Building2 className="w-3.5 h-3.5 text-emerald-700" />
          <span>ಕೈಗಾರಿಕಾ ಜಾಲ (Institutional Buyers)</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      {/* Edge gradient masks for smooth fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Marquee Row */}
      <div className="overflow-hidden flex">
        <div className="animate-marquee flex items-center gap-6 py-2">
          {duplicatedList.map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              className="flex-shrink-0 w-64 p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 group cursor-default"
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${brand.badgeBg}`}
                >
                  {brand.badgeText}
                </span>
                <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>ಖಚಿತ ಪೂರೈಕೆ</span>
                </div>
              </div>

              <div className="space-y-0.5">
                <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {brand.nameKannada}
                </h4>
                <p className="text-xs font-medium text-slate-600 truncate">
                  {brand.categoryKannada}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <span className="text-xs text-slate-500 font-medium">
          ಕಟ್ಟುನಿಟ್ಟಾದ ತೇವಾಂಶ ಮತ್ತು ಗುಣಮಟ್ಟದ ಮಾನದಂಡಗಳೊಂದಿಗೆ ನಿಯಮಿತ ಸರಬರಾಜು ಒಪ್ಪಂದಗಳು
        </span>
      </div>
    </section>
  );
};
