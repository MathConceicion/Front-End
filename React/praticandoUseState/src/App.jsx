import './App.css'
import ContadorSimples from './components/ContadorSimples'
import AlterandoNome from './components/AlterandoNome'
import DesafioExtra from './components/DesafioExtra'

function App() {

  return (
    <div>
      <div>
        <h1>Praticando UseState</h1>
        <br />
        <h2>Exercício 1 - Contador Simples</h2>
      </div>
      <ContadorSimples />
      <br />

      <div>
        <h2>Exercício 2 – Alterando Nome</h2>
      </div>

      <AlterandoNome />
      <br />
      <div>
        <h2>Desafio Extra</h2>
      </div>

      <DesafioExtra />
    </div>
  )
}

export default App
