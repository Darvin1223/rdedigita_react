import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./News.scss";
import { SocialMediaIcons } from "../../components/SocialMediaIcons/SocialMediaIcons";
import { RelacionalNews } from "../../components/RelacionalNews/RelacionalNews";
import { LastNewsComponent } from "./../../components/LastNewsComponent/LastNewsComponent";
import Btn from "../../components/Btn/Btn";
import Arteria from "./../../assets/img/Economia_Mobile.png";
import DOMPurify from "dompurify";
import TextToSpeech from "../../components/TextsToSpeak/TextToSpeak";
const News = () => {
  const [newsCount, setNewsCount] = useState(1); // Contador de noticias cargadas
  const [additionalNews, setAdditionalNews] = useState([]);

  const { newsId } = useParams();
  const [newsData, setNewsData] = useState(null);
  const [dataAllCat, setDataAllCat] = useState([]);
  const [newCat, setNewCat] = useState(""); // State for newCat

  useEffect(() => {
    fetch(`https://apitest.rdedigital.com/api/post/${newsId}`)
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data);
      })
      .catch((error) => {
        console.error("Error fetching news details:", error);
      });
  }, [newsId]);
  const loadMoreNews = () => {
    const nextPage = newsCount + 1;
    fetch(`https://apitest.rdedigital.com/api/post/${newsId}?page=${nextPage}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setAdditionalNews([...additionalNews, ...data]);
          setNewsCount(nextPage);
        }
      })
      .catch((error) => {
        console.error("Error fetching additional news:", error);
      });
  };

  useEffect(() => {
    if (newsData) {
      const categoriesName = newsData.categories_name;
      setDataAllCat(categoriesName);
      if (categoriesName.length > 1) {
        setNewCat(categoriesName[1]); // Set newCat based on your logic
      }
    }
  }, [newsData]);
  let sanitizedHtml = "";
  if (newsData) {
    sanitizedHtml = DOMPurify.sanitize(newsData.content);
  }
  // console.log(newCat)
  return (
    <section className="container">
      {newsData ? (
        <>
          <section className="content_one_news">
            <h1 className="article_news_one--title">{newsData.title}</h1>
           {/*  <TextToSpeech /> */}
            <section className="content_one_news--top">
              <ul className="content_one_news_list--sections">
                <li className="content_one_news_list--sections--element">
                  <Link to="/">Inicio</Link>
                  <span className="content_one_news_list--sections--element-row">
                    {">"}
                  </span>
                </li>
                <li className="content_one_news_list--sections--element">
                  <Link to={`/news/category/${newCat}`}>
                    {newCat}
                    <span className="content_one_news_list--sections--element-row">
                      {">"}
                    </span>
                  </Link>
                </li>
                <li className="content_one_news_list--sections--element">
                  <p>{newsData.title}</p>
                </li>
              </ul>
              <ul className="content_one_news_social--sections"></ul>
            </section>
            <section className="contenedor">
              <article className="article_news_one">
                <section className="article_news_one--info">
                  <section className="article_news_one--info-container">
                    <section className="article_news_one--info--published">
                      <picture className="article_news_one--info--published_img">
                        <img
                          src={newsData.author_avatar}
                          className="article_news_one--info--published_img--img"
                        />
                      </picture>
                      <section className="article_news_one--info--texts">
                        <p>
                          {" "}
                          <span>Autor por:</span> <br />
                          {newsData.author_data.post_author}
                        </p>
                      </section>
                    </section>
                    <section className="article_news_one--info--date">
                    
                      <section className="article_news_one--info--texts-date">
                        <p>
                          {" "}
                          <span>Publicado:</span> <br />
                          {newsData.post_date}
                        </p>
                      </section>
                    </section>
                    <span class="material-symbols-outlined icon_share">share</span>
                  </section>
                  <section className="article_news_one--socialMedia">
                    <SocialMediaIcons />
                  </section>
                </section>
                <picture className="article_news_one_img">
                  <img
                    src={`${newsData.feature_image}`}
                    className="article_news_one_img--img"
                  />
                  <p className="pie_pagina">{newsData.title}</p>
                </picture>
                <div
                  className="article_news_one--extrac"
                  dangerouslySetInnerHTML={{ __html: newsData.content }}
                />
                {/* <div
                  className="article_news_one--extrac"
                  dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
                /> */}
              </article>
              <section className="content_one_news--extra">
               
                <section className="content_one_news--extra-last">
                  <h4 className="content_one_news--extra-last-title">
                    Ultimas noticias
                  </h4>
                  <LastNewsComponent />
                </section>
                <picture className="Anuncio">
                  <img src={Arteria} />
                </picture>
              </section>
            </section>
            <section className="relacionalNews">
              <h3 className="relacionalNews--title">Noticias Relacionadas</h3>
              <ul className="relacionalNews--list">
                {newCat && <RelacionalNews categorie={newCat} />}
              </ul>

              <Btn onClick={loadMoreNews} text="Cargar mas" />
            </section>
          </section>
        </>
      ) : (
        <p className="text-center">Cargando...</p>
      )}
    </section>
  );
};

export { News };
