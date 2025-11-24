import React from "react";
import Drawer from "./Drawer";

export default function MobileNavbar({
  links,
  actions,
  subDrawers,
  open,
  toggleDrawer,
  closeDrawer,
  openSubDrawer,
  closeSubDrawer,
  activeSubDrawer,
}) {
  return (
    <>
      <button
        className="navbar__hamburger"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        onClick={toggleDrawer}
      >
        <span className={`hamburger ${open ? "is-open" : ""}`} />
      </button>

      <Drawer
        open={open}
        links={links}
        actions={actions}
        subDrawers={subDrawers}
        activeSubDrawer={activeSubDrawer}
        onClose={closeDrawer}
        onOpenSubDrawer={openSubDrawer}
        onCloseSubDrawer={closeSubDrawer}
      />
    </>
  );
}

