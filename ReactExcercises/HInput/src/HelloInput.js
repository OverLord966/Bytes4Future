import { useState } from "react"
export default function HelloInput() {
    const [texto, setTexto] = useState("")
    const [click, setClick] = useState(false)
    return (
        <div>
            <input
                onChange={(ele) => setTexto(ele.target.value)}
                value={texto}
                type={"text"}
            />
            {click === false ? (
                <button onClick={() => setClick(true)}>Apresentar</button>
            ) : (
                <p>Hello, {texto}!</p>
            )}
        </div>
    );
}