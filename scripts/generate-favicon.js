// Script pour générer les différentes versions du favicon
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

// Créer le dossier s'il n'existe pas
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Fonction pour créer un favicon avec fond blanc circulaire
async function createFavicon(inputPath, outputPath, size) {
  try {
    // Créer un masque circulaire
    const circleSvg = Buffer.from(`
      <svg width="${size}" height="${size}">
        <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="white"/>
      </svg>
    `);
    
    // Créer le logo avec fond transparent
    const logo = await sharp(inputPath)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toBuffer();
    
    // Superposer le logo sur le fond circulaire
    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
      .composite([
        {
          input: circleSvg,
          gravity: 'center'
        },
        {
          input: logo,
          gravity: 'center'
        }
      ])
      .toFile(outputPath);
      
    console.log(`✅ Favicon circulaire ${size}x${size} créé : ${outputPath}`);
  } catch (error) {
    console.error(`❌ Erreur lors de la création du favicon circulaire ${size}x${size}:`, error);
  }
}

// Chemins des fichiers
const logoPath = path.join(publicDir, 'images/logo_daret.png');
const outputFiles = [
  { path: path.join(publicDir, 'favicon.ico'), size: 32 },
  { path: path.join(publicDir, 'favicon-16x16.png'), size: 16 },
  { path: path.join(publicDir, 'favicon-32x32.png'), size: 32 },
  { path: path.join(publicDir, 'apple-touch-icon.png'), size: 180 }
];

// Créer tous les favicons
async function generateAllFavicons() {
  console.log('🔄 Génération des favicons...');
  
  for (const file of outputFiles) {
    await createFavicon(logoPath, file.path, file.size);
  }
  
  console.log('✨ Tous les favicons ont été générés avec succès !');
}

generateAllFavicons();
