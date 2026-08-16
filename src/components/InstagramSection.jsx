import { Camera } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const INSTAGRAM_URL = 'https://www.instagram.com/spartansfitnessstudioblr';

/* Inline Instagram SVG since lucide-react doesn't include brand icons */
function InstagramIcon({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function InstagramSection() {
  return (
    <section id="instagram" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="relative rounded-3xl overflow-hidden border border-dark-border">
            {/* Background image collage */}
            <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 opacity-20">
              <img src="/images/strength-area.jpg" alt="" className="w-full h-full object-cover" />
              <img src="/images/gym-floor.jpg" alt="" className="w-full h-full object-cover" />
              <img src="/images/cardio-area.jpg" alt="" className="w-full h-full object-cover" />
              <img src="/images/changing-rooms.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-dark-bg/80 backdrop-blur-sm" />

            {/* Content */}
            <div className="relative z-10 py-16 md:py-20 px-8 text-center flex flex-col items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shadow-lg shadow-pink-500/20">
                <InstagramIcon size={32} className="text-white" />
              </div>

              <h2 className="font-[Outfit] font-extrabold text-3xl md:text-4xl text-white">
                Follow Us on{' '}
                <span className="bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] bg-clip-text text-transparent">
                  Instagram
                </span>
              </h2>

              <p className="text-gray-400 max-w-lg text-base md:text-lg">
                Stay motivated. Follow our journey, transformations, and daily workout energy.
              </p>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="instagram-cta"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] text-white font-[Outfit] font-bold text-sm tracking-wider uppercase hover:shadow-[0_0_30px_rgba(220,39,67,0.3)] hover:scale-105 transition-all duration-300"
              >
                <InstagramIcon size={18} />
                @spartansfitnessstudioblr
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
