import { useState } from "react"
export default function HelloInput() {
    const [texto, setTexto] = useState("")
    const [descricao, setdescricao] = useState("blablablablablablablablabla")
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
                <div>
                    <p>Titulo</p>
                <ol>
                    <li>
                        {descricao}
                    </li>
                    <li>
                        {descricao.slice(10)}
                    </li>
                    <li>
                        {descricao.slice(20)}
                    </li>
                </ol>
                </div>
            )}
        </div>
    );
}