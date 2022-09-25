import { useState } from "react"

export default function DataInput() {
    const [state, setState] = useState("")
    const [change, setChange] = useState("Mostrar")

    return (
        <div>

            <h3>Insere a tua data de nascimento.</h3>
            <div role="content">
                {change === "Mostrar"
                    ? <input type={"date"} onChange={(e) => setState(e.target.value)}></input>
                    : <p>Nasceste no dia {state.slice(8, 10)} do {state.slice(5, 7)} de {state.slice(0, 4)}!</p>}
            </div>
            <button onClick={() => setChange(prevState => prevState === "Mostrar" ? "Alterar" : "Mostrar")}>{change}</button>
        </div>
    )
}