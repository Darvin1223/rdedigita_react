import React, { useState, useEffect } from 'react';
import './ModelSearch.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ModelSearch = ({ stado }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Inicialmente, cargando
  const [isState, setIsState] = useState(stado);
  const [allPosts, setAllPosts] = useState([]); // Almacena todos los posts

  const API = 'https://api.rdedigital.com/api/v2/posts';

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  useEffect(() => {
    setIsLoading(true);
  
    fetch(API)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setAllPosts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);
  
  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleStateChange = () => {
    setIsState(!isState);
  };

  const handleItemClick = () => {
    handleStateChange();
    scrollToTop();
  };

  useEffect(() => {
    // Filtrar los resultados basados en la búsqueda en todos los posts
    const filteredResults = allPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
  }, [searchTerm, allPosts]);

  return (
    <div className={`Modal ${isState ? 'activo' : 'inactivo'}`}>
      <input
        type="text"
        value={searchTerm}
        placeholder="Buscar noticia"
        onChange={handleInputChange}
      />
      {isLoading && <p>Cargando...</p>}
      <div className='Modal-results'>
        {searchTerm.length === 0 ? (
          <p className='Modal_not_found'>Ingresa un término de búsqueda.</p>
        ) : searchResults.length === 0 ? (
          <p className='Modal_not_found'>No se encontraron resultados.</p>
        ) : (
          <ul>
            {searchResults.slice(0, 5).map((post) => (
              <Link to={`/news/${post.id}`} key={post.id}>
                <li onClick={handleItemClick}>{post.title}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export { ModelSearch };
