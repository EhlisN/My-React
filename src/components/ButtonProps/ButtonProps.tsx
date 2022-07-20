import React from 'react';
import './ButtonProps.css';

const ButtonProps = (
  {
    color = 'blue',
    disabled, 
    children,
    onClick
  }:
  {
    color?: string, // name? - не обязательный пропертис
    disabled?: boolean,
    children: React.ReactNode
    onClick: () => void;
  }) => {
  return (
    <button onClick={onClick} style={{color: color}} className='my-button_props'>{children}</button>
  )
}

export default ButtonProps;