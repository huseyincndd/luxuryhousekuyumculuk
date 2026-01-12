import { NextResponse } from 'next/server';

interface BigParaData {
  SEMBOLID: number;
  SEMBOL: string;
  ACIKLAMA: string;
  YUZDEDEGISIM: number;
  NET: number;
  TARIH: string;
  YUKSEK: number;
  DUSUK: number;
  DUNKUKAPANIS: number;
  ACILIS: number;
  KAPANIS: number;
  ALIS: number;
  SATIS: number;
  HACIMTL: number;
  OrderId: number;
  TARIHFORMAT: string;
}

interface BigParaResponse {
  data: BigParaData[];
  ozet: any;
}

export async function GET() {
  try {
    // BigPara API'den veri çek
    const response = await fetch('https://api.bigpara.hurriyet.com.tr/doviz/headerlist/anasayfa', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API yanıt vermedi: ${response.status}`);
    }

    const data: BigParaResponse = await response.json();

    // İhtiyacımız olan sembolleri bul
    const gldgr = data.data.find((item) => item.SEMBOL === 'GLDGR'); // Gram Altın
    const usdtry = data.data.find((item) => item.SEMBOL === 'USDTRY'); // USD/TRY
    const eurtry = data.data.find((item) => item.SEMBOL === 'EURTRY'); // EUR/TRY

    // Veriyi formatla
    // YUZDEDEGISIM: BigPara'dan gelen gerçek yüzde değişim (dünkü kapanışa göre)
    const formattedData = {
      gram: gldgr
        ? {
            price: gldgr.SATIS || gldgr.KAPANIS || gldgr.ALIS || 0,
            change: gldgr.YUZDEDEGISIM || 0, // Gerçek veri: BigPara'dan geliyor
            yesterdayClose: gldgr.DUNKUKAPANIS || 0, // Dünkü kapanış (doğrulama için)
            label: 'Gram Altın',
          }
        : null,
      usd: usdtry
        ? {
            price: usdtry.SATIS || usdtry.KAPANIS || usdtry.ALIS || 0,
            change: usdtry.YUZDEDEGISIM || 0, // Gerçek veri: BigPara'dan geliyor
            yesterdayClose: usdtry.DUNKUKAPANIS || 0,
            label: 'USD/TRY',
          }
        : null,
      eur: eurtry
        ? {
            price: eurtry.SATIS || eurtry.KAPANIS || eurtry.ALIS || 0,
            change: eurtry.YUZDEDEGISIM || 0, // Gerçek veri: BigPara'dan geliyor
            yesterdayClose: eurtry.DUNKUKAPANIS || 0,
            label: 'EUR/TRY',
          }
        : null,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error('Altın fiyatları alınırken hata:', error);
    return NextResponse.json(
      { error: 'Veri alınamadı', message: error instanceof Error ? error.message : 'Bilinmeyen hata' },
      { status: 500 }
    );
  }
}

