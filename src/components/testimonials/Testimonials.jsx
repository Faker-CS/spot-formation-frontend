import React from "react";
import "./Testimonials.css";
import Button from "../common/Button";
import { H2 } from "../common/Typography";

const mockTestimonial = {
  name: "Martha",
  title: "Entrepreneuse",
  avatar: "src/assets/images/Martha_Murguia.png",
  quoteTitle:
    "Martha, entrepreneuse atypique, propulse son activité grâce à nos formations et à l'accompagnement sur mesure",
  text: `Martha est une entrepreneuse dont l'activité ne court pas les rues. À la fois commerçante, promotrice et importatrice, elle évolue dans un secteur niche qui exige une communication ciblée et efficace. Consciente de l'importance d'une présence en ligne performante, Martha avait un projet web en cours, mais manquait des compétences techniques pour le mener à bien de manière autonome. C'est dans cette optique qu'elle a rejoint la formation WordPress proposée par Spot Formations. La formation WordPress s est avérée être une véritable révélation pour Martha. Grâce à une approche
pédagogique axée sur la pratique, elle a rapidement acquis les compétences nécessaires pour gérer son site
web en toute autonomie. « Les exercices pratiques étaient vraiment l idéal pour moi », explique t elle. 


Lexpertise du formateur, tant sur le plan technique que pédagogique, a été un facteur déterminant dans la
réussite de Martha. « Chloé était non seulement une experte de WordPress, mais elle savait aussi adapter
son enseignement à nos différents niveaux », souligne t elle. « Elle était toujours disponible pour répondre
à nos questions et elle a toute suite compris mon métier et mon projet »`,
  rating: 4.9,
  date: "14/02/2025",
};

export default function Testimonials({ testimonial = mockTestimonial }) {
  return (
    <section className="testimonials">
      <img
        src="/public/assets/vector/vector-3.png"
        alt=""
        aria-hidden
        className="testimonials__bg"
      />
      <div className="testimonials__container">
        <div className="testimonials__left">
          <div className="testimonials__avatar-wrapper">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="testimonials__avatar"
            />
          </div>
          {/* Decorative rotated image (keeps avatar fixed) */}
          <img
            src="/assets/images/vector/vector-3.png"
            alt=""
            aria-hidden="true"
            className="testimonials__decor"
          />
        </div>

        <div className="testimonials__center">
          <h2 className="testimonials__title">Témoignages</h2>
          <H2 className="testimonials__quoteTitle">{testimonial.quoteTitle}</H2>
          <p className="testimonials__text">
            Martha est une entrepreneuse dont l'activité ne court pas les rues.
            À la fois commerçante, promotrice et importatrice, elle évolue dans
            un secteur niche qui exige une communication ciblée et efficace.
            Consciente de l'importance d'une présence en ligne performante,
            Martha avait un projet web en cours, mais manquait des compétences
            techniques pour le mener à bien de manière autonome. C'est dans
            cette optique qu'elle a rejoint la formation WordPress proposée par
            Spot Formations.
            <br /> <br/>
            La formation WordPress s est avérée être une véritable révélation
            pour Martha. Grâce à une approche pédagogique axée sur la pratique,
            elle a rapidement acquis les compétences nécessaires pour gérer son
            site web en toute autonomie. « Les exercices pratiques étaient
            vraiment l idéal pour moi », explique t elle.
            <br /> <br />
            Lexpertise du formateur, tant sur le plan technique que pédagogique,
            a été un facteur déterminant dans la réussite de Martha. « Chloé
            était non seulement une experte de WordPress, mais elle savait aussi
            adapter son enseignement à nos différents niveaux », souligne t
            elle. « Elle était toujours disponible pour répondre à nos questions
            et elle a toute suite compris mon métier et mon projet »
          </p>
          <div className="testimonials__cta">
            <button className="card__discover-btn" type="button">
              <img
                src="../assets/icons/micro/arrow-right-circle2.svg"
                alt="Découvrir"
              />
              <span style={{ color: "white" }}>Découvrir leurs parcours</span>
            </button>
          </div>
        </div>

        <div className="testimonials__right">
          <div className="testimonials__rating">
            <div className="testimonials__rating-value">
              {testimonial.rating}
            </div>
            <div className="testimonials__rating-star">★</div>
            <div className="testimonials__rating-date">
              Noté le {testimonial.date}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
