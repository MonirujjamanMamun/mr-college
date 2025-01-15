import { Outlet } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import NavSearch from './components/NavBar/NavSearch';
import Footer from './components/Footer/Footer';
import FooterBottom from './components/Footer/FooterBottom';

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <NavSearch />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default MainLayout;
