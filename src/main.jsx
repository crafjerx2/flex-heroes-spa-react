import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";

import './style.css';
import { HeroeApp } from './HeroeApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <React.StrictMode>
      <HeroeApp />
    </React.StrictMode>,
  </HashRouter>
);
