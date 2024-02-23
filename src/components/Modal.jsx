import React from 'react';
import '../styles/modal.css';
export default function Modal({ text, handleCloseModal }) {
	return (
		<div className="modal">
			<div className="modal__container">
				<p className="modal__container__text">{text}</p>
				<button className="modal__container__btn" onClick={handleCloseModal}>
					Close
				</button>
			</div>
		</div>
	);
}
