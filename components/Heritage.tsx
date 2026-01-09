import React from 'react';

export const Heritage: React.FC = () => {
  return (
    <section id="mirasımız" className="py-16 md:py-24 bg-luxury-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Image Composition */}
        <div className="relative order-2 lg:order-1 mt-8 lg:mt-0">
          {/* Decorative borders hidden on mobile to prevent overflow */}
          <div className="hidden md:block absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-luxury-gold/30"></div>
          <div className="hidden md:block absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-luxury-gold/30"></div>
          
          <img 
            src="https://villaqrmenu.b-cdn.net/luxuryhousekuyumculuk/hakkimizda.webp" 
            alt="Jewelry Craftsmanship" 
            className="w-full h-[350px] md:h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
          />
          
          <div className="absolute -bottom-6 right-0 md:bottom-8 md:right-[-2rem] bg-luxury-green-800 p-6 md:p-8 shadow-xl max-w-[200px] md:max-w-xs z-10">
            <p className="font-serif text-2xl md:text-4xl text-luxury-gold mb-1 md:mb-2">15+</p>
            <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white">Yıllık Tecrübe ve<br/>Güvenilir Hizmet</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
          <div>
            <span className="text-emerald-500 tracking-[0.3em] text-xs uppercase font-bold">Mirasımız</span>
            <h2 className="font-serif text-3xl md:text-5xl mt-2 md:mt-4 leading-tight">
              Güvenilir <br/>
              <span className="text-luxury-gold">Hizmet</span>
            </h2>
          </div>
          
          <p className="text-gray-400 font-sans leading-relaxed text-sm md:text-base">
            Luxury House olarak, Türkiye'de kaliteli mücevheri herkese ulaştırma misyonuyla yola çıktık. Usta ellerde şekillenen her parça, hem günlük hayatınızın hem de özel anlarınızın ayrılmaz bir parçası olmayı hedefler. Biz sadece takı satmıyoruz; sizinle birlikte anılar biriktiriyoruz.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 py-8 border-t border-white/10 border-b">
             <div>
                <h4 className="text-luxury-gold font-serif text-lg mb-2">Usta İşçiliği</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Her parça, deneyimli ustalarımızın elinde özenle şekillenir ve kalite kontrolünden geçer.</p>
             </div>
             <div>
                <h4 className="text-luxury-gold font-serif text-lg mb-2">Kaliteli Malzeme</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Güvenilir tedarikçilerden temin ettiğimiz, standartlara uygun altın ve değerli taşlar kullanıyoruz.</p>
             </div>
          </div>

          <button className="btn-luxury inline-flex items-center gap-2 text-white border-b border-luxury-gold pb-1 hover:text-luxury-gold transition-colors tracking-widest uppercase text-xs font-bold pt-2">
            Hikayemizi Okuyun
          </button>
        </div>
      </div>
    </section>
  );
};