import React from "react";
import { Link } from "react-router-dom"; // Asegúrate de importar 'Link' desde tu biblioteca de enrutamiento (por ejemplo, react-router-dom).
import "./Footer.scss";
import { SocialMediaIcons } from "../../../components/SocialMediaIcons/SocialMediaIcons";

import logo from "./../../../assets/img/LogordeBlanco.svg";
const Footer = () => {
  const date = new Date();
  const YEAR = date.getFullYear();
  return (
    <footer class="footer">
     <div class="container">
      <div class="row">
      <div class="footer-col">
        
        <picture className="footer-col_logo_container"> 
        <img src={logo} />
        </picture>
       {/*  <ul>
          <li><a href="#">watch</a></li>
          <li><a href="#">bag</a></li>
          <li><a href="#">shoes</a></li>
          <li><a href="#">dress</a></li>
        </ul> */}
      </div> 
        <div class="footer-col">
          <h4>Nosotros</h4>
          <p>En rde a través de un enfoque disruptivo, fusionamos las formas clásicas y la modernidad de la tecnología para resaltar nuestra cultura, analizar críticamente la política y dar voz a nuestros talentosos artistas. Únete a nosotros en este viaje para descubrir y resaltar lo mejor de la República Dominicana.</p>
         {/*  <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul> */}
        </div>
       
        <div class="footer-col">
          <h4>Sigannos</h4>
          <div class="social-links">
            <SocialMediaIcons />
          </div>
        </div>
      </div>
     </div>
  </footer>
  );
};

export default Footer;
