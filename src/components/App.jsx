import React, { useState } from "react";

function App() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString()
  );

  const updateTime = () => {
    setTime(new Date().toLocaleTimeString());
  };

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
