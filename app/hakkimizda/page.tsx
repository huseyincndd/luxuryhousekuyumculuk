import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Quote, Sparkles, Gem, Fingerprint } from 'lucide-react';

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-luxury-gold selection:text-black">
      <Navbar />
      
      <main>
        {/* 1. HERO */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://villaqrmenu.b-cdn.net/luxuryhousekuyumculuk/hakkimizda%20(1).webp" 
              className="w-full h-full object-cover opacity-30 scale-105 animate-[pulse_15s_ease-in-out_infinite_alternate]"
              alt="About Us Background"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
          </div>
          
          <div className="relative z-10 text-center px-6">
             <span className="block text-luxury-gold text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4 md:mb-6 animate-fade-in-up">
               Est. 1985 • Istanbul
             </span>
             <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl text-white leading-none tracking-tight mix-blend-overlay opacity-90 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
               SANATIN <br/> ÖTESİ
             </h1>
             <p className="mt-6 md:mt-8 text-gray-400 font-light text-sm md:text-lg max-w-xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
               Mücevher sadece bir aksesuar değildir; teninizde taşıdığınız bir ışıktır.
             </p>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-16 md:h-24 bg-gradient-to-b from-luxury-gold to-transparent opacity-50"></div>
        </section>

        {/* 2. THE PHILOSOPHY */}
        <section className="py-20 md:py-32 px-6 bg-[#080808]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
            
            <div className="w-full md:w-1/2 relative order-2 md:order-1">
               <div className="aspect-[3/4] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000 ease-out">
                 <img 
                   src="https://villaqrmenu.b-cdn.net/luxuryhousekuyumculuk/hakkimizda.webp" 
                   className="w-full h-full object-cover"
                   alt="Elegant Woman" 
                 />
                 <div className="absolute inset-0 border border-white/10 m-4"></div>
               </div>
               <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-24 h-24 md:w-40 md:h-40 bg-[#080808] border border-luxury-gold/20 flex items-center justify-center rounded-full animate-[spin_20s_linear_infinite]">
                  <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-luxury-gold text-center">
                    Luxury <br/> House <br/> Design
                  </div>
               </div>
            </div>

            <div className="w-full md:w-1/2 md:pl-10 order-1 md:order-2">
               <Quote className="w-8 h-8 md:w-12 md:h-12 text-luxury-gold mb-6 md:mb-8 opacity-50" />
               <h2 className="font-serif text-3xl md:text-6xl text-white mb-6 md:mb-8 leading-tight">
                 Kusursuzluk <br/> Bir <span className="text-luxury-gold italic">Takıntı</span> Değil, <br/> Standarttır.
               </h2>
               <div className="space-y-4 md:space-y-6 text-gray-400 font-light text-base md:text-lg leading-relaxed">
                 <p>
                   Luxury House olarak, trendlerin gelip geçici rüzgarına kapılmıyoruz. Bizim için tasarım, zamana meydan okuyan bir duruştur. 
                   Her bir çizgimiz, Kapalıçarşı'nın yüzyıllık ustalık geleneği ile modern dünyanın minimalist estetiği arasındaki o ince çizgide yürür.
                 </p>
                 <p>
                   Atölyemize giren her taş, kendi hikayesini anlatır. Bizim görevimiz, o hikayeyi en saf haliyle ortaya çıkarmaktır.
                   Fazlalıkları atar, özü parlatırız.
                 </p>
               </div>
               <div className="mt-8 md:mt-12 flex items-center gap-4">
                 <div className="h-[1px] w-8 md:w-12 bg-luxury-gold"></div>
                 <span className="font-serif italic text-lg md:text-xl text-white">Luxury House</span>
                 <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500">Mücevher Tasarım Evi</span>
               </div>
            </div>

          </div>
        </section>

        {/* 3. THE ATELIER (Scroll-telling) */}
        <section className="relative bg-[#050505] py-20 md:py-32">
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
              
              {/* Sticky Image Section (Hidden on Mobile) */}
              <div className="hidden md:flex sticky top-0 h-screen flex-col justify-center pt-24 pb-12">
                 <div className="w-full aspect-square overflow-hidden relative border border-white/5 bg-[#0a0a0a] shadow-2xl">
                    <img 
                       src="https://villaqrmenu.b-cdn.net/luxuryhousekuyumculuk/hakkimizda3.webp" 
                       alt="Goldsmith Hands"
                       className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white z-20">
                       <p className="font-serif text-3xl mb-2">Atölye</p>
                       <p className="text-luxury-gold text-xs tracking-[0.2em] uppercase">Ruhun Maddeye Dokunuşu</p>
                    </div>
                 </div>
              </div>

              {/* Scrolling Text Content */}
              <div className="space-y-16 md:space-y-48 py-8 md:py-32">
                 
                 {/* Mobile Header for Atelier */}
                 <div className="md:hidden mb-8">
                    <h2 className="font-serif text-3xl text-white mb-2">Atölyemiz</h2>
                    <div className="w-12 h-[1px] bg-luxury-gold"></div>
                 </div>

                 <div className="group pl-0 md:pl-12 border-l border-white/10 md:border-0 pl-6 md:pl-12">
                    <span className="text-luxury-gold text-4xl md:text-6xl font-serif opacity-30 group-hover:opacity-100 transition-opacity duration-500">01</span>
                    <h3 className="text-2xl md:text-3xl font-serif text-white mt-2 md:mt-4 mb-4 md:mb-6">Ham Madde</h3>
                    <p className="text-gray-400 leading-relaxed text-base md:text-lg font-light">
                       Her şey, dünyanın en ücra köşelerinden, etik madencilik ilkeleriyle çıkarılmış saf altın ve nadir taşlarla başlar. 
                       Materyalin kalitesi, tasarımın kaderini belirler. Biz sadece en iyiyi kabul ederiz.
                    </p>
                 </div>

                 <div className="group pl-0 md:pl-12 border-l border-white/10 md:border-0 pl-6 md:pl-12">
                    <span className="text-luxury-gold text-4xl md:text-6xl font-serif opacity-30 group-hover:opacity-100 transition-opacity duration-500">02</span>
                    <h3 className="text-2xl md:text-3xl font-serif text-white mt-2 md:mt-4 mb-4 md:mb-6">Ateş ve Sabır</h3>
                    <p className="text-gray-400 leading-relaxed text-base md:text-lg font-light">
                       Ustalık, metale hükmetmek değil, onunla dans etmektir. 1000 derecelik ateşin karşısında, 
                       40 yıllık tecrübenin getirdiği o hassas el hareketleriyle metal şekil alır. Aceleye yer yoktur.
                    </p>
                 </div>

                 <div className="group pl-0 md:pl-12 border-l border-white/10 md:border-0 pl-6 md:pl-12">
                    <span className="text-luxury-gold text-4xl md:text-6xl font-serif opacity-30 group-hover:opacity-100 transition-opacity duration-500">03</span>
                    <h3 className="text-2xl md:text-3xl font-serif text-white mt-2 md:mt-4 mb-4 md:mb-6">Mıhlama Sanatı</h3>
                    <p className="text-gray-400 leading-relaxed text-base md:text-lg font-light">
                       Bir taşı yuvasına yerleştirmek, bir binanın temelini atmak gibidir. Mikroskop altında yapılan milimetrik 
                       hesaplamalarla, taşın ışığı maksimum seviyede yansıtması sağlanır.
                    </p>
                 </div>

                 <div className="group pl-0 md:pl-12 border-l border-white/10 md:border-0 pl-6 md:pl-12">
                    <span className="text-luxury-gold text-4xl md:text-6xl font-serif opacity-30 group-hover:opacity-100 transition-opacity duration-500">04</span>
                    <h3 className="text-2xl md:text-3xl font-serif text-white mt-2 md:mt-4 mb-4 md:mb-6">Son Dokunuş</h3>
                    <p className="text-gray-400 leading-relaxed text-base md:text-lg font-light">
                       Polisaj ve kalite kontrol. Ürün, sahibine ulaşmadan önce, kusursuz olduğundan emin olmak için 
                       üç farklı uzman tarafından incelenir. Hata kabul edilmez.
                    </p>
                 </div>

              </div>
           </div>
        </section>

        {/* 4. VALUES */}
        <section className="py-20 md:py-32 px-6 border-t border-white/5 bg-[#020202]">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 md:mb-20">
                 <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Değerlerimiz</h2>
                 <div className="w-1 bg-luxury-gold h-8 md:h-12 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                 {/* Card 1 */}
                 <div className="bg-[#050505] p-10 md:p-16 text-center group hover:bg-[#0a0a0a] transition-colors duration-500">
                    <Gem className="w-8 h-8 md:w-10 md:h-10 text-white mx-auto mb-6 md:mb-8 group-hover:text-luxury-gold transition-colors duration-500" />
                    <h3 className="font-serif text-lg md:text-xl text-white mb-3 md:mb-4">Nadir</h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                       Sadece en az bulunan, karakteri olan taşları koleksiyonumuza dahil ediyoruz.
                    </p>
                 </div>
                 
                 {/* Card 2 */}
                 <div className="bg-[#050505] p-10 md:p-16 text-center group hover:bg-[#0a0a0a] transition-colors duration-500">
                    <Fingerprint className="w-8 h-8 md:w-10 md:h-10 text-white mx-auto mb-6 md:mb-8 group-hover:text-luxury-gold transition-colors duration-500" />
                    <h3 className="font-serif text-lg md:text-xl text-white mb-3 md:mb-4">Özgün</h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                       Seri üretim değil, kişiye özel. Her parça, sahibinin parmak izi kadar benzersizdir.
                    </p>
                 </div>

                 {/* Card 3 */}
                 <div className="bg-[#050505] p-10 md:p-16 text-center group hover:bg-[#0a0a0a] transition-colors duration-500">
                    <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white mx-auto mb-6 md:mb-8 group-hover:text-luxury-gold transition-colors duration-500" />
                    <h3 className="font-serif text-lg md:text-xl text-white mb-3 md:mb-4">Sonsuz</h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                       Modası geçmeyen tasarımlar ve ömür boyu bakım garantisi ile zamansızlık.
                    </p>
                 </div>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}