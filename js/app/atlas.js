import { INFLUENCE_COLORS, INFLUENCE_LABELS } from '../config/colors.js';
import { INFLUENCE_ZONES } from '../data/influence-zones.js';
import { REGION_DESCRIPTIONS, CULTURE_DESCRIPTIONS } from '../data/descriptions.js';
import { ENTITY_LOCATIONS } from '../data/entity-locations.js';
import { TRADE_STATS } from '../data/trade-stats.js';
import { HISTORICAL_DATA } from '../data/historical-data.js';
import { resolveTradeStats, resolveInfluenceTradeStats } from '../utils/stats.js';
import { assignRouteVisualWeight } from '../utils/routes.js';
import { createTooltipController } from '../ui/tooltip.js';
import { createStatsPanelController } from '../ui/stats-panel.js';
import { createGlobe } from './globe.js';

function hexToRgb(hex) {
  const c = hex.replace('#', '');
  return {
    r: parseInt(c.substring(0, 2), 16),
    g: parseInt(c.substring(2, 4), 16),
    b: parseInt(c.substring(4, 6), 16)
  };
}

export function initAtlas() {
  const globeElement = document.getElementById('globe-wrapper');
  const yearIndicator = document.getElementById('year-indicator');
  const timelineSlider = document.getElementById('timeline-slider');
  const regionsList = document.getElementById('regions-list');
  const culturesList = document.getElementById('cultures-list');
  const loadError = document.getElementById('load-error');
  const uiTooltip = document.getElementById('ui-tooltip');
  const layerBtnRoutes = document.getElementById('layer-btn-routes');
  const layerBtnNations = document.getElementById('layer-btn-nations');
  const legendRoutes = document.getElementById('legend-routes');
  const legendInfluences = document.getElementById('legend-influences');
  const legendNations = document.getElementById('legend-nations');
  const nationsEmptyNotice = document.getElementById('nations-empty-notice');

  const statsPanel = createStatsPanelController({
    selectionStats: document.getElementById('selection-stats'),
    statsTitle: document.getElementById('stats-title'),
    statsDescription: document.getElementById('stats-description'),
    statsExportRow: document.getElementById('stats-export-row'),
    statsImportRow: document.getElementById('stats-import-row'),
    statsExport: document.getElementById('stats-export'),
    statsImport: document.getElementById('stats-import'),
    statsPeriod: document.getElementById('stats-period'),
    influenceStats: document.getElementById('influence-stats'),
    influenceStatsTitle: document.getElementById('influence-stats-title'),
    influenceStatsExportRow: document.getElementById('influence-stats-export-row'),
    influenceStatsImportRow: document.getElementById('influence-stats-import-row'),
    influenceStatsExport: document.getElementById('influence-stats-export'),
    influenceStatsImport: document.getElementById('influence-stats-import'),
    influenceStatsPeriod: document.getElementById('influence-stats-period')
  });

  const tooltip = createTooltipController(uiTooltip);
  const globeController = createGlobe(globeElement, loadError);

  let world = globeController.init();
  let activeListItem = null;
  let activeInfluenceItem = null;
  let visualizationLayer = 'routes';

  function resetRingStyle() {
    if (!world) return;
    world.ringColor(function () {
      return function (t) { return 'rgba(0,229,255,' + (1 - t) + ')'; };
    });
    world.ringMaxRadius(4);
  }

  function setRingStyle(hexColor, maxRadius) {
    if (!world) return;
    const rgb = hexToRgb(hexColor);
    world.ringColor(function () {
      return function (t) {
        return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + (1 - t) + ')';
      };
    });
    world.ringMaxRadius(maxRadius || 5);
  }

  function getInfluenceEraKey(year) {
    return Math.min(1900, Math.max(1400, Math.floor((year - 1400) / 100) * 100 + 1400));
  }

  function zoneCentroid(zones) {
    let lat = 0;
    let lng = 0;
    zones.forEach(function (z) { lat += z.lat; lng += z.lng; });
    return { lat: lat / zones.length, lng: lng / zones.length };
  }

  function zoneAltitude(zones) {
    const c = zoneCentroid(zones);
    let maxDist = 0;
    zones.forEach(function (z) {
      const d = Math.sqrt(Math.pow(z.lat - c.lat, 2) + Math.pow(z.lng - c.lng, 2));
      if (d > maxDist) maxDist = d;
    });
    return Math.min(2.8, Math.max(1.55, 1.9 + maxDist * 0.035));
  }

  function getArcDataForYear(year, layer) {
    const era = HISTORICAL_DATA[year];
    if (!era) return [];
    const activeLayer = layer || visualizationLayer;
    return activeLayer === 'nations' ? (era.nations || []) : era.routes;
  }

  function updateNationsEmptyNotice(year) {
    if (!nationsEmptyNotice) return;
    const showNotice = visualizationLayer === 'nations' && getArcDataForYear(year, 'nations').length === 0;
    nationsEmptyNotice.classList.toggle('visible', showNotice);
  }

  function resolveYearForNationsLayer(year) {
    if (getArcDataForYear(year, 'nations').length) return year;

    let y;
    for (y = year + 50; y <= 1900; y += 50) {
      if (getArcDataForYear(y, 'nations').length) return y;
    }
    for (y = year - 50; y >= 1400; y -= 50) {
      if (getArcDataForYear(y, 'nations').length) return y;
    }
    return year;
  }

  function applyGlobeArcLayer(arcData, year, layer) {
    if (!world) return;

    const activeLayer = layer || visualizationLayer;
    const weighted = assignRouteVisualWeight(arcData, year).map(function (arc, index) {
      return Object.assign({}, arc, {
        _layerStamp: activeLayer + ':' + year + ':' + index
      });
    });

    updateNationsEmptyNotice(year);
    world.arcsTransitionDuration(0);
    world.arcsData([]);
    world.arcsData(weighted);
  }

  function clearInfluenceHighlight() {
    if (activeInfluenceItem) {
      activeInfluenceItem.classList.remove('active');
      activeInfluenceItem = null;
    }
    statsPanel.hideInfluenceStats();
  }

  function clearMapFocus() {
    if (activeListItem) {
      activeListItem.classList.remove('active');
      activeListItem = null;
    }
    clearInfluenceHighlight();
    statsPanel.hideSelectionStats();
    if (world) {
      world.pointsData([]);
      world.ringsData([]);
      world.labelsData([]);
      resetRingStyle();
    }
  }

  function highlightInfluence(type, legendEl) {
    if (!world) return;

    if (activeInfluenceItem === legendEl) {
      clearMapFocus();
      applyGlobeArcLayer(getArcDataForYear(Number(timelineSlider.value)), Number(timelineSlider.value));
      return;
    }

    const year = Number(timelineSlider.value);
    const eraKey = getInfluenceEraKey(year);
    const eraZones = INFLUENCE_ZONES[eraKey];
    if (!eraZones || !eraZones[type]) return;

    const zones = eraZones[type];
    const color = INFLUENCE_COLORS[type];

    if (activeListItem) {
      activeListItem.classList.remove('active');
      activeListItem = null;
    }
    clearInfluenceHighlight();
    activeInfluenceItem = legendEl;
    legendEl.classList.add('active');

    const centroid = zoneCentroid(zones);
    world.pointOfView({
      lat: centroid.lat,
      lng: centroid.lng,
      altitude: zoneAltitude(zones)
    }, 1400);

    setRingStyle(color, 5.5);

    world.pointsData(zones.map(function (z) {
      return { lat: z.lat, lng: z.lng, color, size: 0.42, name: z.label };
    }));

    world.ringsData(zones.map(function (z) {
      return { lat: z.lat, lng: z.lng };
    }));

    world.labelsData(zones.map(function (z) {
      return { lat: z.lat, lng: z.lng, text: z.label, color };
    }));

    statsPanel.showInfluenceStats(
      INFLUENCE_LABELS[type],
      resolveInfluenceTradeStats(type, year),
      year
    );
  }

  function focusMapEntity(name, listItem) {
    if (!world) return;

    if (activeListItem === listItem) {
      clearMapFocus();
      applyGlobeArcLayer(getArcDataForYear(Number(timelineSlider.value)), Number(timelineSlider.value));
      return;
    }

    const loc = ENTITY_LOCATIONS[name];
    if (!loc) return;

    const year = Number(timelineSlider.value);

    clearInfluenceHighlight();
    if (activeListItem) activeListItem.classList.remove('active');
    activeListItem = listItem;
    listItem.classList.add('active');

    resetRingStyle();
    world.pointOfView({ lat: loc.lat, lng: loc.lng, altitude: 1.65 }, 1400);

    world.pointsData([{
      lat: loc.lat,
      lng: loc.lng,
      color: loc.color,
      size: 0.55,
      name
    }]);

    world.ringsData([{ lat: loc.lat, lng: loc.lng }]);

    world.labelsData([{
      lat: loc.lat,
      lng: loc.lng,
      text: name,
      color: loc.color
    }]);

    statsPanel.showSelectionStats(
      name,
      resolveTradeStats(TRADE_STATS, name, year),
      year,
      CULTURE_DESCRIPTIONS[name] || REGION_DESCRIPTIONS[name] || ''
    );
  }

  function syncTimelineState(year) {
    const era = HISTORICAL_DATA[year];
    if (!era) return;

    clearMapFocus();
    yearIndicator.textContent = 'Year: ' + year + ' CE';

    regionsList.replaceChildren();
    culturesList.replaceChildren();

    era.regions.forEach(function (name) {
      const li = document.createElement('li');
      li.textContent = name;
      li.setAttribute('data-tooltip', REGION_DESCRIPTIONS[name] || 'A political entity active during this period of the African slave trade.');
      li.setAttribute('data-loc', name);
      li.setAttribute('tabindex', '0');
      li.setAttribute('role', 'button');
      li.addEventListener('click', function () { focusMapEntity(name, li); });
      li.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          focusMapEntity(name, li);
        }
      });
      regionsList.appendChild(li);
    });

    era.cultures.forEach(function (name) {
      const li = document.createElement('li');
      li.textContent = name;
      li.setAttribute('data-tooltip', CULTURE_DESCRIPTIONS[name] || 'A cultural community affected by or involved in forced migration during this era.');
      li.setAttribute('data-loc', name);
      li.setAttribute('tabindex', '0');
      li.setAttribute('role', 'button');
      li.addEventListener('click', function () { focusMapEntity(name, li); });
      li.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          focusMapEntity(name, li);
        }
      });
      culturesList.appendChild(li);
    });

    tooltip.bindTooltipEvents(regionsList);
    tooltip.bindTooltipEvents(culturesList);

    if (world) {
      applyGlobeArcLayer(getArcDataForYear(year, visualizationLayer), year, visualizationLayer);
    }
  }

  function setVisualizationLayer(mode) {
    const nextLayer = mode === 'nations' ? 'nations' : 'routes';
    visualizationLayer = nextLayer;

    layerBtnRoutes.classList.toggle('active', visualizationLayer === 'routes');
    layerBtnNations.classList.toggle('active', visualizationLayer === 'nations');
    legendRoutes.classList.toggle('hidden', visualizationLayer !== 'routes');
    legendInfluences.classList.toggle('hidden', visualizationLayer !== 'routes');
    legendNations.classList.toggle('hidden', visualizationLayer !== 'nations');

    if (visualizationLayer !== 'nations' && nationsEmptyNotice) {
      nationsEmptyNotice.classList.remove('visible');
    }

    let year = Number(timelineSlider.value);
    if (visualizationLayer === 'nations') {
      year = resolveYearForNationsLayer(year);
      if (Number(timelineSlider.value) !== year) {
        timelineSlider.value = String(year);
      }
    }

    syncTimelineState(year);
  }

  timelineSlider.addEventListener('input', function () {
    syncTimelineState(Number(timelineSlider.value));
  });

  layerBtnRoutes.addEventListener('click', function () {
    setVisualizationLayer('routes');
  });

  layerBtnNations.addEventListener('click', function () {
    setVisualizationLayer('nations');
  });

  window.addEventListener('resize', function () {
    globeController.resize();
    world = globeController.getWorld();
  });

  tooltip.bindTooltipEvents(document.body);

  document.querySelectorAll('.influence-item').forEach(function (el) {
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    el.addEventListener('click', function () {
      highlightInfluence(el.getAttribute('data-influence'), el);
    });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        highlightInfluence(el.getAttribute('data-influence'), el);
      }
    });
  });

  syncTimelineState(1400);
}
