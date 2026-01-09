import React from 'react';
import Link from 'next/link';
import { Product } from '../types';

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Baget Pırlanta Yüzük",
    price: "₺45.000",
    category: "Yüzük",
    image: "https://villaqrmenu.b-cdn.net/luxuryhousekuyumculuk/baget-yuzuk.webp"
  },
  {
    id: 2,
    name: "Su Yolu Gerdanlık",
    price: "₺35.000",
    category: "Gerdanlık",
    image: "https://villaqrmenu.b-cdn.net/luxuryhousekuyumculuk/Su-Yolu%20-Gerdanlik.webp"
  },
  {
    id: 3,
    name: "İtalyan Dorika Kelepçe",
    price: "₺28.000",
    category: "Bileklik",
    image: "https://villaqrmenu.b-cdn.net/luxuryhousekuyumculuk/italyan-hasir%20-kelepce.webp"
  },
  {
    id: 4,
    name: "Ajda Bilezik",
    price: "₺22.000",
    category: "Bileklik",
    image: "https://villaqrmenu.b-cdn.net/luxuryhousekuyumculuk/ajdabilezik.webp"
  }
];

export const ProductGrid: React.FC = () => {
  return (
    <section id="koleksiyonlar" className="py-24 bg-luxury-green-900 px-6 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 text-center md:text-left">
          <div className="w-full md:w-auto">
            <span className="text-luxury-gold tracking-[0.3em] text-xs uppercase block mb-3">Özenle Seçilmiş Parçalar</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Sezonun <span className="text-luxury-gold italic">Favorileri</span>
            </h2>
          </div>
          <Link 
            href="/urunler"
            className="hidden md:block border-b border-luxury-gold text-luxury-gold pb-1 hover:text-white hover:border-white transition-all duration-300 tracking-widest uppercase text-xs whitespace-nowrap"
          >
            Tümünü Gör
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-luxury-black mb-6 border border-white/5 group-hover:border-luxury-gold/50 transition-colors duration-500">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-luxury-green-900/0 group-hover:bg-luxury-green-900/40 transition-colors duration-500"></div>
                
                {/* Action Button */}
                <div className="absolute bottom-6 left-6 right-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                   <button className="w-full bg-white/90 backdrop-blur text-luxury-green-900 py-3 text-xs tracking-[0.2em] font-bold uppercase hover:bg-luxury-gold transition-colors">
                     İncele
                   </button>
                </div>
              </div>
              <div className="text-center group-hover:-translate-y-2 transition-transform duration-500">
                <p className="text-emerald-400/70 text-[10px] tracking-[0.2em] uppercase mb-2">{product.category}</p>
                <h3 className="text-white font-serif text-lg mb-2 group-hover:text-luxury-gold transition-colors">{product.name}</h3>
                <p className="text-luxury-gold font-bold tracking-wider">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 md:hidden">
          <Link 
            href="/urunler"
            className="border-b border-luxury-gold text-luxury-gold pb-1 hover:text-white hover:border-white transition-all duration-300 tracking-widest uppercase text-sm"
          >
            Tüm Koleksiyonu İncele
          </Link>
        </div>
      </div>
    </section>
  );
};

