import React from 'react';

export const BackgroundPattern: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Clean white base with subtle light-green tints in only a few places */}
      <div className="absolute inset-0 bg-white" />

      {/* Light green subtle ambient orbs only in top and bottom corners */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-emerald-100/35 blur-3xl" />
      <div className="absolute top-1/2 -right-36 w-80 h-80 rounded-full bg-green-100/25 blur-3xl" />
      <div className="absolute -bottom-24 left-1/3 w-96 h-96 rounded-full bg-emerald-50/60 blur-3xl" />

      {/* Extremely faint light-green agricultural watermark pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.025] text-emerald-900"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="areca-farm-pattern-light"
            width="280"
            height="280"
            patternUnits="userSpaceOnUse"
          >
            {/* Areca Palm Trunk */}
            <line x1="60" y1="280" x2="60" y2="40" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 3" />
            <path d="M60 40 Q40 10 10 20" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M60 40 Q50 5 30 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M60 40 Q75 5 95 10" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M60 40 Q80 20 110 30" fill="none" stroke="currentColor" strokeWidth="1.5" />

            {/* Arecanut Bunch */}
            <g transform="translate(62, 55)">
              <circle cx="0" cy="0" r="2.5" fill="currentColor" />
              <circle cx="5" cy="4" r="2.5" fill="currentColor" />
              <circle cx="-4" cy="5" r="2.5" fill="currentColor" />
              <circle cx="2" cy="9" r="2.5" fill="currentColor" />
              <circle cx="8" cy="8" r="2.5" fill="currentColor" />
            </g>

            {/* Climber Farmer Silhouette */}
            <g transform="translate(52, 110)">
              <circle cx="8" cy="0" r="3.5" fill="currentColor" />
              <path d="M8 4 L6 18 L14 18" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M7 8 L16 10 L16 14" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M6 18 L16 20" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </g>

            {/* Traditional Supari Cross section */}
            <g transform="translate(200, 45)">
              <circle cx="15" cy="15" r="12" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <path d="M15 3 C11 8 11 22 15 27" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <path d="M3 15 C8 11 22 11 27 15" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#areca-farm-pattern-light)" />
      </svg>
    </div>
  );
};
