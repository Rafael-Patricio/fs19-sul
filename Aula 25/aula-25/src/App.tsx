import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'

function App() {
  return (
    <div>
      <Header content="HEADER" />
      <Main>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-300">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">TÍTULO DO CARD</div>
        <p className="text-gray-700 text-base">
      CORPO DO CARD
        </p>
    </div>
  
     </div>
      </Main>
      <Footer value="FOOTER"/>

    </div>
  )
}

export default App
