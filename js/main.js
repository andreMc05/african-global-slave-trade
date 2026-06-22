import { initAtlas } from './app/atlas.js';
import { initMobilePanels } from './ui/mobile-panels.js';

document.addEventListener('DOMContentLoaded', function () {
  initMobilePanels();
  initAtlas();
});
