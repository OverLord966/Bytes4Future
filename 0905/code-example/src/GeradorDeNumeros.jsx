import { useState } from "react"

function GeradorDeNumeros() {
    const [randomN, setRandomN] = useState("Clique em Gerar.")
    
    const gerarNumero = () => {
        const aleatorio = Math.floor(Math.random() * 100) + 1
        setRandomN(aleatorio)
    }

    return (
        <div>
            <h1>Gerador de Números</h1>
            <p>{randomN}</p>
            <button onClick={() => gerarNumero()}>Gerar</button>
        </div>
    )
}

export default GeradorDeNumeros