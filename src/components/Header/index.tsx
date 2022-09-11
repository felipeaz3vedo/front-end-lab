import './header.scss';
import { signOut } from 'firebase/auth';
import logo from '../../assets/logo.svg';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';

import avatar from '../../assets/avatar.svg';

export function Header() {
  const navigate = useNavigate();
  const signUserOut = async () => {
    await signOut(auth);
    navigate('/');
  };
  console.log(auth);
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img src={logo} alt="logo do Frontend Lab" />
        </div>
        <div className="header__user-informations">
          <img
            onClick={signUserOut}
            src={auth.currentUser?.photoURL || avatar}
            width="30"
            height="30"
          />
        </div>
      </div>
    </header>
  );
}
