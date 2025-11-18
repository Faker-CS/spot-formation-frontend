import React from "react";
import Header from "../../../components/layout/Header/Header";
import Hero from "../../../components/hero/Hero";
import FollowBanner from "../../../components/FollowBanner";
import Categories from "../../../components/categories/Categories";
import TopFormations from "../../../components/topformations/view/TopFormations";
import Entrepreneur from "../../../components/entrepreneur/Entrepreneur";
import Advantages from "../../../components/advantages/Advantages";

export default function Home() {
  return (
    <div>
      <Header />
      
      <Hero />
      <div style={{ marginTop: "600px" }}>
        <Categories />
        
        <TopFormations />
        <Entrepreneur />
        <Advantages />
        <FollowBanner />
      </div>
    </div>
  );
}
