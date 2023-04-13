import React from "react";
import Timer from "../Timer/Timer";
import "./Timers.scss";

export default function Timers(props) {
  const addTimerIcon = (
    <div>
      <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Calendar / Timer_Add">
          <path id="Vector" d="M12 16V13M12 13V10M12 13H9M12 13H15M21 6L19 4M10 2H14M12 21C7.58172 21 4 17.4183 4 13C4 8.58172 7.58172 5 12 5C16.4183 5 20 8.58172 20 13C20 17.4183 16.4183 21 12 21Z" stroke="#f5f5f5" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );

  const removeTimerIcon = (
    <div>
      <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Calendar / Timer_Close">
          <path id="Vector" d="M10 15L12 13M12 13L14 11M12 13L10 11M12 13L14 15M21 6L19 4M10 2H14M12 21C7.58172 21 4 17.4183 4 13C4 8.58172 7.58172 5 12 5C16.4183 5 20 8.58172 20 13C20 17.4183 16.4183 21 12 21Z" stroke="#f5f5f5" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
  /*
    const removeTimerIcon = (
      <div>
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Calendar / Timer_Remove">
            <path id="Vector" d="M9 13H15M21 6L19 4M10 2H14M12 21C7.58172 21 4 17.4183 4 13C4 8.58172 7.58172 5 12 5C16.4183 5 20 8.58172 20 13C20 17.4183 16.4183 21 12 21Z" stroke="#f5f5f5" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    );
  */

  const increaseTimeIcon = (
    <div className={props.isCountdown?"icon-big" : "icon-small"}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Edit / Add_Plus_Circle">
          <path id="Vector" d="M8 12H12M12 12H16M12 12V16M12 12V8M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#f5f5f5" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );

  const decreaseTimeIcon = (
    <div className={props.isCountdown?"icon-big" : "icon-small"}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Edit / Remove_Minus_Circle">
          <path id="Vector" d="M8 12H16M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#f5f5f5" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );

  const addLoopIcon = (
    <div>
      <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Edit / Add_Row">
          <path id="Vector" d="M3 14V15C3 16.1046 3.89543 17 5 17L19 17C20.1046 17 21 16.1046 21 15L21 13C21 11.8954 20.1046 11 19 11H13M10 8H7M7 8H4M7 8V5M7 8V11" stroke="#f5f5f5" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );

  const removeLoopIcon = (
    <div>
      <svg transform="rotate(180)" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Edit / Delete_Row">
          <path id="Vector" d="M14 16H20M21 10V9C21 7.89543 20.1046 7 19 7H5C3.89543 7 3 7.89543 3 9V11C3 12.1046 3.89543 13 5 13H11" stroke="#f5f5f5" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  )

  const LoopButtons = (
    <div className="btn-grp btn-loops">
      <div className="activity">
        SETS:	{props.totalSets}
      </div>
      <div className="btn btn-small-loops"
        onClick={props.handleAddLoop}>
        {addLoopIcon}
      </div>
      <div className="btn btn-small-loops"
        onClick={props.handleRemoveLoop}>
        {removeLoopIcon}
      </div>
    </div>
  );

  return (
    <div id="timers" className={props.isInterval ? "timers intervals" : props.isStopwatch ? "timers lap" : "timers timers-countdown"}>
      {props.isInterval ? LoopButtons : ""}
      {props.timersArray.map((timer, index) => {
        return (
          <Timer
            handleActivityChange={props.handleActivityChange}
            handleDecreaseTime={props.handleDecreaseTime}
            handleIncreaseTime={props.handleIncreaseTime}
            handleRemoveTimer={props.handleRemoveTimer}
            index={index}
            isActive={props.isActive}
            isCountdown={props.isCountdown}
            isInterval={props.isInterval}
            isStopwatch={props.isStopwatch}
            key={`Timer${index}`}
            activitiesArray={props.activitiesArray}
            setCurrentIndex={props.setCurrentIndex}
            setCurrentTimer={props.setCurrentTimer}
            timer={timer}
            timersArray={props.timersArray}
            increaseTimeIcon={increaseTimeIcon}
            decreaseTimeIcon={decreaseTimeIcon}
            removeTimerIcon={removeTimerIcon}
          />
        )
      })}
      {props.isInterval ? (
        <div className="btn btn-small-loops btn-wide"
          onClick={props.handleAddTimer}>
          {addTimerIcon}
        </div>
      ) : ''
      }
    </div>
  )
}