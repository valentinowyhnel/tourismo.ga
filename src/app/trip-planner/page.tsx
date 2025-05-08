"use client";

import { useEffect, useState } from 'react';
import { useFavorites } from '@/hooks/use-favorites';
import { getDestinationById, getDestinations } from '@/data/destinations';
import type { Destination } from '@/types';
import { DestinationCard } from '@/components/destinations/destination-card';
import { Button } from '@/components/ui/button';
import { Trash2, Map, Share2, PlusCircle, Loader2, Info } from 'lucide-react';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function TripPlannerPage() {
  const { favorites, removeFavorite, isLoaded: favoritesLoaded } = useFavorites();
  const [favoriteDestinations, setFavoriteDestinations] = useState<Destination[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFavoriteDestinations() {
      if (!favoritesLoaded) return; // Wait until favorites are loaded from localStorage

      setIsLoading(true);
      const destinations = await Promise.all(
        favorites.map(id => getDestinationById(id))
      );
      setFavoriteDestinations(destinations.filter(Boolean) as Destination[]);
      setIsLoading(false);
    }

    fetchFavoriteDestinations();
  }, [favorites, favoritesLoaded]);
  
  const handleRemoveAll = () => {
    favorites.forEach(id => removeFavorite(id));
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
        <p className="text-lg text-muted-foreground">Loading your trip plan...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">Your Trip Plan</h1>
            <p className="text-lg text-muted-foreground">
              {favoriteDestinations.length > 0 
                ? `You have ${favoriteDestinations.length} destination(s) in your plan.`
                : "Your trip plan is currently empty. Start by adding some favorite destinations!"}
            </p>
          </div>
          {favoriteDestinations.length > 0 && (
             <div className="flex gap-2 mt-4 md:mt-0">
                <Button variant="outline">
                  <Share2 className="mr-2 h-4 w-4" /> Share Plan
                </Button>
                <Button variant="destructive" onClick={handleRemoveAll}>
                  <Trash2 className="mr-2 h-4 w-4" /> Clear All
                </Button>
             </div>
          )}
        </div>

        {favoriteDestinations.length === 0 ? (
          <Alert className="max-w-xl mx-auto bg-primary/5 border-primary/20">
            <Info className="h-5 w-5 text-primary" />
            <AlertTitle className="text-primary font-semibold">Your Itinerary is Empty</AlertTitle>
            <AlertDescription className="text-foreground/80">
              Looks like you haven't added any destinations to your trip plan yet.
              <br />
              <Button asChild variant="link" className="px-0 text-primary font-semibold">
                <Link href="/#destinations">Explore destinations</Link>
              </Button>
              {' '}and click the heart icon to add them here!
            </AlertDescription>
          </Alert>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              {favoriteDestinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
            
            <Separator className="my-12" />

            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl text-primary flex items-center">
                        <Map className="mr-3 h-7 w-7"/>
                        Next Steps
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                        Your adventure is taking shape! Consider these next steps to finalize your Gabon experience.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1">
                           Book Accommodations
                        </Button>
                         <Button size="lg" variant="outline" className="text-primary border-primary hover:bg-primary/10 flex-1">
                           Find Local Guides
                        </Button>
                        <Button size="lg" variant="outline" className="text-primary border-primary hover:bg-primary/10 flex-1">
                           Arrange Transport
                        </Button>
                    </div>
                </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
