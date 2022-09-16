import './header.scss';
import { signOut } from 'firebase/auth';
import logo from '../../assets/logo.svg';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import { HiLogout } from 'react-icons/hi';
import { AiFillCaretDown } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';

import avatar from '../../assets/avatar.svg';

export function Header() {
  const imgRef = useRef<HTMLImageElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const signUserOut = async () => {
    await signOut(auth);
    navigate('/');
  };

  useEffect(() => {
    const closeDropdown = (e: any) => {
      if (e.path[0] !== imgRef.current) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', closeDropdown);

    return () => document.body.removeEventListener('click', closeDropdown);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img className="logo" src={logo} alt="logo do Frontend Lab" />
        </div>
        <div className="header__user">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="header__user-image"
          >
            <img ref={imgRef} src={avatar} />
            <AiFillCaretDown />
          </div>

          <div className={'header__user-dropdown ' + (isOpen && 'open')}>
            <p className="header__user-dropdown-name">
              {auth.currentUser?.displayName}
            </p>

            <div className="header__user-dropdown-divider"></div>

            <a href="#">
              <p>Ajuda</p>
            </a>

            <a onClick={signUserOut} href="#">
              <p>Sair</p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
