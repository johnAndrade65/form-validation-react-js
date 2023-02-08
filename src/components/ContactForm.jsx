import React, { useState } from "react";
import '../App.css';

// Exportar o componente Contact Form para o componente App
export default function ContactForm() {
  // useState para armazenar o nome, email e mensagem do usuário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // useState para possiveis erros de deixar os campos em branco
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  /* É usada para atualizar os dados de formulário de acordo com as entradas do usuário. 
 Ela acessa o nome do campo que está sendo atualizado e atualiza o valor correspondente no estado formData. */
  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  //validação
  const validate = () => {
    let nameError = "";
    let emailError = "";
    let messageError = "";

    if (!formData.name) {
      nameError = "Nome é obrigatório";
    }

    if (!formData.email.includes("@")) {
      emailError = "Email inválido";
    }

    if (!formData.message) {
      messageError = "Mensagem é obrigatória";
    }

    if (nameError || emailError || messageError) {
      setErrors({ nameError, emailError, messageError });
      return false;
    }

    return true;
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      console.log(formData);
      // Limpar formulário aqui
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    }
  };

  // Criação dos elemento html
  return (
    <div>
      <h1 className="h1-formulario">Contate-nós</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
          />
          <div style={{ fontSize: 15, color: "red" }}>
            {errors.nameError}
          </div>
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <div style={{ fontSize: 15, color: "red" }}>
            {errors.emailError}
          </div>
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Mensagem"
            value={formData.message}
            onChange={handleChange}
          />
          <div style={{ fontSize: 15, color: "red" }}>
            {errors.messageError}
          </div>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
