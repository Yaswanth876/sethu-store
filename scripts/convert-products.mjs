
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const inputDir = "public/products";
const outputDir = "public/optimized/products";

await fs.mkdir(outputDir, { recursive: true });

const files = await fs.readdir(inputDir);
const supported = /\.(jpe?g|png|tiff?)$/i;

let converted = 0;
let failed = 0;

for (const file of files) {
  if (!supported.test(file)) continue;

  const originalPath = path.join(inputDir, file);
  const outputName =
    path.parse(file).name.trim() + ".webp";
  const outputPath = path.join(outputDir, outputName);

  try {
    await sharp(originalPath)
      .rotate()
      .resize(600, 600, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log(`Converted: ${file} -> ${outputName}`);
    converted++;
  } catch (error) {
    console.error(`Failed: ${file}`, error.message);
    failed++;
  }
}

console.log(`\nFinished: ${converted} converted, ${failed} failed.`);
