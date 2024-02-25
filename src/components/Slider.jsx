import React, { useState, useEffect } from 'react';
import '../styles/slider.css';

export default function Slider({ images }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	function nextSlide() {
		setCurrentIndex((currentIndex + 1) % images.length);
	}

	// Automatic slider
	useEffect(() => {
		const timer = setTimeout(() => {
			nextSlide();
		}, 2500);
		return () => clearTimeout(timer);
	}, [currentIndex]);

	return (
		<section className="slider">
			<div className="slider__images">
				{currentIndex > 0 && (
					<div className="slider-previous">
						<img className="image" src={images[currentIndex - 1]} alt="" />
					</div>
				)}
				{images.map((image, index) => (
					<div
						key={index}
						className={`slider-image ${
							index === currentIndex ? 'active' : 'hidden'
						}`}
					>
						<img className="image" src={image} alt="" />
					</div>
				))}
				{currentIndex < images.length - 1 && (
					<div className="slider-next">
						<img className="image" src={images[currentIndex + 1]} alt="" />
					</div>
				)}
			</div>
		</section>
	);
}
