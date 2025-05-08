// Using 'use client' for Leaflet map and interactivity
"use client";

import { useState, useEffect, useMemo, useCallback } from 'react'; // Added useCallback
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { getProvincesData } from '@/data/provinces';
import type { Province, ProvinceImage } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { MapPin, Trees, PawPrint, Mountain, Image as ImageIcon, X, Info, Loader2 } from 'lucide-react';
import Link from 'next/link';

const LeafletMap = dynamic(
  () => import('@/components/interactive-map/leaflet-map'),
  { 
    ssr: false,
    loading: () => (
      <div className="h-[calc(100vh-10rem)] w-full flex items-center justify-center bg-muted rounded-lg">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
        <p className="ml-2 text-muted-foreground">Loading Map...</p>
      </div>
    )
  }
);

export default function InteractiveMapPage() {
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const data = await getProvincesData();
      setProvinces(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  
  const handleProvinceSelect = useCallback((provinceId: string | null) => {
    if (provinceId === null) {
      setSelectedProvince(null);
      return;
    }
    if (provinces.length > 0) {
      const province = provinces.find(p => p.id === provinceId);
      setSelectedProvince(province || null);
    } else {
      setSelectedProvince(null); 
    }
  }, [provinces]);

  const provinceMarkers = useMemo(() => 
    provinces.map(p => ({
      position: p.center,
      popupContent: `<b>${p.name}</b><br/><button onclick="document.dispatchEvent(new CustomEvent('selectProvince', { detail: '${p.id}' }))" class="text-primary hover:underline">View Details</button>`,
      id: p.id,
    }))
  , [provinces]);

  useEffect(() => {
    const eventListener = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      handleProvinceSelect(customEvent.detail);
    };
    document.addEventListener('selectProvince', eventListener);
    return () => {
      document.removeEventListener('selectProvince', eventListener);
    };
  }, [handleProvinceSelect]); // Depends on memoized handleProvinceSelect


  const onLeafletMarkerClick = useCallback((id: string) => {
    handleProvinceSelect(id);
  }, [handleProvinceSelect]);


  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-4rem)] overflow-hidden"> {/* Adjusted height for header */}
      <div className="w-full md:w-2/3 h-1/2 md:h-full relative">
        {isLoading ? (
           <div className="h-full w-full flex items-center justify-center bg-muted">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
          </div>
        ) : (
          <LeafletMap 
            markers={provinceMarkers} 
            selectedProvinceId={selectedProvince?.id} 
            onMarkerClick={onLeafletMarkerClick} />
        )}
      </div>
      <aside className="w-full md:w-1/3 h-1/2 md:h-full bg-background border-l border-border shadow-lg">
        <ScrollArea className="h-full">
          {selectedProvince ? (
            <ProvinceDetailsPanel province={selectedProvince} onClose={() => handleProvinceSelect(null)} />
          ) : (
            <div className="p-6 flex flex-col items-center justify-center h-full text-center">
              <MapPin className="h-16 w-16 text-primary mb-4" />
              <h2 className="text-2xl font-semibold text-primary mb-2">Explorez le Gabon</h2>
              <p className="text-muted-foreground">Cliquez sur une province sur la carte ou dans la liste (sur mobile) pour afficher ses détails ici.</p>
            </div>
          )}
        </ScrollArea>
      </aside>
    </div>
  );
}

interface ProvinceDetailsPanelProps {
  province: Province;
  onClose: () => void;
}

function ProvinceDetailsPanel({ province, onClose }: ProvinceDetailsPanelProps) {
  return (
    <Card className="h-full flex flex-col rounded-none border-0 shadow-none">
      <CardHeader className="bg-muted/50 p-4 sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl text-primary">{province.name}</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close panel">
            <X className="h-5 w-5" />
          </Button>
        </div>
        {province.brief && <CardDescription className="text-sm">{province.brief}</CardDescription>}
      </CardHeader>
      <CardContent className="p-4 space-y-6 flex-grow">
        {province.flora && (
          <div>
            <h3 className="text-lg font-semibold text-primary flex items-center mb-2"><Trees className="mr-2 h-5 w-5" /> Flore Typique</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">{province.flora}</p>
          </div>
        )}
        {province.fauna && (
          <div>
            <h3 className="text-lg font-semibold text-primary flex items-center mb-2"><PawPrint className="mr-2 h-5 w-5" /> Faune Emblématique</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">{province.fauna}</p>
          </div>
        )}
        {province.parks && province.parks.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-primary flex items-center mb-2"><Mountain className="mr-2 h-5 w-5" /> Parcs / Réserves Naturels</h3>
            <ul className="list-disc list-inside text-sm text-foreground/80 space-y-1">
              {province.parks.map(park => <li key={park}>{park}</li>)}
            </ul>
          </div>
        )}
        {province.images && province.images.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-primary flex items-center mb-3"><ImageIcon className="mr-2 h-5 w-5" /> Galerie Photo</h3>
            <div className="grid grid-cols-2 gap-3">
              {province.images.map((img, index) => (
                <div key={index} className="aspect-video relative rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <Image 
                    src={img.url} 
                    alt={img.alt || `Image de ${province.name} ${index + 1}`} 
                    layout="fill" 
                    objectFit="cover"
                    className="hover:scale-105 transition-transform"
                    data-ai-hint={img.aiHint || "landscape nature"}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <div className="p-4 border-t mt-auto sticky bottom-0 bg-background">
        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href={`/trip-planner?add-province=${province.id}`}>
            Planifier une visite dans {province.name}
          </Link>
        </Button>
      </div>
    </Card>
  );
}