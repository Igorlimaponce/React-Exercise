import React, { useState } from "react";

const Cadastro = () => {
  // Estados para armazenar os valores dos inputs
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [usuario, setUsuario] = useState(null);


  // Função que lida com o envio do formulário
  const handleRegistro = (e) => {
    e.preventDefault(); // Evita o recarregamento da página

    // Salva os dados do usuário
    setUsuario({ nome, email, idade });

    // Limpa os campos após o envio
    setNome("");
    setEmail("");
    setIdade("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", textAlign: "center" }}>
      <h2>Cadastro</h2>
      <form onSubmit={handleRegistro}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />
        <input
          type="number"
          placeholder="Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />
        <button type="submit">Registrar</button>
      </form>

      {/* Exibe os dados cadastrados após o envio */}
      {usuario && (
        <div style={{ marginTop: "20px" }}>
          <h3>Dados Cadastrados:</h3>
          <p><strong>Nome:</strong> {usuario.nome}</p>
          <p><strong>Email:</strong> {usuario.email}</p>
          <p><strong>Idade:</strong> {usuario.idade}</p>
        </div>
      )}
    </div>
  );
};

export default Cadastro;
