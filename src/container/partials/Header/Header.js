import React, { useEffect, useState } from "react";
import Logo from "./../../../assets/img/Logordé.svg";
import Navegation from "../../../components/Navegation/Navegation";
import LinksNavegacion from "../../../components/LinksNavegacion/LinksNavegacion";
const Header = () => {
  const urlCategories = "https://rdedigital.com/wp-json/wp/v2/categories";
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
  const categori = [
    {
      url: "/",
      name: "home",
    },
    {
      url: "/12",
      name: "Prueba",
    },
  ];
  return (
    <header className="Header">
      <div className="bar">
        <div className="bar-top">
          <picture className="header_logo_container">
            {/* <img className="header_logo_container--logo" src={Logo} alt="Logotipo"/> */}
          </picture>
        </div>
        <div className="bar-down">
          {/* <Navegation>
                {elementos.map((elemento,index)=>(
                    <LinksNavegacion key={index} url={elemento.url} name={elemento.name} />
                ))}
            </Navegation> */}
          <Navegation>
          {dataCategories.map((categorie, index) => (
      <LinksNavegacion key={index} url={categorie.link} name={categorie.name} />
    ))}
          </Navegation>
        </div>
      </div>
    </header>
  );
};

export default Header;
