import React, { useState } from 'react';
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
				<a className="header__container__links__link" href={link}>{text}</a>
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
					<LinkBuild text="Accueil" link="#" />
					<LinkBuild text="À propos" link="#" />
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
