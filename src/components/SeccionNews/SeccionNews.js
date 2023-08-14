import React, { useEffect, useState } from "react";
import './SeccionNews.scss';

/* Calling IMGS */
// Desktops
import elMenaje from "../../assets/img/El menaje.png";
// import elScout from "../../assets/img/El Scout.png";
import Intervista from "../../assets/img/Intervista.png";
import Paraiso from "../../assets/img/Paraiso.png";

// Tablet


// Mobile

import ParaisoMobile from "../../assets/img/Paraiso_mobile.png";
import ArteriaMobile from "../../assets/img/Arteria_mobile.png";
const SeccionNews = () => {
  const urlApiPost = "http://10.0.0.52:5000/posts";
  const [sectionNews, setSectionNews] = useState([]);
  const categories = [
    { id: 1, originalName: "Noticiero", ourName: "Noticias", banner: "none",banner_mobile: "",
    banner_tablet:"" },
    {
      id: 2,
      originalName: "Arte Y Cultura",
      ourName: "Arteria",
      banner: "none",
      banner_mobile: ArteriaMobile,
      banner_tablet:""
    },
    {
      id: 3,
      originalName: "Deportes",
      ourName: "El Scout",
      banner:  "" ,
      banner_mobile:"" ,
      banner_tablet:""
    },
    {
      id: 4,
      originalName: "Musica",
      ourName: "Intervista",
      banner: { Intervista },
    },
    { id: 5, originalName: "Politica", ourName: "Politica", banner: "none" },
    {
      id: 6,
      originalName: "Comida",
      ourName: "El Menaje",
      banner: { elMenaje },
    },
    { id: 7, originalName: "Turismo", ourName: "Paraíso", banner: "",banner_mobile: ParaisoMobile },
    { id: 8, originalName: "Economia", ourName: "Economia", banner: "none" },
    { id: 9, originalName: "Frandula", ourName: "Farandula", banner: "none" },
  ];

  useEffect(() => {
    fetch(urlApiPost)
      .then((response) => response.json())
      .then((data) => setSectionNews(data))
      .catch((error) => console.error(`Error fetching news: ${error}`));
  }, []);

  // Group posts by category
  const categorizedNews = {};
  sectionNews.forEach((news) => {
    const categoryName = news.category.name;
    const matchedCategory = categories.find(
      (category) => category.originalName === categoryName
    );

    if (matchedCategory) {
      if (!categorizedNews[matchedCategory.ourName]) {
        categorizedNews[matchedCategory.ourName] = [];
      }
      categorizedNews[matchedCategory.ourName].push(news);
    }
  });

  if (Object.keys(categorizedNews).length > 0) {
    return (
        <section className="sections">
          {Object.keys(categorizedNews).map((category) => (
            <section className="news_sections" key={category}>
              {category !== "Noticias" && (
                <>
               <section className="news_secction_container">
                {categories.map((element, index) => {
                  if (category === element.ourName) {
                    return (
                      <section
                        className="section_news_banner"
                        key={`${category}-${element.id}`}
                      >
                        <picture>
                          
                          <img src={element.banner_mobile} alt={element.ourName} />
                        </picture>
                      </section>
                    );
                  }
                  return null;
                })}
              </section>
                  <h2 className="news_sections--title">{category}</h2>
    
                  <section
                    className={`section_news ${category.split(" ").join("_")}`}
                    key={category}
                  >
                    {categorizedNews[category]?.slice(0, 10).map((newsElement) => (
                      <article className="section_news--article" key={newsElement.id}>
                        <h3 className="section_news--article-title">{newsElement.title.rendered}</h3>
                        <img
                          src={newsElement.imageUrl}
                          alt={newsElement.title.rendered}
                          className="section_news--article-img"
                        />
                        <div className="section_news--article-text"
                          dangerouslySetInnerHTML={{
                            __html: newsElement.excerpt.rendered,
                          }}
                        />
                      </article>
                    ))}
                  </section>
                </>
              )}
            </section>
          ))}
        </section>
      );
    };
    
};

export { SeccionNews };
