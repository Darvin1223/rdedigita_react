import React from 'react';
import './Navegation.scss';
const Navegation = ({children, className}) => {
    return (
      <nav className={`Navegation ${className}`}>
       {children}
      </nav>
    );
};

export default Navegation;