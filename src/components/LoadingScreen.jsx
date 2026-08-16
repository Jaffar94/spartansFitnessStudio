import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [phase, setPhase] = useState('loading'); // loading → fadeOut → done

  useEffect(() => {
    // Show loader for 1.8s, then fade out over 0.6s
    const timer = setTimeout(() => setPhase('fadeOut'), 1800);
    const removeTimer = setTimeout(() => setPhase('done'), 2400);
    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center"
      style={{
        background: '#050505',
        opacity: phase === 'fadeOut' ? 0 : 1,
        transition: 'opacity 0.6s ease-out',
        pointerEvents: phase === 'fadeOut' ? 'none' : 'auto',
      }}
    >
      {/* Logo + text animation */}
      <div className="flex flex-col items-center gap-6">
        {/* Pulsing logo */}
        <div
          className="relative"
          style={{
            animation: 'loaderPulse 1.2s ease-in-out infinite',
          }}
        >
          <img
            src="/images/logo.png"
            alt="Spartans"
            className="w-24 h-24 object-contain"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(57, 255, 20, 0.4))',
            }}
          />
          {/* Glow ring */}
          <div
            className="absolute inset-[-8px] rounded-full border-2 border-spartan-green/30"
            style={{
              animation: 'loaderRing 1.2s ease-in-out infinite',
            }}
          />
        </div>

        {/* Brand name */}
        <div className="font-[Outfit] font-extrabold text-2xl tracking-[0.3em] text-white uppercase">
          SPARTANS
        </div>

        {/* Loading bar */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-spartan-green rounded-full"
            style={{
              animation: 'loaderBar 1.6s ease-in-out forwards',
            }}
          />
        </div>
      </div>
    </div>
  );
}
