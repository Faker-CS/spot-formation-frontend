import React, { useEffect } from "react";
import Card from "../../common/card";
import FinancingCard from "../../common/FinancingCard/FinancingCard";
import mockFinancing from "../../../data/mockFinancing";
import DotNavigation from "../../common/DotNavigation";
import Button from "../../common/Button";
import useCarousel from "../hooks/useCarousel";

export default function Financing({
  formations,
  currentIndex,
  handleNext,
  handlePrev,
  handleBookmark,
  handleDiscover,
}) {
  const visibleFormations = formations.slice(currentIndex, currentIndex + 4);

  // Carousel for financing mock items (mobile)
  const {
    index: financingIndex,
    goto: gotoFin,
    touchHandlers: financingTouch,
    keyboardHandlers: financingKeyboard,
  } = useCarousel({ length: mockFinancing.length, pageSize: 1, initialIndex: 0, step: 1 });

  return (
    <>
      <p className="top-formations__description">
        Prise en charge de votre formation grâce aux dispositifs d’aide au
        financement d'une formation professionnelle, adaptés à différentes
        situations. Optimisez le financement de votre formation selon votre
        contexte.
      </p>
      <div className="top-formations__financing-row">
        <div className="top-formations__financing-grid">
          {mockFinancing.map((f) => (
            <FinancingCard key={f.id} item={f} />
          ))}
        </div>

        <div className="top-formations__nav-arrows top-formations__nav-arrows--financing">
          <button
            type="button"
            className="top-formations__nav-btn top-formations__nav-btn--next"
            aria-label="Suivant"
            onClick={handleNext}
            disabled={currentIndex + 4 >= formations.length}
          >
            <img src="../src/assets/icons/arrows/arrow-blue.svg" alt="Suivant" />
          </button>
          <button
            type="button"
            className="top-formations__nav-btn top-formations__nav-btn--prev"
            aria-label="Précédent"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <img src="../src/assets/icons/arrows/arrow-grey.svg" alt="Précédent" />
          </button>
        </div>
      </div>
      <div className="top-formations__cards-section">

        <div className="top-formations__cards-container">

          {/* Mobile Carousel */}
          <div
            className="top-formations__cards--mobile top-formations__cards--mobile--financing"
            onTouchStart={financingTouch.onTouchStart}
            onTouchMove={financingTouch.onTouchMove}
            onTouchEnd={financingTouch.onTouchEnd}
            onKeyDown={financingKeyboard.onKeyDown}
            tabIndex={0}
          >
              <div
                className="top-formations__cards-track"
                style={{
                  transform: `translateX(-${financingIndex * (223 + 34)}px)`,
                  transition: 'transform 0.3s ease-in-out'
                }}
              >
                {mockFinancing.map((f, index) => (
                  <div
                    key={f.id}
                    className={`top-formations__card-wrapper ${
                      index === financingIndex ? "active" : ""
                    }`}
                    onClick={() => gotoFin(index)}
                  >
                    <FinancingCard item={f} />
                  </div>
                ))}
              </div>

              <DotNavigation
                total={mockFinancing.length}
                current={financingIndex}
                onDotClick={(index) => gotoFin(index)}
              />
          </div>
        </div>

        <p className="top-formations__financing-text">
          Vous pouvez financer tout ou une partie de votre parcours de formation
          grâce aux dispositifs d’aide.
        </p>

        <div className="top-formations__action-buttons">
          <Button variant="ghost" class="btn--ghost">
            Être accompagné dans mon financement
          </Button>
        </div>
      </div>
    </>
  );
}
