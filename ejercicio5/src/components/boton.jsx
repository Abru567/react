import React from 'react'
import { useState } from 'react'

export default function Boton() {
    const [contador, setContador] = useState(0)

console.log(contador)
    return (
    <div>
      <p>{contador}</p>
      <button onClick ={() => setContador(contador + 1)} >boton </button>
    </div>
  )
}
