import React, {useState,useEffect} from 'react';
import Opinion from "../../assets/img/Opinion.png";
import Sociedad from "../../assets/img/Sociedad.png";
import Treding from "./../../assets/img/Trending.png";
import Deportes from "./../../assets/img/Deportes.png";
import Cultura from "./../../assets/img/Cultura.png";
import El_Pais from "./../../assets/img/El Pais.png";
import Economia from "./../../assets/img/Economia.png";
import Farandula from "./../../assets/img/Farandula.png";

import elMenaje_Mobile from "../../assets/img/ElMenaje_Mobile.png";
import Intervista_Mobile from "../../assets/img/Intervista_Mobile.png";
import Arteria_Mobile from "./../../assets/img/Arteria_mobile.png";
// import Deportes_Mobile from "./../../assets/img/Deportes_Mobile.png";
import Paraiso_Mobile from "./../../assets/img/Paraiso_mobile.png";
import Politica_Mobile from "./../../assets/img/Politica_Mobile.png";
import Economia_Mobile from "./../../assets/img/Economia_Mobile.png";
import Farandula_Mobile from "./../../assets/img/Farandula_mobile.png";
import Arteria from "./../../assets/img/Economia_Mobile.png";


import './BannerSlider.scss';
const BannerSlider = () => {
    const images = [
        Opinion,
        Sociedad,
        Treding,
        Deportes,
        Cultura,
        El_Pais,
        Economia,
        Farandula,
      ];
      const [currentImageIndex, setCurrentImageIndex] = useState(0);

      useEffect(() => {
        // Función para cambiar automáticamente la imagen cada 3 segundos
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000);
    
        return () => {
          // Limpiar el intervalo cuando el componente se desmonte
          clearInterval(interval);
        };
      }, []);
    
      return (
        <div className="slider desktop">
          <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
        </div>
      );
};

export {BannerSlider};