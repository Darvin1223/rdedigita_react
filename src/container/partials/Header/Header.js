import React, { useEffect, useState } from "react";

import Navegation from "../../../components/Navegation/Navegation";
import LinksNavegacion from "../../../components/LinksNavegacion/LinksNavegacion";
import "./Header.scss";
import Logo from "../../../components/Logo/Logo";
const Header = () => {
  const urlCategories = "http://localhost:5000/categories";
  const [dataCategories, setDataCategories] = useState([]);
  useEffect(() => {
    fetch(urlCategories)
      .then((response) => response.json())
      .then((dataCategories) => setDataCategories(dataCategories))
      .catch((error) => console.error(`Error obteniendo la data: ${error}`));
  }, []);

  dataCategories.forEach((categorie, index) => {
    console.table(index, categorie);
  });
  const links = [
    {
      url: "/",
      name: "home",
    },
    {
      url: "/politica",
      name: "Politica",
    },
  ];
  return (
    <header className="Header">
      <div className="bar">
        <div className="bar-top">
         <Logo />
        </div>
        <div className="bar-down">
          <span class="material-symbols-outlined icon_menu">menu</span>
          <Navegation>
            {links.map((link, index) => (
              <LinksNavegacion key={index} url={link.url} name={link.name} />
            ))}
          </Navegation>
          <Logo />
          <span class="material-symbols-outlined search-icon">
          search
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
