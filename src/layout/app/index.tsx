import { Outlet } from 'react-router-dom';

function AppLayout() {
	return (
		<div>
			<header></header>
			<main>
				<Outlet />
			</main>
			<footer></footer>
		</div>
	);
}

export default AppLayout;
