import { useState } from "react";
import './App.css';

function App(){
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1># Cynthia's Counter App #</h1>
      <h2>{count}</h2>
      <button onClick={()=> setCount(count + 1)} >Increment</button>
      <button onClick={() => setCount(count -1)}>Decrement</button>
    </div>
  )
};

//I could also have done function handleButtonClick(){
// setCount(count + 1); 
// } 


export default App;