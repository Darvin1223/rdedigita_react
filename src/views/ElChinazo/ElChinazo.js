import React from 'react';

import "./ElChinazo.scss";


// import mobile from '../../assets/img/construccion/mobile/En_Construcción_320x751_El_Chinazo.png';

import desktop_1440 from "../../assets/img/construccion/1440/En _Construcción_1440x1128_El Chinazo.png";
const ElChinazo = ({status,view}) => {
    
    return (
        <>
      
          
        {status ? (
            <section >
            <picture className={`${view}-View`}>
              {/* <source media='(min-width:1440px)' srcSet={desktop_1440} />
              <source media='(min-width:1200px)' srcSet={desktop_1200} />
              <source media='(min-width:1024px)' srcSet={desktop_1024} /> */}
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

export { ElChinazo };
