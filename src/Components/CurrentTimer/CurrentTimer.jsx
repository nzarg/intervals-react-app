import React from "react";
import "./CurrentTimer.scss";

export default function CurrentTimer(props) {

	const CurrentActivity = (
		<div className="activity">
			{props.activitiesArray[props.currentIndex] || " "}
		</div>
	);

	const Clock = (
		<div className="clock">
			<span className="digits">
				{("0" + Math.floor((props.timer / 60000) % 60)).slice(-2)}:
			</span>
			<span className="digits">
				{("0" + Math.floor((props.timer / 1000) % 60)).slice(-2)}
			</span>
			<span className="digits mili-sec">
				.{("0" + ((props.timer / 10) % 100)).slice(-2)}
			</span>
		</div>
	);

	const NextActivity = (
		<div className="activity next-activity">
			{props.currentIndex === props.activitiesArray.length - 1 ? (
				'NEXT: FINISH'
			) : (
				`NEXT: ${props.activitiesArray[props.currentIndex + 1] || ""}`
			)
			}
		</div>
	);



	const CurrentInformation = (
		<div className="layout">
			<div className="row">
				<div className="col">
					ELAPSED
				</div>
				<div className="col">
					SETS
				</div>
				<div className="col">
					REMAINING
				</div>
			</div>
			<div className="row">
				<div className="col">
					00:05
				</div>
				<div className="col">
					1/4
				</div>
				<div className="col">
					00:40
				</div>
			</div>
		</div>
	);

	return (
		<div id="current-timer" className="current-timer">
			{props.isInterval && props.isActive ? CurrentActivity : ""}
			{Clock}
			{props.isInterval && props.isActive ? NextActivity : ""}
			{props.isInterval && props.isActive ? CurrentInformation : ''}
		</div>
	);
}
