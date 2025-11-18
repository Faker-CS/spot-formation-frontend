import React from "react";
import "./entrepreneur.css";
import Button from "../common/Button";

export default function Entrepreneur() {
  return (
    <section className="entrepreneur">
      <div className="entrepreneur__container">
        <div className="entrepreneur-card">
          <div className="entrepreneur-content">
            <h3 className="entrepreneur-question">
              Vous lancez votre entreprise ?
            </h3>
            <p className="entrepreneur-text">
              Difficile de réussir dans l'entrepreneuriat sans même tenter
              l'aventure !
            </p>
            <p className="entrepreneur-text">
              Spot Formations vous accompagne tout au long de votre parcours de
              lancement, pour développer votre potentiel !
            </p>
            <p className="entrepreneur__author">
              <em>Chloé Lecomte, Fondatrice de Spot Formations</em>
            </p>
          </div>
          <div className="entrepreneur-image">
            <img src="../src/assets/images/Chloé.png" alt="Chloé Lecomte" />
          </div>
        </div>

        <div className="entrepreneur__main-content">
          <h2 className="entrepreneur__title">Spot Formations</h2>
          <p className="entrepreneur__description">
            Découvrez nos{" "}
            <strong>
              solutions de formation et d'accompagnement sur mesure
            </strong>{" "}
            aux entrepreneurs, et aux futurs indépendants tout au long de leur
            parcours de lancement. Spot Formations assure une assistance
            personnalisée qui s'aligne sur les parcours uniques des entreprises.
            La qualité de notre méthode est garantie par notre{" "}
            <strong>processus d'amélioration continue</strong>.
          </p>

          <div className="entrepreneur__buttons">
            <Button variant="ghost">Se laisser guider</Button>
            <Button variant="primary" class="hero__btn-primary">
              Choisir votre formation
            </Button>
          </div>
        </div>
        <div className="entrepreneur__logo">
          <img src="/vector.svg" alt="Spot Formations" />
        </div>
      </div>
    </section>
  );
}
