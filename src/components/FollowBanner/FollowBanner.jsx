import React, { useState } from "react";
import "./FollowBanner.css";
import launchingIcon from "../../assets/icons/launching-2.svg";
import Button from "../common/Button";
import Stack from "@mui/material/Stack";
import { mockFormations } from "../../data/mockFormations";

export default function FollowBanner() {
  // Enrich formations with category during flattening
  const formations = Object.entries(mockFormations).flatMap(([category, items]) =>
    items.map(item => ({ ...item, category }))
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigation handlers (step by 2 to show next/previous pair)
  const handleNext = () => {
    setCurrentIndex((i) => Math.min(i + 2, Math.max(0, formations.length - 2)));
  };

  const handlePrev = () => {
    setCurrentIndex((i) => Math.max(0, i - 2));
  };

  const visibleFormations = formations.slice(currentIndex, currentIndex + 2);

  return (
    <section className="follow-banner" aria-hidden="false">
      <div className="follow-banner__top-bar" />
      <div className="follow-banner__icon" aria-hidden>
        <img
          src={launchingIcon}
          alt=""
          aria-hidden
          className="follow-banner__icon-img"
        />
      </div>
      <div className="follow-banner__container">
        <h3 className="follow-banner__title">
          Formations idéales pour se lancer dans
          <br /> l'entreprenariat
        </h3>
          <div className="follow-banner__nav-arrows">
          <button
            type="button"
            className="top-formations__nav-btn top-formations__nav-btn--next"
            aria-label="Suivant"
            onClick={handleNext}
            disabled={currentIndex + 2 >= formations.length}
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

        <div className="follow-banner__cards">
          {visibleFormations.map((formation) => (
            <div key={`${formation.category}-${formation.id}`} className="follow-banner__item">
              <Stack spacing={2} sx={{ minHeight: 300, justifyContent: 'space-between' }}>
                <div>
                  <h4 className="follow-banner__item-title">{formation.title}</h4>
                  <h4 style={{ color: "#1b365e" }}>{formation.category}</h4>
                  <p style={{ marginTop: 8 }}>{formation.description}</p>
                </div>

                <div className="card__footer">
                  <button className="card__discover-btn" type="button">
                    <img
                      src="../assets/icons/micro/arrow-right-circle.svg"
                      alt="Découvrir"
                    />
                    <span>Découvrir</span>
                  </button>
                  <Button className="card__register-btn">S'inscrire</Button>
                </div>
              </Stack>
            </div>
          ))}
        </div>
        <div className="follow-banner__cta">
          <Button variant="primary" className="hero__btn-primary">
            Toutes les formations de l'entreprenariat
          </Button>
        </div>
      </div>
    </section>
  );
}