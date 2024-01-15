import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import './style.css';
import { HeroeApp } from './HeroeApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <HeroeApp />
    </React.StrictMode>,
  </BrowserRouter>
);
