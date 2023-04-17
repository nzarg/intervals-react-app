import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss"

const Home = () => {
	return (
		<div className="home">
			<h1 className="text-center">INTERVALS APP</h1>
			<h2>A QUICK BRIEF ON HOW TO USE THE APP</h2>
			<p>Select if you want to use the STOPWACH, COUNTDOWN or INTERVALS timer.</p>
			<h2>INTERVAL LOOPS</h2>
			<p>You can add as many intervals as you want, or you can loop the interval list as many times as you need.</p>
			<Link to="/stopwatch" className="btn btn-text btn-wide red-back">LET'S GET STARTED!</Link>
		</div>
	)
};

export default Home;