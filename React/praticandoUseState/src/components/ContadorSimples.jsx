import React, { useState } from 'react'

const contadorSimples = () => {
      const [count, setCount] = useState(0)
      return (
            <div>
                  <p>Contador: {count}</p>
                  <button onClick={() => setCount(count + 1)}>
                        Somar
                  </button>
            </div>
      )
}

export default contadorSimples