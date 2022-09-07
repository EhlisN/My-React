import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();
  //   const path = useLocation();
  console.log(id);
  return (
    <div>
      <h1>I'm user N </h1>
    </div>
  );
};

export default User;
