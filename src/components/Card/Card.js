import './Card.css';
export const Card = ({ image }) => {
  return (
    <div className="card">
      <img className="card__image" src={image} alt="" />
      <div className="card__info"></div>
    </div>
  )
}
