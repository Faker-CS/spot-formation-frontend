import React from "react";
import { NAVBAR_LINKS, NAVBAR_ACTIONS, SUB_DRAWERS } from "./data";
import { DesktopNavbar } from "./desktop";
import { MobileNavbar } from "./mobile";
import { useNavbar } from "./hooks";
import "./styles/index.css";

export default function Navbar() {
  const navbarState = useNavbar();
  const { isMobile } = navbarState;

  return (
    <div className="navbar">
      <img src="/assets/images/logo-SF-H.png" alt="Spot Formations" />
      {isMobile ? (
        <MobileNavbar
          links={NAVBAR_LINKS}
          actions={NAVBAR_ACTIONS}
          subDrawers={SUB_DRAWERS}
          {...navbarState}
        />
      ) : (
        <DesktopNavbar links={NAVBAR_LINKS} />
      )}
    </div>
  );
}
