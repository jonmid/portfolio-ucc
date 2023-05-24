import logo from './../assets/images/logo.svg';
import twitter from './../assets/images/twitter.svg';
import github from './../assets/images/github.svg';
import instagram from './../assets/images/instagram.svg';
import ui from './../assets/images/ui.svg';
import serviceIcon1 from './../assets/images/service_icon_1.svg';
import serviceIcon2 from './../assets/images/service_icon_2.svg';
import serviceIcon3 from './../assets/images/service_icon_3.svg';
import avatarDefault from './../assets/images/avatar-default.svg';

export const HeaderData = {
  logo: {
    title: 'UCC',
    link: 'index.html',
    icon: logo,
  },
  nav: [
    {
      id: 1,
      title: 'Inicio',
      link: 'index.html',
    },
    {
      id: 2,
      title: 'Servicios',
      link: 'servicios.html',
    },
    {
      id: 3,
      title: 'Experiencia',
      link: 'experiencia.html',
    },
    {
      id: 4,
      title: 'Proyectos',
      link: 'proyectos.html',
    },
    {
      id: 5,
      title: 'Equipo',
      link: 'equipo.html',
    },
  ],
  social: [
    {
      id: 1,
      title: 'Twitter',
      link: 'twitter.html',
      icon: twitter,
    },
    {
      id: 2,
      title: 'GitHub',
      link: 'github.html',
      icon: github,
    },
    {
      id: 3,
      title: 'Instagram',
      link: 'instagram.html',
      icon: instagram,
    },
  ],
};

export const HeroData = {
  title: 'Las mejores experiencias en software',
  subTitle:
    'Nos aseguramos que cada desarrollo sea enfocado en las necesidades de los usuarios para brindar soluciones de alta calidad.',
  btnTextDownloadCv: 'Descargar CV',
  btnTextContact: 'Contactarnos',
  iconHero: ui,
};

export const ServiceData = {
  header: {
    title: 'Servicios',
    subTitle:
      'Cada uno de nuestros servicios tiene como foco principal las necesidades de nuestros usuarios.',
  },
  items: [
    {
      id: 1,
      icon: serviceIcon1,
      title: 'Servicio de integraciones web',
      subTitle:
        'Garantizamos un trabajo de calidad para integrar diferentes stack de tecnologías enfocados a la web.',
      orientation: 'left',
    },
    {
      id: 2,
      icon: serviceIcon2,
      title: 'Desarrollo web',
      subTitle:
        'Desarrollamos sobre los mejores estándares de la web utilizando las mejores herramientas para cubrir las necesidades de nuestros clientes.',
      orientation: 'right',
    },
    {
      id: 3,
      icon: serviceIcon3,
      title: 'Diseño de interfaces de SW',
      subTitle:
        'Al utilizar metodologías para planificar el proceso de diseño garantizamos que los productos finales sean lo mas eficiente para los usuarios.',
      orientation: 'left',
    },
  ],
};

export const ExperienceData = {
  header: {
    title: 'Nuestra experiencia en desarrollo de software',
    subTitle:
      'Una breve descripción de lo que hemos desarrollado para distintos clientes.',
  },
  items: [
    {
      id: 1,
      icon: avatarDefault,
      clientName: 'Hospital',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate non dolorem, sapiente quas incidunt, nam saepe eveniet cum, nisi ex quam nulla enim omnis natus accusamus sit fugiat id.',
    },
    {
      id: 2,
      icon: avatarDefault,
      clientName: 'Restaurante',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate non dolorem, sapiente quas incidunt, nam saepe eveniet cum, nisi ex quam nulla enim omnis natus accusamus sit fugiat id.',
    },
    {
      id: 3,
      icon: avatarDefault,
      clientName: 'Colegio',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate non dolorem, sapiente quas incidunt, nam saepe eveniet cum, nisi ex quam nulla enim omnis natus accusamus sit fugiat id.',
    },
    {
      id: 4,
      icon: avatarDefault,
      clientName: 'Alcaldia',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate non dolorem, sapiente quas incidunt, nam saepe eveniet cum, nisi ex quam nulla enim omnis natus accusamus sit fugiat id.',
    },
  ],
};
