import React from "react";
// import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode> // Re-renders index.tsx twice during development
    <BrowserRouter>
      <App />
    </BrowserRouter>
  //  </React.StrictMode>
);