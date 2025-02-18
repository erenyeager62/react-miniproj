
import { useState } from 'react';
import './App.css'

function App() {
  const [count,setCount]= useState<number>(0);

  const addValue = ()=>{
    if(count == 20){
      setCount(20);
    }
    else{
      setCount(count+1);
    }
   
    console.log("value added" + count);
  }
  const removeValue = ()=>{
    if(count == 0){
      setCount(0)
    }
    else{
      setCount(count-1);
    }
    console.log("value deleted" + count);
    }
  return (
    <>
      <h1>counter app</h1>
      <h2>counter value:{count}</h2>

      <button
      onClick={addValue}
      >Add Value {count}</button>
      <br/>
      <br/>
      <button
        onClick={removeValue}>Remove Value {count}</button>
    </>
  )
}

export default App
