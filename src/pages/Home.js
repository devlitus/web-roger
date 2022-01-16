import headerImage from "../assets/images/header-prueba.png";
import arrow from "../assets/images/resources/arrow.png";
import xerrada from "../assets/images/16.jpg";
import cursos from "../assets/images/27.jpg";
import bonificada from "../assets/images/44.jpg";

export const Home = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <img className="header__image" src={headerImage} alt="header" />
      </header>
      <div className="box__service">
        <p className="box__service-title">Serveis</p>
        <img className="box__service-arrow" src={arrow} alt="arrow" />
      </div>
      <div className="content__service">
        <p className="content__text">
          El joc és una activitat molt seriosa per als més petits de la casa: de
          forma lliure, espontània
        </p>
        <p className="content__text">
          o dinamitzat pels adults, al menjador de casa o al mig del medi
          natural, etc. Amb el joc ens
        </p>
        <p className="content__text">
          divertim i apranem junts, però quins són els secrets que s'amagan
          darrera de cada joc i...
        </p>
        <div className="content__box__service">
          <div className="content__box__service-item">
            <img className="box__service__img" src={xerrada} alt="" />
            <h3 className="box__service__title">TALLERS I XERRADES</h3>
          </div>
          <div className="content__box__service-item">
            <img className="box__service__img" src={cursos} alt="" />
            <h3 className="box__service__title">CURSOS</h3>
          </div>
          <div className="content__box__service-item">
            <img className="box__service__img" src={bonificada} alt="" />
            <h3 className="box__service__title">
              FORMACIÓ BONIFICADA PER EMPRESAS
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
