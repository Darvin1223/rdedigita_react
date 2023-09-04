import React from "react";
import "./Footer.scss";
import { SocialMediaIcons } from "../../../components/SocialMediaIcons/SocialMediaIcons";
const Footer = () => {
  const date = new Date();
  const YEAR = date.getFullYear();
  return (
    <footer className="footer">
      <section className="footer_social_media">
        <section className="footer_social_media--container">
          <p className="footer_social_media-text">
            Estas son nuestras redes sociales
          </p>
          <SocialMediaIcons />
        </section>
      </section>
      <section className="footer_company_information_container">
        <section className="footer_company_information_content">
          <section className="company_information">
            <h4 className="company_information--title">rdedigital</h4>
            <p className="company_information--texts">
              Maecenas vitae nisi at ligula convallis maximus. Praesent
              facilisis enim ac nibh suscipit, in molestie tortor condimentum.
              Nam imperdiet nunc nec augue mattis
            </p>
          </section>
          <section className="company_information--category">
            <h4 className="company_information--category--title">Categoria</h4>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </section>
          <section className="company_information--contact">
            <h4 className="company_information--contact--title">Contacto</h4>
          </section>
        </section>
      </section>
      <section className="footer_copyright">
        <p className="footer_copyright--text">
          © {YEAR} Derechos reservados: rdedigital.com
        </p>
      </section>
    </footer>
  );
};

export default Footer;
