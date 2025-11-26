import React, { useState } from "react";
import Card from "../common/card";
import FinancingCard from "../common/FinancingCard/FinancingCard";
import mockFinancing from "../../data/mockFinancing";
import DotNavigation from "../common/DotNavigation";
import Button from "../common/Button";

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
  const [financingIndex, setFinancingIndex] = useState(0);
  const [touchStartF, setTouchStartF] = useState(0);
  const [touchEndF, setTouchEndF] = useState(0);

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

  const handleTouchStartFin = (e) => {
    setTouchStartF(e.targetTouches[0].clientX);
  };

  const handleTouchMoveFin = (e) => {
    setTouchEndF(e.targetTouches[0].clientX);
  };

  const handleTouchEndFin = () => {
    if (!touchStartF || !touchEndF) return;

    const distance = touchStartF - touchEndF;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && financingIndex < mockFinancing.length - 1) {
      setFinancingIndex((s) => s + 1);
    }
    if (isRightSwipe && financingIndex > 0) {
      setFinancingIndex((s) => s - 1);
    }

    setTouchStartF(0);
    setTouchEndF(0);
  };

  const handleCardClick = (index) => {
    const actualIndex = formations.findIndex(
      (f) => f.id === formations[index]?.id
    );
    if (actualIndex > currentIndex) {
      handleNext();
    } else if (actualIndex < currentIndex) {
      handlePrev();
    }
  };

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
            className="top-formations__nav-btn top-formations__nav-btn--next"
            aria-label="Suivant"
            onClick={handleNext}
            disabled={currentIndex + 4 >= formations.length}
          >
            <img src="../src/assets/icons/arrows/arrow-blue.svg" alt="Suivant" />
          </button>
          <button
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
            className="top-formations__cards--mobile"
            onTouchStart={handleTouchStartFin}
            onTouchMove={handleTouchMoveFin}
            onTouchEnd={handleTouchEndFin}
          >
              <div className="top-formations__cards-track">
                {mockFinancing.map((f, index) => (
                  <div
                    key={f.id}
                    className={`top-formations__card-wrapper ${
                      index === financingIndex ? "active" : ""
                    }`}
                    style={{
                      transform: `translateX(-${financingIndex * 100}%)`,
                      transition: "transform 0.3s ease-in-out",
                    }}
                  >
                    <FinancingCard item={f} />
                  </div>
                ))}
              </div>

              <DotNavigation
                total={mockFinancing.length}
                current={financingIndex}
                onDotClick={(index) => setFinancingIndex(index)}
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
