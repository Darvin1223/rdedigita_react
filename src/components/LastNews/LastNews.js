import React, { useState, useEffect } from "react";
import "./LastNews.scss"; // Asegúrate de tener el archivo de estilos correcto
import { Link } from 'react-router-dom';

const LastNews = () => {
  const urlApiLatestPosts = "https://apitest.rdedigital.com/api/latestPosts"; // Cambia la URL a donde esté corriendo tu servidor backend
  const [lastNews, setLastNews] = useState([]);

  useEffect(() => {
    fetch(urlApiLatestPosts)
      .then((response) => response.json())
      .then((data) => setLastNews(data))
      .catch((error) => console.error("Error fetching latest posts:", error));
  }, []);

  if (lastNews.length > 0) {
    const firstNews = lastNews[0];
    const secondNews = lastNews.slice(1, 4);
    const thirdNews = lastNews.slice(4);

    return (
      <section className="lastNews">
        <h2 className="lastNews-section--title">Últimas noticias</h2>
        <section className="news_container lastNews_container principal_news">
          <div className="first-news-container">
            {firstNews && (
              <Link className="news_container--link" key={firstNews.ID} to={`/news/${firstNews.ID}`}>
                <article className="first-post">
                  <h1 className="news--title">{firstNews.title}</h1>
                  <picture className="news-image">
                    {firstNews.feature_image && (
                      <img className="news-image--img" src={firstNews.feature_image} alt={firstNews.title} />
                    )}
                  </picture>
                  <p className="news-extract">{firstNews.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 200)}</p>
                </article>
              </Link>
            )}
          </div>
          <div className="second-news">
            {secondNews.map((newsElement, index) => (
              <Link className="news_container--link" key={newsElement.ID} to={`/news/${newsElement.ID}`}>
                <article className={`news_container other-post ${index === 0 ? "second-news" : "third-news"}`}>
                  <h2 className="news--title">{newsElement.title}</h2>
                  <picture className="news-image">
                    {newsElement.feature_image && (
                      <img className="news-image--img" src={newsElement.feature_image} alt={newsElement.title} />
                    )}
                  </picture>
                  <p className="news-extract">{newsElement.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 200)}</p>
                </article>
              </Link>
            ))}
          </div>
          <div className="third-news">
            {thirdNews.map((newsElement) => (
              <Link className="news_container--link" key={newsElement.ID} to={`/news/${newsElement.ID}`}>
                <article className="news_container other-post">
                  <h2 className="news--title">{newsElement.title}</h2>
                  <picture className="news-image">
                    {newsElement.feature_image && (
                      <img className="news-image--img" src={newsElement.feature_image} alt={newsElement.title} />
                    )}
                  </picture>
                  <p className="news-extract">{newsElement.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 200)}</p>
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
