export default {
  socialTags: {
  },
  map: {
    mapCenter: [13.4124999, 52.5040961],
    mapZoom: [10],
    marker: {
      color: {
        selected: 'green',
        default: 'black',
      }
    },
    config: {
      minZoom: 6,
      maxZoom: 17,
      dragRotate: false,
      bearing: 0,
      maxBounds: [
        [10, 50],
        [15, 54],
      ],
      accessToken: process.env.REACT_APP_MAP_TOKEN,
      style: process.env.REACT_APP_MAP_STYLE,
    },
  },
  about: {
    legend: {
      id: "art_geschaeft"
    },
    title: "Name des Projekts hier",
    paragraphs: [
      {
        title: "Subheadline hier",
        content: "Lorem ipsum [dolorem](https://www.google.de) est. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
      {
        title: "Subheadline hier",
        content: "Lorem ipsum [dolorem](https://www.google.de) est. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      },
    ]
  },
  fav: {
    title: 'Favoriten'
  },
  filter: {
    title: 'Filter und Suche',
    filter: [
      {
        id: "plz",
        component: "tags",
        label: "PLZ"
      }
    ]
  },
  tooltip: [
    {
      id: "name",
      component: "title",
      label: "Institution",
    },
    {
      id: "art_geschaeft",
      component: "description",
      label: "geschaeft",
    }
  ],
  detail: [
    {
      id: "name",
      component: "title",
      label: "Institution",
    },
    {
      id: "art_angebot",
      component: "description",
      label: "Angebot",
    },
    {
      id: "email",
      component: "link",
      label: "E-Mail",
    },
    {
      id: "oeffnungszeiten",
      component: "openingHours",
      label: "Öffnungszeiten",
    },
    {
      id: "adresse",
      component: "description",
      label: "Adresse",
    },
    {
      id: "lieferung_status",
      component: "description",
      label: "Lieferung?",
    },
    {
      id: "lieferung_beschreibung",
      component: "description",
      label: "Beschreibung des Lieferungangebots",
    },
    {
      id: "abholung_status",
      component: "description",
      label: "Selbstabholung?",
    },
    {
      id: "abholung_beschreibung",
      component: "description",
      label: "Beschreibung des Angebots zum Selbstabholung",
    }
  ],
};
