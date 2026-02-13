import React, { useState } from 'react'

const AlterandoNome = () => {
      const [name, setName] = useState('Maria')
      return (
            <div>
                  <p>Nome: {name}</p>
                  <button onClick={() => setName('João')}>
                        Alterar Nome
                  </button>
            </div>
      )
}

export default AlterandoNome