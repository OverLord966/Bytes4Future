import { useState } from "react"

export function State(){
    const [state, setState] = useState("")

    const adicionarString = () => {
        setState((prevState) => prevState + "1" )
    }

    return(
        <div>
            {state}
            <br></br>
            <button onClick={() => adicionarString()}>CLICA</button>
        </div>
    )
}