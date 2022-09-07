import { useState } from "react"

const nomes = [
    "Pedro",
    "Monica",
    "Rafael",
    "Rafael",
    "Edvaldo",
    "Mauro",
    "Ariane",
    "Matheus",
    "Ayrton",
    "Bruna",
    "Fernando",
    "Alcides",
    "Vasco",
    "Beatriz",
    "Diogo",
    "Diogo",
    "Diogo",
    "Claudio",
    "Sonia",
    "Antonio",
    "Daniel",
    "Gabriel",
    "Francisco",
    "Karen",
]
const adjetivos = [
    "Inteligente",
    "Destemid@",
    "Hilariante",
    "Assídu@",
    "Feliz",
    "Alegre",
    "Dedicad@",
    "Divertid@",
    "Criativ@",
    "Benevolente",
    "Responsável",
    "Esforçad@",
    "Extrovertid@",
    "Poderos@",
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

function GeradorDeNomes() {
    const [expressao, setExpressao] = useState("Clique em Gerar.")
    
    const gerarNome = () => {
        const indiceNome = Math.floor(Math.random() * nomes.length)
        const indiceAdjetivo = Math.floor(Math.random() * adjetivos.length)
        const indiceApelido = Math.floor(Math.random() * apelidos.length)

        console.log(indiceNome)


        setExpressao(`${nomes[indiceNome]} "${adjetivos[indiceAdjetivo]}" ${apelidos[indiceApelido]}`)
        // `${} ${} "${}"`
    }

    return (
        <div>
            <h1>Gerador de Nomes</h1>
            <p>{expressao}</p>
            <button onClick={() => gerarNome()}>Gerar</button>
        </div>
    )
}

export default GeradorDeNomes