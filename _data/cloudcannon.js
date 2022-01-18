module.exports = {
  
  // Image upload directory
  uploads_dir: '/assets/img/uploads',

  // Navigation panel
  _collection_groups: [
    {
      heading: "Pagina's",
      collections: ['pages']
    },
    {
      heading: 'Aanbod',
      collections: ['omgeving', 'arrangementen', 'activiteiten', 'overnachtingen']
    },
    {
      heading: 'Sloepen',
      collections: ['sloepen']
    },
    {
      heading: 'Algemeen',
      collections: ['data/info']
    },
  ],

  // Collections config
  collections: {
    pages: {
      path: '',
      filter: 'strict',
      output: true,
      _enabled_editors: ['visual']
    },
    mycollection: {
      path: '/mycollection',
      _icon: 'landscape',
      output: true,
      _enabled_editors: ['visual']
    }
  },

  // Input customization
  _inputs: {
    seo: {
      label: 'SEO',
      comment: 'Zoekmachine-optimalisate, Wordt weergegeven in Google en heeft invloed op je vindbaarheid'
    },
    seo_title: {
      label: 'Titel',
      comment: 'Probeer de pagina te beschrijven in 50–60 karakters'
    },
    seo_description: {
      label: 'Beschrijving',
      comment: 'Probeer je pagina te beschrijven in 50-120 karakters'
    },
    image: {
      label: 'Upload'
    },
    alt: {
      label: 'Omschrijving',
      comment: 'Omschrijf je afbeelding in maximaal 125 karakters',
      type: 'textarea'
    }
  }
};