import './footer.scss';
import githubIcon from '../../assets/github-icon.svg';
import linkedinIcon from '../../assets/linkedin-icon.svg';

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__informations">
          <h4 className="footer__informations-logo">frontend lab</h4>
          <p>Frontend Lab - todos os direitos reservados</p>
        </div>
        <div className="footer__social-links">
          <a href="#">
            <img src={githubIcon}alt="" />
          </a>
          <a href="#">
            <img src={linkedinIcon} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}
