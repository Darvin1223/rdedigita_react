import React from 'react';
import { Link } from 'react-router-dom';
import './LinksNavegacion.scss';

const LinksNavegacion = ({ url, name, onClick }) => {
    return (
        <Link className='link' to={url} onClick={onClick}>
            {name.toUpperCase()}
        </Link>
    );
};

export default LinksNavegacion;
