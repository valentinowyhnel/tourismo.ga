"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Leaf, Landmark, Zap, Filter } from 'lucide-react';
import type { DestinationCategory } from '@/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DestinationFilterProps {
  onFilterChange: (category: DestinationCategory | 'all') => void;
  currentFilter: DestinationCategory | 'all';
}

const categories: { value: DestinationCategory | 'all'; label: string; icon: React.ElementType }[] = [
  { value: 'all', label: 'All', icon: Filter },
  { value: 'nature', label: 'Nature', icon: Leaf },
  { value: 'culture', label: 'Culture', icon: Landmark },
  { value: 'adventure', label: 'Adventure', icon: Zap },
];

export function DestinationFilter({ onFilterChange, currentFilter }: DestinationFilterProps) {

  const handleSelect = (value: string) => {
    onFilterChange(value as DestinationCategory | 'all');
  };

  const selectedCategory = categories.find(cat => cat.value === currentFilter) || categories[0];

  return (
    <div className="mb-8 flex flex-col sm:flex-row gap-2 items-center justify-center">
      {/* Desktop Buttons */}
      <div className="hidden sm:flex space-x-2 p-1 bg-muted rounded-lg">
        {categories.map((category) => (
          <Button
            key={category.value}
            variant={currentFilter === category.value ? 'default' : 'ghost'}
            onClick={() => onFilterChange(category.value)}
            className={`flex-1 sm:flex-none transition-all duration-200 ${currentFilter === category.value ? 'shadow-md' : ''}`}
            aria-pressed={currentFilter === category.value}
          >
            <category.icon className="mr-2 h-5 w-5" />
            {category.label}
          </Button>
        ))}
      </div>

      {/* Mobile Dropdown */}
      <div className="sm:hidden w-full">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              <div className="flex items-center">
                <selectedCategory.icon className="mr-2 h-5 w-5" />
                {selectedCategory.label}
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuRadioGroup value={currentFilter} onValueChange={handleSelect}>
              {categories.map((category) => (
                <DropdownMenuRadioItem key={category.value} value={category.value} className="cursor-pointer">
                  <category.icon className="mr-2 h-5 w-5" />
                  {category.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
