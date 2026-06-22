import { formatStatCount, periodLabel } from '../utils/stats.js';

export function createStatsPanelController(elements) {
  const {
    selectionStats,
    statsTitle,
    statsDescription,
    statsExportRow,
    statsImportRow,
    statsExport,
    statsImport,
    statsPeriod,
    influenceStats,
    influenceStatsTitle,
    influenceStatsExportRow,
    influenceStatsImportRow,
    influenceStatsExport,
    influenceStatsImport,
    influenceStatsPeriod
  } = elements;

  function hideSelectionStats() {
    selectionStats.classList.remove('visible');
  }

  function hideInfluenceStats() {
    influenceStats.classList.remove('visible');
  }

  function renderStatsDisplay(opts, title, stats, year, description) {
    const hasStats = stats && (stats.exported != null || stats.imported != null);
    const hasDescription = Boolean(description);

    if (!hasStats && !hasDescription) {
      opts.panel.classList.remove('visible');
      return;
    }

    opts.titleEl.textContent = title;

    if (opts.descriptionEl) {
      if (hasDescription) {
        opts.descriptionEl.textContent = description;
        opts.descriptionEl.style.display = 'block';
      } else {
        opts.descriptionEl.textContent = '';
        opts.descriptionEl.style.display = 'none';
      }
    }

    if (hasStats) {
      if (stats.exported != null) {
        opts.exportEl.textContent = formatStatCount(stats.exported);
        opts.exportRow.classList.remove('hidden');
      } else {
        opts.exportRow.classList.add('hidden');
      }

      if (stats.imported != null) {
        opts.importEl.textContent = formatStatCount(stats.imported);
        opts.importRow.classList.remove('hidden');
      } else {
        opts.importRow.classList.add('hidden');
      }

      opts.periodEl.textContent =
        'Estimated for ' + periodLabel(year) +
        '. Figures are scholarly approximations of forced migration volume where applicable.';
      opts.periodEl.style.display = 'block';
    } else {
      opts.exportRow.classList.add('hidden');
      opts.importRow.classList.add('hidden');
      opts.periodEl.style.display = 'none';
    }

    opts.panel.classList.add('visible');
  }

  function showSelectionStats(title, stats, year, description) {
    hideInfluenceStats();
    renderStatsDisplay({
      panel: selectionStats,
      titleEl: statsTitle,
      descriptionEl: statsDescription,
      exportRow: statsExportRow,
      exportEl: statsExport,
      importRow: statsImportRow,
      importEl: statsImport,
      periodEl: statsPeriod
    }, title, stats, year, description);
  }

  function showInfluenceStats(title, stats, year) {
    hideSelectionStats();
    renderStatsDisplay({
      panel: influenceStats,
      titleEl: influenceStatsTitle,
      exportRow: influenceStatsExportRow,
      exportEl: influenceStatsExport,
      importRow: influenceStatsImportRow,
      importEl: influenceStatsImport,
      periodEl: influenceStatsPeriod
    }, title, stats, year);
  }

  return {
    hideSelectionStats,
    hideInfluenceStats,
    showSelectionStats,
    showInfluenceStats
  };
}
