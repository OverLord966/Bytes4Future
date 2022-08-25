const jogo = {
    tabuleiro: [
        ["_", "_", "_"],
        ["_", "_", "_"],
        ["_", "_", "_"],
    ]
}
const jogo2 = {
    tabuleiro: [
        ["X", "O", "X"],
        ["X", "X", "O"],
        ["O", "X", "O"],
    ]
}
const jogo3 = {
    tabuleiro: [
        ["X", "_", "_"],
        ["O", "X", "_"],
        ["_", "_", "X"],
    ]
}

const jogo4 = {
    tabuleiro: [
        ["X", "_", "_"],
        ["O", "O", "O"],
        ["_", "_", "_"],
    ]
}
const jogo5 = {
    tabuleiro: [
        ["X", "X", "_"],
        ["O", "X", "_"],
        ["_", "X", "_"],
    ]
}

console.log(verificarFimDoJogo(jogo)) // undefined
console.log(verificarFimDoJogo(jogo2)) // undefined
console.log(verificarFimDoJogo(jogo3)) // "X"
console.log(verificarFimDoJogo(jogo4)) // "O"
console.log(verificarFimDoJogo(jogo5)) // "X"

function adicionarJogada(jogo, jogador, linha, coluna) {
    // const clone = JSON.parse(JSON.stringify(jogo))

    // if (jogo.tabuleiro[linha][coluna] === "_"
    //     && !verificarFimDoJogo(jogo)) {
    //     clone.tabuleiro[linha][coluna] = jogador
    // }

    // return clone

    if (jogo.tabuleiro[linha][coluna] === "_"
        && !verificarFimDoJogo(jogo)) {

        return {
            ...jogo,
            tabuleiro: jogo.tabuleiro
                .map((l, i) =>
                    l.map((c, j) => i === linha && j === coluna
                        ? jogador
                        : c))
        }
    }

    return jogo
}

// console.log(adicionarJogada(jogo, "X", 2, 2))

function obterJogadasPossiveis(jogo) {
    let jogadasPossiveis = []

    for (let i = 0; i < jogo.tabuleiro.length; i++) {
        for (let j = 0; j < jogo.tabuleiro[i].length; j++) {
            if (jogo.tabuleiro[i][j] === "_") {
                jogadasPossiveis.push({ linha: i, coluna: j })
            }
        }
    }

    return jogadasPossiveis
}

// console.log(obterJogadasPossiveis(
//     adicionarJogada(jogo, "O", 2, 1)
// ))

function verificarVencedor(jogo) {
    const sequencias = obtemSequencias(jogo)
    if (sequencias.includes("XXX")) return "X"
    if (sequencias.includes("OOO")) return "O"
    return undefined
}

function obtemSequencias(jogo) {
    // ["___", "___", "___", "___", "___", "___", "___", "___"]
    return obtemLinhas(jogo)
        .concat(obtemColunas(jogo))
        .concat(obtemDiagonais(jogo))
}

/* 
[
    "X__", "OX_",
    "___", "XO_",
    "_X_", "___", 
    "XX_", "_X_"
]
*/

function obtemLinhas(jogo) {
    let linhas = []

    for (let i = 0; i < jogo.tabuleiro.length; i++) {
        linhas.push(jogo.tabuleiro[i].join(""))
    }

    return linhas
}

function obtemColunas(jogo) {
    let colunas = []

    for (let i = 0; i < jogo.tabuleiro.length; i++) {
        // i = coluna
        let coluna = ""
        for (let j = 0; j < jogo.tabuleiro.length; j++) {
            // j = linha
            coluna += jogo.tabuleiro[j][i]
        }
        colunas.push(coluna)
    }

    return colunas
}

function obtemDiagonais(jogo) {
    let diagonais = ["", ""]

    for (let i = 0; i < jogo.tabuleiro.length; i++) {
        diagonais[0] += jogo.tabuleiro[i][i]
        diagonais[1] += jogo.tabuleiro[i][jogo.tabuleiro.length - 1 - i]
    }

    return diagonais
}


function verificarFimDoJogo(jogo) {
    return obterJogadasPossiveis(jogo).length === 0
        || verificarVencedor(jogo) !== undefined
}