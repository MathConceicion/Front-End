import { useState } from "react";
import "./Form.css";


const Form = () => {
      // Atuando com os estados das informações do formulário
      // Gerenciando os dados
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [bio, setBio] = useState("");
      const [role, setRole] = useState("user");

      const handleName = (e) => {
            setName(e.target.value);
      }

      const handleEmail = (e) => {
            setEmail(e.target.value);
      }

      const handleBio = (e) => {
            setBio(e.target.value);
      }

      const handleRole = (e) => {
            setRole(e.target.value);
      }

      const handleSubmit = (e) => {
            e.preventDefault();

            // Limpar após enviar os dados
            setName("");
            setEmail("");
            setBio("");
            setRole("");
      }

      return (
            <div>
                  {/* Criando Form */}
                  <form onSubmit={handleSubmit}>
                        <div>
                              {/* Criando os labels e Inputs */}
                              <label htmlFor="name">Nome</label>
                              <input type="text" placeholder="Digite seu nome:" onChange={handleName} value={name} />

                              {/* Label envolvendo inputs */}
                              <label>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" placeholder="Digite seu email:" onChange={handleEmail} value={email} />
                              </label>
                        </div>

                        {/* Biografia desse usuário */}
                        <label>
                              <span>Bio: </span>
                              <textarea name="bio" placeholder="Descrição do Usuário" onChange={handleBio} value={bio}>
                              </textarea>
                        </label>

                        {/* Nível desse usuário (Admin, Padrão ou Edição) */}
                        <label>
                              <span>Função no Sistema: </span>
                              <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                                    <option value="user">Usuário</option>
                                    <option value="editor">Editar</option>
                                    <option value="admin">Admin</option>
                              </select>
                        </label>

                        <input type="submit" value="Enviar" />
                  </form>
            </div>
      )
}

export default Form