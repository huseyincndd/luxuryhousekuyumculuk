import React from 'react';
import { Gem, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="iletişim" className="bg-black text-white pt-24 pb-12 px-6 border-t border-luxury-green-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Gem className="w-8 h-8 text-luxury-gold" />
            <div>
              <span className="block font-serif text-xl tracking-widest font-bold">LUXURY HOUSE</span>
              <span className="block text-[10px] tracking-[0.4em] text-emerald-500 uppercase">Est. 1985</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Mücevher sanatının doruk noktası. Doğadan ilham alıp, tutkuyla işliyoruz.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-serif text-lg mb-8 relative inline-block">
            Koleksiyonlar
            <span className="absolute -bottom-2 left-0 w-12 h-[1px] bg-luxury-gold"></span>
          </h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-luxury-gold transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-luxury-gold rounded-full"></span> Gelin Setleri</a></li>
            <li><a href="#" className="hover:text-luxury-gold transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-luxury-gold rounded-full"></span> Yüksek Mücevher</a></li>
            <li><a href="#" className="hover:text-luxury-gold transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-luxury-gold rounded-full"></span> Pırlanta Yüzükler</a></li>
            <li><a href="#" className="hover:text-luxury-gold transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-luxury-gold rounded-full"></span> Saatler</a></li>
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
               <span>Bağdat Caddesi No: 420<br/>Suadiye, İstanbul</span>
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
          <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
          <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
        </div>
      </div>
    </footer>
  );
};

