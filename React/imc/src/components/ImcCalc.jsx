import Button from "./Button.jsx"
import { useState } from "react";
import "./imcCalc.css"

const imcCalc = ({ calcImc }) => {
      const [height, setHeight] = useState("");
      const [weight, setWeight] = useState("");

      const clearForms = (e) => {
            e.preventDefault()
            // Limpa os campos de altura e peso
            setHeight("");
            setWeight("");
      }

      // validar somente números
      const validDigits = (text) => {
            return text.replace(/[^0-9,]/g, "");
      }

      const handleHeightChange = (e) => {
            const updateValue = validDigits(e.target.value);
            setHeight(updateValue);
      }

      const handleWeightChange = (e) => {
            const updateValue = validDigits(e.target.value);
            setWeight(updateValue);
      }

      return (
            <div id="calc-container">
                  <h2>Calculadora de IMC</h2>
                  <form className="imc-form">
                        <div id="form-inputs">
                              {/* Altura */}
                              <div className="form-control">
                                    <label htmlFor="height">Altura: </label>
                                    <input type="text"
                                          name="height"
                                          id="height"
                                          placeholder="Exemplo: 1,68"
                                          value={height}
                                          onChange={(e) => handleHeightChange(e)} />
                              </div>

                              {/* Peso */}
                              <div className="form-control">
                                    <label htmlFor="weight">Peso: </label>
                                    <input type="text"
                                          name="weight"
                                          id="weight"
                                          placeholder="Exemplo: 70,5"
                                          value={weight}
                                          onChange={(e) => handleWeightChange(e)} />
                              </div>
                        </div>

                        <div className="action-control">
                              <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, weight, height)} />
                              <Button id="clear-btn" text="Limpar" action={clearForms} />
                        </div>
                  </form>
            </div>
      )
}

export default imcCalc