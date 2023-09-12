import React from 'react';
import './Arteria.scss';
//  import bg_img_mobile from  './../../assets/img/construccion/mobile/En_Construcción_320_Arteria.png';
 import bg_img_1024 from  './../../assets/img/construccion/1024/En_Construcción_1024_Arteria.png';
 import bg_img_1440 from  './../../assets/img/construccion/1440/En_Construcción_1440x1128_Arteria2.png';
 const Arteria = ({ status, view }) => {
  return (
    <>
      {status ? (
        <section className={``}>
          <picture className='${view}-View'>
     
            <img src={bg_img_1440} />
          </picture>
        </section>
      ) : (
        <section className={`${view}-View`}>
          {/* Contenido para cuando status es false */}
        </section>
      )}
    </>
  );
};

export { Arteria };
