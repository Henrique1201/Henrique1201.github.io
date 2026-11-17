const themeButton = document.querySelector('.theme-toggle');
const english = document.documentElement.lang.startsWith('en');
const storedTheme = localStorage.getItem('portfolio-theme');
if (storedTheme === 'dark') document.documentElement.dataset.theme = 'dark';

function syncThemeLabel() {
  const dark = document.documentElement.dataset.theme === 'dark';
  themeButton?.setAttribute('aria-label', english
    ? (dark ? 'Switch to light theme' : 'Switch to dark theme')
    : (dark ? 'Ativar tema claro' : 'Ativar tema escuro'));
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#161616' : '#f5f3ed');
}
syncThemeLabel();

themeButton?.addEventListener('click', () => {
  const dark = document.documentElement.dataset.theme === 'dark';
  document.documentElement.dataset.theme = dark ? 'light' : 'dark';
  localStorage.setItem('portfolio-theme', dark ? 'light' : 'dark');
  syncThemeLabel();
});

document.getElementById('year').textContent = new Date().getFullYear();
