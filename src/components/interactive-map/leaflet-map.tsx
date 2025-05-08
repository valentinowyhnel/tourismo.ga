'use client';

import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

// Fix for default icon path issue
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
  center?: [number, number]; // Prop for initial center for LeafletMap component
  zoom?: number; // Prop for initial zoom for LeafletMap component
}

const defaultCenter: [number, number] = [-0.5, 11.75]; // Centered on Gabon
const defaultZoom = 6;

export default function LeafletMap({
  markers,
  selectedProvinceId,
  onMarkerClick,
  center: initialCenterFromProps = defaultCenter, // Use prop or default
  zoom: initialZoomFromProps = defaultZoom,     // Use prop or default
}: LeafletMapProps) {
  const [map, setMap] = useState<L.Map | null>(null);
  
  // Store initial center/zoom in state for MapContainer's props, ensuring they are stable
  const [containerCenter] = useState<LatLngExpression>(initialCenterFromProps);
  const [containerZoom] = useState<number>(initialZoomFromProps);

  useEffect(() => {
    if (!map) return; 

    if (selectedProvinceId) {
      const selectedMarkerData = markers.find((m) => m.id === selectedProvinceId);
      if (selectedMarkerData) {
        map.setView(selectedMarkerData.position as LatLngExpression, 8);
      } else {
        // Fallback if selectedProvinceId is present but not found in markers
        map.setView(initialCenterFromProps as LatLngExpression, initialZoomFromProps);
      }
    } else {
      // No selected province, use initial view defined by props or defaults
      map.setView(initialCenterFromProps as LatLngExpression, initialZoomFromProps);
    }
  }, [map, selectedProvinceId, markers, initialCenterFromProps, initialZoomFromProps]);

  return (
    <MapContainer
      center={containerCenter} // Use stable state for MapContainer's initial center prop
      zoom={containerZoom}     // Use stable state for MapContainer's initial zoom prop
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={true}
      whenCreated={setMap} 
      className="rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={marker.position}
          eventHandlers={{
            click: () => {
              onMarkerClick?.(marker.id);
            },
          }}
        >
          <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
            {marker.popupContent.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '')}
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}
