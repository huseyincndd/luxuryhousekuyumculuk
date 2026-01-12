import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { FileText } from 'lucide-react';

export default function KullanimSartlariPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-luxury-gold selection:text-black">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-luxury-green-900/20 to-[#050505] border-b border-luxury-gold/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FileText className="w-12 h-12 md:w-16 md:h-16 text-luxury-gold mx-auto mb-6" />
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">
              Kullanım <span className="text-luxury-gold italic">Şartları</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base">
              Son Güncelleme: 2024
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            
            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl text-luxury-gold mb-4">1. Genel Koşullar</h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Luxury House web sitesini kullanarak, aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız. 
                Lütfen bu şartları dikkatle okuyunuz.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl text-luxury-gold mb-4">2. Web Sitesi Kullanımı</h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-4">
                Web sitemiz, mücevher koleksiyonlarımızı tanıtmak ve iletişim sağlamak amacıyla 
                kullanılmaktadır. Sitede yer alan tüm içerikler bilgilendirme amaçlıdır.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base ml-4">
                <li>Web sitesi içeriği yalnızca bilgilendirme amaçlıdır</li>
                <li>Ürün görselleri ve fiyatlar değişiklik gösterebilir</li>
                <li>Site içeriği izinsiz kopyalanamaz veya kullanılamaz</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl text-luxury-gold mb-4">3. Fiyatlandırma ve Ürünler</h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Web sitemizde gösterilen ürün görselleri ve bilgileri örnek niteliğindedir. 
                Gerçek ürünler, görsellerden farklılık gösterebilir. Fiyatlar ve ürün özellikleri 
                önceden haber verilmeksizin değiştirilebilir. Kesin fiyat ve ürün bilgileri için 
                mağazamızı ziyaret edebilir veya bizimle iletişime geçebilirsiniz.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl text-luxury-gold mb-4">4. İletişim ve Randevu</h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-4">
                İletişim formu aracılığıyla gönderdiğiniz bilgiler:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base ml-4">
                <li>Doğru ve güncel olmalıdır</li>
                <li>Yalnızca yasal amaçlarla kullanılacaktır</li>
                <li>Güvenli bir şekilde saklanacaktır</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl text-luxury-gold mb-4">5. Fikri Mülkiyet</h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Web sitesinde yer alan tüm içerikler (metinler, görseller, logolar) Luxury House'a 
                aittir ve telif hakları korunmaktadır. İzinsiz kullanım yasal işlemlere tabi tutulabilir.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl text-luxury-gold mb-4">6. Sorumluluk Reddi</h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Web sitemizdeki bilgilerin doğruluğu, güncelliği veya eksiksizliği konusunda 
                garanti vermemekteyiz. Sitede yer alan bilgilerden kaynaklanan herhangi bir 
                zarardan sorumlu tutulamayız.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl text-luxury-gold mb-4">7. Değişiklikler</h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Kullanım şartlarımız, önceden haber verilmeksizin değiştirilebilir. 
                Değişikliklerden haberdar olmak için bu sayfayı düzenli olarak ziyaret edebilirsiniz.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl text-luxury-gold mb-4">8. İletişim</h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Kullanım şartları hakkında sorularınız için bizimle iletişime geçebilirsiniz. 
                İletişim bilgilerimiz için <a href="/iletisim" className="text-luxury-gold hover:underline">İletişim</a> sayfamızı ziyaret edebilirsiniz.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-gray-500 text-xs md:text-sm italic">
                Bu kullanım şartları, Türkiye Cumhuriyeti yasalarına tabidir.
              </p>
            </div>

          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

