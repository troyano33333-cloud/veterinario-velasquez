const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
  { src: 'assets/images/fondo_principal.png',  quality: 82 },
  { src: 'assets/images/VETERINARIOO.png',     quality: 85 },
  { src: 'assets/images/tijeras.png',          quality: 82 },
  { src: 'assets/images/veterinario.png',      quality: 85 },
  { src: 'assets/images/gato.png',             quality: 85 },
  { src: 'assets/images/casos/tokio.jpeg',     quality: 80 },
  { src: 'assets/images/casos/mia.jpeg',       quality: 80 },
  { src: 'assets/images/casos/cooper .jpeg',   quality: 80 },
  { src: 'assets/images/footer.jpg',           quality: 80 },
];

(async () => {
  for (const img of images) {
    const ext  = path.extname(img.src);
    const dest = img.src.replace(ext, '.webp');
    const before = fs.statSync(img.src).size;
    await sharp(img.src)
      .webp({ quality: img.quality, effort: 6 })
      .toFile(dest);
    const after = fs.statSync(dest).size;
    const saved = (((before - after) / before) * 100).toFixed(1);
    console.log(`✅  ${path.basename(dest)} — ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB (−${saved}%)`);
  }
})();
