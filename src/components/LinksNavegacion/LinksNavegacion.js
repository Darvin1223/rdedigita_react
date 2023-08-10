import React from 'react';
import { Link } from 'react-router-dom';
const LinksNavegacion = (props) => {
  
    return (
    <React.Fragment>
         <Link className='link' to={props.url}>{props.name}</Link>
    </React.Fragment>
    );
};

export default LinksNavegacion;