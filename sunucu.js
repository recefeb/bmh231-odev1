const http =require('http');

const sunucu=http.createServer((istek,yanit)=>{
console.log(istek.method, istek.url);

yanit.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
yanit.end('<h1> Ana Sayfa</h1><a href="/hakkimda">Hakkımda</a>');
});

sunucu.listen(3000);