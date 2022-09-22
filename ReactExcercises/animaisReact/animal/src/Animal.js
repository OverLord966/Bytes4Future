import { useState } from "react"
export default function Form() {
    const animal = new Map()
    const [state, setState] = useState({animal})

    const handleChange = (evento, state) => {
        setState((prevState) => {
            return ({...prevState, [state]: evento.target.value})
            // if (state === "email") {
            //     return ({...prevState, email: evento.target.value})
            // }
            // return ({...prevState, : evento.target.value})
        })

    }

    return (
        <div>
            <div>
            <label>
            Qual é o nome?
            </label><br></br>
            <input value={state.animal} onChange={(e) => handleChange(e, "animal")} />
            <label><br></br>
            Qual é a raça?
            </label><br></br>
            <input value={state.raca} onChange={(e) => handleChange(e, "raca")} />
            <label></label>
            </div>
            <button onClick={() => console.log(state)}>Insira</button><br></br>
        <div>
        <label>
                Nome<br></br>
                {state.animal}<br></br>
                Raça<br></br>
                {state.raca}
            </label>
        </div>
            
        </div>
    )
}