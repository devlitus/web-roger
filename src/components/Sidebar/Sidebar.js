import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { SelectLanguages } from "../SelectLanguage/SelectLanguage";

export const Sidebar = ({ handleClick, isOpenSidebar }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`sidebar ${
        isOpenSidebar && "animate__animated animate__fadeInRight"
      }`}
    >
      <div className="sidebar__icon-close" onClick={handleClick}>
        <FontAwesomeIcon icon={faTimes} size="2x" />
      </div>
      <ul className="sidebar__item">
        <li>
          <SelectLanguages />
        </li>
        <li onClick={handleClick}>
          <Link to="/">{t("home.pathUrl")}</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/about">{t("about.pathUrl")}</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/service">{t("service.pathUrl")}</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/job">{t("job.pathUrl")}</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/campus">{t("campus.pathUrl")}</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/blog">blog</Link>
        </li>
      </ul>
    </div>
  );
};

/* style={{
  display: isSidebarOpen ? "block" : "none",
}} */
// animate__animated animate__fadeInRight
// animate__animated animate__fadeOutRight
