import './App.css'
import { Title } from './components/Title'

export function App() {
  const text = 'Hello World!'
  const description = 'Its my first page'

  return (
    <>
    <Title />
    <p>{description}</p>
    </>
  )
}