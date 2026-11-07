// Creates web-ready WebP copies of photos in public/. Originals are only read.
//
//   node scripts/optimize-images.mjs --only "a.jpg,b.png" --out <folder>
//
// Each output is rotated upright from its EXIF orientation and converted to
// sRGB, keeps any transparency, and carries no metadata (Sharp drops GPS, EXIF,
// XMP and ICC data unless told to keep them, and this script never does).
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import sharp from 'sharp';

const WIDTHS = [480, 960, 1600];
const WEBP = { quality: 80, alphaQuality: 100, effort: 6 };
const SOURCE_DIR = fileURLToPath(new URL('../public', import.meta.url));

const fail = (message) => {
  console.error(message);
  process.exit(1);
};

const { values } = parseArgs({
  options: { only: { type: 'string' }, out: { type: 'string' } },
});
if (!values.only || !values.out) {
  fail('Usage: node scripts/optimize-images.mjs --only "a.jpg,b.png" --out <folder>');
}

const outDir = path.resolve(values.out);
// path.relative follows the platform's case rules, so "Public" is caught on Windows.
if (path.relative(SOURCE_DIR, outDir) === '') {
  fail('Refusing to write next to the originals. Choose a different --out folder.');
}

// The extension stays in the name because clubs.JPG and clubs.png are different images.
function outputKey(name) {
  const clean = (text) => text.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const { name: stem, ext } = path.parse(name);
  if (!clean(stem)) {
    fail(`"${name}" has no English letters or numbers to name its copies. Rename it first.`);
  }
  return `${clean(stem)}-${clean(ext)}`;
}

// Check every name before any slow encoding starts.
const names = values.only.split(',').map((s) => s.trim()).filter(Boolean);
const keys = new Map();
for (const name of names) {
  // SVG logos stay as SVG, so only JPEG and PNG files are accepted.
  if (!/\.(jpe?g|png)$/i.test(name)) fail(`"${name}" is not a JPEG or PNG. It was not converted.`);
  const key = outputKey(name);
  if (keys.has(key)) fail(`Name clash: "${name}" and "${keys.get(key)}" both become "${key}".`);
  keys.set(key, name);
}

await fs.mkdir(outDir, { recursive: true });

// Keep entries from earlier runs, so one image can be added without redoing the rest.
const manifestPath = path.join(outDir, 'manifest.json');
const manifest = await fs.readFile(manifestPath, 'utf8').then(JSON.parse).catch((error) => {
  if (error.code === 'ENOENT') return {};
  throw error;
});

for (const [key, name] of keys) {
  const input = path.join(SOURCE_DIR, name);
  const { size: sourceBytes } = await fs.stat(input);
  // autoOrient reports the size after EXIF rotation, matching rotate() below.
  const { autoOrient: { width, height } } = await sharp(input).metadata();

  // Never enlarge. An image narrower than a target width gets one copy at its own width.
  const targets = [...new Set(WIDTHS.map((w) => Math.min(w, width)))];
  const variants = [];
  for (const w of targets) {
    const file = `${key}-${w}.webp`;
    const info = await sharp(input)
      .rotate()
      .resize({ width: w, withoutEnlargement: true })
      .webp(WEBP)
      .toFile(path.join(outDir, file));
    variants.push({ file, width: info.width, height: info.height, bytes: info.size });
  }
  manifest[name] = { width, height, sourceBytes, variants };
}

await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Wrote ${keys.size} image(s) to ${outDir}`);
