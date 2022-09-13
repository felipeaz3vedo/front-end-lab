import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../../config/firebase';

import { FaGoogle } from 'react-icons/fa';
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
      <img src={logo} alt="Logomarca do Frontend lab" />
      <h1>Faça o seu login na plataforma </h1>
      <div className="login__divider"></div>
      <button className="login__button" onClick={signInWithGoogle}>
        <FaGoogle size={20} />
        <p>Login com o google</p>
      </button>
    </main>
  );
}
