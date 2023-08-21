import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./News.scss";
const News = () => {
  const { newsId } = useParams();
  const [newsData, setNewsData] = useState(null);
  const [dataAllCat, setDataAllCat] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET al endpoint de tu servidor Express para obtener la noticia por ID
    fetch(`https://apitest.rdedigital.com/api/post/${newsId}`)
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data);
      })
      .catch((error) => {
        console.error("Error fetching news details:", error);
      });
  }, [newsId]);
  useEffect(() => {
    if (newsData) {
      const categoriesName = newsData.categories_name;
      setDataAllCat(categoriesName);
    }
  }, [newsData]);
 console.log(dataAllCat)
  // const image = newsData.feature_image;
  // console.log(image);
  let newCat = "";
  // console.log(newsData.categories_name);
  for (let index = 0; index < dataAllCat.length; index++) {
    if(index === 0){
     continue;
    }
    newCat = dataAllCat[index]
    break;
  }

  console.log(newsData)
  
  return (
    <section className="container">
      {newsData ? (
        <section className="content_one_news">
        <section className="content_one_news--top">
        <ul className="content_one_news_list--sections">
            <li className="content_one_news_list--sections--element">
              <Link to="/">Inicio</Link>
              <span className="content_one_news_list--sections--element-row">{'>'}</span>
            </li>
            <li className="content_one_news_list--sections--element">
            
              <Link to={`/news/category/${newCat}`}>
                {newCat}
                <span className="content_one_news_list--sections--element-row">{'>'}</span>
              </Link>
            </li>
            <li className="content_one_news_list--sections--element">
              <p>{newsData.title}</p>
            </li>
          </ul>
          <ul className="content_one_news_social--sections"></ul>
        </section>
          
          <article className="article_news_one">
          <section className="article_news_one--info">
            <p>Escrito por <span>{newsData.author_data.post_author}</span> el <span>{newsData.post_date}</span></p>
          </section>
          <h1 className="article_news_one--title">{newsData.title}</h1>
            <picture className="article_news_one_img">
              <img
                src={`${newsData.feature_image}`}
                className="article_news_one_img--img"
              />
            </picture>
            <div className="article_news_one--extrac" dangerouslySetInnerHTML={{ __html: newsData.content }} />
          </article>
        </section>
      ) : (
        <p>Cargando...</p>
      )}
    </section>
  );
};

export { News };