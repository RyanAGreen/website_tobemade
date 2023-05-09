module.exports = {
  siteTitle: 'Ryan Green | Biogeochemical modeler | mCDR research',
  siteDescription:
    'Ryan Green is a Ph.D. candidate at UC Santa Cruz, researching marine carbon dioxide removal methods.',
  siteKeywords:
    'Ryan A. Green, Ryan, Green, RyanAGreen, biogeochemical modeler, carbonate chemistry, carbon dioxide removal, ROMS, marine carbon dioxide removal, ocean alkalinity enhancement, UC Santa Cruz, marine biogeochemistry',
  siteUrl: 'https://ryanagreen.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'wWnLGP99FdHTS4k53fbEgcv-KFvCBqrAOcFaANyKA9k',
  name: 'Ryan Green',
  location: 'Santa Cruz, California',
  email: 'rygreen@ucsc.edu',
  github: 'https://github.com/RyanAGreen',
  // twitterHandle: '@chandrikadeb7',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/RyanAGreen',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ryangreenphd/',
    },
    {
      name: 'GoogleScholar',
      url: 'https://scholar.google.com/citations?user=7KzOK8MAAAAJ&hl=en',
    },
    {
      name: 'Orcid',
      url: 'https://orcid.org/0000-0002-2411-8025',
    },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/chandrikadeb7',
    // },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Research',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  // these are practice colors
  //   colors: {
  //   green: '#F5DEB3',
  //   navy: '#008080',
  //   darkNavy: '#003366',
  // },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
