import sharp from "sharp";
import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";

const inputDir = "./src/assets";
const outputDir = "./src/assets/optimized";

await mkdir(outputDir, { recursive: true });

const files = await readdir(inputDir);
let converted = 0;

for (const file of files) {
  if (!/\.(png|jpe?g)$/i.test(file)) continue;

  const inputPath = path.join(inputDir, file);
  const outputName = file.replace(/\.(png|jpe?g)$/i, ".webp");
  const outputPath = path.join(outputDir, outputName);

  await sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPath);

  const original = await stat(inputPath);
  const optimized = await stat(outputPath);

  const savings = (
    (1 - optimized.size / original.size) * 100
  ).toFixed(1);

  console.log(
    `${file}: ${(original.size / 1024).toFixed(1)} KB -> ` +
    `${(optimized.size / 1024).toFixed(1)} KB (${savings}% change)`
  );

  converted++;
}

console.log(`\nFinished! Converted ${converted} images.`);
console.log(`Output folder: ${outputDir}`);
