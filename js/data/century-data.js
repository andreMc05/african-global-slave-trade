import { ROUTE_COLORS, NATION_COLORS } from '../config/colors.js';

export const CENTURY_DATA = {
  1400: {
    regions: [
      'Mali Empire',
      'Kanem-Bornu Sultanate',
      'Kingdom of Kongo',
      'Ife & Oyo Precursor States',
      'Benin Kingdom',
      'Kilwa Sultanate',
      'Ethiopian Empire'
    ],
    cultures: [
      'Mandinka',
      'Hausa',
      'Yoruba',
      'Swahili',
      'Kongo Peoples',
      'Akan',
      'Kanuri'
    ],
    routes: [
      { startLat: 16.77, startLon: -3.00, endLat: 32.90, endLon: 13.18, color: ROUTE_COLORS.transSaharan },
      { startLat: 16.27, startLon: -0.04, endLat: 30.04, endLon: 31.24, color: ROUTE_COLORS.transSaharan },
      { startLat: 12.00, startLon: 8.52, endLat: 36.81, endLon: 10.18, color: ROUTE_COLORS.transSaharan },
      { startLat: -8.96, startLon: 39.51, endLat: 23.59, endLon: 58.54, color: ROUTE_COLORS.indianOcean },
      { startLat: -4.05, startLon: 39.67, endLat: 21.49, endLon: 39.19, color: ROUTE_COLORS.indianOcean },
      { startLat: -6.16, startLon: 39.20, endLat: 30.51, endLon: 47.78, color: ROUTE_COLORS.indianOcean },
      { startLat: 14.72, startLon: -17.47, endLat: 28.40, endLon: -16.25, color: ROUTE_COLORS.transAtlantic },
      { startLat: 5.56, startLon: -0.20, endLat: 10.65, endLon: -61.52, color: ROUTE_COLORS.transAtlantic }
    ],
    nations: []
  },
  1450: {
    regions: [
      'Mali Empire',
      'Songhai (Rising)',
      'Kanem-Bornu Sultanate',
      'Kingdom of Kongo',
      'Ife & Oyo Precursor States',
      'Benin Kingdom',
      'Kilwa Sultanate',
      'Ethiopian Empire'
    ],
    cultures: [
      'Mandinka',
      'Hausa',
      'Yoruba',
      'Edo',
      'Kongo Peoples',
      'Swahili',
      'Akan',
      'Kanuri'
    ],
    routes: [
      { startLat: 16.77, startLon: -3.00, endLat: 32.90, endLon: 13.18, color: ROUTE_COLORS.transSaharan },
      { startLat: 16.27, startLon: -0.04, endLat: 30.04, endLon: 31.24, color: ROUTE_COLORS.transSaharan },
      { startLat: 12.00, startLon: 8.52, endLat: 36.81, endLon: 10.18, color: ROUTE_COLORS.transSaharan },
      { startLat: -8.96, startLon: 39.51, endLat: 23.59, endLon: 58.54, color: ROUTE_COLORS.indianOcean },
      { startLat: -4.05, startLon: 39.67, endLat: 21.49, endLon: 39.19, color: ROUTE_COLORS.indianOcean },
      { startLat: -6.16, startLon: 39.20, endLat: 30.51, endLon: 47.78, color: ROUTE_COLORS.indianOcean },
      { startLat: 14.72, startLon: -17.47, endLat: 28.40, endLon: -16.25, color: ROUTE_COLORS.transAtlantic },
      { startLat: 14.72, startLon: -17.47, endLat: 13.19, endLon: -59.54, color: ROUTE_COLORS.transAtlantic }
    ],
    nations: [
      { startLat: 38.7, startLon: -9.1, endLat: 20.6, endLon: -16.5, color: NATION_COLORS.portugal }
    ]
  },
  1500: {
    regions: [
      'Songhai Empire',
      'Kingdom of Kongo',
      'Portuguese Angola (Luanda)',
      'Benin Kingdom',
      'Oyo Empire (Rising)',
      'Ethiopian Empire',
      'Kilwa & Mombasa Sultanates'
    ],
    cultures: [
      'Mandinka',
      'Yoruba',
      'Edo',
      'Kongo',
      'Mbundu',
      'Swahili',
      'Fulani',
      'Hausa'
    ],
    routes: [
      { startLat: 16.27, startLon: -0.04, endLat: 32.90, endLon: 13.18, color: ROUTE_COLORS.transSaharan },
      { startLat: 12.00, startLon: 8.52, endLat: 36.81, endLon: 10.18, color: ROUTE_COLORS.transSaharan },
      { startLat: 14.72, startLon: -17.47, endLat: 13.19, endLon: -59.54, color: ROUTE_COLORS.transAtlantic },
      { startLat: 5.56, startLon: -0.20, endLat: 18.00, endLon: -77.00, color: ROUTE_COLORS.transAtlantic },
      { startLat: 6.45, startLon: 3.40, endLat: 23.11, endLon: -82.37, color: ROUTE_COLORS.transAtlantic },
      { startLat: -8.84, startLon: 13.23, endLat: -12.97, endLon: -38.51, color: ROUTE_COLORS.transAtlantic },
      { startLat: -4.05, startLon: 39.67, endLat: 21.49, endLon: 39.19, color: ROUTE_COLORS.indianOcean },
      { startLat: -8.96, startLon: 39.51, endLat: 23.59, endLon: 58.54, color: ROUTE_COLORS.indianOcean },
      { startLat: -25.97, startLon: 32.57, endLat: 15.30, endLon: 74.12, color: ROUTE_COLORS.indianOcean }
    ],
    nations: [
      { startLat: 38.7, startLon: -9.1, endLat: 0.3, endLon: 6.7, color: NATION_COLORS.portugal },
      { startLat: 40.4, startLon: -3.7, endLat: 18.4, endLon: -66.1, color: NATION_COLORS.spain }
    ]
  },
  1600: {
    regions: [
      'Bornu Sultanate',
      'Oyo Empire',
      'Kingdom of Dahomey',
      'Ashanti Confederation (Rising)',
      'Portuguese Angola',
      'Dutch Gold Coast',
      'Kongo Kingdom (Declining)'
    ],
    cultures: [
      'Yoruba',
      'Fon',
      'Edo',
      'Akan',
      'Igbo',
      'Mbundu',
      'Mandinka',
      'Hausa-Fulani'
    ],
    routes: [
      { startLat: 14.72, startLon: -17.47, endLat: 13.19, endLon: -59.54, color: ROUTE_COLORS.transAtlantic },
      { startLat: 5.56, startLon: -0.20, endLat: 18.00, endLon: -77.00, color: ROUTE_COLORS.transAtlantic },
      { startLat: 6.45, startLon: 3.40, endLat: 23.11, endLon: -82.37, color: ROUTE_COLORS.transAtlantic },
      { startLat: 4.05, startLon: 6.52, endLat: 18.47, endLon: -69.89, color: ROUTE_COLORS.transAtlantic },
      { startLat: -8.84, startLon: 13.23, endLat: -12.97, endLon: -38.51, color: ROUTE_COLORS.transAtlantic },
      { startLat: -4.32, startLon: 15.31, endLat: 19.00, endLon: -72.30, color: ROUTE_COLORS.transAtlantic },
      { startLat: 16.27, startLon: -0.04, endLat: 30.04, endLon: 31.24, color: ROUTE_COLORS.transSaharan },
      { startLat: 12.00, startLon: 8.52, endLat: 33.89, endLon: 35.51, color: ROUTE_COLORS.transSaharan },
      { startLat: -6.16, startLon: 39.20, endLat: 12.79, endLon: 45.04, color: ROUTE_COLORS.indianOcean },
      { startLat: -4.05, startLon: 39.67, endLat: 21.49, endLon: 39.19, color: ROUTE_COLORS.indianOcean }
    ],
    nations: [
      { startLat: 38.7, startLon: -9.1, endLat: -8.8, endLon: 13.2, color: NATION_COLORS.portugal },
      { startLat: 38.7, startLon: -9.1, endLat: 5.08, endLon: -1.35, color: NATION_COLORS.portugal },
      { startLat: 38.7, startLon: -9.1, endLat: 0.3, endLon: 6.7, color: NATION_COLORS.portugal },
      { startLat: 40.4, startLon: -3.7, endLat: -8.8, endLon: 13.2, color: NATION_COLORS.spain },
      { startLat: 40.4, startLon: -3.7, endLat: 18.4, endLon: -66.1, color: NATION_COLORS.spain },
      { startLat: 40.4, startLon: -3.7, endLat: 18.47, endLon: -69.89, color: NATION_COLORS.spain }
    ]
  },
  1700: {
    regions: [
      'Ashanti Empire',
      'Kingdom of Dahomey',
      'Oyo Empire',
      'Sokoto Caliphate (Forming)',
      'British Gold Coast',
      'French Senegal',
      'Portuguese Brazil (Colonial)'
    ],
    cultures: [
      'Akan',
      'Yoruba',
      'Igbo',
      'Fon',
      'Hausa',
      'Mandinka',
      'Wolof',
      'Mbundu'
    ],
    routes: [
      { startLat: 14.72, startLon: -17.47, endLat: 13.19, endLon: -59.54, color: ROUTE_COLORS.transAtlantic },
      { startLat: 5.56, startLon: -0.20, endLat: 18.00, endLon: -77.00, color: ROUTE_COLORS.transAtlantic },
      { startLat: 6.45, startLon: 3.40, endLat: 23.11, endLon: -82.37, color: ROUTE_COLORS.transAtlantic },
      { startLat: 4.05, startLon: 6.52, endLat: 18.47, endLon: -69.89, color: ROUTE_COLORS.transAtlantic },
      { startLat: 7.95, startLon: -1.02, endLat: 10.65, endLon: -61.52, color: ROUTE_COLORS.transAtlantic },
      { startLat: -8.84, startLon: 13.23, endLat: -12.97, endLon: -38.51, color: ROUTE_COLORS.transAtlantic },
      { startLat: -4.32, startLon: 15.31, endLat: 19.00, endLon: -72.30, color: ROUTE_COLORS.transAtlantic },
      { startLat: 6.37, startLon: 2.42, endLat: -3.72, endLon: -38.54, color: ROUTE_COLORS.transAtlantic },
      { startLat: 12.00, startLon: 8.52, endLat: 36.81, endLon: 10.18, color: ROUTE_COLORS.transSaharan },
      { startLat: 13.08, startLon: 5.52, endLat: 32.90, endLon: 13.18, color: ROUTE_COLORS.transSaharan },
      { startLat: -6.16, startLon: 39.20, endLat: 21.49, endLon: 39.19, color: ROUTE_COLORS.indianOcean }
    ],
    nations: [
      { startLat: 38.7, startLon: -9.1, endLat: -8.8, endLon: 13.2, color: NATION_COLORS.portugal },
      { startLat: 38.7, startLon: -9.1, endLat: 5.56, endLon: -0.20, color: NATION_COLORS.portugal },
      { startLat: -22.9, startLon: -43.2, endLat: 5.56, endLon: -0.20, color: NATION_COLORS.portugal },
      { startLat: 51.5, startLon: -0.1, endLat: 5.56, endLon: -0.20, color: NATION_COLORS.britain },
      { startLat: 51.5, startLon: -0.1, endLat: 4.05, endLon: 6.52, color: NATION_COLORS.britain },
      { startLat: 48.8, startLon: 2.3, endLat: 6.37, endLon: 2.42, color: NATION_COLORS.france },
      { startLat: 48.8, startLon: 2.3, endLat: 6.45, endLon: 3.40, color: NATION_COLORS.france },
      { startLat: 40.4, startLon: -3.7, endLat: -8.8, endLon: 13.2, color: NATION_COLORS.spain },
      { startLat: 42.7, startLon: -71.4, endLat: 14.72, endLon: -17.47, color: NATION_COLORS.usa }
    ]
  },
  1800: {
    regions: [
      'Sokoto Caliphate',
      'Ashanti Empire',
      'Zulu Kingdom (Rising)',
      'British West Africa',
      'French West Africa',
      'Portuguese Mozambique',
      'United States (Slavery Era)'
    ],
    cultures: [
      'Fulani',
      'Yoruba',
      'Igbo',
      'Akan',
      'Mandinka',
      'Swahili',
      'Zulu',
      'Hausa'
    ],
    routes: [
      { startLat: 6.45, startLon: 3.40, endLat: 23.11, endLon: -82.37, color: ROUTE_COLORS.transAtlantic },
      { startLat: 4.05, startLon: 6.52, endLat: 18.47, endLon: -69.89, color: ROUTE_COLORS.transAtlantic },
      { startLat: 7.95, startLon: -1.02, endLat: 10.65, endLon: -61.52, color: ROUTE_COLORS.transAtlantic },
      { startLat: -8.84, startLon: 13.23, endLat: -12.97, endLon: -38.51, color: ROUTE_COLORS.transAtlantic },
      { startLat: 6.37, startLon: 2.42, endLat: -3.72, endLon: -38.54, color: ROUTE_COLORS.transAtlantic },
      { startLat: 14.72, startLon: -17.47, endLat: 32.78, endLon: -79.93, color: ROUTE_COLORS.transAtlantic },
      { startLat: 13.08, startLon: 5.52, endLat: 36.81, endLon: 10.18, color: ROUTE_COLORS.transSaharan },
      { startLat: -6.16, startLon: 39.20, endLat: 21.49, endLon: 39.19, color: ROUTE_COLORS.indianOcean },
      { startLat: -25.97, startLon: 32.57, endLat: 24.47, endLon: 54.37, color: ROUTE_COLORS.indianOcean },
      { startLat: -15.42, startLon: 28.28, endLat: 12.79, endLon: 45.04, color: ROUTE_COLORS.indianOcean }
    ],
    nations: [
      { startLat: -22.9, startLon: -43.2, endLat: 5.56, endLon: -0.20, color: NATION_COLORS.portugal },
      { startLat: -22.9, startLon: -43.2, endLat: 14.72, endLon: -17.47, color: NATION_COLORS.portugal },
      { startLat: 23.1, startLon: -82.4, endLat: 6.45, endLon: 3.40, color: NATION_COLORS.spain },
      { startLat: 23.1, startLon: -82.4, endLat: 4.05, endLon: 6.52, color: NATION_COLORS.spain },
      { startLat: 51.5, startLon: -0.1, endLat: 4.05, endLon: 6.52, color: NATION_COLORS.britain },
      { startLat: 42.7, startLon: -71.4, endLat: 14.72, endLon: -17.47, color: NATION_COLORS.usa }
    ]
  },
  1900: {
    regions: [
      'European Colonial Africa',
      'Liberia (Independent)',
      'Ethiopian Empire',
      'Sokoto Successor Emirates',
      'Belgian Congo',
      'British Nigeria (Forming)',
      'French Equatorial Africa'
    ],
    cultures: [
      'Yoruba',
      'Igbo',
      'Akan',
      'Mandinka',
      'Fulani',
      'Swahili',
      'Kongo',
      'Zulu'
    ],
    routes: [
      { startLat: 6.45, startLon: 3.40, endLat: 23.11, endLon: -82.37, color: ROUTE_COLORS.transAtlantic },
      { startLat: -8.84, startLon: 13.23, endLat: -12.97, endLon: -38.51, color: ROUTE_COLORS.transAtlantic },
      { startLat: -6.16, startLon: 39.20, endLat: 21.49, endLon: 39.19, color: ROUTE_COLORS.indianOcean },
      { startLat: 13.08, startLon: 5.52, endLat: 32.90, endLon: 13.18, color: ROUTE_COLORS.transSaharan },
      { startLat: -4.32, startLon: 15.31, endLat: -22.91, endLon: -43.17, color: ROUTE_COLORS.transAtlantic },
      { startLat: 7.95, startLon: -1.02, endLat: 6.80, endLon: -58.16, color: ROUTE_COLORS.transAtlantic }
    ],
    nations: []
  }
};
