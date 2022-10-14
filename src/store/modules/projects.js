const state = {
  projects: [
    {
      projectName: 'ERP Protheus Deployment',
      position: 'Project Owner/ Business Analyst ',
      startDate: 01 / 02 / 2016,
      endDate: 01 / 11 / 2018,
      description:
        'Project focused on adherence and deployment of Protheus ERP, developed by TOTVS S/A. The main goal was to connect all areas of the company such as fiscal, human resources, payments and legal department through one software. I managed the project, dealt with legacy data to be imported. Had to manage conflicts and decide whether the modules were considered delivered or not. ',
      mainTechnologies: ['Oracle', 'PL/SQL', 'Linux', 'Windows 2012 Server'],
      company: 'EBC - Empresa Brasil de Comunicação',
    },
    {
      projectName: 'Publicidade Legal website',
      position: 'Business Analyst ',
      startDate: 01 / 06 / 2015,
      endDate: 01 / 02 / 2016,
      description:
        'Project for development of an application that would allow other organs of the federal government to divulge documents so that the population had access. My job included interviewing users, creating documents (stories), prioritizing backlog events, and leading meetings with devel team and in the end, training the users and the level 1 help desk.',
      mainTechnologies: [
        'Scrum',
        'UML',
        'Trello',
        'MediaWiki',
        'office tools',
        'Linux',
      ],
      company: 'EBC - Empresa Brasil de Comunicação',
    },
    {
      projectName: 'e-learning platform',
      position: 'Junior PHP Developer',
      startDate: 01 / 10 / 2012,
      endDate: 01 / 02 / 2013,
      description:
        'Maintenance of web e-learning platform and sites for online version of several magazines for Escala publishers.',
      mainTechnologies: [
        'PHP',
        'Sql Server 2008',
        'HTML',
        'CSS',
        'JavaScript',
        'GIT',
      ],
      company: 'DIGISA Tecnologia',
    },
    {
      projectName: 'Soft Pegasus ERP / Soft Cosmos',
      position: 'Deployent Analyst',
      startDate: 01 / 10 / 2006,
      endDate: 01 / 10 / 2012,
      description:
        'Deployment Analyst of the softwares designed by the company to serve wholesale and retail business. I imported data from legacy systems, developed sql reports and BI reports based on Stored procedures based on what the client needed.',
      mainTechnologies: [
        'PL/SQL',
        'Linux server',
        'Windows Terminal Server',
        'TeamViewer',
        'VNC',
      ],
      company: 'Softsystem Engenharia em Software',
    },
  ],
};

const getters = {
  projects: (state) => state.projects,
};

export default {
  state,
  getters,
};
