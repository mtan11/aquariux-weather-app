import { Dispatch, useEffect, useState } from 'react';

export const useBrowserMode = (): [
  string,
  Dispatch<React.SetStateAction<string>>,
] => {
  const [theme, setTheme] = useState<string>(localStorage.theme || 'light');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};
