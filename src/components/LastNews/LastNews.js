import React, { useState, useEffect } from "react";
import "./LastNews.scss"; // Asegúrate de tener el archivo de estilos correcto
import { Link } from 'react-router-dom';

const LastNews = () => {
  const urlApiLatestPosts = "https://apitest.rdedigital.com/api/latestPosts"; // Cambia la URL a donde esté corriendo tu servidor backend
  const [lastNews, setLastNews] = useState([]);

  useEffect(() => {
    fetch(urlApiLatestPosts)
      .then((response) => response.json())
      .then((data) => setLastNews(data.slice(0, 9)))
      .catch((error) => console.error("Error fetching latest posts:", error));
  }, []);

  if (lastNews.length > 0) {
    const firstNews = lastNews[0];
    const secondNews = lastNews.slice(1, 5);
    const thirdNews = lastNews.slice(5);

    return (
      <section className={`lastNews`}>
        <h2 className="lastNews-section--title">Últimas noticias</h2>
        <section className="news_container lastNews_container principal_news">
          <div className="first-news-container">
            {firstNews && (
              <Link className="news_container--link" key={firstNews.ID} to={`/news/${firstNews.ID}`}>
                <article className="first-post news_content">
                  <h1 className="news--title">{firstNews.title}</h1>
                  <picture className="news-image">
                    {firstNews.feature_image && (
                      <img className="news-image--img" src={firstNews.feature_image} alt={firstNews.title} />
                    )}
                  </picture>
                  <p className="news-extract">{firstNews.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 200)+ "..."}</p>
                </article>
              </Link>
            )}
    
            {/* Agregar el segundo elemento en el primer contenedor */}
            {secondNews.slice(0, 1).map((newsElement, index) => (
              <Link className="news_container--link" key={newsElement.ID} to={`/news/${newsElement.ID}`}>
                <article className="news_content other-post second-news " key={index}>
                  <h2 className="news--title">{newsElement.title}</h2>
                  <picture className="news-image">
                    {newsElement.feature_image && (
                      <img className="news-image--img" src={newsElement.feature_image} alt={newsElement.title} />
                    )}
                  </picture>
                  <p className="news-extract">{newsElement.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 200)+ "..."}</p>
                </article>
              </Link>
            ))}
          </div>
    
          {/* A continuación, puedes dividir los elementos restantes en dos contenedores */}
          <div className="second-news">
            {secondNews.slice(1).map((newsElement, index) => (
              <Link className="news_container--link" key={newsElement.ID} to={`/news/${newsElement.ID}`}>
                <article className={`news_content other-post second-news `} key={index}>
                  {index === 1 ? (
                    <>
                      <h2 className="news--title">{newsElement.title}</h2>
                      <picture className="news-image">
                        {newsElement.feature_image && (
                          <img className="news-image--img" src={newsElement.feature_image} alt={newsElement.title} />
                        )}
                      </picture>
                      <p className="news-extract">{newsElement.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 200)+ "..."}</p>
                    </>
                  ) : (
                    <h2 className="news--title">{newsElement.title}</h2>
                  )}
                </article>
              </Link>
            ))}
          </div>
    
          <div className="third-news">
            {thirdNews.map((newsElement, index) => (
              <Link className="news_container--link" key={newsElement.ID} to={`/news/${newsElement.ID}`}>
                <article className="news_content other-post" key={index}>
                  {index === 0 || index === 6 ? (
                    <>
                      <h2 className="news--title">{newsElement.title}</h2>
                      <picture className="news-image">
                        {newsElement.feature_image && (
                          <img className="news-image--img" src={newsElement.feature_image} alt={newsElement.title} />
                        )}
                      </picture>
                      <p className="news-extract">{newsElement.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 200)+ "..."}</p>
                    </>
                  ) : (
                    <h2 className="news--title">{newsElement.title}</h2>
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
