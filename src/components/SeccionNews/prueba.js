import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./prueba.scss";
import DOMPurify from "dompurify";

import elMenaje from "../../assets/img/ElMenaje.png";
import Intervista from "../../assets/img/Intervista.png";
import Arteria from "./../../assets/img/Areria.png";
import elScout from "./../../assets/img/ElScout.png";
import Paraiso from "./../../assets/img/Paraiso.png";
import Politica from "./../../assets/img/Politica.png";
import Economia from "./../../assets/img/Economia.png";
import Farandula from "./../../assets/img/Farandula.png";

import elMenaje_Mobile from "../../assets/img/ElMenaje_Mobile.png";
import Intervista_Mobile from "../../assets/img/Intervista_Mobile.png";
import Arteria_Mobile from "./../../assets/img/Arteria_mobile.png";
import elScout_Mobile from "./../../assets/img/ElScout_Mobile.png";
import Paraiso_Mobile from "./../../assets/img/Paraiso_mobile.png";
import Politica_Mobile from "./../../assets/img/Politica_Mobile.png";
import Economia_Mobile from "./../../assets/img/Economia_Mobile.png";
import Farandula_Mobile from "./../../assets/img/Farandula_mobile.png";

const API_POSTS = "https://apitest.rdedigital.com/api/postsByCategory/";
const POSTS_PER_CATEGORY = 6;

