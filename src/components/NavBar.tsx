import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/context';

const NavBar = () => {
  const { setOpenModal, isLoginUser, setIsLoginUser } = useContext(Context);
  const logout = () => {
    setIsLoginUser(false);
    localStorage.clear();
  };
  return (
    <nav className='navbar navbar-expand navbar-dark bg-dark mb-3'>
      <div className='container-fluid'>
        {isLoginUser ? (
          <>
            <div className='collapse navbar-collapse' id='navbarText'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <Link className='nav-link' aria-current='page' to='main'>
                    Main
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='posts'>
                    Posts
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='users'>
                    Users
                  </Link>
                </li>
              </ul>
              <button className='btn btn-primary' onClick={() => logout()}>
                Log Out
              </button>
            </div>
          </>
        ) : (
          <Link
            to='login'
            className='btn btn-primary'
            onClick={() => setOpenModal(true)}
          >
            LogIn
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
