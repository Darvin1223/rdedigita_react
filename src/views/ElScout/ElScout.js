import React from 'react';

import "./ElScout.scss";
const ElScout = ({status,view}) => {
    
    return (
        <>
      
          
        {status ? (
            <section className={`${view}-View`}>
            </section>
        ) : (
            <section >
            </section>
        )}
     
        </>
       
      );
      
};

export { ElScout };
