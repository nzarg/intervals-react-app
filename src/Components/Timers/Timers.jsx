import React from "react";
import Timer from "../Timer/Timer";
import "./Timers.scss";

export default function Timers(props) {
  const LoopButtons = (
		<div className="btn-grp btn-loops">
			<div className="activity">
				SETS:	{props.totalSets}
			</div>
			<div className="btn btn-small-loops"
				onClick={props.handleAddLoop}>
				+
			</div>
			<div className="btn btn-small-loops"
				onClick={props.handleRemoveLoop}>
				-
			</div>
		</div>
	);

  return (
    <div id="timers" className={props.isInterval?"timers intervals":"timers lap"}>
      {props.isInterval? LoopButtons: ""}
      {props.timersArray.map((timer, index) => {
        return (
          <Timer
            handleActivityChange={props.handleActivityChange}
            handleDecreaseTime={props.handleDecreaseTime}
            handleIncreaseTime={props.handleIncreaseTime}
            handleRemoveTimer={props.handleRemoveTimer}
            index={index}
            isCountdown={props.isCountdown}
            isInterval={props.isInterval}
            isStopwatch={props.isStopwatch}
            key={`Timer${index}`}
            activitiesArray={props.activitiesArray}
            setCurrentIndex={props.setCurrentIndex}
            setCurrentTimer={props.setCurrentTimer}
            timer={timer}
            timersArray={props.timersArray}
          />
        )
      })}
      {props.isInterval?(
        <div className="btn btn-small-loops btn-wide"
				  onClick={props.handleAddTimer}>
				  +
			  </div>
      ):''
      }
    </div>
  )
}