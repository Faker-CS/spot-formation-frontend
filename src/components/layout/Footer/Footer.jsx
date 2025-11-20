import React from "react";
import "./Footer.css";
import logo from "../../../../public/assets/images/logo-SF-H.png";
import footerImage from "../../../assets/images/chloe-photo.svg";
import qualiopi from "/public/assets/badges/qualiopi.svg";
import globeSolid from "../../../assets/svgs/globe-solid-2.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__left-section">
            <div className="footer__left">
              <div className="footer__image-section">
                <img src={logo} alt="Spot Formations" className="footer__logo" />
                <img
                  src={footerImage}
                  alt="Formation"
                  className="footer__image"
                />
              </div>
            </div>
            
            <div className="footer__description">
              <h3 className="footer__description-title">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </h3>
              <p className="footer__description-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
              <p className="footer__description-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
            </div>
            
          </div>

          <div className="footer__left-lang" aria-hidden="false">
            <img src={globeSolid} alt="Language Icon" className="footer__left-lang-icon" />
            <span className="footer__left-lang-text">Français (FR)</span>
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h4 className="footer__column-title">
                Nos Formations par catégorie
              </h4>
              <ul className="footer__list">
                <li>
                  <a href="#">Marketing et Digital</a>
                </li>
                <li>
                  <a href="#">Développement Commercial et Entrepreneuriat</a>
                </li>
                <li>
                  <a href="#">Réseaux Sociaux et Contenus</a>
                </li>
                <li>
                  <a href="#">Outils et Productivité</a>
                </li>
                <li>
                  <a href="#">Développement Personnel et Leadership</a>
                </li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">
                Vos droits et nos devoirs
              </h4>
              <ul className="footer__list">
                <li>
                  <a href="#">CGU /CGV</a>
                </li>
                <li>
                  <a href="#">Mentions Légales</a>
                </li>
                <li>
                  <a href="#">Politique de confidentialité</a>
                </li>
                <li>
                  <a href="#">Règlement</a>
                </li>
                <li>
                  <a href="#">Notre Société</a>
                </li>
              </ul>
              <div className="footer__links-bottom">
                <a href="#" className="footer__link-accessibility">
                  Accessibilité réduite disponible
                </a>
                <a href="#" className="footer__link-referent">
                  Contact du référent
                </a>
              </div>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">À propos de nous</h4>
              <ul className="footer__list">
                <li>
                  <a href="#">Qui sommes nous ?</a>
                </li>
                <li>
                  <a href="#">Devenir Mentor</a>
                </li>
                <li>
                  <a href="#">La Méthode Spot Formations</a>
                </li>
                <li>
                  <a href="#">Nous rejoindre</a>
                </li>
                <li>
                  <a href="#">Programme Organisme Certificateur</a>
                </li>
              </ul>
              <div className="footer__qualiopi">
                <img
                  src={qualiopi}
                  alt="Qualiopi"
                  className="footer__qualiopi-badge"
                />
                <p className="footer__declaration">
                  Numéro de déclaration d'activité
                  <br />
                  NDA : 000-0000
                </p>
              </div>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Nous contacter</h4>
              <ul className="footer__list">
                <li>
                  <a href="#">Enseigner chez nous</a>
                </li>
                <li>
                  <a href="#">+33 0 00 00 00 00</a>
                </li>
                <li>
                  <a href="mailto:minimal@minimal.com">minimal@minimal.com</a>
                </li>
                <li>
                  <a href="#">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem Ipsum</a>
                </li>
              </ul>
              <div className="footer__social">
                <a href="#" className="footer__social-link">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="footer__social-link">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="footer__social-link">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            Spot Formations 2025 © Tous les droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
