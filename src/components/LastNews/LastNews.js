import React, { useState, useEffect } from "react";
import './LastNews.scss';

const LastNews = () => {
  const urlApiPost = "http://10.0.0.52:5000/posts";
  const [lastNews, setLastNews] = useState([]);

  useEffect(() => {
    fetch(urlApiPost)
      .then((response) => response.json())
      .then((data) => setLastNews(data))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  if (lastNews.length > 0) {
    return (
      <section className="lastNews">
        <h2 className="lastNews-section--title">Últimas noticias</h2>
        <section className="news_container lastNews_container">
          <section className="principal_news">
            {lastNews.map((newsElement, index) => {
              const excerptWithoutEllipsis = newsElement.excerpt.rendered.replace("[&hellip;]", ""); // Remove the ellipsis […]
              const imageUrl = newsElement.imageUrl; // Assuming you added imageUrl in your API response
              
              return (
                <article key={newsElement.id} className="news_container">
                  {index === 0 ? (
                    <h1 className="news--title">{newsElement.title.rendered}</h1>
                  ) : (
                    <h2 className="news--title">{newsElement.title.rendered}</h2>
                  )}
                  {index === 0 || index === 4 || index === 8 ?(
                      <div className="news-image">
                      <img src={imageUrl} alt={newsElement.title.rendered} />
                    </div>
                  ):(
                    <div></div>
                  )
                  }
                
                  <p className="news-extract" dangerouslySetInnerHTML={{ __html: excerptWithoutEllipsis }} />
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
