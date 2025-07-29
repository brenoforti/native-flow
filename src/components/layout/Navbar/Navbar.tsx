import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Native Flow
        </NavLink>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={menuOpen ? 'bar1-open' : ''} />
          <div className={menuOpen ? 'bar2-open' : ''} />
          <div className={menuOpen ? 'bar3-open' : ''} />
        </div>
        <nav className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
          <NavLink to="/" className="nav-link" onClick={closeMobileMenu}>Inicio</NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeMobileMenu}>Sobre Mim</NavLink>
          <NavLink to="/methodology" className="nav-link" onClick={closeMobileMenu}>Metodologia das Aulas</NavLink>
          <NavLink to="/contact" className="nav-link nav-button" onClick={closeMobileMenu}>Fale Conosco</NavLink>
        </nav>
      </div>
    </header>
  );
}