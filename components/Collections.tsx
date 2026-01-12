import React from 'react';
import Link from 'next/link';

const CATEGORIES = [
  {
    id: 1,
    title: "Gelin Koleksiyonu",
    subtitle: "En Özel Gününüz İçin",
    image: "https://villaqrmenu.b-cdn.net/luxuryhousekuyumculuk/gelinlikkoleksiyon-luxuryhousekuyumculuk.webp"
  },
  {
    id: 2,
    title: "Zamansız Klasikler",
    subtitle: "Nadir ve Eşsiz",
    image: "https://villaqrmenu.b-cdn.net/luxuryhousekuyumculuk/zamansizklasikler.webp"
  },
  {
    id: 3,
    title: "Günlük Zarafet",
    subtitle: "Her An Işıldayın",
    image: "https://villaqrmenu.b-cdn.net/luxuryhousekuyumculuk/gunlukzarafet.webp"
  }
];

export const Collections: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-luxury-black relative overflow-hidden">
       
       {/* --- ANIMATED BACKGROUND ELEMENTS --- */}
       
       {/* 1. Rotating Golden Galaxy Effect (Center) */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-luxury-gold/5 via-luxury-green-900/10 to-transparent rounded-full blur-[100px] animate-spin-slower pointer-events-none"></div>

       {/* 2. Floating Golden Orbs (Left & Right) */}
       <div className="absolute top-20 -left-20 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[80px] animate-float pointer-events-none"></div>
       <div className="absolute bottom-20 -right-20 w-96 h-96 bg-luxury-green-900/20 rounded-full blur-[80px] animate-float-delayed pointer-events-none"></div>

       {/* 3. Moving Particles (Tiny Stars) */}
       <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-luxury-gold rounded-full opacity-40 animate-pulse-slow pointer-events-none shadow-[0_0_10px_#D4AF37]"></div>
       <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white rounded-full opacity-20 animate-pulse-slow pointer-events-none shadow-[0_0_15px_white]" style={{animationDelay: '1s'}}></div>
       <div className="absolute top-10 right-10 w-1 h-1 bg-luxury-gold rounded-full opacity-60 animate-ping pointer-events-none" style={{animationDuration: '3s'}}></div>

       {/* 4. Architectural Lines with Shine */}
       <div className="absolute top-0 bottom-0 left-[6%] w-[1px] bg-white/5 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent via-luxury-gold/50 to-transparent animate-[shimmer_5s_infinite]"></div>
       </div>
       <div className="absolute top-0 bottom-0 right-[6%] w-[1px] bg-white/5 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-transparent via-luxury-gold/50 to-transparent animate-[shimmer_7s_infinite]"></div>
       </div>
       
       {/* 5. Horizontal Accents */}
       <div className="absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/15 to-transparent pointer-events-none"></div>

      {/* --- CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
           <span className="text-luxury-gold text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold opacity-80 mb-2 block">
             Lüksün Tanımı
           </span>
           <h2 className="font-serif text-3xl md:text-5xl text-white">
             Koleksiyonlar
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {CATEGORIES.map((cat, idx) => (
            <Link key={cat.id} href="/koleksiyonlar" className="group relative h-[450px] md:h-[550px] overflow-hidden cursor-pointer bg-black/50 backdrop-blur-sm border border-white/5 hover:border-luxury-gold/30 transition-all duration-500 shadow-2xl block" style={{animationDelay: `${idx * 0.15}s`}}>
              
              {/* Image Container with Zoom Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-60"></div>
              </div>
              
              {/* Inner Decorative Frame (Expands on Hover) */}
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-luxury-gold/0 group-hover:border-luxury-gold/40 transition-all duration-700 z-20 pointer-events-none scale-95 group-hover:scale-100">
                 {/* Tiny corner accents */}
                 <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
                 <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
                 <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
                 <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-luxury-gold text-[10px] md:text-xs tracking-[0.3em] uppercase block mb-3 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.subtitle}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6 group-hover:text-luxury-gold transition-colors duration-300">
                  {cat.title}
                </h3>
                
                {/* Button-like Link */}
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 delay-100">
                   <span className="text-xs tracking-widest uppercase text-white border-b border-luxury-gold pb-1">Keşfet</span>
                </div>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};