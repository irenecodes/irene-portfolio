const PROJECTS_DATA = [
  {
    id: 1,
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
    id: 2,
    title: "Irene Truong's Portfolio",
    imagePath: '/images/project-previews/ITPortfolioTwo.jpg',
    description:
      "This site! I wanted to build from scratch what I've learned over the years. Designed by <a href='https://joeyhua.com' target='_blank' rel='noopener noreferrer'>Joey Hua, UX Designer</a>. Feel free to view the source code to see how I decided to refactor as I went along with the build.",
    skills: [
      'React.js',
      'Next.js',
      'SASS/SCSS',
      'JavaScript',
      'Responsive Web Design',
      'Figma (asset edits and slicing)',
    ],
    githubUrl: 'https://github.com/irenecodes/irene-portfolio-next',
  },
  {
    id: 3,
    title: 'Luxury Gold - Luxury Train Tours',
    imagePath: '/images/project-previews/LGTrainTravel.jpg',
    description:
      'Landing Page built within Sitecore for Luxury Gold to promote luxury train tours. Edited assets within Figma.',
    skills: ['HTML5', 'CSS3', 'SCSS/SASS', 'JavaScript', 'Sitecore', 'Figma'],
    liveUrl:
      'https://www.luxurygold.com/ca/journey-styles/2021-2022-luxury-train-tours',
  },
  {
    id: 4,
    title: 'Insight Vacations - Well-being',
    imagePath: '/images/project-previews/IVWellbeing.jpg',
    description:
      'Landing Page built within Sitecore for Insight Vacations per company branding specifications.',
    skills: ['HTML5', 'CSS3', 'SCSS/SASS', 'Sitecore', 'Figma'],
    liveUrl:
      'https://www.insightvacations.com/us/the-insight-difference/well-being',
  },
  {
    id: 5,
    title: 'Personal Date Night',
    imagePath: '/images/project-previews/PersonalDateNight.jpg',
    description:
      "Want to attend an event but get some 'me time' away from your partner? Now couples can go to different events in similar locations and at the same time. Built using React.js.  ",
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
    id: 6,
    title: 'Client Portfolio Site',
    imagePath: '/images/project-previews/ClientJoey.jpg',
    description: 'Client site coded and deployed. Design provided by client. ',
    skills: ['HTML5', 'CSS3', 'LESS', 'Mobile First', 'Responsive Web Design'],
    liveUrl: 'https://joeyhua.com/',
    githubUrl: 'https://github.com/irenecodes/jh-portfolio',
  },
  {
    id: 7,
    title: 'Single Page PSD Conversion - Arora Jewlers',
    imagePath: '/images/project-previews/AroraJewlers.jpg',
    description:
      'PSD to HTML/CSS Conversion. Design provided by HackerYou. Coded Mobile First using LESS compiler. Layout styled with floats and clearfix.',
    skills: ['HTML5', 'CSS3', 'LESS', 'Mobile First', 'Responsive Web Design'],
    liveUrl: 'https://github.com/irenecodes/Arora-Jewlers',
    githubUrl: 'https://irenecodes.github.io/Arora-Jewlers/',
  },
  {
    id: 8,
    title: 'Single Page PSD Conversion - HackerYou Landing Page',
    imagePath: '/images/project-previews/HackerYouLP.jpg',
    description:
      'PSD to HTML/CSS Conversion. Desktop design provided by HackerYou.',
    skills: ['HTML5', 'CSS3', 'Responsive Web Design'],
    liveUrl: 'https://irenecodes.github.io/psd-conversion-challenge/',
    githubUrl: 'https://github.com/irenecodes/psd-conversion-challenge',
  },
  {
    id: 9,
    title: 'Bookstore',
    imagePath: '/images/project-previews/Bookstore.jpg',
    description:
      'A CRUD application built using React, React Router, and Redux.',
    skills: [
      'React.js',
      'Redux',
      'SASS/SCSS',
      'JavaScript',
      'Responsive Web Design',
    ],
    liveUrl: 'https://irenecodes.github.io/bookstore/#/',
    githubUrl: 'https://github.com/irenecodes/bookstore',
  },
  {
    id: 10,
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
    id: 11,
    title: 'Keyboard Warrior',
    imagePath: '/images/project-previews/KeyboardWarrior.jpg',
    description:
      'A speed-typing game in vanilla JavaScript. Utilizes Bootstrap 4 for responsiveness.',
    skills: ['HTML5', 'CSS3', 'SASS/SCSS', 'Bootstrap', 'JavaScript'],
    liveUrl: 'https://irenecodes.github.io/keyboard-warrior/',
    githubUrl: 'https://github.com/irenecodes/keyboard-warrior',
  },
  {
    id: 13,
    title: 'Sleep Talk',
    imagePath: '/images/project-previews/SleepTalk.jpg',
    description:
      "Ever wanted to share a wicked, creepy, bizarre dream, but couldn't remember? Now you can log it down using this application built with React.js!",
    skills: [
      'React.js',
      'CSS3',
      'SASS/SCSS',
      'JavaScript',
      'Firebase',
      'Responsive Web Design',
    ],
    liveUrl: 'https://dream-log.firebaseapp.com/',
    githubUrl: 'https://github.com/irenecodes/dream-log',
  },
  {
    id: 14,
    title: "Who's That Pokémon?",
    imagePath: '/images/project-previews/WhosThatPokemon.jpg',
    description:
      "An API-powered application built with jQuery. Pokémon are randomized to test your knowledge. Inspired by Pokémon's pre-commercial segment 'Who's That Pokémon'!",
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
    id: 15,
    title: 'Multi-Page PSD Conversion - Captured',
    imagePath: '/images/project-previews/Captured.jpg',
    description: 'PSD to HTML/CSS Conversion. Design provided by HackerYou.',
    skills: ['HTML5', 'CSS3', 'SASS/SCSS', 'Responsive Web Design'],
    liveUrl: 'https://irenecodes.github.io/Captured/',
    githubUrl: 'https://github.com/irenecodes/Captured',
  },
];

export default PROJECTS_DATA;
