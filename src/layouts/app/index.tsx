import Header from 'components/header';
import { Outlet } from 'react-router-dom';
import DataProvider from 'services/providers/data';
import ThemeProvider from 'services/providers/theme';

function AppLayout() {
  return (
    <ThemeProvider options={{ save: true }}>
      <Header />
      <DataProvider>
        <Outlet />
      </DataProvider>
    </ThemeProvider>
  );
}

export default AppLayout;
