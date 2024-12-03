import { useState, useEffect } from "react";

export const useTimeCounter = (
  initialTime = { hours: 0, minutes: 0, seconds: 0 }
) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;
        seconds += 1;

        if (seconds === 60) {
          seconds = 0;
          minutes += 1;
        }

        if (minutes === 60) {
          minutes = 0;
          hours += 1;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
};
