import React, { useState } from "react";
import "./FAQ.css";
import Button from "../common/Button";
import IllustrationFAQ from "../../assets/icons/Illustration_FAQ.svg";

const faqData = [
  {
    id: 1,
    question: "Quels types de formation proposez-vous ?",
    answer:
      "Nous proposons une large gamme de formations dans différents domaines...",
  },
  {
    id: 2,
    question: "À qui s'adresse la formation digitale ?",
    answer: "Nos formations s'adressent à tous...",
  },
  {
    id: 3,
    question:
      "Comment choisir la formation digitale adaptée à mon projet professionnel ?",
    answer: "Nous vous accompagnons dans le choix de votre formation...",
  },
  {
    id: 4,
    question: "Quels avantages offre la formation digitale ?",
    answer: "La formation digitale offre flexibilité, accessibilité...",
  },
  {
    id: 5,
    question: "Comment sont dispensées les formations ?",
    answer: "Nos formations sont dispensées en ligne et en présentiel...",
  },
  {
    id: 6,
    question: "Est-ce que je recevrai un certificat à la fin de la formation ?",
    answer: "Oui, vous recevrez un certificat de réussite...",
  },
  {
    id: 7,
    question: "Comment la formation peut-elle être financée ?",
    answer: "Plusieurs options de financement sont disponibles...",
  },
  {
    id: 8,
    question: "Qui sont les formateurs ?",
    answer: "Nos formateurs sont des experts reconnus dans leur domaine...",
  },
  {
    id: 9,
    question: "Quels sont les débouchés après la formation ?",
    answer:
      "Les débouchés sont variés et dépendent de la spécialisation choisie : chef de projet digital, développeur web, community manager, spécialiste SEO et d'autres. La transformation digitale des entreprises crée un besoin constant de profils qualifiés, améliorant ainsi votre employabilité et vos opportunités de carrière.",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <section className="faq">
      <div className="faq__container">
        <h2 className="faq__title">FAQ</h2>
        <p className="faq__subtitle">
          Nous avons apporté les réponses aux questions les plus posées sur les
          formations :
        </p>

        <div className="faq__card">
          <img
            src={IllustrationFAQ}
            alt="Questions FAQ"
            className="faq__card-illustration"
          />
          <p className="faq__card-text">
            Des questions
            <br />
            sur les formations ?
          </p>
          <Button variant="ghost" className="btn--ghost faq__card-button">
            Nous contacter
          </Button>
        </div>

        <div className="faq__list">
          {faqData.map((item) => (
            <div
              key={item.id}
              className={`faq__item ${
                openItems.includes(item.id) ? "faq__item--open" : ""
              }`}
            >
              <button
                className="faq__question"
                onClick={() => toggleItem(item.id)}
              >
                <span className="faq__question-text">{item.question}</span>
                <span className="faq__icon">
                  {openItems.includes(item.id) ? "−" : "+"}
                </span>
              </button>

              {openItems.includes(item.id) && (
                <div className="faq__answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
