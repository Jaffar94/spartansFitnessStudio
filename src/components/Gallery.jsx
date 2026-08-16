import ScrollReveal from './ScrollReveal';

const images = [
  { src: '/images/strength-area.jpg', alt: 'Strength training area with cable machines and free weights', label: 'Strength Zone' },
  { src: '/images/gym-floor.jpg', alt: 'Spacious gym floor with spin bikes and dumbbell racks', label: 'Main Floor' },
  { src: '/images/cardio-area.jpg', alt: 'Cardio section with ellipticals and treadmills', label: 'Cardio Area' },
  { src: '/images/changing-rooms.jpg', alt: 'Clean changing rooms and locker area', label: 'Locker Rooms' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <span className="text-spartan-green text-xs font-bold tracking-[0.2em] uppercase">
              Inside the Arena
            </span>
            <h2 className="section-heading mt-4">
              See Our <span className="text-spartan-green">Space</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base md:text-lg">
              A clean, spacious facility packed with everything from cables to free weights.
            </p>
          </div>
        </ScrollReveal>

        {/* Clean 2x2 grid — all images same height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {images.map((image, idx) => (
            <ScrollReveal key={idx} direction={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 100}>
              <div className="gallery-image group relative aspect-[16/10] rounded-2xl overflow-hidden border border-dark-border">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                {/* Overlay label on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <span className="px-5 py-4 font-[Outfit] font-bold text-white text-sm tracking-wide">
                    {image.label}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
