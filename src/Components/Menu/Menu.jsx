import React from "react";
import "./Menu.scss";

export default function Menu(props) {
const menuButtons = (
	<div className="btn-grp menu-column">
    <div className="btn btn-menu red-back"
      onClick={props.handleStopwatch}>
      STOPWATCH
    </div>
    <div className="btn btn-menu red-back"
      onClick={props.handleCountdown}>
      COUNTDOWN
    </div>
    <div className="btn btn-menu red-back"
      onClick={props.handleIntevals}>
      INTERVALS
    </div>
	</div>
);
const goBackButton = (
    <div className="go-back"
      onClick={props.handleGoBack}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
      </svg>
    </div>
);

return (
	<div className="menu">
	{props.goBack ? goBackButton : menuButtons}
	</div>
);
}
