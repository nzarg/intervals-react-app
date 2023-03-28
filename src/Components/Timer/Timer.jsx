import React from "react";
import "./Timer.scss";

export default function Timer(props) {
	let countdownTotal = 0;
	let timer = props.countdown;

	/* Intervals Logic and Countdown */
	if (props.isInterval || props.isCountdown) {
		for (let i = 0; i <= props.index; i++) {
			countdownTotal += props.timersArray[i]
		}
		if (props.time >= countdownTotal - props.countdown) {
			timer = countdownTotal - props.time;
			props.setCurrentTimer(timer);
			props.setCurrentActivity(props.activitiesArray[props.index]);
		}
		if (timer < 0) {
			timer = 0;
		}
	}
	/* Sets a new background when intervals finish */
	if (props.isStopwatch === false &&
		props.isActive === true &&
		props.index === props.timersArray.length - 1 &&
		countdownTotal === props.time) {
		const stopWatch = document.getElementById("stop-watch");
		stopWatch.classList.add('finish');
		let loops = props.loops;
		if (loops > 1) {
			props.setLoops(loops => loops - 1);
			props.handleReset();
			props.handleStart();
		} else {
			props.handleReset();
			props.setLoops(2);
		}
	}
	/* Intervals Activity Name */
	const handleChange = (e) => {
		const newArray = [
			...props.activitiesArray.slice(0, props.index),
			e.target.value, 
			...props.activitiesArray.slice(props.index + 1)
		];
		props.setActivitiesArray(newArray);
	}

	return (
		<div id={"timer-" + props.index} className="timer">
			{props.isStopwatch ? (
				<div
					id={"lap-" + props.index}
					className="activity"
					placeholder="lap" 
				>
					{`Lap ${props.index+1}`}
				</div>
			) : ""
			}
			{props.isInterval ? (
				<input 
					id={"activity-" + props.index} 
					className="activity" 
					placeholder="Activity" 
					maxLength="9" 
					onChange={handleChange} 
					value={props.activitiesArray[props.index]}
					onClick={(e)=>e.target.select()}
				/>
			) : ""
			}
			{props.isInterval || props.isStopwatch ? (
				<div className="clock">
					<span className="digits">
						{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:
					</span>
					<span className="digits">
						{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}.
					</span>
					<span className="digits">
						{("0" + ((timer / 10) % 100)).slice(-2)}
					</span>
				</div>) : ""
			}
			{/* I should use isIntervals */}
			{props.isInterval || props.isCountdown? (
				<div className="btn-grp btn-time">
					<div 
						className={`btn btn-small${props.isCountdown?' btn-wider':''}`}
						onClick={() => props.handleIncreaseTime(props.index)}
						placeholder="+15 seconds">
						+
					</div>
					<div className={`btn btn-small${props.isCountdown?' btn-wider':''}`}
						onClick={() => props.handleDecreaseTime(props.index)}>
						-
					</div>
				</div>) : ""
			}
		</div>
	);
}
