import OrcamentoTable from "./Components/OrcamentoTable";
import { data } from "./data/projetoData";
import { useState } from "react";
import OrcamentoCalc from "./Components/OrcamentoCalc";
import "./App.css";

function App() {

  const [budget, setBudget] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");
  const [complexity, setComplexity] = useState("");

  const calcBudget = (e, value, hours, urgency) => {
    e.preventDefault();

    if (!value || !hours) return;

    const valueFloat = +value.replace(",", ".");
    const hoursFloat = +hours.replace(",", ".");

    let budget = valueFloat * hoursFloat;

    // multiplicador por urgência
    let multiplier = 1;

    if (urgency === "priority") multiplier = 1.1;
    if (urgency === "urgent") multiplier = 1.2;

    budget *= multiplier;

    setBudget(budget);

    data.forEach((item) => {
      if (budget >= item.min && budget <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
        setComplexity(item.complexity);
      }
    });
  };

  const resetBudget = () => {
    setBudget("");
    setInfo("");
    setInfoClass("");
    setComplexity("");
  };

  return (
    <div className="container">
      {!budget ? (<OrcamentoCalc calcBudget={calcBudget} />) : (<OrcamentoTable data={data} budget={budget} info={info} infoClass={infoClass} resetCalc={resetBudget} complexity={complexity} />)}
    </div>
  );
}

export default App;