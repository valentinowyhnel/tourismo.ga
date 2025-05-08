import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Gabon Explorer',
    short_name: 'Gabon Explorer',
    description: 'Discover the rich natural beauty and culture of Gabon. Plan your adventure today!',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8F4E3', // Blanc cassé
    theme_color: '#1E5631', // Forest Green
    icons: [
      {
        src: '/icon-192x192.png', // Placeholder, ensure this exists in /public
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png', // Placeholder, ensure this exists in /public
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
