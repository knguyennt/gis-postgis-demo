import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { Map } from './components/map';
import { DetailCard } from './components/detail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <div class="flex w-full">
        <Map />
        <DetailCard />
      </div>
    </ChakraProvider>
  </React.StrictMode>
);
reportWebVitals();
