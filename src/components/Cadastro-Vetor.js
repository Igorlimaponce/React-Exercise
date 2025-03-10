import React, { useState } from "react";
import {useEffect} from "react";

const CadastroVetor = () => {
  // Estados para armazenar os valores dos inputs
  const [input,setInput] = useState('');
  const [tarefas,setTarefas] = useState([
    "Pagar a conta de Luz",
    "Estudar Programacao",
    "Enviar Tarefa"]);

  useEffect(() =>{
    localStorage.setItem('@tarefa',JSON.stringify(tarefas));
  },[tarefas]);

  const tarefasStorage = localStorage.getItem('@tarefa')
  useEffect(() => {
    if (tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))
    }
  },[]);
  // Função que lida com o envio do formulário
  const handleRegistro = (e) => {
    e.preventDefault(); // Evita o recarregamento da página

    setTarefas([...tarefas,input])
    setInput('')
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", textAlign: "center" }}>
      <h2>Cadastro Alternativo</h2>
      <form onSubmit={handleRegistro}>
        <input
          type="text"
          placeholder="Digite uma Tarefa "
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />
        <button type="submit">Registrar</button>
      </form>
      <br></br>

      <ul>
        {tarefas.map( tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    
    </div>
  );
};

export default CadastroVetor;
