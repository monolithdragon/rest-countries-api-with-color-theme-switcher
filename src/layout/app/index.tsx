import { ThemeProvider } from 'contexts/theme_provider';
import DarkModeButton from 'components/theme_button';
import { Outlet } from 'react-router-dom';
import './app.css';

function AppLayout() {
	return (
		<ThemeProvider>
			<div className='layout'>
				<header className='header-wrapper'>
					<div className='container'>
						<div className='flex'>
							<h2>Where in the world?</h2>
							<DarkModeButton />
						</div>
					</div>
				</header>
				<main className='container'>
					<Outlet />
				</main>
			</div>
		</ThemeProvider>
	);
}

export default AppLayout;
