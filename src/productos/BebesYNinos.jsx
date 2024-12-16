import React, { useState, useEffect } from 'react';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';
import { FaSearch, FaShoppingCart, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './BebesYNinos.css';

function BebesYNinos() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const categories = [
    { name: "Frutas y Verduras", path: "/productos/frutas-y-verduras" },
    { name: "Lácteos y Huevos", path: "/productos/lacteos-y-huevos" },
    { name: "Carnes y Pescados", path: "/productos/carnes-y-pescados" },
    { name: "Congelados", path: "/productos/congelados" },
    { name: "Snacks y Golosinas", path: "/productos/snacks-golosinas" },
    { name: "Bebidas", path: "/productos/bebidas" },
    { name: "Cereales y Desayunos", path: "/productos/cereales-desayunos" },
    { name: "Hogar y Limpieza", path: "/productos/hogar-limpieza" },
    { name: "Productos de Belleza y Cuidado Personal", path: "/productos/belleza-cuidado-personal" },
    { name: "Bebés y Niños", path: "/productos/bebes-ninos" },
  ];

  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleScroll = () => {
    setSticky(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar fixed="top" expand="lg" className={`navbar-light ${sticky ? 'sticky-navbar' : ''}`}>
        <Container>
          <NavbarToggler onClick={toggleNavbar} />
          <Collapse isOpen={isNavbarOpen} navbar>
            <Nav className="w-100 d-flex justify-content-between align-items-center" navbar>
              <div className="d-flex align-items-center">
                <NavItem>
                  <NavLink href="/">Inicio</NavLink>
                </NavItem>
                <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
                  <DropdownToggle nav caret>Productos</DropdownToggle>
                  <DropdownMenu>
                    {categories.map((category, index) => (
                      <DropdownItem key={index} href={category.path}>
                        {category.name}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
                <NavItem>
                  <NavLink href="/nosotros">Nosotros</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contacto">Contacto</NavLink>
                </NavItem>
              </div>
              <div className="d-flex align-items-center gap-3">
                <NavItem>
                  <NavLink href="/carrito">
                    <FaShoppingCart />
                  </NavLink>
                </NavItem>
              </div>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>

      {/* Contenido de la página */}
      <div className="bebes-ninos-page">
        <Container className="py-5">
          <h1 className="text-center">Bebés y Niños</h1>
          <p className="text-center">
            Productos especialmente diseñados para los más pequeños de la casa.
          </p>
          <Row>
            <Col sm="6" md="4">
              <div className="product-card">
                <img src="data:image/jpeg;base64,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" alt="Pañales" />
                <h5>Pañales</h5>
                <p>Suaves y absorbentes.</p>
                <Button color="primary">Comprar</Button>
              </div>
            </Col>
            <Col sm="6" md="4">
              <div className="product-card">
                <img src="data:image/jpeg;base64,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" alt="Fórmula Infantil" />
                <h5>Fórmula Infantil</h5>
                <p>Nutrición completa para tu bebé.</p>
                <Button color="primary">Comprar</Button>
              </div>
            </Col>
            <Col sm="6" md="4">
              <div className="product-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgMFIV8H62idmdb1yqFFS7zy80y_5cwOvCwQ&s" alt="Juguetes Educativos" />
                <h5>Juguetes Educativos</h5>
                <p>Estimula su desarrollo cognitivo.</p>
                <Button color="primary">Comprar</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer */}
      <footer className="footer">
        <Container>
          <Row className="footer-row">
            <Col md="4">
              <h5>Supermercado</h5>
              <p>
                Tu tienda de confianza para compras diarias. Encuentra todo lo que necesitas al mejor precio.
              </p>
            </Col>
            <Col md="4">
              <h5>Enlaces</h5>
              <ul className="footer-links">
                <li><a href="/">Inicio</a></li>
                <li><a href="/productos">Productos</a></li>
                <li><a href="/contacto">Contacto</a></li>
              </ul>
            </Col>
            <Col md="4" className="social-icons">
              <h5>Síguenos</h5>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
            </Col>
          </Row>
          <Row className="footer-bottom">
            <Col className="text-center">
              <p>&copy; {new Date().getFullYear()} Supermercado. Todos los derechos reservados.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default BebesYNinos;
