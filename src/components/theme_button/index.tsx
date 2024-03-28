import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { useTheme } from 'hooks/useTheme';
import './theme_button.css';

function ThemeButton() {
	const {theme, saveTheme} = useTheme();

	const handleDarkMode = () => {
		saveTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<button
			className='toggle-button'
			onClick={handleDarkMode}>
			{theme === 'dark' ? <IoMoon /> : <IoMoonOutline />}
			Dark Mode
		</button>
	);
}

export default ThemeButton;
