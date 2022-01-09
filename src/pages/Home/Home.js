import { useTranslation } from "react-i18next";
import infant from "../../assets/images/infant.jpg";
import talk from "../../assets/images/talk.svg";
import cone from "../../assets/images/cone.svg";
import power from "../../assets/images/power.svg";
import orga from "../../assets/images/orga.svg";
import education from "../../assets/images/education.svg";
import { Link } from "react-router-dom";
import { Map } from "../../components/Map/Map";

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
          <div className="contact">
            <div className="bg-contact">
              <div className="contact__content">
                <h3 className="contact__title">Contacta amb nosaltres</h3>
                <ol className="contact__list">
                  <li className="contact__list__item">
                    <a href="mailto:rogerllopart@rogerllopart.net">
                      rogerllopart@rogerllopart.net
                    </a>
                  </li>
                  <li className="contact__list__item">
                    <a href="https://">youtube</a>
                  </li>
                  <li className="contact__list__item">
                    <a href="https://">instagram</a>
                  </li>
                  <li className="contact__list__item">
                    <a href="https://">linkedin</a>
                  </li>
                </ol>
              </div>
            </div>
            <Map />
          </div>
        </div>
      </div>
    </>
  );
};
