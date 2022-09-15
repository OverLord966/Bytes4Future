import styles from "./styles/styles.css"
/*
TODO

[x] - Criar uma lista a partir do array(tasks)

[x] - Para mapear arrays, é preciso recorrer ao .map
[x] - A função de mapeamento recebe como primeiro argumento o elemento do array
[x] - Cada elemento do array passa a ser um <li>
[x] - O conteúdo de cada <li> deve ser o proprio elemento do array (task)
[x] - Adicionar uma prop `key` única aos elementos mapeados




[x] - Criar um state para guardar a própria lista(array)

[x] - Cada item deve incluir uma Checkbox
[x] - A checkbox deve alterar o estado de conclusão do seu item
    [x] - Saber o indice do elemento que foi selecionado
    [x] - alterar o estado
[x] - Deve ser possível guardar o estado de conclusão de uma tarefa

[x] - apresenta os itens concluídos como rasurados
    [x] - indentificar que itens estao concluidos
    [x] - saber como rasurar 


TASKS -> TASK[]

TASK -> {
    content: string,
    done: boolean
}
*/

import { useState } from "react"

export function TaskList({ tasks }) {
    const [state, setState] = useState(tasks.map(task => ({ content: task, done: false })))

    const handleChecked = (index) => {
        setState((prevState) => {
            return prevState.map((task, i) => i === index ? ({ ...task, done: !task.done }) : task)
        })
    }

    return (
        <div>
            <ul>
                {
                    state.map((task, i) => (
                        <div key={`${task.content}${i}`}>
                            <li>
                                <input onClick={() => handleChecked(i)} type={"checkbox"} />
                                <span className={task.done ? styles.done : ""}>{task.content}</span>
                            </li>
                        </div>
                    ))
                }
            </ul>
            <button onClick={() => console.log(state.map(task => task.done))}>CLICA</button>
        </div>
    )
}