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
					{`Lap ${props.index+1}`}
				</div>
			) : ""
			}
			{props.isInterval ? (
				<div
					className="btn close-tab"
					onClick={() => props.handleRemoveTimer(props.index)}
				>
					X
				</div>
			) : ""
			}
			{props.isInterval ? (
				<input 
					id={"activity-" + props.index} 
					className="activity" 
					placeholder="Activity" 
					maxLength="9" 
					onChange={(event)=>props.handleActivityChange(event, props.index)} 
					value={props.activitiesArray[props.index]}
					onClick={(e)=>e.target.select()}
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
			{(props.isInterval || props.isCountdown) && !props.isActive? (
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
