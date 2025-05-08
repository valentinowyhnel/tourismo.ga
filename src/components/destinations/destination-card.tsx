"use client";

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star, Heart, ExternalLink } from 'lucide-react';
import type { Destination } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useFavorites } from '@/hooks/use-favorites';
import { cn } from '@/lib/utils';

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  const { isFavorite, addFavorite, removeFavorite, isLoaded } = useFavorites();
  const favorite = isLoaded && isFavorite(destination.id);

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent link navigation if clicking on heart
    e.stopPropagation();
    if (favorite) {
      removeFavorite(destination.id);
    } else {
      addFavorite(destination.id);
    }
  };

  const categoryColors: Record<Destination['category'], string> = {
    nature: 'bg-green-100 text-green-800 border-green-300',
    culture: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    adventure: 'bg-red-100 text-red-800 border-red-300',
  };

  return (
    <Link href={`/destinations/${destination.id}`} passHref legacyBehavior>
      <a className="block group outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg">
        <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-xl group-focus-within:shadow-xl group-focus-visible:shadow-xl">
          <CardHeader className="p-0 relative">
            <div className="aspect-[4/3] relative">
              <Image
                src={destination.heroImage}
                alt={destination.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
                data-ai-hint="landscape wildlife"
              />
              <div className="absolute top-3 right-3">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handleFavoriteToggle}
                  aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
                  className={cn(
                    "rounded-full h-10 w-10 bg-background/80 hover:bg-background text-destructive",
                    favorite ? "text-destructive fill-destructive" : "text-foreground/70"
                  )}
                >
                  <Heart className={cn("h-5 w-5", favorite && "fill-destructive")} />
                </Button>
              </div>
              <Badge
                className={cn(
                  "absolute bottom-3 left-3 text-xs",
                  categoryColors[destination.category]
                )}
                variant="outline"
              >
                {destination.category.charAt(0).toUpperCase() + destination.category.slice(1)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-4 flex-grow">
            <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">{destination.name}</CardTitle>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{destination.description}</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <Star className="h-4 w-4 mr-1 text-secondary fill-secondary" />
              <span>{destination.rating.toFixed(1)} ({destination.reviews.length} reviews)</span>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between items-center">
            <Button variant="link" className="p-0 h-auto text-primary hover:underline">
              Learn More <ExternalLink className="ml-1 h-4 w-4" />
            </Button>
            {destination.tags && destination.tags.length > 0 && (
                <Badge variant="secondary" className="hidden sm:inline-flex">{destination.tags[0]}</Badge>
            )}
          </CardFooter>
        </Card>
      </a>
    </Link>
  );
}
