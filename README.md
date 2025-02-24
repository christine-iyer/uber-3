I realize I never did a readme. so I'm putting the timer code here to keep it safe.

**Timer One**
```js
import { useState, useEffect } from "react";
import * as d3 from "d3";

const TimerT = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const [selectedTime, setSelectedTime] = useState(1);
  const [progress, setProgress] = useState(0);
  const [spiralPath, setSpiralPath] = useState("");

  // 1️⃣ Timer Countdown Effect
  useEffect(() => {
    let timer;
    if (running && !paused) {
      timer = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }

    if (time === 0) {
      setRunning(false);
    }

    return () => clearInterval(timer);
  }, [running, paused, time]);

  // 2️⃣ Progress Update Effect
  useEffect(() => {
    if (running && !paused) {
      setProgress(((selectedTime * 60 - time) / (selectedTime * 60)) * 100);
    }
  }, [time, running, paused, selectedTime]);

  // 3️⃣ Generate Spiral Path Effect
  useEffect(() => {
    const generateSpiral = () => {
      const width = 200;
      const height = 200;
      const numLoops = 10;
      const step = 0.3;
      const maxRadius = 80;

      let points = [];
      let maxTheta = numLoops * 2 * Math.PI;
      let thetaEnd = (progress / 100) * maxTheta;

      for (let theta = 0; theta < thetaEnd; theta += step) {
        let r = maxRadius - (theta * maxRadius) / maxTheta;
        let x = width / 2 + r * Math.cos(theta);
        let y = height / 2 + r * Math.sin(theta);
        points.push([x, y]);
      }

      return d3.line()(points);
    };

    setSpiralPath(generateSpiral());
  }, [progress]);

  const startTimer = () => {
    setTime(selectedTime * 60);
    setProgress(0);
    setRunning(true);
    setPaused(false);
  };

  const pauseResumeTimer = () => {
    setPaused((prevPaused) => !prevPaused);
  };

  const stopTimer = () => {
    setRunning(false);
    setPaused(false);
    setTime(0);
    setProgress(0);
  };

  const restartTimer = () => {
    setTime(selectedTime * 60);
    setProgress(0);
    setRunning(true);
    setPaused(false);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}
      >
        Spiral Timer
      </h1>

      {/* Timer Display */}
      <div
        style={{
          fontSize: "32px",
          fontFamily: "monospace",
          backgroundColor: "#1f2937",
          color: "white",
          padding: "16px",
          borderRadius: "8px",
        }}
      >
        {formatTime(time)}
      </div>

      {/* Time Selection */}
      <select
        style={{
          marginTop: "16px",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
        onChange={(e) => setSelectedTime(Number(e.target.value))}
        value={selectedTime}
        disabled={running}
      >
        {[0.25, 0.5, 1, 5, 10, 15, 30, 45].map((min) => (
          <option key={min} value={min}>
            {min} min
          </option>
        ))}
      </select>

      {/* SVG Spiral Animation */}
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        style={{ marginTop: "16px" }}
      >
        <path d={spiralPath} stroke="purple" strokeWidth="3" fill="none" />
      </svg>

      {/* Controls */}
      <div style={{ marginTop: "16px", display: "flex", gap: "8px" }}>
        {!running ? (
          <button
            onClick={startTimer}
            style={{
              padding: "8px 16px",
              backgroundColor: "#22c55e",
              color: "white",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Start
          </button>
        ) : (
          <>
            <button
              onClick={pauseResumeTimer}
              style={{
                padding: "8px 16px",
                backgroundColor: "#eab308",
                color: "white",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
              }}
            >
              {paused ? "Resume" : "Pause"}
            </button>
            <button
              onClick={stopTimer}
              style={{
                padding: "8px 16px",
                backgroundColor: "#ef4444",
                color: "white",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Stop
            </button>
          </>
        )}

        <button
          onClick={restartTimer}
          style={{
            padding: "8px 16px",
            backgroundColor: "#3b82f6",
            color: "white",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default TimerT;

```

