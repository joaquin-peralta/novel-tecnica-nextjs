/* eslint-disable import/no-unresolved */
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IconContext } from 'react-icons/lib';
import * as FaIcons from 'react-icons/fa';
import FeatureCard from '@components/Card/FeatureCard';
import CardInfo from '@components/Card/CardInfo';
import Card from '@components/Card/Card';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

const Equipment = () => (
  <div className="Equipment">
    <Container fluid>
      <h2 className="heading-h2">
        Generadores de ozono domésticos y comerciales
      </h2>
      <hr className="hr-lightblue mt-2 mb-5" />
      <Container className="mb-5">
        <Row className="align-items-start">
          <Col lg>
            <h3 className="heading-h3--blue-border mb-2">Serie A</h3>
            <p>
              Diseñados para ambientes reducidos con alta concurrencia de
              personas como oficinas, comercios, consultorios, salas de espera y
              por qué no, en ambientes de nuestra propia casa. Mejoran la
              calidad del aire controlando bacterias, virus, ácaros, alérgenos y
              olores.
            </p>
            <FeatureCard color="blue">
              <h4 className="heading-h4 mb-2">Características:</h4>
              <ul>
                <li>
                  Dos modos de uso, para ambientes reducidos y de mayores
                  dimensiones.
                </li>
                <li>Fácil de usar, controles intuitivos.</li>
                <li>
                  Ventilador incorporado para recircular el aire del ambiente y
                  mejorar la distribución del ozono en el ambiente.
                </li>
                <li>
                  Fabricación 100% nacional, lo que permite garantizar el mejor
                  servicio y asistencia post venta.
                </li>
                <li>Asesoramiento profesional a nuestros clientes.</li>
              </ul>
              <ul className="list-unstyled">
                <li>
                  <span className="font-weight-bold mr-2">Modelo A-1</span>
                  capacidad máxima hasta ambientes de 180 m3.
                </li>
                <li>
                  <span className="font-weight-bold mr-1">Modelo A-2</span>
                  capacidad máxima hasta ambientes de 350 m3.
                </li>
              </ul>
            </FeatureCard>
          </Col>
          <Col md>
            <div className="d-block w-100">
              <Carousel>
                <Carousel.Item>
                  <Image
                    src="/A1_001.jpg"
                    alt="Generador de ozono Serie A"
                    width={4000}
                    height={3000}
                    priority
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="/A1_002.jpg"
                    alt="Generador de ozono Serie A"
                    width={4000}
                    height={3000}
                    priority
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="/A1_003.jpg"
                    alt="Generador de ozono Serie A"
                    width={4000}
                    height={3000}
                    priority
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="/A2_001.jpg"
                    alt="Generador de ozono Serie A"
                    width={4000}
                    height={3000}
                    priority
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="/A2_002.jpg"
                    alt="Generador de ozono Serie A"
                    width={4000}
                    height={3000}
                    priority
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="/A2_003.jpg"
                    alt="Generador de ozono Serie A"
                    width={4000}
                    height={3000}
                    priority
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <Link href="/contact">
              <a className="btn btn-primary w-100 my-3">
                <FaIcons.FaWhatsapp
                  className="mr-1"
                  style={{ fontSize: '1.4rem' }}
                />
                Comprar
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
      <h2 className="heading-h2">Generadores de ozono industriales</h2>
      <hr className="hr-lightgreen mt-2 mb-5" />
      <Container className="mb-5">
        <Row className="align-items-start">
          <Col lg>
            <h3 className="heading-h3--green-border my-2">Serie HF</h3>
            <p>
              La línea HF de generadores de ozono Novel Técnica ofrece una serie
              de equipos diseñados para uso industrial en servicio continuo. Se
              caracterizan por su robustez y confiabilidad, pensados para
              soportar las condiciones de trabajo más exigentes. La línea cubre
              un rango de capacidades de generación de ozono que lo hacen apto
              para la mayoría de las necesidades de la industria.
            </p>
            <FeatureCard color="green">
              <h4 className="heading-h4 mb-2">Características:</h4>
              <ul>
                <li>
                  Alta concentración de ozono lo que facilita su utilización.
                </li>
                <li>
                  Sistema de control de la generación de ozono lineal con
                  programación de rango de regulación para mayor precisión.
                </li>
                <li>
                  Tecnología microcontrolada lo que permite adaptar mejor los
                  equipos a las diferentes aplicaciones.
                </li>
                <li>
                  Protección interna por sobrecarga y temperatura para mayor
                  durabilidad.
                </li>
                <li>
                  Sistema de montaje interno de simple ensamble lo que
                  simplifica el mantenimiento y brinda mayor seguridad.
                </li>
              </ul>
              <ul className="list-unstyled">
                <li className="font-weight-bold">Modelo HF-1</li>
                <li className="font-weight-bold">Modelo HF-2</li>
                <li className="font-weight-bold">Modelo HF-3</li>
                <li className="font-weight-bold">Modelo HF-4</li>
              </ul>
            </FeatureCard>
          </Col>
          <Col md>
            <div className="d-block w-100">
              <Carousel>
                <Carousel.Item>
                  <Image
                    src="/A1_001.jpg"
                    alt="Generador de ozono Serie A"
                    width={4000}
                    height={3000}
                    priority
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="/A1_002.jpg"
                    alt="Generador de ozono Serie A"
                    width={4000}
                    height={3000}
                    priority
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="/A1_003.jpg"
                    alt="Generador de ozono Serie A"
                    width={4000}
                    height={3000}
                    priority
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="/A2_001.jpg"
                    alt="Generador de ozono Serie A"
                    width={4000}
                    height={3000}
                    priority
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="/A2_002.jpg"
                    alt="Generador de ozono Serie A"
                    width={4000}
                    height={3000}
                    priority
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="/A2_003.jpg"
                    alt="Generador de ozono Serie A"
                    width={4000}
                    height={3000}
                    priority
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <Link href="/contact">
              <a className="btn btn-secondary w-100 my-3">
                <FaIcons.FaWhatsapp
                  className="mr-1"
                  style={{ fontSize: '1.4rem' }}
                />
                Comprar
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
      <IconContext.Provider value={{ size: '25px' }}>
        <Container fluid>
          <h2 className="heading-h2">
            Componentes complementarios para las instalaciones
          </h2>
          <hr className="hr-orange mt-2 mb-5" />
        </Container>
        <Container>
          <Row>
            <Col lg className="mb-3">
              <Card>
                <h3 className="heading-h3--orange-border mb-2">
                  {CardInfo.complementaryComps.one.icon}
                  {CardInfo.complementaryComps.one.title}
                </h3>
                <p>{CardInfo.complementaryComps.one.description}</p>
                <ul>
                  <li>Programación simple.</li>
                  <li>Permite el control de varios equipos a la vez.</li>
                  <li>
                    Sistema de copiado de días para simplificar la programación.
                  </li>
                  <li>Alta precisión en el tiempo de control.</li>
                  <li>Control lineal de la generación de ozono.</li>
                </ul>
              </Card>
            </Col>
            <Col lg className="mb-3">
              <Card>
                <h3 className="heading-h3--orange-border mb-2">
                  {CardInfo.complementaryComps.two.icon}
                  {CardInfo.complementaryComps.two.title}
                </h3>
                <p>{CardInfo.complementaryComps.two.description}</p>
                <ul>
                  <li>Simple de operar.</li>
                  <li>Controles intuitivos.</li>
                  <li>Altamente confiables.</li>
                </ul>
              </Card>
            </Col>
            <Col lg className="mb-3">
              <Card>
                <h3 className="heading-h3--orange-border mb-2">
                  {CardInfo.complementaryComps.three.icon}
                  {CardInfo.complementaryComps.three.title}
                </h3>
                <p>{CardInfo.complementaryComps.three.description}</p>
                <ul>
                  <li>Inyector venturi con válvula de retención.</li>
                  <li>
                    Desgasificador superior con válvula de aire para eliminar el
                    gas residual que no se disuelve en el agua.
                  </li>
                  <li>Bomba centrífuga en acero inoxidable.</li>
                  <li>Dimensionamiento y diseño acordes a cada proyecto.</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </Container>
      </IconContext.Provider>
    </Container>
  </div>
);

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Equipment;
