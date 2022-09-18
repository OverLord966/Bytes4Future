import { useState } from "react"

function DataInput() {
    const [DataInput, setDataInput] = useState(0)

    const decrementar = () => {
        setDataInput((prevDataInput) => prevDataInput - 1)
    }
    const incrementar = () => {
        setDataInput((prevDataInput) => prevDataInput + 1)
    }

    return (
        <div role="content">
            <h3>Insere a tua data de nascimento.</h3>
            <button type="date"></button>
        </div>
    )
}

export default DataInput

/*
Cria um componente DataInput.
O componente deve incluir um título de nível três com o conteúdo: "Insere a tua data de nascimento."
O componente deve incluir uma div com o atríbuto role com o valor de content:
<div role="content">
</div>
Dentro da div content deve ser apresentado um parágrafo OU um input do tipo date.

Deve também existir um botão ao ser clicado que troca o seu texto e o conteúdo da div content, entre o parágrafo e o input.

O botão deve possuir 2 textos possíveis: "Alterar" ou "Mostrar".

Quando o botão exibe o texto "Alterar" deve ser renderizado o parágrafo

Quando o botão exibe o texto "Mostrar" deve ser renderizado o input.

O parágrafo deve ser renderizado com o conteúdo: "Nasceste no dia 04 do 10 de 1997!", em que os valores do dia, mês e ano vêm do valor do input.

Tem em conta que:

O componente DataInput deve ser exportado por omissão de um ficheiro "DataInput.js" ou "DataInput.jsx".

O ficheiro "DataInput.js" deve estar localizado na pasta src.
*/