import './evento/Button'
import Button from './evento/Button'
function Evento(){

    function myEvent(){
        console.log('ativando primeiro evento')
    }
    function otherEvent(){
        console.log('ativando segundo evemto')
    }
    return(
        <div>
            <p>clique para add evento</p>
            <Button event={myEvent} text="primeiro evento"/>
            <Button event={otherEvent} text="primeiro evento"/>
            {/*<button onClick={myEvent}>ativar!</button>*/}
        </div>
    )
}

export default Evento