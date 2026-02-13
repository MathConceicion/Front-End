import React, { useState } from 'react'

const DesafioExtra = () => {
      const [count, setCount] = useState(10)
      return (
            <div>
                  <p>Contador: {count}</p>
                  <button onClick={() => setCount(count + 5)}>
                        Somar 5
                  </button>
                  <button onClick={() => setCount(count - 5)}>
                        Subtrair 5
                  </button>

                  {count < 0 && setCount(0)}

            </div>
      )
}

export default DesafioExtra