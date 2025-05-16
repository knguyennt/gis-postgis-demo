import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box } from '@chakra-ui/react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export const Map = ({ locations, onMarkerClick }) => {
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
        {locations.map((loc, index) => (
          <Marker
            key={index}
            position={[loc.latitude, loc.longitude]}
            eventHandlers={{
              click: () => {
                if (onMarkerClick) {
                  onMarkerClick(loc);
                }
              },
            }}
          >
            <Popup>
              <strong>{loc.name}</strong>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};
