import { createContext, useContext } from 'react';

const ThemeContext = createContext({
  cellSize: '1.5rem',
  // other theme properties
});

export const ThemeProvider = ThemeContext.Provider;
export const useTheme = () => useContext(ThemeContext);
