import React from 'react';
import { TeamMember } from '../types.ts';
import { TestimonialCarousel } from '../components/TestimonialCarousel.tsx';
import { BrandMarquee } from '../components/BrandMarquee.tsx';
import {
  Compass,
  Target,
  ShieldCheck,
  CheckCircle,
  History,
} from 'lucide-react';

const TEAM_MEMBERS_KANNADA: TeamMember[] = [
  {
    id: 1,
    name: 'ಪ್ರಕಾಶ್ ಭಟ್ (Prakash Bhat)',
    role: 'ಸಂಸ್ಥಾಪಕರು ಮತ್ತು ಮುಖ್ಯ ಕಾರ್ಯನಿರ್ವಾಹಕ ಅಧಿಕಾರಿ (CEO & MD)',
    experience: '೩೫+ ವರ್ಷಗಳ ಅಡಿಕೆ ಉದ್ಯಮದ ಅನುಭವ',
    specialty: 'ಎಪಿಎಂಸಿ ಮಾರುಕಟ್ಟೆ ನಾಯಕತ್ವ & ಕಾರ್ಯತಂತ್ರ',
    bio: 'ಶಿರಸಿಯ ಸಾಂಪ್ರದಾಯಿಕ ಅಡಿಕೆ ಕೃಷಿಕ ಕುಟುಂಬದಲ್ಲಿ ಜನಿಸಿದ ಪ್ರಕಾಶ್ ಭಟ್ ಅವರು, ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲದೆ ರೈತರಿಗೆ ನೇರ ನ್ಯಾಯಯುತ ಬೆಲೆ ನೀಡುವ ಉದ್ದೇಶದಿಂದ ೧೯೮೯ ರಲ್ಲಿ ನಂದಿ ಟ್ರೇಡರ್ಸ್ ಸಂಸ್ಥೆಯನ್ನು ಆರಂಭಿಸಿದರು. ಉತ್ತರ ಕನ್ನಡ ಜಿಲ್ಲೆಯ ಮಂಡಿಗಳಲ್ಲಿ ಕಂಪ್ಯೂಟರೀಕೃತ ಡಿಜಿಟಲ್ ತೂಕವನ್ನು ಮೊದಲು ಪರಿಚಯಿಸಿದವರಲ್ಲಿ ಇವರು ಪ್ರಮುಖರು.',
    imageLabel: 'ಸಂಸ್ಥಾಪಕರು & ಸಿಇಒ',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/800px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg',
    imageAlt: 'ಪ್ರಕಾಶ್ ಭಟ್ (Prakash Bhat) - ಸಿಇಒ',
  },
  {
    id: 2,
    name: 'ಸುಯೋಗ್ ಭಟ್ (Suyog Bhat)',
    role: 'ತೋಟ ಸಂಗ್ರಹಣೆ ಮತ್ತು ಕೃಷಿಕ ಸಂಬಂಧಗಳ ಮುಖ್ಯಸ್ಥರು',
    experience: '೨೮ ವರ್ಷಗಳ ಕೃಷಿ ಕ್ಷೇತ್ರ ಅನುಭವ',
    specialty: 'ಅಡಿಕೆ ಕೊಯ್ಲು ಕಾಲ & ಮಣ್ಣಿನ ಸಲಹೆ',
    bio: 'ಶಿರಸಿ, ಸಿದ್ದಾಪುರ ಮತ್ತು ಯಲ್ಲಾಪುರ ಭಾಗದ ೧೦,೦೦೦ಕ್ಕೂ ಅಧಿಕ ಕೃಷಿಕರ ಜಾಲವನ್ನು ಸುಯೋಗ್ ಭಟ್ ನಿರ್ವಹಿಸುತ್ತಾರೆ. ಮಳೆಗಾಲದಲ್ಲಿ ಕೃಷಿಕರ ತೋಟಗಳಿಗೆ ಭೇಟಿ ನೀಡಿ, ಬೆಟ್ಟೆ ಮತ್ತು ಚಾಲಿಗೆ ಯೋಗ್ಯವಾದ ಹದವಾದ ಅಡಿಕೆಯನ್ನು ಗುರುತಿಸಿ ಕಟಾವು ಮಾಡಲು ಮಾರ್ಗದರ್ಶನ ನೀಡುವಲ್ಲಿ ಪರಿಣಿತರು.',
    imageLabel: 'ಸಂಗ್ರಹಣಾ ಮುಖ್ಯಸ್ಥರು',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg',
    imageAlt: 'ಸುಯೋಗ್ ಭಟ್ (Suyog Bhat)',
  },
  {
    id: 3,
    name: 'ಚರಣ್ ಭಟ್ (Charan Bhat)',
    role: 'ಗುಣಮಟ್ಟ ಪರೀಕ್ಷೆ ಮತ್ತು ಪ್ರಯೋಗಾಲಯದ ನಿರ್ದೇಶಕರು',
    experience: '೧೨ ವರ್ಷಗಳ ಆಹಾರ ತಂತ್ರಜ್ಞಾನ ಸಂಶೋಧನೆ',
    specialty: 'ಸ್ಪೆಕ್ಟ್ರೋಸ್ಕೊಪಿ, ತೇವಾಂಶ ನಿಯಂತ್ರಣ & ಎಫ್‌ಎಸ್‌ಎಸ್‌ಎಐ',
    bio: 'ಕೃಷಿ ಆಹಾರ ರಸಾಯನಶಾಸ್ತ್ರದಲ್ಲಿ ನುರಿತರಾಗಿರುವ ಚರಣ್ ಭಟ್, ನಂದಿ ಟ್ರೇಡರ್ಸ್‌ನ ಆಧುನಿಕ ಲ್ಯಾಬ್ ಅನ್ನು ಮುನ್ನಡೆಸುತ್ತಿದ್ದಾರೆ. ಡಿಜಿಟಲ್ ಎನ್‌ಐಆರ್ ತೇವಾಂಶ ಮಾಪಕಗಳ ಮೂಲಕ ಪ್ರತಿ ಬ್ಯಾಚ್ ಅಡಿಕೆಯಲ್ಲೂ ತೇವಾಂಶ ಶೇ. ೯.೫ ಕ್ಕಿಂತ ಕಡಿಮೆ ಇರುವುದನ್ನು ಮತ್ತು ಯಾವುದೇ ಶಿಲೀಂಧ್ರವಿಲ್ಲದಿರುವುದನ್ನು ಖಾತರಿಪಡಿಸುತ್ತಾರೆ.',
    imageLabel: 'ಗುಣಮಟ್ಟ ನಿರ್ದೇಶಕರು',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2019-06-11_Andorra_versus_France_022.jpg/800px-2019-06-11_Andorra_versus_France_022.jpg',
    imageAlt: 'ಚರಣ್ ಭಟ್ (Charan Bhat)',
  },
  {
    id: 4,
    name: 'ವಸಿಷ್ಠ ಭಟ್ (Vasishta Bhat)',
    role: 'ಸಂಸ್ಕರಣಾ ಅಂಗಳ ಮತ್ತು ಡ್ರೈಯರ್ ಕಾರ್ಯಾಚರಣೆಗಳ ಜಿಎಂ',
    experience: '೨೪ ವರ್ಷಗಳ ಮಾಸ್ಟರ್ ಪ್ರೊಸೆಸಿಂಗ್ ಅನುಭವ',
    specialty: 'ತಾಮ್ರದ ಬಾಯ್ಲರ್ ಬೇಯಿಸುವಿಕೆ & ಚೊಗರು ಹದ',
    bio: 'ನಂದಿ ಟ್ರೇಡರ್ಸ್‌ನ ಸಿಗ್ನೇಚರ್ ಕೆಂಪು ಅಡಿಕೆಯ ಹಿಂದಿನ ಪ್ರಮುಖ ರೂವಾರಿ ವಸಿಷ್ಠ ಭಟ್. ೪೫,೦೦೦ ಚದರ ಅಡಿ ವಿಸ್ತೀರ್ಣದ ಕಾಂಕ್ರೀಟ್ ಒಣಗಿಸುವ ಅಂಗಳ ಹಾಗೂ ಬೃಹತ್ ತಾಮ್ರದ ಪಾತ್ರೆಗಳಲ್ಲಿ ನೈಸರ್ಗಿಕ ಚೊಗರಿನ ಬೇಯಿಸುವಿಕೆಯನ್ನು ಹದವರಿತು ನಿರ್ವಹಿಸಿ, ಅಡಿಕೆಗೆ ನೈಸರ್ಗಿಕ ಕಡುಗೆಂಪು ಹೊಳಪು ತರುತ್ತಾರೆ.',
    imageLabel: 'ಅಂಗಳ ಮುಖ್ಯಸ್ಥರು',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/ISL-CRO_%287%29_%28cropped%29.jpg/800px-ISL-CRO_%287%29_%28cropped%29.jpg',
    imageAlt: 'ವಸಿಷ್ಠ ಭಟ್ (Vasishta Bhat)',
  },
  {
    id: 5,
    name: 'ಬಾಲಚಂದ್ರ ಭಟ್ (Balachandra Bhat)',
    role: 'ರಾಷ್ಟ್ರೀಯ ಸಾಂಸ್ಥಿಕ ಮಾರಾಟ & ಸಾರಿಗೆ ಮುಖ್ಯಸ್ಥರು',
    experience: '೨೦ ವರ್ಷಗಳ ಸರಕು ಸಾಗಣೆ & ಮಾರುಕಟ್ಟೆ ಒಪ್ಪಂದ',
    specialty: 'ಪ್ರಮುಖ ಪಾನ್ ಮಸಾಲಾ & ಗುಟ್ಕಾ ಬ್ರಾಂಡ್‌ಗಳ ಜತೆಗಿನ ಒಪ್ಪಂದ',
    bio: 'ಪಶ್ಚಿಮ ಘಟ್ಟದ ಶಿರಸಿಯಿಂದ ಗುಜರಾತ್, ಕಾನ್ಪುರ, ಮುಂಬೈ ಮತ್ತು ದೆಹಲಿಯ ಕೈಗಾರಿಕಾ ಕೇಂದ್ರಗಳಿಗೆ ಅಡಿಕೆ ಸರಬರಾಜು ಜಾಲವನ್ನು ಬಾಲಚಂದ್ರ ಭಟ್ ಮುನ್ನಡೆಸುತ್ತಾರೆ. ವಿಮಲ್, ಆರ್‌ಎಮ್‌ಡಿ, ಮಧು ಮುಂತಾದ ಪ್ರತಿಷ್ಠಿತ ಕಂಪನಿಗಳಿಗೆ ಸಾವಿರಾರು ಟನ್ ಅಡಿಕೆಯನ್ನು ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ರವಾನಿಸುತ್ತಾರೆ.',
    imageLabel: 'ಸಾರಿಗೆ & ಮಾರಾಟ ಮುಖ್ಯಸ್ಥರು',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Kevin_De_Bruyne_201807091.jpg/800px-Kevin_De_Bruyne_201807091.jpg',
    imageAlt: 'ಬಾಲಚಂದ್ರ ಭಟ್ (Balachandra Bhat)',
  },
  {
    id: 6,
    name: 'ಸುಮಂತ್ ಭಟ್ (Sumanth Bhat)',
    role: 'ಮುಖ್ಯ ಹಣಕಾಸು ಅಧಿಕಾರಿ & ರೈತರ ಪಾವತಿ ವಿಭಾಗ',
    experience: '೧೮ ವರ್ಷಗಳ ಗ್ರಾಮೀಣ ಬ್ಯಾಂಕಿಂಗ್ & ಲೆಕ್ಕಪತ್ರ',
    specialty: '೪ ಗಂಟೆಗಳಲ್ಲಿ ನೇರ ಆರ್‌ಟಿಜಿಎಸ್ ಬ್ಯಾಂಕ್ ಜಮೆ',
    bio: 'ರೈತರ ಹಣಕಾಸು ಪಾರದರ್ಶಕತೆಯಲ್ಲಿ ಸುಮಂತ್ ಭಟ್ ಅವರ ಪಾತ್ರ ಮಹತ್ವದ್ದು. ನಂದಿ ಟ್ರೇಡರ್ಸ್‌ನ ಡಿಜಿಟಲ್ ಪಾವತಿ ವ್ಯವಸ್ಥೆಯ ಮೂಲಕ, ಹರಾಜಿನಲ್ಲಿ ಅಡಿಕೆ ಮಾರಾಟವಾದ ೪ ಗಂಟೆಗಳ ಒಳಗೆ ಕೃಷಿಕರ ಖಾತೆಗೆ ಸಂಪೂರ್ಣ ಮೊತ್ತ ಜಮೆಯಾಗುವಂತೆ ನೋಡಿಕೊಳ್ಳುತ್ತಾರೆ.',
    imageLabel: 'ಹಣಕಾಸು ಮುಖ್ಯಸ್ಥರು',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Erling_Haaland_2023_%28cropped-v2%29.jpg/800px-Erling_Haaland_2023_%28cropped-v2%29.jpg',
    imageAlt: 'ಸುಮಂತ್ ಭಟ್ (Sumanth Bhat)',
  },
];

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
      {/* 1. COMPANY ESTABLISHMENT & ACHIEVEMENTS IN KANNADA */}
      <section className="relative pt-6 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs text-emerald-900 font-semibold shadow-xs">
              <History className="w-3.5 h-3.5 text-emerald-600" />
              <span>೧೯೮೯ ರಲ್ಲಿ ಸ್ಥಾಪನೆ · ಶಿರಸಿ, ಉತ್ತರ ಕನ್ನಡ</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              ೩೫+ ವರ್ಷಗಳ ವಿಶ್ವಾಸ, ಪ್ರಾಮಾಣಿಕ ಅಡಿಕೆ ವ್ಯಾಪಾರ ಮತ್ತು ಕೃಷಿಕ ಪರಂಪರೆ
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              ಭಾರತದ ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ ಪ್ರಮುಖ ಅಡಿಕೆ ವ್ಯಾಪಾರ ಕೇಂದ್ರವಾದ ಶಿರಸಿಯಲ್ಲಿ ೧೯೮೯ ರಲ್ಲಿ ನಂದಿ ಟ್ರೇಡರ್ಸ್ ಆರಂಭವಾಯಿತು. ಕೇವಲ ಒಂದು ಸಣ್ಣ ಮಂಡಿ ಮಳಿಗೆಯಿಂದ ಆರಂಭವಾದ ನಮ್ಮ ಸಂಸ್ಥೆ, ಇಂದು ದಕ್ಷಿಣ ಭಾರತದ ಅತಿದೊಡ್ಡ ಅಡಿಕೆ ಖರೀದಿ, ಸಂಸ್ಕರಣೆ, ಬಾಯ್ಲರ್ ಬೇಯಿಸುವಿಕೆ ಮತ್ತು ಕೈಗಾರಿಕಾ ಪೂರೈಕೆ ಜಾಲವಾಗಿ ಹೆಮ್ಮೆಯಿಂದ ಬೆಳೆದು ನಿಂತಿದೆ.
            </p>
          </div>

          {/* Key Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-emerald-200/80 shadow-xs space-y-2">
              <span className="text-xs uppercase tracking-wider text-emerald-800 font-bold block">
                ಸ್ಥಾಪನಾ ವರ್ಷ
              </span>
              <p className="text-2xl font-extrabold text-slate-900 font-mono">೧೯೮೯</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                ಶಿರಸಿ ಎಪಿಎಂಸಿ ಪರವಾನಗಿ ಸಂಖ್ಯೆ ೪೪ ರೊಂದಿಗೆ ಸ್ಥಾಪನೆ. ರೈತರ ಹಿತರಕ್ಷಣೆಯೇ ಮೂಲ ಮಂತ್ರ.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-emerald-200/80 shadow-xs space-y-2">
              <span className="text-xs uppercase tracking-wider text-emerald-800 font-bold block">
                ವಾರ್ಷಿಕ ಸಂಸ್ಕರಣೆ
              </span>
              <p className="text-2xl font-extrabold text-slate-900 font-mono">೨೫,೦೦೦+ MT</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                ಕೆಂಪು ಬೆಟ್ಟೆ, ಚಾಲಿ ಮತ್ತು ಬಿಳಿ ಅಡಿಕೆಯನ್ನು ವಾರ್ಷಿಕವಾಗಿ ಸಂಸ್ಕರಿಸುವ ಬೃಹತ್ ಸಾಮರ್ಥ್ಯ.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-emerald-200/80 shadow-xs space-y-2">
              <span className="text-xs uppercase tracking-wider text-emerald-800 font-bold block">
                ಬೆಳೆಗಾರರ ಜಾಲ
              </span>
              <p className="text-2xl font-extrabold text-slate-900 font-mono">೧೦,೦೦೦+ ಕೃಷಿಕರು</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                ಉತ್ತರ ಕನ್ನಡ, ಶಿವಮೊಗ್ಗ, ಚಿಕ್ಕಮಗಳೂರು ಮತ್ತು ಉಡುಪಿ ಜಿಲ್ಲೆಗಳ ಬೆಳೆಗಾರರ ಜತೆ ಒಡನಾಟ.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-emerald-200/80 shadow-xs space-y-2">
              <span className="text-xs uppercase tracking-wider text-emerald-800 font-bold block">
                ತೂಕ ಮತ್ತು ಪರೀಕ್ಷೆ
              </span>
              <p className="text-2xl font-extrabold text-slate-900 font-mono">ಶೇ. ೧೦೦ ಡಿಜಿಟಲ್</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                ಎನ್‌ಐಆರ್ ತೇವಾಂಶ ಮಾಪನ, ಕಂಪ್ಯೂಟರ್ ತೂಕ ಮತ್ತು ಎಫ್‌ಎಸ್‌ಎಸ್‌ಎಐ ಪ್ರಮಾಣೀಕರಣ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION (Real Agricultural Photography) */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Mission Section with Real Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-3xl bg-white p-8 sm:p-10 border border-emerald-200 shadow-sm">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                <Target className="w-4 h-4 text-emerald-700" />
                <span>ನಮ್ಮ ಧ್ಯೇಯೋದ್ದೇಶ (Our Mission)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                ಅಡಿಕೆ ಕೃಷಿಕರ ಬೆಲೆ ರಕ್ಷಣೆ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಸಂಸ್ಕರಣೆಗೆ ವಿಶ್ವದರ್ಜೆಯ ವೈಜ್ಞಾನಿಕ ರೂಪ
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                ಮಾರುಕಟ್ಟೆಯ ಮಧ್ಯವರ್ತಿಗಳ ಶೋಷಣೆಯಿಂದ ಕೃಷಿಕರನ್ನು ಮುಕ್ತಗೊಳಿಸಿ, ಅತ್ಯಂತ ಪಾರದರ್ಶಕ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ ವಹಿವಾಟು ವ್ಯವಸ್ಥೆಯನ್ನು ರೂಪಿಸುವುದು ನಮ್ಮ ಪ್ರಮುಖ ಧ್ಯೇಯವಾಗಿದೆ. ತೋಟದಲ್ಲಿ ಬೆಳೆದ ಗುಣಮಟ್ಟದ ಅಡಿಕೆಗೆ ವೈಜ್ಞಾನಿಕ ಮಾನದಂಡಗಳ ಆಧಾರದ ಮೇಲೆ ಗರಿಷ್ಠ ಬೆಲೆ ಒದಗಿಸುವುದೇ ನಮ್ಮ ಸಂಕಲ್ಪ.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ಕಂಪ್ಯೂಟರೀಕೃತ ತೂಕ ಮತ್ತು ನೈಜ ಸಮಯದ ಡಿಜಿಟಲ್ ತೂಕದ ರಸೀದಿ</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ಕೃತಕ ಬಣ್ಣಗಳಿಲ್ಲದೆ ಕೇವಲ ಶುದ್ಧ ಚೊಗರಿನಲ್ಲಿ ಬೇಯಿಸುವ ಸಾಂಪ್ರದಾಯಿಕ ಶುದ್ಧತೆ</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ಹರಾಜು ಮುಗಿದ ೪ ಗಂಟೆಗಳಲ್ಲಿ ಕೃಷಿಕರ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ನೇರ ಹಣ ಸಂದಾಯ</span>
                </div>
              </div>
            </div>

            {/* Mission Real Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-emerald-100 shadow-md group">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Areca_nut_tree_%28Betel_nut%29_in_Kerala_05.jpg/800px-Areca_nut_tree_%28Betel_nut%29_in_Kerala_05.jpg"
                  alt="ಪಶ್ಚಿಮ ಘಟ್ಟದ ಅಡಿಕೆ ತೋಟ ಮತ್ತು ಕಟಾವು (Mission)"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-emerald-100 text-xs text-slate-800 text-center font-medium shadow-xs">
                  ಪಶ್ಚಿಮ ಘಟ್ಟದ ಹಚ್ಚಹಸಿರಿನ ಅಡಿಕೆ ತೋಟ ಮತ್ತು ನೈಜ ಕಟಾವು
                </div>
              </div>
            </div>
          </div>

          {/* Vision Section with Real Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-3xl bg-white p-8 sm:p-10 border border-emerald-200 shadow-sm">
            {/* Vision Real Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-emerald-100 shadow-md group">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Betel_nut_drying.JPG/800px-Betel_nut_drying.JPG"
                  alt="ಅಡಿಕೆ ಒಣಗಿಸುವ ಅಂಗಳ ಮತ್ತು ಸಂಸ್ಕರಣೆ (Vision)"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-emerald-100 text-xs text-slate-800 text-center font-medium shadow-xs">
                  ಶಿರಸಿಯ ಬೃಹತ್ ಸೌರ ಅಡಿಕೆ ಒಣಗಿಸುವ ಅಂಗಳಗಳು
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                <Compass className="w-4 h-4 text-emerald-700" />
                <span>ನಮ್ಮ ಭವಿಷ್ಯದ ದೂರದೃಷ್ಟಿ (Our Vision)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                ಭಾರತದ ಅತ್ಯಂತ ನಂಬಿಕಾರ್ಹ ಹಾಗೂ ತಾಂತ್ರಿಕವಾಗಿ ಮುಂಚೂಣಿಯಲ್ಲಿರುವ ಅಡಿಕೆ ಸಂಸ್ಥೆಯಾಗುವುದು
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                ಶಿರಸಿಯ ಶುದ್ಧ ಅಡಿಕೆಯು ರಾಷ್ಟ್ರೀಯ ಮತ್ತು ಅಂತಾರಾಷ್ಟ್ರೀಯ ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಗುಣಮಟ್ಟದ ಅಳತೆಗೋಲಾಗಬೇಕು ಎಂಬುದು ನಮ್ಮ ಗುರಿ. ಪರಿಸರಸ್ನೇಹಿ ಸೌರಶಕ್ತಿ ಆಧಾರಿತ ಒಣಗಿಸುವ ತಂತ್ರಜ್ಞಾನ, ಯಾಂತ್ರಿಕ ದರ್ಜೀಕರಣ ಮತ್ತು ಹಸಿರು ಕೃಷಿ ಪದ್ಧತಿಗಳ ಮೂಲಕ ನಂದಿ ಟ್ರೇಡರ್ಸ್ ಭಾರತದ ಅಡಿಕೆ ಕೃಷಿ ರಂಗಕ್ಕೆ ಮಾದರಿಯಾಗಲಿದೆ.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>೧,೦೦,೦೦೦ ಚದರ ಅಡಿ ವಿಸ್ತೀರ್ಣದ ಸೌರಶಕ್ತಿ ಹಸಿರುಮನೆ ಡ್ರೈಯರ್ ಯೋಜನೆ</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ಮಲೆನಾಡಿನ ಪ್ರತ್ಯೇಕ ತೋಟಗಳಿಂದ ಅಡಿಕೆಯ ಮೂಲ ಪತ್ತೆಹಚ್ಚುವಿಕೆ (Single Origin Traceability)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ಅಡಿಕೆ ಸಿಪ್ಪೆಯಿಂದ ಜೈವಿಕ ಗೊಬ್ಬರ ತಯಾರಿಸುವ ಶೂನ್ಯ-ತ್ಯಾಜ್ಯ ಸಂಸ್ಕರಣೆ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR MEMBERS: EXACTLY 6 SECTIONS ALTERNATING WITH FOOTBALLER IMAGES */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
              ಆಡಳಿತ ಮಂಡಳಿ ಮತ್ತು ಕ್ಷೇತ್ರ ತಜ್ಞರು
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              ನಮ್ಮ ಸದಸ್ಯರು (OUR MEMBERS)
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              ಶಿರಸಿಯ ಖರೀದಿ, ವೈಜ್ಞಾನಿಕ ಸಂಸ್ಕರಣೆ, ಗುಣಮಟ್ಟ ಪರೀಕ್ಷೆ ಮತ್ತು ರೈತರ ನಂಬಿಕೆಯನ್ನು ಮುನ್ನಡೆಸುತ್ತಿರುವ ನಮ್ಮ ಪ್ರಮುಖ ೬ ನಾಯಕರು.
            </p>
          </div>

          {/* 6 Sections Alternating Layout: Odd = Left Text / Right Image, Even = Left Image / Right Text */}
          <div className="space-y-12">
            {TEAM_MEMBERS_KANNADA.map((member, idx) => {
              const isEven = (idx + 1) % 2 === 0;

              return (
                <div
                  key={member.id}
                  className="rounded-3xl bg-white p-8 sm:p-10 border border-emerald-200/90 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Text Column in Kannada */}
                    <div
                      className={`lg:col-span-7 space-y-4 ${
                        isEven ? 'order-1 lg:order-2' : 'order-1 lg:order-1'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
                          ಸದಸ್ಯ ೦{idx + 1}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                          {member.specialty}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {member.name}
                      </h3>

                      <p className="text-sm font-semibold text-emerald-800">
                        {member.role} · <span className="text-slate-500">{member.experience}</span>
                      </p>

                      <p className="text-base text-slate-700 leading-relaxed pt-1">
                        {member.bio}
                      </p>

                      <div className="pt-4 border-t border-slate-100 flex items-center gap-6 text-xs text-slate-500">
                        <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          ಶಿರಸಿ ಆಡಳಿತ ಮಂಡಳಿ
                        </span>
                        <span>ಪೂರ್ಣಾವಧಿ ನಿರ್ದೇಶಕರು</span>
                      </div>
                    </div>

                    {/* Image Column with direct Footballer image (no edit button on website) */}
                    <div
                      className={`lg:col-span-5 ${
                        isEven ? 'order-2 lg:order-1' : 'order-2 lg:order-2'
                      }`}
                    >
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-emerald-100 shadow-md group">
                        <img
                          src={member.imageUrl}
                          alt={member.imageAlt}
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-emerald-800/90 text-white font-bold text-[10px] shadow">
                          {member.imageLabel}
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm p-2.5 rounded-xl border border-emerald-100 text-center shadow-xs">
                          <p className="text-xs font-bold text-slate-900 truncate">{member.name}</p>
                          <p className="text-[11px] text-emerald-700 truncate">{member.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION (4 testimonials with 30s auto rotation in Kannada) */}
      <TestimonialCarousel />

      {/* 5. BRAND PARTNERS CONTINUOUS MARQUEE (10 smokeless tobacco / pan masala brands) */}
      <BrandMarquee
        title="ನಮ್ಮ ಸಾಂಸ್ಥಿಕ ಗ್ರಾಹಕರು ಮತ್ತು ತಂಬಾಕು / ಪಾನ್ ಮಸಾಲಾ ಬ್ರಾಂಡ್‌ಗಳು"
        subtitle="ಶಿರಸಿಯ ಹೈ-ಗ್ರೇಡ್ ಸುಪಾರಿಯನ್ನು ನಿಯಮಿತವಾಗಿ ಕೊಳ್ಳುವ ಭಾರತದ ಪ್ರಸಿದ್ಧ ಸಂಸ್ಥೆಗಳು"
      />
    </div>
  );
};
