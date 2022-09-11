import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../../config/firebase';

import './login.scss';

export function Login() {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider);
    navigate('/course');
  };
  console.log(auth);
  return (
    <>
      <div className="login">
        {/* <div>
          <img src={logo} alt="" />
        </div> */}

        <div>
          {/* <h1>Login</h1> */}
          <button onClick={signInWithGoogle}>Signin com o google</button>
        </div>
      </div>
    </>
  );
}
