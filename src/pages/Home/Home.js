import { faAt, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import image3 from "../../assets/images/05.jpg";
import image1 from "../../assets/images/25.jpg";
import image2 from "../../assets/images/27.jpg";
import { Card } from "../../components/Card/Card";
import { Map } from "../../components/Map/Map";
import "./Home.css";

export const Home = () => {
  const { t } = useTranslation();
  const { cite, auhtorCite, titleContat, contactP, contactP2, contactP3 } =
    t("home");
  return (
    <>
      <div className="home">
        <div className="bg-image"></div>
      </div>
      <div className="blockquote">
        <p className="blockquote__img"></p>
        <p className="blockquote__text">{cite}</p>
        <p className="blockquote__author">{auhtorCite}</p>
      </div>

      <div className="home__container">
        <h1>Falta Títol</h1>
        <div className="home__container--principal">
          <Card image={image1} />
          <Card image={image2} />
          <Card image={image3} />
        </div>
      </div>
      <div className="home__contact">
        <h1>{t(titleContat)}</h1>
        <div className="home__contact--icons">
          <div className="home__contact--icon">
            <FontAwesomeIcon icon={faMapMarker} />
            <span>Gran Via de les Corts Catalanes, 672</span>
          </div>
          <div className="home__contact--icon">
            <FontAwesomeIcon icon={faAt} />
            <span>rogerllopart@rogerllopart.net</span>
          </div>
        </div>
        <p style={{ textAlign: "center", margin: "0", padding: "0" }}>
          {t(contactP)}
        </p>
        <p style={{ textAlign: "center", margin: "0", padding: "0" }}>
          <strong>{t(contactP2)}</strong>
        </p>
        <p style={{ textAlign: "center", margin: "0", padding: "0" }}>
          {t(contactP3)}
        </p>
        <Map />
      </div>
    </>
  );
};
