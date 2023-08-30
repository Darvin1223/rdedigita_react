import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './SeccionNews.scss';
import DOMPurify, { sanitize } from 'dompurify';


import elMenaje from "../../assets/img/ElMenaje.png";
import Intervista from "../../assets/img/Intervista.png";
import Arteria from "./../../assets/img/Areria.png";
import elScout from "./../../assets/img/ElScout.png";
import Paraiso from "./../../assets/img/Paraiso.png";
import Politica from "./../../assets/img/Politica.png";
import Economia from "./../../assets/img/Economia.png";
import Farandula from './../../assets/img/Farandula.png';

import elMenaje_Mobile from "../../assets/img/ElMenaje_Mobile.png";
import Intervista_Mobile from "../../assets/img/Intervista_Mobile.png";
import Arteria_Mobile from "./../../assets/img/Arteria_mobile.png";
import elScout_Mobile from "./../../assets/img/ElScout_Mobile.png";
import Paraiso_Mobile from "./../../assets/img/Paraiso_mobile.png";
import Politica_Mobile from "./../../assets/img/Politica_Mobile.png";
import Economia_Mobile from "./../../assets/img/Economia_Mobile.png";
import Farandula_Mobile from "./../../assets/img/Farandula_mobile.png";

const API_POSTS = 'https://apitest.rdedigital.com/api/postsByCategory/';
const POSTS_PER_CATEGORY = 6;

const SeccionNews = () => {
  const [sections, setSections] = useState({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const categories = ['Arte_Y_Cultura', 'Deportes', 'Musica', 'Politica', 'Comida', 'Turismo', 'Economía', 'Frandula'];

    const fetchData = async () => {
      try {
        const dataPromises = categories.map(async category => {
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
        console.error('Error fetching posts by categories:', error);
      }
    };

    fetchData();
  }, []);
 
  const categories = [
    { id: 1, originalName: "Arte_Y_Cultura", url:"/arteria",ourName: "Arteria", banner: Arteria, banner_mobile: Arteria_Mobile, banner_tablet: Arteria_Mobile },
    { id: 2, originalName: "Deportes", url:"/el_scout",ourName: "El Scout", banner: elScout, banner_mobile: elScout_Mobile, banner_tablet: elScout_Mobile },
    { id: 3, originalName: "Musica", url:"/intervista",ourName: "Intervista", banner: Intervista, banner_mobile: Intervista_Mobile, banner_tablet: Intervista_Mobile },
    { id: 4, originalName: "Politica", url:"/politica",ourName: "Politica", banner: Politica, banner_mobile: Politica_Mobile, banner_tablet: Politica_Mobile },
    { id: 5, originalName: "Comida", url:"/el_menaje",ourName: "El Menaje", banner: elMenaje, banner_mobile: elMenaje_Mobile, banner_tablet: elMenaje_Mobile },
    { id: 6, originalName: "Economía", url:"/economia",ourName: "Economia", banner: Economia, banner_mobile: Economia_Mobile, banner_tablet: Economia_Mobile },
    { id: 7, originalName: "Turismo", url:"/paraiso",ourName: "Paraíso", banner: Paraiso, banner_mobile: Paraiso_Mobile, banner_tablet: Paraiso_Mobile },
    { id: 8, originalName: "Frandula", url:"/farandula",ourName: "Farandula", banner: Farandula, banner_mobile: Farandula_Mobile, banner_tablet: Farandula_Mobile },
  ];

  return (
    <div>
      {isDataLoaded ? (
        <div>
        <section key="Politica" className="section section-Politica">
        <Link to={`${categories[3].url}`} className="section_banner--link">
          <picture className="section_banner">
            <source media="(min-width:1024px)" srcSet={Politica} className="section_banner--img" />
            <source media="(min-width:768px)" srcSet={Politica_Mobile} className="section_banner--img" />
            <img src={Politica_Mobile} className="section_banner--img" alt="Banner de Politica" />
          </picture>
        </Link>
        <h3 className="section--title">Politica</h3>
        <section className="news_container">
        {sections["Politica"].slice(0, 6).map((element, index) => (
          <section className="news_content" key={index}>
            <Link to={`/news/${element.ID}`} key={index}>
              <article className="section_element" key={index}>
                <picture className="section_element_img-container">
                  <img src={element.feature_image} className="section_element_img-container--img" alt={element.title} />
                </picture>
                <section className="section_element_texts">
                  <h4 className="section_element_texts--title">{element.title}</h4>
                  {sanitize = DOMPurify.sanitize}
                                  <div className="section_element_texts--extrac" dangerouslySetInnerHTML={{ __html: sanitize(element.content).substring(0, 100) + "..." }}></div>
                </section>
              </article>
            </Link>
          </section>
        ))}
      </section>
      
      </section>
      

          {Object.keys(sections).map(categoryName => {
            
            if (categoryName !== "Politica") {
              return (
                sections[categoryName].length > 0 ? (
                  categories.map(categorie => (
                    categorie.originalName === categoryName ? (
                      <section key={categoryName} className={`section section-${categorie.ourName}`}>
                      <Link to={`${categorie.url}`} className="section_banner--link">
                            <picture className="section_banner">
                            <source media="(min-width:1024px)" srcSet={categorie.banner} className="section_banner--img" />
                            <source media="(min-width:768px)" srcSet={categorie.banner_tablet} className="section_banner--img" />
                            <img src={categorie.banner_mobile} className="section_banner--img" alt={`Banner de ${categorie.ourName}`} />
                          </picture>
                      </Link>
                       
                        <h3 className="section--title">{categorie.ourName}</h3>
                        <section className="news_container">
                        {sections[categoryName].slice(0, 6).map((element, index) => (
                          <section className="news_content" key={index}>
                            <Link to={`/news/${element.ID}`} key={index}>
                              <article className="section_element" key={index}>
                                <picture className="section_element_img-container">
                                  <img src={element.feature_image} className="section_element_img-container--img" alt={element.title} />
                                </picture>
                                <section className="section_element_texts">
                                  <h4 className="section_element_texts--title">{element.title.substring(0,50)}</h4>
                                  {sanitize = DOMPurify.sanitize}
                                  <div className="section_element_texts--extrac" dangerouslySetInnerHTML={{ __html: sanitize(element.content).substring(0, 100) + "..." }}></div>
                                </section>
                              </article>
                            </Link>
                          </section>
                        ))}
                        </section>
                      </section>
                    ) : null
                  ))
                ) : null
              );
            }
            return null;
          })}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export { SeccionNews };
