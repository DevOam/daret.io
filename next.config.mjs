/** @type {import('next').NextConfig} */
const nextConfig = {
  // Désactive l'optimisation des images pour la compatibilité avec l'hébergement statique
  images: {
    unoptimized: true,
  },
  // Active la sortie statique
  output: 'export',
  // Ajoute un trailing slash pour une meilleure compatibilité
  trailingSlash: true,
  // Améliore la compatibilité avec l'export statique
  experimental: {
    esmExternals: false
  },
  // Si votre application est déployée dans un sous-dossier, décommentez et modifiez la ligne suivante
  // basePath: '/votre-sous-dossier',
};

export default nextConfig;
