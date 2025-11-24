import React from "react";
import "./hero.css";
import Navbar from "../layout/Navbar/Navbar";
import { H1, P } from "../common/Typography";
import { H6 } from "../common/Typography/Typography";
import Button from "../common/Button";
function Hero() {
  return (
    <section className="hero hero__background">
      <img className="hero__bg-img" src="/assets/images/Hero-bg-1024.png" alt="Hero background" />
      {/* Navbar */}
      <Navbar />

      <div className="hero__content">
        <H1 className="hero__title">Réussir, c'est notre métier. Le vôtre ?</H1>
        <H6 className="hero__subtitle">
          Formez-vous, osez, réussissez ! Nous avons ce qu'il vous faut pour
          dévoiler votre vrai potentiel.
        </H6>
        <P className="hero__description">
          Développez vos projets grâce à nos solutions de formation et
          d'accompagnement sur mesure. Nos formations dédiées 100% aux
          entrepreneurs vous accompagnent à chaque étape. OPCO, OPCA, CPF...
          Optimisez le financement de votre formation.
        </P>

        <div className="hero__buttons">
          <Button className="hero__btn-primary">Choisir votre formation</Button>
          <Button className="hero__btn-secondary">Se laisser guider</Button>
        </div>

        <div className="hero__evaluation">
          <img
            src="/assets/badges/evalutation.png"
            alt="Évaluation moyenne de nos formations"
          />
        </div>
      </div>

      {/* Floating logo that bridges Hero and next section */}
      <div className="hero__logo">
        <img src="/vector.svg" alt="Spot Formations" />
      </div>
    </section>
  );
}

export default Hero;
