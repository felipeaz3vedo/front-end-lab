import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../../config/firebase';

import { FcGoogle } from 'react-icons/fc';
import logo from '../../assets/logo.svg';

import './login.scss';

export function Login() {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider);
    navigate('/course');
  };

  return (
    <main className="login">
      <div className="login__container">
        <img
          className="login__logo"
          src={logo}
          alt="Logomarca do Frontend lab"
        />
        <h1>Faça o login na plataforma </h1>
        <div className="login__divider"></div>
        <button className="login__button" onClick={signInWithGoogle}>
          <FcGoogle size={20} />
          Login com o google
        </button>
      </div>
    </main>
  );
}
