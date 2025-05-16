import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { Map } from './components/map';
import { DetailCard } from './components/detail';

const fakeLocations = [
  { name: 'Location A', latitude: 10.762622, longitude: 106.660172 },
  { name: 'Location B', latitude: 10.765, longitude: 106.67 },
];

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="flex w-full">
      <Map locations={fakeLocations} onMarkerClick={handleMarkerClick} />
      <DetailCard location={selectedLocation} />
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
