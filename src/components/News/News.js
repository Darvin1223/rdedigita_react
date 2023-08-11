import React, { useEffect, useState } from "react";

const News = () => {
    const urlApiPost = "http://10.0.0.52:5000/posts";

    const [news, setNews] = useState([]);

    useEffect(() => {
        // Fetch news data from the API
        fetch(urlApiPost)
            .then(response => response.json())
            .then(data => setNews(data))
            .catch(error => console.error("Error fetching news:", error));
    }, []); // The empty array ensures this effect runs only once, similar to componentDidMount

    return (
        <React.Fragment>
            {news.map(newsElement => {
                const excerptWithoutEllipsis = newsElement.excerpt.rendered.replace("[&hellip;]", ""); // Remove the ellipsis […]
                return (
                    
                    <article key={newsElement.id} className='news_container'>
                        <h2 className="news--title">{newsElement.title.rendered}</h2>
                        <p className="news-extract" dangerouslySetInnerHTML={{ __html: excerptWithoutEllipsis }} />
                    </article>
                );
            })}
        </React.Fragment>
    );
};

export { News };