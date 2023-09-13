import React, { useEffect, useState } from "react";

import "./Comments.scss";
const Comments = ({ id }) => {
  const [dates, setDates] = useState([]);
  const [comments, setCommens] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = `https://api.rdedigital.com/api/v2/comments/${id}`;
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setCommens(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [isLoading, API_URL]);

  return (
    <section className="comments-container">
      <div className="comentarios-container">
        {comments.length > 0 ? (
          comments.map((element, index) => (
            <article className="comment" key={index}>
              <picture className="comment_img_container">
                <img
                  alt=""
                  src="https://secure.gravatar.com/avatar/0617ecd178b4f2d159070705bdce6764?s=80&amp;d=mm&amp;r=g"
                  srcSet="https://secure.gravatar.com/avatar/0617ecd178b4f2d159070705bdce6764?s=160&amp;d=mm&amp;r=g 2x"
                  className="comment_img_container-avatar"
                  loading="lazy"
                />
              </picture>
              <section className="comment_texts">
                <span className="author-name">{element.author_name}</span>

                <div className="comment-date">{element.date_comment}</div>
                <div
                  className="comment-content"
                  dangerouslySetInnerHTML={{
                    __html: element.content_post,
                  }}
                />

                {/* <div className="reply">
                    <a
                      rel="nofollow"
                      className="comment-reply-link"
                      href="https://admin.rdedigital.com/2023/09/12/revelan-los-homenajeados-de-los-premios-fundacion-corripio-2023/?replytocom=12#respond"
                      data-commentid="12"
                      data-postid="24811"
                      data-belowelement="div-comment-12"
                      data-respondelement="respond"
                      data-replyto="Responder a Darvin Emil Rodriguez"
                      aria-label="Responder a Darvin Emil Rodriguez"
                    >
                      Responder
                    </a>
                  </div> */}
              </section>
            </article>
          ))
        ) : (
          <p>No hay comentarios</p>
        )}
      </div>

      <div className="formulario">
        <h2>Agregar un comentario</h2>
        <form action="#" className="form">
          <section className="form_inputs_container">
            <section className="form_inputs">
              <label htmlFor="nombre">Nombre</label>
              <input
                className="inputs"
                type="text"
                id="nombre"
                name="nombre"
                required
              />
            </section>
            <section className="form_inputs">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                className="inputs"
                type="email"
                id="email"
                name="email"
                required
              />
            </section>
          </section>

          <label htmlFor="comentario">Comentario</label>
          <textarea
            id="comentario"
            name="comentario"
            rows="4"
            
            required
          ></textarea>

          <button className="btn btn-comments" type="submit">Enviar Comentario</button>
        </form>
      </div>
    </section>
  );
};

export { Comments };
