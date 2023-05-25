function SeuNome({setNome}){
    return(
        <div>
            <p>seu nome:</p>
            <input 
            type="text"
            placeholder="seu nome?"
            onChange={(e) => setNome(e.target.value)}
            />
        </div>
    )
}

export default SeuNome