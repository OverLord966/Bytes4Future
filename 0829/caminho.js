function calculaCaminho(matriz, inicio, final) {   
    let queue = [{...inicio, path: [inicio]}]
    // let i = 0;
    while(queue.length > 0) {
        const elemento = queue[0]
        queue = queue.slice(1)
        if (elemento.line === final.line && elemento.column === final.column) {
            return elemento.path
        }
        
        const dirs = [
            {line: 1, column: 0},
            {line: 0, column: 1},
            {line: -1, column: 0},
            {line: 0, column: -1},
        ]

        for(const {line, column} of dirs) {
            const l = elemento.line + line            
            const c = elemento.column + column
            
            if(matriz[l] !== undefined && matriz[l][c] !== undefined && matriz[l][c] !== "p") {
                queue.push({line: l, column: c, path: [...elemento.path, [{line: l, column: c}]]})
            }
        }
    }

    return "Casa não encontrada!"
}

const matriz = [
    ["i", "p", "f", "", ""],
    ["", "p", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];
const inicio = {
    line: 0,
    column: 0
}
const final = {
    line: 0,
    column: 2
}

console.log(
calculaCaminho(matriz, inicio, final) 
)

/* [
    {line: 0, column: 2},
    {line: 0, column: 3},
    {line: 0, column: 4},
]*/