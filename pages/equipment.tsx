import { useRef, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heading from '@components/Heading';
import FeatureCard from '@components/Card/FeatureCard';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import EquipmentContent from '@db/EquipmentContent.json';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Equipment() {
  const sectionsRefs = useRef(new Array());

  useEffect(() => {
    if (sectionsRefs.current) {
      sectionsRefs.current.forEach((ref) => {
        gsap.from(ref, {
          scrollTrigger: {
            trigger: ref,
            start: 'top center',
          },
          opacity: 0,
          autoAlpha: 0,
          scale: 0.8,
          duration: 0.75,
          ease: 'power2.inOut',
        });
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Generadores de ozono | Novel Técnica</title>
      </Head>

      {EquipmentContent.equipments.map((equipment, index) => (
        <section
          ref={(element) => sectionsRefs.current.splice(index, 1, element)}
          key={equipment.title}
          style={{ visibility: 'hidden' }}
        >
          <Container fluid>
            <Heading className="mb-4" color={equipment.brandColor}>
              {equipment.title}
            </Heading>
          </Container>
          <Container>
            {equipment.set.map((item) => (
              <Row key={item.name} xs={1} lg={2} className="align-items-start mb-5">
                <Col>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <FeatureCard className="mb-3" color={equipment.brandColor}>
                    <p className="font-weight-bold">Características:</p>
                    <ul>
                      {item.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </FeatureCard>
                </Col>
                <Col>
                  <Carousel
                    fade
                    controls={item.images.length > 1 ? true : false}
                    indicators={item.images.length > 1 ? true : false}
                  >
                    {item.images.map((image) => (
                      <Carousel.Item key={image}>
                        <div style={{ height: '30rem' }}>
                          <Image src={image} layout="fill" objectFit="contain" />
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Col>
              </Row>
            ))}
          </Container>
        </section>
      ))}
    </>
  );
}

export default Equipment;
