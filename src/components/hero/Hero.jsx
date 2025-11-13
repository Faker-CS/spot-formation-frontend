import React from 'react'
import './hero.css'
import Navbar from '../layout/Navbar/Navbar'
import Button from '../common/Button'
import { H1, P } from '../common/Typography'
import { H6 } from '../common/Typography/Typography'

function Hero() {
	return (
	<>
	
		<section className="hero">
			<Navbar />
			<img
				className="hero__bg"
				src="/assets/images/hero-bg.png"
				alt=""
			/>
			<div className="hero__overlay" />
					


			<div className="hero__content">
				<H1>
					Réussir, c&apos;est notre métier.<br/>
					Le vôtre ?
				</H1>
				<H6 className="hero__lead">
					Formez-vous, osez, réussissez ! Nous avons ce qu’il vous faut pour
					dévoiler votre vrai potentiel.
				</H6>
				<P className="hero__description">
					Développez vos projets grâce à nos solutions de formation et
					d&apos;accompagnement sur mesure. Nos formations dédiées 100% aux
					entrepreneurs vous accompagnent à chaque étape. OPCO, OPCA, CPF... Optimisez
					le financement de votre formation.
				</P>

				<div className="hero__ctas">
					<Button variant="ghost" href="#guide" className="hero__btn hero__btn--secondary">
						Se laisser guider
					</Button>
					<Button variant="primary" href="#formations" className="hero__btn hero__btn--primary">
						Choisir votre formation
					</Button>
				</div>
			</div>

			<footer className="hero__footer">
				<div className="hero__rating">
					<img
						src="/assets/badges/evalutation.png"
						alt="Évaluation moyenne des formations"
					/>
				</div>
				<div className="hero__floating">
					<img src="/assets/icons/logo-icon-center.svg" alt="" aria-hidden="true" />
				</div>
				<div className="hero__scroll">
					<img src="/assets/icons/down-arrow.svg" alt="" aria-hidden="true" />
				</div>
			</footer>
		</section>
	</>
	)
}

export default Hero


