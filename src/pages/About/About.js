import avatar from "../../assets/images/avatar.jpg";
import "./About.css";
import { useTranslation } from "react-i18next";
export const About = () => {
  const { t } = useTranslation();
  const { descriptionP1, descriptionP2, descriptionP3, collita } = t("about");
  // const { Effort, generosity, humility } = collitas;
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
      </div>
      <div>
        <h3>{collita}:</h3>

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
