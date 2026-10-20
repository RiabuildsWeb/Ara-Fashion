
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

const outputDir = 'src/assets/optimized/hero'
await mkdir(outputDir, { recursive: true })

const images = [
  {
    input: 'src/assets/optimized/Herobanner.webp',
    name: 'desktop',
    widths: [640, 960, 1280, 1536],
  },
  {
    input: 'src/assets/optimized/Heromobile.webp',
    name: 'mobile',
    widths: [320, 480, 640, 941],
  },
]

for (const image of images) {
  const metadata = await sharp(image.input).metadata()

  for (const width of image.widths) {
    if (width > metadata.width) continue

    const output = `${outputDir}/${image.name}-${width}.webp`

    await sharp(image.input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(output)

    console.log(`Created ${output}`)
  }
}
