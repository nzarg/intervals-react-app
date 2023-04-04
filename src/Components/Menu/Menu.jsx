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
      Go Back
    </div>
);

return (
	<div className="menu">
	{props.goBack ? goBackButton : menuButtons}
	</div>
);
}
