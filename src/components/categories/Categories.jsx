import React, { useState } from "react";
import "./categories.css";
import { H1 } from "../common/Typography";
import { H2, H6 } from "../common/Typography/Typography";
import DotNavigation from "../common/DotNavigation";
import Cat01 from "../../assets/icons/Illust_MD_1.png";
import Cat02 from "../../assets/icons/launching-2.svg";
import Cat03 from "../../assets/icons/Ill-RS.svg";
import Cat04 from "../../assets/icons/Illustration_productivité.svg";
import Cat05 from "../../assets/icons/Illustration_leader.svg";

export default function Categories() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const categories = [
    {
      id: 1,
      icon: Cat01,
      title: "Marketing Digital",
    },
    {
      id: 2,
      icon: Cat02,
      title: "Management & Leadership",
    },
    {
      id: 3,
      icon: Cat03,
      title: "Marketing Digital",
    },
    {
      id: 4,
      icon: Cat04,
      title: "Finance & Comptabilité",
    },
    {
      id: 5,
      icon: Cat05,
      title: "Soft Skills & Communication",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % categories.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + categories.length) % categories.length
    );
  };

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

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleCardClick = (index) => {
    if (index > currentSlide) {
      handleNext();
    } else if (index < currentSlide) {
      handlePrev();
    }
  };

  return (
    <section className="categories">
      <div className="categories__container">
        <H1 className="categories__title">
          Votre autonomie, c'est notre réussite !
        </H1>
        <H2 className="categories__subtitle">
          Les catégories de nos formations
        </H2>

        {/* Desktop Grid - visible on larger screens */}
        <div className="categories__grid categories__grid--desktop">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-card__icon">
                <img src={category.icon} alt={category.title} /></div>
                <br />
                <p className="category-card__text">{category.title}</p>
              
            </div>
          ))}
        </div>

        {/* Mobile Carousel - visible on mobile */}
        <div
          className="categories__carousel categories__carousel--mobile"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="categories__carousel-track">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className={`category-card ${
                  index === currentSlide ? "active" : ""
                }`}
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: "transform 0.3s ease-in-out",
                }}
                onClick={() => handleCardClick(index)}
              >
                <div className="category-card__icon">
                  <img src={category.icon} alt={category.title} />
                </div>
                <p className="category-card__text">{category.title}</p>
                {/* <p className="category-card__description">{category.description}</p> */}
              </div>
            ))}
          </div>

          <DotNavigation
            total={categories.length}
            current={currentSlide}
            onDotClick={setCurrentSlide}
          />
        </div>
      </div>
    </section>
  );
}
