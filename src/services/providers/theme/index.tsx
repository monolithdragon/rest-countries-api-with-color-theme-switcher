import { Theme, ThemeContext, ThemeOptions } from 'contexts/theme';
import { useLocalStorage } from 'hooks/use-local-storage';
import React, { useCallback, useEffect, useState } from 'react';

const THEME_STORAGE_KEY = 'theme';

type Props = {
  children: React.ReactNode;
  options?: ThemeOptions;
};

function ThemeProvider({ children, options = {} }: Props) {
  const [theme, setTheme] = useState<Theme>(options?.theme || 'light');
  const { getItem, setItem } = useLocalStorage(THEME_STORAGE_KEY);

  useEffect(() => {
    const value = options?.theme || getItem();
    if (value) setTheme(value);
  }, []);

  // Update the data-theme attribute on body whenever theme changes
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const handleChangedTheme = useCallback((value: Theme) => {
    // Save theme preference to local storage if save option is enabled
    if (options?.save) {
      setItem(value);
    }

    setTheme(value);
  }, []);

  const contextValue = { theme, saveTheme: handleChangedTheme, options };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
