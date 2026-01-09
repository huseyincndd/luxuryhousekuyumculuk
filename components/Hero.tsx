import React from 'react';
import { ChevronDown } from 'lucide-react';

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
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-green-900/70 via-luxury-green-900/40 to-luxury-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-luxury-green-900/20 to-luxury-green-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-0 md:mt-20 flex flex-col items-center">
        <div className="inline-block border-b border-luxury-gold/50 pb-3 mb-4 md:mb-6 animate-fade-in-up">
           <h2 className="text-luxury-gold text-[10px] md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold">
            Gerçek Zarafetin Adresi
          </h2>
        </div>
        
        <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl text-white mb-6 md:mb-8 leading-[1.1] md:leading-tight drop-shadow-2xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Her Anınız İçin <br />
          <span className="gold-gradient-text italic font-normal">Zamansız Zarafet</span>
        </h1>
        
        <p className="font-sans text-gray-200 text-sm md:text-xl tracking-wide mb-8 md:mb-12 max-w-lg md:max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          Luxury House, Türkiye'de kaliteli mücevheri herkese ulaştırmayı hedefliyor. Sizin için özenle seçilmiş koleksiyonumuzu keşfedin.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center w-full md:w-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <button className="btn-luxury w-full md:w-auto min-w-[200px] bg-luxury-gold text-luxury-green-900 px-8 py-4 tracking-[0.2em] uppercase hover:bg-white hover:text-luxury-green-900 transition-all duration-300 font-bold border border-luxury-gold shadow-[0_0_20px_rgba(212,175,55,0.4)] text-xs md:text-sm">
            Koleksiyonu Keşfet
          </button>
          <button className="btn-luxury w-full md:w-auto min-w-[200px] bg-transparent text-white border border-white/30 px-8 py-4 tracking-[0.2em] uppercase hover:bg-luxury-green-800 hover:border-luxury-gold hover:text-luxury-gold transition-all duration-300 backdrop-blur-sm text-xs md:text-sm">
            Randevu Oluştur
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-luxury-gold/70" />
      </div>
    </section>
  );
};