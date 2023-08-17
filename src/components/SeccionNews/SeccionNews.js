import React, { useEffect, useState } from "react";
import './SeccionNews.scss';

// Importa tus imágenes aquí
import elMenaje from "../../assets/img/El menaje.png";
import Intervista from "../../assets/img/Intervista.png";
import ParaisoMobile from "../../assets/img/Paraiso_mobile.png";
import ArteriaMobile from "../../assets/img/Arteria_mobile.png";

const SeccionNews = () => {
  const urlApiLatestPostsByCategory = "http://localhost:3000/api/latestPostsByCategory"; // Cambia la URL a donde esté corriendo tu servidor backend
  const [sectionNews, setSectionNews] = useState({});

  useEffect(() => {
    fetch(urlApiLatestPostsByCategory)
      .then((response) => response.json())
      .then((data) => setSectionNews(data.postsByCategory))
      .catch((error) => console.error(`Error fetching latest posts by category: ${error}`));
  }, []);

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

  const categorizedNews = {};
  for (const category in sectionNews) {
    const matchedCategory = categories.find((c) => c.ourName === category);
    if (matchedCategory) {
      categorizedNews[category] = sectionNews[category].slice(0, 10);
    }
  }

  return (
    <section className="sections">
      {Object.keys(categorizedNews).map((category) => (
        <section className="news_sections" key={category}>
          {category !== "Noticias" && (
            <React.Fragment>
              <section className="news_secction_container">
                {categories.map((element) => {
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
              <section className={`section_news ${category.split(" ").join("_")}`}>
                {categorizedNews[category].map((newsElement) => (
                  <article className="section_news--article" key={newsElement.id}>
                    <h3 className="section_news--article-title">{newsElement.title}</h3>
                    <picture className="section_news--img">
                      <img
                        src={newsElement.feature_image}
                        alt={newsElement.title}
                        className="section_news--article-img"
                      />
                    </picture>
                    <div
                      className="section_news--article-text"
                      dangerouslySetInnerHTML={{ __html: newsElement.content.rendered }}
                    />
                  </article>
                ))}
              </section>
            </React.Fragment>
          )}
        </section>
      ))}
    </section>
  );
};

export { SeccionNews };
