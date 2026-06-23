import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assetsDir = path.resolve("src/assets");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png"]);
const maxWidth = 1600;
const quality = 80;

async function getImageFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        return getImageFiles(fullPath);
      }

      if (supportedExtensions.has(path.extname(entry.name).toLowerCase())) {
        return [fullPath];
      }

      return [];
    }),
  );

  return files.flat();
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

const imageFiles = await getImageFiles(assetsDir);

if (imageFiles.length === 0) {
  console.log("No source images found.");
  process.exit(0);
}

let totalBefore = 0;
let totalAfter = 0;

for (const inputPath of imageFiles) {
  const parsedPath = path.parse(inputPath);
  const outputPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);
  const inputStats = await fs.stat(inputPath);

  await sharp(inputPath)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality })
    .toFile(outputPath);

  const outputStats = await fs.stat(outputPath);
  totalBefore += inputStats.size;
  totalAfter += outputStats.size;

  console.log(
    `${path.relative(process.cwd(), inputPath)} -> ${path.relative(process.cwd(), outputPath)} ` +
      `(${formatBytes(inputStats.size)} -> ${formatBytes(outputStats.size)})`,
  );
}

const saved = totalBefore - totalAfter;
const percent = totalBefore > 0 ? Math.round((saved / totalBefore) * 100) : 0;

console.log(
  `Optimized ${imageFiles.length} image(s): ${formatBytes(totalBefore)} -> ${formatBytes(
    totalAfter,
  )} (${percent}% smaller).`,
);
