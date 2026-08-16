import { Star, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    text: 'Spartans is an excellent gym with a great workout atmosphere and well-maintained equipment. Special thanks to Kifayat Khan for being a motivating and supportive trainer.',
    name: 'Nishanth P.',
    initials: 'NP',
  },
  {
    text: "Spartans Fitness Studio is a solid, high-energy gym that's perfect if you're serious about lifting... The floor is always clean... it's a great, no-nonsense spot if you want quality gear and coaches who know their stuff. Just go for it 💪",
    name: 'harshith Achu.',
    initials: 'HA',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-24 md:py-32">
      {/* Large background glow - disabled on mobile for performance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-spartan-green/[0.02] blur-[150px] pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <span className="text-spartan-green text-xs font-bold tracking-[0.2em] uppercase">
              Member Voices
            </span>
            <h2 className="section-heading mt-4">
              Real Reviews. <span className="text-spartan-green">Real Results.</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base md:text-lg">
              Don&rsquo;t take our word for it — hear from members who train at Spartans.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 200}>
              <div id={`testimonial-card-${idx}`} className="testimonial-card h-full">
                {/* Quote icon */}
                <Quote
                  size={36}
                  className="text-spartan-green/20 mb-4"
                  strokeWidth={1.5}
                />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-spartan-green fill-spartan-green"
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-gray-300 text-[0.95rem] leading-relaxed mb-8 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-11 h-11 rounded-full bg-spartan-green/10 border border-spartan-green-border flex items-center justify-center">
                    <span className="font-[Outfit] font-bold text-sm text-spartan-green">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-[Outfit] font-semibold text-white text-sm">
                      {t.name}
                    </div>
                    <div className="text-gray-500 text-xs">Verified Member</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