```js
import { useState, useEffect } from "react";

// Simple shapes instead of flowers
const shapes = {
  square: "M0,0 C50,40 50,70 20,100 L0,85 L-20,100 C-50,70 -50,40 0,0 Z",
  circle: "M-35 0 C-25 25 25 25 35 0 C50 25 25 75 0 100 C-25 75 -50 25 -35 0 Z",
  triangle: "M0,0 C50,40 50,70 20,100 L0,85 L-20,100 C-50,70 -50,40 0,0 Z",
  oval: "M0 0 C50 25 50 75 0 100 C-50 75 -50 25 0 0 Z",
};

const TimerShape = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const [selectedTime, setSelectedTime] = useState(1);
  const [selectedShape, setSelectedShape] = useState("square");
  const [progress, setProgress] = useState(0);
  const [pathLength, setPathLength] = useState(200);

  // Timer Countdown Effect
  useEffect(() => {
    let timer;
    if (running && !paused) {
      timer = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }

    if (time === 0) {
      setRunning(false);
    }

    return () => clearInterval(timer);
  }, [running, paused, time]);

  // 2️⃣ Progress Update Effect
  useEffect(() => {
    if (running && !paused) {
      setProgress(((selectedTime * 60 - time) / (selectedTime * 60)) * 100);
    }
  }, [time, running, paused, selectedTime]);

  // Get Path Length Dynamically
  useEffect(() => {
    const pathElement = document.querySelector("#shape-path");
    if (pathElement) {
      const length = pathElement.getTotalLength();
      setPathLength(length);
      pathElement.style.strokeDasharray = length;
    }
  }, [selectedShape]);

  const startTimer = () => {
    setTime(selectedTime * 60);
    setProgress(0);
    setRunning(true);
    setPaused(false);
  };

  const pauseResumeTimer = () => {
    setPaused((prevPaused) => !prevPaused);
  };

  const stopTimer = () => {
    setRunning(false);
    setPaused(false);
    setTime(0);
    setProgress(0);
  };

  const restartTimer = () => {
    setTime(selectedTime * 60);
    setProgress(0);
    setRunning(true);
    setPaused(false);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}
      >
        Shape Timer
      </h1>

      {/* Timer Display */}
      <div
        style={{
          fontSize: "32px",
          fontFamily: "monospace",
          backgroundColor: "#1f2937",
          color: "white",
          padding: "16px",
          borderRadius: "8px",
        }}
      >
        {formatTime(time)}
      </div>

      {/* Time Selection */}
      <select
        style={{
          marginTop: "16px",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
        onChange={(e) => setSelectedTime(Number(e.target.value))}
        value={selectedTime}
        disabled={running}
      >
        {[0.25, 0.5, 1, 5, 10, 15, 30, 45].map((min) => (
          <option key={min} value={min}>
            {min} min
          </option>
        ))}
      </select>

      {/* Shape Selection */}
      <select
        style={{
          marginTop: "16px",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
        onChange={(e) => setSelectedShape(e.target.value)}
        value={selectedShape}
        disabled={running}
      >
        {Object.keys(shapes).map((shape) => (
          <option key={shape} value={shape}>
            {shape.charAt(0).toUpperCase() + shape.slice(1)}
          </option>
        ))}
      </select>

      {/* SVG Animation */}
      <svg
        width="200"
        height="200"
        viewBox="0 -10 35 300"
        style={{ marginTop: "11px" }}
        stroke="purple"
        strokeWidth="4"
        fill="none"
      >
        <path
          id="shape-path"
          d={shapes[selectedShape]}
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength * (1 - progress / 100)}
          strokeLinecap="round"
        />
      </svg>

      {/* Controls */}
      <div style={{ marginTop: "16px", display: "flex", gap: "8px" }}>
        {!running ? (
          <button
            onClick={startTimer}
            style={{
              padding: "8px 16px",
              backgroundColor: "#22c55e",
              color: "white",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Start
          </button>
        ) : (
          <>
            <button
              onClick={pauseResumeTimer}
              style={{
                padding: "8px 16px",
                backgroundColor: "#eab308",
                color: "white",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
              }}
            >
              {paused ? "Resume" : "Pause"}
            </button>
            <button
              onClick={stopTimer}
              style={{
                padding: "8px 16px",
                backgroundColor: "#ef4444",
                color: "white",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Stop
            </button>
          </>
        )}

        <button
          onClick={restartTimer}
          style={{
            padding: "8px 16px",
            backgroundColor: "#3b82f6",
            color: "white",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default TimerShape;

```
Timer Repeat

```js
d3 = require("d3@7");

// Set up SVG
const width = 300, height = 300;
const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", "-100 -100 200 200"); // Adjust to center the flower

// Define petal path
const petalPath = "M0,0 C50,40 50,70 20,100 L0,85 L-20,100 C-50,70 -50,40 0,0 Z";

// Append 5 petals, each rotated
const numPetals = 5;
const angle = 360 / numPetals;

for (let i = 0; i < numPetals; i++) {
    svg.append("path")
        .attr("d", petalPath)
        .attr("fill", d3.schemeCategory10[i % 10]) // Assign a color from D3's category10 scheme
        .attr("transform", `rotate(${i * angle})`); // Rotate each petal
}

// Return the SVG
svg.node();
```

Explanation:
- We create an SVG with a centered view (viewBox="-100 -100 200 200").
- The petal path is defined in petalPath.
- A for loop appends 5 petals, rotating each by 360 / 5 = 72° around the center.
- The transform: rotate() rotates each petal around (0,0).
- D3 color scheme (d3.schemeCategory10) is used to give each petal a different color.
