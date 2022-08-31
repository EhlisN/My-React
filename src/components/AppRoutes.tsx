import React from 'react';
import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Context from '../context/context';
import Main from '../pages/Main';
import Posts from '../pages/Posts';
import Users from '../pages/Users';

const AppRoutes = () => {
  const { isLoginUser } = useContext(Context);

  return isLoginUser ? (
    <Routes>
      <Route path='users' element={<Users />}></Route>
      <Route path='posts' element={<Posts />}></Route>
      <Route path='*' element={<Main />}></Route>
    </Routes>
  ) : (
    <Routes>
      <Route path='*' element={<Main />}></Route>
    </Routes>
  );
};

export default AppRoutes;
