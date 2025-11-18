import React from "react";
import "./advantages.css";
import Button from "../common/Button";

export default function Advantages() {
  const advantages = [
    {
      id: 1,
      title: "Des services à votre mesure",
    },
    {
      id: 2,
      title: "Une évaluation des enseignements",
    },
    {
      id: 3,
      title: "Présentiel, distanciel ou mixte",
    },
    {
      id: 4,
      title: "Accompagnement personnalisé",
    },
  ];

  return (
    <section className="advantages">
      <div className="advantages__container">
        <h2 className="advantages__title">Les avantages de notre méthode</h2>

        <div className="advantages__header">
          <div className="advantages__rating">
            <img
              src="public/assets/badges/Evalutation2.png"
              alt="5 étoiles"
              className="advantages__rating-icon"
            />
          </div>
          <p className="advantages__description">
            Nous optimisons le développement et le succès des entrepreneurs et
            des futurs indépendants, grâce à un accompagnement personnalisé et
            sur-mesure
          </p>
        </div>

        <div className="advantages__grid">
          {advantages.map((advantage) => (
            <div key={advantage.id} className="advantages__item">
              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#40BFDE" />
                </svg>
              </div>
              <h3 className="advantages__item-title">{advantage.title}</h3>
            </div>
          ))}
        </div>

        <div className="advantages__journey">
          <img
            src="/public/assets/images/01.png"
            alt="Orientation & Test de niveau"
            className="advantages__journey-step advantages__journey-step-1"
          />

          <img
            src="/public/assets/images/02.png"
            alt="Orientation & Test de niveau"
            className="advantages__journey-step advantages__journey-step-2"
          />

          <img
            src="/public/assets/images/03.png"
            alt="Orientation & Test de niveau"
            className="advantages__journey-step advantages__journey-step-3"
          />

          <img
            src="/public/assets/images/04.png"
            alt="Orientation & Test de niveau"
            className="advantages__journey-step advantages__journey-step-4"
          />

          <img
            src="/public/assets/images/05.png"
            alt="Orientation & Test de niveau"
            className="advantages__journey-step advantages__journey-step-5"
          />

          <img
            src="/public/assets/images/Group-13.png"
            alt="Decoration"
            className="advantages__journey-decoration"
          />

          <img
            src="/public/assets/images/Ellipse-13.png"
            alt="Decoration"
            className="advantages__journey-ellipse"
          />
        </div>
        <div className="advantages__cta">
          <Button variant="primary" className="hero__btn-primary">
            Découvrir toutes nos formations
          </Button>
          <img
            src="/assets/images/Financement.png"
            alt="Financement badge"
            className="advantages__financement"
          />
          <img
            src="/assets/logos/Clague_1.svg"
            alt="Clague logo"
            className="advantages__logo"
          />
        </div>
      </div>
    </section>
  );
}
