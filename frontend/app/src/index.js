import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { Map } from './components/map';
import { DetailCard } from './components/detail';
import { SearchCard } from './components/search';

const fakeLocations = [
  { name: 'Location A', latitude: 10.762622, longitude: 106.660172 },
  { name: 'Location B', latitude: 10.765, longitude: 106.67 },
];

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const [searchTerm, setSearchTerm] = useState({ name: '', lat: '', lng: '' });
  const [isPicking, setIsPicking] = useState(false);

  const handleSearchChange = (field, value) => {
    setSearchTerm((prev) => ({ ...prev, [field]: value }));
  };

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  };

  const enablePickMode = () => {
    setIsPicking(true);
  };

  const handleMapClick = (coords) => {
    if (isPicking) {
      setSelectedLocation({
        name: '',
        latitude: coords.lat,
        longitude: coords.lng,
      });
      setIsPicking(false);
    }
  };

  const handleSearch = () => {
    const match = fakeLocations.find((loc) =>
      loc.name.toLowerCase().includes(searchTerm.name.toLowerCase())
    );
    if (match) {
      setSelectedLocation(match);
    }
  };

  return (
    <div className="flex w-full">
      <Map
        locations={fakeLocations}
        onMarkerClick={handleMarkerClick}
        onMapClick={handleMapClick}
      />
      <div className="flex gap-8 flex-col">
        <SearchCard
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onSearch={handleSearch}
          onPickLocation={enablePickMode}
        />
        <DetailCard location={selectedLocation} />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
