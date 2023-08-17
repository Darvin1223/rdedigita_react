import React, { useEffect, useState } from "react";
import Navegation from "../../../components/Navegation/Navegation";
import LinksNavegacion from "../../../components/LinksNavegacion/LinksNavegacion";
import "./Header.scss";
import Logo from "../../../components/Logo/Logo";

const Header = ({ isDarkMode }) => {
  const urlCategories = "http://localhost:5000/categories";
  const [dataCategories, setDataCategories] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // useEffect(() => {
  //   fetch(urlCategories)
  //     .then((response) => response.json())
  //     .then((dataCategories) => setDataCategories(dataCategories))
  //     .catch((error) => console.error(`Error obteniendo la data: ${error}`));
  // }, []);

  // dataCategories.forEach((categorie, index) => {
  //   console.table(index, categorie);
  // });

  const links = [
    {
      url: "/politica",
      name: "Politica",
    },
    {
      url: "/economia",
      name:"Economia"
    },
    {
      url:"/arteria",
      name:"Arteria"
    },
    {
      url:"/ensamble",
      name:"Ensamble"
    },
    {
      url:"/intervista",
      name:"Intervista"
    },
    {
      url: "/scout",
      name: "El Scout"
    },
    {
      url: "/menaje",
      name: "El Menaje"
    },
    {
      url: "/paraiso",
      name: "Paraíso"
    },
    {
      url: "/chinazo",
      name: "El Chinazo"
    }
  ];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`Header ${isDarkMode ? 'dark-mode' : 'light-mode'} `}>
    <div className={`bar ${isScrolled ? 'scrolled' : ''}`}>
      {/* <div className="bar-top">
        <Logo />
      </div> */}
      <div className={`bar-down`}>
        <span className="material-symbols-outlined icon_menu" onClick={toggleMenu}>menu</span>
        <Navegation className={`${isMenuOpen ? '' : 'hidden_menu'}`}>
          {links.map((link, index) => (
            
            <LinksNavegacion key={index} url={link.url} name={link.name} />
          ))}
        </Navegation>
        <Logo />
        <span className="material-symbols-outlined search-icon">
          search
        </span>
      </div>
    </div>
  </header>
  
  );
};

export  {Header};
