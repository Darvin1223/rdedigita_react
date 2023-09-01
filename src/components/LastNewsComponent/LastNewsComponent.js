import React, {useState,useEffect} from 'react';
import './LastNewsComponent.scss';

const LastNewsComponent = () => {
    const urlApiLatestPosts = "https://apitest.rdedigital.com/api/latestPosts"; 
    const [lastNews, setLastNews] = useState([]);

    useEffect(() => {
        fetch(urlApiLatestPosts)
          .then((response) => response.json())
          .then((data) => setLastNews(data.slice(0, 5)))
          .catch((error) => console.error("Error fetching latest posts:", error));
      }, []);
    
    return (
        <ul className='last-news'>
            {lastNews.map((element,index) => (
                <li className='last-news--element' key={index}>{element.title}</li>
            ))}
        </ul>
    );
};

export {LastNewsComponent};