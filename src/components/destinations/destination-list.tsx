"use client";

import { useState, useEffect } from 'react';
import type { Destination, DestinationCategory } from '@/types';
import { DestinationCard } from './destination-card';
import { DestinationFilter } from './destination-filter';
import { getDestinations } from '@/data/destinations';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { SearchX } from 'lucide-react';

export function DestinationList() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>([]);
  const [currentFilter, setCurrentFilter] = useState<DestinationCategory | 'all'>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadDestinations() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getDestinations();
        setDestinations(data);
        setFilteredDestinations(data); // Initially, show all
      } catch (err) {
        setError('Failed to load destinations. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadDestinations();
  }, []);

  const handleFilterChange = (category: DestinationCategory | 'all') => {
    setCurrentFilter(category);
    if (category === 'all') {
      setFilteredDestinations(destinations);
    } else {
      setFilteredDestinations(destinations.filter(dest => dest.category === category));
    }
  };
  
  if (error) {
    return (
      <Alert variant="destructive" className="max-w-2xl mx-auto my-8">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <section id="destinations" className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">Explore Gabon</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Discover the breathtaking beauty and rich cultural tapestry of Gabon. From lush rainforests to vibrant city life, there's an adventure for everyone.
        </p>
        
        <DestinationFilter onFilterChange={handleFilterChange} currentFilter={currentFilter} />

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex flex-col space-y-3">
                <Skeleton className="h-[200px] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        ) : (
           <div className="text-center py-12">
             <SearchX className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
             <h3 className="text-xl font-semibold text-foreground mb-2">No Destinations Found</h3>
             <p className="text-muted-foreground">
               Sorry, there are no destinations matching the filter "{currentFilter}". Try a different category.
             </p>
           </div>
        )}
      </div>
    </section>
  );
}
