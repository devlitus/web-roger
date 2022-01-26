import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import { Link } from "react-router-dom";

export const Sidebar = ({ isSidebarOpen, handlerClickOpen }) => {
  return (
    <div
      className={`sidebar animate__animated 
      ${isSidebarOpen ? "animate__fadeInRight" : "animate__fadeOutRight"}
      `}
    >
      <div className="sidebar__close">
        <FontAwesomeIcon
          icon={faTimes}
          size="2x"
          color="wite"
          onClick={handlerClickOpen}
        />
      </div>
      <ul className="sidebar-menu-list">
        <li className="sidebar-menu-item">
          <Link to="/">Inici</Link>
        </li>
        <li className="sidebar-menu-item">
          <Link to="/service">Serveis</Link>
        </li>
        <li className="sidebar-menu-item">
          <Link to="/about">Sobre mi</Link>
        </li>
        <li className="sidebar-menu-item">
          <Link to="/about">Campus</Link>
        </li>
        <li className="sidebar-menu-item">
          <Link to="/about">Blog</Link>
        </li>
        <li className="sidebar-menu-item">
          <Link to="/about">Contacte</Link>
        </li>
      </ul>
    </div>
  );
};
