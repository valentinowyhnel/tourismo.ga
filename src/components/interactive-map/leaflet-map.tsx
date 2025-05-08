'use client';

import { MapContainer, TileLayer, Marker, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import type { LatLngExpression } from 'leaflet';
import { useEffect } from 'react';

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

// Inner component to handle map updates using the useMap() hook
function MapUpdater(props: {
  selectedProvinceId?: string | null;
  markers: LeafletMapProps['markers'];
  mapInitialCenter: [number, number]; // Center used for initial MapContainer setup
  mapInitialZoom: number; // Zoom used for initial MapContainer setup
}) {
  const map = useMap();

  useEffect(() => {
    if (props.selectedProvinceId) {
      const selectedMarkerData = props.markers.find(m => m.id === props.selectedProvinceId);
      if (selectedMarkerData) {
        map.setView(selectedMarkerData.position, 8); // Zoom in on selected province
      } else {
        // If selectedProvinceId is provided but not found in markers, fall back to initial view
        map.setView(props.mapInitialCenter, props.mapInitialZoom);
      }
    } else {
      // No province selected, use initial/default view
      map.setView(props.mapInitialCenter, props.mapInitialZoom);
    }
  }, [props.selectedProvinceId, props.markers, props.mapInitialCenter, props.mapInitialZoom, map]);

  return null; // This component does not render any DOM elements itself
}


export default function LeafletMap({
  markers,
  selectedProvinceId,
  onMarkerClick,
  center: initialCenter = defaultCenter, // Props for MapContainer's initial setup
  zoom: initialZoom = defaultZoom      // Props for MapContainer's initial setup
}: LeafletMapProps) {

  return (
    <MapContainer
      center={initialCenter}
      zoom={initialZoom}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={true}
      className="rounded-lg"
      // whenCreated prop is removed; map instance is accessed via useMap in MapUpdater
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
      {/* MapUpdater component is a child of MapContainer and uses useMap() */}
      <MapUpdater
        selectedProvinceId={selectedProvinceId}
        markers={markers}
        mapInitialCenter={initialCenter} // Pass the center/zoom that MapContainer used
        mapInitialZoom={initialZoom}
      />
    </MapContainer>
  );
}