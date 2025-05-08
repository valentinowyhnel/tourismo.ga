import type { Destination } from '@/types';

export const destinations: Destination[] = [
  {
    id: 'loango-national-park',
    name: 'Loango National Park',
    category: 'nature',
    description: 'Unique coastal sanctuary where forests, savannas, lagoons, and ocean meet.',
    longDescription: 'Loango National Park is a jewel of Gabon, offering an unparalleled blend of wildlife experiences. Witness elephants and buffalos roaming the beaches, hippos surfing the waves, and humpback whales migrating offshore. The park\'s diverse ecosystems support gorillas, chimpanzees, and a myriad of bird species. It\'s a must-visit for ecotourists and wildlife enthusiasts.',
    heroImage: 'https://picsum.photos/seed/loango/800/600',
    images: [
      'https://picsum.photos/seed/loango-beach/600/400',
      'https://picsum.photos/seed/loango-forest/600/400',
      'https://picsum.photos/seed/loango-wildlife/600/400',
      'https://picsum.photos/seed/loango-lagoon/600/400',
    ],
    mapLocation: {
      latitude: -2.173,
      longitude: 9.575,
      address: 'Loango National Park, Ogooué-Maritime Province, Gabon',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.590917702856!2d9.572811614750946!3d-2.173000998467951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106675b70a997697%3A0x5a4d38f779e0d4e6!2sLoango%20National%20Park!5e0!3m2!1sen!2sus!4v1678886400000'
    },
    rating: 4.8,
    reviews: [
      { id: 'r1', user: 'Alice', rating: 5, comment: 'Absolutely breathtaking! Saw elephants on the beach.', date: '2023-10-15', avatarUrl: 'https://picsum.photos/seed/alice/40/40' },
      { id: 'r2', user: 'Bob', rating: 4, comment: 'Amazing wildlife, a bit remote but worth it.', date: '2023-09-22', avatarUrl: 'https://picsum.photos/seed/bob/40/40' },
    ],
    tags: ['Wildlife', 'Beach', 'Forest', 'Ecotourism'],
    activities: ['Safari', 'Whale Watching', 'Birding', 'Fishing'],
    bestTimeToVisit: 'Dry season (May to September) for easier travel and wildlife viewing; rainy season (October to April) for turtles and lush scenery.',
  },
  {
    id: 'ivindo-national-park',
    name: 'Ivindo National Park',
    category: 'nature',
    description: 'Home to the spectacular Kongou and Mingouli waterfalls and pristine rainforest.',
    longDescription: 'Ivindo National Park is characterized by its vast, untouched rainforests and the powerful Ivindo River. The Kongou Falls, often compared to Victoria Falls in grandeur, are a highlight. The park is a critical habitat for forest elephants, gorillas, chimpanzees, and the elusive African golden cat. Langoué Baï offers a unique opportunity to observe wildlife in a natural forest clearing.',
    heroImage: 'https://picsum.photos/seed/ivindo/800/600',
    images: [
      'https://picsum.photos/seed/ivindo-falls/600/400',
      'https://picsum.photos/seed/ivindo-rainforest/600/400',
      'https://picsum.photos/seed/ivindo-bai/600/400',
    ],
    mapLocation: {
      latitude: 0.500,
      longitude: 12.700,
      address: 'Ivindo National Park, Ogooué-Ivindo Province, Gabon',
    },
    rating: 4.7,
    reviews: [
      { id: 'r3', user: 'Charlie', rating: 5, comment: 'The waterfalls are majestic! A true adventure.', date: '2023-11-05', avatarUrl: 'https://picsum.photos/seed/charlie/40/40' },
    ],
    tags: ['Waterfalls', 'Rainforest', 'Gorillas', 'Adventure'],
    activities: ['Hiking', 'Pirogue trips', 'Wildlife Observation', 'Photography'],
    bestTimeToVisit: 'Dry season (June to August) is ideal for accessing remote areas and seeing wildlife at bais.',
  },
  {
    id: 'lambarene',
    name: 'Lambaréné & Albert Schweitzer Hospital',
    category: 'culture',
    description: 'Historic town on the Ogooué River, famed for Albert Schweitzer\'s hospital.',
    longDescription: 'Lambaréné, situated on an island in the Ogooué River, is rich in history and culture. It is most famous for the hospital founded by Nobel Peace Prize laureate Albert Schweitzer in 1913. Visitors can tour the historic hospital, now a museum, and learn about his humanitarian work. The town itself offers a glimpse into Gabonese river life and local markets.',
    heroImage: 'https://picsum.photos/seed/lambarene/800/600',
    images: [
      'https://picsum.photos/seed/schweitzer-hospital/600/400',
      'https://picsum.photos/seed/ogooue-river/600/400',
      'https://picsum.photos/seed/lambarene-market/600/400',
    ],
    mapLocation: {
      latitude: -0.700,
      longitude: 10.233,
      address: 'Lambaréné, Moyen-Ogooué Province, Gabon',
    },
    rating: 4.3,
    reviews: [
      { id: 'r4', user: 'Diana', rating: 4, comment: 'Fascinating history and a peaceful town.', date: '2023-08-10', avatarUrl: 'https://picsum.photos/seed/diana/40/40' },
    ],
    tags: ['History', 'Culture', 'River', 'Humanitarian'],
    activities: ['Museum Visit', 'River Tour', 'Market Exploration'],
    bestTimeToVisit: 'Year-round, but the dry seasons offer more comfortable travel conditions.',
  },
  {
    id: 'pointe-denis',
    name: 'Pointe Denis',
    category: 'adventure',
    description: 'Pristine beaches and a popular weekend getaway from Libreville, offering water sports.',
    longDescription: 'Just a short boat ride from Libreville, Pointe Denis is a peninsula known for its beautiful sandy beaches, clear waters, and tranquil atmosphere. It\'s a perfect spot for relaxation, swimming, and various water sports like snorkeling, jet skiing, and fishing. Leatherback turtles also nest on these beaches between October and February.',
    heroImage: 'https://picsum.photos/seed/pointe-denis/800/600',
    images: [
      'https://picsum.photos/seed/pointe-denis-beach/600/400',
      'https://picsum.photos/seed/pointe-denis-water/600/400',
      'https://picsum.photos/seed/pointe-denis-turtles/600/400',
    ],
    mapLocation: {
      latitude: 0.316,
      longitude: 9.366,
      address: 'Pointe Denis, Estuaire Province, Gabon',
    },
    rating: 4.5,
    reviews: [
      { id: 'r5', user: 'Eve', rating: 5, comment: 'Paradise! The beaches are incredible.', date: '2024-01-20', avatarUrl: 'https://picsum.photos/seed/eve/40/40' },
    ],
    tags: ['Beach', 'Water Sports', 'Relaxation', 'Turtles'],
    activities: ['Swimming', 'Snorkeling', 'Jet Skiing', 'Turtle Watching (seasonal)'],
    bestTimeToVisit: 'Dry seasons for best beach weather; October-February for turtle nesting.',
  },
  {
    id: 'lekedi-park',
    name: 'Lékédi Park',
    category: 'nature',
    description: 'A private reserve focusing on conservation and reintroduction of Gabonese wildlife.',
    longDescription: 'Lékédi Park, managed by a mining company, is a commendable conservation effort. It offers a chance to see mandrills, gorillas, chimpanzees, and various antelope species in large, natural enclosures or semi-wild settings. The park plays a role in research and reintroduction programs, providing a more controlled but still insightful wildlife experience.',
    heroImage: 'https://picsum.photos/seed/lekedi/800/600',
    images: [
      'https://picsum.photos/seed/lekedi-mandrill/600/400',
      'https://picsum.photos/seed/lekedi-gorilla/600/400',
      'https://picsum.photos/seed/lekedi-landscape/600/400',
    ],
    mapLocation: {
      latitude: -1.800,
      longitude: 13.200,
      address: 'Near Bakoumba, Haut-Ogooué Province, Gabon',
    },
    rating: 4.6,
    reviews: [
      { id: 'r6', user: 'Frank', rating: 4, comment: 'Great for seeing mandrills up close. Good conservation work.', date: '2023-07-01', avatarUrl: 'https://picsum.photos/seed/frank/40/40' },
    ],
    tags: ['Conservation', 'Mandrills', 'Wildlife Reserve', 'Primates'],
    activities: ['Guided Tours', 'Wildlife Viewing', 'Photography'],
    bestTimeToVisit: 'Year-round, as wildlife is managed within the park.',
  }
];

export async function getDestinations(category?: DestinationCategory): Promise<Destination[]> {
  await new Promise(resolve => setTimeout(resolve, 200)); // Simulate network delay
  if (category) {
    return destinations.filter(dest => dest.category === category);
  }
  return destinations;
}

export async function getDestinationById(id: string): Promise<Destination | undefined> {
  await new Promise(resolve => setTimeout(resolve, 100)); // Simulate network delay
  return destinations.find(dest => dest.id === id);
}
