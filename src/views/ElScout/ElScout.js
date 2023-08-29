import React from 'react';
import img_mantenimiento from "./../../assets/img/construccion/mobile/En Construcción 320x751 El Scout.png";
import img_mantenimiento_1024 from "./../../assets/img/construccion/1024/En Construcción 1024x800 El Scout.png";
import img_mantenimiento_1440 from "./../../assets/img/construccion/ElScout_mantenimiento.png";
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
