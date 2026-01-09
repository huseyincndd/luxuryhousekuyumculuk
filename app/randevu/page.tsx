'use client';

import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Calendar, Clock, User, Phone, Mail } from 'lucide-react';
import { Footer } from '../../components/Footer';

export default function RandevuPage() {
  return (
    <div className="min-h-screen bg-luxury-black text-gray-100 font-sans selection:bg-luxury-gold selection:text-luxury-green-900">
      <Navbar />
      <main className="pt-24">
        <div className="py-16 bg-luxury-green-900/20 border-b border-luxury-gold/10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-luxury-gold tracking-[0.3em] text-xs uppercase block mb-4">Randevu</span>
            <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight mb-4">
              Randevu <span className="text-luxury-gold italic">Alın</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Özel tasarım görüşmesi, ürün inceleme veya danışmanlık için randevu alabilirsiniz.
            </p>
          </div>
        </div>

        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-luxury-green-900/20 border border-luxury-green-800/30 p-8 md:p-12">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="flex items-center gap-2 text-sm text-gray-400 mb-3 uppercase tracking-wider">
                      <User className="w-4 h-4 text-luxury-gold" />
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-luxury-black/50 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-luxury-gold focus:bg-luxury-black transition-colors"
                      placeholder="Adınız ve soyadınız"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="flex items-center gap-2 text-sm text-gray-400 mb-3 uppercase tracking-wider">
                      <Phone className="w-4 h-4 text-luxury-gold" />
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full bg-luxury-black/50 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-luxury-gold focus:bg-luxury-black transition-colors"
                      placeholder="+90 (5XX) XXX XX XX"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="flex items-center gap-2 text-sm text-gray-400 mb-3 uppercase tracking-wider">
                      <Mail className="w-4 h-4 text-luxury-gold" />
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-luxury-black/50 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-luxury-gold focus:bg-luxury-black transition-colors"
                      placeholder="ornek@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="flex items-center gap-2 text-sm text-gray-400 mb-3 uppercase tracking-wider">
                      <Calendar className="w-4 h-4 text-luxury-gold" />
                      Hizmet Türü
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full bg-luxury-black/50 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-luxury-gold focus:bg-luxury-black transition-colors"
                      required
                    >
                      <option value="">Seçiniz</option>
                      <option value="ozel-tasarim">Özel Tasarım</option>
                      <option value="urun-inceleme">Ürün İnceleme</option>
                      <option value="danismanlik">Danışmanlık</option>
                      <option value="tamir-bakim">Tamir & Bakım</option>
                      <option value="degerleme">Değerleme</option>
                    </select>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="flex items-center gap-2 text-sm text-gray-400 mb-3 uppercase tracking-wider">
                      <Calendar className="w-4 h-4 text-luxury-gold" />
                      Tarih
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="w-full bg-luxury-black/50 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-luxury-gold focus:bg-luxury-black transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="flex items-center gap-2 text-sm text-gray-400 mb-3 uppercase tracking-wider">
                      <Clock className="w-4 h-4 text-luxury-gold" />
                      Saat
                    </label>
                    <select
                      id="time"
                      name="time"
                      className="w-full bg-luxury-black/50 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-luxury-gold focus:bg-luxury-black transition-colors"
                      required
                    >
                      <option value="">Seçiniz</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-3 uppercase tracking-wider">
                    Notlar (İsteğe Bağlı)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-luxury-black/50 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-luxury-gold focus:bg-luxury-black transition-colors resize-none"
                    placeholder="Eklemek istediğiniz notlar..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-luxury-gold text-luxury-green-900 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
                >
                  Randevu Talebi Gönder
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Randevu talebiniz gönderildikten sonra, en kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

