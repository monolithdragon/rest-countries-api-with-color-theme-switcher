import { fireEvent, render, screen } from 'vitest-setup';
import { useTheme } from 'hooks/use-theme';
import ThemeProvider from '.';

describe('ThemeProvider', () => {
  it('should toggle theme from light to dark', () => {
    const TestComponent = () => {
      const { theme, saveTheme } = useTheme();

      const toggleTheme = () => {
        saveTheme(theme === 'light' ? 'dark' : 'light');
      };

      return (
        <div>
          <span>{theme}</span>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
      );
    };

    render(<TestComponent />, { wrapper: ThemeProvider });

    expect(screen.getByText('light')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Toggle Theme'));
    expect(screen.getByText('dark')).toBeInTheDocument();
  });

  it('setup option to dark and save to localstorage', () => {
    const TestComponent = () => {
      const { theme, saveTheme } = useTheme();

      const toggleTheme = () => {
        saveTheme(theme === 'light' ? 'dark' : 'light');
      };

      return (
        <div>
          <span>{theme}</span>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
      );
    };

    render(
      <ThemeProvider options={{ save: true }}>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByText('light')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Toggle Theme'));
    expect(screen.getByText('dark')).toBeInTheDocument();
  });
});
