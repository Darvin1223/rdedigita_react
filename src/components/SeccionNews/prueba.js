import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./prueba.scss";
import DOMPurify from "dompurify";

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
const API_POSTS = "https://apitest.rdedigital.com/api/v1/posts/category/";
const POSTS_PER_CATEGORY = 6;

const Prueba = () => {
  const [sections, setSections] = useState({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const categories = [
      "Opinion",
      "Internacional",
      "Sociedad",
      "Economia",
      "Tecnologia",
      "Deporte",
      "Cultura",
      "Gente",
    ];

    const fetchData = async () => {
      try {
        const sectionsData = {};

        for (const category of categories) {
          const response = await fetch(`${API_POSTS}${category}`);
          const data = await response.json();
          sectionsData[category] = data;
          setSections((prevSections) => ({
            ...prevSections,
            [category]: data,
          }));
        }

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
      originalName: "Opinion",
      url: "/opinion",
      ourName: "Opinión",
      banner: Opinion,
      banner_mobile: Opinion,
      banner_tablet: Opinion,
    },
    {
      id: 2,
      originalName: "Internacional",
      url: "/internacional",
      ourName: "Internacional",
      banner: Deportes,
      banner_mobile: Deportes,
      banner_tablet: Deportes,
    },
    {
      id: 3,
      originalName: "Sociedad",
      url: "/sociedad",
      ourName: "Sociedad",
      banner: Sociedad,
      banner_mobile: Sociedad,
      banner_tablet: Sociedad,
    },
    {
      id: 4,
      originalName: "Economia",
      url: "/economia",
      ourName: "Economia",
      banner: Economia,
      banner_mobile: Economia_Mobile,
      banner_tablet: Economia_Mobile,
    },
    {
      id: 5,
      originalName: "Tecnologia",
      url: "/tecnologia",
      ourName: "Tecnologia",
      banner: Economia,
      banner_mobile: elMenaje_Mobile,
      banner_tablet: elMenaje_Mobile,
    },
    {
      id: 6,
      originalName: "Deporte",
      url: "/deporte",
      ourName: "Deportes",
      banner: Deportes,
      banner_mobile: Deportes,
      banner_tablet: Deportes,
    },
    {
      id: 7,
      originalName: "Cultura",
      url: "/cultura",
      ourName: "Cultura",
      banner: Cultura,
      banner_mobile: Cultura,
      banner_tablet: Cultura,
    },
    {
      id: 8,
      originalName: "Gente",
      url: "/gente",
      ourName: "Gente",
      banner: El_Pais,
      banner_mobile: El_Pais,
      banner_tablet: El_Pais,
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
                      <section
                        className="conteiner_news_break"
                        key={categoryName}
                      >
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
                          className={`section section-${categorie.ourName}`}
                        >
                          <Link
                            to={`/news/category/${categoryName}`}
                            className="section--link"
                            key={categoryName}
                          >
                            <h3 className="section--title">
                              {categorie.ourName}
                            </h3>
                          </Link>
                          <section className="news_container">
                            <section className="first-news-container">
                              {sections[categoryName]
                                .slice(0, 1)
                                .map((newsElement, index) => (
                                  <React.Fragment key={newsElement.ID}>
                                    <section>
                                      <Link
                                        className="news_container--link"
                                        key={newsElement.ID}
                                        to={`/news/${newsElement.ID}`}
                                      >
                                        <article className="first-post">
                                          <picture className="news-image">
                                            {newsElement.media && (
                                              <img
                                                className="news-image--img"
                                                src={newsElement.media}
                                                alt={newsElement.title.rendered}
                                              />
                                            )}
                                          </picture>
                                          <p className="news-image-pie">
                                            {newsElement.title.rendered}
                                          </p>
                                          <h1 className="news--title">
                                            {newsElement.title.rendered}
                                          </h1>
                                          <p className="news-extract">
                                            {newsElement.content.rendered
                                              .replace(/<\/?[^>]+(>|$)/g, "")
                                              .substring(0, 200) + "..."}
                                          </p>
                                        </article>
                                      </Link>
                                    </section>
                                  <picture className="anuncios">
                                  <a> <img src={Arteria} className="anuncio"/></a>
                                    
                                  <a> <img src={Arteria} className="anuncio"/></a>
                                    
                                   
                                  </picture>
                                  </React.Fragment>
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
                                    <article key={index}>
                                      {index === 0 ? (
                                        <>
                                          <h2 className="news--title italic">
                                            {newsElement.title.rendered}
                                          </h2>
                                          <div
                                            className="news-extract"
                                            dangerouslySetInnerHTML={{
                                              __html:
                                                newsElement.content.rendered
                                                  .replace(
                                                    /<\/?[^>]+(>|$)/g,
                                                    ""
                                                  )
                                                  .substring(0, 150) + "...",
                                            }}
                                          ></div>
                                        </>
                                      ) : index === 1 ? (
                                        <>
                                          <h2 className="news--title">
                                            {newsElement.title.rendered}
                                          </h2>
                                          <picture className="news-image">
                                            {newsElement.media && (
                                              <img
                                                className="news-image--img"
                                                src={newsElement.media}
                                                alt={newsElement.title.rendered}
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
                                                newsElement.content.rendered
                                                  .replace(
                                                    /<\/?[^>]+(>|$)/g,
                                                    ""
                                                  )
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
                                          <h2 className="news--title italic">
                                            {newsElement.title.rendered}
                                          </h2>
                                          <div
                                            className="news-extract oculto"
                                            dangerouslySetInnerHTML={{
                                              __html:
                                                newsElement.content.rendered
                                                  .replace(
                                                    /<\/?[^>]+(>|$)/g,
                                                    ""
                                                  )
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
                                    <article key={index}>
                                      {index === 0 ? (
                                        <>
                                          <h2 className="news--title">
                                            {newsElement.title.rendered}
                                          </h2>
                                          <picture className="news-image">
                                            {newsElement.media && (
                                              <img
                                                className="news-image--img"
                                                src={newsElement.media}
                                                alt={newsElement.title.rendered}
                                              />
                                            )}
                                          </picture>
                                          <section className="news_content--info">
                                            <section className="news_content--info_cat">
                                            
                                            </section>
                                          </section>
                                          <div
                                            className="news-extract"
                                            dangerouslySetInnerHTML={{
                                              __html:
                                                newsElement.content.rendered
                                                  .replace(
                                                    /<\/?[^>]+(>|$)/g,
                                                    ""
                                                  )
                                                  .substring(0, 100) + "...",
                                            }}
                                          ></div>
                                        </>
                                      ) : index === 1 ? (
                                        <>
                                        <picture className="anuncios">
                                        <a> <img src={Arteria} className="anuncio"/></a>
                                        </picture>
                                        </>
                                      ):(
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
                                        <h2 className="news--title italic">
                                          {newsElement.title.rendered}
                                        </h2>
                                        <div
                                          className="news-extract oculto"
                                          dangerouslySetInnerHTML={{
                                            __html:
                                              newsElement.content.rendered
                                                .replace(
                                                  /<\/?[^>]+(>|$)/g,
                                                  ""
                                                )
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
