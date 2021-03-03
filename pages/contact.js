/* eslint-disable import/no-unresolved */
import dynamic from 'next/dynamic';
import { IconContext } from 'react-icons/lib';
import * as FaIcons from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Card from '@components/Card/Card';

const Contact = () => {
  const Map = dynamic(() => import('@components/Map/Map'), { ssr: false });
  return (
    <div className="Contact">
      <Container fluid>
        <h2 className="heading-h2">Contacto</h2>
        <hr className=" mt-1 mb-2" />
        <p>
          Para adquirir nuestros productos o para más información y
          asesoramiento, comuníquese con nosotros a través de los siguientes
          medios, o acérquese a nuestras oficinas:
        </p>
      </Container>
      <Container className="my-4">
        <IconContext.Provider value={{ size: '1.6rem' }}>
          <Card>
            <ul className="list-unstyled">
              <li className="mb-4">
                <FaIcons.FaWhatsapp className="mr-3" />
                (+54) 3496-548841
              </li>
              <li className="mb-4">
                <FaIcons.FaPaperPlane className="mr-3" />
                pablolbonvin@gmail.com
              </li>
              <li className="mb-4">
                <FaIcons.FaMapMarkerAlt className="mr-3" />
                Belgrano 2246 - CP 3080 Esperanza - Santa Fe
              </li>
            </ul>
          </Card>
        </IconContext.Provider>
      </Container>
      <div className="leaflet-container">
        <Map />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Contact;
