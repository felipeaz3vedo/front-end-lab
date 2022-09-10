import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { VideoContextProvider } from './context/VideoDataContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <VideoContextProvider>
      <App />
    </VideoContextProvider>
  </React.StrictMode>
);
