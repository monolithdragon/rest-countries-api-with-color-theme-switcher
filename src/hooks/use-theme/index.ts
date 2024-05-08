import { ThemeContext, ThemeContextType } from 'contexts/theme';
import { useContext } from 'react';

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useTheme can only be used in the context of a ThemeProvider component.',
    );
  }

  return context;
}
