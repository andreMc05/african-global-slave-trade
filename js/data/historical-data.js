import { CENTURY_DATA } from './century-data.js';

function mergeEras(earlier, later) {
  const regions = earlier.regions.slice();
  later.regions.forEach(function (r) {
    if (regions.indexOf(r) === -1) regions.push(r);
  });
  const cultures = earlier.cultures.slice();
  later.cultures.forEach(function (c) {
    if (cultures.indexOf(c) === -1) cultures.push(c);
  });
  const routeKey = function (r) {
    return r.startLat + ',' + r.startLon + ',' + r.endLat + ',' + r.endLon;
  };
  const routeMap = {};
  earlier.routes.forEach(function (r) { routeMap[routeKey(r)] = r; });
  later.routes.forEach(function (r) { routeMap[routeKey(r)] = r; });
  const nationKey = function (n) {
    return n.startLat + ',' + n.startLon + ',' + n.endLat + ',' + n.endLon + ',' + n.color;
  };
  const nationMap = {};
  (earlier.nations || []).forEach(function (n) { nationMap[nationKey(n)] = n; });
  (later.nations || []).forEach(function (n) { nationMap[nationKey(n)] = n; });
  return {
    regions: regions.slice(0, 8),
    cultures: cultures.slice(0, 8),
    routes: Object.keys(routeMap).map(function (k) { return routeMap[k]; }),
    nations: Object.keys(nationMap).map(function (k) { return nationMap[k]; })
  };
}

export const HISTORICAL_DATA = {};
for (let y = 1400; y <= 1900; y += 50) {
  if (CENTURY_DATA[y]) {
    HISTORICAL_DATA[y] = CENTURY_DATA[y];
  } else {
    const base = Math.floor((y - 1400) / 100) * 100 + 1400;
    HISTORICAL_DATA[y] = mergeEras(CENTURY_DATA[base], CENTURY_DATA[base + 100]);
  }
}
