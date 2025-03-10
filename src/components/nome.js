function Nome(props) { // Ou posso fazer assim - function Nome( {aluno } ) { - Esse método serve para pegar somente um parametro
    return(
        <span>Bem Vindo : {props.aluno}, sua idade = {props.idade}</span>
    )
}

export default Nome;

//Props sao os parametros em react