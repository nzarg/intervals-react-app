import React, { useState, useEffect } from "react";
import ControlButtons from "../ContolButtons/ControlButtons";
import CurrentTimer from "../CurrentTimer/CurrentTimer";
import Menu from "../Menu/Menu";
import Timers from "../Timers/Timers";
import "./StopWatch.scss";


function StopWatch() {
	const [activitiesArray, setActivitiesArray] = useState([]);
	const [currentActivity, setCurrentActivity] = useState('activity');
	const [currentTimer, setCurrentTimer] = useState(0);
	const [goBack, setGoBack] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const [isCountdown, setIsCountdown] = useState(false);
	const [isInterval, setIsInterval] = useState(false);
	const [isPaused, setIsPaused] = useState(true);
	const [isStopwatch, setIsStopwatch] = useState(false);
	const [loops, setLoops] = useState(2);
	const [time, setTime] = useState(0);
	const [timersArray, setTimersArray] = useState([0]);

	useEffect(() => {
		let interval = null;

		if (isActive && isPaused === false) {
			interval = setInterval(() => {
				setTime((time) => time + 10);
			}, 10);
		} else {
			clearInterval(interval);
		}
		return () => {
			clearInterval(interval);
		};
	}, [isActive, isPaused]);

	const backgroundIsBlack = () => {
		document.getElementById("stop-watch").classList.remove('finish');
	}

	const handleStart = () => {
		setIsActive(true);
		setIsPaused(false);
		backgroundIsBlack();
	};

	const handlePauseResume = () => {
		setIsPaused(!isPaused);
	};

	const handleReset = () => {
		setIsPaused(true);
		setIsActive(false);
		setTime(0);
		if(isStopwatch){
			setTimersArray([])
		}
	};

	const handleLap = () => {
		if (isActive) {
			setTimersArray(timersArray => {
				return [...timersArray, time]
			})
		}
	};

	const handleStopwatch = () => {
		setIsStopwatch(true);
		setIsCountdown(false);
		setIsInterval(false);
		setCurrentTimer(time);
		setTimersArray([]);
		setTime(0);
		setGoBack(true);
		backgroundIsBlack();
	};

	const handleCountdown = () => {
		setIsCountdown(true);
		setIsInterval(false);
		setIsStopwatch(false);
		setTimersArray([300000])
		setTime(0);
		setLoops(1);
		setGoBack(true);
		backgroundIsBlack();
	};

	const handleIntevals = () => {
		setIsCountdown(false);
		setIsInterval(true);
		setIsStopwatch(false);
		setTimersArray([2000, 2000, 2000])
		setTime(0);
		setGoBack(true);
		backgroundIsBlack();
	};

	const handleGoBack = () => {
		setGoBack(false);
		handleReset();
		backgroundIsBlack();
	};

	const handleAddTimer = () => {
		setTimersArray(timersArray => {
			return [...timersArray, 0]
		})
	};

	const handleRemoveTimer = () => {
		setTimersArray(timersArray.slice(0, timersArray.length - 1))
	};

	const handleIncreaseTime = (index) => {
		setTimersArray(() => {
			timersArray[index] += 15000;
			return [...timersArray]
		})
	};

	const handleDecreaseTime = (index) => {
		setTimersArray(() => {
			if (timersArray[index] >= 0) {
				if (timersArray[index] < 15000) {
					timersArray[index] = 0;
				} else {
					timersArray[index] -= 15000;
				}
			}
			return [...timersArray]
		})
	};

	const handleAddLoop = () => {
		setLoops(loops => loops + 1);
	};

	const handleRemoveLoop = () => {
		if (loops > 1) {
			setLoops(loops => loops - 1);
		}
	};

	return (
		<div id="stop-watch" className="stop-watch">
			<Menu
				goBack={goBack} 
				handleCountdown={handleCountdown}
				handleGoBack={handleGoBack}
				handleIntevals={handleIntevals}
				handleStopwatch={handleStopwatch}
			/>
			{goBack ? (
				<div className="container">
					<CurrentTimer 
						currentActivity={currentActivity} 
						isInterval={isInterval}
						isStopwatch={isStopwatch}
						setCurrentTimer={setCurrentTimer}
						timer={isStopwatch? time : currentTimer}
					/>
					<Timers
						activitiesArray={activitiesArray}
						currentActivity={currentActivity}
						currentTimer={currentTimer}
						handleAddLoop={handleAddLoop}
						handleAddTimer={handleAddTimer}
						handleDecreaseTime={handleDecreaseTime}
						handleIncreaseTime={handleIncreaseTime}
						handleRemoveLoop={handleRemoveLoop}
						handleRemoveTimer={handleRemoveTimer}
						handleReset={handleReset}
						handleStart={handleStart}
						isActive={isActive}
						isCountdown={isCountdown}
						isInterval={isInterval}
						isStopwatch={isStopwatch}
						loops={loops}
						setActivitiesArray={setActivitiesArray}
						setCurrentActivity={setCurrentActivity}
						setCurrentTimer={setCurrentTimer}
						setLoops={setLoops}
						time={time}
						timersArray={timersArray}
					/>
					<ControlButtons
						active={isActive}
						handleAddLoop={handleAddLoop}
						handleAddTimer={handleAddTimer}
						handleDecreaseTime={handleDecreaseTime}
						handleIncreaseTime={handleIncreaseTime}
						handleLap={handleLap}
						handlePauseResume={handlePauseResume}
						handleRemoveLoop={handleRemoveLoop}
						handleRemoveTimer={handleRemoveTimer}
						handleReset={handleReset}
						handleStart={handleStart}
						isInterval={isInterval}
						isPaused={isPaused}
						isStopwatch={isStopwatch}
						loops={loops}
					/>
				</div>
			) : ""
			}
		</div>
	);
}

export default StopWatch;
