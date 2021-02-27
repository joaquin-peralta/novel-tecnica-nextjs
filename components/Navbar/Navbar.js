import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Image from 'next/image';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SidebarData from './SidebarData';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    return setSidebar(!sidebar);
  };
  return (
    <div>
      <div className="Navbar">
        <Container fluid>
          <Row className="justify-content-center align-items-center">
            <Col>
              <button type="button" className="Navbar__menu-btn">
                <FaIcons.FaBars onClick={showSidebar} />
              </button>
              <div className="Navbar__desktop-logo">
                <Image
                  src="/logo.png"
                  width={100}
                  height={70}
                  alt="Novel Técnica logo"
                />
              </div>
            </Col>
            <div className="Navbar__mobile-logo">
              <Col>
                <Image
                  src="/logo.png"
                  width={100}
                  height={70}
                  alt="Novel Técnica logo"
                />
              </Col>
            </div>
            <Col>
              <div className="Navbar__desktop-menu">
                <nav>
                  <ul>
                    <Link href="/">
                      <a>
                        <li className="Navbar__desktop-link">Inicio</li>
                      </a>
                    </Link>
                    <Link href="/about">
                      <a>
                        <li className="Navbar__desktop-link">Quiénes somos</li>
                      </a>
                    </Link>
                    <Link href="/equipment">
                      <a>
                        <li className="Navbar__desktop-link">Equipos</li>
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a>
                        <li className="Navbar__desktop-link">Contacto</li>
                      </a>
                    </Link>
                  </ul>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <nav className={sidebar ? 'Navbar__menu active' : 'Navbar__menu'}>
        <ul className="Navbar__menu-items list-unstyled">
          <li className="Navbar__toggle">
            <button
              type="button"
              className="Navbar__close-btn"
              onClick={showSidebar}
            >
              <AiIcons.AiOutlineClose />
            </button>
          </li>
          {SidebarData.map((item) => {
            return (
              <li key={item.id} className={item.cName}>
                <Link href={item.path} onClick={showSidebar}>
                  <a className="text-reset text-decoration-none">
                    <span>{item.title}</span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
