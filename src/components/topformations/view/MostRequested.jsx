import React, { useEffect } from "react";
import Card from "../../common/card";
import DotNavigation from "../../common/DotNavigation";
import useCarousel from "../hooks/useCarousel";

export default function MostRequested({
  formations,
  currentIndex,
  handleNext,
  handlePrev,
  handleBookmark,
  handleDiscover,
}) {
  // carousel for mobile single-item navigation
  const {
    index: mobileIndex,
    goto,
    touchHandlers,
    keyboardHandlers,
  } = useCarousel({ length: formations.length, pageSize: 1, initialIndex: currentIndex, step: 1 });

  // sync with parent pagination index
  useEffect(() => {
    const target = currentIndex || 0;
    if (mobileIndex !== target) goto(target);
  }, [currentIndex, formations.length, goto]);

  const visibleFormations = formations.slice(currentIndex, currentIndex + 4);

  const handleCardClick = (i) => goto(i);

  return (
    <div className="top-formations__cards-section">
      <div className="top-formations__nav-arrows top-formations__nav-arrows--desktop">
        <button
          type="button"
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
          type="button"
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
        <div className="top-formations__cards top-formations__cards--desktop">
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

        {/* Mobile Carousel */}
        <div 
          className="top-formations__cards--mobile"
          onTouchStart={touchHandlers.onTouchStart}
          onTouchMove={touchHandlers.onTouchMove}
          onTouchEnd={touchHandlers.onTouchEnd}
          onKeyDown={keyboardHandlers.onKeyDown}
          tabIndex={0}
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
          
          <DotNavigation total={formations.length} current={mobileIndex} onDotClick={(index) => goto(index)} />
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
