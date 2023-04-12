import React from "react";
import TimerDisplay from "../TimerDisplay/TimerDisplay";
import "./Timer.scss";

export default function Timer(props) {
	return (
		<div id={"timer-" + props.index} className="timer">
			{props.isStopwatch ? (
				<div
					id={"lap-" + props.index}
					className="activity"
					placeholder="lap"
				>
					{`Lap ${props.index + 1}`}
				</div>
			) : ""
			}
			{props.isInterval ? (
				<div
					className="close-tab"
					onClick={() => props.handleRemoveTimer(props.index)}
				>
					{props.removeTimerIcon}
				</div>
			) : ""
			}
			{props.isInterval ? (
				<input
					id={"activity-" + props.index}
					className="activity"
					placeholder="Activity"
					maxLength="9"
					onChange={(event) => props.handleActivityChange(event, props.index)}
					value={props.activitiesArray[props.index]}
					onClick={(e) => e.target.select()}
				/>
			) : ""
			}
			{props.isInterval || props.isStopwatch ? (
				<TimerDisplay
					timer={props.timer}
					miliseconds={props.isStopwatch}
				/>
			) : ""
			}
			{(props.isInterval || props.isCountdown) && !props.isActive ? (
				<div className="btn-grp btn-time">
					<div
						onClick={() => props.handleIncreaseTime(props.index)}
						placeholder="+15 seconds">
						{props.increaseTimeIcon}
					</div>
					<div
						onClick={() => props.handleDecreaseTime(props.index)}>
						{props.decreaseTimeIcon}
					</div>
				</div>) : ""
			}
		</div>
	);
}
