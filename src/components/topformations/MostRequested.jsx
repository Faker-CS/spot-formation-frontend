import React from "react";
import Card from "../common/card";

export default function MostRequested({
  formations,
  currentIndex,
  handleNext,
  handlePrev,
  handleBookmark,
  handleDiscover,
}) {
  const visibleFormations = formations.slice(currentIndex, currentIndex + 4);

  return (
    <div className="top-formations__cards-section">
      <div className="top-formations__nav-arrows">
        <button
          className="top-formations__nav-btn top-formations__nav-btn--next"
          aria-label="Suivant"
          onClick={handleNext}
          disabled={currentIndex + 4 >= formations.length}
        >
          <img
            src="../src/assets/icons/arrows/arrow-blue.svg"
            alt="Suivant"
          />
        </button>
        <button
          className="top-formations__nav-btn top-formations__nav-btn--prev"
          aria-label="Précédent"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <img
            src="../src/assets/icons/arrows/arrow-grey.svg"
            alt="Précédent"
          />
        </button>
      </div>

      <div className="top-formations__cards-container">
        <div className="top-formations__cards">
          {visibleFormations.map((formation) => (
            <div key={formation.id} className="top-formations__card-wrapper">
              <div
                className={`top-formations__rank ${
                  formation.rank > 1 ? "top-formations__rank--blue" : ""
                }`}
              >
                #{formation.rank}
              </div>
              <div className="top-formations__stars">
                <span>{formation.rating}</span>
                <img src="../src/assets/icons/icon-star.svg" alt="étoiles" />
              </div>
              <Card
                category={formation.category}
                title={formation.title}
                location={formation.location}
                description={formation.description}
                price={formation.price}
                financing={formation.financing}
                onBookmark={() => handleBookmark(formation.id)}
                onDiscover={() => handleDiscover(formation.id)}
              />
            </div>
          ))}
        </div>
      </div>

      <p className="top-formations__financing-text">
        OPCO, OPCA, CPF, aides régionales... Optimisez le{" "}
        <u>financement</u> de votre formation
      </p>

      <div className="top-formations__logos">
        <img
          src="../src/assets/logos/OPCO.png"
          alt="OPCO EP"
          className="top-formations__logo"
        />
        <img
          src="../src/assets/logos/Logo-Mon-Compte-Formation-Appli-CPF-1.png"
          alt="Mon Compte Formation"
          className="top-formations__logo"
        />
        <img
          src="../src/assets/logos/logo-Region-IDF-2.png"
          alt="Région Île-de-France"
          className="top-formations__logo"
        />
      </div>
    </div>
  );
}
