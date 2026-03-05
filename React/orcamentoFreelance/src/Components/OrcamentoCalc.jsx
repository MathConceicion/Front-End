import Button from "./Button.jsx";
import "./OrcamentoCalc.css";
import { useState } from "react";

const OrcamentoCalc = ({ calcBudget }) => {

      const [value, setValue] = useState("");
      const [hours, setHours] = useState("");
      const [deadline, setDeadline] = useState("");

      // limpar formulário
      const clearForms = (e) => {
            e.preventDefault();

            setValue("");
            setHours("");
            setDeadline("");
      };


      const validDigits = (text) => {
            return text.replace(/[^0-9,]/g, "");
      };

      const handleValueChange = (e) => {
            setValue(validDigits(e.target.value));
      };

      const handleHoursChange = (e) => {
            setHours(validDigits(e.target.value));
      };

      // calcular urgência pela data
      const handleCalc = (e) => {
            e.preventDefault();

            if (!value || !hours || !deadline) return;

            const today = new Date();
            const deliveryDate = new Date(deadline);

            const diffTime = deliveryDate - today;
            const diffDays = diffTime / (1000 * 60 * 60 * 24);

            let urgency = "normal";

            if (diffDays <= 3) urgency = "urgent";
            else if (diffDays <= 7) urgency = "priority";

            calcBudget(e, value, hours, urgency);
      };

      return (
            <div id="calc-container">
                  <h2>Orçamento Freelance</h2>
                  <form id="budget-form">
                        <div className="form-inputs">
                              <div className="form-control">
                                    <label htmlFor="value">
                                          Valor da Hora (R$):
                                    </label>
                                    <input
                                          type="text"
                                          name="value"
                                          id="value"
                                          placeholder="Ex: 50"
                                          onChange={handleValueChange}
                                          value={value}
                                    />
                              </div>

                              <div className="form-control">
                                    <label htmlFor="hours">
                                          Horas do Projeto:
                                    </label>
                                    <input
                                          type="text"
                                          name="hours"
                                          id="hours"
                                          placeholder="Ex: 40"
                                          onChange={handleHoursChange}
                                          value={hours}
                                    />
                              </div>


                              <div className="form-control">
                                    <label htmlFor="deadline">
                                          Data limite
                                    </label>
                                    <input
                                          type="date"
                                          id="deadline"
                                          value={deadline}
                                          onChange={(e) =>
                                                setDeadline(e.target.value)
                                          }
                                    />
                              </div>

                        </div>

                        <div className="action-control">
                              <Button
                                    id="calc-btn"
                                    text="Calcular"
                                    action={handleCalc}
                              />

                              <Button
                                    id="clear-btn"
                                    text="Limpar"
                                    action={clearForms}
                              />
                        </div>

                  </form>
            </div>
      );
};

export default OrcamentoCalc;