import './App.css'
import FirstComponent from './components/FirstComponent'
import TemplateExpression from './components/TemplateExpression'


function App() {
  return (
    <div>
      <h1>Teste</h1>
      <p>Parágrafo</p>

      {/* Chama o componente que criei */}
      <FirstComponent />
      <TemplateExpression />
    </div>
  )
}

export default App
