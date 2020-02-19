export default {
  map: {
    mapCenter: [13.4124999, 52.5040961],
    mapZoom: [10],
    config: {
      minZoom: 6,
      maxZoom: 17,
      dragRotate: false,
      bearing: 0,
      maxBounds: [
        [10, 50],
        [15, 54]
      ],
      accessToken: process.env.REACT_APP_MAP_TOKEN,
      style: process.env.REACT_APP_MAP_STYLE,
    }
  },
  meta: {
    title: 'Map title here!'
  },
  tooltip: [
    {
      id: 'name',
      component: 'title',
      label: 'Institution'
    },
    {
      id: 'art_angebot',
      component: 'description',
      label: 'Angebot'
    },
    {
      id: 'bezeichnung',
      component: 'description',
      label: 'Bezeichnung'
    },
  ],
  detail: [
    {
      id: 'name',
      component: 'title',
      label: 'Institution'
    },
    {
      id: 'art_angebot',
      component: 'description',
      label: 'Angebot'
    },
    {
      id: 'bezeichnung',
      component: 'description',
      label: 'Bezeichnung'
    },
    {
      id: 'email',
      component: 'title',
      label: 'E-Mail'
    },
    {
      id: 'adresse',
      component: 'description',
      label: 'Adresse'
    },
    {
      id: 'strasse',
      component: 'description',
      label: 'Straße'
    },
  ]
}