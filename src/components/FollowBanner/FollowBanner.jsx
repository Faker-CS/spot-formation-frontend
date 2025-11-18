import React from "react";
import "./FollowBanner.css";
import launchingIcon from "../../assets/icons/launching-2.svg";

export default function FollowBanner() {
  return (
    <section className="follow-banner" aria-hidden="false">
      <div className="follow-banner__top-bar" />
      <div className="follow-banner__icon" aria-hidden>
        <img
          src={launchingIcon}
          alt=""
          aria-hidden
          className="follow-banner__icon-img"
        />
      </div>
      <div className="follow-banner__content">
        <h3 className="follow-banner__title">
          Formations idéales pour se lancer dans
          <br /> l'entreprenariat
        </h3>
      </div>
    </section>
  );
}
