import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./RelacionalNews.scss";
const RelacionalNews = ({categorie}) => {

    const [relacionalCategorie, setRelacionalCategorie] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(categorie)
    const API_URL = `https://apitest.rdedigital.com/api/postsByCategory/${categorie}`;
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
    }, [relacionalCategorie])
    if(loading){
        return <p>Cargando....</p>
    }
    return (
        <>
    
        {relacionalCategorie.map((element, index) => {
          if (index < 10 && index >0) {
            return (
              <li key={index} className='news_relational--elements'>
              <Link to={`/news/${element.ID}`}>
                <picture className='news_relational--elements-imgContainer'>
                    <img src={element.feature_image} alt={element.title} className='news_relational--elements-imgContainer-img'/>
                </picture>
                <p className='news_relational--elements-title'>{element.title} </p>
              </Link> 
              </li>
            );
          } else {
            return null; // Skip rendering after the first 10 elements
          }
        })}
        </>
       
    );
};

export {RelacionalNews};