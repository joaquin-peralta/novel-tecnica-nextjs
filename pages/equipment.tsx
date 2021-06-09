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

function Equipment() {
  return (
    <>
      <Head>
        <title>Generadores de ozono | Novel Técnica</title>
      </Head>

      {EquipmentContent.equipments.map((equipment) => (
        <section key={equipment.title}>
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
