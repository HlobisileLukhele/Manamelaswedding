import { Outlet, Link } from 'react-router-dom';
import Footer from '../shared/Footer';

const Navbar = () => {
  return (
    <div>
      {/* navigation: to be moved to navbar */}
      <nav>
        <Link to={`/`}>Home</Link>
        <Link to={`story`}>Our Story</Link>
        <Link to={`Accommodation`}>Acoommodation</Link>
        <Link to={`Schedule`}>Schedule</Link>
        <Link to={`Gallery`}>Acoommodation</Link>
        <Link to={`Registry`}>Registry</Link>

      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Navbar;
