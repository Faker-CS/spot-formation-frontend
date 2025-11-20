import React from "react";
import "./Trainers.css";
import Button from "../common/Button";

export default function Trainers() {
  return (
    <section className="trainers">
      <div className="trainers__container_2">
        <h2 className="trainers__title">Nos formateurs</h2>
        <p className="trainers__subtitle">
          Nous ne nous contentons pas de transmettre des connaissances
        </p>
      </div>
      <div className="trainers__container">
        <div className="trainers__content">
          <div className="trainers__left">
            <div className="trainers__main-image">
              {/* Main trainer image will go here */}
            </div>
            <div className="trainers__logo">
              <img
                src="/public/assets/logos/Polygon_1.svg"
                alt="Spot Formations"
              />
            </div>
          </div>

          <div className="trainers__right">
            <div className="trainers__text">
              <p>
                Chez Spot Formations, nous sommes dans un
                <strong> processus d'amélioration continue</strong>, et nous
                sommes convaincus que la qualité d'une formation repose avant
                tout sur l'expertise de ses formateurs. C'est pourquoi nous
                avons réuni une équipe de professionnels chevronnés, experts
                dans leur domaine, dotés d'une solide expérience pratique.
              </p>
              <p>
                Au-delà de la transmission de connaissances,{" "}
                <strong>ils vous offrent un accompagnement personnalisé</strong>
                , un coaching individualisé et un soutien constant tout au long
                de votre parcours d'apprentissage, vous permettant ainsi de
                développer pleinement votre potentiel et d'atteindre vos
                objectifs professionnels.
              </p>
            </div>
            <div className="trainers__button-container">
              <Button variant="ghost">Enseigner chez nous</Button>
            </div>
          </div>
        </div>

        <div className="trainers__video-grid">
          <div className="trainers__video-item">
            {/* Video placeholder 1 */}
          </div>
          <div className="trainers__video-item">
            {/* Video placeholder 2 */}
          </div>
          <div className="trainers__video-item">
            {/* Video placeholder 3 */}
          </div>
        </div>
      </div>
    </section>
  );
}
