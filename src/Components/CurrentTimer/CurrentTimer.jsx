import React from "react";
import TimerDisplay from "../TimerDisplay/TimerDisplay";
import "./CurrentTimer.scss";

export default function CurrentTimer(props) {

	const CurrentActivity = (
		<div className="activity">
			{props.activitiesArray[props.currentIndex] || " "}
		</div>
	);

	const NextActivity = (
		<div className="activity next-activity">
			{props.currentIndex === props.activitiesArray.length - 1 && props.sets === 1 ?
				(
					'NEXT: FINISH'
				) :
				props.currentIndex === props.activitiesArray.length - 1 ?
					(
						`NEXT: ${props.activitiesArray[0]}`
					) :
					(
						`NEXT: ${props.activitiesArray[props.currentIndex + 1] || ""}`
					)
			}
		</div>
	);

	const CurrentInformation = (
		<div className="current-information">
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
				<TimerDisplay
					timer={props.timeElapsed}
					miliseconds={true}
				/>
				<div className="col">
					{props.sets + 1} / {props.totalSets}
				</div>
				<TimerDisplay
					timer={props.timeRemaining}
					miliseconds={true}
				/>
			</div>
		</div>
	);

	return (
		<div id="current-timer" className="current-timer">
			{props.isInterval && props.isActive ? CurrentActivity : ""}
			<TimerDisplay
				timer={props.timer}
				miliseconds={true}
			/>
			{props.isInterval && props.isActive ? NextActivity : ""}
			{props.isInterval && props.isActive ? CurrentInformation : ''}
		</div>
	);
}
