const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const root = __dirname;

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.html') return 'text/html; charset=utf-8';
  if (ext === '.js') return 'application/javascript; charset=utf-8';
  if (ext === '.css') return 'text/css; charset=utf-8';
  if (ext === '.png') return 'image/png';
  if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg';
  if (ext === '.svg') return 'image/svg+xml';
  return 'application/octet-stream';
}

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/' || urlPath === '') urlPath = '/index.html';

  let filePath = path.join(root, urlPath);

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // SPA-style fallback: always serve index.html instead of 404
      fs.readFile(path.join(root, 'index.html'), (indexErr, indexData) => {
        if (indexErr) {
          res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
          return res.end('index.html não encontrado no servidor.');
        }
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(indexData);
      });
      return;
    }

    res.writeHead(200, {'Content-Type': contentType(filePath)});
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Gerador Carreta da Saúde rodando na porta ${PORT}`);
});
