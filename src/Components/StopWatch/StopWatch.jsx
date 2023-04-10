import React, { useState, useEffect } from "react";
import ControlButtons from "../ContolButtons/ControlButtons";
import CurrentTimer from "../CurrentTimer/CurrentTimer";
import Menu from "../Menu/Menu";
import Timers from "../Timers/Timers";
import "./StopWatch.scss";


function StopWatch() {
	const [activitiesArray, setActivitiesArray] = useState([]);
	const [bestLapIndex, setBestLapIndex] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentTimer, setCurrentTimer] = useState(0);
	const [goBack, setGoBack] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const [isCountdown, setIsCountdown] = useState(false);
	const [isInterval, setIsInterval] = useState(false);
	const [isPaused, setIsPaused] = useState(true);
	const [isStopwatch, setIsStopwatch] = useState(false);
	const [sets, setSets] = useState(0);
	const [totalSets, setTotalSets] = useState(0);
	const [time, setTime] = useState(0);
	const [timersArray, setTimersArray] = useState([0]);
	const [worstLapIndex, setWorstLapIndex] = useState(0);

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

	//Stopwatch logic
	useEffect(() => {
		if (document.getElementById('timers')) {
			var elem = document.getElementById('timers');
			elem.scrollTop = elem.scrollHeight;
		};
		if (isStopwatch) {
			if (timersArray.length > 2) {
				const bestLapArray = document.getElementsByClassName("bestLap");
				for (let i = 0; i < bestLapArray.length; i++) {
					bestLapArray[i].classList.remove("bestLap");
				};
				const worstLapArray = document.getElementsByClassName("worstLap");
				for (let i = 0; i < worstLapArray.length; i++) {
					worstLapArray[i].classList.remove("worstLap");
				};
				setBestLapIndex(timersArray.indexOf(Math.min(...timersArray)));
				setWorstLapIndex(timersArray.indexOf(Math.max(...timersArray)));
				document.getElementById(`timer-${bestLapIndex}`).classList.add('bestLap');
				document.getElementById(`timer-${worstLapIndex}`).classList.add('worstLap');
			};
		};
	}, [bestLapIndex, isStopwatch, timersArray, worstLapIndex]);

	// Intervals Logic	
	const timerLogic = () => {
		let timer = 0;
		if (isStopwatch) {
			timer = time
		};

		if (isCountdown) {
			timer = timersArray[currentIndex] - time;
		};

		if (isInterval) {
			let totalIntervalsIndex = 0;
			if (timersArray.length === currentIndex) {
				if (sets < totalSets - 1) {
					setSets(sets + 1);
					setCurrentIndex(0);
					setTime(0);
				} else {
					handleReset();
					const stopWatch = document.getElementById("stop-watch");
					stopWatch.classList.add('finish');
				}
			};
			for (let i = 0; i <= currentIndex; i++) {
				totalIntervalsIndex += timersArray[i]
			}
			timer = totalIntervalsIndex - time;
			if (timer === 0 && isActive) {
				setCurrentIndex(currentIndex => currentIndex + 1);
			};
		};
		return timer
	};

	const handleStart = () => {
		setIsActive(true);
		setIsPaused(false);
		backgroundIsBlack();
	};

	const handlePauseResume = () => {
		setIsPaused(!isPaused);
	};

	const handleReset = () => {
		setCurrentIndex(0);
		setIsPaused(true);
		setIsActive(false);
		setSets(0);
		setTime(0);
		if (isStopwatch) {
			setTimersArray([])
		};
	};

	///Stopwatch
	const handleLap = () => {
		if (isActive) {
			setBestLapIndex(0);
			setWorstLapIndex(0);
			let lapTotal = 0;
			for (let i = 0; i < timersArray.length; i++) {
				lapTotal += timersArray[i];
			};
			setTimersArray(timersArray => {
				return [...timersArray, time - lapTotal]
			});
			if (timersArray.length > 1) {
			}
		};
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
		setSets(1);
		setGoBack(true);
		backgroundIsBlack();
	};
	//Intervals
	const handleIntevals = () => {
		setIsCountdown(false);
		setIsInterval(true);
		setIsStopwatch(false);
		setActivitiesArray(['squats', 'rest'])
		setTimersArray([2000, 2000])
		setTime(0);
		setTotalSets(2);
		setGoBack(true);
		backgroundIsBlack();
	};
	//Menu
	const handleGoBack = () => {
		setGoBack(false);
		handleReset();
		backgroundIsBlack();
	};

	//Intervals
	const handleAddTimer = () => {
		setTimersArray(timersArray => {
			return [...timersArray, 0]
		});
		setActivitiesArray(activitiesArray => {
			return [...activitiesArray, "ACTIVITY"]
		});

	};

	const handleRemoveTimer = (index) => {
		setTimersArray(timersArray.filter((_, i) => i !== index));
		setActivitiesArray(activitiesArray.filter((_, i) => i !== index));
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
		setTotalSets(totlaSets => totalSets + 1);
	};

	const handleRemoveLoop = () => {
		if (totalSets > 1) {
			setTotalSets(totalSets => totalSets - 1);
		}
	};

	const handleActivityChange = (e, index) => {
		const newArray = [
			...activitiesArray.slice(0, index),
			e.target.value,
			...activitiesArray.slice(index + 1)
		];
		setActivitiesArray(newArray);
		console.log(activitiesArray)
	};
	const intervalsTotal = timersArray.reduce((a, b) => a + b, 0);

	const timeElapsed = intervalsTotal * sets + time;

	const timeRemaining = intervalsTotal * totalSets - timeElapsed;

	const Container = (
		<div className="container">
			{isInterval && !isActive ? "" : (
				<CurrentTimer
					activitiesArray={activitiesArray}
					currentIndex={currentIndex}
					isActive={isActive}
					isInterval={isInterval}
					isStopwatch={isStopwatch}
					isCountdown={isCountdown}
					sets={sets}
					time={time}
					timer={timerLogic()}
					timeRemaining={timeRemaining}
					timeElapsed={timeElapsed}
					totalSets={totalSets}
				/>
			)
			}
			{isInterval && isActive ? "" : (
				<Timers
					activitiesArray={activitiesArray}
					currentIndex={currentIndex}
					currentTimer={currentTimer}
					handleActivityChange={handleActivityChange}
					handleAddLoop={handleAddLoop}
					handleAddTimer={handleAddTimer}
					handleDecreaseTime={handleDecreaseTime}
					handleIncreaseTime={handleIncreaseTime}
					handleRemoveLoop={handleRemoveLoop}
					handleRemoveTimer={handleRemoveTimer}
					isActive={isActive}
					isCountdown={isCountdown}
					isInterval={isInterval}
					isStopwatch={isStopwatch}
					totalSets={totalSets}
					setCurrentIndex={setCurrentIndex}
					setCurrentTimer={setCurrentTimer}
					timersArray={timersArray}
				/>
			)
			}
		</div>);

	return (
		<div id="stop-watch" className="stop-watch">
			<Menu
				goBack={goBack}
				handleCountdown={handleCountdown}
				handleGoBack={handleGoBack}
				handleIntevals={handleIntevals}
				handleStopwatch={handleStopwatch}
			/>
			{goBack ? Container : ""
			}
			{goBack?(
				<ControlButtons
				active={isActive}
				handleLap={handleLap}
				handlePauseResume={handlePauseResume}
				handleReset={handleReset}
				handleStart={handleStart}
				isInterval={isInterval}
				isPaused={isPaused}
				isStopwatch={isStopwatch}
			/>
			) :""}
		</div>
	);
}

export default StopWatch;
