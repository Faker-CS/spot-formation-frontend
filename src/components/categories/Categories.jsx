import React from "react";
import "./categories.css";
import { H1 } from "../common/Typography";
import { H2, H6 } from "../common/Typography/Typography";

export default function Categories() {
  const categories = [
    {
      id: 1,
      icon: "../src/assets/icons/Cat-01.png",
      title: "Marketing Digital",
      description: "Formation en ligne",
    },
    {
      id: 2,
      icon: "../src/assets/icons/Cat-02.png",
      title: "Management & Leadership",
      description: "Formation en ligne",
    },
    {
      id: 3,
      icon: "../src/assets/icons/Cat-03.png",
      title: "Marketing Digital",
      description: "Formation en ligne",
    },
    {
      id: 4,
      icon: "../src/assets/icons/Cat-04.png",
      title: "Finance & Comptabilité",
      description: "Formation en ligne",
    },
    {
      id: 5,
      icon: "../src/assets/icons/Cat-5.png",
      title: "Soft Skills & Communication",
      description: "Formation en ligne",
    },
  ];

  return (
    <section className="categories">
      <div className="categories__container">
        <H1 className="categories__title">
          Votre autonomie, c'est notre réussite !
        </H1>
        <H2 className="categories__subtitle">
          Les catégories de nos formations
        </H2>

        <div className="categories__grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-card__icon">
                <img src={category.icon} alt={category.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
