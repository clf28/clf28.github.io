(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  if (!button) return;
  let storedTheme;
  try { storedTheme = localStorage.getItem('lifeng-theme'); } catch (_) { /* Storage may be unavailable. */ }
  function setTheme(theme) {
    root.dataset.theme = theme;
    const dark = theme === 'dark';
    button.setAttribute('aria-pressed', String(dark));
    button.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  }
  setTheme(storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'light');
  button.hidden = false;
  button.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(theme);
    try { localStorage.setItem('lifeng-theme', theme); } catch (_) { /* The toggle still works without persistence. */ }
  });
})();
