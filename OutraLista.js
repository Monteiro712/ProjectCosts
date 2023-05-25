function OutraLista({itens}){
    return(
        <>
        <h1>lista framwworks</h1>
        {itens.length > 0 ? (
            itens.map((item, index) => <p key={index}>{item}</p>)
        ) : (
            <p>lista vazia</p>
        )}
        </>
    )
}

export default OutraLista