import React from 'react';

interface NandiLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const NandiLogo: React.FC<NandiLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  }[size];

  const titleSize = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Nandi Bull Emblem */}
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-950 p-2 shadow-sm ring-1 ring-emerald-600/30 shrink-0 ${iconDimensions}`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-amber-300 drop-shadow-sm"
        >
          {/* Nandi Sacred Bull stylized silhouette */}
          <path
            d="M8 36C10 32 12 30 16 30C19 30 22 32 25 32C29 32 32 30 35 28C38 26 40 23 41 20C41.5 18 40.5 16 38.5 16C36.5 16 35.5 17.5 34 19C33 16 31 13 28 11C27 9 27.5 6 29 4C28 4 25.5 5 24.5 8C23.5 7 21.5 6 19 7C17 7.8 15 10 14.5 13C12.5 14 10 16.5 9 19C8 21.5 8.5 24 10 26C8 28 7 32 8 36Z"
            fill="currentColor"
            fillOpacity="0.95"
          />
          {/* Horn Accent */}
          <path
            d="M29 4C31 2 34 3 34 5C33 7 30 8 28 8"
            stroke="#FEF08A"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Bell */}
          <circle cx="20" cy="20" r="2.5" fill="#FEF08A" />
          <path
            d="M17 23C19 25 23 25 25 23"
            stroke="#FEF08A"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Leaf / sprout flourish */}
          <path
            d="M36 38C32 41 25 43 18 43C12 43 8 40 6 38"
            stroke="#6EE7B7"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className={`font-extrabold tracking-tight text-emerald-950 ${titleSize} leading-tight flex items-center gap-1.5`}>
          ನಂದಿ ಟ್ರೇಡರ್ಸ್
        </span>
        {showSubtitle && (
          <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-emerald-700">
            ಶಿರಸಿ · ಅಡಿಕೆ ಖರೀದಿ ಮತ್ತು ಸಂಸ್ಕರಣೆ
          </span>
        )}
      </div>
    </div>
  );
};
