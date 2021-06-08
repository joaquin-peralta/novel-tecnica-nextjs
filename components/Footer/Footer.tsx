import styles from '@styles/components/Footer.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container fluid>
        <Row className="align-items-center">
          <Col>
            <div className={styles.imgContainer}>
              <Image src="/logo2.png" alt="Novel Técnica logo" layout="fill" objectFit="contain" />
            </div>
          </Col>
          <Col>
            <IconContext.Provider value={{ size: '36px', color: '#d4d4d4' }}>
              <nav className="text-center">
                <a
                  className="d-inline-block p-2"
                  href="https://www.facebook.com/Novel-T%C3%A9cnica-310807452905315"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  className="d-inline-block p-2"
                  href="https://www.instagram.com/novel.tecnica/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </nav>
            </IconContext.Provider>
          </Col>
        </Row>
        <Row xs={1} sm={2}>
          <Col>
            <p className="h5 font-weight-bold text-uppercase">Secciones</p>
            <nav>
              <ul className={styles.navList}>
                <Link href="/">
                  <a>
                    <li>Inicio</li>
                  </a>
                </Link>
                <Link href="/about">
                  <a>
                    <li>Quiénes somos</li>
                  </a>
                </Link>
                <Link href="/equipment">
                  <a>
                    <li>Equipos</li>
                  </a>
                </Link>
                <Link href="/contact">
                  <a>
                    <li>Contacto</li>
                  </a>
                </Link>
              </ul>
            </nav>
          </Col>
          <Col>
            <aside>
              <p className="h5 font-weight-bold text-uppercase">Nuestras oficinas</p>
              <ul className={styles.infoList}>
                <li>
                  <span>Dirección: </span>
                  Belgrano 2246 - CP 3080 Esperanza - Santa Fe
                </li>
                <li>
                  <span>Horario de atención: </span>
                  Lunes a Viernes de 08:00 a 12:00 y 14:00 a 18:00 hs
                </li>
                <li>
                  <span>Teléfono / Whatsapp: </span>
                  (+54) 3496-548841
                </li>
                <li>
                  <span>Email: </span>
                  pablolbonvin@gmail.com
                </li>
              </ul>
            </aside>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
