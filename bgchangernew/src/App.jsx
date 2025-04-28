import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#333333")

  return (
   <div className='w-full h-screen' style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-14 mx-auto w-fit divide-x divide-gray-300 overflow-hidden rounded border bg-white dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800">
        <button
          onClick={() => setColor("#333333")}
          type="button"
          className="px-5 py-2 text-2xl font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
          >
          Default
        </button>
        <button
          onClick={() => setColor("black")}
          type="button"
          className="px-5 py-2 text-2xl font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
          >
          Black
        </button>
        <button
          onClick={() => setColor("blue")}
          type="button"
          className="px-5 py-2 text-2xl font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("Red")}
          type="button"
          className="px-5 py-2 text-2xl font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Red
        </button>
        <button
          onClick={() => setColor("green")}
          type="button"
          className="px-5 py-2 text-2xl font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          green
        </button>
        <button
          onClick={() => setColor("yellow")}
          type="button"
          className="px-5 py-2 text-2xl font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          yellow
        </button>
        <button
          onClick={() => setColor("purple")}
          type="button"
          className="px-5 py-1.5 text-2xl font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Purple
        </button>
        <button
          onClick={() => setColor("white")}
          type="button"
          className="px-5 py-1.5 text-2xl font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          white
        </button>

      </div>
   </div>
  )
}

export default App
