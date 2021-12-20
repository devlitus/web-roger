import "./CardHorizontal.css";
export const CardHorizontal = ({ image, title, text }) => {
  return (
    <div className="card__horizontal">
      <img className="card__horizontal--image" src={image} alt="" />
      <h3 className="card__horizontal--title">{title}</h3>
      <p className="card__horizontal--text">{text}</p>
    </div>
  );
};
