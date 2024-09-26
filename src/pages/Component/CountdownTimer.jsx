import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const initialTimeInSeconds = 13 * 24 * 60 * 60; 

  const [remainingTime, setRemainingTime] = useState(initialTimeInSeconds);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : initialTimeInSeconds));
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const days = Math.floor(remainingTime / (24 * 60 * 60));
  const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
  const seconds = remainingTime % 60;

  return (
    <div className="timera-prodects">
      {days}d : {hours}h : {minutes}m : {seconds}s
    </div>
  );
};

export default CountdownTimer;
