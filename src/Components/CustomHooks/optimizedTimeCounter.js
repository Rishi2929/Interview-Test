import { useState, useEffect } from "react";

export const useOptimizedTimeCounter = (
  initialTime = { hours: 0, minutes: 0, seconds: 0 }
) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(({ hours, minutes, seconds }) => {
        const newSeconds = (seconds + 1) % 60;
        const newMinutes = (minutes + (seconds + 1 === 60 ? 1 : 0)) % 60;
        const newHours =
          hours + (minutes + 1 === 60 && seconds + 1 === 60 ? 1 : 0);

        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
};
