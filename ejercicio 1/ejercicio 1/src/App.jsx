import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Ejemplo } from './funcional component/ejemplo'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Ejemplo/>
  )
}

export default App
