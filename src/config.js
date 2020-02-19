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
  properties: [
    {
      id: 'id',
      type: 'string'
    },
    {
      id: 'art_einrichtung',
      type: 'string'
    },
    {
      id: 'bezeichnung',
      type: 'string'
    },
    {
      id: 'traeger',
      type: 'string'
    },
    {
      id: 'art_angebot',
      type: 'string'
    },
    {
      id: 'link',
      type: 'link'
    },
    {
      id: 'telefon',
      type: 'link'
    },
    {
      id: 'adresse',
      type: 'string'
    },
    {
      id: 'bezirksregion',
      type: 'string'
    },
    {
      id: 'angebote',
      type: 'filter_array'
    },
  ]
}