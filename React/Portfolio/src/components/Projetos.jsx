import React from 'react';

function Projetos() {
      const projetos = [
            {
                  nome: 'Landing Page',
                  descricao: 'Página de apresentação responsiva usando HTML e CSS',
                  techs: ['HTML', 'CSS'],
                  imagem: '/projeto1.jpg',
                  link: '#',
                  github: '#'
            },
            {
                  nome: 'Todo List',
                  descricao: 'Lista de tarefas interativa com JavaScript puro',
                  techs: ['HTML', 'CSS', 'JS'],
                  imagem: '/projeto2.jpg',
                  link: '#',
                  github: '#'
            },
            {
                  nome: 'Portfólio',
                  descricao: 'Este site que você está vendo, feito com React',
                  techs: ['React', 'CSS'],
                  imagem: '/projeto3.jpg',
                  link: '#',
                  github: '#'
            }
      ];

      return (
            <section id="projetos" className="projetos">
                  <h2 className="titulo-secao">Projetos</h2>
                  <div className="projetos-grid">
                        {projetos.map((projeto, index) => (
                              <article key={index} className="projeto-card">
                                    <div className="projeto-imagem">
                                          {/* IMAGEM DO PROJETO */}
                                          <img src={projeto.imagem} alt={projeto.nome} />
                                    </div>
                                    <div className="projeto-info">
                                          <h3>{projeto.nome}</h3>
                                          <p>{projeto.descricao}</p>
                                          <div className="projeto-techs">
                                                {projeto.techs.map((tech, i) => (
                                                      <span key={i} className="tech-tag">{tech}</span>
                                                ))}
                                          </div>
                                          <div className="projeto-links">
                                                <a href={projeto.link} className="link-btn">Demo</a>
                                                <a href={projeto.github} className="link-btn">GitHub</a>
                                          </div>
                                    </div>
                              </article>
                        ))}
                  </div>
            </section>
      );
}

export default Projetos;