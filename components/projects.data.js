const PROJECTS_DATA = [
  {
    id: 0,
    title: "Mayday's Backend",
    imagePath: '/images/project-previews/Mayday.jpg',
    description: `Working mostly on the server side, I helped build
    <a href='https://mayday.am/' target='_blank' rel='noopener noreferrer'> Mayday</a>'s RESTful API in Node.js, Express, TypeScript, and PostgreSQL. This revamp aimed to facilitate the migration and scalability of the proof of concept (POC) backend. Originally supporting 400 users, it has since been elevated to production and is now capable of accommodating over 6500 users. Highlights of this role include resolving complexities with migration scripts and working with Pub/Sub to handle post processing data.`,
    skills: [
      'Pub/Sub',
      'Node.js',
      'PostgreSQL',
      'Express',
      'TypeScript',
      'JavaScript',
      'React.js',
      'Responsive Web Design',
      'Unit Testing',
      'Integration Testing',
    ],
  },
  {
    id: 2,
    title: 'IRCC Tools',
    description: `<p>While working with the Federal Government, I worked with Agile Software Development. I started as an Angular Developer, writing <b>boilerplate code and documentation</b> for other teams to template their custom projects while adhering to security processes and restraints. I then moved on to writing tests in Jasmine and Karma for a <b>Citizenship web application</b>, followed by coding from scratch a <b>case processing tool</b> in Angular, Jasmine, and Karma.</p> I then moved on to becoming an AWS/Cloud Developer where I updated architecture diagrams, deployed application code, wrote Infrastructure as Code in AWS CloudFormation, provisioned relevant services, monitored logs, and guarded IAM policies.`,
    skills: ['Angular', 'Unit Testing', 'TypeScript', 'SQL', 'AWS'],
  },
  {
    id: 4,
    title: 'Lawson Heights',
    imagePath: '/images/project-previews/LawsonHeights.jpg',
    description:
      'Client site built at Mobile Fringe. Front-end built with Vue.js to extract dynamic content from CMS. Utilizes Vuex for state management, and Vue-Router for routing. ',
    skills: [
      'Vue.js',
      'Nuxt.js',
      'HTML5',
      'SASS/SCSS',
      'Bootstrap',
      'JavaScript',
      'Responsive Web Design',
    ],
    liveUrl: 'https://mallatlawsonheights.com/',
  },
  {
    id: 6,
    title: "Irene Truong's Portfolio",
    imagePath: '/images/project-previews/ITPortfolioTwo.jpg',
    description:
      "This site! I wanted to build from scratch what I've learned over the years. Designed by <a href='https://ca.linkedin.com/in/huajoey' target='_blank' rel='noopener noreferrer'>Joey Hua, UX Designer</a>. Feel free to view the source code to see how I decided to refactor as I went along with the build.",
    skills: [
      'React.js',
      'Next.js',
      'SASS/SCSS',
      'JavaScript',
      'Responsive Web Design',
      'Figma (asset edits and slicing)',
    ],
    githubUrl: 'https://github.com/irenecodes/irene-portfolio',
  },
  {
    id: 8,
    title: 'Luxury Gold - Luxury Train Tours',
    imagePath: '/images/project-previews/LGTrainTravel.jpg',
    description:
      'Landing Page built within Sitecore for Luxury Gold to promote luxury train tours. Edited assets within Figma.',
    skills: ['HTML5', 'CSS3', 'SCSS/SASS', 'JavaScript', 'Sitecore', 'Figma'],
    liveUrl:
      'https://www.luxurygold.com/ca/journey-styles/2021-2022-luxury-train-tours',
  },
  {
    id: 10,
    title: 'Insight Vacations - Well-being',
    imagePath: '/images/project-previews/IVWellbeing.jpg',
    description:
      'Landing Page built within Sitecore for Insight Vacations per company branding specifications.',
    skills: ['HTML5', 'CSS3', 'SCSS/SASS', 'Sitecore', 'Figma'],
    liveUrl:
      'https://www.insightvacations.com/us/the-insight-difference/well-being',
  },
  {
    id: 12,
    title: 'Personal Date Night',
    imagePath: '/images/project-previews/PersonalDateNight.jpg',
    description:
      "Built as a personal group project. Want to attend an event but get some 'me time' away from your partner? Now couples can go to different events in similar locations and at the same time. Built using React.js.",
    skills: [
      'React.js',
      'SASS/SCSS',
      'JavaScript',
      'RESTful API',
      'Responsive Web Design',
      'Group Programming',
    ],
    liveUrl: 'https://caij-consulting.github.io/personal-date-night/',
    githubUrl: 'https://github.com/caij-consulting/personal-date-night',
  },
  {
    id: 14,
    title: 'Client Portfolio Site',
    imagePath: '/images/project-previews/ClientJoey.jpg',
    description: 'Client site. Design provided by client. ',
    skills: ['HTML5', 'CSS3', 'LESS', 'Mobile First', 'Responsive Web Design'],
    githubUrl: 'https://github.com/irenecodes/jh-portfolio',
  },
  {
    id: 7,
    title: 'Single Page PSD Conversion - Arora Jewlers',
    imagePath: '/images/project-previews/AroraJewlers.jpg',
    description:
      'PSD to HTML/CSS Conversion. Design provided by HackerYou. Coded Mobile First using LESS compiler. Layout styled with floats and clearfix.',
    skills: ['HTML5', 'CSS3', 'LESS', 'Mobile First', 'Responsive Web Design'],
    liveUrl: 'https://irenecodes.github.io/Arora-Jewlers/',
    githubUrl: 'https://github.com/irenecodes/Arora-Jewlers',
  },
  {
    id: 16,
    title: 'Pet Lims',
    imagePath: '/images/project-previews/PetLims.jpg',
    description:
      'jQuery Quiz to find out how many pets you can own dependent on your location in the GTA. ',
    skills: [
      'HTML5',
      'CSS3',
      'SASS/SCSS',
      'JavaScript',
      'jQuery',
      'Responsive Web Design',
    ],
    liveUrl: 'https://irenecodes.github.io/Pet-Lims/',
    githubUrl: 'https://github.com/irenecodes/Pet-Lims',
  },
  {
    id: 18,
    title: "Who's That Pokémon?",
    imagePath: '/images/project-previews/WhosThatPokemon.jpg',
    description:
      "Personal fun project. An API-powered application built with jQuery. Pokémon are randomized to test your knowledge. Inspired by Pokémon's pre-commercial segment 'Who's That Pokémon'!",
    skills: [
      'HTML5',
      'CSS3',
      'SASS/SCSS',
      'JavaScript',
      'jQuery',
      'RESTful API',
      'Paired Programming',
      'Responsive Web Design',
    ],
    liveUrl:
      'https://the-best-doduo.github.io/harry-grewal-irene-truong-project-4/',
    githubUrl:
      'https://github.com/the-best-doduo/harry-grewal-irene-truong-project-4',
  },
  {
    id: 20,
    title: 'Multi-Page PSD Conversion - Captured',
    imagePath: '/images/project-previews/Captured.jpg',
    description: 'PSD to HTML/CSS Conversion. Design provided by HackerYou.',
    skills: ['HTML5', 'CSS3', 'SASS/SCSS', 'Responsive Web Design'],
    liveUrl: 'https://irenecodes.github.io/Captured/',
    githubUrl: 'https://github.com/irenecodes/Captured',
  },
];

export default PROJECTS_DATA;
