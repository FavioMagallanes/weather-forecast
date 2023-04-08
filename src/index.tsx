import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { LocationProvider } from './context/LocationContext/LocationContext';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LocationProvider>
      <App />
    </LocationProvider>
  </React.StrictMode>
);
