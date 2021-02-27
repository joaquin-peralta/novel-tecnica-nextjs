import * as GiIcons from 'react-icons/gi';
import * as GoIcons from 'react-icons/go';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as BiIcons from 'react-icons/bi';

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
        'Profesionales con más de diez años de experiencia en el ' +
        'desarrollo de aplicaciones y equipamiento.',
    },
    four: {
      icon: <GiIcons.GiEcology />,
      title: 'Ecológico',
      description:
        'Tecnología limpia, totalmente ecológica. Total eficiencia ' +
        'en tratamiento microbiológico y desinfección. Disminución de costos ' +
        'en productos de desinfección. Ausencia total de residuos químicos.',
    },
  },

  complementaryComps: {
    one: {
      icon: <BiIcons.BiTimer />,
      title: 'Temporizador programable:',
      description:
        'Permite programar para cada día de la semana dos franjas ' +
        'horarias de trabajo con sus correspondientes porcentajes de generación ' +
        'de ozono. De este modo se puede automatizar el control del generador ' +
        'de ozono diferenciando las condiciones para diferentes días. Ideal para ' +
        'control de cámaras y desinfección de ambientes.',
    },
    two: {
      icon: <GiIcons.GiMolecule />,
      title: 'Concentrador de oxígeno por PSA:',
      description:
        'Diseñado para alimentar los generadores de ozono en aquellas aplicaciones' +
        'en las que se requiera el uso de oxígeno. Con tecnología de Adsorción por' +
        'presión de aire, permiten separar el oxígeno del aire para usarlo en la' +
        'alimentación del generador de ozono u otras aplicaciones que puedan requerir' +
        'el uso de oxígeno.',
    },
    three: {
      icon: <GoIcons.GoCircuitBoard />,
      title:
        'Sistemas de contacto gas-líquido para disolución de ozono en agua:',
      description:
        'Diseñado para aquellas aplicaciones que requieran disolver el ozono en agua' +
        'en altas concentraciones. Construido en acero inoxidable y PVC, se logra' +
        'durabilidad y confiablidad. Incluye inyector venturi en kynar, especialmente' +
        'diseñado para disolución de ozono en agua.',
    },
  },
};

export default CardInfo;
