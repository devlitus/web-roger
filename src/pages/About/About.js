import avatar from "../../assets/images/avatar.jpg";
import "./About.css";
import { useTranslation } from "react-i18next";
export const About = () => {
  const { t } = useTranslation();
  const { descriptionP1, descriptionP2, descriptionP3, collita } = t("about");
  // const { Effort, generosity, humility } = collitas;
  return (
    <>
      <div className="wrapper">
        <div className="content__about">
          <img className="avatar__about" src={avatar} alt="Roger" />
          <div className="text_about">
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
      </div>
    </>
  );
};
