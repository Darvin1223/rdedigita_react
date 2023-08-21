import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import "./CategoriesNews.scss";
import { News } from '../News/News';

const CategoriesNews = () => {
  const { nameCategorie } = useParams();
  const [categoryPosts, setCategoryPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://apitest.rdedigital.com/api/postsByCategory/${nameCategorie}`)
      .then((response) => response.json())
      .then((data) => {
        setCategoryPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
        setLoading(false);
      });
  }, [nameCategorie]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="section_categories">
      <h2 className='section_categories--title'>{nameCategorie}</h2>
      <section className="section_categories_container_links">{/* Add links here */}</section>
      <section className="section_categories_container_news">
        {categoryPosts.map((news) => (
          <Link to={`/news/${news.ID}`}>
          <article className="news" key={news.ID}>
            <picture className="news_img_container">
              <img src={news.feature_image} alt={news.title} />
            </picture>
            <section className="news_texts">
              <h2 className="news_texts--title">{news.title}</h2>
              <p className='news_texts--description'>{news.post_excerpt}</p>
            </section>
          </article>
          </Link>
          
        ))}
      </section>
    </section>
  );
};

export { CategoriesNews };
