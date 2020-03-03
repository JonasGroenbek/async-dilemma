import React, { useState } from "react";
import "./styles.css";
import api from "./api";

const callApi = (refresh = false, setCount, count) => {
  api(refresh).then(e => {
    setCount(++count);
  });
};

export default function App() {
  const [orangeCount, setOrangeCount] = useState(0);
  const [greenCount, setGreenCount] = useState(0);
  const [yellowCount, setYellowCount] = useState(0);

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <button onClick={() => callApi(false, setOrangeCount, orangeCount)}>
            Call orange
          </button>
          <button onClick={() => callApi(true, setOrangeCount, orangeCount)}>
            refresh and ++
          </button>
          <p style={{ backgroundColor: "orange" }}>
            {`yellow count: ${orangeCount}`}
          </p>
        </div>
        <div>
          <button onClick={() => callApi(false, setYellowCount, yellowCount)}>
            add yellow
          </button>
          <button onClick={() => callApi(true, setYellowCount, yellowCount)}>
            refresh and ++
          </button>
          <p style={{ backgroundColor: "yellow" }}>
            {`yellow count: ${yellowCount}`}
          </p>
        </div>
        <div>
          <button onClick={() => callApi(false, setGreenCount, greenCount)}>
            add green
          </button>
          <button onClick={() => callApi(true, setGreenCount, greenCount)}>
            refresh and ++
          </button>
          <p style={{ backgroundColor: "green" }}>
            {`green count: ${greenCount}`}
          </p>
        </div>
      </div>
    </div>
  );
}
