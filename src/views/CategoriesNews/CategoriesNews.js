import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoriesNews = ({ match }) => {
  const [categoryPosts, setCategoryPosts] = useState([]);
  
  useEffect(() => {
    // Obtén el nombre de la categoría de los parámetros de la URL
    const categoryName = match.params.nameCategorie;
    
    // Realiza una solicitud GET al endpoint de tu servidor Express
    axios.get(`/api/postsByCategory/${categoryName}`)
      .then(response => {
        setCategoryPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching category posts:', error);
      });
  }, [match.params.nameCategorie]);

  return (
    <div>
      <h2>Posts de la categoría {match.params.nameCategorie}</h2>
      <ul>
        {categoryPosts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { CategoriesNews };
