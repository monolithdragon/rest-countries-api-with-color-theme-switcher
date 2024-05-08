import { Button } from 'components/ui/button';
import { useTheme } from 'hooks/use-theme';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

function ThemeButton() {
  const { theme, saveTheme } = useTheme();

  const toggleTheme = () => {
    saveTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      type="button"
      className="gap-2 hover:scale-105 focus:scale-105"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <IoMoonOutline /> : <IoMoon />}
      <span>Dark Mode</span>
    </Button>
  );
}

export default ThemeButton;
