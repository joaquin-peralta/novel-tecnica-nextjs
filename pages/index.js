/* eslint-disable import/no-unresolved */
import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IconContext } from 'react-icons/lib';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';
import CardInfo from '@components/Card/CardInfo';
import Card from '@components/Card/Card';
import SquareCard from '@components/Card/SquareCard';

const Home = () => {
  return (
    <div className="Home">
      <div className="Home__hero-image">
        <div className="Home__hero-content">
          <h1>Novel Técnica</h1>
          <p className="mb-5">Innovación y desarrollo en ozono</p>
          <Link href="/equipment">
            <a className="btn btn-custom text-uppercase font-weight-bold">
              Nuestros equipos
            </a>
          </Link>
        </div>
      </div>
      <section className="Home-about">
        <Container fluid>
          <h2 className="heading-h2 mt-3">Quiénes somos</h2>
          <hr className="mt-2 mb-3" />
          <div className="Home-about__description mb-5">
            <Container fluid>
              <Row>
                <Col sm>
                  <p>
                    Somos una empresa dedicada al desarrollo de equipos para
                    generación de ozono y de sus aplicaciones, formada por
                    profesionales de la ingeniería química, electrónica e
                    industrial con más de 15 años de experiencia en ozono y sus
                    tecnologías asociadas.
                  </p>
                  <div className="img-fluid">
                    <Image
                      src="/logo.png"
                      alt="Novel Técnica logo"
                      width={1413}
                      height={972}
                    />
                  </div>
                </Col>
                <Col sm>
                  <p className="font-weight-bold mb-1">Misión de la empresa:</p>
                  <p>
                    Ofrecer soluciones confiables, ecológicas y eficientes a los
                    problemas de desinfección tanto de la industria como del
                    entorno cotidiano de las personas mediante tecnología de
                    avanzada, aportando también la ingeniería asociada a cada
                    proyecto.
                  </p>
                  <p className="font-weight-bold mb-1">Visión de la empresa:</p>
                  <p>
                    Novel Técnica, una empresa de ingeniería líder en
                    equipamiento y tecnología de avanzada para desinfección
                    ecológica mediante ozono y tecnologías asociadas.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="mb-5">
            <IconContext.Provider value={{ color: '#23BFC4' }}>
              <Container>
                <Row className="justify-content-center">
                  <div className="mb-3">
                    <Col sm={12} md={6}>
                      <Card>
                        <ul className="list-unstyled text-center">
                          <li className="Card__icon">
                            {CardInfo.features.one.icon}
                          </li>
                          <hr className="mx-5" />
                          <li className="text-uppercase font-weight-bold">
                            {CardInfo.features.one.title}
                          </li>
                          <li className="py-3">
                            {CardInfo.features.one.description}
                          </li>
                        </ul>
                      </Card>
                    </Col>
                  </div>
                  <div className="mb-3">
                    <Col sm={12} md={6}>
                      <Card>
                        <ul className="list-unstyled text-center">
                          <li className="Card__icon">
                            {CardInfo.features.two.icon}
                          </li>
                          <hr className="mx-5" />
                          <li className="text-uppercase font-weight-bold">
                            {CardInfo.features.two.title}
                          </li>
                          <li className="py-3">
                            {CardInfo.features.two.description}
                          </li>
                        </ul>
                      </Card>
                    </Col>
                  </div>
                  <div className="mb-2">
                    <Col sm={12} md={6}>
                      <Card>
                        <ul className="list-unstyled text-center">
                          <li className="Card__icon">
                            {CardInfo.features.three.icon}
                          </li>
                          <hr className="mx-5" />
                          <li className="text-uppercase font-weight-bold">
                            {CardInfo.features.three.title}
                          </li>
                          <li className="py-3">
                            {CardInfo.features.three.description}
                          </li>
                        </ul>
                      </Card>
                    </Col>
                  </div>
                  <div className="mb-3">
                    <Col sm={12} md={6}>
                      <Card>
                        <ul className="list-unstyled text-center">
                          <li className="Card__icon">
                            {CardInfo.features.four.icon}
                          </li>
                          <hr className="mx-5" />
                          <li className="text-uppercase font-weight-bold">
                            {CardInfo.features.four.title}
                          </li>
                          <li className="py-3">
                            {CardInfo.features.four.description}
                          </li>
                        </ul>
                      </Card>
                    </Col>
                  </div>
                </Row>
              </Container>
            </IconContext.Provider>
          </div>
        </Container>
      </section>
      <section className="Home-equipment mb-5">
        <Container fluid>
          <h2 className="heading-h2 mt-3">Equipos</h2>
          <hr className="mt-2 mb-3" />
        </Container>
        <Container>
          <IconContext.Provider value={{ size: '2.4rem' }}>
            <div className="text-center">
              <Row>
                <div className="mb-3">
                  <Col sm>
                    <Link href="/equipment">
                      <a className="text-reset text-decoration-none">
                        <SquareCard color="blue">
                          <RiIcons.RiHome7Line
                            style={{ color: '#23BFC4' }}
                            className="mb-2"
                          />
                          <h3 className="heading-h3">
                            Generadores de ozono domésticos y comerciales
                          </h3>
                        </SquareCard>
                      </a>
                    </Link>
                  </Col>
                </div>
                <div className="mb-3">
                  <Col sm>
                    <Link href="/equipment">
                      <a className="text-reset text-decoration-none">
                        <SquareCard color="green">
                          <GiIcons.GiFactory
                            style={{ color: '#A6D793' }}
                            className="mb-2"
                          />
                          <h3 className="heading-h3">
                            Generadores de ozono industriales
                          </h3>
                        </SquareCard>
                      </a>
                    </Link>
                  </Col>
                </div>
                <div className="mb-3">
                  <Col sm>
                    <Link href="/equipment">
                      <a
                        to="/equipment"
                        className="text-reset text-decoration-none"
                      >
                        <SquareCard color="red">
                          <GiIcons.GiGears
                            style={{ color: '#FFa500' }}
                            className="mb-2"
                          />
                          <h3 className="heading-h3">
                            Componentes complementarios para las instalaciones
                          </h3>
                        </SquareCard>
                      </a>
                    </Link>
                  </Col>
                </div>
              </Row>
            </div>
          </IconContext.Provider>
        </Container>
      </section>
      <section className="Home-contact">
        <div className="Home-contact__hero">
          <div className="Home-contact__hero-content">
            <p className="font-italic">Para más información y asesoramiento</p>
            <hr className="mb-4" />
            <Link href="/contact">
              <a className="btn btn-custom text-uppercase font-weight-bold">
                Contactanos
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
