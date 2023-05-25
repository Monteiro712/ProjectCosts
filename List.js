import Item from "./Item";

function List(){
    return(
        <>
            <h1>my List</h1>
            <ul>
                <Item marca="ferrari" ano_lancamento={2002}/>
                <Item marca="chevrolet" ano_lancamento={2005} />
            </ul>
        </>
    )
}

export default List