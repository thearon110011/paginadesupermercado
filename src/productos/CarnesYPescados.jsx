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
import './CarnesYPescados.css';

function CarnesYPescados() {
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
      <div className="carnes-pescados-page">
        <Container className="py-5">
          <h1 className="text-center">Carnes y Pescados</h1>
          <p className="text-center">
            Explora nuestra selección de carnes frescas y pescados de calidad.
          </p>
          <Row>
            <Col sm="6" md="4">
              <div className="product-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1uJDIYd9seuH6WT2rUyMgvs9GE_0h7QkEA&s" alt="Carne de Res" />
                <h5>Carne de Res</h5>
                <p>Fresca y jugosa.</p>
                <Button color="danger">Comprar</Button>
              </div>
            </Col>
            <Col sm="6" md="4">
              <div className="product-card">
                <img src="data:image/jpeg;base64,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" alt="Pechuga de Pollo" />
                <h5>Pechuga de Pollo</h5>
                <p>Perfecta para tus recetas.</p>
                <Button color="danger">Comprar</Button>
              </div>
            </Col>
            <Col sm="6" md="4">
              <div className="product-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjiLxIUXdiItYLOmBUnJ9LU9wwnQHyup5HSA&s" alt="Salmón" />
                <h5>Salmón</h5>
                <p>Rico en omega-3.</p>
                <Button color="danger">Comprar</Button>
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

export default CarnesYPescados;
