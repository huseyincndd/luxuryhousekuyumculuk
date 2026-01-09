import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ArrowRight, Star, Gem, PenTool, Sparkles, MoveRight } from 'lucide-react';

const COLLECTIONS = [
  {
    id: 'bridal',
    year: 'WEDDING',
    title: "Gelin Koleksiyonu",
    subtitle: "En Özel Gününüz İçin",
    description: "Hayatınızın en özel günü için özenle seçilmiş parçalar. Baget pırlanta yüzüklerden su yolu gerdanlıklara kadar, düğününüzü unutulmaz kılacak her detay bu koleksiyonda.",
    image: "https://villaqrmenu.b-cdn.net/luxuryhousekuyumculuk/gelinlikkoleksiyon-luxuryhousekuyumculuk.webp",
    accentColor: "text-luxury-gold"
  },
  {
    id: 'classic',
    year: 'CLASSIC',
    title: "Zamansız Klasikler",
    subtitle: "Nadir ve Eşsiz",
    description: "Modası asla geçmeyen, nesilden nesile aktarılacak parçalar. Klasik tasarımların modern yorumlarıyla, her zaman şık kalacak koleksiyonumuz.",
    image: "https://villaqrmenu.b-cdn.net/luxuryhousekuyumculuk/zamansizklasikler.webp",
    accentColor: "text-emerald-500"
  },
  {
    id: 'daily',
    year: 'DAILY',
    title: "Günlük Zarafet",
    subtitle: "Her An Işıldayın",
    description: "Günlük hayatınızın her anında yanınızda olacak, şık ve rahat parçalar. İş hayatından özel günlere kadar, her duruma uygun tasarımlar.",
    image: "https://villaqrmenu.b-cdn.net/luxuryhousekuyumculuk/gunlukzarafet.webp",
    accentColor: "text-white"
  }
];

const MATERIALS = [
  {
    icon: Gem,
    title: "Kaliteli Malzeme",
    text: "Güvenilir tedarikçilerden temin ettiğimiz, standartlara uygun altın ve değerli taşlar kullanıyoruz."
  },
  {
    icon: PenTool,
    title: "Usta İşçiliği",
    text: "Deneyimli ustalarımızın elinde özenle şekillenen, her detayı titizlikle işlenmiş parçalar."
  },
  {
    icon: Sparkles,
    title: "Güvenilir Hizmet",
    text: "Koleksiyonumuzdan aldığınız her parça, kalite garantisi ve bakım hizmeti ile yanınızda."
  }
];

