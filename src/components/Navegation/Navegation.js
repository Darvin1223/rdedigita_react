import React from 'react';

const Navegation = ({children}) => {
    return (
      <nav className='Navegation hidden_menu'>
       {children}
      </nav>
    );
};

export default Navegation;