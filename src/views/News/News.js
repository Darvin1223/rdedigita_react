import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const News = () => {
  const { newsId } = useParams();
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    // Realiza una solicitud GET al endpoint de tu servidor Express para obtener la noticia por ID
    fetch(`https://apitest.rdedigital.com/api/post/${newsId}`)
      .then(response => response.json())
      .then(data => {
        setNewsData(data);
      })
      .catch(error => {
        console.error('Error fetching news details:', error);
      });
  }, [newsId]);

  console.log(newsData);

  return (
    <section className='content_one_news'>
      {newsData ? (
        <div>
          <ul className='content_one_news_list--sections'>
            <li className='content_one_news_list--sections--element'><Link to="/">Inicio</Link></li>
            <li className='content_one_news_list--sections--element'>
              <Link to={`/news/category/${newsData.categories_name}`}>
                {newsData.categories_name}
              </Link>
            </li>
            <li className='content_one_news_list--sections--element'>newsData.title</li>
          </ul>
          <article className='article_news_one'>
          <picture>
    <img src="${newsData.feature_image}" />
</picture>

          </article>
          <h1>{newsData.title}</h1>
          <p>{newsData.content}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </section>
  );
};

export { News };
