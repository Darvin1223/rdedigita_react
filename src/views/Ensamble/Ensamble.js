import React from 'react';
import './Ensamble.scss';


import mobile from "../../assets/img/construccion/mobile/En_Construcción_El_ensamble.png";
import desktop_1024 from "../../assets/img/construccion/1024/En_Construcción_1024_Ensamble.png";
import desktop_1440 from "../../assets/img/construccion/1440/En_Construcción_1440_ensamble.png";
const Ensamble = ({status,view}) => {
    return (
        <>
        {status ? (
            <section >
            <picture className={`${view}-View`}>
            <source media='(min-width:1440px)' srcSet={desktop_1440} />
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

export {Ensamble};