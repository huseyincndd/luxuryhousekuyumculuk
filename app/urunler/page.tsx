'use client';

import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Filter, Search, ShieldCheck, Truck, Gift, Star } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: "Royal Emerald Ring",
    description: "2.5 Karat Kolombiya Zümrüdü & Pırlanta",
    price: "₺185.000",
    category: "Yüzük",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1000",
    tag: "Editörün Seçimi"
  },
  {
    id: 2,
    name: "Sapphire Midnight Necklace",
    description: "18 Ayar Beyaz Altın & Safir",
    price: "₺145.000",
    category: "Kolye",
    image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&q=80&w=1000",
    tag: null
  },
  {
    id: 3,
    name: "Golden Serpent Bracelet",
    description: "24 Ayar El İşçiliği Kelepçe",
    price: "₺92.500",
    category: "Bileklik",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1000",
    tag: "Tükeniyor"
  },
  {
    id: 4,
    name: "Pearl Sovereignty Earrings",
    description: "Güney Denizi İncisi",
    price: "₺48.000",
    category: "Küpe",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000",
    tag: null
  },
  {
    id: 5,
    name: "Noir Diamond Solitaire",
    description: "Platin Montür & Siyah Elmas",
    price: "₺125.000",
    category: "Yüzük",
    image: "https://images.unsplash.com/photo-1603561591411-cd7eb9a0093b?auto=format&fit=crop&q=80&w=1000",
    tag: "Yeni"
  },
  {
    id: 6,
    name: "Vintage Ruby Pendant",
    description: "Antik Kesim Yakut",
    price: "₺210.000",
    category: "Kolye",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1000",
    tag: null
  },
  {
    id: 7,
    name: "Imperial Topaz Ring",
    description: "Nadir İmparatorluk Topazı",
    price: "₺165.000",
    category: "Yüzük",
    image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&q=80&w=1000",
    tag: null
  },
  {
    id: 8,
    name: "Diamond Tennis Bracelet",
    description: "Toplam 5 Karat Pırlanta",
    price: "₺240.000",
    category: "Bileklik",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=1000",
    tag: "Popüler"
  }
];

const CATEGORIES = ["Tümü", "Yüzük", "Kolye", "Küpe", "Bileklik", "Saat", "Özel Koleksiyon"];

