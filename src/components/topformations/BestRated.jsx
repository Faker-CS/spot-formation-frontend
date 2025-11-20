import React, { useState, useEffect } from "react";
import Card from "../common/card";
import Button from "../common/Button";
import DotNavigation from "../common/DotNavigation";

export default function BestRated({
  formations,
  currentIndex,
  handleNext,
  handlePrev,
  handleBookmark,
  handleDiscover,
}) {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(currentIndex || 0);

  const visibleFormations = formations.slice(currentIndex, currentIndex + 4);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  useEffect(() => {
    // Sync mobile index when tab or global index changes (avoid unnecessary setState)
    const target = currentIndex || 0;
    if (mobileIndex !== target) setMobileIndex(target);
  }, [currentIndex, formations]);

  const handleNextMobile = () => {
    setMobileIndex((prev) => Math.min(prev + 1, formations.length - 1));
  };

  const handlePrevMobile = () => {
    setMobileIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNextMobile();
    }
    if (isRightSwipe) {
      handlePrevMobile();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleCardClick = (index) => {
    if (index > mobileIndex) {
      handleNextMobile();
    } else if (index < mobileIndex) {
      handlePrevMobile();
    }
  };

  return (
    <>
      <p className="top-formations__description">
        Rien ne vaut le témoignage de ceux qui sont passés par là. Nous vous
        présentons ici une sélection de nos formations. Ces évaluations, basées
        sur des critères rigoureux tels que la qualité de l'enseignement, la
        pertinence du contenu et l'impact sur les projets, sont la meilleure
        garantie de la qualité de notre Méthode.{" "}
        <a href="#methode" className="top-formations__link">
          En savoir plus sur notre Méthode
        </a>
      </p>

      <div className="top-formations__cards-section">
        {/* Desktop Navigation Arrows */}
        <div className="top-formations__nav-arrows top-formations__nav-arrows--desktop">
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
          {/* Desktop Grid - show all 4 cards */}
          <div className="top-formations__cards top-formations__cards--desktop">
            {visibleFormations.map((formation) => (
              <div
                key={formation.id}
                className="top-formations__card-wrapper"
              >
                <div
                  className={`top-formations__rank ${
                    formation.rank > 1 ? "top-formations__rank--blue" : ""
                  }`}
                >
                  #{formation.rank}
                </div>
                <div className="top-formations__stars">
                  <span>{formation.rating}</span>
                  <img
                    src="../src/assets/icons/icon-star.svg"
                    alt="étoiles"
                  />
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

          {/* Mobile Carousel - show one card at a time */}
          <div 
            className="top-formations__cards--mobile"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="top-formations__cards-track">
              {formations.map((formation, index) => (
                <div
                  key={formation.id}
                  className={`top-formations__card-wrapper ${index === mobileIndex ? 'active' : ''}`}
                  style={{
                    transform: `translateX(-${mobileIndex * 100}%)`,
                    transition: 'transform 0.3s ease-in-out'
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  <div
                    className={`top-formations__rank ${
                      formation.rank > 1 ? "top-formations__rank--blue" : ""
                    }`}
                  >
                    #{formation.rank}
                  </div>
                  <div className="top-formations__stars">
                    <span>{formation.rating}</span>
                    <img
                      src="../src/assets/icons/icon-star.svg"
                      alt="étoiles"
                    />
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
            
            {/* Mobile Dot Navigation */}
            <DotNavigation
              total={formations.length}
              current={mobileIndex}
              onDotClick={(index) => setMobileIndex(index)}
            />
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

        <div className="top-formations__action-buttons">
          <Button variant="ghost" class="btn--ghost">
            Être accompagné dans mon financement
          </Button>
          <Button variant="primary" class="hero__btn-primary">
            Découvrir toutes nos formations
          </Button>
        </div>
      </div>
    </>
  );
}
