import React from 'react';

function Habilidades() {
      const techs = [
            { nome: 'HTML', nivel: 'Intermediário' },
            { nome: 'CSS', nivel: 'Intermediário' },
            { nome: 'JavaScript', nivel: 'Básico' },
            { nome: 'React', nivel: 'Básico' },
            { nome: 'Git', nivel: 'Básico' },
            { nome: 'Figma', nivel: 'Básico' }
      ];

      return (
            <section id="habilidades" className="habilidades">
                  <div className="container">
                        <h2 className="titulo-secao">Habilidades</h2>
                        <div className="habilidades-grid">
                              {techs.map((tech, index) => (
                                    <div key={index} className="habilidade-card">
                                          <h3>{tech.nome}</h3>
                                          <span className="nivel">{tech.nivel}</span>
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
}

export default Habilidades;