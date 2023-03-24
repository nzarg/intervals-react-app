import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss"

const Home = () => {
	return (
		<div>
			<h1 className="text-center">INTERVALS APP</h1>
			<h2>A QUICK BRIEF ON HOW TO USE THE APP</h2>
			<p>Select if you want to use the STOPWACH, COUNTDWON or INTERVALS timer.</p>
			<h2>IMAGE</h2>
			<h2>INTERVALS LOPPS</h2>
			<p>Not also you can add as many intervals you want, you can also loop the intervals list as many times you need.</p>
			<h2>IMAGE</h2>
			<Link to="/stopwatch" className="btn btn-text btn-wide red-back">LET'S GET STARTED!</Link>
		</div>
	)
};

export default Home;