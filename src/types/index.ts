
export interface Review {
  id: string;
  user: string;
  avatarUrl?: string;
  rating: number; // 1-5
  comment: string;
  date: string;
}

export type DestinationCategory = 'nature' | 'culture' | 'adventure';

export interface Destination {
  id: string;
  name: string;
  category: DestinationCategory;
  description: string; // Short description for cards
  longDescription: string; // Detailed description for detail page
  images: string[]; // URLs to images
  heroImage: string; // Main image for hero sections/cards
  videos?: { title: string, embedUrl: string }[]; // YouTube or Vimeo embed URLs
  mapLocation: {
    latitude: number;
    longitude: number;
    embedUrl?: string; // Optional: Google Maps embed URL for iframe
    address?: string;
  };
  rating: number; // Average rating, e.g., 4.5
  reviews: Review[];
  tags?: string[];
  activities?: string[];
  bestTimeToVisit?: string;
}
