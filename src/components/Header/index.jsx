import logo from '../../assets/LOGO_KASA.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="navbar" id="navbar">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="logo" id="logo" />
        </NavLink>
        <ul className="navLinks">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
              À propos
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;