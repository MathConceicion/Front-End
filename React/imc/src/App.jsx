import ImcCalc from "./components/imcCalc";
import ImcTable from "./components/imcTable";
import { data } from "./data/data";
import { useState } from "react";
import "./App.css"

//App vai gerenciar todos noso componentes
function App() {

  // 11.  Calculando IMC
  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if (!weight || !height) return;

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    setImc(imcResult);

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    });

    if (!info) return;
  };


  // 12. Função de resetar calculadora
  const resetCalc = (e) => {
    setImc("");
    setInfo("");
    setInfoClass("");
  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");


  return (
    <div className="container">
      {/* Na primeira parte ir até os parentes amarelo */}
      {!imc ? (<ImcCalc calcImc={calcImc} />) : <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc} />}
    </div>
  )
}

export default App
