import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from '../public/images/logo.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <img src={logo}/>
      </div>
    </>
  )
}

export default App
