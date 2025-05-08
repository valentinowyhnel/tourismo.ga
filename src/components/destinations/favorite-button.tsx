"use client";

import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/hooks/use-favorites';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface FavoriteButtonProps {
  destinationId: string;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}

export function FavoriteButton({ destinationId, className, size = "default" }: FavoriteButtonProps) {
  const { isFavorite, addFavorite, removeFavorite, isLoaded } = useFavorites();
  const { toast } = useToast();
  const favorite = isLoaded && isFavorite(destinationId);

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isLoaded) return; // Don't do anything if favorites haven't loaded from localStorage

    if (favorite) {
      removeFavorite(destinationId);
      toast({
        title: "Removed from Favorites",
        description: "This destination is no longer in your favorites.",
      });
    } else {
      addFavorite(destinationId);
      toast({
        title: "Added to Favorites!",
        description: "You can find this destination in your Trip Planner.",
        variant: "default",
      });
    }
  };

  if (!isLoaded) {
    // Render a placeholder or nothing until favorites are loaded
    return (
      <Button
        size={size}
        variant="outline"
        className={cn("rounded-full text-muted-foreground flex items-center gap-2", className)}
        disabled
      >
        <Heart className="h-5 w-5" /> 
        {size !== "icon" && <span>Loading...</span>}
      </Button>
    );
  }

  return (
    <Button
      size={size}
      variant={favorite ? "destructive" : "outline"}
      onClick={handleFavoriteToggle}
      aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      className={cn(
        "rounded-full flex items-center gap-2 transition-colors duration-200",
        favorite 
          ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" 
          : "text-destructive border-destructive hover:bg-destructive/10",
        className
      )}
    >
      <Heart className={cn("h-5 w-5", favorite && "fill-destructive-foreground")} />
      {size !== "icon" && (favorite ? <span>Favorited</span> : <span>Add to Favorites</span>)}
    </Button>
  );
}
