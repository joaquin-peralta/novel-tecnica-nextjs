import styles from '@styles/pages/Home.module.scss';
import Head from 'next/head';
import Hero from '@components/Hero';
import Link from 'next/link';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InfoCard from '@components/Card/InfoCard';
import InfoCardData from '@components/Card/InfoCardData';
import LinkCard from '@components/Card/LinkCard';
import { RiHome7Line } from 'react-icons/ri';
import { GiFactory, GiMolecule, GiGears } from 'react-icons/gi';

function Home() {
  return (
    <>
      <Head>
        <title>Generadores de Ozono | Novel Técnica</title>
      </Head>

      <Hero imageUrl="/hero3.png">
        <h1 className={styles.title}>Novel Técnica</h1>
        <p className={styles.slogan}>Innovación y desarrollo en ozono</p>
        <Button variant="outline-secondary" className={styles.heroButton}>
          Nuestros equipos
        </Button>
      </Hero>
      <main>
        <Container fluid>
          <h2>Quiénes somos</h2>
          <Row>
            <Col>
              <p>
                Somos una empresa dedicada al desarrollo de equipos para generación de ozono y sus
                aplicaciones, formada por profesionales de la ingeniería química, electrónica e
                industrial con más de 15 años de experiencia en ozono y sus tecnologías asociadas.
              </p>
            </Col>
          </Row>
          <Row xs={1} md={2}>
            <Col>
              <p className="font-weight-bold mb-0">Misión de la empresa:</p>
              <p>
                Ofrecer soluciones confiables, ecológicas y eficientes a los problemas de
                desinfección tanto de la industria como del entorno cotidiano de las personas
                mediante tecnología de avanzada, aportando también la ingeniería asociada a cada
                proyecto.
              </p>
            </Col>
            <Col>
              <p className="font-weight-bold mb-0">Visión de la empresa:</p>
              <p>
                Novel Técnica, una empresa de ingeniería líder en equipamiento y tecnología de
                avanzada para desinfección ecológica mediante ozono y tecnologías asociadas.
              </p>
            </Col>
          </Row>
        </Container>
      </main>

      <section>
        <Container>
          <Row xs={1} sm={2} lg={4}>
            {InfoCardData.map((item) => (
              <Col key={item.title}>
                <InfoCard className="mb-3" icon={item.icon} iconColor="#23BFC4">
                  <p className="text-uppercase font-weight-bold">{item.title}</p>
                  <p>{item.description}</p>
                </InfoCard>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container fluid>
          <h2>Equipos</h2>
        </Container>
        <Container>
          <Row xs={1} md={2}>
            <Col className="mb-3">
              <Link href="/equipment" passHref>
                <LinkCard icon={<RiHome7Line />} iconColor="#23BFC4">
                  Generadores de ozono domésticos y comerciales
                </LinkCard>
              </Link>
            </Col>
            <Col className="mb-3">
              <Link href="/equipment" passHref>
                <LinkCard icon={<GiFactory />} iconColor="#A6D793">
                  Generadores de ozono industriales
                </LinkCard>
              </Link>
            </Col>
            <Col className="mb-3">
              <Link href="/equipment" passHref>
                <LinkCard icon={<GiMolecule />} iconColor="#FFa500">
                  Concentrador de oxígeno por PSA
                </LinkCard>
              </Link>
            </Col>
            <Col className="mb-3">
              <Link href="/equipment" passHref>
                <LinkCard icon={<GiGears />} iconColor="#f1c13b">
                  Equipos auxiliares
                </LinkCard>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Hero imageUrl="/equipment-model-inside.jpeg" height={256}>
          <p className={`text-uppercase font-italic ${styles.slogan}`}>
            Para más información y asesoramiento
          </p>
          <hr className="mx-5" />
          <Button className={styles.heroButton} variant="secondary">
            Contactanos
          </Button>
        </Hero>
      </section>
    </>
  );
}

export default Home;
