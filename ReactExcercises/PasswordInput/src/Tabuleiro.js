import { useState } from "react";

export default function Tabuleiro(){
    const [matriz, setMatriz] = useState(new Array(9).fill("").map(linha => new Array(9).fill("")))
    const {corSelecionada, setSelecionada} = useState("#ff0054")

    return(
        <div>
            {
                matriz.map((linha, i) => (
                    <div  key={`${i}`}>
                        {
                            linha.map((casa, j) => (
                                <div  key={`${i}${j}`}></div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}