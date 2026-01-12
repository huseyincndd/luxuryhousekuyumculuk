"use client";

import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Clock, Activity } from 'lucide-react';

interface MarketData {
  id: string;
  label: string;
  price: number;
  currency: string;
  change: number; // Percentage change
}

const INITIAL_DATA: MarketData[] = [
  { id: 'GRAM', label: 'Gram Altın', price: 2980.45, currency: '₺', change: 0.45 },
  { id: 'CEYREK', label: 'Çeyrek Altın', price: 4895.90, currency: '₺', change: 0.60 },
  { id: 'ONS', label: 'ONS Altın', price: 2340.10, currency: '$', change: -0.12 },
  { id: 'USD', label: 'USD/TRY', price: 34.15, currency: '₺', change: 0.05 },
];

export const LiveTicker: React.FC = () => {
  const [data, setData] = useState<MarketData[]>(INITIAL_DATA);
  const [time, setTime] = useState<string>('');

  // Clock Update
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch Real Gold Prices from API - Sadece 1 kere, sayfa yüklendiğinde
  useEffect(() => {
    const fetchGoldPrices = async () => {
      try {
        const response = await fetch('/api/gold-prices');
        if (!response.ok) throw new Error('API yanıt vermedi');
        
        const apiData = await response.json();
        
        // API'den gelen veriyi formatla
        // change değerleri BigPara API'sinden gelen gerçek yüzde değişimlerdir
        // Formül: ((Bugünkü Fiyat - Dünkü Kapanış) / Dünkü Kapanış) * 100
        const formattedData: MarketData[] = [
          {
            id: 'GRAM',
            label: 'Gram Altın',
            price: apiData.gram?.price || INITIAL_DATA[0].price,
            currency: '₺',
            change: apiData.gram?.change || INITIAL_DATA[0].change // Gerçek: BigPara'dan geliyor
          },
          {
            id: 'CEYREK',
            label: 'Çeyrek Altın',
            price: (apiData.gram?.price || INITIAL_DATA[0].price) * 1.64, // Çeyrek yaklaşık olarak gram'ın 1.64 katı
            currency: '₺',
            // Çeyrek = Gram * 1.64 (sabit oran) olduğu için değişim yüzdesi Gram ile aynı
            change: apiData.gram?.change || INITIAL_DATA[1].change
          },
          {
            id: 'ONS',
            label: 'ONS Altın',
            price: ((apiData.gram?.price || INITIAL_DATA[0].price) * 31.1035) / (apiData.usd?.price || INITIAL_DATA[3].price), // ONS = (Gram * 31.1035) / USD
            currency: '$',
            // ONS hesaplaması: Gram ve USD'ye bağlı, değişim yüzdesi yaklaşık olarak Gram ile aynı
            change: apiData.gram?.change || INITIAL_DATA[2].change
          },
          {
            id: 'USD',
            label: 'USD/TRY',
            price: apiData.usd?.price || INITIAL_DATA[3].price,
            currency: '₺',
            change: apiData.usd?.change || INITIAL_DATA[3].change // Gerçek: BigPara'dan geliyor
          }
        ];

        // Sadece geçerli fiyatları güncelle (0'dan büyükse)
        setData(prevData => formattedData.map((newItem, index) => {
          const oldItem = prevData[index];
          // Eğer yeni fiyat geçerli değilse, eski fiyatı koru
          if (newItem.price > 0 && !isNaN(newItem.price)) {
            return newItem;
          }
          return oldItem;
        }));
      } catch (error) {
        console.error('Altın fiyatları alınırken hata:', error);
        // Hata durumunda mevcut verileri koru
      }
    };

    // Sadece 1 kere çalışır - sayfa yüklendiğinde
    fetchGoldPrices();
  }, []); // Boş dependency array - sadece mount'ta çalışır

  return (
    <section className="bg-luxury-black border-b border-luxury-gold/20 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        
        {/* Title / Status Section */}
        <div className="bg-luxury-green-900 px-6 py-3 md:py-4 flex items-center justify-between md:justify-start gap-4 border-b md:border-b-0 md:border-r border-luxury-gold/20 min-w-[200px]">
          <div className="flex items-center gap-2 text-luxury-gold">
            <Activity className="w-4 h-4 animate-pulse" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Canlı Piyasa</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-xs font-mono">
            <Clock className="w-3 h-3" />
            <span>{time}</span>
          </div>
        </div>

        {/* Ticker Items */}
        <div className="flex-1 overflow-x-auto scrollbar-hide">
          <div className="flex divide-x divide-white/5">
            {data.map((item) => (
              <div key={item.id} className="px-3 md:px-4 lg:px-6 py-3 md:py-4 flex items-center gap-3 md:gap-4 lg:gap-6 group hover:bg-white/5 transition-colors duration-300 flex-shrink-0">
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-wider mb-0.5 font-serif whitespace-nowrap">{item.label}</span>
                  <span className="text-white font-mono text-xs md:text-sm lg:text-base font-medium tracking-wide whitespace-nowrap">
                    {item.price.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span className="text-luxury-gold/70">{item.currency}</span>
                  </span>
                </div>
                
                <div className={`flex items-center gap-1 text-[10px] md:text-xs font-bold whitespace-nowrap ${item.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {item.change >= 0 ? <TrendingUp className="w-3 h-3 flex-shrink-0" /> : <TrendingDown className="w-3 h-3 flex-shrink-0" />}
                  <span>%{Math.abs(item.change).toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

