import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export function App() {
  const [count, setCount] = useState(0)
  const text = 'Hello World!'
  const description = 'Its my first page'
  return (
    <>
    <h1>{text}</h1>
    <p>{description}</p>
    </>
  )
}