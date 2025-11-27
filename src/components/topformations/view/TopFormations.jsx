import React, { useState, useEffect } from "react";
import "../styles/topformations.css";
import { mockFormations } from "../../../data/mockTopFormations";
import BestRated from "./BestRated";
import MostRequested from "./MostRequested";
import Financing from "./Financing";

export default function TopFormations() {
  const [activeTab, setActiveTab] = useState("mieux-notees");
  const [formations, setFormations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const tabs = [
    { id: "mieux-notees", label: "Les mieux notées" },
    { id: "plus-demandees", label: "Les plus demandées" },
    { id: "financements", label: "Les Financements" },
  ];

  // Load formations when tab changes
  useEffect(() => {
    const loadFormations = async () => {
      setLoading(true);
      try {
        // Simulate API call - replace with actual API later
        // const data = await fetchFormationsByCategory(activeTab);
        const data = mockFormations[activeTab] || [];
        setFormations(data); // Load all formations
        setCurrentIndex(0); // Reset to first page
      } catch (error) {
        console.error("Error loading formations:", error);
        setFormations([]);
      } finally {
        setLoading(false);
      }
    };

    loadFormations();
  }, [activeTab]);

  // Navigation handlers
  const handleNext = () => {
    if (currentIndex + 4 < formations.length) {
      setCurrentIndex(currentIndex + 4);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 4 >= 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };

  // Get current visible formations (4 at a time)
  // const visibleFormations = formations.slice(currentIndex, currentIndex + 4);

  const handleBookmark = (formationId) => {
    console.log("Bookmarked formation:", formationId);
    // TODO: Implement bookmark functionality with backend
  };

  const handleDiscover = (formationId) => {
    console.log("Discover clicked for formation:", formationId);
    // TODO: Navigate to formation detail page
  };

  // Render content based on active tab
  const renderTabContent = () => {
    if (loading) {
      return <div className="top-formations__loading">Chargement...</div>;
    }

    const tabProps = {
      formations,
      currentIndex,
      handleNext,
      handlePrev,
      handleBookmark,
      handleDiscover,
    };

    switch (activeTab) {
      case "mieux-notees":
        return <BestRated {...tabProps} />;
      case "plus-demandees":
        return <MostRequested {...tabProps} />;
      case "financements":
        return <Financing {...tabProps} />;
      default:
        return null;
    }
  };

  return (
    <section className="top-formations">
      
      <div className="top-formations__container">
        <h2 className="top-formations__title">Le top de nos formations</h2>

        <div className="top-formations__tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`top-formations__tab ${
                activeTab === tab.id ? "top-formations__tab--active" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="top-formations__content">{renderTabContent()}</div>
      </div>
    </section>
  );
}
