import React, { useEffect, useState } from "react";

import './SeccionNews.scss';

import elMenaje from "../../assets/img/El menaje.png";
import Intervista from "../../assets/img/Intervista.png";
import Arteria from "./../../assets/img/Arteria_mobile.png";
import elScout from "./../../assets/img/Paraiso.png"

// Mobile
import ParaisoMobile from "../../assets/img/Paraiso_mobile.png";
import ArteriaMobile from "../../assets/img/Arteria_mobile.png";
import { Link } from "react-router-dom";


// API_URL
const API_POSTS = 'https://apitest.rdedigital.com/api/postsByCategory/';

const SeccionNews = () => {
  const [sections, setSections] = useState({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const categories = ['Arte_Y_Cultura', 'Deportes', 'Musica', 'Politica', 'Comida', 'Turismo', 'Economia', 'Frandula'];

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
    { id: 1, originalName: "Arte_Y_Cultura", ourName: "Arteria", banner: null, banner_mobile: ArteriaMobile, banner_tablet: "" },
    { id: 2, originalName: "Deportes", ourName: "El Scout", banner: "", banner_mobile: ParaisoMobile, banner_tablet: "" },
    { id: 3, originalName: "Musica", ourName: "Intervista", banner: Intervista, banner_mobile:ParaisoMobile },
    { id: 4, originalName: "Politica", ourName: "Politica", banner: null,banner_mobile: ParaisoMobile },
    { id: 5, originalName: "Comida", ourName: "El Menaje", banner: elMenaje, banner_mobile:ParaisoMobile },
    { id: 6, originalName: "Turismo", ourName: "Paraíso", banner: "", banner_mobile: ParaisoMobile },
    { id: 7, originalName: "Economia", ourName: "Economia", banner: null,banner_mobile: ParaisoMobile },
    { id: 8, originalName: "Frandula", ourName: "Farandula", banner: null,banner_mobile: ParaisoMobile },
  ];


  // console.log(sections)
  
  return (
    <div>
      {isDataLoaded ? (
        <div>
          {Object.keys(sections).map(categoryName => (
            sections[categoryName].length > 0 ? (
              categories.map(categorie => (
                categorie.originalName === categoryName ?(
                  <section key={categoryName} className={`section section-${categorie.ourName}`}>
                    <picture className="section_banner">
                      <img src={categorie.banner_mobile} className="section_banner--img"/>
                    </picture>
                    <h3 className="section--title">{categorie.ourName}</h3>
                    <section className="section_container">
                    {sections[categoryName].map((element, index) => (
                      <Link to={`/news/${element.ID}`}>
                      <article className="section_element" key={index}>
                        <picture className="section_element_img-container">
                          <img src={element.feature_image} className="section_element_img-container--img" />
                        </picture>
                        <section className="section_element_texts">
                          <h4 className="section_element_texts--title">{element.title}</h4>
                          <div className="section_element_texts--extrac" dangerouslySetInnerHTML={{ __html: element.content.substring(0, 400) + "..." }}></div>
  
                        </section>
                      </article>
                      </Link>
                    ))}
                    </section>
                  
                </section>
                ):(
                  null
                )
               
              ))
              
            ) : null
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
  
  
  
};

export { SeccionNews };