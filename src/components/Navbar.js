import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import ChangeLanguage from "./ChangeLanguge";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVisibility, setIsVisibility] = useState(false);
  const { t } = useTranslation();

  const handlerClickOpen = () => {
    setIsVisibility(true);
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <p className="navigation__text">{t("home.textHeader")}</p>
      </div>
      <div className="navigation__menu">
        <div className="navigator__menu-movil">
          <FontAwesomeIcon icon={faBars} size="2x" onClick={handlerClickOpen} />
        </div>
        {isVisibility && (
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            handlerClickOpen={handlerClickOpen}
          />
        )}

        <ul className="navigation__menu-list">
          <li className="navigation__menu-item">
            <Link to="/">{t("home.pathUrl")}</Link>
          </li>
          <li className="navigation__menu-item">
            <Link to="/service">{t("service.pathUrl")}</Link>
          </li>
          <li className="navigation__menu-item">
            <Link to="/about">{t("about.pathUrl")}</Link>
          </li>
          <li className="navigation__menu-item">
            <Link to="/about">Campus</Link>
          </li>
          <li className="navigation__menu-item">
            <Link to="/about">Blog</Link>
          </li>
          <li className="navigation__menu-item">
            <Link to="/contact"> {t("contact.pathUrl")}</Link>
          </li>
          <ChangeLanguage />
        </ul>
      </div>
    </nav>
  );
};
