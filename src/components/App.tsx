import React from 'react';
import './App.css';
import Users from '../pages/Users';
import NavBar from './NavBar';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <div className='App container'>
      <NavBar />
      <div className='container'>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
