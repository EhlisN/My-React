import React, { useEffect, useState } from 'react';
import httpsMain from '../https/httpsMain';
import './Main.css';

const Main = () => {
  const [image, setImage] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Lake_mapourika_NZ.jpeg/800px-Lake_mapourika_NZ.jpeg'
  );
  useEffect(() => {
    getImage();
  }, []);
  const getImage = async () => {
    try {
      const getNewImage = await httpsMain.get('');
      setImage(getNewImage.data.urls.regular);
      console.log('main');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <h1>Hello my friends!!!</h1>
      <p>You can enjoy beautiful pictures...</p>

      <div>
        <img className='mb-3' src={image} alt='enjoy' />
        <button
          className='btn btn-light'
          type='button'
          onClick={() => getImage()}
        >
          <span>Next</span>
        </button>
      </div>
    </>
  );
};

export default Main;
