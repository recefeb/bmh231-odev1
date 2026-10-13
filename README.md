# bmh231-odev1

BMH231 Web Programlama dersi Ödev 1 için hazırlanmış, Express kullanmadan yalnızca Node.js `http` modülü ve `dayjs` paketiyle yazılmış küçük bir HTTP sunucusudur.

## Amaç

Bir web isteğinin sunucu tarafında nasıl karşılandığını (yöntem ve yola göre yanıt üretme, durum kodları, `Content-Type` başlıkları) uygulamalı olarak göstermek ve projeyi Git ile sürüm kontrolü altında yönetmek.

## Gereksinimler

- Node.js (LTS sürüm) ve npm
- Git

## Kurulum ve Çalıştırma

```bash
git clone https://github.com/recefeb/bmh231-odev1.git
cd bmh231-odev1
npm install
npm start
```

Sunucu `http://localhost:3000` adresinde çalışır. Durdurmak için terminalde `Ctrl+C` kullanılır.

## Desteklenen Yollar

| Yol | Yöntem | Durum kodu | Yanıt |
|---|---|---|---|
| `/` | GET | 200 | HTML; başlık ve `/hakkimda` bağlantısı |
| `/hakkimda` | GET | 200 | HTML; kısa tanıtım sayfası |
| `/api/ders` | GET | 200 | JSON; ders kodu, adı ve günü |
| `/api/agep` | GET | 200 | JSON; AGEP son teslim tarihi ve `dayjs` ile hesaplanan kalan gün sayısı |
| Diğer tüm yollar | GET | 404 | Düz metin: "Sayfa bulunamadı" |
| Herhangi bir yol | GET dışındaki yöntemler | 405 | Düz metin; yanıtta `Allow: GET` başlığı bulunur |

Her yanıtta `Content-Type` başlığı `charset=utf-8` ile gönderilir. Sunucu her isteğin yöntemini ve yolunu terminale yazdırır.

## Örnek İstek

```bash
curl -i http://localhost:3000/api/agep
```