import { useTranslation } from "react-i18next";
import { CardHorizontal } from "../../components/CardHorizontal/CardHorizontal";
import image16 from "../../assets/images/servicesAndJob/16.jpg";
import image13 from "../../assets/images/servicesAndJob/13.jpg";
import image24 from "../../assets/images/servicesAndJob/24.jpg";
import image43 from "../../assets/images/servicesAndJob/43.jpg";
import "./Service.css";
export const Services = () => {
  const { t } = useTranslation();
  const { section, section1 } = t("service.talks");
  const { title, box1, box2 } = section;
  const { titleh1, p, p2 } = section1;
  const { title1, description1 } = box1;
  const { title2, description2 } = box2;
  const { ptitle } = p;
  const { titlep } = p2;
  return (
    <div className="wrapper">
      <h1 className="wrapper__title">{title}</h1>
      <section className="section__info">
        <div className="section__box">
          <CardHorizontal image={image16} title={title1} text={description1} />
        </div>
        <div className="section__box">
          <CardHorizontal image={image13} title={title2} text={description2} />
        </div>
      </section>
      <h1>{titleh1}</h1>
      <section className="section__info">
        <div className="section__box">
          <CardHorizontal image={image43} title={ptitle} />
        </div>
        <div className="section__box">
          <CardHorizontal image={image24} title={titlep} />
        </div>
      </section>
    </div>
  );
};
