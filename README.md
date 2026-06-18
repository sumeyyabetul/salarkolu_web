# Salarkolu Köyü — Resmi Web Sitesi

[![GitHub](https://img.shields.io/badge/GitHub-sumeyyabetul%2Fsalarkolu__web-181717?logo=github)](https://github.com/sumeyyabetul/salarkolu_web)

Salarkolu Köyü'nün kültürel mirasını, etkinliklerini ve güncel duyurularını paylaşmak amacıyla hazırlanmış modern ve mobil uyumlu bir web sitesidir.
## Özellikler

- **Anasayfa** — Fotoğraf slider'ı, güncel etkinlikler ve duyurular
- **Hakkımızda** — Köyün tarihçesi ve dernek bilgileri
- **Haberler** — Köy etkinlikleri ve güncel haberler
- **Galeri** — Köy fotoğrafları
- **İletişim** — İletişim formu ve bilgileri
- Mobil uyumlu tasarım (responsive)
- Yükleme ekranı ve animasyonlu geçişler
- Font Awesome ikon desteği

## Teknolojiler

| Alan | Kullanılan |
|------|------------|
| Yapı | HTML5 |
| Stil | CSS3 |
| Etkileşim | Vanilla JavaScript |
| İkonlar | [Font Awesome 6](https://fontawesome.com/) |

## Proje Yapısı

```
salarkolu_web/
├── index.html          # Anasayfa
├── hakkımızda.html     # Hakkımızda sayfası
├── haberler.html       # Haberler sayfası
├── galeri.html         # Galeri sayfası
├── iletişim.html       # İletişim sayfası
├── anasayfa.css        # Anasayfa stilleri
├── hakkımızda.css
├── haberler.css
├── galeri.css
├── iletişim.css
├── script.js           # Ortak JavaScript (slider, menü vb.)
├── iletişimsayfası.js  # İletişim formu scripti
└── img/                # Logo ve fotoğraflar
```

## Kurulum ve Çalıştırma

Bu proje statik bir web sitesidir; ek bir kurulum gerektirmez.

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/sumeyyabetul/salarkolu_web.git
   cd salarkolu_web
   ```

2. `index.html` dosyasını tarayıcınızda açın.

   Veya yerel bir sunucu ile çalıştırın:
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (npx)
   npx serve .
   ```

3. Tarayıcıda `http://localhost:8000` adresine gidin.

## Ekran Görüntüleri

> Anasayfa, galeri ve haberler sayfalarının ekran görüntülerini buraya ekleyebilirsiniz.

## Katkıda Bulunma

1. Bu depoyu fork edin
2. Yeni bir dal oluşturun (`git checkout -b ozellik/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Dalınızı push edin (`git push origin ozellik/yeni-ozellik`)
5. Bir Pull Request açın

## Lisans

Bu proje Salarkolu Köyü Derneği adına geliştirilmiştir. Tüm hakları saklıdır.

---

<p align="center">
  <i>Doğayla uyum içinde tasarlandı</i> 🌿
</p>
