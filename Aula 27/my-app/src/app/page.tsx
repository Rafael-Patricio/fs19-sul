"use client"
import style from "./index.module.css"
import {useState} from "react"
export default function Home() {

  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("")
  function addTarefas() {
    if( novaTarefa !== "") {
    //@ts-ignore
    setTarefas((prev) => [...prev, novaTarefa])
  }
}

  return (
    <div className={style.principal}>

      <header className={style.header}>
        <h1>Lista de afazeres</h1>
      </header>

      <main className={style.main}>

        <div className={style.divInput}>
        <input type="text" onChange={(e) => setNovaTarefa(e.target.value)}/>
        <button className={style.addButton} 
        onClick={addTarefas}>+</button>
        </div>
        <div className="style.List">
          <ul>
            {tarefas.map((item) => 
              <li>{item}</li>
            )}
          </ul>
        </div>

      </main>

      <footer className={style.footer}>
        <h2>R.E.M.P © 2024. Todos os direitos reservados.</h2>
      </footer>
    </div>
  );
}
