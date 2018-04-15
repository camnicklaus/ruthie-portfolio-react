import React, { Component } from "react";
import "./../Styles/portfolio.css";
import "./../Styles/common.css";
import Gallery from "./Gallery";
import birdHouse from "./../images/portfolio/birdhouseweb.jpg";

const bg = {
	width: "300px",
	height: "300px",
	backgroundImage: `url(${birdHouse}`,
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	backgroundSize: "contain"
};

export default function Portfolio() {
	return (
		<div className="page">
			<div className="test-size" />
			<div style={bg}>backgroundImage</div>
		</div>
	);
}
