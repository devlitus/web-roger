import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Sidebar } from "../Sidebar/Sidebar";
import { useState } from "react";
import { Logo } from "../Logo/Logo";

import { SelectLanguages } from "../SelectLanguage/SelectLanguage";

export const Navbar = () => {
  const [isOpenSidebar, setisOpenSidebar] = useState(false);
  const { t } = useTranslation();
  const handleClick = () => {
    setisOpenSidebar(!isOpenSidebar);
  };
  return (
    <>
      <nav className="navigator">
        <Logo />
        <nav className="navigator__social">
          <a href="mailto:rogerllopart@rogerllopart.net">
            <FontAwesomeIcon icon={faEnvelope} size="lg" color="#000" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCudooYnD51UpQA8ayh64JMA"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} size="lg" color="#000" />
          </a>
          <a
            href=" https://www.instagram.com/rogerllopart"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" color="#000" />
          </a>
          <a
            href="https://www.linkedin.com/in/roger-llopart-09bb6926"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" color="#000" />
          </a>
        </nav>
        <ul className="navigator__item">
          <li>
            <Link to="/">{t("home.pathUrl")}</Link>
          </li>
          <li>
            <Link to="/about">{t("about.pathUrl")}</Link>
          </li>
          <li>
            <Link to="/service">{t("service.pathUrl")}</Link>
          </li>
          <li>
            <Link to="/job">{t("job.pathUrl")}</Link>
          </li>
          <li>
            <Link to="/campus">{t("campus.pathUrl")}</Link>
          </li>
          <li>
            <Link to="/blog">blog</Link>
          </li>
          <li>
            <SelectLanguages />
          </li>
        </ul>
        <div className="navigator__movile">
          <div type="buttom" onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </div>
          {isOpenSidebar && (
            <Sidebar handleClick={handleClick} isOpenSidebar={isOpenSidebar} />
          )}
        </div>
      </nav>
    </>
  );
};
