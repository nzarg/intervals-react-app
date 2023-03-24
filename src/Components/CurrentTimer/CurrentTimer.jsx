import React from "react";
import "./CurrentTimer.scss";

export default function CurrentTimer(props) {
	return (
		<div id="current-timer" className="current-timer">
			{props.isInterval ? (
				<div className="activity">
					{props.currentActivity || "ACTIVITY"}
				</div>
			) : ""
			}

			<div className="clock">
				<span className="digits">
					{("0" + Math.floor((props.timer / 60000) % 60)).slice(-2)}:
				</span>
				<span className="digits">
					{("0" + Math.floor((props.timer / 1000) % 60)).slice(-2)}.
				</span>
				<span className="digits mili-sec">
					{("0" + ((props.timer / 10) % 100)).slice(-2)}
				</span>
			</div>
		</div>
	);
}
