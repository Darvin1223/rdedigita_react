import React from 'react';
import Logotipo from "./../../assets/img/Logordé.svg";
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <React.Fragment>
            <picture className="logo_container">
            <Link to={"/"}>
            <img
            className="logo_container--logo"
            src={Logotipo}
            alt="Logotipo"
          />
            </Link>
          
          </picture>
        </React.Fragment>
    );
};

export default Logo;