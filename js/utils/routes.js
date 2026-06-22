import { ROUTE_COLORS, NATION_COLORS } from '../config/colors.js';

const ROUTE_VOLUME_BASE = {
  [ROUTE_COLORS.transAtlantic]: 95000,
  [ROUTE_COLORS.transSaharan]: 38000,
  [ROUTE_COLORS.indianOcean]: 22000,
  [NATION_COLORS.portugal]: 72000,
  [NATION_COLORS.britain]: 88000,
  [NATION_COLORS.france]: 65000,
  [NATION_COLORS.spain]: 58000,
  [NATION_COLORS.usa]: 42000
};

const ERA_VOLUME_SCALE = {
  1400: 0.12,
  1500: 0.34,
  1600: 0.72,
  1700: 1.0,
  1800: 0.86,
  1900: 0.2
};

function eraVolumeScale(year) {
  const eraStart = Math.floor((year - 1400) / 100) * 100 + 1400;
  const eraEnd = Math.min(eraStart + 100, 1900);
  const startScale = ERA_VOLUME_SCALE[eraStart] != null ? ERA_VOLUME_SCALE[eraStart] : 0.5;
  const endScale = ERA_VOLUME_SCALE[eraEnd] != null ? ERA_VOLUME_SCALE[eraEnd] : startScale;
  if (eraEnd === eraStart) return startScale;
  const t = (year - eraStart) / (eraEnd - eraStart);
  return startScale + (endScale - startScale) * t;
}

function routeVolumeVariance(route, index) {
  const seed = Math.abs(
    route.startLat * 12.9898 + route.startLon * 78.233 +
    route.endLat * 43.758 + route.endLon * 31.415 + index * 2.417
  );
  return 0.42 + (seed % 1000) / 1000 * 1.16;
}

export function assignRouteVisualWeight(routes, year) {
  if (!routes.length) return [];

  const scale = eraVolumeScale(year);
  const withVolume = routes.map(function (route, i) {
    const base = ROUTE_VOLUME_BASE[route.color] || 30000;
    const volume = Math.round(base * scale * routeVolumeVariance(route, i));
    return Object.assign({}, route, { volume });
  });

  let maxVol = 0;
  withVolume.forEach(function (r) {
    if (r.volume > maxVol) maxVol = r.volume;
  });
  if (maxVol <= 0) maxVol = 1;

  return withVolume.map(function (route) {
    const norm = route.volume / maxVol;
    const weight = Math.sqrt(norm);
    return Object.assign({}, route, {
      stroke: 0.25 + weight * 2.0,
      altitude: 0.1 + weight * 0.28,
      dashTime: Math.round(2400 - weight * 1400),
      dashLength: 0.22 + weight * 0.35
    });
  });
}
