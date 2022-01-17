module.exports = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'Examples',
    url: '',
    dropdown: {
      collection: 'examples',
    }
  },
  {
    title: 'More',
    url: '',
    dropdown: {
      custom: [
        {
          title: 'Link A',
          url: '/'
        },
        {
          title: 'Link B',
          url: '/'
        },
      ]
    }
  }
];
