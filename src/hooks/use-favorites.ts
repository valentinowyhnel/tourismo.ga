"use client";

import { useState, useEffect, useCallback } from 'react';

const FAVORITES_STORAGE_KEY = 'gabonExplorerFavorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error("Failed to load favorites from localStorage", error);
        // Fallback to empty array or handle error appropriately
        setFavorites([]);
      }
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded && typeof window !== 'undefined') {
      try {
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
      } catch (error) {
        console.error("Failed to save favorites to localStorage", error);
      }
    }
  }, [favorites, isLoaded]);

  const addFavorite = useCallback((id: string) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.includes(id)) {
        return [...prevFavorites, id];
      }
      return prevFavorites;
    });
  }, []);

  const removeFavorite = useCallback((id: string) => {
    setFavorites((prevFavorites) => prevFavorites.filter((favId) => favId !== id));
  }, []);

  const isFavorite = useCallback((id: string) => {
    return favorites.includes(id);
  }, [favorites]);

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    isLoaded, // To allow components to wait for localStorage loading
  };
}
