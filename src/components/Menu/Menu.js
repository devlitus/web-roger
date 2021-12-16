import { Link } from "react-router-dom";
import "./Menu.css";

export const Menu = ({handlerSidebar}) => {
  const handlerClick = () => {
    handlerSidebar();
  }
  return (
    <div className="menu">
      <nav className="menu__navigation">
        <Link to="/" onClick={handlerClick}>Inici</Link>
        <Link to="/about" onClick={handlerClick} >Roger Llopart</Link>
        <Link to="/service" onClick={handlerClick}>Serveis i projectes</Link>
      </nav>
    </div>
  );
};
