import React from "react";
import "./Economia.scss";


import desktop_1440 from "../../assets/img/construccion/1440/En_Construcción_1440x1128_PesoOro.png";
const Economia = ({ status, view }) => {
  return (
    <>
      {status ? (
        <section className={`${view}-View`}>
          <picture className={`${view}-View`}>
            
            <img src={desktop_1440} />
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

export { Economia };
