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
import './HogarYLimpieza.css';

function HogarYLimpieza() {
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
      <div className="hogar-limpieza-page">
        <Container className="py-5">
          <h1 className="text-center">Hogar y Limpieza</h1>
          <p className="text-center">
            Encuentra todo lo que necesitas para mantener tu hogar limpio y organizado.
          </p>
          <Row>
            <Col sm="6" md="4">
              <div className="product-card">
                <img src="data:image/jpeg;base64,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" alt="Detergente Líquido" />
                <h5>Detergente Líquido</h5>
                <p>Eficiente y de alta calidad.</p>
                <Button color="success">Comprar</Button>
              </div>
            </Col>
            <Col sm="6" md="4">
              <div className="product-card">
                <img src="data:image/jpeg;base64,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" alt="Escoba Multiuso" />
                <h5>Escoba Multiuso</h5>
                <p>Ideal para cualquier superficie.</p>
                <Button color="success">Comprar</Button>
              </div>
            </Col>
            <Col sm="6" md="4">
              <div className="product-card">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAOEA8PDg8QDxAPEBASDw0QEA8PEBAQFRUWFhURFhUZHSggGBolGxYVITEhJSkrLi4uFyAzODMtNygtLisBCgoKDg0OGxAQGi0mHyUrLSsrLS0tLS0rLS0tLS0tLS0tKy0rLS0tLS0tLS0tLS0tLS0tLSstLS0tLSstLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQYDBAUCB//EAEUQAAIBAgIGBAkKBAUFAAAAAAABAgMRBCEFEjFxcrEzQVFhBhMiMoGRssHRFSM0UlNic6GiwyRCgpIUJbPC8DVEY3Th/8QAGwEBAAEFAQAAAAAAAAAAAAAAAAUBAgMEBgf/xAA5EQEAAQIEBAMFBwMEAwEAAAAAAQIDBBExcQUSITMyNEETFFFhkQYVIlJTobEWJIEj0eHwYsHxQv/aAAwDAQACEQMRAD8A+4ASAAAAAAAB5k7FtU5RmrCoT0zXk29fVvsSSsjhbvGMVVVMxVlCcowdqI0eHpXEfay/T8DF97Yv88r/AHSz+VHyriPtZfl8B964v9Sf2PdLP5T5WxH2svVH4D71xn6knudn8qPlbEfbS/T8B964v9SVfdLP5R6WxH2svVH4D71xn6knudn8rNS0lXazqy/T8C2eLYz9Sf2Y6sLZ/K9fKVb7WXqj8C373xn6k/sp7ra/Kn5Srfay9UfgPvfGfqT+x7ra/Kj5Sr/ay9UfgPvfGfqT+3+x7ra/K6GhcdUnUcZyck4tq9smiY4LxK/ev+zu1Zxk1MXYooozph3UdajkgAAAAAAAAAAAAAAAAADxV2Pcyy54Z2VjVQlsPMJ1dNGg2FXQwehqlWKmnGKey7d9+RL4Tg97EW4uRMREtO7jaLdXLk3cL4PtSi6koyindxSefdmSVj7P1U3IquVRMfBr3eIRVTMUxk39I6LjVhqwjCMk1qyslbtWRJ43hlu/b5aIiJ9JauHxNVurOZzhyl4OVOupD9RDf07e/NDe+8qPhLUr4d0pOEtq7Nj7yBxeGrw9ybderYt3IuU80MUpJJt7ErswUUzXVFMayvmcozeIVdbZGXZsJX7kxXwj6sPt6EU66cnBpxklezSzWy6sa2K4few0Z1x0X0XIq0dXQXTLhkbfAfORtLXxvaWdHeodIAAAAAAAAAAAAAAAAAA8Vdj3MsueGdladVBWw8wnV00aJYXM9HH1aa1YVJRXZk+ZuWcfiLNPLbrmIYa8ParnOqGxhtNVoSvKWuvqysl+Rt2eM4mirOqeaPhLDcwNqqPwxk2cT4RTkmoQ1G/5r6zW7I3b/wBoKqqMrdOU/Fho4dETnVObSp6Rrt51Z23kTXxPFZeOWzVhrMaUvM5uTbk229re00Lt2u5VzVznK6mmKYyhjrebLczLhO/RvClfhlnoK3i90/aR6BV6I2nSWpUl87SXbh7/AKkQnHfLxPzbGG1l19BdMuGRF8B85G0q43tLOjvUOkAAAAAAAAAAAAAAAAAAeKmx7mWXPDOysaqEth5hOrpo0bFPBtpTnKNKL2Sne8t0VmzftYCuaeeuYpp+f+zDViIieWmM5+T1GlSb1YutUl92EVfcm7mWjD4WqeWmqqqflCybt2IzmIiPnLFOjFxcqcnJRa1oyjqyV9jybT2MxXcNb5JuWqs4jWJ1hkou1c3LXGvwa5pNhnoqyMdTHUyFqx4qZp7jYwnfo3hbX4ZbiVnS3T5o9Ar9EbRpLl1navQ78K/aRDcb8tG7Yw/il29BdMuGRE8B85G0q43tLOjvUOkAAAAAAAAAAAAAAAAAAeZ7HuZbX4ZVjVQk9ndbI8yieWvP5ulyzpyZa0nWqXV5SnLKL25vKK7lsNu9cnE3oy65+nw+TFRTFq319G9KvRoa1OCnKUsp1IyjfvhF25IlvbYXCTNqiJmZ1mP4ak0Xr2VdUxl6NepTvPxEY2TcbRi7SbtdObd9iby6szBcpp9r7vTHSctNf8stM5Ue1mev/dHh0YXqTjfxcPJg5eVr1Phte4x1YezTVXcpj8FPTr6yu9pXlFM6z+0MviVanFJ68s7ayyi9l8su3ca84a3lRTyzz1ddfRb7SrOZz6Q9ulDz89Ru0fK2pW1pt9l9iW02fc8PTPtP/wA6R11y1nZZ7WuY5fVq1pa1327lyI63Xz4qmf8Ayj+WeYyomG41aVL+rmd5XrCOo0lxsRL+Jwq7cNLmRHGY/tmzh9Zd3QXTR4ZciF4D5yNpVxvaWhHfIdIAAAAAAAAAAAAAAAAAA8z2Ftfhk9VBPMa/FLp40e6FV05Kas2r5PvTXvMuGvTZuRXEaLbluK6Zpl6WJ1ejjGm/rK8pLc5Xt6DY995e3RET8dZWewz8UzLHTqyjLWi/KV83nt27TBbxFyi57SJ6r6rVNVPLOj3SqSacb3V07Wja+xW7PQXTi7sxNOfSZ0WVWqI6tx15ZyunOTktbVjnCyTVrZ3eXoN73q7Ec3Tn0zy9GryU6en/ALeK1T+XKyt1R86y1rdl32GtisVVE+zpyyj+fVkt0R4mCWxmphpzv0T84/llr8Mt2XnUb/ePQq9YRdvSXDxb/isH/wCvL/cRXGI/tpbWH8UrDoLpo7pciC4F5ynaVcb2lnO+Q6QAAAAAAAAAAAAAAAAABEi2rSRQGeY3PHO7p6dC3oK26YqnKZyVnpAo96MkWo/NCnNPwNX7yHsoz8UHNPwZaUclmsyybek5wx1VZsnfrZ73fcX8s+LnjNZ0+CGt3oNeunL1zXRKGZML3qN4/lSvwy3ay8ujvlyZ6HXrCLt6S4GP+l4P8CX+4jOLeXnZtYfxSsWgumjulyIDgXnKdpVxvaWg75DpAAAAAAAAAAAAAAAAAAEMpVoKBLrPMbnjneXT06QgtXM2Ho3Tk9i/MpMsNy5lOUPf+IoxvrRVvRf1mSxnNUc0dGOqm5OksVfEartGKututd2+6szdqtWrfpnPzZLduaozqlNKspWi0lJ7Gtj7rdTLK7NFcfhjKf2kqomnrE5wyEbIiWwz4bvUbx/K2vwy3Kqzo75cmeh1+iLt6S4OkvpWCfU6Ul6m8vzI7ikf287NrD6ysWgumjulyOe4F5ynaV2N7S0HfIZIAAAAAAAAAAAAAAAAAAhlKtBQJbXvZ5ld8dW8uno8MIMa5DrSdqUEr7c9hu4TDe0nmlFY/Ezbq5adZVvwh0hWw7trR25qyaJ3C2omrKY0cvi8biLcxy1Ono7FSqU6dWr5DqZ6u1yW1St/KmtlzFiMHR7TmzTWC4xXFnK5Gc+jdr1daSlBJK8bKLu0+9dWfoNbE2vxxVRolMHjbd2maZnq6E9r3shL/cq3bFOjHN5PcyuH7tG8FWktuq7+I3y5NHolfoirfq4WlpfxeC74S9qRH8S62Ktm1Y1lY9BdNHdLkc7wLzlO0rsb2pWg75DJAAAAAAAAAAAAAAAAAAEMpIoE9r3s8zvdyreXT0eGHkxLnP0hr0nKtC8skpR22S60S2AuxlyS57i9iumr29HXp1hQfCLSTqttyv1JHS4e1FMZuRmqq7czl9AjKEZQk15M4Q1OpeTFJr0WI+71qzS9MxTlmywnF1Yun1ytba9V/wDwsmGSmrKuJh0zlbnind1lE50xLzV82W58jJh+7TvCs6S2nmqD73yPRK40Rdv1cDS/0vBcD9qRo8Qj/Qq2ls2dZWbQfTR3S5HNcD85T/ldje1K0I75DJKgAAAAAAAAAAAAAAAAAQykig1POlxPmeZ3+5VvP8unt+GHhmOIldmlK5dlMKTMZIjgKKlrqjSU/r+Lhreu1y73i9ly80tWLFuJzimGHH4GU7OnOMfrQnHXhL0ZNPvRt4TiFVuOWuM4aGM4dF6eamcp/ZOBwbpvWlqLK1oKa/OTfuMmI4jVVGVFOSzDcLptVc1U5y37kRMT6pZjxLtCb7ISf5GSz0uU7wrPVmwtXWpUJdrnzZ6FFXNREo7l5aphxtNfS8HwL22amP7NW0stjWVl0J08d0uRzPBPOU/5XYztStJ6AhkgAAAAAAAAAAAAAAAAACGUkUGr50uKXM80v92ref5dNb8EbMsNaOxw2rrTzkrG3a57UZRlP/LDXy19ZzZKNWTz8nPUXWtj25bjJOKrqnSGOq3ERl1ZFOSt5ubavdvY+u+/aWRfroy6R16LeSmfiiV/u5+Tk2tj68y2q5VExOUden0XRTE/ylykr5x2vrvsu/eX+3u0zPh+H0W8lM/Ezd/Nz1U3d7+vYWV1zXEx065R/wDFYiIn1amMXzdRfcmr+hmjbp5bsR82fPpmaPyoYfuc+bO/pjK3ENGZzrmXN0z9KwnAvbZrY3sztK6zqsuhOnhulyZzPBJ/vKV+M7UrSjv0MkqAAAAAAAAAAAAAAAAABDKSKDX8+fFLmea4ju1bz/Lp7fgjZ4MURnK6WzThZdXrLqrM/GGGqp6tu9Zb7Gr4x9VuaLbvWi32c5ZmcGru9aLvYz8Y+quYY6oy1GLF9HU4J8mX2O5TvBOjX0dX+Yodzqe00d9VVlTDRpjrMtPTX0rCcC/1DBipztTtK630lZ9Cv5+H9XJnMcF85SvxnalaUegoZIAAAAAAAAAAAAAAAAAAhgUKu7Tnxy5s82xE8t+uY+M/y6W3GdEbPMG27ZW3IsquzMKzTENlPZ8EKbsdM567MWQ2u39KLue3lln+ymUl+/8ASilV2n/sGRf/AJqopNynL/gyk1t3qRj9vV8IV5YYcX0dTgnyZW3XNV2nP4wrllDV0O/mKHHV5yO9nSGjGrU019LwvD+4zBi+1O0r7eqz6F6eH9XJnL8G87QuxfZlaj0JCpKKgAAAAAAAAAAAAAAAABDAoOJ6Spxz5s82xXer3n+XTWfBGyaEdrNWqSuWePufIpTqxTLN4qO3WX9sjb9hTlnzR9JYprnPLI8Uutpd2rO62fEp7CMs5mPpJ7SWOpFL0b1+TMF2mKejJRMz1eDEvYsX0dTgnyZlsdyneFJ0c7Q0/mKX4tTmzv50ho06sOnH/F4Xh/dMGJ7c7SvtrTobp6f9Xss5bg/naF+L7UrUj0JCJCoAAAAAAAAAAAAAAAAAQwKFil85U/EnzZ5ti+/XvP8ALprPbp2ZKaskacytnV7i/eKZyWzDM8S7JZZWt5K6nddZue+VcvL09PT4MPsIzzP8S+7Za2qtnZtLvfqvl9FPYQx1J6zu9r29Rq3bs3Jzlloo5ejwYl7Fi+jqfhz5My2O5TupOjmaDV6NNP7WXNnfTpDRjWWPTv0vD90f3WYsT252lfaWjQ/T0979lnKcH87Ruvxfala0ehoVIAAAAAAAAAAAAAAAAAAhgUbEx+dqfiT9pnm2N79e8ujtT/p07PSNIc7Smk/EShHK81lrXtuy9JOcI4TTjYqqqnKIaWLxU2Msoc3E+EFSLilGObs7RlL1E/H2cwsa5tKOI3J0bXhDpp4PUkqbnCSV1UjKlLWavl3egf05hfmr7/c+Tp4LFwr0qdWCcddO8W72adtpA8X4XRhKYronpM5N/D36rnSpmIJtMWL6Op+HP2WZbHcp3J0cvQztRp/iP3nfTpDRj1YvCD6Xh+F/6rMWJ7c7SutrVojp6e98mcpwjztG7JiuzK1o9DQaQqAAAAAAAAAAAAAAAAAEMClYlfO1fxJ+0zzTHeYr3l0FrtU7PJqL1W8MW41KEl1P4nZ/Zft17ojifo5OIqOWpK+ySOnlGUsnhdXlUp05Sbb17Zu+SirBcs3gurYSj/Vf02OW+0nZp3TGD1/w6pxyQYsX0dTgnyZks9ynclzNExtRpd837zvfSGlGssPhAv4vDbv3WY8T252lW3qtWienp73yZyfCfOUbsmK7MrXE9FQcJCoAAAAAAAAAAAAAAAAAQwKbi+kqccubPNMd5iveU/Z7cbMTZqRGbIrHhRUjN05WcoQ85xyyvtvZnc/Z7DV2LdU19M9EPxCuK5iKXAr4zDxl5M9aMWnLdlZZpZnQSjYhk01j8NifFwoz1c21r9bdk+QzXZSufg/QlClTpSsrQupdsr5q3ZaxE8SwVOLt8szlMdYSVm57Pq6ElZ2fUef3bdVuuaKtYStNUTGcMWJ8yfBLkytnuU7kubo/KjQ43yZ3vpDUp1lreEH0zCLu/dMeK7U7SW9Vq0T09Pe+TOT4VP8AeW92TFdmVsR6Kg0hUAAAAAAAAAAAAAAAAAIAp2M6Wpxy5s814h5m5vKes9uNnK0nUu6dFPOq8+FdXpbRv8DwsXr3PVHSlixdc00ZR6ss8LQgsRCqtaavGDs9V9WxHazOSIVetoyEra0KcrZJqGrl7y2bisUw6OH8F1GEK3i6aUnk9W7y9P8Ayw55Vyh06NS109nU1/KykVL6W3Sra6T61lLiWXwfpOP4/Zii/FcesJPDT+HJGI8yfDLkQtrxxu2Jc/Cr5qhxv2ZHfekNONZaenc8dhV91f6sjHi+zVtKtvVa9E9NT3vkzkuFect7smK7UrYj0ZBpCoAAAAAAAAAAAAAAAAAGBTsd0tTjlzPNuI+aubp6x26dlf0l0yb2QUfzuzpPs/Ry4ea/jLSxtX4ohsSi5tSpx8ZGyurpu9s8iamrOWnEOTi4VIO8oSgu+LSLFzZeLnKlBOrrQUrW+q31cyuamTNKjVppTn5MG8nJpXXbqvPsKxJDZ0VU1vGcSdt6t7jm/tD15J3SOEn8Lcr+ZPhlyOcteON23LUwa+bpLtlL2Wd9GkNKNZc7TK/zDC8P7kjDjpysVbL7S06K6anxe5nKcL83b3ZMT2qltR6Mg0gAAAAAAAAAAAAAAAAAABTsf0tTjlzPN+Jeaubp6x26dnBxFPXrTXY4r9J1XCKcsHT/AJR+K7jDiIOlsun2q6JBgc+tiJu3lN2adm8rlM1XpYiTVtiunqq9sr5/mwpkyVa2tZdiSKqOnodrWlb6sfyb+JAcfp/06Z+bfwfq6NbzZcMuRzNrxxu3ZaeD8yhxS9iR30aQ0o1lo6X/AOoYTgl7cjX4h2Ktl1nVZ9F9NT4vccrwvzdvdlxPaqW1HoyDSVAAAAAAAAAAAAAAAAAAFJFOx/S1OOXM834l5q5unbHbp2aeicL4ytWf3lysddwvydEI/E9yXnwgwer1G7LBCsSVi1cJFDNDZdCjq+D7znu95Cce7FO7ewfq7FXzZcL5HLWvHG7dlp4TZh196XsSO+p0hpx6tLSa/wAwwn4Un+qoavEp/t6tl1mOqy6L6anxe45fhfm7e7Jie1UtqPRkGkqAAAAAAAAAAAAAAAAAAKSKdj+lqccuZ5vxLzVzdPWO3TsyeDK+drcTOw4bH9rb2RmI7ksnhFTumblTFSo2IjZli5jiUUQy6FHV8H1nN9xCce7FO7ewesuvV82XC+Ry1vxxu3mrgP8At/S/ya9531OkNL4tPFq+Nwj/APBLnUNLivTD1MlnWVi0Z01LiRzPDfN292TE9qpbkekIJIAAAAAAAAAAAAAAAAAAhlBTsf0tTjlzPN+I+aubp6x26dmXwZ6WrvOx4ZOeEt7IvFdyW1p9ZM3JYqVDxm0sZGsmCU7Qtd3QkbRlvIPj3Yp3bmD1l0Kvmy3Pkcvb8cbt9raPjlQ7oPmj0CmOkNL0lr1Kf8ThX9XDZ+uZH8X8tLLZ8Uu3o7pqfGjmeHeao3X4jtVbLej0hBJKgAAAAAAAAAAAAAAAAAAKbjulqccuZ5txHzVzdPWO3TsyaDqunUq5JqWq7Pda69R1fBbkVYSI+EzCNxkZXG5pOpGcW1b1pklLBSpOkaEk27Fq/Ny43vbZvGRm3KWHk2lePVmsxkosGDoKmmlJy2NtpLPst6CA4/P+nTHzbuD1lnlsZzFvpVG7elrRhOKSjayVluvfsPQKb1rKPxR9Ud+KM+jxRpTdWM52tGGqrZZZ93eRXF71ucPNMTDNYiebrDq6P6Wnxo53AdMTRvDNf7dWy3o9KQKSqoAAAAAAAAAAAAAAAAAAKdjulqccuZ5rxDzVzdPWO3Ts1p3WcdqTt2M2uFY+rDXOT0q1WYizFynP1aUtPwfnxcWttrs7WUU5mktL0mmr2T6motvO/aVilTNysNiadSajHO7yS1Vn6ysxBmsGjMV5XioYZRld6+Im9ZpLqjHYmamMxEYa1NyWW1Rz1crqxjbvu7tva32nEYvGXMTXzVpW3bi3GUPRqMj3BRtm2nuv7zNRyTH4p6rKufPpDzIxVZZ9F0adWbA9LT448zYwXmKN4Y7/AG6tlwR6YgUlQAAAAAAAAAAAAAAAAAAFfxehqkpzlFxalJvNtPP0HH43geIuXqq6MspnNJ2sZRTRETDD8iVvuet/A1Y+z+L+X1ZPfbfzaOJ8D5Tu04xb2tNteqxP4WjHW6YpuRE5eubTuV2ZnOM2hjvAKrOKUJUb9d3Je5knTTVMdYYJqhh0f4AYinJOU6DSd7Jzb9kV01ZdIUiYWWehKjbcY0o90W17jnuIYDHYqcsoimPm3bN+1bj1zefkSr2w/ufwI7+n8Z8vqz+/W/mfIlXth/c/gP6fxny+p79b+Z8iVfuf3P4D+n8Z8vqe/W/mfIlb7n9z+A/p/F/L6nv1v5s2E0PUjOMpOKUWnk227dRsYTgOIovU1V5RETmx3cZTVTMQ76OyRiQAAAAAAAAAAAAAAAAAAA8lBJUQFCIIGUXAWoZUQFACSqqSkqvQAAAAAAAAAB//2Q==" alt="Ambientador" />
                <h5>Ambientador</h5>
                <p>Aromas frescos para tu hogar.</p>
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

export default HogarYLimpieza;
