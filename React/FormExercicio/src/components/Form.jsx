import { useState } from "react";
import "./Form.css";
import Button from "./Button.jsx";


const Form = () => {
      const [name, setName] = useState("");
      const [surname, setSurname] = useState("");
      const [email, setEmail] = useState("");
      const [birthDate, setBirthDate] = useState("");
      const [telephone, setTelephone] = useState("");
      const [country, setCountry] = useState("");
      const [bio, setBio] = useState("");
      const [role, setRole] = useState("user");
      const [password, setPassword] = useState("");
      const [terms, setTerms] = useState(false);
      const [errorMessage, setErrorMessage] = useState("");
      const [successMessage, setSuccessMessage] = useState("");

      const handleName = (e) => {
            setName(e.target.value);
      }

      const handleSurname = (e) => {
            setSurname(e.target.value);
      }

      const handleEmail = (e) => {
            setEmail(e.target.value);
      }

      const handleBirthDate = (e) => {
            setBirthDate(e.target.value);
      }

      const handleTelephone = (e) => {
            setTelephone(e.target.value);
      }

      const handleCountry = (e) => {
            setCountry(e.target.value);
      }

      const handleBio = (e) => {
            setBio(e.target.value);
      }

      const handleRole = (e) => {
            setRole(e.target.value);
      }

      const handlePassword = (e) => {
            setPassword(e.target.value);
      }

      const handleTerms = (e) => {
            setTerms(e.target.checked);
      }

      const validateForm = () => {
            setErrorMessage("");
            setSuccessMessage("");

            if (!name.trim()) {
                  setErrorMessage("Nome é obrigatório!");
                  return false;
            }

            if (!email.trim()) {
                  setErrorMessage("Email é obrigatório!");
                  return false;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                  setErrorMessage("Email inválido!");
                  return false;
            }

            if (!password.trim()) {
                  setErrorMessage("Senha é obrigatória!");
                  return false;
            }

            if (password.length < 6) {
                  setErrorMessage("Senha deve ter no mínimo 6 caracteres!");
                  return false;
            }

            if (!terms) {
                  setErrorMessage("Você deve aceitar os termos de uso!");
                  return false;
            }

            return true;
      }

      const handleSubmit = (e) => {
            e.preventDefault();

            if (validateForm()) {
                  const formData = {
                        name,
                        surname,
                        email,
                        birthDate,
                        telephone,
                        country,
                        bio,
                        role,
                        password,
                        terms,
                  };

                  console.log("Formulário enviado com sucesso:", formData);
                  setSuccessMessage("Cadastro realizado com sucesso!");

                  // Limpar o formulário após envio
                  handleReset();

                  setTimeout(() => {
                        setSuccessMessage("");
                  }, 3000);
            }
      }

      const handleReset = () => {
            setName("");
            setSurname("");
            setEmail("");
            setBirthDate("");
            setTelephone("");
            setCountry("");
            setBio("");
            setRole("user");
            setPassword("");
            setTerms(false);
            setErrorMessage("");
      }

      return (
            <div>
                  {errorMessage && (
                        <div className="error-message">
                              {errorMessage}
                        </div>
                  )}

                  {successMessage && (
                        <div className="success-message">
                              {successMessage}
                        </div>
                  )}

                  <form onSubmit={handleSubmit}>
                        <div>
                              {/* Nome */}
                              <label htmlFor="name">Nome<strong>*</strong></label>
                              <input type="text" placeholder="Digite seu nome:" onChange={handleName} value={name} />

                              {/* Sobrenome */}
                              <label htmlFor="surname">Sobrenome</label>
                              <input type="text" placeholder="Digite seu sobrenome:" onChange={handleSurname} value={surname} />

                              {/* Email */}
                              <label htmlFor="email">Email<strong>*</strong></label>
                              <input type="email" name="email" placeholder="Digite seu email:" onChange={handleEmail} value={email} />

                              {/* Data de Nascimento */}
                              <label htmlFor="birthDate">Data de Nascimento</label>
                              <input type="date" name="birthDate" onChange={handleBirthDate} value={birthDate} />

                              {/* Telefone */}
                              <label htmlFor="telephone">Telefone</label>
                              <input type="tel" name="telephone" placeholder="Digite seu telefone:" onChange={handleTelephone} value={telephone} maxLength="15" />

                              {/* País */}
                              <label htmlFor="country">País</label>
                              <select name="country" id="country" onChange={handleCountry} value={country}>
                                    <option value="">Selecione um país</option>
                                    <option value="brasil">Brasil</option>
                                    <option value="argentina">Argentina</option>
                                    <option value="colombia">Colômbia</option>
                                    <option value="chile">Chile</option>
                                    <option value="peru">Peru</option>
                                    <option value="venezuela">Venezuela</option>
                                    <option value="uruguai">Uruguai</option>
                              </select>

                              {/* Biografia */}
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

                              {/* Senha */}
                              <label htmlFor="password">Senha<strong>*</strong></label>
                              <input type="password" name="password" placeholder="Digite sua senha:" onChange={handlePassword} value={password} />

                              {/* Aceitar Termos */}
                              <label htmlFor="terms">
                                    <input type="checkbox" name="terms" checked={terms} onChange={handleTerms} />
                                    <span>Li e aceito os termos de uso</span>
                              </label>

                              {/* Botões */}
                              <Button onSubmit={handleSubmit} onReset={handleReset} termsAccepted={terms} />
                        </div>
                  </form>
            </div>
      )
}

export default Form