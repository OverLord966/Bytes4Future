import { useState } from "react"
export default function Lista({ itens }) {
    const [state, setState] = useState(itens)
    const deleteElement = (index) => {
        setState((prevState) => {
            console.log(index)
            console.log(prevState.slice(0, index).concat(prevState.slice(index + 1)))
            return prevState.slice(0, index).concat(prevState.slice(index + 1))
        })
    }
    return (
        <div>
            {state.map((e, i) => (<div key={e.name}>
                <h3
                    onClick={() => console.log(e.price + "€")}>
                    {e.name}
                </h3>
                <p >{e.price} €</p>
                <button onClick={() => deleteElement(i)}>Apagar</button>
            </div>))}
        </div>
    )

}