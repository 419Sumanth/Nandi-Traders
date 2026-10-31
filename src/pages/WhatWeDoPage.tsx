import React from 'react';
import { ProcessingStep } from '../types.ts';
import { BrandMarquee } from '../components/BrandMarquee.tsx';
import {
  CloudRain,
  Sprout,
  Layers,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from 'lucide-react';

const PROCESSING_STEPS_KANNADA: ProcessingStep[] = [
  {
    number: 1,
    title: '೧. ಕೊಯ್ಲು ಮತ್ತು ಹದವಾದ ಅಡಿಕೆ ಕಟಾವು',
    subtitle: '೬೦-೮೦ ಅಡಿ ಎತ್ತರದ ಅಡಿಕೆ ಮರಗಳಿಂದ ನುರಿತ ಕಟಾವುದಾರರಿಂದ ಕಟಾವು',
    description:
      'ಆಗಸ್ಟ್‌ನಿಂದ ಜನವರಿ ಅವಧಿಯಲ್ಲಿ ಪಶ್ಚಿಮ ಘಟ್ಟದ ತೋಟಗಳಲ್ಲಿ ಕೊಯ್ಲು ನಡೆಯುತ್ತದೆ. ನುರಿತ ಕಟಾವುದಾರರು ಹಗ್ಗ ಹಾಗೂ ಸಾಂಪ್ರದಾಯಿಕ ಸಾಧನಗಳಿಂದ ಎತ್ತರದ ಮರಗಳನ್ನು ಏರುತ್ತಾರೆ. ಕೆಂಪು ಬೇಯಿಸಿದ ಬೆಟ್ಟೆ ಅಥವಾ ಚಾಲಿಗೆ ೬ ರಿಂದ ೭ ತಿಂಗಳ ಹದವಾದ ಎಳೆಯ ಕಾಯಿಯನ್ನು ಆರಿಸಲಾಗುತ್ತದೆ. ಹಾಳಾದ ಅಥವಾ ಅತಿಯಾಗಿ ಬಲಿತ ಕಾಯಿಗಳನ್ನು ತೋಟದಲ್ಲೇ ಬೇರ್ಪಡಿಸಿ ಶಿರಸಿ ಅಂಗಳಕ್ಕೆ ತರಲಾಗುತ್ತದೆ.',
    qualityControl:
      'ಅಡಿಕೆ ಗೊಂಚಲು ನೆಲಕ್ಕೆ ಬಿದ್ದು ಜಜ್ಜದಂತೆ ಹಗ್ಗದ ಮೂಲಕ ಕೆಳಗಿಳಿಸುವುದು. ತೋಟದಿಂದ ಅಂಗಳಕ್ಕೆ ೧೨ ಗಂಟೆಯೊಳಗೆ ಸಾಗಣೆ.',
    duration: 'ದಿನದೊಳಗೆ ಕಟಾವು & ಸಾಗಣೆ',
    keyAspect: 'ಹದವಾದ ಬೀಜದ ಗಟ್ಟಿತನ ಮತ್ತು ನೈಸರ್ಗಿಕ ಹಸಿರು-ಹಳದಿ ಸಿಪ್ಪೆ',
    iconName: 'Sprout',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Areca_catechu_-_fruits_01.jpg/800px-Areca_catechu_-_fruits_01.jpg',
    imageAlt: 'ಅಡಿಕೆ ಕೊಯ್ಲು ಮತ್ತು ಹದವಾದ ಗೊಂಚಲು ಆಯ್ಕೆ',
  },
  {
    number: 2,
    title: '೨. ನೈರ್ಮಲ್ಯಯುತ ಸಿಪ್ಪೆ ಸುಲಿಯುವಿಕೆ (De-husking)',
    subtitle: 'ಆಧುನಿಕ ನ್ಯೂಮ್ಯಾಟಿಕ್ ಯಂತ್ರಗಳು ಮತ್ತು ಪರಿಣಿತ ಕೃಷಿ ಕಾರ್ಮಿಕರಿಂದ ಸುಲಿಯುವಿಕೆ',
    description:
      'ನಂದಿ ಟ್ರೇಡರ್ಸ್‌ನ ಸಂಸ್ಕರಣಾ ಅಂಗಳಕ್ಕೆ ಬಂದ ನಂತರ ಹೊರಗಿನ ನಾರಿನ ಸಿಪ್ಪೆಯನ್ನು ಒಳಗಿನ ಬೀಜಕ್ಕೆ ಹಾನಿಯಾಗದಂತೆ ಬೇರ್ಪಡಿಸಲಾಗುತ್ತದೆ. ನುರಿತ ಮಲೆನಾಡಿನ ಮಹಿಳೆಯರು ಹಾಗೂ ಸೂಕ್ಷ್ಮ ಯಂತ್ರಗಳ ಮೂಲಕ ಅಡಿಕೆ ಒಡೆಯದಂತೆ ಅತ್ಯಂತ ಜಾಗರೂಕತೆಯಿಂದ ಸಿಪ್ಪೆ ಸುಲಿಯಲಾಗುತ್ತದೆ.',
    qualityControl:
      'ಹುಳುಕಲು, ಕೀಟಬಾಧೆ ಹಾಗೂ ಬಿರುಕು ಬಿಟ್ಟ ಅಡಿಕೆಗಳ ಸಂಪೂರ್ಣ ತಿರಸ್ಕಾರ. ಶೇ. ೯೯.೪ ಬೀಜ ಸುರಕ್ಷತೆ.',
    duration: 'ಕಟಾವಿನಿಂದ ೨೪–೩೬ ಗಂಟೆ',
    keyAspect: 'ನಾರಿನಂಶವಿಲ್ಲದ ನಯವಾದ ಸ್ವಚ್ಛ ಅಡಿಕೆ ಬೀಜ',
    iconName: 'Layers',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Betel_Nut_-_Areca_catechu.JPG/800px-Betel_Nut_-_Areca_catechu.JPG',
    imageAlt: 'ಸಿಪ್ಪೆ ಸುಲಿದ ಸ್ವಚ್ಛ ಅಡಿಕೆ ಬೀಜಗಳು',
  },
  {
    number: 3,
    title: '೩. ತಾಮ್ರದ ಬಾಯ್ಲರ್‌ನಲ್ಲಿ ನೈಸರ್ಗಿಕ ಚೊಗರು ಬೇಯಿಸುವಿಕೆ',
    subtitle: 'ಹಿಂದಿನ ಅಡಿಕೆಯ ಸಾಂದ್ರೀಕೃತ ನೈಸರ್ಗಿಕ ಚೊಗರಿನಲ್ಲಿ ಬೇಯಿಸುವ ಸಾಂಪ್ರದಾಯಿಕ ವಿಧಾನ',
    description:
      'ಶಿರಸಿಯ ಕೆಂಪು ಅಡಿಕೆಯ ಪ್ರಮುಖ ಹೆಗ್ಗಳಿಕೆ ಇದು. ಸಿಪ್ಪೆ ತೆಗೆದ ಅಡಿಕೆಯನ್ನು ಆಹಾರ ದರ್ಜೆಯ ಶುದ್ಧ ತಾಮ್ರದ ಬಾಯ್ಲರ್‌ನಲ್ಲಿ ಇಡಲಾಗುತ್ತದೆ. ಹಿಂದಿನ ಅಡಿಕೆ ಬೇಯಿಸಿದ ನೈಸರ್ಗಿಕ ಕಷಾಯವಾದ "ಚೊಗರು"ನಲ್ಲಿ ೯೮ ಡಿಗ್ರಿ ಸೆಲ್ಸಿಯಸ್ ತಾಪಮಾನದಲ್ಲಿ ೯೦ ರಿಂದ ೧೨೦ ನಿಮಿಷಗಳ ಕಾಲ ನಿರಂತರವಾಗಿ ಬೇಯಿಸಲಾಗುತ್ತದೆ. ಇದರಿಂದ ಅಡಿಕೆಗೆ ರಕ್ತಗೆಂಪು ಬಣ್ಣ ಮತ್ತು ಸುವಾಸನೆ ದೊರೆಯುತ್ತದೆ.',
    qualityControl:
      'ಯಾವುದೇ ಕೃತಕ ರಾಸಾಯನಿಕ ಬಣ್ಣ ಅಥವಾ ಖನಿಜ ವರ್ಣದ್ರವ್ಯಗಳನ್ನು ಬಳಸುವುದಿಲ್ಲ. ಶೇ. ೧೦೦ ನೈಸರ್ಗಿಕ ಚೊಗರು ಮಾತ್ರ.',
    duration: '೯೦–೧೨೦ ನಿಮಿಷಗಳ ಬ್ಯಾಚ್',
    keyAspect: 'ಕಡುಗೆಂಪು ಬಣ್ಣದ ಆಳವಾದ ನುಗ್ಗುವಿಕೆ ಮತ್ತು ನೈಸರ್ಗಿಕ ಟ್ಯಾನಿನ್',
    iconName: 'Flame',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Areca_nuts_in_a_bowl.jpg/800px-Areca_nuts_in_a_bowl.jpg',
    imageAlt: 'ಚೊಗರಿನಲ್ಲಿ ಬೇಯಿಸಿದ ರಕ್ತಗೆಂಪು ಅಡಿಕೆ',
  },
  {
    number: 4,
    title: '೪. ಬಿಸಿಲು ಮತ್ತು ಯಾಂತ್ರಿಕ ಒಣಗಿಸುವಿಕೆ (Drying Yard)',
    subtitle: '೪೫,೦೦೦ ಚದರ ಅಡಿ ಸ್ವಚ್ಛ ಕಾಂಕ್ರೀಟ್ ಅಂಗಳಗಳಲ್ಲಿ ಹಂತ ಹಂತವಾಗಿ ಒಣಗಿಸುವಿಕೆ',
    description:
      'ಬೇಯಿಸಿದ ಅಡಿಕೆಯನ್ನು ಎತ್ತರದ ಕಾಂಕ್ರೀಟ್ ಅಂಗಳಗಳು ಮತ್ತು ಸೌರ ಪಾಲಿಸ್ಟೈರೀನ್ ಟನೆಲ್‌ಗಳಲ್ಲಿ ಹರಡಲಾಗುತ್ತದೆ. ೩೫ ರಿಂದ ೪೫ ದಿನಗಳ ಕಾಲ ಪ್ರತಿದಿನ ೩ ಗಂಟೆಗೊಮ್ಮೆ ತಿರುವಿ ಸಮನಾಗಿ ಬಿಸಿಲು ತಾಗಿಸಲಾಗುತ್ತದೆ. ಮಳೆ ಬಂದರೆ ನಮ್ಮ ಬಯೋಮಾಸ್ ಹಾಟ್-ಏರ್ ಡ್ರೈಯರ್‌ಗಳು ೫೦-೬೦ ಡಿಗ್ರಿ ಸೆಲ್ಸಿಯಸ್ ಶುಷ್ಕ ಗಾಳಿಯನ್ನು ಹರಿಸಿ ಶಿಲೀಂಧ್ರ ಬರದಂತೆ ರಕ್ಷಿಸುತ್ತವೆ.',
    qualityControl:
      'ಅಡಿಕೆಯ ಒಳಭಾಗದ ತೇವಾಂಶವು ಶೇ. ೫೫ ರಿಂದ ನಿಖರವಾಗಿ ಶೇ. ೯.೫ ಕ್ಕಿಂತ ಕೆಳಗೆ ಇಳಿಯುವುದು ಕಡ್ಡಾಯ.',
    duration: '೩೫–೪೫ ದಿನಗಳ ನೈಸರ್ಗಿಕ ಒಣಗಿಸುವಿಕೆ',
    keyAspect: 'ಶಿಲೀಂಧ್ರ ರಹಿತ ಗರಿಗರಿ ಗಟ್ಟಿತನ ಮತ್ತು ದೀರ್ಘಕಾಲಿಕ ಬಾಳಿಕೆ',
    iconName: 'Sun',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Betel_nut_drying.JPG/800px-Betel_nut_drying.JPG',
    imageAlt: 'ಬಿಸಿಲಿನಲ್ಲಿ ಅಡಿಕೆ ಒಣಗಿಸುವ ಅಂಗಳ',
  },
  {
    number: 5,
    title: '೫. ಯಾಂತ್ರಿಕ ಮತ್ತು ಆಪ್ಟಿಕಲ್ ಗ್ರೇಡಿಂಗ್ (Sorting)',
    subtitle: 'ಮಲ್ಟಿ-ಡೆಕ್ ಜರಡಿ ಯಂತ್ರಗಳು ಮತ್ತು ಹೈ-ರೆಸಲ್ಯೂಶನ್ ಆಪ್ಟಿಕಲ್ ವಿಂಗಡಣೆ',
    description:
      'ಸಂಪೂರ್ಣ ಒಣಗಿದ ಅಡಿಕೆಯನ್ನು ಧೂಳು ರಹಿತ ಏರ್-ಆಸ್ಪಿರೇಟರ್ ಮೂಲಕ ಕಳುಹಿಸಲಾಗುತ್ತದೆ. ನಂತರ ಕಂಪನ ಜರಡಿಗಳ ಮೂಲಕ ಗಾತ್ರ, ತೂಕ ಮತ್ತು ಸಾಂದ್ರತೆಯ ಆಧಾರದ ಮೇಲೆ ಮಾರುಕಟ್ಟೆಯ ಪ್ರಮುಖ ಶ್ರೇಣಿಗಳಾಗಿ ವರ್ಗೀಕರಿಸಲಾಗುತ್ತದೆ: ಬೆಟ್ಟೆ, ಚಾಲಿ, ರಾಶಿ, ಚಿಕ್ನಿ, ಗೊರಬಲು ಮತ್ತು ಆಪಿ.',
    qualityControl:
      'ಆಗ್ಮಾರ್ಕ್ ಗ್ರೇಡ್-೧ ಮತ್ತು ಎಫ್‌ಎಸ್‌ಎಸ್‌ಎಐ ನಿಯಮಾವಳಿಗಳಿಗೆ ಅನುಗುಣವಾದ ವರ್ಗೀಕರಣ. ಶೇ. ೯೯.೮ ಶುದ್ಧತೆ.',
    duration: 'ನಿರಂತರ ಯಾಂತ್ರಿಕ ವಿಂಗಡಣೆ',
    keyAspect: 'ಪ್ರತಿಯೊಂದು ಪಾನ್ ಮಸಾಲಾ ಗ್ರಾಹಕರ ಅಗತ್ಯಕ್ಕೆ ತಕ್ಕ ಗಾತ್ರದ ಗ್ರೇಡಿಂಗ್',
    iconName: 'Scale',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Areca_nut_tree_%28Betel_nut%29_in_Kerala_05.jpg/800px-Areca_nut_tree_%28Betel_nut%29_in_Kerala_05.jpg',
    imageAlt: 'ಅಡಿಕೆ ಗಾತ್ರ ಮತ್ತು ತೂಕದ ಆಧಾರದ ಮೇಲೆ ವಿಂಗಡಣೆ',
  },
  {
    number: 6,
    title: '೬. ಲ್ಯಾಬ್ ತಪಾಸಣೆ, ಪ್ರಮಾಣೀಕರಣ ಮತ್ತು ಪ್ಯಾಕಿಂಗ್',
    subtitle: 'ಡಿಜಿಟಲ್ ಎನ್‌ಐಆರ್ ಪರೀಕ್ಷೆ, ೫೦ ಕೆಜಿ ಗುಣಮಟ್ಟದ ಗೋಣಿಚೀಲಗಳಲ್ಲಿ ಸೀಲ್ಡ್ ಪ್ಯಾಕಿಂಗ್',
    description:
      'ವಿಮಲ್, ಆರ್‌ಎಮ್‌ಡಿ ಮುಂತಾದ ಕೈಗಾರಿಕಾ ಗ್ರಾಹಕರಿಗೆ ರವಾನಿಸುವ ಮೊದಲು, ನಮ್ಮ ಪ್ರಯೋಗಾಲಯದಲ್ಲಿ ತೇವಾಂಶ, ಅಫ್ಲಾಟಾಕ್ಸಿನ್ ಮತ್ತು ಬೂದಿ ಅಂಶವನ್ನು ಪರೀಕ್ಷಿಸಲಾಗುತ್ತದೆ. ಪರೀಕ್ಷೆಯಲ್ಲಿ ಉತ್ತೀರ್ಣವಾದ ಅಡಿಕೆಯನ್ನು ಆಹಾರ ದರ್ಜೆಯ ಪಾಲಿ-ಲೈನ್ಡ್ ಗಟ್ಟಿ ಗೋಣಿಚೀಲಗಳಲ್ಲಿ ಸೀಲ್ ಮಾಡಿ ಸುರಕ್ಷಿತವಾಗಿ ಪ್ಯಾಕ್ ಮಾಡಲಾಗುತ್ತದೆ.',
    qualityControl:
      'ಪ್ರತಿ ೫೦ ಕೆಜಿ ಸರಕಿನೊಂದಿಗೆ ಲ್ಯಾಬ್ ಪರೀಕ್ಷಾ ವರದಿ ಲಗತ್ತಿಸಲಾಗುತ್ತದೆ. ಶೂನ್ಯ ಶಿಲೀಂಧ್ರ ಖಾತರಿ.',
    duration: 'ತಕ್ಷಣದ ಸಾರಿಗೆ ರವಾನೆ',
    keyAspect: '೨೪ ತಿಂಗಳುಗಳ ಕಾಲ ತಾಜಾತನ ಉಳಿಯುವ ಶೇಖರಣಾ ಸಾಮರ್ಥ್ಯ',
    iconName: 'CheckCircle2',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Jute_bags_filled_with_agricultural_products.jpg/800px-Jute_bags_filled_with_agricultural_products.jpg',
    imageAlt: 'ತೇವಾಂಶ ಮುಕ್ತ ಗೋಣಿಚೀಲಗಳಲ್ಲಿ ಸೀಲ್ಡ್ ಪ್ಯಾಕಿಂಗ್',
  },
];

export const WhatWeDoPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
      {/* SECTION 1: THE ARECANUT INDUSTRY, CULTIVATION & CLIMATE IN KANNADA */}
      <section className="relative pt-6 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
              ವಿಭಾಗ ೧ · ಅಡಿಕೆ ಉದ್ಯಮ, ಕೃಷಿ ಪದ್ಧತಿ ಮತ್ತು ಹವಾಮಾನ
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              ಅಡಿಕೆ ಕೃಷಿ: ಪಶ್ಚಿಮ ಘಟ್ಟದ ಪರಿಸರ, ಬೆಳೆಯುವ ವಿಧಾನ ಮತ್ತು ಹವಾಮಾನ ಅಗತ್ಯಗಳು
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              ಅಡಿಕೆ (<em>Areca catechu</em> L.), ಸಾಮಾನ್ಯವಾಗಿ ಸುಪಾರಿ ಎಂದು ಕರೆಯಲ್ಪಡುವ ಬೆಳೆಯು ಭಾರತದ ಅತ್ಯಂತ ಪ್ರಮುಖ ತೋಟಗಾರಿಕಾ ವಾಣಿಜ್ಯ ಬೆಳೆಯಾಗಿದೆ. ಜೈವಿಕ ವೈವಿಧ್ಯತೆಯ ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ ಮಡಿಲಲ್ಲಿರುವ ಕರ್ನಾಟಕದ ಶಿರಸಿಯು, ದೇಶದಲ್ಲೇ ಅತ್ಯುತ್ತಮ ಗುಣಮಟ್ಟದ ಕೆಂಪು ಹಾಗೂ ಬಿಳಿ ಅಡಿಕೆಗೆ ವಿಶ್ವವಿಖ್ಯಾತವಾಗಿದೆ.
            </p>
          </div>

          {/* Three Column Knowledge Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1: Where it is grown heavily */}
            <div className="rounded-2xl bg-white p-6 sm:p-8 border border-emerald-200/90 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Sprout className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                ಅಡಿಕೆ ಹೆಚ್ಚಾಗಿ ಬೆಳೆಯುವ ಪ್ರದೇಶಗಳು
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                ಭಾರತದ ಒಟ್ಟು ಅಡಿಕೆ ಉತ್ಪಾದನೆಯಲ್ಲಿ <strong>ಕರ್ನಾಟಕ ರಾಜ್ಯವು ಶೇಕಡಾ ೭೦ ಕ್ಕೂ ಅಧಿಕ ಪಾಲು</strong> ಹೊಂದಿದೆ. ಇದರಲ್ಲಿ ಉತ್ತರ ಕನ್ನಡ ಜಿಲ್ಲೆಯ <strong>ಶಿರಸಿ, ಸಿದ್ದಾಪುರ, ಯಲ್ಲಾಪುರ</strong> ಮಲೆನಾಡು ಕಣಿವೆಗಳು ಅಗ್ರಸ್ಥಾನದಲ್ಲಿವೆ. ಜೊತೆಗೆ ಶಿವಮೊಗ್ಗ, ಚಿಕ್ಕಮಗಳೂರು, ದಕ್ಷಿಣ ಕನ್ನಡ ಮತ್ತು ಉಡುಪಿ ಬೆಲ್ಟ್‌ಗಳು ಪ್ರಮುಖವಾಗಿವೆ.
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                <p><strong>ಇತರ ರಾಜ್ಯಗಳು:</strong> ಕೇರಳ (ಕಾಸರಗೋಡು, ಮಲಪ್ಪುರಂ), ಅಸ್ಸಾಂ (ಬ್ರಹ್ಮಪುತ್ರ ಕಣಿವೆ) ಮತ್ತು ಮೇಘಾಲಯ.</p>
                <p><strong>ಶಿರಸಿ ಅಡಿಕೆಯ ವೈಶಿಷ್ಟ್ಯ:</strong> ಹೆಚ್ಚಿನ ನೈಸರ್ಗಿಕ ಟ್ಯಾನಿನ್ ಮತ್ತು ಬೇಯಿಸಿದಾಗ ಬರುವ ಆಕರ್ಷಕ ರಕ್ತಗೆಂಪು ಬಣ್ಣ.</p>
              </div>
            </div>

            {/* Box 2: How it is grown */}
            <div className="rounded-2xl bg-white p-6 sm:p-8 border border-emerald-200/90 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                ಅಡಿಕೆ ಬೆಳೆಯುವ ವಿಧಾನ (Cultivation)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                ಅಡಿಕೆ ಮರಗಳು ನೇರವಾಗಿ ೧೫ ರಿಂದ ೨೫ ಮೀಟರ್ ಎತ್ತರ ಬೆಳೆಯುತ್ತವೆ. ಮಲೆನಾಡಿನಲ್ಲಿ ಸಾಂಪ್ರದಾಯಿಕ <em>ಸೊಪ್ಪಿನಬೆಟ್ಟ</em> ಬಹು-ಹಂತದ ಪರಿಸರಸ್ನೇಹಿ ಕೃಷಿ ಪದ್ಧತಿಯಲ್ಲಿ ಇದನ್ನು ಬೆಳೆಯಲಾಗುತ್ತದೆ.
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
                <p><strong>ಮಿಶ್ರ ಬೆಳೆಗಳು:</strong> ಅಡಿಕೆ ಮರಗಳಿಗೆ ಕಾಳುಮೆಣಸಿನ ಬಳ್ಳಿ, ನೆರಳಿನಲ್ಲಿ ಏಲಕ್ಕಿ, ಬಾಳೆ ಮತ್ತು ಕೊಕ್ಕೊ ಬೆಳೆಸಲಾಗುತ್ತದೆ.</p>
                <p><strong>ಹಸಿರೆಲೆ ಗೊಬ್ಬರ:</strong> ಉದುರಿದ ಅಡಿಕೆ ಗರಿಗಳು ಹಾಗೂ ಕಾಡಿನ ಹಸಿರೆಲೆ ಮಣ್ಣಿನ ತೇವಾಂಶ ಮತ್ತು ಫಲವತ್ತತೆ ಕಾಪಾಡುತ್ತದೆ.</p>
                <p><strong>ಇಳುವರಿ ಅವಧಿ:</strong> ಗಿಡ ನೆಟ್ಟ ೫–೭ ವರ್ಷಗಳಲ್ಲಿ ಫಸಲು ಆರಂಭವಾಗಿ ೩೫ಕ್ಕೂ ಹೆಚ್ಚು ವರ್ಷ ನಿರಂತರ ಇಳುವರಿ ನೀಡುತ್ತದೆ.</p>
              </div>
            </div>

            {/* Box 3: Climate & Soil Required */}
            <div className="rounded-2xl bg-white p-6 sm:p-8 border border-emerald-200/90 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <CloudRain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                ಅಗತ್ಯವಿರುವ ಹವಾಮಾನ ಮತ್ತು ಮಣ್ಣು
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                ಅಡಿಕೆಗೆ ಪಶ್ಚಿಮ ಘಟ್ಟದ ಉಷ್ಣವಲಯದ ಆದ್ರ್ರ ಮಳೆಕಾಡಿನ ವಿಶಿಷ್ಟ ಹವಾಮಾನ ಅತ್ಯಗತ್ಯ:
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span>ತಾಪಮಾನ ಶ್ರೇಣಿ:</span>
                  <span className="font-mono font-bold text-emerald-800">೧೫°C – ೩೫°C</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>ವಾರ್ಷಿಕ ಮಳೆ ಪ್ರಮಾಣ:</span>
                  <span className="font-mono font-bold text-emerald-800">೧,೫೦೦ – ೪,೫೦೦ mm</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>ಸಾ Relative ಆ ತೇವಾಂಶ:</span>
                  <span className="font-mono font-bold text-emerald-800">ಶೇ. ೭೦ – ೯೦</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>ಮಣ್ಣಿನ ಸ್ವರೂಪ:</span>
                  <span className="font-semibold text-slate-800">ಕೆಂಪು ಜಂಬಿಟ್ಟಿಗೆ / ಜೇಡಿ ಮಿಶ್ರಿತ ಮಣ್ಣು</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: STEP-BY-STEP PROCESSING LIKE THE MEMBERS IN ABOUT US (ONE AFTER THE OTHER) */}
      <section className="relative py-12 bg-emerald-50/40 border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 px-3 py-1 rounded-full bg-white border border-emerald-200">
              ವಿಭಾಗ ೨ · ಅಡಿಕೆ ಸಂಸ್ಕರಣೆಯ ೬ ಹಂತಗಳು
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              ತೋಟದ ಕಟಾವಿನಿಂದ ಪ್ಯಾಕಿಂಗ್‌ವರೆಗೆ: ಹಂತ-ಹಂತದ ಸಂಸ್ಕರಣೆ
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              ನಂದಿ ಟ್ರೇಡರ್ಸ್‌ನಲ್ಲಿ ಅಡಿಕೆ ಸಂಸ್ಕರಣೆಯ ಪ್ರತಿಯೊಂದು ಹಂತದಲ್ಲೂ ಪಾಲಿಸಲಾಗುವ ಕಟ್ಟುನಿಟ್ಟಾದ ಗುಣಮಟ್ಟದ ಮಾನದಂಡಗಳು.
            </p>
          </div>

          {/* Each Step rendered one after the other in alternating layout (Like Members in About Us) */}
          <div className="space-y-12">
            {PROCESSING_STEPS_KANNADA.map((step, idx) => {
              const isEven = (idx + 1) % 2 === 0;

              return (
                <div
                  key={step.number}
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
                          ಹಂತ ೦{step.number} / ೦೬
                        </span>
                        <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-emerald-600" />
                          ಸಮಯ: {step.duration}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {step.title}
                      </h3>

                      <p className="text-sm font-semibold text-emerald-800">
                        {step.subtitle}
                      </p>

                      <p className="text-base text-slate-700 leading-relaxed pt-1">
                        {step.description}
                      </p>

                      {/* Quality Control Box */}
                      <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>ಗುಣಮಟ್ಟ ನಿಯಂತ್ರಣ ಕ್ರಮ (Quality Control Measure)</span>
                        </div>
                        <p className="text-sm text-slate-800 font-medium leading-relaxed">
                          {step.qualityControl}
                        </p>
                        <div className="flex items-center gap-2 pt-1 border-t border-emerald-100 text-xs text-slate-600">
                          <span className="font-bold text-emerald-800">ಪ್ರಮುಖ ತಪಾಸಣೆ:</span>
                          <span>{step.keyAspect}</span>
                        </div>
                      </div>

                      <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>ಶಿರಸಿ ಎಪಿಎಂಸಿ ಪ್ರಮಾಣಿತ ಪ್ರಕ್ರಿಯೆ (Standard Operating Procedure)</span>
                      </div>
                    </div>

                    {/* Image Column with Real Photograph (Alternating position, no upload button) */}
                    <div
                      className={`lg:col-span-5 ${
                        isEven ? 'order-2 lg:order-1' : 'order-2 lg:order-2'
                      }`}
                    >
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-emerald-100 shadow-md group">
                        <img
                          src={step.imageUrl}
                          alt={step.imageAlt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-emerald-800/90 text-white font-bold text-[10px] shadow">
                          ಹಂತ ೦{step.number}
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm p-2.5 rounded-xl border border-emerald-100 text-center shadow-xs">
                          <p className="text-xs font-bold text-slate-900 truncate">{step.title}</p>
                          <p className="text-[11px] text-emerald-700 truncate">{step.keyAspect}</p>
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

      {/* SECTION 3: INSTITUTIONAL BUYERS MARQUEE IN KANNADA */}
      <BrandMarquee
        title="ನಮ್ಮ ಕೈಗಾರಿಕಾ ಗ್ರಾಹಕರು & ಸಂಸ್ಕರಣಾ ಪಾಲುದಾರರು"
        subtitle="ಶಿರಸಿಯ ಗುಣಮಟ್ಟದ ಅಡಿಕೆಯನ್ನು ಬಳಸುವ ಭಾರತದ ಪ್ರಮುಖ ಸಂಸ್ಥೆಗಳು"
      />
    </div>
  );
};
