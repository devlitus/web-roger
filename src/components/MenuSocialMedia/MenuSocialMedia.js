import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './MenuSocialMedia.css';
export const MenuSocialMedia = () => {
  return (
    <div className="menuSocial">
      <a href="mailto:rogerllopart@rogerllopart.net"><FontAwesomeIcon className="menuSocial__item" icon={faEnvelope} /></a>
      <a href="https://www.linkedin.com/in/roger-llopart-09bb6926/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="menuSocial__item" icon={faLinkedinIn} /></a> 
      <a href="https://www.instagram.com/rogerllopart/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="menuSocial__item" icon={faInstagram} /></a>
      <a href="https://www.youtube.com/channel/UCudooYnD51UpQA8ayh64JMA " target="_blank" rel="noreferrer"> <FontAwesomeIcon className="menuSocial__item" icon={faYoutube} /></a>
    </div>
  )
}
