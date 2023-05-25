import {useState} from 'react'

function Form(){
    function cadastrarUser(e){
        e.preventDefault()
        console.log(`usuario: ${name} com a senha: ${password}`)
    }
    const [name,setName] = useState()
    const [password,setPassword] = useState()
    return(
        <div>
            <h1>cadastro</h1>
            <form onSubmit={cadastrarUser}>
            <div>
                <label htmlFor='name'>nome:</label>
                <input type="text" id="name" placeholder="digita" onChange={(e) => setName(e.target.value)} />
                
                </div>
                <div>
                <label htmlFor='password'>senha:</label>
                <input type="password" id="password" placeholder="digita" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form