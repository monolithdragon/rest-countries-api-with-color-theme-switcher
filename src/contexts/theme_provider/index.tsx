import React, { useCallback, useEffect, useState } from "react";

type Theme = 'light' | 'dark';

type ThemeOptions = {
  theme?: Theme;
  save?: boolean;
};

type ThemeContextType = {
  theme: Theme;
  saveTheme: (theme: Theme) => void;
  options?: ThemeOptions;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'light',
  saveTheme: () => {},
  options: {theme: 'light', save: true}
});

type ThemeProviderProps = {
  children: React.ReactNode;
  options?: ThemeOptions;
};

function getPreferredTheme() {
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
};

function getStoredTheme() {
    return localStorage.getItem('theme') as Theme;
};

function storeTheme(theme: Theme) {
    localStorage.setItem('theme', theme);
};

export function ThemeProvider({children, options = {}}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(options?.theme || 'light');
  
  const getTheme = () => {
    return options?.theme || getPreferredTheme() || getStoredTheme();
  };

  useEffect(() => {
    const savedTheme = getTheme();
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
}, [theme]);

const handleThemeChange = useCallback((theme: Theme) => {
    if (options?.save) {
        storeTheme(theme);
    }

    setTheme(theme);
}, []);

  return <ThemeContext.Provider value={{theme, saveTheme: handleThemeChange, options}}>{children}</ThemeContext.Provider>;
};


