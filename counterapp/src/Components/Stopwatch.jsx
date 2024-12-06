import React, { useEffect } from "react";
import { useState } from "react";

const Stopwatch = () => {
  const [isrunning, setrunning] = useState(false);
  const [time, setTIme] = useState(0);
  const [validid, setvalidid] = useState(null);
  function handleStartStop() {
    setrunning((p) => !p);
  }
  function handleReset() {
    setTIme(0);
    clearInterval(validid);
  }
  useEffect(() => {
    if (isrunning) {
      const id = setInterval(() => {
        setTIme((time) => time + 1);
      }, 1000);
      setvalidid(id);
    }
    return () => clearInterval(validid);
  }, [isrunning]);

  function formattime() {
    const minutes = Math.floor((time % 3600) / 60);
    const hours = Math.floor(time / 3600);
    const m = minutes < 10 ? "0" + minutes : minutes;
    const seconds = time % 60;
    const s = seconds < 10 ? "0" + seconds : seconds;
    const h = hours < 10 ? "0" + hours : hours;
    return `${h}::${m}::${s}`;
  }

  return (
    <div>
      Stopwatch
      <h1>{formattime(time)}</h1>
      <button onClick={handleStartStop}>{isrunning ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
