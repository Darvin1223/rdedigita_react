import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./RelacionalNews.scss";
const RelacionalNews = ({categorie}) => {

    const [relacionalCategorie, setRelacionalCategorie] = useState([]);
    const [loading, setLoading] = useState(true);
    // console.log(categorie)
    const API_URL = `https://api.rdedigital.com/api/v2/posts/${categorie}`;
    useEffect(() =>{ 
        fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            setRelacionalCategorie(data);
            setLoading(false);
        })
        .catch((error) =>{
            console.error(`Error fetching news: ${error}`);
            setLoading(false);
        })
    }, [])
    if(loading){
        return <p>Cargando....</p>
    }
    return (
        <>
    
    {relacionalCategorie.map((element, index) => {
  if (index < 4 && index > 0) {
    return (
      <li key={index} className='news_relational--elements'>
        <Link to={`/news/${element.id_wordpress}`}>
          <picture className='news_relational--elements-imgContainer'>
            <img src={element.media_post} alt={element.title_post} className='news_relational--elements-imgContainer-img'/>
          </picture>
          <p className='news_relational--elements-title'>{element.title_post} </p>
        </Link> 
      </li>
    );
  } else {
    return null; // Skip rendering after the first 3 elements
  }
})}

        </>
       
    );
};

export {RelacionalNews};