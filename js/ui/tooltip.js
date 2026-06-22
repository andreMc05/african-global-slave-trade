export function createTooltipController(uiTooltip) {
  function bindTooltipEvents(root) {
    root.querySelectorAll('[data-tooltip]').forEach(function (el) {
      if (el.dataset.tipBound) return;
      el.dataset.tipBound = '1';
      el.addEventListener('mouseenter', showTooltip);
      el.addEventListener('focus', showTooltip);
      el.addEventListener('mouseleave', hideTooltip);
      el.addEventListener('blur', hideTooltip);
    });
  }

  function showTooltip(e) {
    const el = e.currentTarget;
    const text = el.getAttribute('data-tooltip');
    if (!text) return;
    uiTooltip.textContent = text;
    uiTooltip.classList.add('visible');
    uiTooltip.setAttribute('aria-hidden', 'false');
    positionTooltip(el);
  }

  function hideTooltip() {
    uiTooltip.classList.remove('visible');
    uiTooltip.setAttribute('aria-hidden', 'true');
  }

  function positionTooltip(el) {
    const rect = el.getBoundingClientRect();
    const gap = 10;
    const pad = 12;
    const timelineEl = document.getElementById('timeline-container');
    const timelineTop = timelineEl
      ? timelineEl.getBoundingClientRect().top
      : window.innerHeight - 120;
    const bottomLimit = timelineTop - gap;
    const inRightPanel = Boolean(el.closest('.ui-panel.right'));
    const inLeftPanel = Boolean(el.closest('.ui-panel.left'));

    uiTooltip.style.left = '-9999px';
    uiTooltip.style.top = '0';
    const tipW = uiTooltip.offsetWidth;
    const tipH = uiTooltip.offsetHeight;

    let left;
    let top;

    if (inRightPanel) {
      left = rect.left - tipW - gap;
      top = rect.top;
      if (left < pad) {
        left = Math.max(pad, rect.left);
        top = rect.top - tipH - gap;
        if (top < pad) top = rect.bottom + gap;
      }
    } else if (inLeftPanel) {
      left = rect.left;
      top = rect.bottom + gap;
      if (top + tipH > bottomLimit) top = rect.top - tipH - gap;
    } else {
      left = rect.left;
      top = rect.bottom + gap;
      if (top + tipH > bottomLimit) top = rect.top - tipH - gap;
    }

    if (top + tipH > bottomLimit) top = bottomLimit - tipH;
    if (top < pad) top = pad;

    if (left + tipW > window.innerWidth - pad) {
      left = window.innerWidth - tipW - pad;
    }
    if (left < pad) left = pad;

    uiTooltip.style.left = left + 'px';
    uiTooltip.style.top = top + 'px';
  }

  return { bindTooltipEvents, hideTooltip };
}
