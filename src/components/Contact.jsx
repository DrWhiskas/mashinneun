import React, { useState } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/contact.css';

export default function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [submit, setSubmit] = useState(false);

	function handleSubmit({ e }) {
		e.preventDefault();
		setSubmit(true);
	}

	return (
		<section className="contact">
			<div className="contact__info">
				<h1 className="contact__info__title">Nous contacter</h1>
				<ul className="contact__info__text">
					<li className="contact__info__text__item">
						<FaMapMarkerAlt /> 31 Rue du Général Camou, 75007 Paris
					</li>
					<li className="contact__info__text__item">
						<a href="mailto:jikayvon@gmail.com">
							<FaEnvelope /> mashinneun@gmail.com
						</a>
					</li>
					<li className="contact__info__text__item">
						<FaPhone /> 06.18.03.30.69
					</li>
				</ul>
				<h1 className="contact__info__title schedule">Nos horaires</h1>
				<ul className="contact__info__text">
					<li className="contact__info__text__item">Lun - Ven: 11h - 23h</li>
					<li className="contact__info__text__item">Sam - Dim: 09h - 23h</li>
				</ul>
			</div>
			<form className="contact__form">
				<div className="form__item">
					<label htmlFor="name">Nom</label>
					<input
						type="text"
						id="name"
						className="form__item__input"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Saisissez votre nom"
					/>
				</div>
				<div className="form__item">
					<label className="form" htmlFor="email">
						E-mail
					</label>
					<input
						type="email"
						id="email"
						className="form__item__input"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Saisissez votre e-mail"
					/>
				</div>
				<div className="form__item">
					<label className="form" htmlFor="phone">
						Téléphone
					</label>
					<input
						type="tel"
						id="phone"
						className="form__item__input"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						placeholder="Saisissez votre téléphone"
					/>
				</div>
				<div className="form__item">
					<label className="form" htmlFor="address">
						Adresse
					</label>
					<input
						type="text"
						id="address"
						className="form__item__input"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						placeholder="Saisissez votre adresse"
					/>
				</div>
				<div className="submit">
					<div className="form__item">
						<label htmlFor="subject">Sujet</label>
						<input
							type="text"
							id="subject"
							className="form__item__input subject"
							value={subject}
							onChange={(e) => setSubject(e.target.value)}
							placeholder="Saisissez le sujet"
						/>
					</div>
					<div className="form__item">
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							className="form__item__message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							placeholder="Votre message"
						/>
					</div>

					<button className="contact-btn" type="submit">
						Envoyer
					</button>

					{submit && <p>Merci pour votre envoi.</p>}
				</div>
			</form>
		</section>
	);
}
