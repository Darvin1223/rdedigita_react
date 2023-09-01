import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SeccionNews.scss";
import DOMPurify from "dompurify";

import elMenaje from "../../assets/img/ElMenaje.png";
import Intervista from "../../assets/img/Intervista.png";
import Arteria from "./../../assets/img/Areria.png";
// ... (importar el resto de las imágenes)

import elMenaje_Mobile from "../../assets/img/ElMenaje_Mobile.png";
import Intervista_Mobile from "../../assets/img/Intervista_Mobile.png";
import Arteria_Mobile from "./../../assets/img/Arteria_mobile.png";
// ... (importar el resto de las imágenes móviles)

const API_POSTS = "https://apitest.rdedigital.com/api/postsByCategory/";
const POSTS_PER_CATEGORY = 6;

const SeccionNews = () => {
  const [sections, setSections] = useState({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const categories = [
      // ... (lista de categorías)
    ];

    const fetchData = async () => {
      try {
        const dataPromises = categories.map(async (category) => {
          const response = await fetch(`${API_POSTS}${category}`);
          return response.json();
        });

        const dataResults = await Promise.all(dataPromises);

        const sectionsData = {};
        categories.forEach((category, index) => {
          sectionsData[category] = dataResults[index];
        });

        setSections(sectionsData);
        setIsDataLoaded(true);
      } catch (error) {
        console.error("Error fetching posts by categories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isDataLoaded ? (
        <div>
          {/* Sección 'Politica' */}
          <section key="Politica" className="section section-Politica">
            {/* ... (código para la sección 'Politica') */}
          </section>

          {/* Otras secciones */}
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export { SeccionNews };
