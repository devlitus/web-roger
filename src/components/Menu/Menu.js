import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SelectLanguages } from "../SelectLanguage/SelectLanguage";
import "./Menu.css";

export const Menu = ({ handlerSidebar }) => {
  const { t } = useTranslation();
  const handlerClick = () => {
    handlerSidebar();
  };
  return (
    <div className="menu">
      <nav className="menu__navigation">
        <Link to="/" onClick={handlerClick}>
          {t("home.pathUrl")}
        </Link>
        <Link to="/about" onClick={handlerClick}>
          {t("about.pathUrl")}
        </Link>
        <Link to="/service" onClick={handlerClick}>
          {t("service.pathUrl")}
        </Link>
        <Link to="/jobs" onClick={handlerClick}>
          {t("job.pathUrl")}
        </Link>
        <Link to="/campus" onClick={handlerClick}>
          {t("campus.pathUrl")}
        </Link>
        <a
          href="http://rogerllopart.blogspot.com/"
          target="_blank"
          rel="noreferrer"
        >
          Blog
        </a>
        <SelectLanguages onClick={handlerClick} />
      </nav>
    </div>
  );
};
