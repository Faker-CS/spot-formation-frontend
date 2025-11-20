import React from "react";
import "./hero.css";
import Navbar from "../layout/Navbar/Navbar";
import { H1, P } from "../common/Typography";
import { H6 } from "../common/Typography/Typography";
import Button from "../common/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

function Hero() {
  return (
    <section className="hero__background">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      {/* <div className="hero__content"> */}
      <H1>Réussir, c'est notre métier. Le vôtre ?</H1>
      <Stack sx={{ height: 10 }} spacing={1}>
        <H6>
          Formez-vous, osez, réussissez ! Nous avons ce qu'il vous faut pour
          dévoiler votre vrai potentiel.
        </H6>
      </Stack>
      <P>
        Développez vos projets grâce à nos solutions de formation et
        d'accompagnement sur mesure. Nos formations dédiées 100% aux
        entrepreneurs vous accompagnent à chaque étape. OPCO, OPCA, CPF...
        Optimisez le financement de votre formation.
      </P>

      {/* CTA Buttons */}
      <Box
        sx={{
          position: "absolute",
          bottom: 120,
          left: 40,
          zIndex: 10,
          width: "100%",
        }}
      >
        <Stack direction="row" spacing={2} className="hero__buttons">
          <Button className="hero__btn-secondary">Se laisser guider</Button>
          <Button className="hero__btn-primary">Choisir votre formation</Button>
        </Stack>
      </Box>
      {/* </div> */}

      {/* Evaluation Badge */}
      <div className="hero__evaluation">
        <img
          src="/assets/badges/evalutation.png"
          alt="Évaluation moyenne de nos formations"
        />
      </div>
    </section>
  );
}

export default Hero;
