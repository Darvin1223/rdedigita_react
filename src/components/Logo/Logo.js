import React from 'react';
import Logotipo from "./../../assets/img/Logordé.svg";

const Logo = () => {
    return (
        <React.Fragment>
            <picture className="logo_container">
            <img
              className="logo_container--logo"
              src={Logotipo}
              alt="Logotipo"
            />
          </picture>
        </React.Fragment>
    );
};

export default Logo;