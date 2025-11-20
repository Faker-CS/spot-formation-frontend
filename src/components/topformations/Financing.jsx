import React, { useState } from "react";
import Card from "../common/card";
import DotNavigation from "../common/DotNavigation";

export default function Financing({
  formations,
  currentIndex,
  handleNext,
  handlePrev,
  handleBookmark,
  handleDiscover,
}) {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const visibleFormations = formations.slice(currentIndex, currentIndex + 4);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < formations.length - 1) {
      handleNext();
    }
    if (isRightSwipe && currentIndex > 0) {
      handlePrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleCardClick = (index) => {
    const actualIndex = formations.findIndex(f => f.id === formations[index]?.id);
    if (actualIndex > currentIndex) {
      handleNext();
    } else if (actualIndex < currentIndex) {
      handlePrev();
    }
  };

  return (
    <div className="top-formations__cards-section">
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
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="top-formations__cards-track">
            {formations.map((formation, index) => (
              <div
                key={formation.id}
                className={`top-formations__card-wrapper ${index === currentIndex ? 'active' : ''}`}
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
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
          
          <DotNavigation
            total={formations.length}
            current={currentIndex}
            onDotClick={(index) => {
              const diff = index - currentIndex;
              if (diff > 0) {
                for (let i = 0; i < diff; i++) handleNext();
              } else if (diff < 0) {
                for (let i = 0; i < Math.abs(diff); i++) handlePrev();
              }
            }}
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
    </div>
  );
}
