import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Context from '../../context/context';
import http from '../../https/http';

const LogIn = () => {
  const { setOpenModal, setIsLoginUser } = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const [login, setLogin] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');

  const authorization = async () => {
    const data = { email: login, password: password };
    const authorizationData = await http.post(
      `https://reqres.in/api/${isLogin ? 'login' : 'register'}`,
      data
    );
    if (authorizationData.data.token) {
      localStorage.setItem('token', authorizationData.data.token);
      setIsLoginUser(true);
      setOpenModal(false);
    }
    if (authorizationData.data.email) {
      alert('Congratulation, you are awesome!');
      setLogin('');
      setPassword('');
    }
    // console.log(authorizationData.data);
  };

  return (
    <div className='row container'>
      <input
        className='m-3 form-control'
        placeholder='Input value'
        value={login}
        onChange={(event) => setLogin(event.target.value)}
      />
      <input
        className='m-3 form-control'
        placeholder='Input password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Link to={isLogin ? 'registration' : 'login'}>
        {isLogin
          ? 'Do not have an account? Registration!'
          : 'Have an account? Login'}
      </Link>
      <button
        className='btn btn-primary col-5 m-3'
        onClick={() => authorization()}
      >
        {isLogin ? 'Login' : 'Registration'}
      </button>
    </div>
  );
};

export default LogIn;
