import React from 'react';

type LoaderProps = {
  color?: string;
};

const Loader = ({ color = 'text-primary' }: LoaderProps) => {
  return (
    <div className={`spinner-border mt-5 mx-auto ${color}`} role='status'>
      <span className='visually-hidden'>Loading...</span>
    </div>
  );
};

export default Loader;
