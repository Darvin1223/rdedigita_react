import React, {useState,useEffect} from 'react';
import './LastNewsComponent.scss';
import { Link } from 'react-router-dom';

const LastNewsComponent = () => {
    const urlApiLatestPosts = "https://api.rdedigital.com/api/v2/lastestPost"; 
    const [lastNews, setLastNews] = useState([]);

    useEffect(() => {
        fetch(urlApiLatestPosts)
          .then((response) => response.json())
          .then((data) => setLastNews(data.slice(0, 5)))
          .catch((error) => console.error("Error fetching latest posts:", error));
      }, []);
    
    return (
        <ol className='last-news'>
            {lastNews.map((element,index) => (
                <Link to={`/news/${element.id}`} className='last-news-link--element' key={index}>
                  <li className='last-news--element' key={index}>{element.title_post}</li>
                </Link>
              
            ))}
        </ol>
    );
};

export {LastNewsComponent};