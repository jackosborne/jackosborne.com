// Local-only server for regenerated review fixtures; run from any directory.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const mime = {'.html':'text/html', '.css':'text/css', '.js':'text/javascript', '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.webp':'image/webp'};
http.createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400).end(); return; }
  if (pathname === '/') pathname = '/plans/ui-stress-preview.html';
  const base = pathname.startsWith('/_/') ? path.join(root, 'src', '_') : path.join(root, 'plans');
  const relative = pathname.startsWith('/_/') ? pathname.slice(3) : pathname.slice('/plans/'.length);
  const file = path.resolve(base, relative);
  if ((!pathname.startsWith('/_/') && !pathname.startsWith('/plans/')) || !file.startsWith(base + path.sep)) {
    res.writeHead(404).end(); return;
  }
  fs.readFile(file, (error, data) => {
    if (error) { res.writeHead(404).end('Generate the preview with node plans/ui-stress-preview.cjs first.'); return; }
    res.writeHead(200, {'Content-Type':mime[path.extname(file)] || 'application/octet-stream', 'Cache-Control':'no-store'});
    res.end(data);
  });
}).listen(8766, '127.0.0.1', () => console.log('UI review preview: http://127.0.0.1:8766/'));
