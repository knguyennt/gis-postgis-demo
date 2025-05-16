import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { Map } from './components/map';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <Map />
    </ChakraProvider>
  </React.StrictMode>
);
reportWebVitals();
