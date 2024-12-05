import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()) => {
    
  } 
  const [count1, setCount1] = useState(0)

  const decrementValue = () => {
    if(count > 0) {
      setCount((count) => count - 1)
    }
  }
    const decrementValue1 = () => {
      if(count1 > 0) {
        setCount1((count1) => count1 - 1)
      }
  }

  return (
    <>
      <div>
        <a href="https://www.paysandu.com.br/home" target="_blank">
          <img src="http://surl.li/eaimzk" className="logo" alt="Paysandu logo" />
        </a>
        <a href="https://www.palmeiras.com.br/" target="_blank">
          <img src="http://surl.li/qvjmdh" className="logo" alt="Palmeiras logo" />
        </a>
      </div>
      <h1>Paysandu {count} X {count1} Palmeiras </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          + 1 Gol para o Paysandu.
        </button>
        <button onClick={() => decrementValue()}>
          - 1 Gol para o Paysandus.
        </button>
        <button onClick={() => setCount1((count1) => count1 + 1)}>
          + 1 Gol para o Palmeiras.
        </button>
        <button onClick={() => decrementValue1()}>
          - 1 Gol para o Palmeiras.
        </button>
      </div>
      <p className="read-the-docs">
        Clique nos escudos dos times para ler mais sobre eles.
      </p>
    </>
  )
}

export default App;
