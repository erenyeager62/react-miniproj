

import { useState ,useCallback, useEffect } from 'react'
import './App.css'

function App() {
  
  const [length,setLength] = useState<number>(8);
  const [numAllowed,setNumAllowed] = useState<boolean>(false);
  const [charAllowed,setCharAllowed] = useState<boolean>(false);
  const [password,setPassword] = useState<string>("");

  const passwordgenerator = useCallback(()=>{
    let pass = "";
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num= "1234567890"
    let char= "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    if (numAllowed){
      str+=num;
    }
    if (charAllowed){
      str+=char;
    }
    for (let index = 1; index < length; index++) {
      let charindex = Math.floor(Math.random() * str.length + 1);
      pass += str[charindex]; 
      
    }
    setPassword(pass);
  },[length,numAllowed,charAllowed,setPassword])

  useEffect(()=>{
    passwordgenerator();
  },[length,numAllowed,charAllowed,passwordgenerator]
)

  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
       
        />
        <button
        
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setLength(Number(e.target.value))}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={() => {
              setNumAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    </>
  )
}

export default App
