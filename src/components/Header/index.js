import React, { useContext } from 'react';

import { ToggleThemeContext } from '../../App';
import { Container } from './styles';

export default function Header() {
  const { onToggleTheme, selectedTheme } = useContext(ToggleThemeContext);
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button type="button" onClick={onToggleTheme}>
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}
