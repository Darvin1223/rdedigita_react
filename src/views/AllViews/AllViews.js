import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import arteria from "../../assets/img/Arteria_mobile.png";
import "./../../components/LastNews/LastNews.scss";
import "./AllViews.scss";
const AllViews = ({ categorie, status }) => {
  console.log(categorie);
  const API_URL = "https://api.rdedigital.com/api/v2/posts/";
  const [isLoading, setIsLoading] = useState(true);
  const [lastNews, setLastNews] = useState([]);
  const [firstNews, setFirstNews] = useState(null);
  const [secondNews, setSecondNews] = useState([]);
  const [thirdNews, setThirdNews] = useState([]);
  const [moreNews, setMoreNews] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}${categorie}`)
      .then((response) => response.json())
      .then((data) => {
        const slicedNews = data.slice(0, 10);
        setLastNews(slicedNews);
        setMoreNews(slicedNews.slice(1, 10));
        setFirstNews(slicedNews[0]);
        setSecondNews(slicedNews.slice(1, 5));
        setThirdNews(slicedNews.slice(5));
        setIsLoading(false); // Marcamos que la carga ha finalizado
      })
      .catch((error) => {
        console.error("Error fetching latest posts:", error);
        setIsLoading(false); // En caso de error, también marcamos que la carga ha finalizado
      });
  }, []);

  isLoading ? console.log(moreNews) : <p>"Cargando</p>;
  return (
    <>
      {status ? (
        <section className={``}>
          {/* Contenido cuando 'status' es verdadero */}
        </section>
      ) : (
        <>
          {lastNews.length > 0 ? (
            <section className="section_interns">
              <section className={`lastNews`}>
                <h2 className="lastNews-section--title">{categorie}</h2>
                <section className="news_container lastNews_container principal_news">
                  <section className="first-news-container">
                    {firstNews && (
                      <React.Fragment>
                        <Link
                          className="news_container--link"
                          key={firstNews.id_wordpress}
                          to={`/news/${firstNews.id_wordpress}`}
                        >
                          <article
                            className="first-post news_content"
                            key={firstNews.id_wordpress}
                          >
                            <picture
                              className="news-image"
                              key={firstNews.id_wordpress}
                            >
                              {firstNews.media_post && (
                                <img
                                  className="news-image--img"
                                  src={firstNews.media_post}
                                  alt={firstNews.title_post}
                                />
                              )}
                            </picture>
                            <p className="news-image-pie">
                              {firstNews.title_post}
                            </p>
                            <h1 className="news--title">
                              {firstNews.title_post}
                            </h1>
                            <p className="news-extract">
                              {firstNews.content_post
                                .replace(/<\/?[^>]+(>|$)/g, "")
                                .substring(0, 200) + "..."}
                            </p>
                          </article>
                        </Link>
                        <picture className="anuncios desktop_show">
                          <a>
                            {" "}
                            <img src={arteria} className="anuncio" />
                          </a>

                          <Link
                            class="news_container--link news_container_first"
                            to="/news/"
                          >
                            <article class="news_content third-news-posts tercero news_container_first">
                              <section class="news_content--info">
                                <section class="news_content--info_cat"></section>
                              </section>
                              <h2 class="news--title italic">
                                {firstNews.title_post}
                              </h2>
                              <div class="news-extract oculto">
                                {firstNews.content_post
                                  .replace(/<\/?[^>]+(>|$)/g, "")
                                  .substring(0, 200) + "..."}
                              </div>
                            </article>
                          </Link>
                        </picture>
                      </React.Fragment>
                    )}
                  </section>

                  {/* A continuación, puedes dividir los elementos restantes en dos contenedores */}
                  <div className="second-news">
                    {secondNews.slice(1).map((newsElement, index) => (
                      <Link
                        className="news_container--link"
                        key={newsElement.id_wordpress}
                        to={`/news/${newsElement.id_wordpress}`}
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
                                {newsElement.title_post}
                              </h2>

                              <div
                                className="news-extract"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    newsElement.content_post
                                      .replace(/<\/?[^>]+(>|$)/g, "")
                                      .substring(0, 100) + "...",
                                }}
                              ></div>
                            </>
                          ) : index === 1 ? (
                            <>
                              <h2 className="news--title">
                                {newsElement.title_post}
                              </h2>
                              <picture className="news-image">
                                {firstNews.media_post && (
                                  <img
                                    className="news-image--img"
                                    src={newsElement.media_post}
                                    alt={newsElement.title_post}
                                  />
                                )}
                              </picture>

                              <div
                                className="news-extract oculto"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    newsElement.content_post
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
                                {newsElement.title_post}
                              </h2>
                              <div
                                className="news-extract oculto"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    newsElement.content_post
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
                        key={newsElement.id_wordpress}
                        to={`/news/${newsElement.id_wordpress}`}
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
                                {newsElement.title_post}
                              </h2>
                              <picture className="news-image">
                                {firstNews.media_post && (
                                  <img
                                    className="news-image--img"
                                    src={newsElement.media_post}
                                    alt={newsElement.title_post}
                                  />
                                )}
                              </picture>
                              <div
                                className="news-extract"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    newsElement.content_post
                                      .replace(/<\/?[^>]+(>|$)/g, "")
                                      .substring(0, 100) + "...",
                                }}
                              ></div>
                            </>
                          ) : index === 1 ? (
                            <>
                              <picture className="anuncios">
                                <a>
                                  {" "}
                                  <img src={arteria} className="anuncio" />
                                </a>
                              </picture>
                            </>
                          ) : (
                            <>
                              <h2 className="news--title italic">
                                {newsElement.title_post}
                              </h2>
                              <div
                                className={`news-extract ${
                                  index === 1 ? "" : "oculto"
                                }`}
                                dangerouslySetInnerHTML={{
                                  __html:
                                    newsElement.content_post
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
              <section className="more_news">
              <h2 className="lastNews-section--title">Mas noticias</h2>
                {moreNews.map((element, index) => (
                  <li key={index} className="news_relational--elements">
                    <Link to={`/news/${element.id}`}>
                      <picture className="news_relational--elements-imgContainer">
                        <img
                          src={element.media_post}
                          alt={element.title_post}
                          className="news_relational--elements-imgContainer-img"
                        />
                      </picture>
                      <p className="news_relational--elements-title">
                        {element.title_post}{" "}
                      </p>
                    </Link>
                  </li>
                ))}
              </section>
            </section>
          ) : (
            <p className="text-center">No hay noticias disponibles</p>
          )}
        </>
      )}
    </>
  );
};

export { AllViews };
