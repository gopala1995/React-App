import React, { useState, useEffect, useRef } from 'react';

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial',
    marginTop: '50px'
  },
  timer: {
    fontSize: '3rem',
    margin: '20px 0',
  },
  controls: {
    margin: '20px 0',
  },
  button: {
    padding: '10px 15px',
    margin: '0 10px',
    fontSize: '1rem',
    cursor: 'pointer'
  },
  input: {
    padding: '5px',
    fontSize: '1rem',
    width: '60px',
    textAlign: 'center'
  }
};

function StopwatchApp() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [targetTime, setTargetTime] = useState(10);
  const intervalRef = useRef(null);

  // 🔔 Sound effect (can be replaced with real sound URL)
  const playSound = () => {
    console.log('🔔 Target time reached!');
    const audio = new Audio('https://www.soundjay.com/buttons/sounds/beep-07.mp3');
    audio.play();
  };

  // 🧠 Timer Logic
  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => {
          const next = prev + 1;
          if (next === Number(targetTime)) {
            playSound();
          }
          return next;
        });
      }, 1000);
    }

    // 🧹 Cleanup on stop or unmount
    return () => clearInterval(intervalRef.current);
  }, [running, targetTime]);

  // 🔘 Button Handlers
  const handleStart = () => setRunning(true);
  const handleStop = () => setRunning(false);
  const handleReset = () => {
    setRunning(false);
    setSeconds(0);
  };

  return (
    <div style={styles.container}>
      <h1>⏱ Stopwatch</h1>

      <div style={styles.timer}>{seconds} sec</div>

      <div style={styles.controls}>
        <button onClick={handleStart} style={styles.button}>Start</button>
        <button onClick={handleStop} style={styles.button}>Stop</button>
        <button onClick={handleReset} style={styles.button}>Reset</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <label>Target Time (sec): </label>
        <input
          type="number"
          value={targetTime}
          onChange={(e) => setTargetTime(Number(e.target.value))}
          style={styles.input}
        />
      </div>
    </div>
  );
}

export default StopwatchApp;