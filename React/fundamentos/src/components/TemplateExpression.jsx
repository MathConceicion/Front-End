import React from 'react'

const nome = "Matheus";
// Data significa dados
const data = {
  age: 17,
  job: "Programador"

}
// Array de stringd
const skills = ["React", "C#", "JS", "HTML"];

const projects = [
  { name: "Portfólio", tech: "React + CSS", status: "Finalizado" },
  { name: "Lista de Tarefas", tech: "JavaScript", status: "Em Andamento" },
];

// console.log(dados.idade);

const TemplateExpression = () => {
  return (
    <div>
      <p>A soma é {2 + 2}</p>
      <h3>Seu nome é: {nome} </h3>
      <p>
        Sua idade é {data.age} anos e você é um {data.job}
      </p>
      {/* Usando o lenght que informa quantos itens tem */}
      <p>Você tem {skills.length} habilidades</p>

      <h4>Habilidades</h4>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <h4>Projetos</h4>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            {project.name} - {project.tech} - {(project.status)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TemplateExpression