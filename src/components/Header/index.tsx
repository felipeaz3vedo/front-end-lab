import './header.scss';
import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo do Frontend Lab" />
        </div>
      </div>
    </header>
  );
}
