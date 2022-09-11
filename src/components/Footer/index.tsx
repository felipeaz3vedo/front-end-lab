import './footer.scss';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

export function Footer() {
  // ajeitar o hover dos links sociais
  return (
    <footer>
      <div className="container">
        <div className="footer__informations">
          <h4 className="footer__informations-logo">frontend lab</h4>
          <p>Frontend Lab - todos os direitos reservados</p>
        </div>
        <div className="footer__social-links">
          <a href="#">
            <BsGithub size={30} color="#8D8D99" />
          </a>
          <a href="#">
            <BsLinkedin size={30} color="#8D8D99" />
          </a>
        </div>
      </div>
    </footer>
  );
}
