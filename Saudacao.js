function Saudacao({nome}){
    
    function gerarSaudacao(algumNome){
        return `ola, ${algumNome}, vai toma no cu`
    }

    return(
        <>
        {nome && <p>{gerarSaudacao(nome)}</p>}
        </>
        
    )
}

export default Saudacao