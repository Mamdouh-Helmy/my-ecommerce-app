import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider";

const CountdownTimer = () => {
  const { setTimer, timear } = useContext(ProductsContext);
  const initialTimeInSeconds = 13 * 24 * 60 * 60;

  const calculateRemainingTime = () => {
    if (timear.length === 4) {
      const [days, hours, minutes, seconds] = timear;
      return days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
    }
    return initialTimeInSeconds;
  };

  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemainingTime((prevTime) =>
        prevTime > 0 ? prevTime - 1 : initialTimeInSeconds
      );
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    const days = Math.floor(remainingTime / (24 * 60 * 60));
    const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
    const seconds = remainingTime % 60;

    setTimer([days, hours, minutes, seconds]);
  }, [remainingTime, setTimer]);
  return (
    <div className="timera-prodects">
      {timear.length === 4 && (
        <div>
          {timear[0]}d : {timear[1]}h : {timear[2]}m : {timear[3]}s
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
