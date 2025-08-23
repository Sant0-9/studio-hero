export function NoFlashTheme() {
  const script = `(() => {
    try {
      const d = document.documentElement;
      const stored = localStorage.getItem('theme');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isValid = stored === 'light' || stored === 'dark' || stored === 'system';
      const theme = isValid ? stored : null;
      const resolved = (theme === 'dark') || (theme === 'system' ? prefersDark : (theme === null ? prefersDark : theme === 'dark')) ? 'dark' : 'light';
      if (resolved === 'dark') {
        d.classList.add('dark');
      } else {
        d.classList.remove('dark');
      }
      d.setAttribute('data-theme', resolved);
    } catch (_) {}
  })();`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
