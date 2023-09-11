import React, { useEffect, useState } from "react";
import "./Navegation.scss";
import { ProgressBar } from "react-bootstrap";
import { SocialMediaIcons } from "../SocialMediaIcons/SocialMediaIcons";

const programs = [
  {
    id: 1,
    name: "Intervista",
    url: "/intervista",
  },
  {
    id: 2,
    name: "El Chinazo",
    url: "/elchinazo",
  },
  {
    id: 3,
    name: "Paraíso",
    url: "/paraiso",
  },
  {
    id: 4,
    name: "Peso Oro",
    url: "/peso-oro",
  },
  {
    id: 5,
    name: "Ensamble Etéreo",
    url: "/ensamble-etereo",
  },
  {
    id: 6,
    name: "El Scout",
    url: "/el-scout",
  },
  {
    id: 7,
    name: "El Menaje",
    url: "/el-menaje",
  },
];



const Navegation = ({ children, className }) => {
  
  return (
    <nav className={`Navegation ${className}`}>
      <section className="Navegation--header">
        <section className="Navegation--header--close">
          <i class="material-symbols-outlined">close</i>
        </section>
        <section className="Navegation--header--mode">
          {/* <span class="material-symbols-outlined">light_mode</span> */}
          <section className="Navegation--header--mode--icon">
            <p>DarkMode</p>
          </section>
          <section className="switch_container">
            <i className="material-symbols-outlined dark_mode">dark_mode</i>
            <label for="" className="switch">
              <input type="checkbox" className="input" />
              <div className="rail">
                <span className="circle"></span>
              </div>
              <div className="indicador"></div>
            </label>
          </section>
        </section>
      </section>
      <section className="links_container">
        <section className="links_container_content">{children}</section>
      </section>

      <section className="Navegation--programs">
        <section className="Navegation--programs_container">
          <ul>
            {programs.map((element, index) => (
              <li key={index}>{element.name}</li>
            ))}
          </ul>
        </section>
      </section>
      <section className="Navegation_social_media">
      <section className="Navegation_social_media_content">
      <p className="Navegation_social_media_content--texts">Siguenos en:</p>
      <SocialMediaIcons />
      </section>
      </section>
    </nav>
  );
};

export default Navegation;
