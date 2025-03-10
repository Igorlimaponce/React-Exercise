import React, { useState, useEffect } from "react";

const CadastroVetor = () => {
  const [pessoa, setPessoa] = useState(null);
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    "Pagar a conta de Luz",
    "Estudar Programação",
    "Enviar Tarefa"
  ]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefa');
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas));
  }, [tarefas]);

  useEffect(() => {
    const pessoaStorage = localStorage.getItem('pessoa');
    if (pessoaStorage) {
      setPessoa(pessoaStorage);
    } else {
      const userName = prompt("Qual é o seu nome?");
      if (userName) {
        setPessoa(userName);
        localStorage.setItem('pessoa', userName);
      }
    }
  }, []);

  const handleRegistro = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    setTarefas([...tarefas, input]);
    setInput('');
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", textAlign: "center" }}>
      <h2>{pessoa ? pessoa : "Usuário"} - Cadastro Alternativo</h2>
      
      <form onSubmit={handleRegistro}>
        <input
          type="text"
          placeholder="Digite uma Tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />
        <button type="submit">Registrar</button>
      </form>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
};

export default CadastroVetor;
