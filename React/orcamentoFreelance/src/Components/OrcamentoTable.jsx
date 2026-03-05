import Button from "./Button";
import "./OrcamentoTable.css";

const OrcamentoTable = ({ data, budget, info, infoClass, resetCalc, complexity }) => {

      return (
            <div id="result-container">
                  <p id="budget-number">Seu Orçamento: <span className={infoClass}> {" "} R$ {Number(budget).toFixed(2)}</span></p>
                  <p id="budget-info">Classificação Atual:<span className={infoClass}> {" "} {infoClass}</span></p>
                  <p id="budget-complexity">Complexidade: <span className={complexity}>{" "} {complexity}</span></p>

                  <h3>Confira as classificações:</h3>

                  <div id="budget-table">
                        <div className="table-header">
                              <h4>Orçamento</h4>
                              <h4>Classificação</h4>
                        </div>

                        {data.map((item) => (
                              <div className="table-data" key={item.info}>
                                    <p>Entre R$ {item.min} e R$ {item.max}</p>
                                    <p className={item.infoClass}>{item.info}</p>
                              </div>
                        ))}
                  </div>

                  <Button id="back-btn" text="Voltar" action={resetCalc} />
            </div>
      );
};

export default OrcamentoTable;