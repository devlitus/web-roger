import { useTranslation } from "react-i18next";
import infant from "../../assets/images/infant.jpg";
import { Postit } from "../../components/Postit/Postit";

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
          <div className="content__bgPostit">
            <h1>Serveis i projectes</h1>
            <div className="content__postit">
              <Postit text="Xerrades i tallers" />
              <Postit text="Càpsules de coneixement" />
              <Postit text="La Formació a mida Bonificada" />
              <Postit text="La Formació a mida Bonificada" />
              <Postit text="La Formació a mida Bonificada" />
            </div>
          </div>
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
      </div>
    </>
  );
};
