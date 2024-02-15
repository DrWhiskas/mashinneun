import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logoDesign.png';
import '../styles/header.css'
export default function Header() {
	const [showLinks, setShowLinks] = useState(false);
	function handleShowLinks() {
		setShowLinks(!showLinks);
	}
	function LinkBuild({ text, link }) {
		return (
			<li>
				<Link className="header__container__links__link" to={link}>{text}</Link>
			</li>
		);
	}

	return (
		<header className={showLinks ? 'header show-header' : 'header'}>
			<nav className="header__container">
				<a href="/home">
					<img className="header__container__logo" src={Logo} alt="logo" />
				</a>
				<ul className="header__container__links">
					<LinkBuild text="Accueil" link="/home" />
					<LinkBuild text="À propos" link="/about" />
					<LinkBuild text="Réservation" link="#" />
					<LinkBuild text="Boutique" link="#" />
				</ul>
				<button className="header__burger" onClick={handleShowLinks}>
					<span className="burger-bar"></span>
				</button>
			</nav>
		</header>
	);
}
