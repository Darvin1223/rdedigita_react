import React, { useState, useEffect } from "react";
import "./LastNews.scss"; // Asegúrate de tener el archivo de estilos correcto
import { Link } from "react-router-dom";

import arteria from '../../assets/img/Arteria_mobile.png';

const LastNews = () => {
  const urlApiLatestPosts = "https://apitest.rdedigital.com/api/v1/latestPost"; // Cambia la URL a donde esté corriendo tu servidor backend
  // const urlApiLatestPosts = "https://apitest.rdedigital.com/api/v1/posts"; // Cambia la URL a donde esté corriendo tu servidor backend
  // const urlApiLatestPosts = "https://apitest.rdedigital.com/api/latestPosts"; // Cambia la URL a donde esté corriendo tu servidor backend
  const [lastNews, setLastNews] = useState([]);

  useEffect(() => {
    fetch(urlApiLatestPosts)
      .then((response) => response.json())
      .then((data) => setLastNews(data.slice(0, 8)))
      .catch((error) => console.error("Error fetching latest posts:", error));
  }, []);

  console.log(lastNews)
  if (lastNews.length > 0) {
    const firstNews = lastNews[0];
    const secondNews = lastNews.slice(1, 5);
    const thirdNews = lastNews.slice(5);
    console.log(firstNews)
    return (
      <section className={`lastNews`}>
        <h2 className="lastNews-section--title">Noticias en portada</h2>
        <section className="news_container lastNews_container principal_news">
          <section className="first-news-container">
            {firstNews && (
             <React.Fragment>
             <Link
               className="news_container--link"
               key={firstNews.id}
               to={`/news/${firstNews.id}`}
             >
               <article className="first-post news_content" key={firstNews.id}>
                 <picture className="news-image" key={firstNews.id}>
                   {firstNews.media && (
                     <img
                       className="news-image--img"
                       src={firstNews.media}
                       alt={firstNews.title.rendered}
                     />
                   )}
                 </picture>
                 <p className="news-image-pie">{firstNews.title.rendered}</p>
                 <h1 className="news--title">{firstNews.title.rendered}</h1>
                 <p className="news-extract">
                   {firstNews.content.rendered
                     .replace(/<\/?[^>]+(>|$)/g, "")
                     .substring(0, 200) + "..."}
                 </p>
               </article>
             </Link>
             <picture className="anuncios">
             <a> <img src={arteria} className="anuncio"/></a>
             <a> <img src={arteria} className="anuncio"/></a>
             </picture>
             </React.Fragment>

            )}

          </section>

          {/* A continuación, puedes dividir los elementos restantes en dos contenedores */}
          <div className="second-news">
            {secondNews
              .slice(1)
              .map((newsElement, index) => (
             
                <Link
                  className="news_container--link"
                  key={newsElement.id}
                  to={`/news/${newsElement.id}`}
                >
                  <article
                    className={`news_content third-news-posts ${
                      index === 1 ? "segunda" : ""
                    } ${index === 2 ? "tercero" : ""}`}
                    key={index}
                  >
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
                                .replace(/<\/?[^>]+(>|$)/g, "")
                                .substring(0, 100) + "...",
                          }}
                        ></div>
                      </>
                    ) : index === 1 ? (
                      <>
                        <h2 className="news--title">
                          {newsElement.title.rendered}
                        </h2>
                        <picture className="news-image">
                          {firstNews.media && (
                            <img
                              className="news-image--img"
                              src={newsElement.media}
                              alt={newsElement.title.rendered}
                            />
                          )}
                        </picture>

                        <div
                          className="news-extract oculto"
                          dangerouslySetInnerHTML={{
                            __html:
                              newsElement.content.rendered
                                .replace(/<\/?[^>]+(>|$)/g, "")
                                .substring(0, 100) + "...",
                          }}
                        ></div>
                      </>
                    ) : (
                      <>
                        <section className="news_content--info">
                          <section className="news_content--info_cat">
                            {/* {newsElement.categories_name.length > 1 ? (
              newsElement.categories_name.map((category, index) => (
                category !== 'Noticiero' ? (
                  <p className="news-cat" key={index}>{category}</p>
                ) : (
                  null
                )
              ))
            ) : (
              <p className="news-cat">{newsElement.categories_name[0]}</p>
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
                                .replace(/<\/?[^>]+(>|$)/g, "")
                                .substring(0, 100) + "...",
                          }}
                        ></div>
                      </>
                    )}
                  </article>
                </Link>
              ))}
          </div>

          <div className="third-news">
            {thirdNews.map((newsElement, index) => (
              <Link
                className="news_container--link"
                key={newsElement.ID}
                to={`/news/${newsElement.ID}`}
              >
                <article
                  className={`news_content third-news-posts ${
                    index === 1 ? "segunda" : ""
                  } ${index === 2 ? "tercero" : ""}`}
                  key={index}
                >
                  {index === 0 ? (
                    <>
                      <h2 className="news--title">
                        {newsElement.title.rendered}
                      </h2>
                      <picture className="news-image">
                        {firstNews.media && (
                          <img
                            className="news-image--img"
                            src={newsElement.media}
                            alt={newsElement.title.rendered}
                          />
                        )}
                      </picture>
                      <div
                        className="news-extract"
                        dangerouslySetInnerHTML={{
                          __html:
                            newsElement.content.rendered
                              .replace(/<\/?[^>]+(>|$)/g, "")
                              .substring(0, 100) + "...",
                        }}
                      ></div>
                    </>
                  ) : index === 1 ? (
                    <>
                    <picture className="anuncios">
                    <a> <img src={arteria} className="anuncio"/></a>
                    </picture>
                    </>
                  
                  ) : (
                    <>
                      <h2 className="news--title italic">
                        {newsElement.title.rendered}
                      </h2>
                      <div
                        className={`news-extract ${
                          index === 1 ? "" : "oculto"
                        }`}
                        dangerouslySetInnerHTML={{
                          __html:
                            newsElement.content.rendered
                              .replace(/<\/?[^>]+(>|$)/g, "")
                              .substring(0, 100) + "...",
                        }}
                      ></div>
                    </>
                  )}
                </article>
              </Link>
            ))}
          </div>
        </section>
      </section>
    );
  } else {
    return <p className="text-center">No hay noticias disponibles</p>;
  }
};

export { LastNews };
