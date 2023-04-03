import React from "react";
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
					className="close-tab"
					onClick={() => props.handleRemoveTimer(props.index)}
				>
					x
				</div>
			) : ""
			}
			{props.isInterval ? (
				<input 
					id={"activity-" + props.index} 
					className="activity" 
					placeholder="Activity" 
					maxLength="9" 
					onChange={props.handleChange} 
					value={props.activitiesArray[props.index]}
					onClick={(e)=>e.target.select()}
				/>
			) : ""
			}
			{props.isInterval || props.isStopwatch ? (
				<div className="clock">
					<span className="digits">
						{("0" + Math.floor((props.timer / 60000) % 60)).slice(-2)}:
					</span>
					<span className="digits">
						{("0" + Math.floor((props.timer / 1000) % 60)).slice(-2)}
					</span>
					{props.isStopwatch?(
						<span className="digits">
							.{("0" + ((props.timer / 10) % 100)).slice(-2)}
						</span>
					):""}
					
				</div>) : ""
			}
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
