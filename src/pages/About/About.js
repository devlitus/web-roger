import avatar from "../../assets/images/avatar.jpg";
import hand from "../../assets/images/hand.png";
import "./About.css";
import { useTranslation } from "react-i18next";
export const About = () => {
  const { t } = useTranslation();
  const { descriptionP1, descriptionP2, descriptionP3, collita, collitas } =
    t("about");
  const { Effort, generosity, humility } = collitas;
  return (
    <>
      <div className="about">
        <img
          className="about__container--avatar"
          src={avatar}
          alt="Roger Llopart"
        />
      </div>
      <div className="about__container">
        <div className="about__container--info">
          <p>{descriptionP1}</p>
          <p>{descriptionP2}</p>
          <p>{descriptionP3}</p>
        </div>
        <h3>{collita}:</h3>
        <div className="about__container--valors">
          <div>
            <img className="about__image--hand" src={hand} alt="hand" />
            <p className="about__container--text">{Effort}</p>
          </div>
          <div className="about_container--image">
            <img className="about__image--hand" src={hand} alt="hand" />
            <p className="about__container--text">{generosity}</p>
          </div>
          <div>
            <img className="about__image--hand" src={hand} alt="hand" />
            <p className="about__container--text">{humility}</p>
          </div>
        </div>
        <ul>
          <li>Esforç. </li>
          <li>La generositat.</li>
          <li>Humilitat. </li>
          <li>Perseverança. </li>
          <li>Estimar la feina. </li>
          <li>Atreviment. </li>
          <li>La creativitat. </li>
          <li>La passió. </li>
          <li>Curiositat. </li>
          <li>La paradoxa </li>
          <li>Humor. </li>
          <li>El canvi</li>
        </ul>
      </div>
    </>
  );
};
