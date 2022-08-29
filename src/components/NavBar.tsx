import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand navbar-dark bg-dark mb-3'>
      <div className='container-fluid'>
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
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
