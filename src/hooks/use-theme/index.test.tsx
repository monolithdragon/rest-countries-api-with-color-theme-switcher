import { renderHook } from 'vitest-setup';
import { ThemeContext, ThemeContextType } from 'contexts/theme';
import { useTheme } from '.';

describe('useTheme', () => {
  it('useTheme hook throws an error when ThemeProvider is not available', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.error).toEqual(
      Error(
        'useTheme can only be used in the context of a ThemeProvider component.',
      ),
    );
  });

  it('useTheme hook returns the correct theme context', () => {
    const themeValue: ThemeContextType = {
      theme: 'light',
      saveTheme: vi.fn(),
      options: { save: true },
    };

    const wrapper = ({ children }: any) => (
      <ThemeContext.Provider value={themeValue}>
        {children}
      </ThemeContext.Provider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current).toBeDefined();
    expect(result.current).toEqual(themeValue);
  });
});
