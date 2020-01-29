import React, { useState, useEffect } from "react";
import pomodoreIcon from "../images/pomodore.png";
import ClickerButton from "./buttons/ClickerButton";

export default function Clock({ state: { sessionVal } }) {
  const [paused, setPaused] = useState(true);
  const [sessionTime, setSessionTime] = useState(sessionVal);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const int = setInterval(() => {
      if (!paused) {
        setSeconds(s => getSeconds(s));
      }
    }, 1000);

    return () => {
      clearInterval(int);
    };
  }, [paused]);
  useEffect(() => {
    setSessionTime(sessionVal);
  }, [sessionVal]);
  const getSeconds = secs => {
    switch (secs) {
      case 0:
        setSessionTime(sessionTime - 1);
        return 59;
      default:
        return secs - 1;
    }
  };

  const controlButtonColor = paused ? "green" : "orange";
  const controlStatus = paused ? "Start" : "Pause";
  return (
    <div className="pomodore-clock">
      <img className="pomodore-image" src={pomodoreIcon} alt="pomodore icon" />
      <div className="time-count">
        {sessionTime}:{seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
      </div>
      <div className="pomodore-control">
        <ClickerButton
          handleClick={() => setPaused(!paused)}
          style={{
            width: "auto",
            height: "auto",
            padding: "5px 15px",
            background: controlButtonColor
          }}
        >
          {controlStatus}
        </ClickerButton>
      </div>
    </div>
  );
}
