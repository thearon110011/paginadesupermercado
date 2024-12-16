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
import './BellezaYCuidadoPersonal.css';

function BellezaYCuidadoPersonal() {
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
      <div className="belleza-cuidado-personal-page">
        <Container className="py-5">
          <h1 className="text-center">Productos de Belleza y Cuidado Personal</h1>
          <p className="text-center">
            Descubre nuestra selección de productos para tu belleza y cuidado personal.
          </p>
          <Row>
            <Col sm="6" md="4">
              <div className="product-card">
                <img src="https://comerciante.lacuarta.com/wp-content/uploads/2023/04/Tema-04-1.jpg" alt="Crema Facial" />
                <h5>Crema Facial</h5>
                <p>Hidratación intensa para tu piel.</p>
                <Button color="info">Comprar</Button>
              </div>
            </Col>
            <Col sm="6" md="4">
              <div className="product-card">
                <img src="data:image/jpeg;base64,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" alt="Shampoo Natural" />
                <h5>Shampoo Natural</h5>
                <p>Cuida tu cabello con ingredientes naturales.</p>
                <Button color="info">Comprar</Button>
              </div>
            </Col>
            <Col sm="6" md="4">
              <div className="product-card">
                <img src="https://www.druni.es/media/wysiwyg/landings/Higiene/01_banner_HIG_ducha_02.jpg" alt="Perfume Elegante" />
                <h5>Perfume Elegante</h5>
                <p>Fragancia duradera y sofisticada.</p>
                <Button color="info">Comprar</Button>
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

export default BellezaYCuidadoPersonal;
