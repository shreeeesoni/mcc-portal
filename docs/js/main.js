document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('toggleAllotment');
  const panel = document.getElementById('allotmentPanel');

  if (!toggle || !panel) return;

  toggle.addEventListener('click', function () {
    const isOpen = panel.classList.toggle('visible');
    panel.setAttribute('aria-hidden', (!isOpen).toString());
    toggle.textContent = isOpen ? 'Close' : 'Open';
  });
});
