import { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomForm from '@components/CustomForm';
import Alert from 'react-bootstrap/Alert';
import { IconContext } from 'react-icons';
import { FaWhatsapp, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Map = dynamic(() => import('@components/Map'), {
  loading: () => <p>A map is loading</p>,
  ssr: false,
});

function Contact() {
  const alertRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (alertRef.current) {
      gsap.from(alertRef.current, {
        scrollTrigger: {
          trigger: alertRef.current,
        },
        opacity: 0,
        autoAlpha: 0,
        scale: 0.75,
        duration: 1,
        ease: 'power2.inOut',
      });
    }
  }, []);

  return (
    <section>
      <Container fluid>
        <h2>Contacto</h2>
        <p>
          Para adquirir nuestros equipos o para más información y asesoriamiento envianos un mensaje
          a través del siguiente formulario:
        </p>
        <Row xs={1} md={2}>
          <Col className="mb-4">
            <CustomForm />
          </Col>
          <Col>
            <Map />
          </Col>
        </Row>
        <Container>
          <IconContext.Provider value={{ size: '1.25rem' }}>
            <Alert ref={alertRef} className="mt-5" variant="info">
              <p>
                También puede comunicarse con nosotros por los siguientes medios o acercándose a
                nuestras oficinas:
              </p>
              <ul className="list-unstyled">
                <li className="mb-4">
                  <FaWhatsapp className="mr-3" />
                  (+54) 3496-548841
                </li>
                <li className="mb-4">
                  <FaPaperPlane className="mr-3" />
                  noveltecnica@gmail.com
                </li>
                <li className="mb-4">
                  <FaMapMarkerAlt className="mr-3" />
                  Belgrano 2246 - CP 3080 Esperanza - Santa Fe
                </li>
              </ul>
            </Alert>
          </IconContext.Provider>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
