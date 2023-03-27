import React from "react";
import Timer from "../Timer/Timer";
import "./Timers.scss";

export default function Timers(props) {
  return (
    <div id="timers" className="timers">
      {props.timersArray.map((countdown, index) => {
        return (
          <Timer
            countdown={countdown}
            handleDecreaseTime={props.handleDecreaseTime}
            handleIncreaseTime={props.handleIncreaseTime}
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
            setCurrentActivity={props.setCurrentActivity}
            setCurrentTimer={props.setCurrentTimer}
            setLoops={props.setLoops}
            time={props.time}
            timersArray={props.timersArray}
          />
        )
      })}
    </div>
  )
}