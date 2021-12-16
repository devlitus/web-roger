import { LayoutMovile } from "../../components/LayoutMovile/LayoutMovile";
import avatar from "../../assets/images/avatar.jpg";
import hand from '../../assets/images/hand.png';
import "./About.css";
export const About = () => {
  return (
    <LayoutMovile>
      <img
        className="about__container--avatar"
        src={avatar}
        alt="Roger Llopart"
      />
      <div className="about__container">
        <div className="about__container--info">
          <p>
            Doctor en Educació i Societat per a la Universitat de Barcelona,
            Diplomat en Educació Social (URL), Llicenciat en Pedagogia, Màster
            en Intervencions Socials i Educatives (UB) i Tècnic en Animació
            sociocultural.
          </p>
          <p>
            Una trajectòria professional encaminada cap al món de la infància i
            adolescència amb més de 20 anys d'experiència, s'inicia com a
            professor de secundària i de cicles formatius, que compaginà amb la
            tasca d'educador social en diversos Centres Residencials d'Acció
            Educativa.
          </p>
          <p>
            En l'actualitat compagina la seva tasca educativa, amb formacions,
            xerrades i tallers per a professionals i famílies. Col·laborador de
            diversos mitjans de comunicació entre ells els Matins de Radio4
            (RNE). Pare de dues criatures i Pedagog les 24 hores al dia, set
            dies per setmana.
          </p>
        </div>
        <h3>Els principis de la Collita:</h3>
        <div className="about__container--valors">
          <div >
            <img className="about__image--hand" src={hand} alt="hand" />
            <p className="about__container--text">Esforç</p>
          </div>
          <div className="about_container--image">
            <img className="about__image--hand" src={hand} alt="hand" />
            <p className="about__container--text">Esforç</p>
          </div>
          <div>
            <img className="about__image--hand" src={hand} alt="hand" />
            <p className="about__container--text">Esforç</p>
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
    </LayoutMovile>
  );
};
