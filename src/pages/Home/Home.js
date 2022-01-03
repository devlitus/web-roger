import { faAt } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
// import image3 from "../../assets/images/05.jpg";
// import image1 from "../../assets/images/25.jpg";
// import image2 from "../../assets/images/27.jpg";
import infant from "../../assets/images/infant.jpg";
import talk from "../../assets/images/talk.svg";
import cone from "../../assets/images/cone.svg";
import power from "../../assets/images/power.svg";
import orga from "../../assets/images/orga.svg";
import education from "../../assets/images/education.svg";
import contact from "../../assets/images/contact.svg";
import { Link } from "react-router-dom";
import { Map } from "../../components/Map/Map";
// import { Card } from "../../components/Card/Card";

// import { Map } from "../../components/Map/Map";

export const Home = () => {
  const { t } = useTranslation();
  const { cite, auhtorCite } = t("home");
  return (
    <>
      <div className="blockquote">
        <div className="blockquote__bg"></div>
        <img className="blockquote__image" src={infant} alt="" />
        <p className="blockquote__text">{cite}</p>
        <p className="blockquote__author">{auhtorCite}</p>
      </div>
      <div className="wrapper">
        <div className="content">
          <h1 className="content__title">El nostres Serveis</h1>
          <div className="content__service">
            <Link to="/service">
              <div className="box">
                <img className="box__image" src={talk} alt="" />
                <p className="box__text">Xarrades i tellers</p>
              </div>
            </Link>
            <Link to="/service">
              <div className="box">
                <img className="box__image" src={cone} alt="" />
                <p className="box__text">Càpsulas de coneixements</p>
              </div>
            </Link>
            <div className="box">
              <img className="box__image" src={power} alt="" />
              <p className="box__text">Autoritat sense autoritarisme</p>
            </div>
            <div className="box">
              <img className="box__image" src={orga} alt="" />
              <p className="box__text">Metodologia i Organització</p>
            </div>
            <div className="box">
              <img className="box__image" src={education} alt="" />
              <p className="box__text">La formació a mida | Bonificada</p>
            </div>
          </div>
          <div className="content__contact">
            <h1 className="content__title">Contacta amb nosaltres</h1>
            <div className="content__contact__box">
              <img className="contact__image" src={contact} alt="" />
              <div className="contact__item">
                <FontAwesomeIcon icon={faAt} size="4x" />
                <FontAwesomeIcon icon={faYoutube} size="4x" />
                <FontAwesomeIcon icon={faInstagram} size="4x" />
                <FontAwesomeIcon icon={faLinkedinIn} size="4x" />
              </div>
              <div className="contact__item">
                <p className="contact__item__text">
                  Estem al centre de Barcelona, al carrer Gran Via de de les
                  Corts Catalanes 672, entre Passeig de Gràcia i Passeig de Sant
                  Joan.
                </p>
              </div>
              <div className="contact__item">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
