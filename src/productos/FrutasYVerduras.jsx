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
import './FrutasYVerduras.css';

function FrutasYVerduras() {
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
      <div className="frutas-verduras-page">
        <Container className="py-5">
          <h1 className="text-center">Frutas y Verduras</h1>
          <p className="text-center">Disfruta de nuestra selección de frutas y verduras frescas.</p>
          <Row>
            <Col sm="6" md="4">
              <div className="product-card">
                <img src="data:image/jpeg;base64,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" alt="Manzanas" />
                <h5>Manzanas</h5>
                <p>Deliciosas y frescas.</p>
                <Button color="success">Comprar</Button>
              </div>
            </Col>
            <Col sm="6" md="4">
              <div className="product-card">
                <img src="https://img.lovepik.com/png/20231008/vegetables-fruits-and-vegetables-cartoon-carrot-cartoon-carrots-fruit-carrots_127605_wh860.png" alt="Zanahorias" />
                <h5>Zanahorias</h5>
                <p>Ricas en vitaminas.</p>
                <Button color="success">Comprar</Button>
              </div>
            </Col>
            <Col sm="6" md="4">
              <div className="product-card">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxETEhUREhMWFRUWFRcVGBgXGBgYGhYYGBgWGhcVGxgYHSggGxolHRYYITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGy0lICUvLSsrMC0tLS01LS0rLS0tLS0tLS8rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8tLf/AABEIAK4BIgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQEDBAYHAgj/xAA/EAABAwIDBQUFBQYGAwAAAAABAAIRAyEEEjEFQVFhcQYTIoGRMlKhscEHI2LR8BQVQnKi4TNDc4Ky8RaTwv/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EAC0RAQEAAgEDAwIEBgMAAAAAAAABAhEDEiExBBNBImFRgZHhQnGhscHwFCMy/9oADAMBAAIRAxEAPwDuKIqFwFygqi8MqNIkEEHeLhesybFUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB4rEhpIEmDA0k7goZ+0SGPGJpljYiQZDptlEXzXU2VBbTwT8oDqpc81GupywZQ4XAOQTETclc3qbnJvH/ABr8/n9GnHrxVjBYp2HpeKm7JmJBc+mHCd2XML746r3snE0meN9fO+re8iLkRl/hgyL8DwWuv7N4p1QgMLGON3Oc1wFoJgGXGJiw8luuFohpyCnDW6OsZJueYMklc3Bhn2+NeN/tr+qJydW9xbxW2WU6gow4vIaYBYPaJA9pwnQ6LwNvMOjKhBIDDlEVSZ9iTf2SSTAi6u1tj03vNQ5pIAMPcAcsxZpHE2Vkdn6Xh8VSWWa7OZaIIyt4CCuy+58aZXqeG9pKJBID8we1mQgZiTNxeCBlfJ/A5KPaSi6PDUDSWDOWjKHVGtcxpINiQ4eqyDsShLTlgtpupCJs12o6631ueKx//GMNfwm8fxOtDQ2QJgHKIkXhR/2/ZvPb132uYbb9F7XPbJAfk3CTEhwk+yRcE6q/U2o0fwuiwJgWJiGm+txordHYVFhcaY7vMAHBnhByzFtJubq6NlU9IMcJMC0SBOsb1W+/9kXo32XK2Oa2n3hmIBjeZ0HVeDtJgeGQbxe0eLTfJ9FT91UrWkDcSSOtzqg2XTGkyIAMmRFhB6K1977I+lmgqqoAqrdQREQEREBERARFQlBVFQFVQEREBERAREQEREBERAREQEREBeS1ekQeQ1VhVRAREQEREBERAREQEREBUJQlad2y265v3FJ0e+4aj8IO62vks+XlnHj1VXLKYzdbDjduYakctSqxpGomSPIXWVgsWyqwVKbg5p0I0MWPxXF8SLBbp9nG0Iz4Y/6jfgHD5H1XNxequWclnllhy7y1W9ogXl7wBJ0Xa3UqVA0EkgAXutf2ntwmWU7D3t/kNywttbWNSzfZGn4vxHlwUSx02FydOq4Of1P8OLDPk+I3zZtQupsc7UtBPospWsLSysa33WgeghXV3Y+I3giIpBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBRy5d2j2fVpVoqXbUcSHDQyST58l0PbW0m0KTqhExYD3nHQfrcuU7a23icZVFEugTMNHhY3e87yYMXOpjevP9dljdY/Pw5+e4618r2w8Nmaajr3IHQGJWd2SpZcdTifaqDyDXj8laxOJbQpNDR+Fjem88hqT+amvs7oy+pUcZcAP6yT/APK5+DDecZYTeUjfAoHtZjMtPu97tf5Ru8zA9VOOdAkrnvaDaXfVSW6Dwg8hN/Uld/qeTpw1PNdPJlqMXO462/VlNdnsE3xYio6GUzN7XAzSTwGqi9nYF9YmCAB7TnGA1ZfaDtJgqGGdhabxVc5jmeAyAXWLnO01vAlcPFjJevLxPG2GE19VY+1/tMa12XD0s4995LR1DNSOsLXavb7HuJiqG8gxkD1BPqVpeLd44C9NedB6quXPyZeapeTK/Lbz28x7T/jzyyU4+DV0DsJ2ldjKbxUAFSmROUQC105TEm9iD/dcQDDrMrqf2RYRwbWqnR2Rg6tzF3/Jq29Nnn7klq/Fll1adGREXpusREQEREBERAREQEREBERAREQEREBERAREQEREBCioUHOftL2xlqNog2azMf5nG3wH9Sidk4U02S7233d+Ebm+UnzJ4LI7V7Ic3HvxFYt7o5X05IuYDRI3BpbN7GW6yYjtobaptacr2ufuAIMHmvF5JbzZWuLP/wB21G7XxDX153MhvSJkDnKnOxPaFlHEBrnBtKoMrnGwBE5SToINvNc+q4gk3cZn1vv5ypnAsb3fe1m/dizW2BqnfH4RvPkFfGe39SuPa7dT7a9padJooh4BfbW53wI1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" alt="Espinaca" />
                <h5>Espinaca</h5>
                <p>Fresca y saludable.</p>
                <Button color="success">Comprar</Button>
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
              <p>Tu tienda de confianza para compras diarias. Encuentra todo lo que necesitas al mejor precio.</p>
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

export default FrutasYVerduras;
