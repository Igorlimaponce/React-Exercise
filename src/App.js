import { useState } from 'react';

function App() {
  const [aluno, setAluno] = useState('Aluno')

  function handleChangeName(Nome){
    setAluno(Nome)
  }
  return (
  <div>
    <h1> Bem Vindo ao Nosso Site!</h1>
    <h2> Olá {aluno}</h2>
    <button onClick={ () => handleChangeName('Joao')} > Mudar Nome </button>
  </div>
  );
}
export default App;