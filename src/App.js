import React, { useContext } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';
import GlobalStyle from './styles/global';
import themes from './styles/themes';

function App() {
  const context = useContext(ThemeContext);
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <StyledThemeProvider theme={themes[theme] || themes.dark}>
            <GlobalStyle />
            <Layout />
          </StyledThemeProvider>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}

export default App;
