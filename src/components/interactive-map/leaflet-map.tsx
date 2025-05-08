'use client';

import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import L from 'leaflet';
import { useEffect, useRef } from 'react';

// Fix for default icon path issue with Webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});


interface LeafletMapProps {
  markers: { position: [number, number]; popupContent: string; id: string }[];
  selectedProvinceId?: string | null;
  onMarkerClick?: (id: string) => void;
  center?: [number, number];
  zoom?: number;
}

const defaultCenter: [number, number] = [-0.5, 11.75]; // Centered on Gabon
const defaultZoom = 6;


export default function LeafletMap({ 
  markers, 
  selectedProvinceId, 
  onMarkerClick,
  center: initialCenter = defaultCenter,
  zoom: initialZoom = defaultZoom
}: LeafletMapProps) {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (selectedProvinceId) {
      const selectedMarkerData = markers.find(m => m.id === selectedProvinceId);
      if (selectedMarkerData) {
        map.setView(selectedMarkerData.position, 8); // Zoom in on selected province
      } else {
        // If selectedProvinceId is provided but not found in markers, fall back to initial/default view
        map.setView(initialCenter, initialZoom);
      }
    } else {
      // No province selected, use initial/default view
      map.setView(initialCenter, initialZoom);
    }
  }, [selectedProvinceId, markers, initialCenter, initialZoom]);
  

  return (
    <MapContainer
      center={initialCenter}
      zoom={initialZoom}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={true}
      whenCreated={mapInstance => { mapRef.current = mapInstance; }}
      className="rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {markers.map((marker) => (
        <Marker 
          key={marker.id} // Use marker.id as key, assuming it's unique
          position={marker.position}
          eventHandlers={{
            click: () => {
              if (onMarkerClick) {
                onMarkerClick(marker.id);
              }
            },
          }}
        >
          <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
             {marker.popupContent.split('<br/>')[0].replace(/<b>|<\/b>/g,'')}
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}
