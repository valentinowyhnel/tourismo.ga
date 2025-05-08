'use client';

import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import L from 'leaflet';
import { useEffect, useState } from 'react'; // Removed useRef, added useState
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
  zoom: initialZoom = defaultZoom,
}: LeafletMapProps) {
  const [map, setMap] = useState<L.Map | null>(null); // State for map instance

  useEffect(() => {
    if (!map) return; // Guard: if map is not yet available, do nothing

    if (selectedProvinceId) {
      const selectedMarkerData = markers.find((m) => m.id === selectedProvinceId);
      if (selectedMarkerData) {
        map.setView(selectedMarkerData.position as LatLngExpression, 8);
      } else {
        // Fallback if selectedProvinceId is present but not found in markers
        map.setView(initialCenter as LatLngExpression, initialZoom);
      }
    } else {
      map.setView(initialCenter as LatLngExpression, initialZoom);
    }
  }, [map, selectedProvinceId, markers, initialCenter, initialZoom]); // useEffect depends on `map` state

  return (
    <MapContainer
      center={initialCenter} // Use initialCenter for initial setup
      zoom={initialZoom}   // Use initialZoom for initial setup
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={true}
      whenCreated={setMap} // Use whenCreated to set the map instance via state
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
