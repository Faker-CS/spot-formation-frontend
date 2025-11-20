import React from "react";
import "./Evaluation.css";
import Form from "../common/Form";

export default function Evaluation() {
  return (
    <section className="evaluation">
      <div className="evaluation__container">
        {/* <div className="evaluation__icon"> */}
        <div className="evaluation__evaluation-logo">
          <img src="/vector.svg" alt="Spot Formations" />
        </div>
        {/* </div> */}

        <p className="evaluation__subtitle">
          Vous ne savez pas encore quelle formation
          <br />
          est la meilleure option pour vous ?
        </p>

        <h2 className="evaluation__title">
          Nous sommes là pour bien vous orienter
        </h2>

        <div className="evaluation__content">
          <div className="evaluation__box">
            <h3 className="evaluation__box-title">
              Créez votre <strong>dossier de candidature</strong> et nous vous
              <br />
              aiderons à construire votre parcours de formation.
            </h3>
            
            <div className="evaluation__list">
              <div className="evaluation__list-item">
                <span className="evaluation__icon-check"/>
                <span className="evaluation__list-text">Évaluation de vos objectifs d'apprentissage</span>
              </div>
              
              <div className="evaluation__list-item">
                <span className="evaluation__icon-check"/>
                <span className="evaluation__list-text">Comprendre vos préférences</span>
              </div>
              
              <div className="evaluation__list-item">
                <span className="evaluation__icon-check"/>
                <span className="evaluation__list-text">Choisir le bon format de formation</span>
              </div>
              
              <div className="evaluation__list-item">
                <span className="evaluation__icon-check"/>
                <span className="evaluation__list-text">Construire votre parcours de formation</span>
              </div>
            </div>
          </div>

          <div className="evaluation__form">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
