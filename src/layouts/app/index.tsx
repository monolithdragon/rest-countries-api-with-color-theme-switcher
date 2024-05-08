import Header from 'components/header';
import { Outlet } from 'react-router-dom';
import ThemeProvider from 'services/providers/theme';

function AppLayout() {
  return (
    <ThemeProvider options={{ save: true }}>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default AppLayout;
