export function initMobilePanels() {
  const leftDrawer = document.querySelector('#left-panel .panel-drawer');
  const rightDrawer = document.querySelector('#right-panel .panel-drawer');
  if (!leftDrawer || !rightDrawer) return;

  const mobileQuery = window.matchMedia('(max-width: 900px)');

  function syncDrawerMode() {
    if (mobileQuery.matches) {
      leftDrawer.removeAttribute('open');
      rightDrawer.removeAttribute('open');
    } else {
      leftDrawer.setAttribute('open', '');
      rightDrawer.setAttribute('open', '');
    }
  }

  function closeOtherDrawer(source) {
    if (!mobileQuery.matches) return;
    const other = source === leftDrawer ? rightDrawer : leftDrawer;
    if (source.open) other.removeAttribute('open');
  }

  leftDrawer.addEventListener('toggle', function () {
    closeOtherDrawer(leftDrawer);
  });

  rightDrawer.addEventListener('toggle', function () {
    closeOtherDrawer(rightDrawer);
  });

  mobileQuery.addEventListener('change', syncDrawerMode);
  syncDrawerMode();
}
