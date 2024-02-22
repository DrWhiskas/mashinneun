import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import sliderImages from '../data/images.json';

import '../styles/about.css'

export default function About() {
    return (
			<>
				<Header />
				<section className="about">
					<h2 className="about__title title">Qui sommes-nous</h2>
					<p className="about__text">
						Le rêve d'ouvrir un restaurant est devenu réalité quand Mashinneun a
						ouvert en 2000. <br />
						Ce qui a commencé par un humble Restaurant asiatique est devenu ce
						qu'il est aujourd'hui, transformant complètement l'horizon culinaire
						de Paris. Avec une attention particulière pour la présentation et
						une exigence pour les produits frais, chaque plat de notre menu est
						soigneusement pensé pour éveiller le palais.
					</p>
					<Slider images={sliderImages.HomeSlider} />
				</section>
				<Footer />
			</>
		);
}