import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./News.scss";
import { SocialMediaIcons } from "../../components/SocialMediaIcons/SocialMediaIcons";
import { RelacionalNews } from "../../components/RelacionalNews/RelacionalNews";
// import { LastNewsComponent } from "./../../components/LastNewsComponent/LastNewsComponent";
import Btn from "../../components/Btn/Btn";
import Arteria from "./../../assets/img/Economia_Mobile.png";
import DOMPurify from "dompurify";
import { LastNewsComponent } from "../../components/LastNewsComponent/LastNewsComponent";
import { Comments } from "../../components/Comments/Comments";

const News = () => {
  const [newsCount, setNewsCount] = useState(1); 
  const [additionalNews, setAdditionalNews] = useState({});
  const [isShared, setIsShared] = useState(false);
  const { newsId } = useParams();
  const [newsData, setNewsData] = useState({});
  const [dataAllCat, setDataAllCat] = useState([]);
  const [newCat, setNewCat] = useState(""); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    
    fetch(`https://api.rdedigital.com/api/v2/post/${newsId}`)
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news details:", error);
        setIsLoading(false);
      });
  }, [newsId]);

  console.log(newsData);
  // const loadMoreNews = () => {
  //   const nextPage = newsCount + 1;
  //   fetch(`https://api.rdedigital.com/api/v2/post/${newsId}?page=${nextPage}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.length > 0) {
  //         setAdditionalNews([...additionalNews, ...data]);
  //         setNewsCount(nextPage);
  //         setIsLoading(false);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching additional news:", error);
  //       setIsLoading(false);
  //     });
  // };

  // useEffect(() => {
  //   if (newsData) {
  //     const categoriesName = newsData.category;
  //     setDataAllCat(categoriesName);
  //     if (categoriesName.length > 1) {
  //       setNewCat(categoriesName[1]); // Set newCat based on your logic
  //       setIsLoading(false);
  //     }
  //   }
  // }, [newsData]);


  const handleIsShared = () => {
    setIsShared(!isShared);
  };

  console.log(newsData)

  return (
    <section className="container">
      {!isLoading && newsData ?(
        <>
          <section className="content_one_news">
            <h1 className="article_news_one--title">
              {newsData.title_post}
            </h1>
            <section className="contenedor">
              <article className="article_news_one">
                <section className="article_news_one--info">
                  <section
                    className={`article_news_one--info-container ${
                      isShared ? "show" : "hidden"
                    }_media`}
                  >
                    <section className="article_news_one--info--published">
                      <picture className="article_news_one--info--published_img">
                        <img
                          src={newsData.author_image}
                          className="article_news_one--info--published_img--img"
                        />
                      </picture>
                      <section className="article_news_one--info--texts">
                        <p>
                          <span>Autor por:</span> <br />
                          {newsData.author_name}
                        </p>
                      </section>
                    </section>
                    <section className="article_news_one--info--date">
                      <section className="article_news_one--info--texts-date">
                        <p>
                          {" "}
                          <span>Publicado:</span> <br />
                          {newsData.date_wordpress}
                        </p>
                      </section>
                    </section>
                    <span
                      onClick={handleIsShared}
                      className={`material-symbols-outlined icon_share `}
                    >
                      share
                    </span>
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
                    src={`${newsData.media_post}`}
                    className="article_news_one_img--img"
                  />
                  <p className="pie_pagina">{newsData.title_post}</p>
                </picture>

                <div className="article_news_one--extrac">
                  {newsData.content_post && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: newsData.content_post,
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
           {/* <Comments id={newsData.id_wordpress}/> */}
            <section className="relacionalNews">
              <h3 className="relacionalNews--title">Noticias Relacionadas</h3>
              <ul className="relacionalNews--list">
                <RelacionalNews categorie={newsData.category_post} /> 
              </ul>

              <Btn  text="Cargar mas" />
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
