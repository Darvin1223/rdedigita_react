import React from 'react';

import "./ElScout.scss";


import mobile from '../../assets/img/construccion/mobile/En_Construcción_320_El_Scout.png';
import desktop_1024 from "../../assets/img/construccion/1024/En_Construcción_1024_El_Scout.png";
import desktop_1200 from "../../assets/img/construccion/1200/En_Construcción_1024x800_El_Scout.png";
import desktop_1440 from "../../assets/img/construccion/1200/En_Construcción_1024x800_El_Scout.png";
const ElScout = ({status,view}) => {
    
    return (
        <>
      
          
        {status ? (
            <section >
            <picture className={`${view}-View`}>
              <source media='(min-width:1440px)' srcSet={desktop_1440} />
              <source media='(min-width:1200px)' srcSet={desktop_1200} />
              <source media='(min-width:1024px)' srcSet={desktop_1024} />
              <img src={mobile} />
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
