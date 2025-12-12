const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createCircularFavicon() {
  const inputPath = path.join(__dirname, '../app/image/logo/mosarraf.png');
  const outputPath = path.join(__dirname, '../app/favicon.ico');
  const outputPathPng = path.join(__dirname, '../app/icon.png');
  const outputPathPublic = path.join(__dirname, '../public/favicon.ico');

  try {
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    const size = Math.min(metadata.width, metadata.height);
    
    // Create a circular mask
    const mask = Buffer.from(
      `<svg width="${size}" height="${size}">
        <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/>
      </svg>`
    );

    // Process the image: resize to square, apply circular mask, convert to PNG with transparency
    const circularImage = await sharp(inputPath)
      .resize(size, size, {
        fit: 'cover',
        position: 'center'
      })
      .composite([
        {
          input: mask,
          blend: 'dest-in'
        }
      ])
      .png()
      .toBuffer();

    // Create ICO format (32x32 for favicon)
    const favicon32 = await sharp(circularImage)
      .resize(32, 32)
      .png()
      .toBuffer();

    // Create ICO format (16x16 for favicon)
    const favicon16 = await sharp(circularImage)
      .resize(16, 16)
      .png()
      .toBuffer();

    // Save as PNG (for icon.png)
    await sharp(circularImage)
      .resize(400, 400)
      .png()
      .toFile(outputPathPng);

    // Save as ICO (using PNG format since modern browsers accept PNG as ICO)
    await sharp(favicon32)
      .png()
      .toFile(outputPath);

    // Also save to public folder
    await sharp(favicon32)
      .png()
      .toFile(outputPathPublic);

    // Create icon.ico as well
    const iconIcoPath = path.join(__dirname, '../app/icon.ico');
    await sharp(favicon32)
      .png()
      .toFile(iconIcoPath);

    console.log('✅ Circular favicon created successfully!');
    console.log(`   - ${outputPath}`);
    console.log(`   - ${outputPathPng}`);
    console.log(`   - ${outputPathPublic}`);
    console.log(`   - ${iconIcoPath}`);
  } catch (error) {
    console.error('Error creating favicon:', error);
    process.exit(1);
  }
}

createCircularFavicon();

