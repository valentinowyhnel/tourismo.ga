import { getDestinationById, getDestinations } from '@/data/destinations';
import type { Destination } from '@/types';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Star, MapPin, Users, CalendarDays, Film, ThumbsUp, ExternalLink, Sun, CloudRain, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DestinationCard } from '@/components/destinations/destination-card';
import { FavoriteButton } from '@/components/destinations/favorite-button'; // New component

export async function generateStaticParams() {
  const destinations = await getDestinations();
  return destinations.map((destination) => ({
    id: destination.id,
  }));
}

interface DestinationPageProps {
  params: { id: string };
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const destination = await getDestinationById(params.id);

  if (!destination) {
    notFound();
  }

  // Fetch a few related destinations (e.g., same category, excluding current one)
  const allDestinations = await getDestinations();
  const relatedDestinations = allDestinations
    .filter(d => d.category === destination.category && d.id !== destination.id)
    .slice(0, 3);


  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full">
        <Image
          src={destination.heroImage}
          alt={`Hero image for ${destination.name}`}
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-75"
          data-ai-hint="landscape attraction"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-4">
          <Badge variant="secondary" className="mb-4 text-sm md:text-base">
            {destination.category.charAt(0).toUpperCase() + destination.category.slice(1)}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 shadow-lg">{destination.name}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl shadow-md">{destination.description}</p>
          <div className="mt-6">
            <FavoriteButton destinationId={destination.id} />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">{destination.longDescription}</p>
                {destination.tags && destination.tags.length > 0 && (
                  <div className="mt-4">
                    {destination.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="mr-2 mb-2">{tag}</Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Image Gallery */}
            {destination.images && destination.images.length > 0 && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Gallery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {destination.images.map((img, index) => (
                      <div key={index} className="aspect-square relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                        <Image src={img} alt={`${destination.name} gallery image ${index + 1}`} layout="fill" objectFit="cover" className="hover:scale-105 transition-transform duration-300" data-ai-hint="nature wildlife"/>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Videos Section */}
            {destination.videos && destination.videos.length > 0 && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center"><Film className="mr-2 h-6 w-6" />Videos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {destination.videos.map((video, index) => (
                       <div key={index} className="aspect-video">
                        <h3 className="font-semibold mb-2 text-foreground">{video.title}</h3>
                        <iframe 
                          src={video.embedUrl} 
                          title={video.title} 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                          className="w-full h-full rounded-lg shadow-md"
                        ></iframe>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Reviews Section */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center"><ThumbsUp className="mr-2 h-6 w-6" />User Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {destination.reviews.map(review => (
                    <div key={review.id} className="flex items-start space-x-4 p-4 border rounded-lg bg-muted/20">
                      <Avatar>
                        <AvatarImage src={review.avatarUrl} alt={review.user} data-ai-hint="person avatar" />
                        <AvatarFallback>{review.user.substring(0,2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center justify-between">
                           <h4 className="font-semibold text-foreground">{review.user}</h4>
                           <span className="text-xs text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex items-center my-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-5 w-5 ${i < review.rating ? 'text-secondary fill-secondary' : 'text-muted-foreground/50'}`} />
                          ))}
                        </div>
                        <p className="text-sm text-foreground/80">{review.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="mt-6 w-full sm:w-auto">
                  Write a Review <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-24 self-start">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start">
                  <Star className="h-5 w-5 mr-3 mt-0.5 text-secondary flex-shrink-0" />
                  <span><strong>Rating:</strong> {destination.rating.toFixed(1)}/5 ({destination.reviews.length} reviews)</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                  <span><strong>Location:</strong> {destination.mapLocation.address || `${destination.mapLocation.latitude.toFixed(3)}, ${destination.mapLocation.longitude.toFixed(3)}`}</span>
                </div>
                {destination.activities && destination.activities.length > 0 && (
                  <div className="flex items-start">
                    <Users className="h-5 w-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <strong>Activities:</strong>
                      <ul className="list-disc list-inside ml-1">
                        {destination.activities.slice(0,3).map(activity => <li key={activity}>{activity}</li>)}
                        {destination.activities.length > 3 && <li>...and more</li>}
                      </ul>
                    </div>
                  </div>
                )}
                {destination.bestTimeToVisit && (
                  <div className="flex items-start">
                     {destination.bestTimeToVisit.toLowerCase().includes("dry season") ? 
                        <Sun className="h-5 w-5 mr-3 mt-0.5 text-secondary flex-shrink-0" /> : 
                        <CloudRain className="h-5 w-5 mr-3 mt-0.5 text-blue-500 flex-shrink-0" />
                     }
                    <span><strong>Best Time to Visit:</strong> {destination.bestTimeToVisit}</span>
                  </div>
                )}
              </CardContent>
            </Card>
            
            {destination.mapLocation.embedUrl && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Location on Map</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src={destination.mapLocation.embedUrl}
                      width="100%"
                      height="100%"
                      style={{ border:0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of ${destination.name}`}
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            )}

            <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md">
              <Link href={`/trip-planner?add=${destination.id}`}>
                Add to Trip Plan
              </Link>
            </Button>
          </aside>
        </div>

        {/* Related Destinations */}
        {relatedDestinations.length > 0 && (
          <div className="mt-16">
            <Separator className="my-12" />
            <h2 className="text-3xl font-bold text-center mb-10 text-primary">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedDestinations.map(relatedDest => (
                <DestinationCard key={relatedDest.id} destination={relatedDest} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
