import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Importando o Router
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* Envolvendo o aplicativo com o BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
