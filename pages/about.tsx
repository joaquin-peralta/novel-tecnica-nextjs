import styles from '@styles/pages/About.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

function About() {
  return (
    <>
      <Head>
        <title>Quiénes somos | Novel Técnica</title>
      </Head>

      <section>
        <Container>
          <Row xs={1} md={2} className="align-items-center">
            <Col>
              <h2>
                <span className={styles.colorBlue}>Novel </span>
                <span className={styles.colorGreen}>Técnica</span>
              </h2>
              <hr className="mt-1 mb-2" />
              <p>
                Somos una empresa dedicada al desarrollo de equipos para generación de ozono y sus
                aplicaciones, formada por profesionales de la ingeniería química, electrónica e
                industrial con más de 15 años de experiencia en ozono y sus tecnologías asociadas.
              </p>
            </Col>
            <Col>
              <Image
                src="https://res.cloudinary.com/dcjnbvln1/image/upload/v1614688646/novel-tecnica/molecule_ewu6q1.png"
                alt="Molécula"
                width={5000}
                height={3868}
                layout="intrinsic"
              />
            </Col>
          </Row>
          <Row lg={2}>
            <div className="mb-2">
              <Col>
                <Alert variant="info">
                  <p className="font-weight-bold">Misión de la empresa: </p>
                  <p>
                    Ofrecer soluciones confiables, ecológicas y eficientes a los problemas de
                    desinfección tanto de la industria como del entorno cotidiano de las personas
                    mediante tecnología de avanzada, aportando también la ingeniería asociada a cada
                    proyecto.
                  </p>
                </Alert>
              </Col>
            </div>
            <div className="mb-4">
              <Col>
                <Alert variant="info">
                  <p className="font-weight-bold">Visión de la empresa: </p>
                  <p>
                    Novel Técnica, una empresa de ingeniería líder en equipamiento y tecnología de
                    avanzada para desinfección ecológica mediante ozono y tecnologías asociadas.
                  </p>
                </Alert>
              </Col>
            </div>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <h3>Algunas de las aplicaciones más comunes del ozono</h3>
          <ul>
            <li>Potabilización microbiológica de agua.</li>
            <li>Desinfección del agua y envases en plantas embotelladoras de agua.</li>
            <li>
              Desinfección de instalaciones en industria alimenticia, tanto en sistemas CIP como
              manuales.
            </li>
            <li>Control de hongos en cámaras de maduración de quesos.</li>
            <li>Lavado de vegetales procesados.</li>
            <li>Envasado de panificados en atmósfera controlada.</li>
            <li>
              Desinfección de carnes de todo tipo (vacuna, pescado, pollo, etc.) en frigoríficos.
            </li>
            <li>Calidad de agua en acuicultura e hidroponia.</li>
            <li>Desinfección en bodegas.</li>
            <li>Desinfección de barricas de roble.</li>
            <li>Áreas blancas en Laboratorios.</li>
            <li>Tratamientos de aguas industriales.</li>
            <li>Tratamientos de aguas residuales.</li>
            <li>Control de olores.</li>
            <li>Desinfección de ropa de cama en lavanderías industriales y hospitalarias.</li>
            <li>Tratamiento de aguas para piscinas y spas.</li>
            <li>Control microbiológico y de olores en granjas.</li>
            <li>Control microbiológico del aire en salas de elaboración de alimentos.</li>
            <li>Tratamiento de aire acondicionado y cámaras frigoríficas.</li>
            <li>Desinfección de agua en torres de enfriamiento.</li>
            <li>Desinfección en plantas de empaque de alimentos.</li>
            <li>Calidad de agua en centros de diálisis.</li>
          </ul>
        </Container>
      </section>
    </>
  );
}

export default About;
