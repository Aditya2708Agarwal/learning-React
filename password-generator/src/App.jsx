import { useState, useCallback, useEffect} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){
      str += "0123456789"
    }
    if(charAllowed){
      str += "!@#$%^&*()"
    }

    for(let i = 1; i <= length; i++){
      let char  = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

   }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])
  
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-white bg-gray-700 text-center'>
        <h1>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-blue-600'>
          <input 
          type="text" 
          value={password} 
          className='outline-none w-full px-3 py-1' 
          placeholder='Password' 
          readOnly />
          <button className='bg-white text-black outline-none px-3 py-0.5 shrink-0 hover:bg-blue-100'> copy </button>
          </div>
          <div className='flex flex-wrap mx-4 '>
            <div>
              <input type="range" min={8} max={15} value={length}
              onChange={(e) => {setLength(e.target.value)}} />
              <label htmlFor=""> Length: {length}</label>
            </div>
            <div className='mx-2'>  
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id='numberinput'
            onChange={() => {
              setNumberAllowed((prev) =>!prev)
            }} />
            <label htmlFor=""> numbers </label>
            </div>
            <div className='mx-2'>  
            <input type="checkbox"
            defaultChecked={charAllowed}
            id='charinput'
            onChange={() => {
              setCharAllowed((prev) =>!prev)
            }} />
            <label htmlFor=""> char </label>
            </div>
          </div> 
      </div>
    </>
  )
}

export default App
 