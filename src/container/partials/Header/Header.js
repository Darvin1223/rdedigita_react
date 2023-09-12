import React, { useEffect, useState, useRef } from "react";
import Navegation from "../../../components/Navegation/Navegation";
import LinksNavegacion from "../../../components/LinksNavegacion/LinksNavegacion";
import "./Header.scss";
import Logo from "../../../components/Logo/Logo";
import { Currency } from "../../../components/Currency/Currency";
import { ModelSearch } from "../../../components/ModalSearch/ModelSearch";
import { ProgramsBar } from "../../../components/ProgramsBar/ProgramsBar";
import { BannerSlider } from "../../../components/BannerSlider/BannerSlider";

const Header = ({ isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shouldHideMenu, setShouldHideMenu] = useState(); // Nuevo estado
  const [currencyData, setCurrencyData] = useState([]);
  const [categories,setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const menuRef = useRef(null); 


  useEffect(() => {
    
    // Agrega un event listener para detectar clics en todo el documento
    document.addEventListener("click", handleDocumentClick);

    return () => {
      // Elimina el event listener cuando el componente se desmonta
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleDocumentClick = (e) => {
    // Comprueba si se hizo clic fuera del menú y el menú está abierto
    if (menuRef.current && !menuRef.current.contains(e.target) && isMenuOpen) {
      setIsMenuOpen(false);
      setShouldHideMenu(true);
    }
  };
  
  useEffect(() => {
    // Realiza la solicitud sin procesar la respuesta
    fetch('https://api.rdedigital.com/api/v2/categories')
    .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setIsLoading(false)
      })
      .catch((error) => {
        // Maneja cualquier error que pueda ocurrir durante la solicitud
        console.error('Error en la solicitud:', error);
      });
  }, []); 
  const [status, setStatus] = useState("loading");
  let Buy;
  let Sell;
  const API = `https://api.indexa.do/api/rates?bank=bpd`;
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setCurrencyData(data);
        setStatus("loaded");
      })
      .catch((error) => {
        setStatus("error");
        console.error(`Error fetching currency Data: ${error}`);
      });
  }, []);

  // Verificar si currencyData.data existe antes de mapearlo
  if (currencyData.data && currencyData.data.length > 0) {
    currencyData.data.forEach((element) => {
      if (element.currency === "USD") {
        if (element.type === "buy") {
          Buy = element.rate;
        } else {
          Sell = element.rate;
        }
      }
    });
  }

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
      url: "/",
      name: "Portada",
    },
    {
      url: "/opinion",
      name: "Opinión",
    },
    {
      url: "/el_pais",
      name: "El País",
    },
    {
      url: "/economia",
      name: "Economía",
    },
    {
      url: "/tecnologia",
      name: "Tecnología",
    },
    {
      url: "/cultura",
      name: "Cultura",
    },
    {
      url: "/deporte",
      name: "Deportes",
    },
    {
      url: "/trending",
      name: "Trending",
    },
   
  ];
  const enlaces = [ {
    url: "/",
    name: "Portada",
  }];
  // console.log(categories)
  categories.map((element,index) =>{
    let data = {url:`/${element.category_post}`,name:`${element.category_post}`};
    enlaces.push(data);
  })

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    setShouldHideMenu(false); // Cuando se abre el menú, no se debe ocultar
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
    setShouldHideMenu(true); // Establece shouldHideMenu en true al cerrar el menú
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  

  const handleSearchClick = () => {
    // Aquí puedes agregar la lógica de búsqueda que desees
    // Por ejemplo, abrir un cuadro de diálogo de búsqueda o redirigir a una página de búsqueda.
    console.log("Se hizo clic en el icono de búsqueda");
    // También puedes realizar otras acciones aquí, como mostrar un cuadro de diálogo de búsqueda.
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

  // console.log(enlaces)

  
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
               ref={menuRef}
               className={`${isMenuOpen ? "show_menu" : ""} ${
                shouldHideMenu ? "hidden_menu" : ""
              }`}
              onClose={closeMenu} 
              >
                {enlaces.map((enlace, index) => (
                  <LinksNavegacion
                  key={index}
                  url={enlace.url}
                  name={enlace.name}
                  onClick={closeMenu} //// Cerrar el menú cuando se hace clic en un enlace
                  closeMenu={closeMenu} 
                  />
                ))}
              </Navegation>
              {isModalOpen ? (
                <span
                  class="material-symbols-outlined close-icon"
                  onClick={toggleModal}
                >
                  close
                </span>
              ) : (
                <span
                  className="material-symbols-outlined search-icon"
                  onClick={toggleModal}
                >
                  search
                </span>
              )}
            </section>
          </div>
        </div>
      </header>
      <ProgramsBar />
      <section className="info-section">
        <section className="info-section--container">
          <p className="timer-date-information">
            <span>{`${daysOfWeek[currentDay]}, ${currentDayNumber}, ${mesesDelAño[currentMonth]}  ${currentYear}`}</span>
            <span className="line">|</span>
            <span>Compra:</span> {Buy} DOP <span>/</span> <span>Venta:</span>{" "}
            {Sell} DOP
          </p>
        </section>
      </section>
      
      {isModalOpen && <ModelSearch stado={isModalOpen} />}
    </>
  );
};

export { Header };
