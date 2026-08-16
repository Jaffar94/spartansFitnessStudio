import { Dumbbell, Users, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const features = [
  {
    icon: Dumbbell,
    title: 'Clean & Well-Organized',
    description:
      'Top-tier strength equipment and dedicated spaces for functional training.',
  },
  {
    icon: Users,
    title: 'Expert Trainers',
    description:
      'Featuring professional coaches like Kifayat Khan who push you to do better safely.',
  },
  {
    icon: Award,
    title: 'Premium Facility',
    description:
      'Great amenities, decent parking, and a no-nonsense environment for serious fitness goals.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-spartan-green/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <span className="text-spartan-green text-xs font-bold tracking-[0.2em] uppercase">
              Why Spartans
            </span>
            <h2 className="section-heading mt-4">
              Built for Those Who{' '}
              <span className="text-spartan-green">Show Up</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base md:text-lg">
              Everything you need to crush your goals — no gimmicks, no shortcuts.
            </p>
          </div>
        </ScrollReveal>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={feature.title} direction="up" delay={idx * 150}>
                <div
                  id={`feature-card-${idx}`}
                  className="glass-card p-8 lg:p-10 group h-full"
                >
                  {/* Icon container */}
                  <div className="w-14 h-14 rounded-xl bg-spartan-green/10 flex items-center justify-center mb-6 border border-spartan-green-border group-hover:bg-spartan-green/15 group-hover:border-spartan-green/30 transition-all duration-500">
                    <Icon
                      size={28}
                      className="text-spartan-green transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-[Outfit] font-bold text-xl text-white mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-[0.95rem]">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
