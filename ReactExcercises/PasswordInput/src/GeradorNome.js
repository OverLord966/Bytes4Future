import { useState } from "react"

const nomes = [
    "Pedro",
    "Antonio",
    "Monica",
    "Rafael",
    "Rafael",
    "Matheus",
    "Vasco",
    "Bruna",
    "Ayrton",
    "Alcides",
    "Diogo",
    "Diogo",
    "Diogo",
    "Claudio",
    "Sonio",
    "Gabriel",
    "Francisco",
    "Fernando",
    "Karen",
]

const adjetivos = [
    "Inteligente",
    "Destemido",
    "Hilariante",
    "Assiduo",
    "Feliz",
    "Alegre",
    "Dedicado",
    "Divertido",
    "Criativo",
    "Benevolente",
    "Responsavel",
    "Esforçado",
    "Extrovertido",
    "Poderoso",
]

const apelidos = [
    "Oliveira",
    "Maia",
    "Rodrigues",
    "Vunge",
    "Serrano",
    "Guimarães",
    "Martines",
    "Rodrigues",
    "Rodrigues",
    "Abreu",
    "Valério",
    "Lima",
    "Tavares",
    "Antunes",
    "Vilela",
    "Sabino",
    "Pina",
    "Ramos",
    "Simões",
    "Paulo",
    "Santos",
    "Bhayani",
    "Sousa",
    "Dias",
    "Amaro",
]


function GeradorNomes(){
    
    const [expressao, setExpressao] = useState("Clique em Gerar.")

    const gerarNome = () => {
        const indexNome = Math.floor(Math.random() * nomes.length)
        const indexAdjetivo = Math.floor(Math.random() * adjetivos.length)
        const indexApelido = Math.floor(Math.random() * apelidos.length)

        setExpressao(`${nomes[indexNome]} "${adjetivos[indexAdjetivo]}" ${apelidos[indexAdjetivo]}`)
    }

    return(
        <div>
            <h1>Gerador de Nomes</h1>
            <button onClick={() => gerarNome()}>Gerar</button>
            <p>
                {expressao}
            </p>
        </div>
    )
}

export default GeradorNomes;