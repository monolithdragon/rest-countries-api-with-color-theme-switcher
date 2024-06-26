import { Button } from 'components/ui/button';
import { useTheme } from 'hooks/use-theme';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

function ThemeButton() {
  const { theme, saveTheme } = useTheme();

  const toggleTheme = () => {
    saveTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <Button
        type="button"
        className="gap-2 hover:border-b hover:border-solid focus-visible:border-b focus-visible:border-solid"
        onClick={toggleTheme}
      >
        {theme === 'light' ? <IoMoonOutline /> : <IoMoon />}
        <span>Dark Mode</span>
      </Button>
    </div>
  );
}

export default ThemeButton;
