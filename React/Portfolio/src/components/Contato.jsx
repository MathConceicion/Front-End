import React from 'react';

function Contato() {
      return (
            <section id="contato" className="contato">
                  <h2 className="titulo-secao">Contato</h2>
                  <div className="contato-conteudo">
                        <p>Interessado em trabalhar junto ou trocar ideias? Entre em contato!</p>

                        <div className="contato-links">
                              <a href="mailto:seu.email@email.com" className="contato-item">
                                    <span>📧</span>
                                    <p>matheusdelaconceicion@email.com</p>
                              </a>

                              <a href="https://linkedin.com" target="_blank" className="contato-item">
                                    <span>💼</span>
                                    <p>LinkedIn</p>
                              </a>

                              <a href="https://github.com" target="_blank" className="contato-item">
                                    <span>🐙</span>
                                    <p>GitHub</p>
                              </a>
                        </div>
                  </div>
            </section>
      );
}

export default Contato;