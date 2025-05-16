import { MapContainer, TileLayer } from 'react-leaflet';
import { Box } from '@chakra-ui/react';
import 'leaflet/dist/leaflet.css';

export const Map = () => {
  return (
    <Box border="1px solid #ccc" borderRadius="md" overflow="hidden" width="70%" height="100vh">
      <MapContainer
        center={[10.762622, 106.660172]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </Box>
  );
};
