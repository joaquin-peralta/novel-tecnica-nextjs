import { SiMoleculer } from 'react-icons/si';
import { GoTools } from 'react-icons/go';
import { FaAward } from 'react-icons/fa';
import { GiEcology } from 'react-icons/gi';

const InfoCardData = [
  {
    icon: <SiMoleculer />,
    title: 'Generadores de ozono',
    description:
      'Tecnología propia, probada y validada a nivel industrial, lo que la hace altamente confiable.',
  },
  {
    icon: <GoTools />,
    title: 'Servicio técnico',
    description:
      'Brindamos un sólido respaldo técnico a nuestro clientes. Además del equipamiento, ofrecemos la ingeniería asociada para resolver los problemas de su industria.',
  },
  {
    icon: <FaAward />,
    title: 'Calidad y experiencia',
    description:
      'Profesionales con más de quince años de experiencia en el desarrollo de aplicaciones y equipamiento.',
  },
  {
    icon: <GiEcology />,
    title: 'Ecológico',
    description:
      'Tecnología limpia, totalmente ecológica. Extrema eficiencia en tratamiento microbiológico y desinfección. Disminución de costos en productos sanitizantes. Ausencia total de residuos químicos.',
  },
];

export default InfoCardData;
