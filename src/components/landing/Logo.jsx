import React from 'react';

export default function Logo({ onClick }) {
  return (
    <button onClick={onClick} className="flex items-center gap-3 group">
      <img
        src="https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/184ba0dfb_e898d8133_logo_transparent1.png"
        alt="Acoperis Nova Logo"
        className="h-10 w-auto object-contain"
      />
      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="font-display font-black text-xl tracking-[0.08em] text-foreground uppercase">Acoperis</span>
        <span className="font-display font-light text-[10px] tracking-[0.35em] text-primary uppercase mt-0.5">Nova</span>
      </div>
    </button>
  );
}
