const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const { getBase64 } = require("@plaiceholder/base64");

const args = process.argv.slice(2);
const [inputFolder, outputFile] = args;

if (!inputFolder || !outputFile) {
  console.error("❌ Usage: node generate-images-array.cjs <publicFolder> <outputFile>");
  process.exit(1);
}

const PUBLIC_DIR = path.join(process.cwd(), "public");
const INPUT_DIR = path.join(PUBLIC_DIR, inputFolder);
const OUTPUT_PATH = path.join(process.cwd(), outputFile);

async function generate() {
  if (!fs.existsSync(INPUT_DIR)) {
    console.error(`❌ Input folder does not exist: ${INPUT_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(INPUT_DIR).filter((file) =>
    /\.(jpe?g|png)$/i.test(file)
  );

  const images = [];

  for (const file of files) {
    const filePath = path.join(INPUT_DIR, file);
    const buffer = fs.readFileSync(filePath);
    const metadata = await sharp(buffer).metadata();

    if (!metadata.width || !metadata.height) {
      console.warn(`⚠️ Skipping ${file}, unable to read dimensions.`);
      continue;
    }

    const base64 = await getBase64(buffer);

    images.push({
      src: `/${inputFolder}/${file}`.replace(/\\/g, "/"),
      width: metadata.width,
      height: metadata.height,
      blurDataURL: base64,
    });
  }

  const output = `// Auto-generated from /public/${inputFolder}. Do not edit manually.
export type SourceImage = {
  src: string;
  width: number;
  height: number;
  blurDataURL: string;
};

export const images: SourceImage[] = ${JSON.stringify(images, null, 2)};
`;

  fs.writeFileSync(OUTPUT_PATH, output);
  console.log(`✅ Wrote ${images.length} images to ${outputFile}`);
}

generate();