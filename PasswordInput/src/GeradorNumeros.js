import { useState } from "react"

function GeradorNumeros(){
    
    const [valor, setValor] = useState(0)

    const aleatorio = () => {
        setValor((valor) => Math.floor(Math.random() * 100))
    }

    return(
        <div>
            <h1>Gerador de Números</h1>
            <button onClick={aleatorio}>Gerar</button>
            <p>Clique em Gerar <br></br>
                {valor}
            </p>
        </div>
    )
}

export default GeradorNumeros;