export default function UrunlerPage() {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filteredProducts = activeCategory === "Tümü" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-luxury-gold selection:text-black">
      <Navbar />
      
      <main>
        {/* 1. HERO SECTION */}
        <section className="relative h-[40vh] md:h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=2000&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-50"
              alt="Luxury Jewelry Banner"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-4xl px-6 pt-16 md:pt-20">
            <h1 className="font-serif text-4xl md:text-7xl mb-4 md:mb-6 text-white drop-shadow-2xl tracking-tight">
              Eşsiz <span className="text-luxury-gold italic">Parçalar</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-lg font-light leading-relaxed max-w-xl mx-auto">
              Luxury House atölyelerinde, dünyanın en nadir taşları ve en saf metalleri, 
              sizin için zamansız birer sanat eserine dönüşüyor.
            </p>
          </div>
        </section>

        {/* 2. FILTER & SEARCH TOOLBAR */}
        <div className="sticky top-[60px] md:top-[70px] z-40 px-4 md:px-8 -mt-6 md:-mt-8">
          <div className="max-w-7xl mx-auto bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl shadow-2xl p-4 flex flex-col md:flex-row gap-4 md:gap-6 justify-between items-center">
            
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-hide pb-1 md:pb-0">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap
                    ${activeCategory === cat 
                      ? 'bg-luxury-gold text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                      : 'text-gray-400 hover:bg-white/10 hover:text-white'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 w-full md:w-auto border-t md:border-t-0 border-white/10 pt-3 md:pt-0">
               <div className="relative flex-1 md:w-64 group">
                 <input 
                   type="text" 
                   placeholder="Mücevher Ara..." 
                   className="w-full bg-black/40 border border-white/10 rounded-full px-4 py-2 md:py-2.5 pl-10 text-xs md:text-sm focus:border-luxury-gold focus:outline-none transition-colors text-white placeholder:text-gray-600"
                 />
                 <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 md:w-4 md:h-4 text-gray-500 group-focus-within:text-luxury-gold transition-colors" />
               </div>
               <button className="p-2 md:p-2.5 bg-black/40 border border-white/10 rounded-full hover:border-luxury-gold hover:text-luxury-gold transition-colors">
                 <Filter className="w-3.5 h-3.5 md:w-4 md:h-4" />
               </button>
            </div>
          </div>
        </div>

        {/* 3. PRODUCT GRID */}
        <section className="py-16 md:py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group relative bg-[#0a0a0a] border border-white/5 hover:border-luxury-gold/30 transition-all duration-500 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                  
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                    
                    {/* Floating Tag */}
                    {product.tag && (
                      <div className="absolute top-3 left-3 bg-luxury-gold/90 backdrop-blur-sm text-black text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                        {product.tag}
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4 md:p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-base md:text-lg font-serif text-white group-hover:text-luxury-gold transition-colors line-clamp-1">{product.name}</h3>
                    </div>
                    <p className="text-xs text-gray-500 mb-4 font-sans tracking-wide truncate">{product.description}</p>
                    <div className="flex justify-between items-center border-t border-white/5 pt-4">
                      <span className="text-luxury-gold font-bold text-sm md:text-lg">{product.price}</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="py-24 text-center bg-white/5 rounded-2xl border border-white/5 border-dashed">
                <p className="text-gray-400 mb-4 font-serif text-xl">Aradığınız kriterlere uygun ürün bulunamadı.</p>
                <button onClick={() => setActiveCategory("Tümü")} className="text-luxury-gold hover:underline">Filtreleri Temizle</button>
              </div>
            )}
          </div>
        </section>

        {/* 4. TRUST & FEATURES BANNER */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-luxury-green-900 to-[#021a15] border-y border-white/5">
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
             
             <div className="flex flex-col items-center text-center p-6 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
               <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center mb-4 md:mb-6 text-luxury-gold">
                 <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />
               </div>
               <h3 className="text-lg md:text-xl font-serif text-white mb-2 md:mb-3">Sertifikalı Taşlar</h3>
               <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                 Tüm pırlanta ve değerli taşlarımız uluslararası geçerliliğe sahip GIA ve HRD sertifikalarıyla birlikte teslim edilir.
               </p>
             </div>

             <div className="flex flex-col items-center text-center p-6 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
               <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center mb-4 md:mb-6 text-luxury-gold">
                 <Truck className="w-6 h-6 md:w-8 md:h-8" />
               </div>
               <h3 className="text-lg md:text-xl font-serif text-white mb-2 md:mb-3">Sigortalı Teslimat</h3>
               <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                 Siparişleriniz Loomis güvenlik güvencesiyle, tamamen sigortalı olarak kapınıza kadar özel kurye ile ulaştırılır.
               </p>
             </div>

             <div className="flex flex-col items-center text-center p-6 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
               <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center mb-4 md:mb-6 text-luxury-gold">
                 <Gift className="w-6 h-6 md:w-8 md:h-8" />
               </div>
               <h3 className="text-lg md:text-xl font-serif text-white mb-2 md:mb-3">Özel Hediye Paketi</h3>
               <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                 Luxury House'un ikonik yeşil kadife kutusu ve mühürlü ambalajıyla, hediyeniz en az içindeki kadar değerli.
               </p>
             </div>

           </div>
        </section>

        {/* 5. CONSULTATION CTA */}
        <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
          <div className="max-w-5xl mx-auto bg-luxury-gold text-luxury-black rounded-2xl md:rounded-3xl p-8 md:p-20 relative overflow-hidden text-center shadow-[0_20px_50px_rgba(212,175,55,0.15)]">
            <div className="absolute top-0 right-0 w-40 md:w-64 h-40 md:h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 md:w-64 h-40 md:h-64 bg-white/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <Star className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-4 md:mb-6 text-luxury-black fill-current opacity-80" />
              <h2 className="font-serif text-2xl md:text-5xl font-bold mb-4 md:mb-6">Kararsız mı Kaldınız?</h2>
              <p className="text-sm md:text-xl font-medium opacity-80 mb-6 md:mb-10 max-w-2xl mx-auto">
                Mücevher uzmanlarımız, stilinize ve bütçenize en uygun parçayı bulmanız için 
                online görüntülü görüşme ile yanınızda.
              </p>
              <button className="bg-black text-white px-6 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-base font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-xl">
                Randevu Oluştur
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}