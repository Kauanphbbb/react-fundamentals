import React, { createContext, useEffect, useMemo, useState } from 'react';

import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import GlobalStyle from './styles/global';
import themes from './styles/themes';

export const ToggleThemeContext = createContext();

function App() {
  function getSavedTheme() {
    return localStorage.getItem('theme') || 'dark';
  }

  const [theme, setTheme] = useState(getSavedTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <ToggleThemeContext.Provider
        value={{ selectedTheme: theme, onToggleTheme: handleToggleTheme }}
      >
        <Layout />
      </ToggleThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
