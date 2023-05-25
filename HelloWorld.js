import Frase from "./Frase"

function HellorWorld(){
    return(
        <div>
            <Frase/> {/*reutilização */}
            <h1>
                meu componente
            </h1>
            <Frase/> 
        </div>
    )
}

export default HellorWorld