import React from "react";
import "./Economia.scss";

import mobile from "../../assets/img/construccion/mobile/En_Construcción_320_economia.png";
import desktop_1024 from "../../assets/img/construccion/1024/En_Construcción_1024_Economia.png";
import desktop_1200 from "../../assets/img/construccion/1200/En_Construcción_1024x800_Peso_Oro.png";
import desktop_1440 from "../../assets/img/construccion/1440/En_Construcción_1440x1128_PesoOro.png";
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
