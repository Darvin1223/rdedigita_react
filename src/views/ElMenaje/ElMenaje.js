import React from 'react';
import './ElMenaje.scss';

import desktop_1440 from "../../assets/img/construccion/1440/En_Construcción_1440x1128_El menaje.png";
const ElMenaje = ({ status, view }) => {
    return (
        <>
        {status ? (
          <section className={`${view}-View`}>
          <picture className={`${view}-View`}>
          {/* <source media='(min-width:1440px)' srcSet={desktop_1440} />
          <source media='(min-width:1024px)' srcSet={desktop_1024} /> */}
          <img src={desktop_1440} />
        </picture>
          </section>
        ) : (
          <section >
            {/* Contenido para cuando status es false */}
          </section>
        )}
      </>
    );
};

export {ElMenaje};