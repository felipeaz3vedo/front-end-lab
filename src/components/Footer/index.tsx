import './footer.scss';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

export function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer__informations">
          <h4>frontend lab</h4>
          <p>Frontend Lab - todos os direitos reservados</p>
        </div>
        <div className="footer__social-links">
          <a href="https://github.com/felipeaz3vedo" target="_blank">
            <BsGithub size={30} color="#8D8D99" />
          </a>
          <a
            href="https://www.linkedin.com/in/felipe-de-azevedo/"
            target="_blank"
          >
            <BsLinkedin size={30} color="#8D8D99" />
          </a>
        </div>
      </div>
    </footer>
  );
}
