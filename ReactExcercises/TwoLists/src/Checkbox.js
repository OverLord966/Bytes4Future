import { useState } from "react"

export default function Checkbox(props) {
    const [state, setState] = useState(props.initialState)
    return (
        <div>
            <button onClick={() => setState((prevState) => !prevState)} >{state ? "Ativo" : "Inativo"}</button>
        </div>
    )
}