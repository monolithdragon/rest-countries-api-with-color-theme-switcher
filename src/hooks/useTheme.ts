import { useContext } from 'react';
import { ThemeContext } from 'contexts/theme_provider';

export function useTheme() {
  return useContext(ThemeContext);
}

