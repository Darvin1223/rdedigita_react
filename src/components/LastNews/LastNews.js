import React, { useState,useEffect } from 'react';

const LastNews = () => {
    const urlApiPost = "http://10.0.0.52:5000/posts";
    const [lastNews, setLastNews] = useState([]);
    useEffect(() => {
        // Fetch news data from the API
        fetch(urlApiPost)
            .then(response => response.json())
            .then(data => setLastNews(data))
            .catch(error => console.error("Error fetching news:", error));
    }, []); 
    console.log(lastNews[0]);
    return (
        <section className='lastNews'>
            <h2 className='lastNews-section--title'>Ultimas noticias</h2>
            <section className='news_container lastNews_container'>
               <section className='lastNews_container--principalNews'> 
                    <article className='news-container'>
                    <h1 className='news-title'>{lastNews[0].title.rendered}</h1>
                    <p className='news-extrac'>{lastNews[0].excerpt.rendered}</p>
                    </article>
               </section>
               <section></section>
               <section></section>
            </section>
        </section>
    );
};

export {LastNews};