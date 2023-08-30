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
      name: "Economia",
    },
    {
      url: "/arteria",
      name: "Arteria",
    },
    {
      url: "/ensamble",
      name: "Ensamble",
    },
    {
      url: "/intervista",
      name: "Intervista",
    },
    {
      url: "/el_scout",
      name: "El Scout",
    },
    {
      url: "/el_menaje",
      name: "El Menaje",
    },
    {
      url: "/paraiso",
      name: "Paraíso",
    },
    {
      url: "/chinazo",
      name: "El Chinazo",
    },
  ];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const date = new Date();
  const currentDay = date.getDay();
  const currentDayNumber = date.getDate();
  const currentMoth = date.getMonth();
  const currentYear = date.getFullYear();
  const daysOfWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const mesesDelAño = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  return (
    <>
      <header className={`Header ${isDarkMode ? "dark-mode" : "light-mode"} `}>
        <div className={`bar ${isScrolled ? "scrolled" : ""}`}>
          {/*  <div className="bar-top">
        <Logo />
      </div>  */}
          <div className={`bar-down`}>
            <section className="bar-down-container">
              <span
                className="material-symbols-outlined icon_menu"
                onClick={toggleMenu}
              >
                menu
              </span>
              <Logo />
              <Navegation
                className={`${isMenuOpen ? "show_menu" : "hidden_menu"}`}
              >
                {links.map((link, index) => (
                  <LinksNavegacion
                    key={index}
                    url={link.url}
                    name={link.name}
                  />
                ))}
              </Navegation>
              <span className="material-symbols-outlined search-icon">
                search
              </span>
            </section>
          </div>
        </div>
      </header>
      <section className="timer-secttion">
        <p>
          <span>{`${daysOfWeek[currentDay]},${mesesDelAño[currentMoth]} ${currentDayNumber} ,${currentYear}`}</span>
        </p>
      </section>
    </>
  );
};

export { Header };
