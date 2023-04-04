import React from "react";

export default function TimerDisplay(props) {
  const timeFormat = (time, format) => {
    switch (format) {
      case "minutes":
        return ("0" + Math.floor((time / 60000) % 60)).slice(-2);
      case "seconds":
        return ("0" + Math.floor((time / 1000) % 60)).slice(-2);
      case "miliseconds":
        return ("0" + ((time / 10) % 100)).slice(-2);
      default:
        console.log('You have a typo on timeFormat Function')
    }
  };
  
	return (
		<div className="clock">
			<span className="digits">
				{timeFormat(props.timer, "minutes")}:
			</span>
			<span className="digits">
				{timeFormat(props.timer, "seconds")}
			</span>
      {props.miliseconds?(
        <span className="digits mili-sec">
				:{timeFormat(props.timer, "miliseconds")}
			</span>
      ):""}
		</div>
	);
}
