import React from 'react';
import { Instagram, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="iletişim" className="bg-[#020202] text-white pt-24 pb-10 border-t border-white/10 font-sans relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 relative z-10">
        
        {/* 1. BRAND */}
        <div className="space-y-8">
          <a href="/" className="block w-fit opacity-90 hover:opacity-100 transition-opacity duration-500">
            <img 
              src="https://villaqrmenu.b-cdn.net/luxuryhousekuyumculuk/logo1.png" 
              alt="Luxury House Logo" 
              className="h-12 md:h-14 w-auto object-contain brightness-0 invert"
            />
          </a>
          <p className="text-gray-500 text-sm leading-7 font-light">
            Mücevher sanatının doruk noktası. 1985'ten beri doğadan ilham alıp, tutkuyla işliyoruz.
          </p>
        </div>

        {/* 2. QUICK LINKS */}
        <div>
          <h4 className="text-white font-serif text-lg mb-8 relative inline-block tracking-wide">
            Sayfalar
            <span className="absolute -bottom-3 left-0 w-8 h-[1px] bg-luxury-gold"></span>
          </h4>
          <ul className="space-y-4 text-sm text-gray-400">
            {[
              { name: 'Ana Sayfa', href: '/' },
              { name: 'Hakkımızda', href: '/hakkimizda' },
              { name: 'Koleksiyonlar', href: '/koleksiyonlar' },
              { name: 'İletişim', href: '/iletisim' }
            ].map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-luxury-gold transition-all duration-300 flex items-center gap-3 group w-fit">
                  <span className="w-1 h-1 bg-luxury-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. CONTACT */}
        <div>
           <h4 className="text-white font-serif text-lg mb-8 relative inline-block tracking-wide">
            İletişim
            <span className="absolute -bottom-3 left-0 w-8 h-[1px] bg-luxury-gold"></span>
          </h4>
          <ul className="space-y-6 text-sm text-gray-400 font-light">
            <li className="flex gap-4 group cursor-default">
               <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-luxury-gold/20 transition-colors">
                 <MapPin className="w-4 h-4 text-luxury-gold" />
               </div>
               <span className="leading-relaxed group-hover:text-gray-200 transition-colors">Büyükşehir Mah. Beylikdüzü Cd. A Blok<br /> No: 5 F, İstanbul</span>
            </li>
            <li className="flex gap-4 items-center group">
               <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-luxury-gold/20 transition-colors">
                 <Phone className="w-4 h-4 text-luxury-gold" />
               </div>
               <a href="tel:+905397196558" className="group-hover:text-white transition-colors tracking-wider">+90 539 719 65 58</a>
            </li>
            <li className="flex gap-4 items-center group">
               <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-luxury-gold/20 transition-colors">
                 <Mail className="w-4 h-4 text-luxury-gold" />
               </div>
               <a href="mailto:info@luxuryhousejewelry.com" className="group-hover:text-white transition-colors">info@luxuryhousejewelry.com</a>
            </li>
          </ul>
        </div>

        {/* 4. INSTAGRAM (SPECIAL DESIGN) */}
        <div className="flex flex-col">
           <h4 className="text-white font-serif text-lg mb-8 relative inline-block tracking-wide">
            Sosyal Medya
            <span className="absolute -bottom-3 left-0 w-8 h-[1px] bg-luxury-gold"></span>
          </h4>
           
           {/* Custom Instagram Card */}
           <a 
             href="https://www.instagram.com/luxury_house_kuyumculuk/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500 p-6 flex flex-col gap-4 hover:border-luxury-gold/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]"
           >
             {/* Gradient Overlay on Hover */}
             <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

             <div className="relative z-10 flex items-center justify-between">
                <div className="w-10 h-10 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-lg p-[2px]">
                   <div className="bg-black w-full h-full rounded-[6px] flex items-center justify-center">
                     <Instagram className="w-5 h-5 text-white" />
                   </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-luxury-gold group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
             </div>

             <div className="relative z-10">
               <p className="text-[10px] text-luxury-gold uppercase tracking-[0.2em] mb-1 font-bold">Takip Edin</p>
               <p className="text-sm font-medium text-white group-hover:text-luxury-gold/90 transition-colors">@luxury_house_kuyumculuk</p>
               <p className="text-xs text-gray-500 mt-2 line-clamp-2">En yeni koleksiyonlar ve özel tasarımlarımız için Instagram'da bize katılın.</p>
             </div>
           </a>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 tracking-[0.15em] uppercase font-medium">
        <p>© 2024 Luxury House. Tüm Hakları Saklıdır.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
          <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
        </div>
      </div>
    </footer>
  );
};