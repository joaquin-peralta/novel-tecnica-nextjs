import styles from '@styles/pages/About.module.scss';
import { useRef, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import AboutContent from '@db/AboutContent.json';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const alertOneRef = useRef<HTMLDivElement>(null);
  const alertTwoRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const itemsRefs = useRef(new Array());

  useEffect(() => {
    if (aboutRef.current) {
      const t1 = gsap.timeline({
        defaults: { opacity: 0, autoAlpha: 0, duration: 1, ease: 'power4.inOut' },
      });
      t1.from(aboutRef.current, {}).from(imageRef.current, { x: 30 }, '-=0.5');
    }

    if (alertOneRef.current && alertTwoRef.current) {
      const t2 = gsap.timeline({
        defaults: { opacity: 0, autoAlpha: 0, scale: 0.75, duration: 1, ease: 'power2.inOut' },
      });
      t2.from(alertOneRef.current, {
        scrollTrigger: {
          trigger: alertOneRef.current,
        },
      }).from(alertTwoRef.current, {});
    }

    if (headingRef.current) {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
        },
        opacity: 0,
        y: 10,
      });
    }

    if (itemsRefs.current) {
      itemsRefs.current.forEach((ref) => {
        gsap.from(ref, {
          scrollTrigger: {
            trigger: ref,
            start: 'center 97%',
          },
          y: 10,
          opacity: 0,
          autoAlpha: 0,
          duration: 0.8,
        });
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Quiénes somos | Novel Técnica</title>
      </Head>

      <section>
        <Container>
          <Row xs={1} md={2} className="align-items-center">
            <Col ref={aboutRef}>
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
            <Col ref={imageRef}>
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
              <Col ref={alertOneRef}>
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
              <Col ref={alertTwoRef}>
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
          <h3 ref={headingRef}>Algunas de las aplicaciones más comunes del ozono</h3>
          <ul>
            {AboutContent.applications.map((item, index) => (
              <li ref={(element) => itemsRefs.current.splice(index, 1, element)} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}

export default About;
