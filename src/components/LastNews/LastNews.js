import React, { useState, useEffect } from "react";
import './LastNews.scss';

const LastNews = () => {
  const urlApiLatestPosts = "http://localhost:3001/api/latestPosts"; // Cambia la URL a donde esté corriendo tu servidor backend
  const [lastNews, setLastNews] = useState([]);

  useEffect(() => {
    fetch(urlApiLatestPosts)
      .then((response) => response.json())
      .then((data) => setLastNews(data))
      .catch((error) => console.error("Error fetching latest posts:", error));
  }, []);

  if (lastNews.length > 0) {
    return (
      <section className="lastNews">
        <h2 className="lastNews-section--title">Últimas noticias</h2>
        <section className="news_container lastNews_container">
          <section className="principal_news">
            {lastNews.map((newsElement, index) => {
              const excerptWithoutEllipsis = newsElement.content.replace(/<\/?[^>]+(>|$)/g, ""); // Use "content" for content
              const imageUrl = newsElement.feature_image; // Change to the correct field name in your API response

              return (
                <article key={newsElement.ID} className="news_container">
                  {index === 0 ? (
                    <h1 className="news--title">{newsElement.title}</h1> // Use "title" for title
                  ) : (
                    <h2 className="news--title">{newsElement.title}</h2>
                  )}
                 
                    <picture className="news-image">
                      {imageUrl && (
                        <img className="news-image--img" src={imageUrl} alt={newsElement.title} />
                      )}
                    </picture>
                 
                    <p className="news-extract">{excerptWithoutEllipsis.substring(0, 200)}</p>
                  
                </article>
              );
            })}
          </section>
        </section>
      </section>
    );
  } else {
    return <p className="text-center">No hay noticias disponibles</p>;
  }
};

export { LastNews };
