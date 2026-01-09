'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Koleksiyonlar', href: '/koleksiyonlar' },
    { label: 'Ürünler', href: '/urunler' },
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'İletişim', href: '/iletisim' },
  ];

  const navClasses = `fixed w-full z-50 transition-all duration-500 ease-in-out px-6 py-3 md:py-4 ${
    isScrolled 
      ? 'bg-luxury-green-900/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-luxury-green-800' 
      : 'bg-gradient-to-b from-black/80 to-transparent'
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto flex justify-between items-center min-h-[60px] md:min-h-[70px]">
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer group flex-shrink-0">
          <img 
            src="https://villaqrmenu.b-cdn.net/luxuryhousekuyumculuk/logo1.png" 
            alt="Luxury House Logo" 
            className="h-10 md:h-14 w-auto transition-opacity duration-500 group-hover:opacity-80 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative font-serif text-xs tracking-[0.2em] uppercase py-2 group transition-colors duration-300 ${
                pathname === item.href
                  ? 'text-luxury-gold'
                  : 'text-gray-300 hover:text-luxury-gold'
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 h-[1px] bg-luxury-gold transition-all duration-300 ${
                pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
          <Link 
            href="/randevu"
            className="btn-luxury bg-luxury-gold text-luxury-green-900 px-8 py-2.5 text-xs font-bold tracking-[0.2em] hover:bg-white hover:text-luxury-green-900 transition-all duration-500 uppercase border border-luxury-gold shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]"
          >
            Randevu Al
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-luxury-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-luxury-green-900 border-t border-luxury-gold/20 py-8 flex flex-col items-center gap-6 animate-fade-in-up shadow-2xl">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-serif text-sm tracking-[0.2em] py-2 uppercase transition-colors ${
                pathname === item.href
                  ? 'text-luxury-gold'
                  : 'text-gray-300 hover:text-luxury-gold'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/randevu"
            className="bg-luxury-gold text-luxury-green-900 px-8 py-3 text-xs font-bold tracking-[0.2em] hover:bg-white transition-all duration-500 uppercase mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Randevu Al
          </Link>
        </div>
      )}
    </nav>
  );
};