const Prueba = () => {
  const [sections, setSections] = useState({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const categories = [
      "Arte_Y_Cultura",
      "Deportes",
      "Musica",
      "Politica",
      "Comida",
      "Turismo",
      "Economía",
      "Frandula",
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

  const categories = [
    {
      id: 1,
      originalName: "Arte_Y_Cultura",
      url: "/arteria",
      ourName: "Arteria",
      banner: Arteria,
      banner_mobile: Arteria_Mobile,
      banner_tablet: Arteria_Mobile,
    },
    {
      id: 2,
      originalName: "Deportes",
      url: "/el_scout",
      ourName: "El Scout",
      banner: elScout,
      banner_mobile: elScout_Mobile,
      banner_tablet: elScout_Mobile,
    },
    {
      id: 3,
      originalName: "Musica",
      url: "/intervista",
      ourName: "Intervista",
      banner: Intervista,
      banner_mobile: Intervista_Mobile,
      banner_tablet: Intervista_Mobile,
    },
    {
      id: 4,
      originalName: "Politica",
      url: "/politica",
      ourName: "Politica",
      banner: Politica,
      banner_mobile: Politica_Mobile,
      banner_tablet: Politica_Mobile,
    },
    {
      id: 5,
      originalName: "Comida",
      url: "/el_menaje",
      ourName: "El Menaje",
      banner: elMenaje,
      banner_mobile: elMenaje_Mobile,
      banner_tablet: elMenaje_Mobile,
    },
    {
      id: 6,
      originalName: "Economía",
      url: "/economia",
      ourName: "Economia",
      banner: Economia,
      banner_mobile: Economia_Mobile,
      banner_tablet: Economia_Mobile,
    },
    {
      id: 7,
      originalName: "Turismo",
      url: "/paraiso",
      ourName: "Paraíso",
      banner: Paraiso,
      banner_mobile: Paraiso_Mobile,
      banner_tablet: Paraiso_Mobile,
    },
    {
      id: 8,
      originalName: "Frandula",
      url: "/farandula",
      ourName: "Farandula",
      banner: Farandula,
      banner_mobile: Farandula_Mobile,
      banner_tablet: Farandula_Mobile,
    },
  ];

  return (
    <>
    {isDataLoaded ? (
        <>

        {Object.keys(sections).map((categoryName) => {
          if (categoryName !== "Noticiero") {
            return sections[categoryName].length > 0
              ? categories.map((categorie) =>
                  categorie.originalName === categoryName ? (
                    <section className="conteiner_news_break">
                    <Link
                      to={`${categorie.url}`}
                      className="section_banner--link"
                    >
                      <picture className="section_banner">
                        <source
                          media="(min-width:1024px)"
                          srcSet={categorie.banner}
                          className="section_banner--img"
                        />
                        <source
                          media="(min-width:768px)"
                          srcSet={categorie.banner_tablet}
                          className="section_banner--img"
                        />
                        <img
                          src={categorie.banner_mobile}
                          className="section_banner--img"
                          alt={`Banner de ${categorie.ourName}`}
                        />
                      </picture>
                    </Link>
                    <section
                      key={categoryName}
                      className={`section section-${categorie.ourName}`}
                    >
                      <Link to={`/news/category/${categoryName}`} key={categoryName}>
                      <h3 className="section--title">{categorie.ourName}</h3>
                      </Link>
                      <section className="news_container">
                        <section className="first-news-container">
                          {sections[categoryName]
                            .slice(0, 1)
                            .map((newsElement, index) => (
                              <Link
                                className="news_container--link"
                                key={newsElement.ID}
                                to={`/news/${newsElement.ID}`}
                              >
                                <article className="first-post">
                                  <picture className="news-image">
                                    {newsElement.feature_image && (
                                      <img
                                        className="news-image--img"
                                        src={newsElement.feature_image}
                                        alt={newsElement.title}
                                      />
                                    )}
                                  </picture>
                                  <section className="news_content--info">
                                   
                                  </section>
                                  <h1 className="news--title">
                                    {newsElement.title}
                                  </h1>
                                  <p className="news-extract">
                                    {newsElement.content
                                      .replace(/<\/?[^>]+(>|$)/g, "")
                                      .substring(0, 200) + "..."}
                                  </p>
                                </article>
                              </Link>
                            ))}
                        </section>
                        <section className="second-news">
                          {sections[categoryName]
                            .slice(1, 4)
                            .map((newsElement, index) => (
                              <Link
                                className="news_container--link"
                                key={newsElement.ID}
                                to={`/news/${newsElement.ID}`}
                              >
                                
                                <article
                                  key={index}
                                >
                                  {index === 0 ? (
                                    <>
                             
                                      <h2 className="news--title">
                                      {newsElement.title.length > 50 ? newsElement.title.substring(0,50) + " ..." : newsElement.title}
                                      </h2>
                                      <div
                                        className="news-extract"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            newsElement.content
                                              .replace(/<\/?[^>]+(>|$)/g, "")
                                              .substring(0, 100) + "...",
                                        }}
                                      ></div>
                                    </>
                                  ) : index === 1 ? (
                                    <>
                                      <h2 className="news--title">
                                      {newsElement.title.length > 50 ? newsElement.title.substring(0,50) + " ..." : newsElement.title}
                                      </h2>
                                      <picture className="news-image">
                                        {newsElement.feature_image && (
                                          <img
                                            className="news-image--img"
                                            src={newsElement.feature_image}
                                            alt={newsElement.title}
                                          />
                                        )}
                                      </picture>
                                      <section className="news_content--info">
                                        <section className="news_content--info_cat">
                                          {/* {newsElement.categories_name
                                            .length > 1 ? (
                                            newsElement.categories_name.map(
                                              (category, index) =>
                                                category !== "Noticiero" ? (
                                                  <p
                                                    className="news-cat"
                                                    key={index}
                                                  >
                                                    {category}
                                                  </p>
                                                ) : null
                                            )
                                          ) : (
                                            <p className="news-cat">
                                              {newsElement.categories_name[0]}
                                            </p>
                                          )} */}
                                        </section>
                                      </section>

                                      <div
                                        className="news-extract oculto"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            newsElement.content
                                              .replace(/<\/?[^>]+(>|$)/g, "")
                                              .substring(0, 100) + "...",
                                        }}
                                      ></div>
                                    </>
                                  ) : (
                                    <>
                                      <section className="news_content--info">
                                        <section className="news_content--info_cat">
                                          {/* {newsElement.categories_name
                                            .length > 1 ? (
                                            newsElement.categories_name.map(
                                              (category, index) =>
                                                category !== "Noticiero" ? (
                                                  <p
                                                    className="news-cat"
                                                    key={index}
                                                  >
                                                    {category}
                                                  </p>
                                                ) : null
                                            )
                                          ) : (
                                            <p className="news-cat">
                                              {newsElement.categories_name[0]}
                                            </p>
                                          )} */}
                                        </section>
                                      </section>
                                      <h2 className="news--title">
                                      {newsElement.title.length > 50 ? newsElement.title.substring(0,50) + " ..." : newsElement.title}
                                      </h2>
                                      <div
                                        className="news-extract oculto"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            newsElement.content
                                              .replace(/<\/?[^>]+(>|$)/g, "")
                                              .substring(0, 100) + "...",
                                        }}
                                      ></div>
                                    </>
                                  )}
                                </article>
                              </Link>
                            ))}
                        </section>
                        <section className="third-news">
                          {sections[categoryName]
                            .slice(4, 7)
                            .map((newsElement, index) => (
                              <Link
                                className="news_container--link"
                                key={newsElement.ID}
                                to={`/news/${newsElement.ID}`}
                              >
                                <article
                                  
                                  key={index}
                                >
                                  {index === 0 ? (
                                    <>
                                      <h2 className="news--title">
                                      {newsElement.title.length > 50 ? newsElement.title.substring(0,50) + " ..." : newsElement.title}
                                      </h2>
                                      <picture className="news-image">
                                        {newsElement.feature_image && (
                                          <img
                                            className="news-image--img"
                                            src={newsElement.feature_image}
                                            alt={newsElement.title}
                                          />
                                        )}
                                      </picture>
                                      <section className="news_content--info">
                                        <section className="news_content--info_cat">
                                          {/* {newsElement.categories_name
                                            .length > 1 ? (
                                            newsElement.categories_name.map(
                                              (category, index) =>
                                                category !== "Noticiero" ? (
                                                  <p
                                                    className="news-cat"
                                                    key={index}
                                                  >
                                                    {category}
                                                  </p>
                                                ) : null
                                            )
                                          ) : (
                                            <p className="news-cat">
                                              {newsElement.categories_name[0]}
                                            </p>
                                          )} */}
                                        </section>
                                      </section>

                                      <div
                                        className="news-extract"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            newsElement.content
                                              .replace(/<\/?[^>]+(>|$)/g, "")
                                              .substring(0, 100) + "...",
                                        }}
                                      ></div>
                                    </>
                                  ) : (
                                    <>
                                      <section className="news_content--info">
                                        <section className="news_content--info_cat">
                                          {/* {newsElement.categories_name
                                            .length > 1 ? (
                                            <p className="news-cat" key={0}>
                                              {newsElement.categories_name[0]}
                                            </p>
                                          ) : (
                                            <p className="news-cat">
                                              {newsElement.categories_name[0]}
                                            </p>
                                          )} */}
                                        </section>
                                      </section>
                                      <h2 className="news--title">
                                      {newsElement.title.length > 50 ? newsElement.title.substring(0,50) + " ..." : newsElement.title}
                                      </h2>
                                      <div
                                        className="news-extract oculto"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            newsElement.content
                                              .replace(/<\/?[^>]+(>|$)/g, "")
                                              .substring(0, 100) + "...",
                                        }}
                                      ></div>
                                    </>
                                  )}
                                </article>
                              </Link>
                            ))}
                        </section>
                      </section>
                    </section>
                    </section>
                  ) : null
                )
              : null;
          }
          return null;
        })}
        </>
      
    ) : (
      <p>Loading...</p>
    )}
    
    </>
   
  );
};

export { Prueba };
