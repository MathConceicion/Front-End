import './App.css'
import MeuComponent from './components/MeuComponent'
import Title from './components/Title'

function App() {
  const n = 10;
  const redTitle = false;

  return (
    <div className="App" >
      {/* CSS Global fica no index.css */}
      <h1>CSS no React</h1>

      {/* Chamando o Componente */}
      <MeuComponent />

      {/* CSS Inline - Na linha */}
      <p style={{ color: "blue", padding: "25px", borderTop: "1px solid black" }}>
        Este parágrafo foi estilizado com CSS Inline!
      </p>

      {/* CSS Inline Dinâmico */}
      {/* Operador Ternário - Condição ? Valor Verdadeiro : Valor Falso */}
      <h2 style={n > 10 ? { color: "purple" } : { color: "Red" }}>
        Css Dinâmico
      </h2>

      {/* Classes Dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Usando Classes Dinâmicas no CSS Externo
      </h2>

      {/* CSS Módulos */}
      <Title />
    </div >
  )
}

export default App