export default function KoleksiyonlarPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-luxury-gold selection:text-black">
      <Navbar />
      
      <main>
        {/* 1. HERO SECTION */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://villaqrmenu.b-cdn.net/luxuryhousekuyumculuk/koleksiyonlar.webp" 
              className="w-full h-full object-cover opacity-40"
              alt="Collections Background"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
          </div>
          <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-luxury-gold/5 rounded-full blur-[80px] md:blur-[100px] z-0 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
             <div className="flex flex-col md:flex-row justify-between items-end gap-8 md:gap-12">
               <div className="max-w-3xl">
                 <span className="text-luxury-gold text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4 md:mb-6 block flex items-center gap-3">
                   <span className="w-8 h-[1px] bg-luxury-gold"></span>
                   Katalog
                 </span>
                 <h1 className="font-serif text-5xl md:text-8xl text-white leading-[0.9] tracking-tight mb-6 md:mb-8">
                   Miras & <br/>
                   <span className="italic text-gray-500">Modernite</span>
                 </h1>
                 <p className="text-lg md:text-xl text-gray-400 font-light max-w-xl leading-relaxed">
                   Özel günlerinizden günlük hayatınıza kadar, her anınız için özenle seçilmiş koleksiyonlar. 
                   Luxury House, kaliteli mücevheri herkese ulaştırma misyonuyla sizlerle.
                 </p>
               </div>
               
               <div className="hidden md:block pb-4">
                 <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                    <span className="text-[10px] tracking-widest uppercase text-gray-500">15+ Yıl • Türkiye •</span>
                 </div>
               </div>
             </div>
          </div>
        </section>

        {/* 2. COLLECTIONS LOOKBOOK */}
        <section className="py-20 md:py-32 px-6">
          <div className="max-w-7xl mx-auto flex flex-col gap-24 md:gap-40">
            {COLLECTIONS.map((col, index) => (
              <div key={col.id} className={`flex flex-col lg:flex-row items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Area */}
                <div className="w-full lg:w-7/12 relative group">
                  <div className="relative aspect-[3/4] md:aspect-[4/3] overflow-hidden">
                    <img 
                      src={col.image} 
                      alt={col.title} 
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 filter brightness-75 group-hover:brightness-100"
                    />
                    
                    {/* Overlay Border */}
                    <div className="absolute inset-4 border border-white/20 z-20 transition-all duration-500 group-hover:inset-6"></div>
                  </div>
                  
                  {/* Floating Year/Tag */}
                  <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-black border border-white/10 p-4 md:p-6 z-30 shadow-2xl">
                     <span className="block font-serif text-xl md:text-2xl text-luxury-gold">{col.year}</span>
                     <span className="text-[10px] tracking-widest uppercase text-gray-500">Koleksiyon</span>
                  </div>
                </div>

                {/* Content Area (Overlapping) */}
                <div className={`w-full lg:w-5/12 relative z-20 -mt-16 md:-mt-20 lg:mt-0 ${index % 2 === 0 ? 'lg:ml-[-5rem]' : 'lg:mr-[-5rem] lg:text-right'}`}>
                  <div className={`bg-[#0a0a0a] p-8 md:p-14 border-t border-luxury-gold/20 shadow-2xl relative ${index % 2 === 1 ? 'lg:text-right' : 'lg:text-left'} mx-4 md:mx-0`}>
                    <span className={`text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase block mb-3 md:mb-4 ${col.accentColor}`}>
                      {col.subtitle}
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 md:mb-6 leading-tight">
                      {col.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                      {col.description}
                    </p>
                    <button className={`group inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-luxury-gold hover:text-luxury-gold transition-all duration-300 uppercase text-[10px] md:text-xs tracking-widest ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                      Parçaları İncele
                      <MoveRight className={`w-4 h-4 transition-transform ${index % 2 === 1 ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* 3. ATELIER & CRAFTSMANSHIP */}
        <section className="py-20 md:py-24 bg-[#080808] border-t border-white/5 relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 md:mb-20">
              <Star className="w-6 h-6 md:w-8 md:h-8 text-luxury-gold mx-auto mb-4 fill-current opacity-60" />
              <h2 className="font-serif text-3xl md:text-4xl text-white">Atölyeden Işıltılar</h2>
              <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto mt-4 md:mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {MATERIALS.map((item, idx) => (
                <div key={idx} className="group bg-white/5 border border-white/5 p-8 md:p-12 hover:bg-white/10 transition-colors duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <item.icon className="w-20 h-20 md:w-24 md:h-24" />
                  </div>
                  
                  <div className="relative z-10">
                    <item.icon className="w-6 h-6 md:w-8 md:h-8 text-luxury-gold mb-4 md:mb-6" />
                    <h3 className="font-serif text-xl md:text-2xl text-white mb-3 md:mb-4">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-white/10 pl-4">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. FINAL CTA */}
        <section className="h-[50vh] md:h-[60vh] relative flex items-center justify-center overflow-hidden">
           <div className="absolute inset-0">
             <img 
               src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2000&auto=format&fit=crop" 
               className="w-full h-full object-cover filter grayscale brightness-50"
             />
             <div className="absolute inset-0 bg-black/40"></div>
           </div>
           
           <div className="relative z-10 text-center px-6 max-w-4xl">
             <h2 className="font-serif text-4xl md:text-7xl text-white mb-6 md:mb-8">
               Kendi Koleksiyonunuzu <br/> <span className="text-luxury-gold italic">Yaratın</span>
             </h2>
             <p className="text-gray-300 text-sm md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto">
               Mevcut koleksiyonlarımız size ilham versin, hayalinizdeki tasarımı birlikte gerçeğe dönüştürelim.
             </p>
             <button className="bg-white text-black px-8 py-4 md:px-12 md:py-5 uppercase tracking-[0.2em] font-bold hover:bg-luxury-gold hover:text-black transition-colors duration-300 text-xs md:text-base">
               Özel Tasarım Randevusu
             </button>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}