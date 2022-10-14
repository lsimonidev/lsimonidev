const state = {
  education: [
    {
      course: 'System Engeneering',
      degree: 'Bachelor’s Degree',
      institution: 'Centro Universitário Unieuro',
      institutionUrl: 'https://www.unieuro.edu.br/',
      endDate: '01/01/2006',
    },
    {
      course:
        'CPRE-FL Certified Professional for Requirements Engineering - Foundation Level',
      degree: 'Bachelor’s Degree',
      institution:
        'IBQTS - Instituto Brasileiro de Qualidade em Testes de Software',
      institutionUrl: 'http://ibqts.com.br/conteudo/show/id/51',
      endDate: '01/01/2012',
    },
    {
      course: 'Java Developer',
      degree: '',
      institution: 'Alura',
      institutionUrl: 'https://www.alura.com.br/',
      endDate: '01/01/2018',
    },
    {
      course: 'HTML Web Developer',
      degree: '',
      institution: 'Digital Innovation One',
      institutionUrl: 'https://certificates.digitalinnovation.one/9D245D09',
      endDate: '15/11/2020',
    },
    {
      course: 'Construindo páginas para internet com Bootstrap',
      degree: '',
      institution: 'Digital Innovation One',
      institutionUrl: 'https://certificates.digitalinnovation.one/E027A3CA',
      endDate: '14/11/2020',
    },
    {
      course: 'Programação para internet com JavaScript',
      degree: '',
      institution: 'Digital Innovation One',
      institutionUrl: 'https://certificates.digitalinnovation.one/B170C860',
      endDate: '10/11/2020',
    },
    {
      course: 'Introdução a Criação de Websites com HTML5 e CSS3',
      degree: '',
      institution: 'Digital Innovation One',
      institutionUrl: 'https://certificates.digitalinnovation.one/AFAC8B1E',
      endDate: '08/11/2020',
    },
    {
      course: 'Introdução ao Git e ao GitHub',
      degree: '',
      institution: 'Digital Innovation One',
      institutionUrl: 'https://certificates.digitalinnovation.one/2645B74E',
      endDate: '08/11/2020',
    },
    {
      course: 'Lógica de Programação Essencial',
      degree: '',
      institution: 'Digital Innovation One',
      institutionUrl: 'https://certificates.digitalinnovation.one/D1A07EF0',
      endDate: '06/11/2019',
    },
    {
      course: 'Responsive Web Design',
      degree: '',
      institution: 'FreeCodeCamp',
      institutionUrl:
        'https://www.freecodecamp.org/certification/lsimonidev/responsive-web-design',
      endDate: '05/12/2020',
    },
    {
      course: 'Version Control',
      degree: '',
      institution: 'Meta - Coursera',
      institutionUrl:
        'https://coursera.org/share/771ab668b0f9916bf5b874f5c29c1d7f',
      endDate: '09/08/2022',
    },
    {
      course: 'Programming with JavaScript',
      degree: '',
      institution: 'Meta - Coursera',
      institutionUrl:
        'https://coursera.org/share/63c5a30f6ce16d4625172dcc73f6420b',
      endDate: '07/08/2022',
    },
    {
      course: 'Introduction to Front-End Development',
      degree: '',
      institution: 'Meta - Coursera',
      institutionUrl:
        'https://coursera.org/share/bcd21cb182ce30aa34508825749e3871',
      endDate: '02/08/2022',
    },
    {
      course: 'Intro to Vue 3',
      degree: '',
      institution: 'VueMastery',
      institutionUrl: 'https://www.vuemastery.com/',
      endDate: '02/06/2021',
    },
    {
      course: 'Real World Vue 3',
      degree: '',
      institution: 'VueMastery',
      institutionUrl: 'https://www.vuemastery.com/',
      endDate: '02/07/2021',
    },
  ],
};

const getters = {
  education: (state) => state.education,
};

export default {
  state,
  getters,
};
