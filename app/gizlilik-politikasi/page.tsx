import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ShieldCheck } from 'lucide-react';

export default function GizlilikPolitikasiPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-luxury-gold selection:text-black">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-luxury-green-900/20 to-[#050505] border-b border-luxury-gold/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 text-luxury-gold mx-auto mb-6" />
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">
              Gizlilik <span className="text-luxury-gold italic">Politikası</span>
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
              <h2 className="font-serif text-2xl md:text-3xl text-luxury-gold mb-4">1. Genel Bilgiler</h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Luxury House olarak, müşterilerimizin kişisel verilerinin korunmasına büyük önem veriyoruz. 
                Bu gizlilik politikası, web sitemiz aracılığıyla topladığımız bilgilerin nasıl kullanıldığını 
                ve korunduğunu açıklamaktadır.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl text-luxury-gold mb-4">2. Toplanan Bilgiler</h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-4">
                İletişim formları aracılığıyla aşağıdaki bilgileri toplayabiliriz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base ml-4">
                <li>Ad ve soyad</li>
                <li>E-posta adresi</li>
                <li>Telefon numarası</li>
                <li>İletişim mesajınız</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl text-luxury-gold mb-4">3. Bilgilerin Kullanımı</h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-4">
                Topladığımız bilgiler aşağıdaki amaçlarla kullanılmaktadır:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base ml-4">
                <li>Randevu taleplerinizi karşılamak</li>
                <li>Sorularınıza yanıt vermek</li>
                <li>Mücevher koleksiyonlarımız hakkında bilgi sağlamak</li>
                <li>Yasal yükümlülüklerimizi yerine getirmek</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl text-luxury-gold mb-4">4. Bilgilerin Korunması</h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Kişisel verileriniz, güvenli bir şekilde saklanmakta ve yalnızca yetkili personelimiz 
                tarafından erişilebilmektedir. Bilgileriniz üçüncü taraflarla paylaşılmamaktadır.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl text-luxury-gold mb-4">5. Çerezler (Cookies)</h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanabilir. 
                Tarayıcı ayarlarınızdan çerezleri yönetebilirsiniz.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl text-luxury-gold mb-4">6. Haklarınız</h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-4">
                KVKK kapsamında aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base ml-4">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>İşlenen verileriniz hakkında bilgi talep etme</li>
                <li>Verilerinizin silinmesini talep etme</li>
                <li>Verilerinizin düzeltilmesini talep etme</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl text-luxury-gold mb-4">7. İletişim</h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz. 
                İletişim bilgilerimiz için <a href="/iletisim" className="text-luxury-gold hover:underline">İletişim</a> sayfamızı ziyaret edebilirsiniz.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-gray-500 text-xs md:text-sm italic">
                Bu politika, yasal gerekliliklere uygun olarak hazırlanmıştır ve gerektiğinde güncellenebilir.
              </p>
            </div>

          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

