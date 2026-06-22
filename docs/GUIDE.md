# Global African Slave Trade — Interactive Atlas

## What this app is

The **Global African Slave Trade Interactive Atlas** is a browser-based 3D map that explores forced migration across Africa and the wider world from **1400 to 1900 CE**. It combines a rotating globe with a historical timeline so you can see how trade routes, political powers, and affected cultures changed over five centuries.

The atlas covers three major forced-migration networks:

- **Trans-Atlantic** — West and Central African ports to the Americas and Caribbean
- **Trans-Saharan** — Sub-Saharan Africa across the Sahara to North Africa and the Middle East
- **Indian Ocean / Red Sea** — East African coast to Arabia, Persia, and South Asia

Beyond routes, the app shows **kingdoms and empires**, **cultural communities**, and **dominant religious and political influences** active in each era. Export and import figures are scholarly approximations for the selected 50-year window — not live database extracts.

---

## Getting started

### Viewing online

If the project is deployed (for example via GitHub Pages), open the site URL in a modern browser (Chrome, Firefox, Safari, or Edge).

### Running locally

The app uses JavaScript modules, so it must be served over HTTP — opening `index.html` directly from the filesystem will not work.

From the project root:

```bash
python3 -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080).

---

## Interface overview

| Area | Location | Purpose |
|------|----------|---------|
| **Globe** | Full screen (background) | 3D map with animated route arcs, country outlines, and focus highlights |
| **Left panel** | Top left | Layer toggle, route/influence legends, and quick data-source links |
| **Right panel** | Top right | Active regions, empires, and cultures for the current year |
| **Timeline** | Bottom center | Year selector (1400–1900 CE in 50-year steps) |
| **Stats panel** | Bottom right | Appears when you select a region, culture, or influence |
| **Data Sources** | Bottom left | Expandable list of reference materials |

Hover over headings and legend items for short tooltips with extra context.

---

## How to use the app

### 1. Explore the timeline

Use the slider at the bottom to move through history in **50-year steps** from 1400 to 1900 CE. The year display updates immediately, and the globe refreshes to show:

- Migration routes (or imperial fleet paths, depending on layer)
- Updated lists of active regions and cultures in the right panel

Each time you change the year, any map focus (selected region, culture, or influence) is cleared so you start fresh for that period.

### 2. Switch visualization layers

In the left panel under **Visualization Layers**, choose:

#### Migration Paths (default)

Shows forced migration corridors as glowing arcs on the globe. Arc **thickness**, **height**, and **animation speed** reflect estimated trade volume for that period — busier routes appear thicker and more prominent.

Route colors:

| Color | Route type |
|-------|------------|
| Orange | Trans-Atlantic |
| Cyan | Trans-Saharan |
| Purple | Indian Ocean / Red Sea |

#### Western Powers

Shows imperial fleet trajectories from European capitals and American ports toward African coastal extraction zones, color-coded by power:

| Color | Power |
|-------|-------|
| Red | Portugal / Brazil |
| Amber | Great Britain |
| Blue | France |
| Green | Spain |
| Light cyan | United States |

Fleet data is not available for every year. If nothing is mapped for the selected period, a notice appears and the timeline may snap to the nearest year that has fleet vectors (1450 CE or later).

### 3. Highlight dominant influences

While on the **Migration Paths** layer, click an item under **Dominant Influences** in the left panel:

- Traditional African Religions
- Islamic Empires
- Christian Colonial Powers

The globe flies to the combined heartland of that influence, marks key locations with points and labels, and shows estimated export/import figures for the current 50-year window in the left panel.

Click the same influence again to deselect it and restore the default route view.

### 4. Focus on a region or culture

In the **right panel**, click any entry under:

- **Active Regions & Empires** — kingdoms, sultanates, and colonial territories
- **Prominent Cultures & Peoples** — ethnic and cultural communities

The globe animates to that location, highlights it with a pulsing ring, and opens the **Enslaved People** stats panel with:

- A short historical description
- Estimated **Exported** and/or **Imported** counts for the current period

Click the same entry again to clear the focus.

### 5. Navigate the globe directly

- **Drag** to rotate the globe
- **Scroll** (or pinch on trackpad) to zoom in and out

The globe does not auto-rotate; you control the view at all times.

---

## Understanding the data

All route volumes, regional timelines, and export/import estimates are **synthesized approximations** informed by historical research — not direct copies from any single database.

Primary reference sources include:

- [SlaveVoyages — Trans-Atlantic Slave Trade Database](https://www.slavevoyages.org/)
- [UNESCO — Routes of Enslaved Peoples](https://www.unesco.org/en/routes-enslaved-peoples)
- [National Geographic — Three Slave Trades](https://www.nationalgeographic.com/history/article/how-slavery-helped-build-a-world-economy)
- [UK National Archives — Slavery & Slave Owners](https://www.nationalarchives.gov.uk/help-with-your-research/research-guides/slavery-or-slave-owners/)

Map topology comes from [world-atlas (TopoJSON)](https://github.com/topojson/world-atlas) and [Natural Earth](https://www.naturalearthdata.com/). The 3D globe is rendered with [globe.gl](https://github.com/vasturiano/globe.gl).

Figures shown with a `~` prefix (for example `~22,000`) are rounded estimates for the displayed 50-year span.

---

## Keyboard and accessibility

- Region, culture, and influence legend items are keyboard-focusable. Press **Enter** or **Space** to activate them.
- Stats panels use `aria-live` regions so screen readers announce updated figures when selections change.
- Tooltips appear on hover and keyboard focus for supported elements.

---

## Troubleshooting

| Issue | What to try |
|-------|-------------|
| Blank page or module errors | Run a local HTTP server (see [Running locally](#running-locally)) |
| Globe loads but no country outlines | Check your network connection; the app fetches map topology from CDN fallbacks |
| No Western Power routes for a year | Move the timeline to 1450 CE or later |
| Stats panel does not appear | Click a region, culture, or influence item first |

If map topology fails entirely, a red alert appears at the bottom of the screen. Routes may still display without country polygons.

---

## Project structure (for developers)

```
index.html              HTML shell and UI markup
css/styles.css          Styles
js/
  main.js               Application entry point
  config/colors.js      Color constants and influence labels
  data/                 Historical datasets (routes, stats, descriptions)
  utils/                Stat interpolation and route visual weighting
  ui/                   Tooltip and stats panel controllers
  app/                  Globe initialization and main atlas logic
```

To change historical content, edit files under `js/data/`. To adjust styling, edit `css/styles.css`. No build step is required — the app runs as native ES modules in the browser.
