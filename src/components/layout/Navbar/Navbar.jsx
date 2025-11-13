import React from 'react'
import './navbar.css'
import Button from '../../common/Button'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__brand">
        <img sizes="small" src="../assets/images/logo-SF-H.png"  />
      </div>

      <nav className="navbar__menu" aria-label="Navigation principale">
        <a href="#formations">Formations</a>
        <a href="#entreprenariat">Entreprenariat</a>
        <a href="#apropos">À propos</a>
        <a href="#methode">Méthode</a>
        <a href="#rejoindre">Nous rejoindre</a>
        <a href="#enseigner">Enseigner chez nous</a>
        <a href="#contact">Nous contacter</a>
      </nav>

      <div className="navbar__actions">
        
        <button className="navbar__icon" aria-label="Mon compte">
          <img src="/assets/icons/icon-monCompte.svg" alt="Mon compte" />
        </button>
        <button className="navbar__icon" aria-label="Favoris">
          <img src="/assets/icons/icon-bookmark.svg" alt="Favoris" />
        </button>
      </div>
    </div>
  )
}
