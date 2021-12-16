import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import { Card } from "../../components/Card/Card";
import { LayoutMovile } from "../../components/LayoutMovile/LayoutMovile";
import image1 from '../../assets/images/25.jpg';
import image2 from '../../assets/images/27.jpg';
import image3 from '../../assets/images/05.jpg';
import './Home.css';

export const Home = () => {

  return (
    <LayoutMovile>
      <div className="home">
        <div className="bg-image"></div>
      </div>
      <div className="blockquote">
        <p className="blockquote__img"></p>
        <p className="blockquote__text">“Tots els adults van ser alguna vegada nens… però només uns pocs ho recorden.”</p>
        <p className="blockquote__author">Petit Princep</p>
      </div>
      
      <div className="home__container">
        <h1>Falta Títol</h1>
        <div className="home__container--principal">
          <Card image={ image1 }/>
          <Card image={ image2 }/>
          <Card image={ image3 }/>
        </div>
      </div>
      <div className="home__contact">
        <h1>Contacta amb nosaltres</h1>
        <div className="home__contact--icons">
          <div className="home__contact--icon">
            <FontAwesomeIcon icon={faMapMarker} />
            <span>Gran Via de les Corts Catalanes, 672</span>
          </div>
          <div className="home__contact--icon">
            <FontAwesomeIcon icon={faAt} />
            <span>rogerllopart@rogerllopart.net</span>
          </div>
          <div className="home__contact--icon">
            <FontAwesomeIcon icon={faMobileAlt} />
            <span>+34 649 156 328</span>
          </div>
        </div>
      </div>
    </LayoutMovile>
  )
}
