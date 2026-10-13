const http = require('http');

const sunucu = http.createServer((istek, yanit) => {
    console.log(istek.method, istek.url);

    if (istek.url === '/') {
        yanit.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        yanit.end('<h1>Ana Sayfa</h1><a href="/hakkimda">Hakkımda</a>');
    } else if (istek.url === '/hakkimda') {
        yanit.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        yanit.end('<h1>Hakkımda</h1><p>Ad Soyad: Recep Efe Bıçakçı <br> Üniversite: Yozgat Bozok Üniversitesi <br> Bölüm: Bilgisayar Mühendisliği</p><a href="/">Anasayfa</a>');

    }
});

sunucu.listen(3000);