import { MapPin, Clock, Phone } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/918792922003?text=Hi,%20I%20saw%20the%20Spartans%20website%20and%20I%20would%20like%20to%20know%20more%20about%20the%20memberships';

const MAP_SRC =
  'https://maps.google.com/maps?q=Spartans+Fitness+Studio+Old+Race+Course+Rd+Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed';

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-24 md:pt-32 pb-8 overflow-hidden">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-spartan-green/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-spartan-green text-xs font-bold tracking-[0.2em] uppercase">
            Find Us
          </span>
          <h2 className="section-heading mt-4">
            Come <span className="text-spartan-green">Train</span> With Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4 items-start group">
              <div className="w-12 h-12 rounded-xl bg-spartan-green/10 border border-spartan-green-border flex items-center justify-center shrink-0 group-hover:bg-spartan-green/15 transition-colors duration-300">
                <MapPin size={22} className="text-spartan-green" />
              </div>
              <div>
                <h3 className="font-[Outfit] font-bold text-white text-lg mb-1">Address</h3>
                <p className="text-gray-400 leading-relaxed">
                  45, Old Race Course Rd, above Iyengars Bakery, Yellagondanpalya, Austin Town,
                  Neelasandra, Bengaluru, Karnataka 560047.
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 items-start group">
              <div className="w-12 h-12 rounded-xl bg-spartan-green/10 border border-spartan-green-border flex items-center justify-center shrink-0 group-hover:bg-spartan-green/15 transition-colors duration-300">
                <Clock size={22} className="text-spartan-green" />
              </div>
              <div>
                <h3 className="font-[Outfit] font-bold text-white text-lg mb-1">Operating Hours</h3>
                <p className="text-gray-400">
                  Monday – Saturday: 5:00 AM – 10:30 PM
                </p>
                <p className="text-gray-400">Sunday: 7:00 AM – 9:00 PM</p>
              </div>
            </div>

            {/* WhatsApp contact */}
            <div className="flex gap-4 items-start group">
              <div className="w-12 h-12 rounded-xl bg-spartan-green/10 border border-spartan-green-border flex items-center justify-center shrink-0 group-hover:bg-spartan-green/15 transition-colors duration-300">
                <Phone size={22} className="text-spartan-green" />
              </div>
              <div>
                <h3 className="font-[Outfit] font-bold text-white text-lg mb-1">Get in Touch</h3>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-whatsapp"
                  className="text-spartan-green hover:underline transition-colors"
                >
                  Message us on WhatsApp →
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="map-container">
            <iframe
              src={MAP_SRC}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Spartans Fitness Studio location on Google Maps"
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(255,255,255,0.06)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Spartans logo"
              className="h-8 w-8 object-contain"
            />
            <span className="font-[Outfit] font-bold text-white text-sm tracking-wide">
              SPARTANS FITNESS STUDIO
            </span>
          </div>
          <p className="text-gray-600 text-xs text-center md:text-right">
            © {new Date().getFullYear()} Spartans Fitness Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
