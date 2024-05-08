import { createContext } from 'react';

export type Theme = 'light' | 'dark';

export type ThemeOptions = {
  theme?: Theme;
  save?: boolean;
};

export type ThemeContextType = {
  theme: Theme;
  saveTheme(theme: Theme): void;
  options?: ThemeOptions;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);
