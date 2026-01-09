'use client';

import React from 'react';
import { Mail } from 'lucide-react';

export const Newsletter: React.FC = () => {
  return (
    <section id="bülten" className="py-16 md:py-24 bg-luxury-green-900 relative isolate overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-luxury-gold/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Mail className="w-10 h-10 md:w-12 md:h-12 text-luxury-gold mx-auto mb-6 opacity-80" />
        
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 md:mb-6">
          Ayrıcalıklı Dünyamıza Katılın
        </h2>
        <p className="text-gray-300 font-sans mb-8 md:mb-10 text-sm md:text-lg max-w-lg mx-auto">
          Yeni koleksiyonlardan, özel davetlerden ve mücevher bakımı ipuçlarından ilk sizin haberiniz olsun.
        </p>

        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="E-posta adresiniz" 
            className="flex-1 bg-white/5 border border-white/20 text-white px-6 py-4 focus:outline-none focus:border-luxury-gold focus:bg-white/10 transition-colors font-sans text-sm w-full"
          />
          <button className="bg-luxury-gold text-luxury-green-900 px-8 py-4 uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors duration-300 text-xs md:text-sm w-full md:w-auto">
            Kayıt Ol
          </button>
        </form>
        
        <p className="mt-6 text-[10px] md:text-xs text-gray-500 px-4">
          Kayıt olarak, Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metnini okuduğunuzu kabul edersiniz.
        </p>
      </div>
    </section>
  );
};