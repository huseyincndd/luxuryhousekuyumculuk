import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="iletişim" className="bg-black text-white pt-24 pb-12 px-6 border-t border-luxury-green-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center cursor-pointer group">
            <img 
              src="https://villaqrmenu.b-cdn.net/luxuryhousekuyumculuk/logo1.png" 
              alt="Luxury House Logo" 
              className="h-10 md:h-14 w-auto transition-opacity duration-500 group-hover:opacity-80 object-contain"
            />
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed">
            Mücevher sanatının doruk noktası. Doğadan ilham alıp, tutkuyla işliyoruz.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-serif text-lg mb-8 relative inline-block">
            Sayfalar
            <span className="absolute -bottom-2 left-0 w-12 h-[1px] bg-luxury-gold"></span>
          </h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-luxury-gold transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-luxury-gold rounded-full"></span> Ana Sayfa
              </Link>
            </li>
            <li>
              <Link href="/hakkimizda" className="hover:text-luxury-gold transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-luxury-gold rounded-full"></span> Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/koleksiyonlar" className="hover:text-luxury-gold transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-luxury-gold rounded-full"></span> Koleksiyonlar
              </Link>
            </li>
            <li>
              <Link href="/iletisim" className="hover:text-luxury-gold transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-luxury-gold rounded-full"></span> İletişim
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
           <h4 className="text-white font-serif text-lg mb-8 relative inline-block">
            İletişim
            <span className="absolute -bottom-2 left-0 w-12 h-[1px] bg-luxury-gold"></span>
          </h4>
          <ul className="space-y-6 text-sm text-gray-400">
            <li className="flex gap-4">
               <MapPin className="w-5 h-5 text-luxury-gold shrink-0" />
               <span>Beylikdüzü, İstanbul</span>
            </li>
            <li className="flex gap-4 items-center">
               <Phone className="w-5 h-5 text-luxury-gold shrink-0" />
               <span>+90 (212) 555 01 23</span>
            </li>
            <li className="flex gap-4 items-center">
               <Mail className="w-5 h-5 text-luxury-gold shrink-0" />
               <span>info@luxuryhouse.com</span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
           <h4 className="text-white font-serif text-lg mb-8 relative inline-block">
            Takipte Kalın
            <span className="absolute -bottom-2 left-0 w-12 h-[1px] bg-luxury-gold"></span>
          </h4>
           <div className="flex gap-4">
             <a href="#" className="w-12 h-12 bg-luxury-green-900/30 border border-luxury-green-800 flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-green-900 transition-all duration-300">
               <Instagram className="w-5 h-5" />
             </a>
             <a href="#" className="w-12 h-12 bg-luxury-green-900/30 border border-luxury-green-800 flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-green-900 transition-all duration-300">
               <Facebook className="w-5 h-5" />
             </a>
             <a href="#" className="w-12 h-12 bg-luxury-green-900/30 border border-luxury-green-800 flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-green-900 transition-all duration-300">
               <Twitter className="w-5 h-5" />
             </a>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 tracking-wider uppercase">
        <p>© 2024 Luxury House. Tüm Hakları Saklıdır.</p>
        <div className="flex gap-6">
          <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
          <Link href="/kullanim-sartlari" className="hover:text-white transition-colors">Kullanım Şartları</Link>
        </div>
      </div>
    </footer>
  );
};

