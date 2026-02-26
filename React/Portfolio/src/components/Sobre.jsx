import React from 'react';

function Sobre() {
      return (
            <section id="sobre" className="sobre">
                  <h2 className="titulo-secao">Sobre Mim</h2>
                  <div className="sobre-conteudo">
                        <div className="sobre-texto">
                              <p>
                                    Sou estudante do <strong>SENAI</strong>, apaixonado por tecnologia e desenvolvimento web.
                                    Estou em constante aprendizado, buscando me tornar um desenvolvedor full-stack.
                              </p>
                              <p>
                                    Meu objetivo é criar soluções que façam a diferença na vida das pessoas,
                                    combinando design atraente com funcionalidade robusta.
                              </p>
                              <div className="sobre-dados">
                                    <div>
                                          <span>1+</span>
                                          <p>Ano de Estudo</p>
                                    </div>
                                    <div>
                                          <span>5+</span>
                                          <p>Projetos</p>
                                    </div>
                                    <div>
                                          <span>SENAI</span>
                                          <p>Formação</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
}

export default Sobre;