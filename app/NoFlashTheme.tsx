export function NoFlashTheme() {
  const script = `(() => {
    try {
      const d = document.documentElement;
      d.classList.add('dark');
      d.setAttribute('data-theme', 'dark');
    } catch (_) {}
  })();`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
