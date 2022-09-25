import {useState} from "react"

function Contador (){
    const [contador, setContador] = useState(0) //setContador - Muda a nossa variavel contador AKA state

    const decrementar = () =>{
        setContador((prevContador) => prevContador -1)
    }
    const incrementar = () =>{
        setContador((prevContador) => prevContador +1)
    }

    return(
        <div role="main">
            <button onClick={decrementar} disabled={contador <= 0}>-</button>
            <p>{contador}</p> 
            <button onClick={incrementar}>+</button>
        </div>
    )
}


export default Contador;