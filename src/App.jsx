import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="relative ">
      {/* Navbar */}
      <div className="absolute top-0 z-10 w-full">
        <Navbar />
      </div>

      <Home/>
    </div>

    </>
  )
}

export default App
