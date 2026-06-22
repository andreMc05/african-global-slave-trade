/** Geographic spheres of influence per century milestone */
export const INFLUENCE_ZONES = {
  1400: {
    traditional: [
      { lat: 7.48, lng: 4.56, label: 'Ife / Yoruba Heartland' },
      { lat: 6.34, lng: 5.62, label: 'Benin Kingdom' },
      { lat: -4.32, lng: 15.31, label: 'Kongo Basin' },
      { lat: 6.69, lng: -1.62, label: 'Akan Forest States' },
      { lat: -20.15, lng: 30.93, label: 'Great Zimbabwe' }
    ],
    islamic: [
      { lat: 16.27, lng: -3.00, label: 'Mali Empire' },
      { lat: 13.08, lng: 14.00, label: 'Kanem-Bornu' },
      { lat: 12.00, lng: 8.52, label: 'Hausa City-States' },
      { lat: -8.96, lng: 39.51, label: 'Kilwa Sultanate' }
    ],
    colonial: [
      { lat: 14.72, lng: -17.47, label: 'Early Senegambia Contact' },
      { lat: 28.40, lng: -16.25, label: 'Canary Islands (Staging)' }
    ]
  },
  1500: {
    traditional: [
      { lat: 8.13, lng: 4.56, label: 'Oyo / Yoruba States' },
      { lat: 6.34, lng: 5.62, label: 'Benin Kingdom' },
      { lat: -4.32, lng: 15.31, label: 'Kingdom of Kongo' },
      { lat: 6.69, lng: -1.62, label: 'Akan Polities' },
      { lat: -5.00, lng: 25.00, label: 'Luba & Lunda Kingdoms' }
    ],
    islamic: [
      { lat: 16.27, lng: -0.04, label: 'Songhai Empire' },
      { lat: 13.08, lng: 14.00, label: 'Bornu Sultanate' },
      { lat: 12.00, lng: 8.52, label: 'Hausa Trade Cities' },
      { lat: -4.05, lng: 39.67, label: 'Swahili Coast Sultanates' }
    ],
    colonial: [
      { lat: -8.84, lng: 13.23, label: 'Portuguese Luanda' },
      { lat: 5.08, lng: -1.35, label: 'Elmina (Portuguese)' },
      { lat: 0.34, lng: 6.73, label: 'São Tomé Plantations' },
      { lat: -12.97, lng: -38.51, label: 'Colonial Brazil' }
    ]
  },
  1600: {
    traditional: [
      { lat: 8.13, lng: 4.56, label: 'Oyo Empire' },
      { lat: 6.37, lng: 2.42, label: 'Kingdom of Dahomey' },
      { lat: 6.69, lng: -1.62, label: 'Ashanti (Rising)' },
      { lat: 5.50, lng: 7.50, label: 'Igboland' },
      { lat: -4.32, lng: 15.31, label: 'Kongo (Declining)' }
    ],
    islamic: [
      { lat: 13.08, lng: 14.00, label: 'Bornu Sultanate' },
      { lat: 12.00, lng: 8.52, label: 'Hausa-Fulani Cities' },
      { lat: -4.05, lng: 39.67, label: 'Mombasa & Zanzibar' },
      { lat: 11.55, lng: 43.15, label: 'Adal / Horn Trade' }
    ],
    colonial: [
      { lat: 5.08, lng: -1.35, label: 'Dutch Gold Coast' },
      { lat: -8.84, lng: 13.23, label: 'Portuguese Angola' },
      { lat: -12.97, lng: -38.51, label: 'Brazil (Colonial)' },
      { lat: 18.47, lng: -69.89, label: 'Caribbean Plantations' }
    ]
  },
  1700: {
    traditional: [
      { lat: 6.37, lng: 2.42, label: 'Dahomey (Fon)' },
      { lat: 6.69, lng: -1.62, label: 'Ashanti Empire' },
      { lat: 8.13, lng: 4.56, label: 'Yoruba City-States' },
      { lat: 5.50, lng: 7.50, label: 'Igbo Communities' },
      { lat: -28.73, lng: 30.89, label: 'Nguni Peoples' }
    ],
    islamic: [
      { lat: 13.08, lng: 5.52, label: 'Sokoto (Forming)' },
      { lat: 12.00, lng: 8.52, label: 'Hausaland' },
      { lat: 13.08, lng: 14.00, label: 'Bornu' },
      { lat: 14.72, lng: -17.47, label: 'Senegambian Muslim States' }
    ],
    colonial: [
      { lat: 5.56, lng: -0.20, label: 'British Gold Coast' },
      { lat: 14.72, lng: -17.47, label: 'French Senegal' },
      { lat: -12.97, lng: -38.51, label: 'Portuguese Brazil' },
      { lat: 32.78, lng: -79.93, label: 'American South' }
    ]
  },
  1800: {
    traditional: [
      { lat: 7.48, lng: 4.56, label: 'Yoruba Heartland' },
      { lat: 5.50, lng: 7.50, label: 'Igboland' },
      { lat: -28.73, lng: 30.89, label: 'Zulu Kingdom' },
      { lat: -5.00, lng: 25.00, label: 'Central African Kingdoms' },
      { lat: 6.37, lng: 2.42, label: 'Dahomey' }
    ],
    islamic: [
      { lat: 13.08, lng: 5.52, label: 'Sokoto Caliphate' },
      { lat: 12.00, lng: 8.52, label: 'Hausa-Fulani Emirates' },
      { lat: 14.72, lng: -17.47, label: 'Tukulor & Senegambia' },
      { lat: -6.16, lng: 39.20, label: 'Zanzibar Sultanate' }
    ],
    colonial: [
      { lat: 6.45, lng: 3.40, label: 'British West Africa' },
      { lat: 14.50, lng: -14.50, label: 'French West Africa' },
      { lat: -25.97, lng: 32.57, label: 'Portuguese Mozambique' },
      { lat: 32.78, lng: -79.93, label: 'United States (Slavery)' }
    ]
  },
  1900: {
    traditional: [
      { lat: -5.00, lng: 25.00, label: 'Congo Basin Societies' },
      { lat: -28.73, lng: 30.89, label: 'Zulu & Nguni' },
      { lat: 7.48, lng: 4.56, label: 'Yoruba (Colonial Nigeria)' },
      { lat: -3.50, lng: 29.50, label: 'Great Lakes Kingdoms' },
      { lat: 10.00, lng: 1.00, label: 'Volta-Niger Interior' }
    ],
    islamic: [
      { lat: 13.08, lng: 5.52, label: 'Sokoto Successor Emirates' },
      { lat: 12.00, lng: 8.52, label: 'Northern Nigeria' },
      { lat: 14.72, lng: -17.47, label: 'Senegambia' },
      { lat: -6.16, lng: 39.20, label: 'East African Coast' }
    ],
    colonial: [
      { lat: 6.00, lng: 1.00, label: 'European Colonial Africa' },
      { lat: -4.32, lng: 15.31, label: 'Belgian Congo' },
      { lat: 6.45, lng: 3.40, label: 'British Nigeria' },
      { lat: 0.39, lng: 18.58, label: 'French Equatorial Africa' }
    ]
  }
};
