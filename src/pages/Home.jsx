import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import History from "../components/History";
import Slider from "../components/Slider";
import Localisation from "../components/Localisation";
import sliderImages from '../data/images.json'
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home(){
    return (
			<div className="home">
				<Header />
				<Hero />
				<History />
				<Slider images={sliderImages.HomeSlider} />
                <Localisation />
                <Contact />
                <Footer />
			</div>
		);
}