import Header from 'components/header';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
