import { useOptimizedTimeCounter } from "../Components/CustomHooks/optimizedTimeCounter";
import { useTimeCounter } from "../Components/CustomHooks/TimeCounter";

function TimeCounterPage() {
  const time = useTimeCounter({ hours: 0, minutes: 0, seconds: 55 }); // Start at 0:0:55
  const time2 = useOptimizedTimeCounter({ hours: 0, minutes: 0, seconds: 55 });

  return (
    <div>
      <h1>Time Counter</h1>
      <h3>Time Counter using time counter hook</h3>
      <div>
        <span>Hours: {String(time.hours)}</span>
        <span> Minutes: {String(time.minutes)}</span>
        <span> Seconds: {String(time.seconds)}</span>
      </div>

      <h1>Optimized Time Counter</h1>
      <h3>Optimized Time Counter using time counter hook</h3>
      <div>
        <span>Hours: {String(time2.hours)}</span>
        <span> Minutes: {String(time2.minutes)}</span>
        <span> Seconds: {String(time2.seconds)}</span>
      </div>
    </div>
  );
}

export default TimeCounterPage;
