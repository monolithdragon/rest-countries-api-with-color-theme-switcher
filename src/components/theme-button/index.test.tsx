import { fireEvent, render } from 'vitest-setup';
import ThemeButton from '.';
import ThemeProvider from 'services/providers/theme';

describe('ThemeButton', () => {
  it('renders a theme button element by default', () => {
    const { container } = render(<ThemeButton />, { wrapper: ThemeProvider });

    expect(container).toBeInTheDocument();
    expect(container.textContent).toBe('Dark Mode');
  });

  it('should toggle between dark and light mode', () => {
    const { getByRole } = render(<ThemeButton />, { wrapper: ThemeProvider });

    const button = getByRole('button', { name: /dark mode/i });

    expect(document.body).not.toHaveAttribute('data-theme', 'dark');

    fireEvent.click(button);
    expect(document.body).toHaveAttribute('data-theme', 'dark');

    fireEvent.click(button);
    expect(document.body).toHaveAttribute('data-theme', 'light');
  });
});
