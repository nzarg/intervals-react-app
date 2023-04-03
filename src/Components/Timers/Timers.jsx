import React from "react";
import Timer from "../Timer/Timer";
import "./Timers.scss";

export default function Timers(props) {
  const LoopButtons = (
		<div className="btn-grp btn-loops">
			<div className="activity">
				SETS:	{props.loops}
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
    <div id="timers" className="timers">
      {props.isInterval? LoopButtons: ""}
      {props.timersArray.map((countdown, index) => {
        return (
          <Timer
            countdown={countdown}
            handleDecreaseTime={props.handleDecreaseTime}
            handleIncreaseTime={props.handleIncreaseTime}
            handleRemoveTimer={props.handleRemoveTimer}
            handleReset={props.handleReset}
            handleStart={props.handleStart}
            index={index}
            isActive={props.isActive}
            isCountdown={props.isCountdown}
            isInterval={props.isInterval}
            isStopwatch={props.isStopwatch}
            key={`Timer${index}`}
            loops={props.loops}
            activitiesArray={props.activitiesArray}
            setActivitiesArray={props.setActivitiesArray}
            setCurrentIndex={props.setCurrentIndex}
            setCurrentTimer={props.setCurrentTimer}
            setLoops={props.setLoops}
            time={props.time}
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