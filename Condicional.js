import {useState} from 'react'

function Condicional(){
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }
    function limparEmail(){
        setUserEmail("")
    }

    return(
       <div>
        <h1>cadastre email</h1>
        <form>
            <input type="email" placeholder="insira email" onChange={(e) => setEmail(e.target.value)}/>
            <button type='submit' onClick={enviarEmail}>
                enviar email
            </button>
            {userEmail &&(
                <div>
                    <p>o email: {userEmail}</p>
                    <button onClick={limparEmail}>limpar</button>
                </div>
            )}
        </form>
       </div>
        
    )
}

export default Condicional