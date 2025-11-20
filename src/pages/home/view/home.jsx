import React from "react";
import Header from "../../../components/layout/Header/Header";
import Hero from "../../../components/hero/Hero";
import FollowBanner from "../../../components/FollowBanner";
import Categories from "../../../components/categories/Categories";
import TopFormations from "../../../components/topformations/view/TopFormations";
import Entrepreneur from "../../../components/entrepreneur/Entrepreneur";
import Advantages from "../../../components/advantages/Advantages";
import Testimonials from "../../../components/testimonials";
import Trainers from "../../../components/trainers";
import Evaluation from "../../../components/evaluation/Evaluation";
import FAQ from "../../../components/faq";
import Footer from "../../../components/layout/Footer";

export default function Home() {
  return (
    <div style={{overflow:"hidden"}}>
      {/* <Header />

      <Hero /> */}
      <div style={{ marginTop: "80px"}}>
        <Categories />

        <TopFormations />
        <Entrepreneur />
        <Advantages />
        <FollowBanner />
        <Testimonials />
        <Trainers />
        <Evaluation />
        <FAQ />

      </div>
      <Footer />
    </div>
  );
}
