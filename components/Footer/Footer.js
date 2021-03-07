import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Image from 'next/image';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Footer() {
  return (
    <footer>
      <IconContext.Provider value={{ size: '2.2rem', color: '#DDD' }}>
        <div className="Footer">
          <Container fluid>
            <Row xs={1} md={2} className="align-items-center">
              <Container>
                <Row xs={2} className="align-items-center">
                  <Col xs={8} lg={6}>
                    <div className="img-fluid">
                      <Image
                        src="/logo2.png"
                        alt="Novel Técnica logo"
                        width={1413}
                        height={972}
                      />
                    </div>
                  </Col>
                  <Col xs={4} lg={6}>
                    <div className="Footer__social text-center">
                      <a
                        className="d-inline-block p-2"
                        href="https://www.facebook.com/Novel-T%C3%A9cnica-310807452905315"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaIcons.FaFacebook />
                      </a>
                      <a
                        className="d-inline-block p-2"
                        href="https://www.instagram.com/novel.tecnica/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaIcons.FaInstagram />
                      </a>
                    </div>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row xs={1} lg={2}>
                  <Col>
                    <div className="mb-4">
                      <aside>
                        <h4 className="Footer__subheader mb-3">
                          Nuestras oficinas
                        </h4>
                        <ul className="Footer__list">
                          <li>
                            <span className="ml-0 font-weight-bold">
                              Dirección:{' '}
                            </span>
                            <span className="ml-0">
                              Belgrano 2246 - CP 3080 Esperanza - Santa Fe
                            </span>
                          </li>
                          <li>
                            <span className="ml-0 font-weight-bold">
                              Horario de atención:{' '}
                            </span>
                            <span className="ml-0">
                              Lunes a Viernes de 08:00 a 12:00 y 14:00 a 18:00
                              hs
                            </span>
                          </li>
                          <li>
                            <span className="ml-0 font-weight-bold">
                              Teléfono / Whatsapp:{' '}
                            </span>
                            <span className="ml-0">(+54) 3496-548841</span>
                          </li>
                          <li>
                            <span className="ml-0 font-weight-bold">
                              Email:{' '}
                            </span>
                            <span className="ml-0">pablolbonvin@gmail.com</span>
                          </li>
                        </ul>
                      </aside>
                    </div>
                  </Col>
                  <Col>
                    <nav className="Footer__navigation">
                      <h4 className="Footer__subheader mb-3">Secciones</h4>
                      <ul className="Footer__navigation-list">
                        <Link href="/">
                          <a className="Footer__navigation-link">
                            <li>Inicio</li>
                          </a>
                        </Link>
                        <Link href="/about">
                          <a className="Footer__navigation-link">
                            <li>Quiénes somos</li>
                          </a>
                        </Link>
                        <Link href="/equipment">
                          <a className="Footer__navigation-link">
                            <li>Equipos</li>
                          </a>
                        </Link>
                        <Link href="/contact">
                          <a className="Footer__navigation-link">
                            <li>Contacto</li>
                          </a>
                        </Link>
                      </ul>
                    </nav>
                  </Col>
                </Row>
              </Container>
            </Row>
          </Container>
        </div>
      </IconContext.Provider>
    </footer>
  );
}

export default Footer;
