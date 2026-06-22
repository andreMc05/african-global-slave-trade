import { INFLUENCE_TRADE_STATS } from '../data/trade-stats.js';

export function lerpValue(a, b, t) {
  if (a == null && b == null) return null;
  if (a == null) return b;
  if (b == null) return a;
  return Math.round(a + (b - a) * t);
}

export function resolveTradeStats(table, name, year) {
  const row = table[name];
  if (!row) return null;

  const eraStart = Math.floor((year - 1400) / 100) * 100 + 1400;
  const eraEnd = Math.min(eraStart + 100, 1900);
  const start = row[eraStart];
  const end = row[eraEnd];
  if (!start && !end) return null;

  const t = eraEnd === eraStart ? 0 : (year - eraStart) / (eraEnd - eraStart);
  return {
    exported: lerpValue(start ? start.exported : null, end ? end.exported : null, t),
    imported: lerpValue(start ? start.imported : null, end ? end.imported : null, t)
  };
}

export function resolveInfluenceTradeStats(type, year) {
  const eraStart = Math.floor((year - 1400) / 100) * 100 + 1400;
  const eraEnd = Math.min(eraStart + 100, 1900);
  const start = INFLUENCE_TRADE_STATS[eraStart] && INFLUENCE_TRADE_STATS[eraStart][type];
  const end = INFLUENCE_TRADE_STATS[eraEnd] && INFLUENCE_TRADE_STATS[eraEnd][type];
  if (!start && !end) return null;

  const t = eraEnd === eraStart ? 0 : (year - eraStart) / (eraEnd - eraStart);
  return {
    exported: lerpValue(start ? start.exported : null, end ? end.exported : null, t),
    imported: lerpValue(start ? start.imported : null, end ? end.imported : null, t)
  };
}

export function formatStatCount(value) {
  return '~' + value.toLocaleString('en-US');
}

export function periodLabel(year) {
  const endYear = Math.min(Number(year) + 50, 1900);
  return year + '–' + endYear + ' CE';
}
