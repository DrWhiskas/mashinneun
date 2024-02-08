import React from "react";

export default function Localisation(){
    return (
			<section className="localisation">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.2412335897213!2d2.2981249047769063!3d48.85887905118261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fe06e8fc511%3A0xfde44a142f454a0!2s31%20Rue%20du%20G%C3%A9n%C3%A9ral%20Camou%2C%2075007%20Paris!5e0!3m2!1sfr!2sfr!4v1707399845236!5m2!1sfr!2sfr"
					width="100%"
					height="450"
					style={{ border: '0', backgroundColor: '#808080' }} // Gray color in hexadecimal
					allowFullScreen=""
					loading="lazy"
				></iframe>
			</section>
		);
}
