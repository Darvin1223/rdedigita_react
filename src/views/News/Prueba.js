import React, { useEffect, useState } from "react";
import "./News.scss";
import { Link, useParams } from "react-router-dom";
import Arteria from "./../../assets/img/Economia_Mobile.png";
import { LastNewsComponent } from "../../components/LastNewsComponent/LastNewsComponent";
import { SocialMediaIcons } from "../../components/SocialMediaIcons/SocialMediaIcons";
import { RelacionalNews } from "../../components/RelacionalNews/RelacionalNews";
import Btn from "../../components/Btn/Btn";
const Prueba_news = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isShared, setIsShared] = useState(false);
  const [newsData, setNewsData] = useState({});
  const [authoPhoto, setAuthoPhoto] = useState("");
  const { newsId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/posts/${newsId}`)
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(`Error fetching news details: ${error}`);
        setIsLoading(false);
      });
  }, [newsId]);



  return (
    <>
      <section className="container">
        {isLoading ? (
          <p className="text-center">Cargando...</p>
        ) : (
          newsData && (
            
            // Renderizar el contenido una vez que los datos estén disponibles
            <>
              <section className="content_one_news">
                <h1 className="article_news_one--title">
                  {newsData.title.rendered}
                </h1>
                <section className="contenedor">
                  <article className="article_news_one">
                    <section className="article_news_one--info">
                        <section  className={`article_news_one--info-container ${
                            isShared ? "show" : "hidden"
                          }_media`}>
                            <section className="article_news_one--info--published">
                            <picture className="article_news_one--info--published_img">
                            <img
                            src=""
                            className="article_news_one--info--published_img--img"
                          />
                          </picture>
                          <section className="article_news_one--info--texts">
                            <p>
                              <span>Autor por:</span> <br />
                              {newsData.author.name}
                            </p>
                          </section>
                            </section>
                        </section>
                        <section
                        className={`article_news_one--socialMedia ${
                          isShared ? "show" : "hidden"
                        }_social_media_container`}
                      >
                        <SocialMediaIcons />
                      </section>
                    </section>
                    <picture className="article_news_one_img">
                    <img
                      src={`${newsData.media}`}
                      className="article_news_one_img--img"
                    />
                    <p className="pie_pagina">{newsData.title.rendered}</p>
                  </picture>
  
                  <div className="article_news_one--extrac">
                    {newsData.content.rendered && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: newsData.content.rendered,
                        }}
                      />
                    )}
                  </div>
                  </article>
                  <section className="content_one_news--extra">
                    <section className="content_one_news--extra-last">
                      <h4 className="content_one_news--extra-last-title">
                        Ultimas noticias
                      </h4>
                      <section className="content_one_news--extra-last_section_container">
                        <LastNewsComponent />
                      </section>
                      <picture className="Anuncio">
                        <img src={Arteria} />
                      </picture>
                    </section>
                  </section>
                </section>
                <section className="relacionalNews">
                <h3 className="relacionalNews--title">Noticias Relacionadas</h3>
                <ul className="relacionalNews--list">
                  {newsData.category && <RelacionalNews categorie={newsData.category} />}
                </ul>
  
                <Btn  text="Cargar mas" />
              </section>
              </section>
            </>
          )
        )}
      </section>
    </>
  );
};

export { Prueba_news };
