import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/reservation.css'
export default function Reservation() {

    const [date, setDate] = useState('')

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setDate(today)
        console.log(today);
    }, [])
        
	return (
		<>
			<Header />
			<section className="reservation">
				<div className="reservation__container">
					<h1 className="reservation__container__title">
						Effectuer une réservation
					</h1>
					<p className="reservation__container__text">
						Sélectionnez vos détails et nous ferons notre possible pour
						satisfaire votre demande.
					</p>
					<div className="reservation__container__info">
						<div className="reservation__container__info-form">
							<h2 className="reservation__container__info-form__title">
								Taille du groupe
							</h2>
							<select
								className="reservation__container__info-form__item"
								name="group"
								id="group"
							>
								<option value="1">1 personne</option>
								<option value="2">2 personnes</option>
								<option value="3">3 personnes</option>
								<option value="4">4 personnes</option>
								<option value="5">5 personnes</option>
								<option value="6">6 personnes</option>
								<option value="7">7 personnes</option>
								<option value="8">8 personnes</option>
							</select>
						</div>
						<div className="reservation__container__info-form">
							<h2 className="reservation__container__info-form__title">Date</h2>
							<input
								className="reservation__container__info-form__item"
								type="date"
								name="date"
								id="date"
							/>
						</div>
						<div className="reservation__container__info-form">
							<h2 className="reservation__container__info-form__title">
								Heure
							</h2>
							<select
								className="reservation__container__info-form__item"
								name="hour"
								id="hour"
							>
								<option value="1">19:00</option>
								<option value="2">19:30</option>
								<option value="3">20:00</option>
								<option value="4">20:30</option>
								<option value="5">21:00</option>
								<option value="6">21:30</option>
								<option value="7">22:00</option>
								<option value="8">22:30</option>
							</select>
						</div>
					</div>
				</div>
				<button className="btn btn-reservation">Réserver</button>
			</section>
			<Footer />
		</>
	);
}
