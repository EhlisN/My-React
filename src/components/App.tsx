import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import AppRoutes from './AppRoutes';
import Context from '../context/context';
import Modal from './Modal/Modal';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [isLoginUser, setIsLoginUser] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoginUser(true);
    }
  }, []);
  return (
    <Context.Provider
      value={{ openModal, setOpenModal, isLoginUser, setIsLoginUser }}
    >
      <div className='App'>
        <NavBar />
        <div className='container'>
          <AppRoutes />
        </div>
        <Modal />
      </div>
    </Context.Provider>
  );
}

export default App;
