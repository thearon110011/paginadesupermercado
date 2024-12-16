import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import App from './App.jsx'; // Aquí debes usar App.jsx

// Renderiza App en lugar de Pagina1 para que funcione el enrutamiento
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
