import { Outlet, Link } from 'react-router-dom';
import Footer from '../shared/Footer';

const Navbar = () => {
  return (
    <div>
      {/* navigation: to be moved to navbar */}
      <nav>
        <Link to={`/`}>Home</Link>
        <Link to={`story`}>Our Story</Link>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Navbar;
