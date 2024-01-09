import { useEffect, useState } from 'react';

export function useLocalStorageTheme() {
  function getSavedTheme() {
    return localStorage.getItem('theme') || 'dark';
  }

  const [theme, setTheme] = useState(getSavedTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
}
