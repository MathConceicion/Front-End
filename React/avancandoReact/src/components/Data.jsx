import React, { useState } from 'react'

const Data = () => {
      // Variável comum (React não monitora)
      let valor = 10;

      // Estado = Valor monitorado pelo React (Permite mudanças e atualizações na tela)
      const [anotherNumber, setAnotherNumber] = useState(15);

      // Outro número = anotherNumber
      // Função para mudar o outro número = setAnotherNumber
      return (
            <div>
                  <div>
                        <p>Valor: {valor} </p>

                        {/* Evento de click, mas que não consegue mudar a variável 
                  por não conter o hook useState */}

                        <button onClick={() => (valor = 15)}>
                              Mudar variável
                        </button>
                  </div>

                  <div>
                        <p>valor: {anotherNumber}</p>

                        {/* Aqui o React vai mudar o valor desse número */}
                        <button on onClick={() => setAnotherNumber(20)}>
                              Mudar Valor
                        </button>
                  </div>
            </div>
      )
}

export default Data