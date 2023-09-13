import React, { useEffect, useState } from 'react';

const Comments = ({id}) => {
    const [comments,setCommens] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const API_URL = `https://api.rdedigital.com/api/v2/comments/${id}`;
    useEffect(()=>{
        fetch(API_URL)
        .then(response => response.json())
        .then((data)=>{
            setCommens(data);
            setIsLoading(false);
            
        })
        .catch(error =>{
            console.error(error)
            setIsLoading(false);
        })
    },[isLoading,API_URL]);

    console.log(comments)
    
    return (
        <section className="comments-container">
          <div className="comentarios-container">
            {comments.length > 0 ? (
              comments.map((element, index) => (
                <div className="comment" key={index}>
                  <img
                    alt=""
                    src="https://secure.gravatar.com/avatar/0617ecd178b4f2d159070705bdce6764?s=80&amp;d=mm&amp;r=g"
                    srcSet="https://secure.gravatar.com/avatar/0617ecd178b4f2d159070705bdce6764?s=160&amp;d=mm&amp;r=g 2x"
                    className="avatar"
                    height="80"
                    width="80"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="author-name">Darvin Emil Rodriguez</span>{' '}
                  <span className="says">dice:</span>
                  <div className="comment-date">
                    12 de septiembre de 2023 a las 2:56 PM
                  </div>
                  <em className="comment-awaiting-moderation">
                    Tu comentario está pendiente de moderación.
                  </em>
                  <div className="comment-content">
                    <p>Prueba</p>
                  </div>
                  <div className="reply">
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
                  </div>
                </div>
              ))
            ) : (
              <p>No hay comentarios</p>
            )}
          </div>
    
          <div className="formulario">
            <h2>Agregar un comentario</h2>
            <form action="#" method="POST">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" required />
    
              <label htmlFor="email">Correo Electrónico:</label>
              <input type="email" id="email" name="email" required />
    
              <label htmlFor="comentario">Comentario:</label>
              <textarea id="comentario" name="comentario" rows="4" required></textarea>
    
              <button type="submit">Enviar Comentario</button>
            </form>
          </div>
        </section>
      );
      
};

export {Comments};