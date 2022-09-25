import { useState } from "react";

export default function TwoLists() {
    const [nomes, setNomes] = useState([]);
    const [apelidos, setApelidos] = useState([]);
    const [input, setInput] = useState("");
    const [nomeAleatorio, setNomeAleatorio] = useState("");

    function addItem(lista) {
        if (lista == "nome") {
            setNomes((prevNomes) => [...prevNomes, input]);
        }
        if (lista == "apelido") {
            setApelidos((prevApelidos) => [...prevApelidos, input]);
        }
        setInput("");
    }

    function gerarNome() {
        const indiceNome = Math.floor(Math.random() * nomes.length);
        const indiceApelido = Math.floor(Math.random() * apelidos.length);

        setNomeAleatorio(`${nomes[indiceNome]} ${apelidos[indiceApelido]}`);
    }

    return (
        <div>
            <input
                value={input}
                type={"text"}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => addItem("nome")}>Adicionar nome</button>
            <button onClick={() => addItem("apelido")}>Adicionar apelido</button>
            <div role="list">
                {nomes.map((ele) => (
                    <span role="listitem">{ele}</span>
                ))}
            </div>
            <div role="list">
                {apelidos.map((ele) => (
                    <span role="listitem">{ele}</span>
                ))}
            </div>
            <div>
                <button onClick={gerarNome}>Gerar Nome</button>
            </div>
            {nomeAleatorio && <p role={"name"}>{nomeAleatorio}</p>}
        </div>
    );
}