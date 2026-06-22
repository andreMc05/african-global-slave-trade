export function createGlobe(globeElement, loadError) {
  let world = null;

  function applyPolygons(features) {
    if (!world || !features || !features.length) return;
    world.polygonsData(features);
  }

  function loadTopology() {
    const primaryUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-110m.json';
    const fallbackUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

    fetch(primaryUrl)
      .then(function (res) {
        if (!res.ok) throw new Error('Primary TopoJSON CDN returned ' + res.status);
        return res.json();
      })
      .then(function (topology) {
        const countries = topojson.feature(topology, topology.objects.countries);
        applyPolygons(countries.features);
      })
      .catch(function () {
        return fetch(fallbackUrl)
          .then(function (res) {
            if (!res.ok) throw new Error('Fallback TopoJSON CDN returned ' + res.status);
            return res.json();
          })
          .then(function (topology) {
            const countries = topojson.feature(topology, topology.objects.countries);
            applyPolygons(countries.features);
          });
      })
      .catch(function () {
        return fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
          .then(function (res) {
            if (!res.ok) throw new Error('Fallback GeoJSON returned ' + res.status);
            return res.json();
          })
          .then(function (geo) {
            applyPolygons(geo.features);
          });
      })
      .catch(function (err) {
        console.error('All topology sources failed:', err);
        loadError.style.display = 'block';
      });
  }

  function init() {
    try {
      world = Globe()(globeElement)
        .backgroundColor('#05050a')
        .showAtmosphere(true)
        .atmosphereColor('#00b4dc')
        .atmosphereAltitude(0.18)
        .polygonCapColor(function () { return 'rgba(30, 41, 59, 0.85)'; })
        .polygonSideColor(function () { return 'rgba(15, 23, 42, 0.6)'; })
        .polygonStrokeColor(function () { return '#475569'; })
        .polygonAltitude(0.006)
        .arcStartLat(function (d) { return d.startLat; })
        .arcStartLng(function (d) { return d.startLon; })
        .arcEndLat(function (d) { return d.endLat; })
        .arcEndLng(function (d) { return d.endLon; })
        .arcColor(function (d) { return d.color; })
        .arcAltitude(function (d) { return d.altitude != null ? d.altitude : 0.22; })
        .arcStroke(function (d) { return d.stroke != null ? d.stroke : 0.6; })
        .arcDashLength(function (d) { return d.dashLength != null ? d.dashLength : 0.4; })
        .arcDashGap(0.2)
        .arcDashAnimateTime(function (d) { return d.dashTime != null ? d.dashTime : 1500; })
        .arcsTransitionDuration(800)
        .pointLat('lat')
        .pointLng('lng')
        .pointColor('color')
        .pointRadius('size')
        .pointAltitude(0.025)
        .ringsData([])
        .ringColor(function () { return function (t) { return 'rgba(0,229,255,' + (1 - t) + ')'; }; })
        .ringMaxRadius(4)
        .ringPropagationSpeed(2.5)
        .ringRepeatPeriod(1400)
        .labelLat('lat')
        .labelLng('lng')
        .labelText('text')
        .labelColor('color')
        .labelSize(0.45)
        .labelDotRadius(0.4)
        .labelDotOrientation(function () { return 'top'; })
        .labelAltitude(0.03)
        .labelsData([])
        .width(window.innerWidth)
        .height(window.innerHeight);

      const globeMat = world.globeMaterial();
      if (globeMat && globeMat.color) {
        globeMat.color.set('#0a1628');
        globeMat.emissive && globeMat.emissive.set('#050510');
        globeMat.shininess = 8;
      }

      world.pointOfView({ lat: 5, lng: 12, altitude: 2.2 }, 0);
      world.controls().autoRotate = false;

      loadTopology();
      return world;
    } catch (err) {
      console.error('Globe initialization failed:', err);
      loadError.style.display = 'block';
      loadError.textContent = 'Globe renderer failed to initialize.';
      return null;
    }
  }

  function resize() {
    if (world) {
      world.width(window.innerWidth).height(window.innerHeight);
    }
  }

  return {
    init,
    resize,
    getWorld: function () { return world; }
  };
}
