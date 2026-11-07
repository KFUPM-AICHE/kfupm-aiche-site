// Serves dist/ the way Vercel does: a real file first, then the rewrites in
// vercel.json, otherwise 404. `vite preview` is not used for testing because it
// sends every unknown path to the app, which hides broken direct links.
import { createReadStream, existsSync, readFileSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PORT = 4317;
const projectRoot = fileURLToPath(new URL('../../', import.meta.url));
const distDir = path.join(projectRoot, 'dist');
const configPath = path.join(projectRoot, 'vercel.json');

const config = existsSync(configPath) ? JSON.parse(readFileSync(configPath, 'utf8')) : {};
const rewrites = (config.rewrites ?? []).map(({ source, destination }) => ({
  pattern: new RegExp(`^${source}$`),
  destination,
}));

const CONTENT_TYPES = {
  '.css': 'text/css',
  '.html': 'text/html; charset=utf-8',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};

function findFile(urlPath) {
  const relative = urlPath === '/' ? 'index.html' : `.${urlPath}`;
  const file = path.resolve(distDir, relative);
  if (path.relative(distDir, file).startsWith('..')) return null;
  return existsSync(file) && statSync(file).isFile() ? file : null;
}

function resolve(urlPath) {
  const file = findFile(urlPath);
  if (file) return file;
  const rewrite = rewrites.find(({ pattern }) => pattern.test(urlPath));
  return rewrite ? findFile(rewrite.destination) : null;
}

createServer((request, response) => {
  const { pathname } = new URL(request.url, 'http://localhost');
  const file = resolve(decodeURIComponent(pathname));
  if (!file) {
    response.writeHead(404, { 'Content-Type': 'text/plain' }).end('404: Not found');
    return;
  }
  const contentType = CONTENT_TYPES[path.extname(file).toLowerCase()] ?? 'application/octet-stream';
  response.writeHead(200, { 'Content-Type': contentType });
  createReadStream(file).pipe(response);
}).listen(PORT, '127.0.0.1');
