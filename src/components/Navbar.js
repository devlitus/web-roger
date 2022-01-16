import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <p className="navigation__text">Pedagogia en moviment</p>
      </div>
      <div className="navigation__menu">
        <ul className="navigation__menu-list">
          <li className="navigation__menu-item">
            <Link to="/">Inici</Link>
          </li>
          <li className="navigation__menu-item">
            <Link to="/about">Serveis</Link>
          </li>
          <li className="navigation__menu-item">
            <Link to="/about">Sobre mi</Link>
          </li>
          <li className="navigation__menu-item">
            <Link to="/about">Campus</Link>
          </li>
          <li className="navigation__menu-item">
            <Link to="/about">Blog</Link>
          </li>
          <li className="navigation__menu-item">
            <Link to="/about">Contacte</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
