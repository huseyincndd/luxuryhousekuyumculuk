import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Collections } from '../components/Collections';
import { ProductGrid } from '../components/ProductGrid';
import { Heritage } from '../components/Heritage';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-luxury-black text-gray-100 font-sans selection:bg-luxury-gold selection:text-luxury-green-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        
        {/* Quote Section */}
        <div className="py-16 md:py-24 bg-luxury-green-900 text-center px-6 border-y border-luxury-gold/10">
          <div className="max-w-3xl mx-auto">
             <div className="text-luxury-gold mb-4 md:mb-6 text-4xl font-serif">"</div>
             <p className="font-serif text-xl md:text-3xl text-white italic leading-relaxed mb-6">
              Her parça, özenle seçilmiş anlarınızın sessiz tanığı, zamansız zarafetinizin yansımasıdır.
             </p>
             <p className="text-emerald-500 text-xs md:text-sm tracking-[0.2em] uppercase font-bold">— Luxury House Tasarım Ekibi</p>
          </div>
        </div>

        <ProductGrid />
        <Heritage />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;