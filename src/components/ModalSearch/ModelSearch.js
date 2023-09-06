import React, { useState, useEffect } from 'react';
import './ModelSearch.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ModelSearch = ({ stado }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isState, setIsState] = useState(stado);
  const API = 'https://apitest.rdedigital.com/api/posts';

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(API);
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const filteredResults = searchResults.filter((dato) =>
    dato.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStateChange = () => {
    setIsState(!isState);
  };

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
        {filteredResults.length === 0 ? (
          <p className='Modal_not_found'>No se encontraron resultados.</p>
        ) : (
          <ul>
            {filteredResults.slice(0, 5).map((dato) => (
              <Link to={`/news/${dato.ID}`} key={dato.id}>
                <li onClick={handleStateChange}>{dato.title}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export { ModelSearch };