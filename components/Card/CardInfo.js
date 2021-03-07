import * as GiIcons from 'react-icons/gi';
import * as GoIcons from 'react-icons/go';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

const CardInfo = {
  features: {
    one: {
      icon: <SiIcons.SiMoleculer />,
      title: 'Generadores de ozono',
      description:
        'Tecnología propia, probada y validada a nivel industrial, lo ' +
        'que la hace altamente confiable.',
    },
    two: {
      icon: <GoIcons.GoTools />,
      title: 'Servicio técnico',
      description:
        'Brindamos un sólido respaldo técnico a nuestro clientes. ' +
        'Además del equipamiento, ofrecemos la ingeniería asociada para resolver ' +
        'los problemas de su industria.',
    },
    three: {
      icon: <FaIcons.FaAward />,
      title: 'Calidad y experiencia',
      description:
        'Profesionales con más de quince años de experiencia en el ' +
        'desarrollo de aplicaciones y equipamiento.',
    },
    four: {
      icon: <GiIcons.GiEcology />,
      title: 'Ecológico',
      description:
        'Tecnología limpia, totalmente ecológica. Extrema eficiencia ' +
        'en tratamiento microbiológico y desinfección. Disminución de costos ' +
        'en productos sanitizantes. Ausencia total de residuos químicos.',
    },
  },
};

export default CardInfo;
