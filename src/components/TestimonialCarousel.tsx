import React, { useState, useEffect, useRef } from 'react';
import { Testimonial } from '../types.ts';
import { ChevronLeft, ChevronRight, Quote, Clock, CheckCircle2 } from 'lucide-react';

const TESTIMONIALS_KANNADA: Testimonial[] = [
  {
    id: 1,
    quote:
      'ನಾವು ಕಳೆದ ೧೮ ವರ್ಷಗಳಿಂದ ನಮ್ಮ ತೋಟದ ಚಾಲಿ ಮತ್ತು ಬೆಟ್ಟೆ ಅಡಿಕೆಯನ್ನು ಶಿರಸಿ ಎಪಿಎಂಸಿಯಲ್ಲಿರುವ ನಂದಿ ಟ್ರೇಡರ್ಸ್‌ಗೆ ತರುತ್ತಿದ್ದೇವೆ. ಇಲ್ಲಿನ ಕಂಪ್ಯೂಟರೀಕೃತ ತೂಕದಲ್ಲಿ ಶೇ. ೧೦೦ ರಷ್ಟು ಪಾರದರ್ಶಕತೆ ಇದೆ ಮತ್ತು ಹರಾಜು ಮುಗಿದ ಕೂಡಲೇ ಹಣ ನೇರವಾಗಿ ನಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಜಮೆಯಾಗುತ್ತದೆ. ಇತರರಂತೆ ಯಾವುದೇ ತೇವಾಂಶದ ಕಡಿತ ಮಾಡದೆ, ಸರಿಯಾದ ಬೆಲೆ ನೀಡುತ್ತಾರೆ.',
    author: 'ಗಣಪತಿ ಹೆಗಡೆ',
    location: 'ಬಾಂಡಿಗದ್ದೆ ತೋಟ, ಯಲ್ಲಾಪುರ ತಾಲೂಕು, ಶಿರಸಿ',
    category: 'ಅಡಿಕೆ ಕೃಷಿಕರು (೩೨ ಎಕರೆ)',
    yearJoined: '೨೦೦೬ ರಿಂದ ನಂದಿ ಟ್ರೇಡರ್ಸ್ ಜತೆಗಿನ ಒಡನಾಟ',
  },
  {
    id: 2,
    quote:
      'ನಮ್ಮ ಪ್ರಮುಖ ಪಾನ್ ಮಸಾಲಾ ಮತ್ತು ಸುವಾಸಿತ ಸುಪಾರಿ ತಯಾರಿಕೆಗೆ ಸ್ಥಿರವಾದ ಟ್ಯಾನಿನ್ ಮತ್ತು ಗರಿಗರಿ ಅಡಿಕೆ ಅತ್ಯಗತ್ಯ. ಕಳೆದ ಹತ್ತು ವರ್ಷಗಳಿಂದ ನಂದಿ ಟ್ರೇಡರ್ಸ್ ನಮ್ಮ ವಿಶ್ವಾಸಾರ್ಹ ಪಶ್ಚಿಮ ಘಟ್ಟದ ಪೂರೈಕೆದಾರರಾಗಿದ್ದಾರೆ. ನಾವು ೫೦ ಟನ್ ರಾಶಿ ಅಥವಾ ಚಿಕ್ನಿ ಅಡಿಕೆ ಆರ್ಡರ್ ಮಾಡಿದರೆ, ಪ್ರತಿಯೊಂದು ಚೀಲದಲ್ಲೂ ತೇವಾಂಶ ಶೇ. ೧೦ ಕ್ಕಿಂತ ಕಡಿಮೆ ಇರುತ್ತದೆ ಮತ್ತು ಬಣ್ಣ ಅತ್ಯುತ್ತಮವಾಗಿರುತ್ತದೆ.',
    author: 'ಸುದರ್ಶನ್ ಭಟ್ (Sudarshan Bhat)',
    location: 'ಖರೀದಿ ವಿಭಾಗದ ಹಿರಿಯ ನಿರ್ದೇಶಕರು, ಕಾನ್ಪುರ & ಅಹಮದಾಬಾದ್',
    category: 'ಕೈಗಾರಿಕಾ ಪಾನ್ ಮಸಾಲಾ ಮತ್ತು ಎಫ್‌ಎಂಸಿಜಿ ಗ್ರಾಹಕರು',
    yearJoined: '೨೦೧೨ ರಿಂದ ಪೂರೈಕೆ ಪಾಲುದಾರರು',
  },
  {
    id: 3,
    quote:
      'ಸಿದ್ದಾಪುರದ ೧೪೦ ಸಣ್ಣ ಅಡಿಕೆ ಬೆಳೆಗಾರರ ಪರವಾಗಿ ನಾವು ನಂದಿ ಟ್ರೇಡರ್ಸ್ ಜತೆ ವ್ಯವಹಾರ ಮಾಡುತ್ತಿದ್ದೇವೆ. ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಬೆಲೆ ಏರುಪೇರಾದರೂ, ರೈತರಿಗೆ ನಷ್ಟವಾಗದಂತೆ ಉತ್ತಮ ದರ ನೀಡುತ್ತಾರೆ. ಕೊಯ್ಲು ಮಾಡುವ ಮುನ್ನ ಅವರ ತಜ್ಞರು ಬಂದು ಹದವಾದ ಅಡಿಕೆಯನ್ನು ಗುರುತಿಸಲು ನೀಡುವ ಮಾರ್ಗದರ್ಶನದಿಂದ ನಮ್ಮ ಇಳುವರಿಗೆ ಹೆಚ್ಚಿನ ದರ ದೊರೆಯುತ್ತಿದೆ.',
    author: 'ಮಹಾಬಲೇಶ್ವರ ಭಟ್',
    location: 'ಸಿದ್ದಾಪುರ ತಾಲೂಕು, ಉತ್ತರ ಕನ್ನಡ',
    category: 'ಪ್ರಗತಿಪರ ಕೃಷಿಕರು ಹಾಗೂ ಬೆಳೆಗಾರರ ಸಮನ್ವಯಕಾರರು',
    yearJoined: '೨೦೧೫ ರಿಂದ ಕೃಷಿಕ ಪಾಲುದಾರರು',
  },
  {
    id: 4,
    quote:
      'ಶಿರಸಿಯ ನಂದಿ ಟ್ರೇಡರ್ಸ್‌ನ ಸಂಸ್ಕರಣಾ ಅಂಗಳದಲ್ಲಿರುವ ಆಧುನಿಕ ಸಿಪ್ಪೆ ಸುಲಿಯುವ ಯಂತ್ರಗಳು ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ತಾಮ್ರದ ಬಾಯ್ಲರ್ ಬೇಯಿಸುವ ವ್ಯವಸ್ಥೆ ಅದ್ಭುತವಾಗಿದೆ. ಕೃತಕ ಬಣ್ಣ ಬಳಸದೆ ನೈಸರ್ಗಿಕ ಚೊಗರಿನಿಂದಲೇ ಅಡಿಕೆಗೆ ರಕ್ತಗೆಂಪು ಬಣ್ಣ ತರುತ್ತಾರೆ. ನಮ್ಮ ಮೂರು ತಲೆಮಾರಿನ ಕೃಷಿ ಕುಟುಂಬಕ್ಕೆ ಇವರ ಪ್ರಾಮಾಣಿಕತೆ ಆಸರೆಯಾಗಿದೆ.',
    author: 'ಕೃಷ್ಣಮೂರ್ತಿ ಭಟ್ (Krishnamurthy Bhat)',
    location: 'ದೇವೀಮನೆ ಘಟ್ಟ, ಶಿರಸಿ ಗ್ರಾಮಾಂತರ',
    category: 'ಸಾಂಪ್ರದಾಯಿಕ ಅಡಿಕೆ ಕೃಷಿಕರು',
    yearJoined: '೧೯೯೮ ರಿಂದ ನಿರಂತರ ಸಂಪರ್ಕ',
  },
];

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(30);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const total = TESTIMONIALS_KANNADA.length;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
    setSecondsRemaining(30);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    setSecondsRemaining(30);
  };

  // 30 seconds automatic rotation
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          setCurrentIndex((idx) => (idx + 1) % total);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [total]);

  const current = TESTIMONIALS_KANNADA[currentIndex];

  return (
    <section className="py-16 sm:py-20 relative bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100">
            <Quote className="w-3.5 h-3.5 text-emerald-700" />
            <span>ನಮ್ಮ ಗ್ರಾಹಕರ ಮತ್ತು ಕೃಷಿಕರ ಅನುಭವ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            ರೈತರು ಮತ್ತು ಸಂಸ್ಕರಣಾ ಗ್ರಾಹಕರ ಅಭಿಪ್ರಾಯಗಳು
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            ಮಲೆನಾಡಿನ ತೋಟಗಳಿಂದ ಹಿಡಿದು ರಾಷ್ಟ್ರೀಯ ಸಂಸ್ಕರಣಾ ಘಟಕಗಳವರೆಗಿನ ನೈಜ ಪ್ರತಿಕ್ರಿಯೆ
          </p>
        </div>

        {/* Wide Box Type Structure in clean white with light green touches */}
        <div className="relative rounded-3xl bg-white p-6 sm:p-10 border border-emerald-200/80 shadow-lg overflow-hidden">
          {/* Top Progress bar showing the 30-second cycle */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100">
            <div
              className="h-full bg-emerald-600 transition-all duration-1000 ease-linear"
              style={{ width: `${((30 - secondsRemaining) / 30) * 100}%` }}
            />
          </div>

          {/* Decorative Giant Quote Mark in soft green */}
          <div className="absolute -top-3 -right-2 text-emerald-100/60 pointer-events-none select-none">
            <Quote className="w-32 h-32" />
          </div>

          {/* Active Testimonial Content */}
          <div className="relative z-10 min-h-[220px] flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-emerald-800 font-semibold mb-4">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ದೃಢೀಕೃತ ಅಡಿಕೆ ಬೆಳೆಗಾರರು
              </span>
              <span className="flex items-center gap-1 font-mono text-slate-500">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                ಸ್ವಯಂ ಬದಲಾವಣೆ: {secondsRemaining} ಸೆಕೆಂಡು
              </span>
            </div>

            <blockquote className="text-base sm:text-lg lg:text-xl text-slate-800 leading-relaxed font-serif italic mb-8">
              "{current.quote}"
            </blockquote>

            {/* Testimonial Attribution Footer */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900 tracking-wide flex items-center gap-2">
                  <span>{current.author}</span>
                  <span className="text-xs font-semibold text-emerald-800 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
                    {current.category}
                  </span>
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  {current.location} · <span className="text-emerald-700 font-medium">{current.yearJoined}</span>
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-3 self-end sm:self-auto">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-emerald-600 hover:text-white text-slate-700 flex items-center justify-center border border-slate-200 transition-colors shadow-xs"
                  aria-label="ಹಿಂದಿನ ಅಭಿಪ್ರಾಯ"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Dots indicator */}
                <div className="flex items-center gap-1.5 px-2">
                  {TESTIMONIALS_KANNADA.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setCurrentIndex(i);
                        setSecondsRemaining(30);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === currentIndex
                          ? 'w-6 bg-emerald-600'
                          : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`ಅಭಿಪ್ರಾಯ ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-emerald-600 hover:text-white text-slate-700 flex items-center justify-center border border-slate-200 transition-colors shadow-xs"
                  aria-label="ಮುಂದಿನ ಅಭಿಪ್ರಾಯ"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
