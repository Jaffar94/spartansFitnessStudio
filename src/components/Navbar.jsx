import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/918792922003?text=Hi,%20I%20saw%20the%20Spartans%20website%20and%20I%20would%20like%20to%20know%20more%20about%20the%20memberships';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(5,5,5,0.85)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)] shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group" id="nav-logo">
          <img
            src="/images/logo.png"
            alt="Spartans Fitness Studio logo"
            className="h-12 w-12 object-contain drop-shadow-[0_0_8px_rgba(57,255,20,0.3)] transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-[Outfit] font-extrabold text-xl tracking-wide text-white">
            SPARTANS
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-gray-400 hover:text-spartan-green transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-cta"
            className="ml-2 px-5 py-2.5 rounded-lg bg-spartan-green text-black font-[Outfit] font-bold text-sm tracking-wider uppercase hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all duration-300 hover:scale-105"
          >
            Join Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'

        }`}
      >
        <div className="px-6 py-4 bg-[rgba(5,5,5,0.95)] backdrop-blur-xl border-t border-[rgba(255,255,255,0.06)]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-400 hover:text-spartan-green transition-colors font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="inline-block mt-4 mb-2 px-5 py-2.5 rounded-lg bg-spartan-green text-black font-[Outfit] font-bold text-sm tracking-wider uppercase"
          >
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
}
