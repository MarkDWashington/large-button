import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App(props) {
  const [count, setCount] = useState("Loading...");
  
  useEffect(() => {
    axios.get("http://localhost:3001/current")
    .then((res) => {
      if (res.status === 200) {
        setCount(res.data);
      } else {
        console.log(res.status);
      }
    })
    .catch(console.err);
  });
  
  var increment = async () => {
    axios.get("http://localhost:3001/increment")
    .then((res) => {
      if (res.status === 200) {
        setCount(res.data);
        console.log(count);
      } else {
        console.log("Failed: ", res.status);
      }
    })
    .catch(console.error);
  };

  return (
    <div className="App">
      <div className="TheQuestion">Clear?</div>
      <button className="TheButton" onClick={async () => increment()}>Clear!</button>
      <div className="TheCount">({count})</div>
    </div>
  );
}

export default App;
