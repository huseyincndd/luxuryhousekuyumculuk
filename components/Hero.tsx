import React from 'react';
import { ChevronDown, MapPin, Sparkles, Clock, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Green/Gold Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://villaqrmenu.b-cdn.net/luxuryhousekuyumculuk/heroarkaplan.webp"
          alt="Emerald Jewelry Model"
          className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]"
        />
        {/* Darker overlay for better text readability since it is a Coming Soon page */}
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-green-900/80 via-black/60 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black/90"></div>
      </div>

      {/* Decorative Border Frame */}
      <div className="absolute inset-4 md:inset-8 border border-luxury-gold/20 pointer-events-none z-10 flex flex-col justify-between items-center py-4">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-luxury-gold/50"></div>
          <div className="w-[1px] h-12 bg-gradient-to-t from-transparent to-luxury-gold/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center justify-center h-full">
        
        {/* Top Tagline */}
        <div className="animate-fade-in-up flex items-center gap-3 mb-6 md:mb-8">
           <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-luxury-gold animate-pulse" />
           <span className="text-luxury-gold text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase font-bold border-b border-luxury-gold/30 pb-1">
             Saf Altın. Saf Zarafet.
           </span>
           <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-luxury-gold animate-pulse" />
        </div>
        
        {/* Main Headline: COMING SOON */}
        <div className="relative mb-6 md:mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl text-white leading-none tracking-tight drop-shadow-2xl opacity-90">
              ÇOK <br className="md:hidden" /> YAKINDA
            </h1>
            <div className="absolute -inset-4 bg-luxury-gold/5 blur-3xl rounded-full -z-10 animate-pulse"></div>
        </div>
        
        {/* Sub Headline */}
        <h2 className="font-serif text-xl md:text-3xl text-gray-200 mb-8 md:mb-10 font-light italic animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <span className="text-luxury-gold">"</span> Zamansız Değer, Kusursuz İşçilik <span className="text-luxury-gold">"</span>
        </h2>
        
        {/* Address Card */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-xl max-w-lg w-full animate-fade-in-up hover:border-luxury-gold/30 transition-colors duration-500" style={{animationDelay: '0.6s'}}>
            <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="text-center">
                    <p className="text-luxury-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-2">Lokasyon</p>
                    <p className="text-white font-serif text-sm md:text-lg leading-relaxed">
                        Büyükşehir Mah. Beylikdüzü Cd. A Blok No: 5 F
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm mt-1">Beylikdüzü / İstanbul</p>
                </div>
                <div className="flex gap-4 mt-2">
                    <a href="#iletişim" className="text-xs text-white border-b border-white/30 hover:text-luxury-gold hover:border-luxury-gold transition-colors pb-0.5 uppercase tracking-wider">
                        Bize Ulaşın
                    </a>
                    <span className="text-white/20">|</span>
                    <a
                      href="https://www.google.com/maps?q=41.0036,28.6444"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-white border-b border-white/30 hover:text-luxury-gold hover:border-luxury-gold transition-colors pb-0.5 uppercase tracking-wider"
                    >
                        Haritada Aç
                    </a>
                </div>
            </div>
        </div>

      </div>

      {/* Bottom Ticker / Status */}
      <div className="absolute bottom-10 z-20 flex items-center gap-2 text-white/60 animate-bounce">
          <Clock className="w-4 h-4" />
          <span className="text-[10px] uppercase tracking-widest">Hazırlıklar Tamamlanıyor</span>
      </div>
    </section>
  );
};
