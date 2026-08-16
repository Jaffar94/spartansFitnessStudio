import { ChevronRight, Zap } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/918792922003?text=Hi,%20I%20saw%20the%20Spartans%20website%20and%20I%20would%20like%20to%20know%20more%20about%20the%20memberships';

export default function Hero() {
  return (
    <section id="hero" className="hero-gradient relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-[500px] md:h-[500px] rounded-full bg-spartan-green/[0.03] blur-[60px] md:blur-[120px] md:animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-[400px] md:h-[400px] rounded-full bg-spartan-green/[0.02] blur-[50px] md:blur-[100px] md:animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[600px] md:h-[600px] rounded-full bg-spartan-green/[0.015] blur-[80px] md:blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(57,255,20,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-spartan-green-subtle border border-spartan-green-border mb-8">
          <Zap size={14} className="text-spartan-green" />
          <span className="text-spartan-green text-xs font-semibold tracking-widest uppercase">
            Austin Town, Bengaluru
          </span>
        </div>

        {/* Headline */}
        <h1 className="fade-in-up delay-100 font-[Outfit] font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-6">
          Serious About Lifting?{' '}
          <br className="hidden sm:block" />
          <span className="text-spartan-green drop-shadow-[0_0_30px_rgba(57,255,20,0.3)]">
            Welcome to Spartans Fitness Studio.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="fade-in-up delay-200 text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
          A solid, high-energy gym in Austin Town with a highly motivating community and expert
          trainers who actually pay attention to your form.
        </p>

        {/* CTA Button */}
        <div className="fade-in-up delay-300">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta"
            className="glow-button"
          >
            Join Spartans Today
            <ChevronRight size={22} strokeWidth={3} />
          </a>
        </div>

        {/* Stats strip */}
        <div className="fade-in-up delay-400 mt-16 grid grid-cols-3 gap-2 sm:gap-4 max-w-xl mx-auto">
          {[
            { value: '5 AM', label: 'Early Doors' },
            { value: '6 Days', label: 'Mon–Sat' },
            { value: '100+', label: 'Members' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-[Outfit] font-extrabold text-2xl sm:text-3xl text-spartan-green">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 mt-1 tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent" />
    </section>
  );
}
