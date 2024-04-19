import React from 'react';
import ReactDOM from 'react-dom/client';
import { GitfExpertApp } from './GitfExpertApp';

// importacion de hoja de estilos
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GitfExpertApp />
  </React.StrictMode>
);
