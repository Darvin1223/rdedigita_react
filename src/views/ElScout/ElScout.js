import React from 'react';

import "./ElScout.scss";



import desktop_1440 from "../../assets/img/construccion/1200/En_Construcción_1024x800_El_Scout.png";
const ElScout = ({status,view}) => {
    
    return (
        <>
      
          
        {status ? (
            <section >
            <picture className={`${view}-View`}>
          
              <img src={desktop_1440} />
            </picture>
            </section>
        ) : (
            <section >
            </section>
        )}
     
        </>
       
      );
      
};

export { ElScout };
