import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { Map } from './components/map';
import { DetailCard } from './components/detail';

const root = ReactDOM.createRoot(document.getElementById('root'));

const fakeLocations = [
  { name: 'Location A', latitude: 10.762622, longitude: 106.660172 },
  { name: 'Location B', latitude: 10.765, longitude: 106.67 },
];

const handleMarkerClick = (location) => {
  console.log('Clicked location:', location);
};
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <div className="flex w-full">
        <Map locations={fakeLocations} onMarkerClick={handleMarkerClick} />
        <DetailCard />
      </div>
    </ChakraProvider>
  </React.StrictMode>
);
reportWebVitals();
