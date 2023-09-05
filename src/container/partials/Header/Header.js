import React, { useEffect, useState } from "react";
import Navegation from "../../../components/Navegation/Navegation";
import LinksNavegacion from "../../../components/LinksNavegacion/LinksNavegacion";
import "./Header.scss";
import Logo from "../../../components/Logo/Logo";
import { Currency } from "../../../components/Currency/Currency";
import ModalSearch from "../../../components/ModalSearch/ModalSearch";

const Header = ({ isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [shouldHideMenu, setShouldHideMenu] = useState(); // Nuevo estado
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    setShouldHideMenu(false); // Cuando se abre el menú, no se debe ocultar
  };

  const closeMenu = () => {
    setShouldHideMenu(true); // Cuando se cierra el menú, se debe ocultar
    setIsMenuOpen(false);
  };

  const handleSearchClick = () => {
    // Aquí puedes agregar la lógica de búsqueda que desees
    // Por ejemplo, abrir un cuadro de diálogo de búsqueda o redirigir a una página de búsqueda.
    console.log("Se hizo clic en el icono de búsqueda");
    // También puedes realizar otras acciones aquí, como mostrar un cuadro de diálogo de búsqueda.
  };
  const openModal = () => {
    setIsModalOpen(!isMenuOpen);
  };
  

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const date = new Date();
  const currentDay = date.getDay();
  const currentDayNumber = date.getDate();
  const currentMonth = date.getMonth();
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
      <header className={`Header ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <div className={`bar ${isScrolled ? "scrolled" : ""}`}>
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
                className={`${isMenuOpen ? "show_menu" : ""} ${
                  shouldHideMenu ? "hidden_menu" : ""
                }`}
              >
                {links.map((link, index) => (
                  <LinksNavegacion
                    key={index}
                    url={link.url}
                    name={link.name}
                    onClick={closeMenu} // Cerrar el menú cuando se hace clic en un enlace
                  />
                ))}
              </Navegation>
              <span
                className="material-symbols-outlined search-icon"
                onClick={openModal}
              >
                search
              </span>
              
            </section>
          </div>
        </div>
      </header>
      <section className="info-section">
        <section className="info-section--container">
          <p className="timer-date-information">
            <span>{`${daysOfWeek[currentDay]}, ${mesesDelAño[currentMonth]} ${currentDayNumber}, ${currentYear}`}</span>
            <span className="line">|</span>
          </p>
          <Currency bank="bpd" />
        </section>
      </section>
     

    </>
  );
};

export { Header };
