'use client';

import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { MapPin, Phone, Mail, Clock, ArrowRight, Star, Globe } from 'lucide-react';

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-luxury-gold selection:text-black">
      <Navbar />
      
      <main>
        {/* 1. HERO SECTION WITH IMAGE BACKGROUND */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
           {/* Background Image */}
           <div className="absolute inset-0">
             <img 
               src="https://villaqrmenu.b-cdn.net/luxuryhousekuyumculuk/iletisim.webp" 
               className="w-full h-full object-cover opacity-50 scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
               alt="Luxury Store Interior"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]"></div>
           </div>
           
           <div className="relative z-10 text-center max-w-4xl px-6 mt-16 md:mt-20">
              <span className="block text-luxury-gold text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4 md:mb-6 animate-fade-in-up">
                Private Concierge
              </span>
              <h1 className="font-serif text-4xl md:text-8xl text-white leading-none tracking-tight mb-6 md:mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                İLETİŞİME <span className="italic font-light text-gray-400">GEÇİN</span>
              </h1>
              <p className="text-sm md:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Size özel bir deneyim sunmak için buradayız. Randevu talepleriniz ve sorularınız için bize ulaşın.
              </p>
           </div>
        </section>

        {/* 2. MAIN CONTENT: IMAGE & FORM COMPOSITION */}
        <section className="relative z-20 px-4 md:px-6 -mt-20 md:-mt-32 pb-12 md:pb-24">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row shadow-2xl">
            
            {/* LEFT: VISUAL & CONTACT INFO (The "Image" Column) */}
            <div className="w-full lg:w-5/12 relative min-h-[500px] md:min-h-[700px] group overflow-hidden bg-black">
               <img 
                 src="https://villaqrmenu.b-cdn.net/luxuryhousekuyumculuk/iletisim.webp" 
                 className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-[1.5s] group-hover:scale-110 grayscale group-hover:grayscale-0"
                 alt="Concierge Portrait"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
               
               {/* Overlay Content */}
               <div className="absolute inset-0 p-6 md:p-14 flex flex-col justify-end space-y-8 md:space-y-10">
                  
                  <div>
                    <h3 className="text-luxury-gold text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 md:mb-6 flex items-center gap-2">
                       <span className="w-6 md:w-8 h-[1px] bg-luxury-gold"></span>
                       İletişim Kanalları
                    </h3>
                  </div>

                  {/* Address */}
                  <div className="group/item hover:translate-x-2 transition-transform duration-300">
                     <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-1" />
                        <div>
                           <h4 className="font-serif text-xl md:text-2xl text-white mb-1 md:mb-2">Flagship Store</h4>
                           <p className="text-gray-400 font-light leading-relaxed text-xs md:text-sm">
                             Beylikdüzü, İstanbul
                           </p>
                           <a href="#map" className="text-luxury-gold text-[10px] md:text-xs uppercase tracking-wider mt-2 inline-block border-b border-transparent hover:border-luxury-gold">Haritada Göster</a>
                        </div>
                     </div>
                  </div>

                  {/* Phone */}
                  <div className="group/item hover:translate-x-2 transition-transform duration-300">
                     <div className="flex items-start gap-4">
                        <Phone className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-1" />
                        <div>
                           <h4 className="font-serif text-xl md:text-2xl text-white mb-1 md:mb-2">Telefon</h4>
                           <p className="text-gray-400 font-light text-xs md:text-sm">
                             Haftanın her günü, 09:00 - 22:00
                           </p>
                           <p className="text-white text-base md:text-lg mt-1">+90 (212) 555 01 23</p>
                        </div>
                     </div>
                  </div>

                  {/* Mail */}
                  <div className="group/item hover:translate-x-2 transition-transform duration-300">
                     <div className="flex items-start gap-4">
                        <Mail className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-1" />
                        <div>
                           <h4 className="font-serif text-xl md:text-2xl text-white mb-1 md:mb-2">E-Posta</h4>
                           <p className="text-white text-base md:text-lg mt-1">info@luxuryhouse.com</p>
                        </div>
                     </div>
                  </div>

               </div>
            </div>

            {/* RIGHT: THE FORM */}
            <div className="w-full lg:w-7/12 bg-[#0a0a0a] border-t border-r border-b border-white/10 p-6 md:p-20 relative">
               <div className="absolute top-0 right-0 w-20 md:w-32 h-20 md:h-32 border-t border-r border-luxury-gold/10"></div>
               
               <div className="mb-8 md:mb-12">
                 <h2 className="font-serif text-3xl md:text-4xl text-white mb-3 md:mb-4">Mesaj Gönderin</h2>
                 <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base">
                   Mücevher uzmanlarımız size yardımcı olmaktan mutluluk duyacaktır. 
                   Lütfen formu doldurun, en kısa sürede size dönüş yapalım.
                 </p>
               </div>

               <form className="space-y-8 md:space-y-12" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                     <div className="relative group">
                        <input 
                          type="text" 
                          placeholder="ADINIZ SOYADINIZ" 
                          className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-white focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-gray-600 text-xs md:text-sm tracking-wider uppercase font-bold"
                        />
                     </div>
                     <div className="relative group">
                        <input 
                          type="email" 
                          placeholder="E-POSTA ADRESİNİZ" 
                          className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-white focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-gray-600 text-xs md:text-sm tracking-wider uppercase font-bold"
                        />
                     </div>
                  </div>

                  <div className="relative group">
                     <input 
                       type="tel" 
                       placeholder="TELEFON NUMARANIZ" 
                       className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-white focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-gray-600 text-xs md:text-sm tracking-wider uppercase font-bold"
                     />
                  </div>

                  <div className="relative group">
                     <textarea 
                       rows={4}
                       placeholder="MESAJINIZ..." 
                       className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-white focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-gray-600 text-xs md:text-sm tracking-wider uppercase font-bold resize-none"
                     ></textarea>
                  </div>

                  <div className="pt-2 md:pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                     <button className="w-full md:w-auto bg-white text-black px-8 py-4 md:px-12 md:py-5 uppercase tracking-[0.25em] font-bold text-[10px] md:text-xs hover:bg-luxury-gold hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                       Gönder
                     </button>
                     <span className="text-gray-600 text-[9px] md:text-[10px] uppercase tracking-widest block text-center md:text-left w-full md:w-auto">
                       * Gizlilik politikamızı kabul etmiş olursunuz.
                     </span>
                  </div>
               </form>
            </div>

          </div>
        </section>

        {/* 3. MAP SECTION */}
        <section id="map" className="w-full h-[400px] md:h-[500px] relative filter grayscale contrast-125 hover:grayscale-0 transition-all duration-1000">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.123456789!2d28.644444!3d41.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55b3c0c0c0c0c%3A0x0!2zQmV5bGlrZMO8esO8LCBJc3RhbmJ1bA!5e0!3m2!1str!2str!4v1625123456789!5m2!1str!2str"
             width="100%" 
             height="100%" 
             style={{border:0}} 
             allowFullScreen 
             loading="lazy"
             className="opacity-70"
             referrerPolicy="no-referrer-when-downgrade"
           ></iframe>
           
           <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none"></div>
           
           {/* Floating Info Box - Positioned at bottom on mobile, top-right on desktop */}
           <div className="absolute bottom-4 left-4 right-4 md:bottom-auto md:top-10 md:left-auto md:right-20 bg-luxury-black/90 backdrop-blur-xl p-6 md:p-8 border border-white/10 shadow-2xl max-w-none md:max-w-xs">
              <Globe className="w-6 h-6 text-luxury-gold mb-3 md:mb-4" />
              <h3 className="text-white font-serif text-lg mb-2">Global Shipping</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                İstanbul dışındaki müşterilerimiz için dünya çapında sigortalı gönderim sağlıyoruz.
              </p>
              <div className="w-full h-[1px] bg-white/10"></div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}