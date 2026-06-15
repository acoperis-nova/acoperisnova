import React from 'react';

export default function Logo({ onClick }) {
  return (
    <button onClick={onClick} className="flex items-center gap-3 group">
      {/* SVG Logo — no background, pure symbol */}
      <svg width="52" height="44" viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main roof outline — bold sharp peak */}
        <polyline
          points="2,34 26,6 50,34"
          stroke="hsl(0,80%,55%)"
          strokeWidth="3.5"
          strokeLinejoin="miter"
          fill="none"
          strokeLinecap="square"
        />
        {/* Inner second roof layer — parallax depth */}
        <polyline
          points="9,34 26,14 43,34"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="miter"
          fill="none"
          strokeLinecap="square"
          opacity="0.35"
        />
        {/* Horizontal base line */}
        <line x1="2" y1="34" x2="50" y2="34" stroke="hsl(0,80%,55%)" strokeWidth="3.5" strokeLinecap="square" />
        {/* Chimney — left of peak */}
        <rect x="15" y="18" width="5" height="10" fill="hsl(0,80%,55%)" />
        <rect x="14" y="16" width="7" height="3" fill="hsl(0,80%,55%)" />
        {/* Smoke wisps */}
        <path d="M17 15 Q15 11 17 8 Q19 5 17 2" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5" />
        <path d="M20 14 Q18 10 20 7" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.3" />
        {/* Roof tiles hint — small lines along right slope */}
        <line x1="35" y1="26" x2="38" y2="23" stroke="white" strokeWidth="1" opacity="0.25" />
        <line x1="30" y1="30.5" x2="33" y2="27.5" stroke="white" strokeWidth="1" opacity="0.25" />
        <line x1="40" y1="30.5" x2="43" y2="27.5" stroke="white" strokeWidth="1" opacity="0.25" />
      </svg>
      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="font-display font-black text-xl tracking-[0.08em] text-foreground uppercase">Acoperiș</span>
        <span className="font-display font-light text-[10px] tracking-[0.35em] text-primary uppercase mt-0.5">Premium</span>
      </div>
    </button>
  );
}
