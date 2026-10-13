const http = require('http');
const dayjs = require('dayjs');

const sunucu = http.createServer((istek, yanit) => {
    console.log(istek.method, istek.url);

    if (istek.method !== 'GET') {
        yanit.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8', 'Allow': 'GET' });
        yanit.end('Yöntem desteklenmiyor');
    } else if (istek.url === '/') {
        yanit.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        yanit.end('<h1>Ana Sayfa</h1><a href="/hakkimda">Hakkımda</a>');
    } else if (istek.url === '/hakkimda') {
        yanit.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        yanit.end('<h1>Hakkımda</h1><p>Ad Soyad: Recep Efe Bıçakçı <br> Üniversite: Yozgat Bozok Üniversitesi <br> Bölüm: Bilgisayar Mühendisliği</p><a href="/">Anasayfa</a>');

    } else if (istek.url === '/api/ders') {
        const ders = { kod: 'BMH231', ad: 'Web Programlama', gun: 'Cuma' };
        yanit.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        yanit.end(JSON.stringify(ders));
    } else if (istek.url === '/api/agep') {
        const sonTarih = dayjs('2026-11-01');
        const bugun = dayjs().startOf('day');
        const kalanGun = sonTarih.diff(bugun, 'day');
        const veri = { sonTeslim: '01.11.2026', kalanGun: kalanGun };
        yanit.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        yanit.end(JSON.stringify(veri));
    } else {
        yanit.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        yanit.end('Sayfa bulunamadı');
    }
});

sunucu.listen(3000);