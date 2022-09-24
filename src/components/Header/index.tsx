import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';

import { FiLogOut } from 'react-icons/fi';
import { BiHelpCircle } from 'react-icons/bi';

import './header.scss';

import avatar from '../../assets/avatar.svg';
import logo from '../../assets/logo.svg';

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
          </div>

          <div className={`header__user-dropdown ${isOpen && 'open'}`}>
            <p className="header__user-dropdown-name">
              {auth.currentUser?.displayName}
            </p>

            <div className="header__user-dropdown-divider"></div>

            <a href="#">
              <BiHelpCircle size={20} color="0096fb" />
              <p>Ajuda</p>
            </a>

            <a onClick={signUserOut} href="#">
              <FiLogOut size={18} color="0096fb" />
              <p>Sair</p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
