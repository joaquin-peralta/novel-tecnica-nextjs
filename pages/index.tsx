import styles from '@styles/pages/Home.module.scss';
import { useRef, useEffect } from 'react';
import Head from 'next/head';
import Hero from '@components/Hero';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InfoCard from '@components/Card/InfoCard';
import InfoCardData from '@components/Card/InfoCardData';
import LinkCard from '@components/Card/LinkCard';
import { RiHome7Line } from 'react-icons/ri';
import { GiFactory, GiMolecule, GiGears } from 'react-icons/gi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const heroFirstRef = useRef<HTMLDivElement>(null);
  const heroFirstHeadingRef = useRef(null);
  const heroFirstSloganRef = useRef(null);
  const heroFirstButtonRef = useRef(null);

  const cardRefs = useRef(new Array());
  const btnRefs = useRef(new Array());

  const heroSecondRef = useRef<HTMLDivElement>(null);
  const heroSecondHeadingRef = useRef(null);
  const heroSecondDivisorRef = useRef(null);
  const heroSecondButtonRef = useRef(null);

  useEffect(() => {
    if (
      heroFirstRef.current &&
      heroFirstHeadingRef.current &&
      heroFirstSloganRef.current &&
      heroFirstButtonRef.current
    ) {
      const t1 = gsap.timeline({ defaults: { opacity: 0 } });
      t1.from(heroFirstRef.current, { autoAlpha: 0 })
        .from(heroFirstHeadingRef.current, { y: -10 }, '-=0.15')
        .from(heroFirstSloganRef.current, { x: -30 }, '-=0.15')
        .from(heroFirstButtonRef.current, { x: 30 }, '-=0.15');

      ScrollTrigger.create({
        animation: t1,
        trigger: heroFirstRef.current,
      });
    }

    if (cardRefs.current) {
      cardRefs.current.forEach((ref) => {
        gsap.from(ref, {
          scrollTrigger: {
            trigger: ref,
            start: 'center 97%',
          },
          y: 50,
          opacity: 0,
          autoAlpha: 0,
          duration: 0.7,
        });
      });
    }

    if (btnRefs.current) {
      btnRefs.current.forEach((ref) => {
        gsap.from(ref, {
          scrollTrigger: {
            trigger: ref,
            start: 'center 97%',
          },
          opacity: 0,
          autoAlpha: 0,
          duration: 1,
          scale: 0.8,
          ease: 'back',
          stagger: 0.2,
        });
      });
    }

    if (heroSecondRef.current) {
      gsap.from(heroSecondRef.current, {
        scrollTrigger: {
          trigger: heroSecondRef.current,
        },
        opacity: 0,
        autoAlpha: 0,
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Generadores de Ozono | Novel Técnica</title>
      </Head>

      <Hero ref={heroFirstRef} imageUrl="/hero.png">
        <h1 ref={heroFirstHeadingRef} className={styles.title}>
          Novel Técnica
        </h1>
        <p ref={heroFirstSloganRef} className={styles.slogan}>
          Innovación y desarrollo en ozono
        </p>
        <Link href="/equipment" passHref>
          <Button ref={heroFirstButtonRef} variant="secondary" className={styles.heroButton}>
            Nuestros equipos
          </Button>
        </Link>
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
            {InfoCardData.map((item, index) => (
              <Col key={item.title}>
                <InfoCard
                  ref={(element) => cardRefs.current.splice(index, 1, element)}
                  className="mb-3"
                  icon={item.icon}
                  iconColor="#23BFC4"
                >
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
                <LinkCard
                  ref={(element) => btnRefs.current.push(element)}
                  icon={<RiHome7Line />}
                  iconColor="#23BFC4"
                >
                  Generadores de ozono domésticos y comerciales
                </LinkCard>
              </Link>
            </Col>
            <Col className="mb-3">
              <Link href="/equipment" passHref>
                <LinkCard
                  ref={(element) => btnRefs.current.push(element)}
                  icon={<GiFactory />}
                  iconColor="#A6D793"
                >
                  Generadores de ozono industriales
                </LinkCard>
              </Link>
            </Col>
            <Col className="mb-3">
              <Link href="/equipment" passHref>
                <LinkCard
                  ref={(element) => btnRefs.current.push(element)}
                  icon={<GiMolecule />}
                  iconColor="#FFa500"
                >
                  Concentrador de oxígeno por PSA
                </LinkCard>
              </Link>
            </Col>
            <Col className="mb-3">
              <Link href="/equipment" passHref>
                <LinkCard
                  ref={(element) => btnRefs.current.push(element)}
                  icon={<GiGears />}
                  iconColor="#f1c13b"
                >
                  Equipos auxiliares
                </LinkCard>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-0">
        <Hero ref={heroSecondRef} imageUrl="/hero2.jpeg" height={256}>
          <p ref={heroSecondHeadingRef} className={`text-uppercase font-italic ${styles.slogan}`}>
            Para más información y asesoramiento
          </p>
          <hr ref={heroSecondDivisorRef} className={styles.divisor} />
          <Button
            ref={heroSecondButtonRef}
            className={styles.heroButton}
            href="/contact"
            variant="secondary"
          >
            Contactanos
          </Button>
        </Hero>
      </section>
    </>
  );
}

export default Home;
