import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { Coords } from '../types';
import { useEffect } from 'react';
import { MaptilerLayer } from '@maptiler/leaflet-maptilersdk';
const API_KEY = import.meta.env.VITE_API_KEY;
const VITE_TILER_API_KEY = import.meta.env.VITE_TILER_API_KEY;

type Props = {
  coords: Coords;
  onMapClick: (lat: number, lon: number) => void;
  mapType: string;
};

export default function Map({ coords, onMapClick, mapType }: Props) {
  return (
    <MapContainer
      center={[coords.lat, coords.lon]}
      zoom={5}
      style={{ width: '100%', height: '100%', zIndex: '1' }}
    >
      <MapClick onMapClick={onMapClick} coords={coords} />
      <MapTileLayer />
      <TileLayer
        opacity={0.5}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={`https://tile.openweathermap.org/map/${mapType}/{z}/{x}/{y}.png?appid=${API_KEY}`}
      />
      <Marker position={[coords.lat, coords.lon]} />
    </MapContainer>
  );
}

function MapClick({
  onMapClick,
  coords,
}: {
  onMapClick: (lat: number, lon: number) => void;
  coords: Coords;
}) {
  const map = useMap();
  map.panTo([coords.lat, coords.lon]);

  map.on('click', ({ latlng }) => {
    const { lat, lng } = latlng;
    onMapClick(lat, lng);
  });

  return null;
}

function MapTileLayer() {
  const map = useMap();

  useEffect(() => {
    const tileLayer = new MaptilerLayer({
      style: 'basic-dark',
      apiKey: `${VITE_TILER_API_KEY}`,
    });
    tileLayer.addTo(map);

    return () => {
      map.removeLayer(tileLayer);
    };
  }, [map]);

  return null;
}
