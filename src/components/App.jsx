import React, {useState} from "react";

function App() {

const [time, setTime] = useState(new Date().toLocaleTimeString());
setInterval(getCurrentTime, 1000);
function getCurrentTime(){
  setTime(new Date().toLocaleTimeString());
}

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getCurrentTime}>Get Time</button>
    </div>
  );
}

export default App;

let time = new Date().toLocaleTimeString();
console.log(time);