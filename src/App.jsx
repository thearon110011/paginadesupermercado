import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pagina1 from './Pagina1';
import FrutasYVerduras from './productos/FrutasYVerduras';
import LacteosYHuevos from './productos/LacteosYHuevos';
import CarnesYPescados from './productos/CarnesYPescados';
import Congelados from './productos/Congelados';
import SnacksYGolosinas from './productos/SnacksYGolosinas';
import Bebidas from './productos/Bebidas';
import CerealesYDesayunos from './productos/CerealesYDesayunos';
import HogarYLimpieza from './productos/HogarYLimpieza';
import BellezaYCuidadoPersonal from './productos/BellezaYCuidadoPersonal';
import BebesYNinos from './productos/BebesYNinos';
import Contacto from './Contacto'; // Página de Contacto
import Nosotros from './nosotros'; // Página de Nosotros
import Carrito from './Carrito'; // Página del carrito de compras

function App() {
    return (
        <Router>
            <Routes>
                {/* Ruta principal */}
                <Route path="/" element={<Pagina1 />} />
                
                {/* Rutas de categorías de productos */}
                <Route path="/productos/frutas-y-verduras" element={<FrutasYVerduras />} />
                <Route path="/productos/lacteos-y-huevos" element={<LacteosYHuevos />} />
                <Route path="/productos/carnes-y-pescados" element={<CarnesYPescados />} />
                <Route path="/productos/congelados" element={<Congelados />} />
                <Route path="/productos/snacks-golosinas" element={<SnacksYGolosinas />} />
                <Route path="/productos/bebidas" element={<Bebidas />} />
                <Route path="/productos/cereales-desayunos" element={<CerealesYDesayunos />} />
                <Route path="/productos/hogar-limpieza" element={<HogarYLimpieza />} />
                <Route path="/productos/belleza-cuidado-personal" element={<BellezaYCuidadoPersonal />} />
                <Route path="/productos/bebes-ninos" element={<BebesYNinos />} />

                {/* Rutas adicionales */}
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/carrito" element={<Carrito />} /> {/* Nueva ruta del carrito */}
            </Routes>
        </Router>
    );
}

export default App;
