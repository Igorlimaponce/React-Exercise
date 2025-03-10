import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import Exemplo from './components/Exemplo'
import Cadastro from './components/Cadastro'
import CadastroVetor from './components/Cadastro-Vetor'
//import mostrarTela from './components/Cadastro'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  </React.StrictMode>
);


const exemplo = ReactDOM.createRoot(document.getElementById('exemplo'));
exemplo.render(
<React.StrictMode>

  <Exemplo />
</React.StrictMode>


);

const cadastro = ReactDOM.createRoot(document.getElementById('cadastro'));
root.render(
  <React.StrictMode>
    <Cadastro />
    <CadastroVetor />
  </React.StrictMode>
);