import { useRef, useState } from "react";
import Modal from "./Modal";

export default function Challenge({ title, time }) {
  const timer = useRef();
  const modal = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(time * 1000);

  function handleStart() {
    setTimerStarted(true);
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer.current);
          setTimerStarted(false);
          modal.current.open();
          return 0;
        }
        return prevTime - 10;
      });
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    setTimerStarted(false);
    modal.current.open();
  }

  function handleReset() {
    setTimeRemaining(time * 1000);
  }

  return (
    <>
      <Modal
        ref={modal}
        timeRemaining={timeRemaining}
        time={time}
        onReset={handleReset}
      />
      <div className="challenge-card">
        <h3>{title}</h3>
        <p className="time">
          {time} second{time > 1 ? "s" : ""}
        </p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
        <p className="status">
          {timerStarted ? "Timer is running" : "Timer is inactive"}
        </p>
      </div>
    </>
  );
}
