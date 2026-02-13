import './App.css'
import city from './assets/city.jpg'
import Data from './components/Data'

function App() {

  return (
    <div>
      <h1>Avançando no React</h1>
      {/* Trabalhando com imagens no React - Assets */}
      <img src={city} alt="City" />

      {/* Imagens no Public */}
      <img src="/img1.jpg" alt="Imagem em public" />

      {/* 3 - Atuando com useState - Mudanças de estado, valor de algo */}
      <Data />
    </div >
  )
}

export default App
