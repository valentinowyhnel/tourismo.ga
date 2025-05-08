import type { Province } from '@/types';

export const provincesData: Province[] = [
  {
    id: 'estuaire',
    name: 'Estuaire',
    center: [0.3924, 9.4536],
    brief: 'Capitale économique et administrative du Gabon, abritant Libreville.',
    flora: 'Mangroves côtières, forêts denses humides reliques, savanes arbustives.',
    fauna: 'Singes variés (dont mandrills dans certaines zones), oiseaux aquatiques, tortues marines (sites de ponte).',
    parks: ['Parc National de Pongara', 'Arboretum de Raponda Walker'],
    images: [
      { url: 'https://picsum.photos/seed/estuaire1/300/200', alt: 'Plage de Libreville', aiHint: 'beach city' },
      { url: 'https://picsum.photos/seed/estuaire2/300/200', alt: 'Mangrove Estuaire', aiHint: 'mangrove river' },
      { url: 'https://picsum.photos/seed/estuaire3/300/200', alt: 'Marché Mont Bouet', aiHint: 'market busy' },
      { url: 'https://picsum.photos/seed/estuaire4/300/200', alt: 'Cathédrale Sainte Marie', aiHint: 'cathedral building' },
    ],
  },
  {
    id: 'haut-ogooue',
    name: 'Haut-Ogooué',
    center: [-1.6333, 13.5667],
    brief: 'Riche en ressources minières et culture Bateke. Berceau du Président Omar Bongo.',
    flora: 'Forêts galeries le long des rivières, savanes herbeuses et arbustives caractéristiques des plateaux Batéké.',
    fauna: 'Gorilles des plaines de l\'Ouest, chimpanzés, éléphants de forêt, buffles, antilopes diverses (sitatunga, guib harnaché).',
    parks: ['Parc National des Plateaux Batéké', 'Parc de la Lékédi (privé, conservation de mandrills)'],
     images: [
      { url: 'https://picsum.photos/seed/hautogooue1/300/200', alt: 'Paysage Plateaux Batéké', aiHint: 'savanna plateau' },
      { url: 'https://picsum.photos/seed/hautogooue2/300/200', alt: 'Mandrills Lékédi', aiHint: 'mandrill wildlife' },
    ],
  },
  {
    id: 'moyen-ogooue',
    name: 'Moyen-Ogooué',
    center: [-0.5, 10.5],
    brief: 'Traversée par le majestueux fleuve Ogooué, célèbre pour Lambaréné et l\'hôpital Albert Schweitzer.',
    flora: 'Forêts inondables, forêts de terre ferme denses, nombreux lacs (Zilé, Onangué, Ezanga) et lagunes riches en biodiversité.',
    fauna: 'Hippopotames, crocodiles (dont le crocodile nain), lamantins, une grande variété de poissons et d\'oiseaux aquatiques.',
    parks: ['Réserve de Wonga Wongué (partiellement)', 'Lacs de la région de Lambaréné'],
     images: [
      { url: 'https://picsum.photos/seed/moyenogooue1/300/200', alt: 'Fleuve Ogooué à Lambaréné', aiHint: 'river town' },
      { url: 'https://picsum.photos/seed/moyenogooue2/300/200', alt: 'Hôpital Albert Schweitzer', aiHint: 'historic building' },
    ],
  },
  {
    id: 'ngounie',
    name: 'Ngounié',
    center: [-1.5, 11.0],
    brief: 'Région agricole fertile, connue pour ses chutes pittoresques et ses grottes mystérieuses.',
    flora: 'Forêts denses entrecoupées de savanes, zones de cultures vivrières et de plantations.',
    fauna: 'Éléphants de forêt, buffles, antilopes, panthères, divers primates.',
    parks: ['Chutes de l\'Impératrice Eugénie', 'Chutes de Samba', 'Grottes de Lastoursville (à proximité)'],
     images: [
      { url: 'https://picsum.photos/seed/ngounie1/300/200', alt: 'Chutes de l\'Impératrice', aiHint: 'waterfall nature' },
      { url: 'https://picsum.photos/seed/ngounie2/300/200', alt: 'Paysage verdoyant Ngounié', aiHint: 'green landscape' },
    ],
  },
  {
    id: 'nyanga',
    name: 'Nyanga',
    center: [-2.8333, 10.25],
    brief: 'Vaste province côtière avec des savanes et des lagunes, célèbre pour Mayumba, site majeur de ponte des tortues luth.',
    flora: 'Forêts côtières, vastes savanes herbeuses, lagunes (Banio, Ndougou), mangroves.',
    fauna: 'Tortues luth (plus grande concentration de ponte au monde à Mayumba), éléphants de forêt, buffles, hippopotames, lamantins.',
    parks: ['Parc National de Mayumba', 'Lagune Banio'],
     images: [
      { url: 'https://picsum.photos/seed/nyanga1/300/200', alt: 'Plage de Mayumba', aiHint: 'beach sand' },
      { url: 'https://picsum.photos/seed/nyanga2/300/200', alt: 'Tortue Luth pondant à Mayumba', aiHint: 'sea turtle' },
    ],
  },
  {
    id: 'ogooue-ivindo',
    name: 'Ogooué-Ivindo',
    center: [0.7, 12.8],
    brief: 'Immense région de forêt équatoriale quasi-vierge, abritant le Parc National d\'Ivindo et ses chutes spectaculaires.',
    flora: 'Forêt équatoriale dense et intacte, parsemée de clairières naturelles (baïs) essentielles pour la faune.',
    fauna: 'Gorilles des plaines de l\'Ouest, chimpanzés, éléphants de forêt, bongos, céphalophes, pangolins géants, buffles de forêt.',
    parks: ['Parc National d\'Ivindo (site UNESCO)', 'Réserve de la Lopé (partiellement, site UNESCO)'],
     images: [
      { url: 'https://picsum.photos/seed/ogooueivindo1/300/200', alt: 'Chutes de Kongou, Parc National d\'Ivindo', aiHint: 'waterfall rainforest' },
      { url: 'https://picsum.photos/seed/ogooueivindo2/300/200', alt: 'Forêt d\'Ivindo', aiHint: 'dense rainforest' },
    ],
  },
  {
    id: 'ogooue-lolo',
    name: 'Ogooué-Lolo',
    center: [-0.8, 12.3],
    brief: 'Province enclavée au relief accidenté, offrant des paysages montagneux et des forêts denses.',
    flora: 'Forêts denses de montagne, forêts galeries, quelques savanes d\'altitude.',
    fauna: 'Divers primates (colobes, cercopithèques), éléphants, buffles, antilopes rares, potamochères.',
    parks: ['Monts Birougou (zone d\'importance écologique, potentiel parc)', 'Massif du Chaillu (partagé)'],
     images: [
      { url: 'https://picsum.photos/seed/ogoouelolo1/300/200', alt: 'Paysage montagneux Ogooué-Lolo', aiHint: 'mountain forest' },
    ],
  },
  {
    id: 'ogooue-maritime',
    name: 'Ogooué-Maritime',
    center: [-1.5, 9.5],
    brief: 'Centre de l\'industrie pétrolière avec Port-Gentil, et joyau écologique avec le Parc National de Loango.',
    flora: 'Mangroves étendues, lagunes côtières (Nkomi, Ndogo), forêts côtières, savanes littorales.',
    fauna: 'Baleines à bosse (migration de juillet à septembre), dauphins, éléphants de plage, buffles, hippopotames, crocodiles, oiseaux migrateurs.',
    parks: ['Parc National de Loango', 'Réserve Aquatique de Mandji'],
     images: [
      { url: 'https://picsum.photos/seed/ogoouemaritime1/300/200', alt: 'Éléphants sur la plage, Parc National de Loango', aiHint: 'elephant beach' },
      { url: 'https://picsum.photos/seed/ogoouemaritime2/300/200', alt: 'Baleine à bosse sautant au large de Loango', aiHint: 'whale ocean' },
    ],
  },
  {
    id: 'woleu-ntem',
    name: 'Woleu-Ntem',
    center: [1.5, 11.5],
    brief: 'Province frontalière au nord, souvent appelée le "grenier du Gabon" pour son agriculture, et riche de la culture Fang.',
    flora: 'Forêts denses humides, importantes zones de cultures (cacao, café, banane), plantations.',
    fauna: 'Gorilles, chimpanzés, éléphants de forêt, grande diversité de primates, antilopes forestières.',
    parks: ['Parc National de Minkébé (un des plus grands massifs forestiers protégés du bassin du Congo)'],
     images: [
      { url: 'https://picsum.photos/seed/woleuntem1/300/200', alt: 'Forêt dense de Minkébé', aiHint: 'rainforest canopy' },
      { url: 'https://picsum.photos/seed/woleuntem2/300/200', alt: 'Village Fang traditionnel', aiHint: 'village culture' },
    ],
  },
];

export async function getProvincesData(): Promise<Province[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 50));
  return provincesData;
}
