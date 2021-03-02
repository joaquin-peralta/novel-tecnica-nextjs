/* eslint-disable import/no-unresolved */
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as FaIcons from 'react-icons/fa';
import FeatureCard from '@components/Card/FeatureCard';
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
                    src="https://res.cloudinary.com/dcjnbvln1/image/upload/v1614688643/novel-tecnica/A1_001_rp0ggj.jpg"
                    alt="Generador de ozono Serie A1"
                    width={4000}
                    height={3000}
                    quality="30"
                  />
                  <Carousel.Caption>
                    <p style={{ color: '#222' }}>Serie A1</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="https://res.cloudinary.com/dcjnbvln1/image/upload/v1614688644/novel-tecnica/A1_002_yrwzdl.jpg"
                    alt="Generador de ozono Serie A1"
                    width={4000}
                    height={3000}
                    quality="30"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="https://res.cloudinary.com/dcjnbvln1/image/upload/v1614719342/novel-tecnica/A1_003_cwpsae.jpg"
                    alt="Generador de ozono Serie A1"
                    width={4000}
                    height={3000}
                    quality="30"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="https://res.cloudinary.com/dcjnbvln1/image/upload/v1614688644/novel-tecnica/A2_001_v503vy.jpg"
                    alt="Generador de ozono Serie A2"
                    width={4000}
                    height={3000}
                    quality="30"
                  />
                  <Carousel.Caption>
                    <p style={{ color: '#222' }}>Serie A2</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="https://res.cloudinary.com/dcjnbvln1/image/upload/v1614688644/novel-tecnica/A2_002_kcjj9e.jpg"
                    alt="Generador de ozono Serie A2"
                    width={4000}
                    height={3000}
                    quality="30"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="https://res.cloudinary.com/dcjnbvln1/image/upload/v1614688644/novel-tecnica/A2_003_jrx34r.jpg"
                    alt="Generador de ozono Serie A2"
                    width={4000}
                    height={3000}
                    quality="30"
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
                    src="https://res.cloudinary.com/dcjnbvln1/image/upload/v1614719046/novel-tecnica/HF2_001_jmtiqp.jpg"
                    alt="Generador de ozono industrial Serie HF2"
                    width={1500}
                    height={1526}
                    quality="30"
                  />
                  <Carousel.Caption>
                    <p style={{ color: '#222' }}>Serie HF2</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="https://res.cloudinary.com/dcjnbvln1/image/upload/v1614719047/novel-tecnica/HF2_002_hyfhnr.jpg"
                    alt="Interior del generador de ozono Serie HF2"
                    width={1800}
                    height={1510}
                    quality="30"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="https://res.cloudinary.com/dcjnbvln1/image/upload/v1614719048/novel-tecnica/HF4_001_jlmqu3.jpg"
                    alt="Generador de ozono Serie HF4"
                    width={1500}
                    height={1597}
                    quality="30"
                  />
                  <Carousel.Caption>
                    <p style={{ color: '#222' }}>Serie HF4</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="https://res.cloudinary.com/dcjnbvln1/image/upload/v1614719048/novel-tecnica/HF4_002_ulj3ih.jpg"
                    alt="Generador de ozono Serie HF4"
                    width={1500}
                    height={2101}
                    quality="30"
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
      <h2 className="heading-h2">Concentrador de oxígeno por PSA</h2>
      <hr className="hr-orange mt-2 mb-5" />
      <Container className="mb-5">
        <Row className="align-items-start">
          <Col lg>
            <p>
              Diseñado para alimentar los generadores de ozono en aquellas
              aplicaciones en las que se requiera el uso de oxígeno. Con
              tecnología de absorción por presión de aire, permiten separar el
              oxígeno del aire para usarlo en la alimentación del generador de
              ozono u otras aplicaciones que puedan requerir el uso de oxígeno.
            </p>
            <FeatureCard color="orange">
              <h4 className="heading-h4 mb-2">Características:</h4>
              <ul>
                <li>Simple de operar.</li>
                <li>Controles intuitivos.</li>
                <li>Altamente confiables.</li>
              </ul>
            </FeatureCard>
          </Col>
          <Col md>
            <div className="d-block w-100">
              <Carousel>
                <Carousel.Item>
                  <Image
                    src="https://res.cloudinary.com/dcjnbvln1/image/upload/v1614720781/novel-tecnica/OC2_001_sgu254.jpg"
                    alt="Concentrador de oxígeno por PSA"
                    width={1013}
                    height={1597}
                    quality="30"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src="https://res.cloudinary.com/dcjnbvln1/image/upload/v1614720782/novel-tecnica/OC2_002_ybodxi.jpg"
                    alt="Concentrador de oxígeno por PSA"
                    width={898}
                    height={1597}
                    quality="30"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <Link href="/contact">
              <a className="btn btn-orange w-100 my-3">
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
      <h2 className="heading-h2">Equipos auxiliares</h2>
      <hr className="hr-yellow mt-2 mb-5" />
      <Container className="mb-5">
        <Row className="align-items-start">
          <Col lg>
            <h3 className="heading-h3--yellow-border my-2">
              Temporizador programable
            </h3>
            <p>
              Permite programar para cada día de la semana dos franjas horarias
              de trabajo con sus correspondientes porcentajes de generación de
              ozono. De este modo se puede automatizar el control del generador
              de ozono diferenciando las condiciones para diferentes días. Ideal
              para control de cámaras y desinfección de ambientes.
            </p>
            <FeatureCard color="yellow">
              <h4 className="heading-h4 mb-2">Características:</h4>
              <ul>
                <li>Programación simple.</li>
                <li>Permite el control de varios equipos a la vez.</li>
                <li>
                  Sistema de copiado de días para simplificar la programación.
                </li>
                <li>Alta precisión en el tiempo de control.</li>
                <li>Control lineal de la generación de ozono.</li>
              </ul>
            </FeatureCard>
          </Col>
          <Col md>
            <div className="d-block w-100">
              <Image
                src="https://res.cloudinary.com/dcjnbvln1/image/upload/v1614719048/novel-tecnica/Timer_canzvl.jpg"
                alt="Temporizador programable"
                width={912}
                height={912}
                quality="30"
              />
            </div>
            <Link href="/contact">
              <a className="btn btn-yellow w-100 my-3">
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
      <Container className="mb-5">
        <Row className="align-items-start">
          <Col lg>
            <h3 className="heading-h3--yellow-border my-2">
              Sistemas de contacto gas-líquido para disolución de ozono en agua
            </h3>
            <p>
              Diseñado para aquellas aplicaciones que requieran disolver el
              ozono en agua en altas concentraciones. Construido en acero
              inoxidable y PVC, se logra durabilidad y confiablidad. Incluye
              inyector venturi en kynar, especialmente diseñado para disolución
              de ozono en agua.
            </p>
            <FeatureCard color="yellow">
              <h4 className="heading-h4 mb-2">Características:</h4>
              <ul>
                <li>Inyector venturi con válvula de retención.</li>
                <li>
                  Desgasificador superior con válvula de aire para eliminar el
                  gas residual que no se disuelve en el agua.
                </li>
                <li>Bomba centrífuga en acero inoxidable.</li>
                <li>Dimensionamiento y diseño acordes a cada proyecto.</li>
              </ul>
            </FeatureCard>
          </Col>
          <Col md>
            <div className="d-block w-100">
              <Image
                src="https://res.cloudinary.com/dcjnbvln1/image/upload/v1614720781/novel-tecnica/columna-disolucion-ozono_wfovhw.jpg"
                alt="Sistemas de contacto gas-líquido para disolución de ozono en agua"
                width={710}
                height={1597}
              />
            </div>
            <Link href="/contact">
              <a className="btn btn-yellow w-100 my-3">
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
    </Container>
  </div>
);

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Equipment;
