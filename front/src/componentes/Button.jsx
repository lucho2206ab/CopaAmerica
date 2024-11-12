import React from 'react';
import Button from '@mui/material/Button';
import './estilos/Header.css';
import './estilos/Button.css';

const CustomButton = ({ children, onClick, ...props }) => {
  return (
    <Button 
      onClick={onClick} 
      className="custom-button" 
      style={{ color: '#ffffff', backgroundColor: 'red' }} 
      {...props}
    >
      {children}
    </Button>
  );
};


export default CustomButton;
